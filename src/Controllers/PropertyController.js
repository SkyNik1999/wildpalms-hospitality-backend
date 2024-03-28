import Property from "../Models/PropertyModel.js";

// API to create a property
export const createProperty = async (req, res) => {
  try {
    const data = req.body;


    const alphaNums = Math.floor(Math.random() * 900) + 100;

    const key = 'wp-' + data.name.toLowerCase().split(" ").join("-") + `-${alphaNums}`;

    data.key = key;
    const property = new Property(data);
    await property.save();
    res.status(201).send(property);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createProperties = async (req, res) => {
  try {
    const propertiesData = req.body; // Assuming req.body is an array of property objects

    const properties = [];
    for (const propertyData of propertiesData) {
      const alphaNums = Math.floor(Math.random() * 900) + 100;
      const key =
        propertyData.name.toLowerCase().split(" ").join("-") + `-${alphaNums}`;
      propertyData.key = key;
      const property = new Property(propertyData);
      await property.save();
      properties.push(property);
    }

    res.status(201).send(properties);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// API to view all properties
export const viewAllProperties = async (req, res) => {
  try {
    const properties = await Property.find({ key: { $ne: undefined }, isDeleted: false });

    const count = properties.length;

    const response = {
      count: count,
      data: properties,
    };
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
};

// API to view popular properties

export const viewPopular = async (req, res) => {
  try {
    const popularProperties = await Property.find({
      isPopular: true,
      isDeleted: false,
    });

    const count = popularProperties.length;

    res.send({ count: count, data: popularProperties });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const viewPropertyByKey = async (req, res) => {
  try {
    const key = req.params.key;
    const property = await Property.find({ key: key, isDeleted: false });

    if (!property) {
      res.status(404).send({ message: "Property not found" });
    }

    res.status(200).send(property);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// API to view a specific property by ID

export const viewPropertyById = async (req, res) => {
  const propertyId = req.params.propertyId;
  try {
    const property = await Property.findById(propertyId);

    if (!property) {
      return res.status(404).send({ message: "property not found" });
    }
    res.send(property);
  } catch (error) {
    res.status(500).send(error);
  }
};
// API to update a specific property by ID

export const updatePropertyById = async (req, res) => {
  const propertyId = req.params.propertyId;

  const {pictures} = req.body;
  try {
    const property = await Property.findById(propertyId);

    if (pictures) {
      property.pictures = pictures;
    }

    if (!property) {
      return res.status(404).send({ message: "property not found" });
    }

    await property.save();

    res.status(200).send({status: true, message: 'updated successfully'})
  } catch (error) {
    res.status(400).send(error);
  }
};
