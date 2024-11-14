import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetTrainer({ onDeleteTrainer }) {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/trainer/");
        setTrainers(response.data);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };
    fetchTrainers();
  }, []);

  const handleDelete = async (trainerId) => {
    try {
      await axios.delete(`http://localhost:3000/api/trainer/${trainerId}`);
      setTrainers(trainers.filter((trainer) => trainer._id !== trainerId));
      if (onDeleteTrainer) {
        onDeleteTrainer(trainerId);
      }
    } catch (error) {
      console.error("Error deleting trainer:", error);
    }
  };

  return (
    <div>
      <h2>Trainer List</h2>
      {trainers.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Skills</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer) => (
              <tr key={trainer._id}>
                <td>{trainer.trainer_name}</td>
                <td>{trainer.trainer_location}</td>
                <td>{trainer.trainer_skills}</td>
                <td>{trainer.trainer_phone}</td>
                <td>
                  <Link to={`/edit-trainer/${trainer._id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(trainer._id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No trainers found.</p>
      )}
    </div>
  );
}

export default GetTrainer;
