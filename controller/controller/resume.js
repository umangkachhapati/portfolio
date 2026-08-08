const resume = (req, res) => {
    try {
        res.render('resume');
    } catch (error) {
        console.log(error.message);
        // Explicitly send a 500 code so the browser stops loading on error
        res.status(500).send("Internal Server Error");
    }
};

// Use CommonJS syntax instead of ES Modules export
module.exports = { resume };
