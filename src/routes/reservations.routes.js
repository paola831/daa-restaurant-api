const express = require('express');
const router = express.Router();

const reservationController = require('../controllers/reservations.controller');

router.get('/', reservationController.getAllReservations);
router.post('/', reservationController.createReservation);
router.get('/:id',reservationController.updateReservation);
router.put('/:id', reservationController.deleteReservation);
router.delete('/:id',(req,res)=> res.status(204).send());

module.exports = router;
