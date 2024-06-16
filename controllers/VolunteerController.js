import BaseController from "./BaseController.js";
import trc from "./TypeRequestController.js"
import service from "../services/VolunteerService.js"

class VolunteerController extends BaseController {
    constructor(service) {
        super(service);        
    }

    async getAll(){
        return await service.getAll();
    }

    async getById(id) {
        return await service.get(id);
    }

    async insert(id) {
        if(this.get(id) != null){
            trc.update(id, data);
            return;
        }            
        return await service.insert(id);
    }
}
export default new VolunteerController(service);