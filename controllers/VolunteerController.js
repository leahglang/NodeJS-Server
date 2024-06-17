import BaseController from "./BaseController.js";
import service from "../services/VolunteerService.js"

class VolunteerController extends BaseController {
    constructor(service) {
        super(service);  
        this.type = "volunteer";      
    }

    async insert(req, res, next) {
        try {
            const response = await this.service.insert(req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default new VolunteerController(service);

