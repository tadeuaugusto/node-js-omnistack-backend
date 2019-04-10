const Box = require('../models/Box');

class BoxController {
    async store(req, res) {
        const box = await Box.create({ title: 'Rocketseat' });

        return res.send('RESOURCE HAS BEEN CREATED!');
    }
}

module.exports = new BoxController();