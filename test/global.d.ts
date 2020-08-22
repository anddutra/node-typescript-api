/*
    Define algumas variaveis customizadas para o global do Nodejs
    Necessário fazer o import inline para que o global funcione
    - https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts/51114250#51114250
    - https://stackabuse.com/using-global-variables-in-node-js/
    - https://stackoverflow.com/questions/10987444/how-to-use-global-variable-in-node-js
*/

declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
