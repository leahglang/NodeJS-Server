import VolunteerModel from '../models/VolunteerModel.js';
import connect from './db.js';

class VolunteerRepo extends BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll() {
        return await this.model.find({}).exec();
    }

    async getById(id) {
        try {
            let volunteer = await this.model.findById(id);
            if (!volunteer) {
                let error = new Error('volunteer is not found');
                error.statusCode = 404;
                throw error;
            }

        return volunteer;
        } 
        catch (errors) {
            console.log(errors.message);
            throw errors;
        }
    }

    async insert(data) {
        try {
            let volunteer = await this.model.create(data);
            if (volunteer) {
                return volunteer;
            } 
            else {
                throw new Error('Something wrong happened');
            }
        } 
        catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    
}
export default new VolunteerRepo(VolunteerModel);
