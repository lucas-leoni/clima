module.exports.iniciaClima= (application, req, res) => {
  const dadosFormulario = req.body;
  console.log(dadosFormulario);

  req.assert('nome', 'O campo nome ou apelido deve ser preenchido').notEmpty();
  req.assert('nome', 'O campo nome ou apelido deve conter de 3 a 15 caracteres').len(3,15);

  const erros = req.validationErrors();

  if(erros) {
    res.render('index', { validacao: erros });
    return;
  }

  application.get('io').emit('mensagemParaCliente', {
    apelido: dadosFormulario.apelido,
    mensagem: 'Entrou',
  });
  
  res.render('clima', { dadosFormulario });
}