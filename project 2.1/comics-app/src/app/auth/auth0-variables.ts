interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'oLIVGZQWYnqwmHXB45o1eOLH7b7nweqL',
  domain: 'comicsapp.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
