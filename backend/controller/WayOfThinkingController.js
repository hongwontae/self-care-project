const WotModel = require("../model/WayOfThinkingModel");

exports.postOne = async (req, res, next) => {
  const { wotLine, highlight } = req.body;

  try {
    const postData = await WotModel.create({ wotLine: wotLine, highlight });
    return res.json({
      status: true,
      message: "Success Save WOT",
      data: postData,
    });
  } catch (error) {
    console.log(error);
    const err = new Error();
    err.location = "controller";
    err.status = false;
    err.message = "Post failed";
    return next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const allData = await WotModel.findAll();
    return res.json({
      status: true,
      message: "Success All data",
      data: allData,
    });
  } catch (error) {
    console.log(error);
    const err = new Error();
    err.location = "controller";
    err.status = false;
    err.message = "getAll fail";
    return next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  try {
    const deleteData = await WotModel.findOne({ where: { wotId: id } });
    console.log(deleteData);
    await deleteData.destroy();
    return res.json({ status: true, message: "Success Delete Data" });
  } catch (error) {
    console.log(error);
  }
};

exports.updateLine = async (req, res, next) => {
  const id = req.params.id;


  try {
    const updatefind = await WotModel.findOne({ where: { wotId: id } });
    if (updatefind.highlight) {
      const updateLine = await WotModel.update(
        { highlight: false },
        { where: { wotId: id } }
      );
      return res.json(updateLine);
    } else if (!updatefind.highlight) {
      const updateLine = await WotModel.update(
        { highlight: true },
        { where: { wotId: id } }
      );
      return res.json(updateLine);
    }
  } catch (error) {
    console.log(error);
  }
};
