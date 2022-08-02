const crypto = require('crypto');

const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        try {
            const patient = await connection('patient').select('*');

            return response.status(200).json(patient)
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }

    },

    async create(request, response) {
        try {
            const { name, birthdate, cpf, number, agreementnumber, road, housenumber, district, city, cep, uf } = request.body;

            const id = crypto.randomBytes(4).toString('HEX');

            await connection('patient').insert({
                id,
                name,
                birthdate,
                cpf,
                number,
                agreementnumber,
                road,
                housenumber,
                district,
                city,
                cep,
                uf
            })

            return response.status(201).json({ id });

        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    },

    async filter(request, response) {
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
    },

    async patch(request, response) {
        try {

            const { id } = request.params;
            const { name, birthdate, cpf, number, agreementnumber, road, housenumber, district, city, uf } = request.body;

            const newRegister = {
                name,
                birthdate,
                cpf,
                number,
                agreementnumber,
                road,
                housenumber,
                district,
                city,
                uf
            }

            const newUser = await connection('patient').where('id', id).update(newRegister);
            if (!newUser) {
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

            await connection('patient')
                .where('id', id)
                .select('patient')
                .first();

            const user = await connection('patient').where('id', id).delete();

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