const nodemailer = require("nodemailer")

console.log('ggggg')

var transport = nodemailer.createTransport("SMTP", {
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // use SSL
        port: 587, // port for secure SMTP
        auth: {
            user: "mac.arthy@hotmail.com",
            pass: "******"
        }
    })
console.log('ggggg')

var mail = {
	from: "mac.arthy@hotmail.fr",
	to: "macarthy@hotmail.fr",
	subject: "leSujetDuMail",
	attachments: [
		{
		  filePath: '/reponse.js'
		},
	]
}

smtpTransport.sendMail(mail, function(error, response){
	if(error){
		console.log("Erreur lors de l'envoie du mail!")
		console.log(error)
	}else{
		console.log("Mail envoyé avec succès!")
	}
	smtpTransport.close()
})