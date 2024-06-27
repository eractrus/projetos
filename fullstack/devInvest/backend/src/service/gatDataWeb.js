const puppeteer = require('puppeteer');
const fs = require('fs');

const listaDataActive = async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = 'https://www.infomoney.com.br/ferramentas/altas-e-baixas/';

    await page.goto(url);

    await page.waitForSelector('#altas_e_baixas');

    
    const data = await page.evaluate(() => {

        const tableRows = document.querySelectorAll('#altas_e_baixas tbody tr');
        const dataArray = [];

        tableRows.forEach(row => {

            const columns = row.querySelectorAll('td');

            const rowData = {
                ativo: columns[0].innerText.trim(),
                data: columns[1].innerText.trim(),
                ultimo: columns[2].innerText.trim(),
                //variacaoDia: columns[3].innerText.trim(),
                //variacaoSemana: columns[4].innerText.trim(),
                //variacaoMes: columns[5].innerText.trim(),
                //variacaoAno: columns[6].innerText.trim(),
                //variacao12Meses: columns[7].innerText.trim(),
                valorMinimo: columns[8].innerText.trim(),
                valorMaximo: columns[9].innerText.trim(),
                volume: columns[10].innerText.trim()
            };

            dataArray.push(rowData);
        });

        return dataArray;
    });


    fs.writeFile('./src/data/web/dataActiveB3.json', JSON.stringify(data, null, 2), (error) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log('Dados registrados com sucesso!');
    });

    //console.log(data);
    await browser.close();
    return data
};

function updateDataWeb() {
    console.log('atualizou dados');
    listaDataActive();
}

setInterval(updateDataWeb,90000);



