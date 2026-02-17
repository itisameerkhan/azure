import { container } from "../config/cosmos.js";

export const addData = async (req, res) => {
  try {
    const { id, name, age, role } = req.body;
    const data = { id, name, age, role };

    const { resource } = await container.items.create(data);

    res.json({
      success: true,
      message: "data added successfully",
      data: resource,
    });
  } catch (e) {
    console.log("we got error");
    console.log(e);
    res.json({
      success: false,
      message: "data not added",
      error: error.message,
    });
  }
};

export const getData = async (req, res) => {        
  try {
    const DBquery = "SELECT * FROM c";

    const { resources } = await container.items.query(DBquery).fetchAll();

    res.json({
      success: true,
      message: "data fetched successfully",
      data: resources,
    });
  } catch (e) {
    res.json({
      success: false,
      message: "unable to get data",
      error: e.message,
    });
  }
};
