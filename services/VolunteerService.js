import repo from "../repositories/VolunteerRepo.js";
import BaseService from "./BaseService.js";

class VolunteerService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}
export default new VolunteerService(repo);