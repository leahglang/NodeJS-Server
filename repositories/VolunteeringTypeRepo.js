import VolunteeringTypeModel from '../models/VolunteeringTypeModel.js';
import BaseRepo from "./BaseRepo.js";

class VolunteeringTypeRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new VolunteeringTypeRepo(VolunteeringTypeModel);