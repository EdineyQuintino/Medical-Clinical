const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const { id } = request.params;
            const medic = await connection('medic')
                .where('id', id)
                .select('medic')
                .first();

            if (!medic) {

                return response.status(400).json({ message: error.message });

            } else {

                return response.status(200).json(medic);

            }

        } catch (error) {

            return response.status(400).json({ message: error.message });

        }
    }
};