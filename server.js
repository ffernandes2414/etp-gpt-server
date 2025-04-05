const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/gerar-etp', async (req, res) => {
  const dadosETP = req.body;

  try {
    // Enviar os dados para o GPT personalizado e obter a resposta
    const respostaGPT = await axios.post('URL_DO_SEU_GPT_PERSONALIZADO', dadosETP);

    res.json(respostaGPT.data);
  } catch (error) {
    res.status(500).send('Erro ao gerar o ETP');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
