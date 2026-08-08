const portfolio = (req, res) => {
    try{
        res.render('portfolio');
    } catch (error){
        console.log(error.message);
    }
};
export {portfolio};