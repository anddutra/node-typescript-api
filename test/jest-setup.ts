import { SetupServer } from '@src/server';
import supertest from 'supertest';
/*
    Faz a inicialização dos testes funcionais/integração.
    Roda antes dos testes com as configurações necessárias.
     - Inicializa o servidor para a realização dos testes.
*/

beforeAll(() => {
  const server = new SetupServer();
  server.init();
  /*Seta a instancia do server no global para que seja possível recuperar ele na execução do teste*/
  global.testRequest = supertest(server.getApp());
});
