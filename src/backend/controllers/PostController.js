import DishModel from "../models/Dish.js";

export const create = async (req, res) => {
  try {
    const dish = new DishModel({
      id:req.body.id,
      title : req.body.title,
      description : req.body.description,
      titleEN : req.body.titleEN,
      descriptionEN : req.body.descriptionEN,
      price : req.body.price,
      category : req.body.category,
      raiting : req.body.raiting,
      weight : req.body.weight,
      imageUrl : req.body.imageUrl,
      user: req.userId
    });

    await dish.save();


    res.json(dish);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать блюдо",
    });
  }
};
