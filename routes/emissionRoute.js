import { Router } from 'express';
import { storeEmissionData } from '../controllers/emissionController.js';
const router = Router();

// POST route to store emission data
router.post('/save', storeEmissionData);

export default router;
// import { Router } from 'express';

// const router = Router();

// router.post('/test', (req, res) => {
//   res.status(200).json({ message: 'Test route working', data: req.body });
// });

// export default router;