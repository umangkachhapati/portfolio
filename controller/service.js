const service = (req, res) => {
    try {
        res.render('service');
    } catch (error) {
        console.log(error.message);
        // Send a response so the user's browser doesn't hang
        res.status(500).send("Internal Server Error");
    }
};

// Use CommonJS export instead of ES Modules export
module.exports = { service };
