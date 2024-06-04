import repo from "../repositories/TypeRequestRepo.js";
import BaseService from "./BaseService.js";

class TypeRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }
    async getAll(){
        str = this.repo.getAll();
        return str.filter(str => str.status == 1);
    }

    async getFiltered(location = 0, preference = 0){
        str = this.repo.getAll();
        return await str.filter(str => str.locationCode == location && str.preferenceCode == preference);
    }

    async get(id){
        str = this.repo.getAll();
        return str.find(str => str._id == id);
    }
}
export default new TypeRequestService(repo);