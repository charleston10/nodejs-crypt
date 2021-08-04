const crypto = require("crypto");

crypto.generateKeyPair('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'secret'
    }
}, (err, publicKey, privateKey) => {
    if (err) return console.error(err);

    console.info(publicKey)
    console.info(privateKey)

    const name = "Lorem Ipsum"

    const encrypted = crypto.publicEncrypt(publicKey, name)
    const decrypted = crypto.privateDecrypt({key: privateKey, passphrase: 'secret',}, Buffer.from(encrypted, "base64"))

    console.log(encrypted.toString("base64"))
    console.log(decrypted.toString("utf-8"))
});
