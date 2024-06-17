import VolunteerModel from '../models/VolunteerModel.js';
import connect from './db.js';

class VolunteerRepo {
    constructor(model) {
        this.model = model;
        connect();
    }

    async getAll() {
        let v = await this.model.find({}).exec();
        console.log(v);
        return v;
    }

    async getById(id) {
        try {
            let volunteer = await this.model.findById(id);
            // if (!volunteer) {
            //     let error = new Error('volunteer is not found');
            //     error.statusCode = 404;
            //     throw error;
            // }

            return volunteer;
        }
        catch (errors) {
            console.log(errors.message);
            throw new Error('Something wrong happened');
        }
    }

    async insert(data) {
        try {
            let volunteer = await this.model.create(data);
            return volunteer;
        }
        catch (error) {
            console.log(error.message);
            throw error;
        }
    }

}
export default new VolunteerRepo(VolunteerModel);
