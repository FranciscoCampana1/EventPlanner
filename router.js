const express = require("express");
const router = express.Router();
const indexRouter = require('./routes/index')

//Ruta para index
router.use('/', indexRouter)

router.use('/api/auth', authRouter)


module.exports = router;
