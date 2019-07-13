const express = require('express')
const router = express.Router()
const db = require('../../db/db');

router.post('/api/v1/players', (req, res) => {
  
  const player = {
   name: req.body.name,
   email:req.body.email
  }
  const database = db.get()
    console.log(player)
  database.collection('players').save(player, (err, result) => {
    if (err) console.log(err)
    console.log(result)
  })
  res.status(200).send('Player salvo com sucesso')
 
});

module.exports = router