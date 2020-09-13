module.exports = {
    calculate (req, res) {
        var { sides } = req.body;

        res.json({ sides });
    }
}