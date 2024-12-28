module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: [
      'Kt6RNz9wHJLZX2vM4YqS8PcF3gDbWeUj',
      'mN7xA5hQ9kVfE2cP8yBtL4wD6sRjGvXu',
      'bT5nC8mK2xR7vW4pY9fH6gJ3sLdAeUqZ',
      'cX6vB9nM4kR8tW2hL5jF7gA3sPdEuYqZ'
    ],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
