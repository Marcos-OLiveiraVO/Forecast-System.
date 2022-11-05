import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';

import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3hours.json';
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_3Hours.json';

jest.mock('axios');

describe('StormGlass client ', () => {
  it('should return the normalized forecast from the stormGlass service', async () => {
    const lat = -123.355421;
    const lng = 532.351245;

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: stormGlassWeather3HoursFixture });

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);
    expect(response).toEqual(stormGlassNormalized3HoursFixture);
  });
});
