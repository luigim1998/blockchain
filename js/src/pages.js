const crypto = require("crypto")

function generate_wallet(req, res) {
	const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
		modulusLength: 4096,
		publicKeyEncoding: {
		  type: 'spki',
		  format: 'pem'
		},
		privateKeyEncoding: {
		  type: 'pkcs8',
		  format: 'pem',
		  cipher: 'aes-256-cbc',
		  passphrase: 'top secret'
		}
	});
	res.json({"publicKey":  Buffer.from(publicKey).toString('hex'),
			  "privateKey": Buffer.from(privateKey).toString('hex')});
}

module.exports = {
	generate_wallet
}