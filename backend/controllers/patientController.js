const Patient = require('../models/newpatient');

// Create Patient
exports.createPatient = async (req, res) => {
 try {
  const { name, age, contact, address, gender, diagnostic } = req.body;
  const patients = await Patient.create({
   name, age, contact, address, gender, diagnostic
  });

  res.status(201).json({
   success: true,
   patients,
   message: "create patient successfully"
  });
 } catch (error) {
  res.status(500).json({
   success: false,
   error: error.message,

  });
 }
};

// get All Patient

exports.getAllPatients = async (req, res) => {
 try {
  const patients = await Patient.find({});
  res.status(200).json({
   success: true,
   patients,
   message: "get patient successfully"
  });
 } catch (error) {
  res.status(500).json({
   success: false,
   error: error.message,
  });
 }
};

// get single patient
exports.getSinglePatient = async (req, res) => {
 try {
  const patient = await Patient.findById(req.params.id);
  if (!patient) {
   return res.status(500).json({
    success: false,
    error: 'Patient not found'
   });
  }

  res.status(200).json({
   success: true,
   patient
  });
 } catch (error) {
  res.status(500).json({
   success: false,
   error: error.message,
  });
 }
};

// update patient
exports.updatePatient = async (req, res) => {
 try {
  let patient = await Patient.findById(req.params.id);
  if (!patient) {
   return res.status(500).json({
    success: false,
    message: 'Patient not found'
   });
  }
  patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
   new: true,
   useFindAndModify: false,
   runValidators: true
  });
  await patient.save();
  res.status(200).json({ success: true, patient, message: "patient update successfully" });
 } catch (error) {
  res.status(500).json({
   success: false,
   error: error.message,
  });
 }
};

// delete patient
exports.deletePatient = async (req, res) => {
 try {
  const patient = await Patient.findById(req.params.id);
  if (!patient) {
   return res.status(500).json({
    success: false,
    message: 'Patient not found'
   });
  }
  await patient.remove();
  res.status(200).json({
   success: true,
   message: "patient is deleted successfully",
  });
 } catch (error) {
  res.status(500).json({
   success: false,
   error: error.message,
  });
 }
};


// delete all patient

exports.deleteAllPatients = async (req, res) => {
 try {
  const patient = await Patient.find({});

  await Patient.deleteMany({});
  res.status(200).json({
   success: true,
   message: "all patient is deleted successfully",

  });
 } catch (error) {
  res.status(500).json({
   success: false,
   message: error.message,
  });
 }
};