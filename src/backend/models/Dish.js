import mongoose from "mongoose";

const DishSchema = new mongoose.Schema({
   id:Number,
   title: {
      type: String,
      required: true,
      unique: true,
   },
   description: {
      type: String,
      default: ''
     
   },
   titleEN: {
      type: String,
      required: true
   },
   descriptionEN: {
      type: String,
      default: ''
     
   },
   price: {
      type: Number,
      required: true,
   },
   category: {
      type: Number,
      required: true,
   },
   raiting: {
      type: Number,
      required: true,
   },
   weight: {
      type: Number,
      required: true,
   },
   imageUrl:String
}, {
   timestamps: true,
})

export default mongoose.model('Dish', DishSchema)