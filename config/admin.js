module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "dfd05f472789bf41d929186a5a4c8f21"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
