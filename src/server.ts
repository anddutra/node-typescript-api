import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastController } from './controllers/forecast';
import { Application } from 'express';

/*
    overnightjs é utilizado como uma camada em cima do express.
     - Facilita alguns pontos como a criação de rotas dos controllers utilizando decorator
       - https://medium.com/@ricardotorquato/typescript-web-api-overnightjs-e3966e5a047c
*/

export class SetupServer extends Server {
  /*Desta forma não precisa declarar a propriedade dentro da classe*/
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControlers();
  }

  private setupExpress(): void {
    /*Decodifica o body em json*/
    this.app.use(bodyParser.json());
  }

  private setupControlers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  public getApp(): Application {
    /*Retorna o server para a realização dos testes funcionais/integração*/
    return this.app;
  }
}
