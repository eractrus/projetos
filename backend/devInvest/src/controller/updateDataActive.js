const serviceUpdate = require('../service/getDataWeb');

module.exports = class updateDataActive {

    async handleService(req, res) {

        try {
            const updateService = await serviceUpdate;
            updateService();
            await res.status(200).json({message:'Dados registrados com sucesso!'});

        } catch (error) {
            res.status(500).json(`Algo errado ao tentar conectar ao serviço UPDATEDATA | ${error}`)
        }
    }

}
