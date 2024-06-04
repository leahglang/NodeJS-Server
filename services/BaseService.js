class BaseService {
    constructor(repo) {
        this.repo = repo;
    }

    async getAll() {
        return this.repo.getAll();
        // try {
        //   const response = await this.service.getList(req.query);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async get(id) {
        res = this.getAll();
        return res.find(r => r.id == id)
        // const { id } = req.params;
        // try {
        //   const response = await this.service.getById(id);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async insert(data) {
        return this.repo.insert(data);
        // try {
        //   const response = await this.service.insert(req.body);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async update(id, data) {
        return this.repo.update(id, data);
        // const { id } = req.params;
        // try {
        //   const response = await this.service.update(id, req.body);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }
    
      async delete(id) {
        // const { id } = req.params;
        // try {
        //   const response = await this.service.delete(id);
        //   return res.status(response.statusCode).json(response);
        // }
        // catch (e) {
        //   next(e);
        // }
      }

}

export default BaseService;