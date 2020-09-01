import { StormGlass } from '@src/clients/stormGlass';
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';
import stormglassWeatherPointFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import axios from 'axios';

//Configuração para dizer que será mockado o módulo axios
jest.mock('axios');

describe('StormGlass client', () => {
  //Cria um mock do tipo axios
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.792726;
    const lng = 151.289824;

    //Configura o retorno do get para o json stormglassWeatherPointFixture
    mockedAxios.get.mockResolvedValue({ data: stormglassWeatherPointFixture });
    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormglassNormalizedResponseFixture);
  });
});
