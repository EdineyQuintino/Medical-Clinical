const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        try {
            const { id } = request.params;
            const registration = await connection('registration')
            .where('id', id)
            .select('registration')
            .first();
    
            if(!registration){
                
                return response.status(400).json({ message: error.message });

            }else{

                return response.status(200).json(registration);

            }
           
        } catch (error) {

            return response.status(400).json({ message: error.message });
            
        }
    }
};
