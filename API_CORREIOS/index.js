const { consultarCep } = require("correios-brasil");

//geting cep
const cep = "21770200"
//can set any form of var string number...
consultarCep(cep)
.then((res => {
    /* console.log(res); */
})).catch(error => console.log("Error.:"+error.message));


/* query deadlines delivery products */
const { calcularPrecoPrazo } = require('correios-brasil');

let args = {
    //any value is valid dont wory with format
    sCepOrigem: '81200100',
    sCepDestino: '21770200',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: '0',
  };
  
  calcularPrecoPrazo(args).then((res) => {
    /* console.log(res); */
  }).catch(error => console.log("Error.:"+error.message));

  /* Product Tracker */
  const { rastrearEncomendas } = require('correios-brasil');

let codRastreio = ['PW639018542BR', 'PW935793588BR']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then((res) => {
  console.log(res);
}).catch(error => console.log("Error.:"+error.message));