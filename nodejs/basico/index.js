//http://localhost:3000/skills

//Nele, inicializaremos o express com o treho:
const app = require('express')();

//Utilizar o método listener para indicar qual porta a api rodará, console.log apena spara indicar que o aplicação está rodando
app.listen(3000, () => console.log('Server running'));

//Criar a rota skills, onde colocaremos como resposta um json padrão:
app.get('/skills', (req, res) => {
    res.send(
        {
                "javascript": 10
                , "node": 10
        }
    );
});
