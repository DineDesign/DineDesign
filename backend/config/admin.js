module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'mySuperSecretKey12345'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'uVYgDX9eLklf5N9uLjEY9g=='),
  },
});
