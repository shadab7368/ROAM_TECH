
const mongooose=require('mongoose');

const pageSchema=mongooose.Schema({
    pageUrl         :   String,
    pageNavText     :   String,
    pageTitle       :   String,
    pageMetaDescription:String,
    pageMetaKeyWord:String,
    pageHeading:String,
     pagePhoto:String,
    pageDetails:String
})
const pageModel = mongooose.model('pageTable',pageSchema)
module.exports= pageModel