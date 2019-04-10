const File = require('../models/File');

class FileController {
    async store(req, res) {

        // create new file

        console.log(req.file);

        return res.send('OK');

    }
}

module.exports = new FileController();