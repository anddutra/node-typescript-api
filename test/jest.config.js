const { resolve } = require('path');
const root = resolve(__dirname, '..');
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {
  ...rootConfig /*Importa a configuração global do jest e sobrescreve algumas chaves*/,
  ...{
    rootDir: root /*Raiz deste arquivo*/,
    displayName: 'end2end-tests' /*Label/Nome do teste*/,
    /*Arquivo de setup que será executado antes dos testes*/
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    /*Executa apenas os testes que estão no path informado*/
    testMatch: ['<rootDir>/test/**/*.test.ts'],
  },
};

/*
    Arquivo de configuração local do jest para testes funcionais/integração.
    Teste de integração fica dentro da pasta test.
    Teste de unidade fica dentro da pasta src.
    Feito em .js pq é um trampo muito grande fazer em .ts
    - https://jestjs.io/pt-BR/
*/
