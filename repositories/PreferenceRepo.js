import PreferenceModel from '../models/PreferenceModel.js'
import BaseRepo from "./BaseRepo.js";

class PreferenceRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new PreferenceRepo(PreferenceModel);
