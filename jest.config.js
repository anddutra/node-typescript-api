const { resolve } = require('path');
const root = resolve(__dirname);
module.exports = {
    rootDir: root,
    displayName: 'root-tests',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    testEnvironment: 'node',
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper: {
        '@src/(.*)': '<rootDir>/src/$1',
        '@test/(.*)': '<rootDir>/test/$1',
    },
};

/*
    Arquivo de configuração global do jest.
    Utilizado para testes.
    Feito em .js pq é um trampo muito grande fazer em .ts
    - https://jestjs.io/docs/pt-BR/getting-started
    - https://jestjs.io/blog/2019/01/25/jest-24-refreshing-polished-typescript-friendly
    - https://medium.com/@oieduardorabelo/jest-babel-e-typescript-configurando-testes-para-seu-projeto-201f001f45ef
*/