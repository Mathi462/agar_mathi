const express = require('express');
const router = express.Router();
const Event = require('../models/event');
const config = require('../config/database');
var ObjectId = require('mongodb').ObjectID;




// router.post('/addCurriculum', (req, res, next) => {
//   let newCurriculum = new Curriculum({

//     cid: req.body.cid,
//     curriculumName: req.body.curriculumName


//   });
//   newCurriculum.save()
//     .then(data => {
//        // res.send(data);
//         res.json({success: true, msg:'Curriculum registered'});
//     }).catch(err => {

//         res.json({success: false, msg:'Registered failed'});
//     });

// });


// router.get('/addCurriculum', (req, res,next) => {
//     Curriculum.find()
//     .then(curriculums => {
//         res.send(curriculums);
//     }).catch(err => {
//         // res.status(500).send({
//         //     message: err.message || "Some error occurred while retrieving notes."
//         // });
//         res.json({success: false, msg:' registered failed'});
//     });
// });


// router.put('/addCurriculum/:id', (req, res,next) => {

//     Curriculum.findOneAndUpdate(req.params.id, {
//         cid: req.body.cid ,
//         curriculumName: req.body.curriculumName
//     }, {new: true})
//     .then(curriculums => {
//         if(!curriculums) {
//             return res.status(404).send({
//                 message: "Curriculum not found with iid " + req.params.id
//             });
//         }
//         res.send(curriculums);
//     }).catch(err => {
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Curriculum not found with id " + req.params.id
//             });
//         }
//         return res.status(500).send({
//             message: "Error updating Curriculum with id " + req.params.id
//         });
//     });
// });


// router.put('/addCurriculum/:id', (req, res,next) => {
//     if (!(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     var newCurriculum = {
//         cid: req.body.cid,
//         curriculumName: req.body.curriculumName
//     };
//     Curriculum.findByIdAndUpdate(req.params.id, { $set: newCurriculum }, { new: true }, (err, doc) => {
//         if (!err)
//         {
//          //res.send(doc);
//          res.json({success: true, msg:'successfully  Updated Curriculum'});
//         }
//         else
//         {
//           res.json({success: false, msg:'Failed to Update Curriculum'});

//         }
//     });
// });

// router.delete('/addCurriculum/:id', (req, res,next) => {

//     Curriculum.findByIdAndRemove(req.params.id)
//      .then(curriculums => {
//          if(!curriculums) {
//              return res.status(404).send({
//                  message: " Curriculum not found with id " + req.params.id
//              });
//          }
//          res.send({message: "Curriculum deleted successfully!"});
//      }).catch(err => {
//          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
//              return res.status(404).send({
//                  message: "Curriculum not found with id " + req.params.id
//              });
//          }
//          return res.status(500).send({
//              message: "Could not delete Curriculum with id " + req.params.id
//          });
//      });
//  });



router.post('/event', (req, res,next) => {

    
    let newEvent = new Event({
        title       :   req.body.title,
        content     :   req.body.content,
        date        :   req.body.date,
        time        :   req.body.time,
        place       :   req.body.place,
        image_path  :   req.body.image_path
     });
    newEvent.save()
      .then(data => {
         // res.send(data);
         res.json({success: true, msg:'Event registered'});
      }).catch(err => {
        res.json({success: false, msg:'Event registered Failed'});
      });

  });


  router.get('/event', (req, res,next) => {
    Event.find()
      .then(data => {
          res.send(data);
      }).catch(err => {
          res.status(500).send({
              message: err.message || "Some error occurred while retrieving Event."
          });
      });
  });


  router.delete('/event/:id', (req, res,next) => {

    Event.findByIdAndRemove(req.params.id)
      .then(events => {
          if(!events) {
              return res.status(404).send({
                  message: " Event not found with id " + req.params.id
              });
          }
          res.send({message: "Event deleted successfully!"});
      }).catch(err => {
          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Event not found with id " + req.params.id
              });
          }
          return res.status(500).send({
              message: "Could not delete Event with id " + req.params.id
          });
      });

  });


  router.put('/event/:id', (req, res,next) => {
    if (!ObjectId.isValid(req.params.id))
          return res.status(400).send(`No record with given id : ${req.params.id}`);

      var newEvent = {
        title       :   req.body.title,
        content     :   req.body.content,
        date        :   req.body.data,
        time        :   req.body.time,
        place       :   req.body.place,
        image_path  :   req.body.image_path
      };
      Event.findByIdAndUpdate(req.params.id, { $set: newEvent }, { new: true }, (err, doc) => {
          if (!err)
          {
           //res.send(doc);
           res.json({success: true, msg:'successfully  Updated Event'});
          }
          else
          {

            res.json({success: false, msg:'Failed to Update Event'});

          }
      });
  });

  router.get('/event/:id', (req, res,next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Event.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Event :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;