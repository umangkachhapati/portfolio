const about = (req, res) => {
    try{
        res.render('about');
    } catch (error){
        console.log(error.message);
    }
};
export {about};