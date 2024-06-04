import BaseController from "./BaseController.js";
import service from "../services/PreferenceService.js"

class PreferenceController extends BaseController {
    constructor(service) {
        super(service);        
    }
}
export default new PreferenceController(service);