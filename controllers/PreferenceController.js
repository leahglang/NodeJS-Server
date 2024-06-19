import BaseController from "./BaseController.js";
import service from "../services/PreferenceService.js"

class PreferenceController extends BaseController {
    constructor(service) {
        super(service);  
        this.type = "prefernce";      
    }
}
export default new PreferenceController(service);

