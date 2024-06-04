import VolunteerModel from '../models/VolunteerModel.js';
import BaseRepo from "./BaseRepo.js";

class VolunteerRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new VolunteerRepo(VolunteerModel);
