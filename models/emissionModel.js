// models/Emission.js
import { Schema, model } from 'mongoose';

const EmissionSchema = new Schema({
  mineLocation: { type: String },
  mineSize: { type: Number },
  fuelType: { type: String},
  fuelQuantity: { type: Number },
  electricityUsage: { type: String },
  electricityConsumed: { type: Number },
  excavationTool: { type: String },
  electricTool: { type: String },
  coalAmount: { type: Number,  },
  hoursWorked: { type: Number,},
  areaCovered: { type: Number,  },
  fuelEfficiency: { type: Number, },
  fuelOfTransport: { type: Number,  },
  distanceTravelled: { type: Number,  },
  waterUsage: { type: Number,  },
  wasteGenerated: { type: Number, },
  employees: { type: Number,  },
  emissions: { type: Number,  },
  fuelEmission: { type: Number,  },
  transportEmission: { type: Number, },
  energy: { type: Number,  },
  capitaEmissions: { type: Number,  },
  finalEmission: { type: Number,  },
  date: { type: Date, default: Date.now }
});

const Emission = model('Emission', EmissionSchema);
export default Emission;
