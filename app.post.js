// Importar express e body-parser

app.post('/rota', (req, res) => {

    const dados = req.body;
  
    // Lógica para manipular dados
  
    res.send('Dados recebidos');
  
  })
  