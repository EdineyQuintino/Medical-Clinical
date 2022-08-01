const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const registration = await connection('registration').select('*');

            return response.status(200).json(registration)
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }

    },

    async create(request, response) {
        try {
            const { name, email, whatsapp, city, uf } = request.body;

            const id = crypto.randomBytes(4).toString('HEX');

            await connection('registration').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            })

            return response.status(201).json({ id });

        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    },

    async patch(request, response) {
        try {

            const { id } = request.params;
            const { name, email, whatsapp, city, uf } = request.body;

            const newregister = {
                name,
                email,
                whatsapp,
                city,
                uf,
            }

            const newuser = await connection('registration').where('id', id).update(newregister);
            if (!newuser) {
                return response.status(400).json({ message: error.message });
            } else {
                return response.status(200).json({ message: 'sucesso' })
            }


        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    },

    async delete(request, response) {
        try {
            const { id } = request.params;

            await connection('registration')
                .where('id', id)
                .select('registration')
                .first();

            const user = await connection('registration').where('id', id).delete();

            if (!user) {
                return response.status(404).json({ message: 'Usuario não localizado' });
            } else {
                return response.status(204).json({ message: 'Exclusão Realizada' });
            }

        } catch (error) {
            console.log(error);
            return response.status(400).json({ message: error.message });
        }

    }

};