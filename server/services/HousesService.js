import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"


class HousesService {
  async getAll() {
    const houses = await dbContext.Houses.find()
    return houses
  }

  async createHouse(houseData) {
    const newHouse = await dbContext.Houses.create(houseData)
    return newHouse
  }

  async remove(id) {
    const house = await dbContext.Houses.findById(id)
    if (!house) throw new BadRequest('no house at id' + id)
    await house.remove()
    return `deleted your house`
  }

  async update(id, houseData) {
    const original = await dbContext.Houses.findById(id)
    if (!original) throw new BadRequest("no house at id" + id)
    original.imgUrl = houseData.imgUrl ? houseData.imgUrl : original.imgUrl
    original.price = houseData.price !== undefined ? houseData.price : original.price
    original.bedRooms = houseData.bedRooms !== undefined ? houseData.bedRooms : original.bedRooms
    original.bathRooms = houseData.bathRooms !== undefined ? houseData.bathRooms : original.bedRooms
    original.squareFeet = houseData.squareFeet !== undefined ? houseData.squareFeet : original.squareFeet

    await original.save()
    return original
  }
}

export const housesService = new HousesService()