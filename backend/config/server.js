module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['881250e5d0d11994f83932ff18554491f74e6d607059b25f30b9d38a4225f13d5519d0729b0c48625e96e0a97ce8c36cfabf8d14af6b489ad914581a3f3acba8', '769651dcec99fcc3e268d19a65265d48c59cbebcaf8ebe782fe6f7bb69958a8bed96c13225e3e17162c37f3cfc32171d65bcffbedd07cd691cf51388a0bd2c75'],
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
