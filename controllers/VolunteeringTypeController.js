import BaseController from "./BaseController.js";
import service from "../services/VolunteeringTypeService.js"

class VolunteeringTypeController extends BaseController {
    constructor(service) {
        super(service);        
    }
}
export default new VolunteeringTypeController(service);