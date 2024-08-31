// import Emission from '../models/emissionModel.js';

// export async function storeEmissionData(req, res) {
//   try {
//     const emissionData = new Emission(req.body);
//     if (!emissionData.coalAmount || !emissionData.total) {
//       return res.status(400).json({ message: 'Missing required fields' });
//     }

//     await emissionData.save();
//     res.status(201).json({ message: 'Emission data saved successfully', emissionData });
//   } catch (error) {
//     console.error('Error saving emission data:', error);
//     res.status(500).json({ message: 'Error saving emission data', error: error.message });
//   }
// }

import Emission from '../models/emissionModel.js';

// Store the emission data
export async function storeEmissionData(req, res) {
  try {
    console.log('Request received:', req.body); // Log the incoming request data

    // Create a new Emission instance with the request body
    const emissionData = new Emission(req.body);

    // Temporarily disable validation checks for testing
    // if (!emissionData.coalAmount || !emissionData.total) {
    //   return res.status(400).json({ message: 'Missing required fields' });
    // }

    // Save the data to the database
    await emissionData.save();

    // Send a success response
    res.status(201).json({ message: 'Emission data saved successfully', emissionData });
  } catch (error) {
    console.error('Error saving emission data:', error); // Log the error for debugging
    res.status(500).json({ message: 'Error saving emission data', error: error.message });
  }
}
