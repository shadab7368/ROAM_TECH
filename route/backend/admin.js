const expres =require('express')
const router=expres()
router.get('/',(req,res)=>{
res.render('../views/backend/admin-file')
})
module.exports=router