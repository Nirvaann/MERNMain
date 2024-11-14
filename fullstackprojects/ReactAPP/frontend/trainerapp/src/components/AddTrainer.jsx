
import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddTrainer({ onAddTrainer }) {
  const [trainerName, setTrainerName] = useState('');
  const [trainerLocation, setTrainerLocation] = useState('');
  const [trainerSkills, setTrainerSkills] = useState('');
  const [trainerPhone, setTrainerPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newTrainer = {
      trainer_name: trainerName,
      trainer_location: trainerLocation,
      trainer_skills: trainerSkills,
      trainer_phone: trainerPhone
    };

    try {
      const response = await axios.post('http://localhost:3000/api/trainer/', newTrainer);
      
      if (response.status === 201) {
        onAddTrainer(response.data);  // Update the parent component if needed
        setTrainerName('');
        setTrainerLocation('');
        setTrainerSkills('');
        setTrainerPhone('');
        navigate('/');
      }
    } catch (error) {
      console.error("Error adding trainer:", error);
      alert("An error occurred while adding the trainer.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Trainer</h2>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Name:</label>
        <input type="text" className="form-control" value={trainerName} onChange={(e) => setTrainerName(e.target.value)} required />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Location:</label>
        <input type="text" className="form-control" value={trainerLocation} onChange={(e) => setTrainerLocation(e.target.value)} required />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Skills:</label>
        <input type="text" className="form-control" value={trainerSkills} onChange={(e) => setTrainerSkills(e.target.value)} required />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Phone:</label>
        <input type="Number" className="form-control" value={trainerPhone} onChange={(e) => setTrainerPhone(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Trainer</button>
    </form>
  );
}

export default AddTrainer;
