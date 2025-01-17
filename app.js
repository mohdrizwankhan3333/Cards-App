const express=require('express');
const app=express();
const path=require('path')
app.use(express.json());
app.use(express.urlencoded({extended:1}))
app.set('view engine','ejs')
const connection=require('./models/dgconnect.js')
const user=require('./models/userdb.js')
app.use(express.static(path.join(__dirname,'public')))


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/read',async(req,res)=>{
let users=await user.find();

    res.render('read',{users})
})

app.post('/create',async(req,res)=>{
   let {username,img,email}= await req.body
    const nuser=user.create({
        name: username,
    url: img,
    email:email
    })
    res.redirect('read')})


    app.get('/delete/:id',async (req,res)=>{
    let user = await  findOneAndDelete({_id:req.params.id})
        res.redirect('/read')
    })


app.get('/edit/:id',(req,res)=>{
    res.redirect('/read')
})

app.post('/updated',(req,res)=>{
    res.render('/read')
})















app.listen(3000)