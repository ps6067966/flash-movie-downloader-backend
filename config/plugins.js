module.exports = ({ env }) => ({
  // ...
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET", "dfd05f472789bf41d929186a5a4c8f23"),
    },
  },
  // ...
});
