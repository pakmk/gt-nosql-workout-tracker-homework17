const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((data) => {
    res.json(data);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.update(
    {
      _id: req.params.id,
    },
    {
      $push: { exercises: req.body },
    }
  ).then((data) => {
    res.json(data);
  });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((data) => {
    res.json(data);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((data) => {
    res.json(data);
  });
});

module.exports = router;
