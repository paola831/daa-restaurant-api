const express = require('express');
const router = express.Router();


router.post('/',(req,res)=> res.send(200).send('POST /home secceeded'));


module.exports = router;