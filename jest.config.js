const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
  rootDir: root,
  displayName: 'root-tests' /*Label/Nome do teste*/,
  /*Executa apenas os testes que estão no path informado*/
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  testEnvironment: 'node',
  clearMocks: true,
  preset: 'ts-jest' /*Utiliza o ts-jest pra testar typescript*/,
  /*Utiliza o module-alias*/
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
  },
};

/*
    Arquivo de configuração global do jest para testes de unidade.
    Teste de integração fica dentro da pasta test.
    Teste de unidade fica dentro da pasta src.
    Feito em .js pq é um trampo muito grande fazer em .ts
    - https://jestjs.io/pt-BR/
*/
