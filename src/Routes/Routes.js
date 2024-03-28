import express from "express";
const router = express.Router();

import {
  createManager,
  viewAllManagers,
  viewManagerById,
  updateManagerById,
} from "../Controllers/ManagerController.js";

import {
  createProperty,
  createProperties,
  viewAllProperties,
  viewPopular,
  viewPropertyByKey,
  viewPropertyById,
  updatePropertyById,
} from "../Controllers/PropertyController.js";
//* Manager APIs

router.post("/managers/create", createManager);
router.get("/managers/view", viewAllManagers);
router.get("/managers/view/:managerId", viewManagerById);
router.put("/managers/update/:managerId", updateManagerById);

//* property APIs
router.post("/properties/create", createProperty);
router.post("/properties/createAll",  createProperties)
router.get("/properties/view", viewAllProperties);
router.get('/properties/view/popular', viewPopular)
router.get('/properties/view/:key', viewPropertyByKey)
router.get("/properties/view/:propertyId", viewPropertyById);
router.put("/properties/update/:propertyId", updatePropertyById);

export default router