/*
    Define algumas variaveis customizadas para o global do Nodejs
    Necessário fazer o import inline para que o global funcione
    - https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts/51114250#51114250
*/

declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
