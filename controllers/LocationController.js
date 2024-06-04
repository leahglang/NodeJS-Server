import BaseController from "./BaseController.js";
import service from "../services/LocationService.js"

class LocationController extends BaseController {
    constructor(service) {
        super(service);        
    }
}
export default new LocationController(service);