const express= require('express')
const app=express()
const port=3001

app.get('/',(req,res)=>{
    res.send('<h1>RUTA INICIAL</h1>')
})
app.get('/home',(req,res)=>{
    res.send('Home')
})
app.get('/products/:id',(req,res)=>{
    // const id= req.params.id
    const {id}= req.params
    res.json({
        id,
        name:'Producto 2',
        pice: 20000
    })
})
app.get('/categories/:categoryId/products/:productId',(req,resp)=>{
    let {categoryId,productId}= req.params
    resp.json({
        categoryId,
        productId
    })
})
app.get('/users',(req,res)=>{
    let {limit,offset}=req.query
    if(limit && offset){
        res.json({
            limit, offset
        })
    } else{
        res.send('No hay parametros')
    }
})







app.listen(port,()=>{
    console.log('Mi puerto ' + port);
})

