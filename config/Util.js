const crypto = require('crypto')
const algorithm = 'AES-128-CBC'
const key = 'avadakedavra'

class Util {
    constructor(){
        this.secretKey = 'avadakedavra'
    }
    encrypt(val){
        var cipher = crypto.createCipher(algorithm, key);
        var crypted = cipher.update(val+"", 'utf-8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }
    decrypt(val){
        try {
            var decipher = crypto.createDecipher(algorithm, key);
            var decrypted = decipher.update(val, 'hex', 'utf-8');
            decrypted += decipher.final('utf-8');
            return decrypted;
            } catch(err) {
                return {error : 'INVALID_ENCRYPTED_TEXT'}
        }
    }
}

module.exports = Util;





