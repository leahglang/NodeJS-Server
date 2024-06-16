import repo from "../repositories/VolunteerRepo.js";
import BaseService from "./BaseService.js";

class VolunteerService extends BaseService {
    constructor(repo) {
        super(repo);
    } 
    async insert(data){
        try{
            let volunteer = await this.repo.insert(data);
            return volunteer;
        }
        catch(errors){
            console.log(errors);
            throw new Error("unable to add volunteer.")
        }
    }
}
export default new VolunteerService(repo);



