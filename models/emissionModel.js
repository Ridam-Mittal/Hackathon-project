// models/Emission.js
import { Schema, model } from 'mongoose';

const EmissionSchema = new Schema({
  mineLocation: { type: String, required: true },
  mineSize: { type: Number, required: true },
  fuelType: { type: String, required: true },
  fuelQuantity: { type: Number, required: true },
  electricityUsage: { type: String, required: true },
  electricityConsumed: { type: Number, required: true },
  excavationTool: { type: String, required: true },
  electricTool: { type: String, required: true },
  coalAmount: { type: Number, required: true },
  hoursWorked: { type: Number, required: true },
  areaCovered: { type: Number, required: true },
  fuelEfficiency: { type: Number, required: true },
  fuelOfTransport: { type: Number, required: true },
  distanceTravelled: { type: Number, required: true },
  waterUsage: { type: Number, required: true },
  wasteGenerated: { type: Number, required: true },
  employees: { type: Number, required: true },
  emissions: { type: Number, required: true },
  fuelEmission: { type: Number, required: true },
  transportEmission: { type: Number, required: true },
  energy: { type: Number, required: true },
  capitaEmissions: { type: Number, required: true },
  finalEmission: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Emission = model('Emission', EmissionSchema);
export default Emission;
