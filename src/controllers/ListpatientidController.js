const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const { id } = request.params;
            const patient = await connection('patient')
                .where('id', id)
                .select('patient')
                .first();

            if (!patient) {

                return response.status(400).json({ message: error.message });

            } else {

                return response.status(200).json(patient);

            }

        } catch (error) {

            return response.status(400).json({ message: error.message });

        }
    }
};
