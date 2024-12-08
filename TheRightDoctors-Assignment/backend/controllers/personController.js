const Person = require("../models/personModel");

// GET /person/:id - Retrieve a single person by ID
exports.getPerson = async (req, res) => {
  try {
    const person = await Person.find();
    return res.status(200).json(person);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

// PUT /person/:id - Update a person by ID
exports.updatePerson = async (req, res) => {
  const { id } = req.params;
  const { name, age, gender, mobile } = req.body;

  try {
    if (!name || !age || !gender || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedPerson = await Person.findByIdAndUpdate(
      id,
      { name, age, gender, mobile },
      { new: true } // Return the updated document
    );

    if (!updatedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    return res.status(200).json(updatedPerson);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

// POST /person - Create a new person
exports.createPerson = async (req, res) => {
  
  try {
    const { name, age, gender, mobile } = req.body;
    // Debug log
    console.log("Request Body:", req.body);

    if (!name || !age || !gender || !mobile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newPerson = new Person({ name, age, gender, mobile });
    const savedPerson = await newPerson.save();

    return res.status(201).json(savedPerson);
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

/// DELETE /person/:id - Delete a person by ID
exports.deletePerson = async (req, res) => {
  const { id } = req.params; // Extract `id` from params
  try {
    const deletedPerson = await Person.findByIdAndDelete(id); // Use the extracted ID
    if (!deletedPerson) {
      return res.status(404).json({ message: "Person not found" });
    }

    return res.status(200).json({ message: "Person deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};
