module.exports = (application) => {
  application.get('/clima', (req, res) => {
    application.app.controllers.clima.iniciaClima(application, req, res);
  });

  application.post('/clima', (req, res) => {
    application.app.controllers.clima.iniciaClima(application, req, res);
  });
};