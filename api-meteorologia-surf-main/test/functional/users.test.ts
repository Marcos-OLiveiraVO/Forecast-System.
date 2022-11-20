import { User } from '@src/models/user';

describe('Users test functional', () => {
  describe('When create a new user', () => {
    beforeAll(async () => await User.deleteMany({}));
    it('Should create new user with successfully', async () => {
      const newUser = {
        name: 'John doe',
        email: 'john@mail.com',
        password: '1234',
      };

      const response = await global.testRequest.post('/users').send(newUser);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newUser));
    });
  });
});
