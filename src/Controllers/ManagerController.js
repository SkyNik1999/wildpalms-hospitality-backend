import Manager from "../Models/ManagerModel.js";


// API to create a manager
export const createManager = async (req, res) => {
  try {
    const manager = new Manager(req.body);
    await manager.save();
    res.status(201).send(manager);
  } catch (error) {
    res.status(400).send(error);
  }
};


// API to view all managers
export const viewAllManagers = async (req, res) => {
    try {
      const managers = await Manager.find();
      res.send(managers);
    } catch (error) {
      res.status(500).send(error);
    }
  }

// API to view a specific manager by ID

export const viewManagerById =  async (req, res) => {
    const managerId = req.params.managerId;
    try {
      const manager = await Manager.findById(managerId);
      if (!manager) {
        return res.status(404).send({ message: "Manager not found" });
      }
      res.send(manager);
    } catch (error) {
      res.status(500).send(error);
    }
  }
// API to update a specific manager by ID

export const updateManagerById = async (req, res) => {
  const managerId = req.params.managerId;
  try {
    const manager = await Manager.findByIdAndUpdate(managerId, req.body, {
      new: true,
    });
    if (!manager) {
      return res.status(404).send({ message: "Manager not found" });
    }
    res.send(manager);
  } catch (error) {
    res.status(400).send(error);
  }
};

