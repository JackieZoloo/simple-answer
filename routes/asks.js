var express = require('express');
var router = express.Router();
const askCtrl = require("../controllers/asks")
/* GET users listing. */
router.get('/new', askCtrl.index);
router.post('/', askCtrl.create);
// router.get("/", askCtrl.index);
// router.get("/new", askCtrl.new);
// router.post('/', askCtrl.create);
// router.get('/:id', askCtrl.show);



module.exports = router;