import TypeRequestModel from '../models/TypeRequestModel.js';
import BaseRepo from "./BaseRepo.js";

class TypeRequestRepo extends BaseRepo {
    constructor(model) {
        super(model);
    }
}
export default new TypeRequestRepo(TypeRequestModel);
