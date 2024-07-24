const fs = require('fs');

module.exports = class getDataActiveController {

    async handle(request, response) {

        const path = 'src/data/web/dataActiveB3.json'

        fs.readFile(path, 'utf-8', await function (error, data) {

            if (error) {
                console.log('ERRO NA LEITURA DOS DADOS INTERNOS WEB');
                return
            }

            response.json(JSON.parse(data));
        });
    }
}

