const nodemailer = require('nodemailer');
const connection = require('../database/connection');

module.exports = {
    async register(announcementId, userAdopterId) {
        // anúncio
        const data = await connection.announcement.findOne({where: { id: announcementId}});
        const jsonP = JSON.parse(JSON.stringify(data.dataValues));
        const {name, description, type, size, sex, age, adressId} = jsonP;

        // endereço
        const addressData = await connection.adress.findOne({where : { id: adressId}});
        const jsonPAdress = JSON.parse(JSON.stringify(addressData.dataValues));
        const { uf, city, street, houseNumber} = jsonPAdress

        // adopter
        const adopterData = await connection.client.findOne({where: { id: userAdopterId}});
        const jsonPClient = JSON.parse(JSON.stringify(adopterData.dataValues));
        const { firstName, lastName, email} = jsonPClient
        console.log(`Nome: ${firstName} \nSobrenome: ${lastName} \nEmail: ${email}`);

        
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "getpetcc@gmail.com", 
              pass: "getpet1123" 
            },
            tls:{ rejectUnauthorized: false} //localhost
        });
        let info = transporter.sendMail({
            from: '"GetPet 🐶🐭" <getpetcc@gmail.com>',
            to: `${email}, getpetcc@gmail.com`,
            subject: `Parabéns, ${firstName} ${lastName}!`,
            text: "Mensagem de confirmação de adoção", 
            html:  `<body style="width: 70%; position: relative; text-align:justify">
                <h2>Obrigado! ✨ 💫</h2>
                <p>Você foi selecionado como adotante do anúncio <b>"${name}"</b> na plataforma GetPet!</p>
                <p>Ficamos muito felizes com seu ato. São pessoas como você que ajudam a mudar o cenário brasileiro de abandono de animais. Que seu novo bichinho desfrute de muito amor e saúde! Não se esqueça que, ao adotar um animal na plataforma GetPet, você <b>concorda</b> com os termos de adoção segura descritos na plataforma.</p>
                <div style="background-color: #e6e6e6; padding-left: 20px; border-radius: 5px;">
                    <h3 style="padding-top: 20px;">Detalhes do anúncio 💕</h3>
                    <ul style="padding-bottom: 20px; list-style-type: none">
                        <li style="margin-bottom: 10px; font-weight: bold; font-size: 24px; text-transform: uppercase;"> <b>${name}</b> </li>
                        <li style="margin-bottom: 10px; margin-right: 60px"> ${description}</li>
                        <li style="margin-bottom: 10px;"> Tipo: ${type} • Porte: ${size} • Sexo: ${sex} • Idade: ${age}</li>
                        <li style="margin-bottom: 10px; font-style: bold"> <b>Endereço: ${street}, ${houseNumber} - ${city}/${uf}</b></li>
                    </ul>
                </div>
                <p>Acha que essa mensagem foi enviada por engano? Entre em contato através de <b>getpetcc@gmail.com</b></p>
                <p style="color: gray"><i> <small> GetPet - Plataforma para doação e adoção de animais de estimação</small></i></p>
            </body>`
            });
        return info;
    }
}