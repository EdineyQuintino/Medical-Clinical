const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const { id } = request.params;
            const functionari = await connection('functionari')
                .where('id', id)
                .select('functionari')
                .first();

            if (!functionari) {

                return response.status(400).json({ message: error.message });

            } else {

                return response.status(200).json(functionari);

            }

        } catch (error) {

            return response.status(400).json({ message: error.message });

        }
    }
};