const {server,PORT} = require('../src/config/server');

try {
    server.listen(PORT, () => console.log('Servidor ativo na porta -', PORT));
} catch (error) {
    console.log(`ERRO INTERNO NO SERVIDOR | ${error}`);
}