import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function EditTrainer({ trainers, onUpdateTrainer }) {
  const [trainerName, setTrainerName] = useState('');
  const [trainerLocation, setTrainerLocation] = useState('');
  const [trainerSkills, setTrainerSkills] = useState('');
  const [trainerPhone, setTrainerPhone] = useState('');
  const { id } = useParams(); // Get trainer ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    const trainer = trainers.find(trainer => trainer._id === id);
    if (trainer) {
      setTrainerName(trainer.trainer_name);
      setTrainerLocation(trainer.trainer_location);
      setTrainerSkills(trainer.trainer_skills);
      setTrainerPhone(trainer.trainer_phone);
    }
  }, [id, trainers]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTrainer = {
      trainer_name: trainerName,
      trainer_location: trainerLocation,
      trainer_skills: trainerSkills,
      trainer_phone: trainerPhone
    };

    try {
      const response = await axios.put(`http://localhost:3000/api/trainer/${id}`, updatedTrainer);
      
      if (response.status === 200) {
        onUpdateTrainer(response.data);  // Update the parent component
        navigate('/');
      }
    } catch (error) {
      console.error("Error updating trainer:", error);
      alert("An error occurred while updating the trainer.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Trainer</h2>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Name:</label>
        <input
          type="text"
          className="form-control"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Location:</label>
        <input
          type="text"
          className="form-control"
          value={trainerLocation}
          onChange={(e) => setTrainerLocation(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Skills:</label>
        <input
          type="text"
          className="form-control"
          value={trainerSkills}
          onChange={(e) => setTrainerSkills(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label">Trainer Phone:</label>
        <input
          type="number"
          className="form-control"
          value={trainerPhone}
          onChange={(e) => setTrainerPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Update Trainer</button>
    </form>
  );
}

export default EditTrainer;
