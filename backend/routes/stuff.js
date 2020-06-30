const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

//Middleware //

router.post('/', stuffCtrl.createThing);
router.put('/:id', stuffCtrl.putThing);
router.delete('/:id', stuffCtrl.deleteThing);
router.get('/:id', stuffCtrl.getOneStuff);
router.get('/', stuffCtrl.getAllStuff);

module.exports = router;