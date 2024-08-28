import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
          return /@gmail\.com$/.test(v);
        },
        message: props => `${props.value} is not a valid Gmail address!`
      }
    },
    password: {
      type: String, 
      required: true,
      validate: {
        validator: function(v) {
          return /^(?=.*[!@#$%^&*])(?=.{8,})/.test(v);
        },
        message: props => `Password must be at least 8 characters long and contain at least one special character!`
      }
    },
    answer: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^\d{4}$/.test(v);
        },
        message: props => `Input must be exactly 4 digits!`
      }
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
