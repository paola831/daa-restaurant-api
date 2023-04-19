const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> res.status(200).send('GET /reservations secceeded'));
router.post('/',(req,res)=> res.status(201).send('POST /reservations secceeded'));
router.get('/:id',(req,res)=> res.status(200).send('GET /reservations/:id secceeded'));
router.put('/:id',(req,res)=> res.status(200).send('PUT /reservations/:id secceeded'));
router.delete('/:id',(req,res)=> res.status(204).send());

module.exports = router;