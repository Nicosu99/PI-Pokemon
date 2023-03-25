const {pokeType} = require("../controllers/typeControllers/typeController")

const getTypesHandler = async (req, res) => {
    try {
        const allTypes = await pokeType();
        if(allTypes.error){
            throw new Error(allTypes.error);}
        res.status(200).json(allTypes);
    } catch (error){
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getTypesHandler,
}