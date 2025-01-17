// Model
const { Sequelize, Op } = require("sequelize");
const TodoModel = require("../model/TodoModel");

// util function
const Formatted = require("../util/FormattedDateFunction");

exports.getAll = async (req, res, next) => {
  const date = req?.query?.date;
  if (!date) {
    try {
      const allTodo = await TodoModel.findAll({
        order : [['todo_date', 'ASC']]
      });
      return res.json(allTodo);
    } catch (error) {
      console.log(error);
      const err = new Error();
      err.location = "controller";
      err.message = "getAll find fail";
      err.status = false;
      return next(err);
    }
  }

  if (date) {
    const formatedDate = Formatted(date);

    const dateTodos = await TodoModel.findAll({
      where: Sequelize.where(
        Sequelize.fn("DATE", Sequelize.col("todo_date")),
        formatedDate
      ),
    });
    
    console.log(dateTodos);
    return res.json(dateTodos)

  }
};

exports.getOne = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  try {
    const findOne = await TodoModel.findOne({ where: { todo_id: id } });
    return res.json({
      status: true,
      message: "Success Get One Data",
      data: findOne,
    });
  } catch (error) {
    console.log(error);
    const err = new Error();
    err.location = "controller";
    err.message = "getOne controller Failed";
    err.status = false;
    return next(err);
  }
};

exports.postOne = async (req, res, next) => {
  const { title, date, departure, desc, add_items } = req.body;

  try {
    const postData = await TodoModel.create({
      todo_title: title,
      todo_desc: desc,
      todo_date: new Date(date),
      todo_departure: new Date(departure),
      todo_add_items: add_items,
    });
    return res.json({ status: true, message: "Post Success", data: postData });
  } catch (error) {
    const err = new Error();
    err.location = "controller";
    (err.status = false), (err.message = "todo post failed");
    return next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);

  try {
    const selectTodo = await TodoModel.findOne({ where: { todo_id: id } });
    const deleteTodo = await selectTodo.destroy();
    return res.json({
      status: true,
      message: "Success Delete Todo",
      data: deleteTodo,
    });
  } catch (error) {
    console.log(error);
    const err = new Error();
    err.location = "controller";
    err.status = false;
    err.message = "Delete todo Fail";
    return next(err);
  }
};

exports.updateOne = async (req, res, next) => {
  const id = req.params.id;

  const { todo_title, todo_departure, todo_date, todo_desc, todo_add_items } =
    req.body;

  try {
    await TodoModel.update(
      { todo_title, todo_departure, todo_date, todo_desc, todo_add_items },
      { where: { todo_id: id } }
    );
    return res.json({ status: true, message: "Success Update-ONE" });
  } catch (error) {
    console.log(error);
    const err = new Error();
    err.location = "controller";
    err.status = fasle;
    err.message = "Update Todo Fail";
    return next(err);
  }
};
