//http://localhost:3000/skills

//Nele, inicializaremos o express com o treho:
const app = require('express')();

//Utilizar o m�todo listener para indicar qual porta a api rodar�, console.log apena spara indicar que o aplica��o est� rodando
app.listen(3000, () => console.log('Server running'));

//Criar a rota skills, onde colocaremos como resposta um json padr�o:
app.get('/skills', (req, res) => {
    res.send(
        {
                "javascript": 10
                , "node": 10
        }
    );
});
