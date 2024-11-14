import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTrainer from "./AddTrainer";
import EditTrainer from "./EditTrainer";
import DeleteTrainer from "./DeleteTrainer";
const express = require('express');
const router = express.Router();

function App() {
  return (
    <Router>
        <nav>
        <Link to="/trainer-list">Trainer List</Link>
        <Link to="/add-trainer" className="ms-3">Add Trainer</Link>
      </nav>
      <Routes>
        <Route path="/add-trainer" element={<AddTrainer onAddTrainer={handleAddTrainer} />} />
        <Route path="/edit-trainer/:id" element={<EditTrainer onEditTrainer={handleEditTrainer} />} />
        <Route path="/delete-trainer/:id" element={<DeleteTrainer onDeleteTrainer={handleDeleteTrainer} />} />
      </Routes>
    </Router>
  );
}

const productController = require('../controllers/trainer');

router.get('/', productController.getAllItems);
router.get('/:id', productController.getItemById);
router.post('/', productController.createItem);
router.put('/:id', productController.updateItem);
router.delete('/:id', productController.deleteItem);

module.exports = router;