const express = require('express');
const router = express.Router();
const Register = require('../models/register');
const config = require('../config/database');
var ObjectId = require('mongodb').ObjectID;

router.post('/register', (req, res,next) => {

    
    let newRegister = new Register({
        
        name            : req.body.name,
        email           : req.body.email,
        gender          : req.body.gender,
        mobile          : req.body.mobile,
        blood_group         : req.body.blood_group,
        work            : req.body.work,
        state           : req.body.state,
        district            : req.body.district,
        voluntary           : req.body.voluntary,
        blood_donate            : req.body.blood_donate
     });
    newRegister.save()
      .then(data => {
         // res.send(data);
         res.json({success: true, msg:'Register registered'});
      }).catch(err => {
        res.json({success: false, msg:'Register registered Failed'});
      });

  });


  router.get('/register', (req, res,next) => {
    Register.find()
      .then(data => {
          res.send(data);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving Register."
          });
      });
  });


  router.delete('/register/:id', (req, res,next) => {

    Register.findByIdAndRemove(req.params.id)
      .then(registers => {
          if(!registers) {
              return res.status(404).send({
                  message: " Register not found with id " + req.params.id
              });
          }
          res.send({message: "Register deleted successfully!"});
      }).catch(err => {
          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Register not found with id " + req.params.id
              });
          }
          return res.status(500).send({
              message: "Could not delete Register with id " + req.params.id
          });
      });

  });


  router.put('/register/:id', (req, res,next) => {
    if (!ObjectId.isValid(req.params.id))
          return res.status(400).send(`No record with given id : ${req.params.id}`);

      var newRegister = {
        name            : req.body.name,
        email           : req.body.email,
        gender          : req.body.gender,
        mobile          : req.body.mobile,
        blood_group         : req.body.blood_group,
        work            : req.body.work,
        state           : req.body.state,
        district            : req.body.district,
        voluntary           : req.body.voluntary,
        blood_donate            : req.body.blood_donate
      };
      Register.findByIdAndUpdate(req.params.id, { $set: newRegister }, { new: true }, (err, doc) => {
          if (!err)
          {
           //res.send(doc);
           res.json({success: true, msg:'successfully  Updated Register'});
          }
          else
          {

            res.json({success: false, msg:'Failed to Update Register'});

          }
      });
  });

  router.get('/register/:id', (req, res,next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Register.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Register :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;