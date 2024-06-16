function byParams(params) {

    let query = { status: new RegExp('waiting', 'inTreatment') };
    let locationFilter = [];

    if (params) {
        if (params.status) {
            query.status = new RegExp(params.status, 'inTreatment');
        }

        if (params.pereference) {
            query.pereference = new RegExp(params.pereference, 'inTreatment');
        }

        if (params.location) {
            locationFilter = [
                {'locationName': new RegExp(params.location, 'inTreatment') }
            ]
        }
    }
    const pipeline = [{ '$match': query }]
    if (locationFilter.length > 0) {
        pipeline.push({ '$match': { '$or': locationFilter } });
    }
    pipeline.push({
        '$project': {
            'phone': 0,
            'volunteerId': 0
        }
    });
    return pipeline;
}


function byId(id) {
    const pipeline = [{ '$match': { '_id': Number(id) } }]
    return pipeline;
}

export { byParams, byId }