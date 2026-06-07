const express = require('express');
const router = express.Router();
const DocumentsController = require('../controllers/documentsController');
const { auth, isManager, isEmployee } = require('../middleware/auth');

// Routes Manager
router.post('/',      auth, isManager, DocumentsController.uploadDocument);
router.get('/',       auth, isEmployee, DocumentsController.getAllDocuments);
router.put('/:id',    auth, isManager, DocumentsController.updateDocument);
router.delete('/:id', auth, isManager, DocumentsController.deleteDocument);

// Routes Employé
router.get('/employee/:employeeId', auth, isEmployee, DocumentsController.getDocumentsByEmployee);

// Route legacy /my (si utilisée côté employé avec query param)
router.get('/my', auth, isEmployee, DocumentsController.getMyDocuments);

module.exports = router;
