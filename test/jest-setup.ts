import { SetupServer } from '@src/server';
import supertest from 'supertest';
/*
    Faz a inicialização dos testes funcionais/integração
    Inicializa o servidor para a realização dos testes
*/

/*Roda antes dos testes*/
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
