import mongoose from "mongoose";

const managerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter a email address"],
      trim: true,
      validate: {
        validator: function (email) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        message: "Please fill a valid email address",
        isAsync: false,
      },
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please enter a password"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Manager = mongoose.model("Manager", managerSchema);

export default Manager;
