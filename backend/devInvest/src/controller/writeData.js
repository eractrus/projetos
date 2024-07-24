const fs = require('fs');

function writeData(url, data) {
    fs.writeFile(url, JSON.stringify(data, null, 2), (error) => {
        if (error) {
            console.log(error);
            return;
        }
    });
}

module.exports = function getWriteData(url,data) {
    writeData(url,data);
    console.log('dados gravados');
}
