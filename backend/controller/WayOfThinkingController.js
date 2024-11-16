const WotModel = require('../model/WayOfThinkingModel');

exports.postOne = async (req, res, next)=>{
    const {wotLine} = req.body;
    console.log(wotLine)

    try {
        const postData = await WotModel.create({wotLine : wotLine});
        return res.json({status : true, message : 'Success Save WOT', data : postData});

    } catch (error) {
        console.log(error);
        const err = new Error();
        err.location = 'controller';
        err.status = false;
        err.message = 'Post failed';
        return next(err);
    }
}

exports.getAll = async (req, res, next)=>{
    try {
        const allData = await WotModel.findAll();
        return res.json({status : true, message : 'Success All data', data : allData})
    } catch (error) {
        console.log(error);
        const err = new Error();
        err.location = 'controller';
        err.status = false;
        err.message = 'getAll fail';
        return next(err);
    }
}

exports.deleteOne = async (req, res, next) => {
    const id = req.params.id;
    console.log(id)

    try {
        const deleteData = await WotModel.findOne({where : {wotId : id}});
        console.log(deleteData);
        await deleteData.destroy();
        return res.json({status : true, message : 'Success Delete Data'});
    } catch (error) {
        console.log(error);
    }


}