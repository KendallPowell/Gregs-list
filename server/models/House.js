import { Schema } from "mongoose";


export const HouseSchema = new Schema(
  {
    imgUrl: { type: String, required: true, maxLength: 255 },
    price: { type: Number, required: true, default: 1 },
    bedRooms: { type: Number, required: true },
    bathRooms: { type: Number, required: true },
    squareFeet: { type: Number }
  }, { timestamps: true, toJSON: { virtuals: true } })