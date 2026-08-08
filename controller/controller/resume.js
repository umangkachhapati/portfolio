const resume = (req, res) => {
    try{
        res.render('resume');
    } catch (error){
        console.log(error.message);
    }
};
export {resume};