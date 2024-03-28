import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const propertySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter a name"],
    },

    key: {
      type: String,
    },

    features: {
      type: Object,
      default: {},
    },

    description: {
      type: String,
    },

    isPopular: {
      type: Boolean,
      default: false,
    },

    maxBed: {
      type: Number,
      required: [true, "Please enter a value for Max no. of Beds."],
    },
    maxPeople: {
      type: Number,
      required: [true, "Please enter a value for Max no. of People."],
    },
    maxBath: {
      type: Number,
      required: [true, "Please enter a value for Max no. of Bathrooms."]

    },
    pricePerDay: {
      type: String,
      required: [true, "Please enter a price"],
    },
    location: {
      type: String,
      trim: true,
      required: [true, "Please enter a location"],
    },

    propertyType: {
      type: String,
      enum: ["House", "Cottage", "Flat", "Villa", "Luxury Villa"],
    },
    rating: {
      type: Number,
      required: [true, "Please enter an average rating."],
    },
    pictures: {
      type: [],
    },
    manager: {
      type: ObjectId,
      ref: "Manager",
      required: [true, "Please enter the manager Id"],
    },
    deletedAt: {
      type: Date,
      default: null, // or use a function to set current timestamp
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
