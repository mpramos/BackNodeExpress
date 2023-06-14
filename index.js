const express = require('express');
const bodyParser= require('body-parser')
const app =express();
app.use(bodyParser.json())
//base datos
let usuarios=[
  {id:1,nombre:"Juan",edad:46},
  {id:2,nombre:"Pedro",edad:26},
  {id:3,nombre:"Carlos",edad:36}
]

app.get('/usuarios', (req, res) => {
//   res.send('¡Hola, mundo!');
//   res.json({"mensaje":123})
  res.json(usuarios)
});
app.post('/usuarios',(req,resp)=>{
 let usuario= req.body
  usuario.id=usuarios.length+1
  usuarios.push(usuario)
  resp.status(201).json(usuario)
})
const port=3000
app.listen(port, () => {
  console.log(`Se está escuchando en http://localhost:${port}`);
});
app.delete('/usuarios/:id',(req,resp)=>{
  let id=parseInt(req.params.id)
  let indice= usuarios.findIndex(us=>us.id===id)
  if(indice!==-1){
      usuarios.splice(indice,1)
      resp.sendStatus(204)
  } else{
    resp.status(404).json({mensaje: "Usuario no encontrado"})
  }

})
