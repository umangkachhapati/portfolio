const portfolio = (req, res) => {
    try {
        res.render('portfolio');
    } catch (error) {
        console.log(error.message);
        // Respond with a 500 error status so the browser doesn't spin endlessly
        res.status(500).send("Internal Server Error");
    }
};

// Use CommonJS export instead of ES Modules export
module.exports = { portfolio };
