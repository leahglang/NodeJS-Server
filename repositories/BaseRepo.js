import connect from './db.js';

class BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    async getAll(params) {
        const sPipe = byParams(params);
        const pipeline = buildPipeline(sPipe);
        let requests = await this.model.aggregate(pipeline).exec();
        return await requests;
    }

    async getById(id) {
        try {
            // const sPipe = 
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
   
    async update(id, data) {
        try {
            let item = await this.model.findByIdAndUpdate(id, data, { new: true });
            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

}
export default BaseRepo;