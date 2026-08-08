const service = (req, res) => {
    try{
        res.render('service');
    } catch (error){
        console.log(error.message);
    }
};
export {service};