import LocationModel from '../models/LocationModel.js';
import BaseRepo from "./BaseRepo.js";

class LocationRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new LocationRepo(LocationModel);