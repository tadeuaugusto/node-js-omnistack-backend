const Box = require('../models/Box');

class BoxController {
    /**
     * POST {{ baseUrl }}/boxes
     */
    async store(req, res) {
        const box = await Box.create({ title: req.body.title });

        return res.json(box);
    }

    /**
     * GET {{ baseUrl }}/boxes/{box_id}
     */
    async show(req, res) {
        const box = await Box.findById(req.params.id).populate({
            path: 'files',
            options: { sort: { createdAt: -1 }}
        });

        return res.json(box);
    }
}

module.exports = new BoxController();