import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer.prompt([{
    type: 'input',
    name: 'url',
    message: 'Enter the URL',
}]).then((answers) => {

    const qr_png = qr.image(answers.url, {type: 'png'});
    
    const outputStream = fs.createWriteStream('qr_' + answers.url + '.png');

    qr_png.pipe(outputStream);

    outputStream.on('finish', function (){
        console.log('qr code generated');
    })


});