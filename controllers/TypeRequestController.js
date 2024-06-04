import BaseController from "./BaseController.js";
import service from "../services/TypeRequestService.js";
import p from "./PreferenceController.js";
import l from "./LocationController.js";

class TypeRequestController extends BaseController {
    constructor(service) {
        super(service);        
    }

    async getByStatus(){
        return await service.getAll();
    }

    async getById(id){
        return await service.getById(id);
    }

    async insert(data){
        if(this.get(id) != null){
            p.insert(data.preferenceCode);
            l.insert(data.locationCode); //maybe has to be changed
            return ;
        }       
        return await service.insert(data);
    }

    async update(id, data){
        return await service.update(id, data);
    }
}
export default new TypeRequestController(service);