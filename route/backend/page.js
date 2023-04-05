const expres =require('express')
let pageModel= require('../../model/pageModel')
const router=expres()
router.get('/',(req,res)=>{
    res.render('../views/backend/page-file')
})
router.post('/add-page',(req,res)=>{
   pageModel.create({
    pageUrl         :   req.body.Page_Url,
    pageNavText     :   req.body.page_Nav_text,
    pageTitle       :   req.body.page_title,
    pageMetaDescription : req.body.Page_Meta_Description,
    pageMetaKeyWord:req.body.Page_Meta_Keyword,
    pageHeading:req.body.Page_Heading,
    //pagePhoto:req.body.Page_Photo,
    pageDetails:req.body.Page_Details
   })
  .then((x)=>{
    res.redirect('/admin/page/')
  })
})

router.get('/add-page',(req,res)=>{
    res.render('../views/backend/add-page-file')
})
router.get('/edit-page',(req,res)=>{
    res.render('../views/backend/edit-page-file')
})


module.exports=router
