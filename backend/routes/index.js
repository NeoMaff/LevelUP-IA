const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const missionsRoutes = require('./missions');
const statsRoutes = require('./stats');

router.use('/auth', authRoutes);
router.use('/missions', missionsRoutes);
router.use('/stats', statsRoutes);

module.exports = router;