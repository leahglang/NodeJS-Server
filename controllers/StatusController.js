import BaseController from "./BaseController.js";
import service from "../services/StatusService.js"

class StatusController extends BaseController {
    constructor(service) {
        super(service);  
        this.type = "status";      
    }
}
export default new StatusController(service);

