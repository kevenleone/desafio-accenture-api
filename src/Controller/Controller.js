const colors = require('colors')
const Util = require('../../config/Util')
const JWT = require('jsonwebtoken');
class Controller extends Util {
    constructor() {
        super();
    }

    sendSuccessResponse(req, res, next, body) {
        let status = 200
        if (body == '' || body == null) {
            status = 204
            console.log(`${req.method} - client${req.url} Status:${status}`.yellow)
        } else console.log(`${req.method} - client${req.url} Status:${status}`.green)
        res.status(status).send(body);
        next();
    }

    sendErrorResponse(req, res, next, err) {
        console.log(`${req.method} - client${req.url} Status:400`.magenta);
        res.status(400).send(err);
        next();
    }
}

module.exports = Controller