const server = require('../src/config/server');
const port = 3004;

try {
    server.listen(port, () => console.log('Servidor ativo'));
} catch (error) {
    console.log(`ERRO INTERNO NO SERVIDOR | ${error}`);
}