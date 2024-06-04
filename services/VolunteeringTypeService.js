import repo from "../repositories/VolunteeringTypeRepo.js";
import BaseService from "./BaseService.js";

class VolunteeringTypeService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}
export default new VolunteeringTypeService(repo);