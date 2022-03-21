const express = require("express");
const { createPatient, getAllPatients, updatePatient, deletePatient, getSinglePatient, deleteAllPatients } = require("../controllers/patientController");

const router = express.Router();

router.route("/patient").post(createPatient).get(getAllPatients).delete(deleteAllPatients);

router.route("/patient/:id").get(getSinglePatient).put(updatePatient).delete(deletePatient);


module.exports = router;







