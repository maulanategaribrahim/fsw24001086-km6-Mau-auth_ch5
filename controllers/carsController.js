const { Car, User } = require("../models");
const imagekit = require("../lib/imagekit");
const ApiError = require("../utils/apiError");
const { Op } = require("sequelize");

const createCar = async (req, res, next) => {
  try {
    const { name, price, type, category } = req.body;
    // validasi untuk check apakah car nya udah ada
    const car = await Car.findOne({
      where: {
        name,
      },
    });

    if (car) {
      return next(new ApiError("nama car sudah ada", 400));
    }

    const file = req.file;
    let img;
    if (file) {
      // dapatkan extension file nya
      const split = file.originalname.split(".");
      const extension = split[split.length - 1];

      // upload file ke imagekit
      const uploadedImage = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      });
      img = uploadedImage.url;
    }

    const newCar = await Car.create({
      name,
      price,
      type,
      category,
      imageUrl: img,
      createdBy: req.user.id,
      updatedBy: req.user.id,
    });

    res.status(201).json({
      status: "Success",
      data: {
        newCar,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findCars = async (req, res, next) => {
  try {
    const { name, category } = req.query;
    const condition = {};
    if (name) condition.name = { [Op.iLike]: `%${name}%` };

    if (category) condition.name = { [Op.iLike]: `${category}%` };

    const cars = await Car.findAll({
      include: ["CreatedBy", "UpdatedBy", "DeletedBy"],
      where: condition,
      order: [["id", "ASC"]],
    });

    if (cars.length === 0) {
      next(new ApiError("Data tidak ditemukan", 404));
    } else {
      res.status(200).json({
        status: "Success",
        data: {
          cars,
        },
      });
    }
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const findCarById = async (req, res, next) => {
  try {
    const car = await Car.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        car,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateCar = async (req, res, next) => {
  try {
    const { name, price, type, category } = req.body;
    console.log(name);
    const car = await Car.findOne({
      where: {
        name,
      },
    });

    if (car) {
      return next(new ApiError("nama car sudah ada", 400));
    }

    const file = req.file;
    let img;
    if (file) {
      // dapatkan extension file nya
      const split = file.originalname.split(".");
      const extension = split[split.length - 1];

      // upload file ke imagekit
      const uploadedImage = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      });
      img = uploadedImage.url;
    }

    await Car.update(
      {
        name,
        price,
        type,
        category,
        imageUrl: img,
        updatedBy: req.user.id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "Success",
      message: "sukses update car",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteCar = async (req, res, next) => {
  try {
    await Car.update(
      {
        deletedBy: req.user.id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    await Car.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "sukses delete car",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createCar,
  findCars,
  findCarById,
  updateCar,
  deleteCar,
};
