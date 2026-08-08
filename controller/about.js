const about = (req, res) => {
    try {
        res.render('about');
    } catch (error) {
        console.log(error.message);
        // Prevent the browser from hanging indefinitely if a rendering error occurs
        res.status(500).send("Internal Server Error");
    }
};

// Use CommonJS export format
module.exports = { about };
