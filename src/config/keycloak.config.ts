export const keycloakConfig = {
  'confidential-port': 0,
  realm: 'pedefacil',
  'realm-public-key':
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx+Ee5bnqmcWhlsiAq2brOWA90Oi+jRH7ZKqSSAzHNIeasqD8xsiNG5YiPFSZxUiqOG4Y9iw7fRxZS2v/cbhiybiqb2K4wt9C2SBHkhUSUItQ+IP6Lf3d3xDjmCyDA93Ou4K+FZ4oFQqFI+8F3OxeYi7tzRYWpCj95aGSFBdFn8sciPpYagkyAbZ4wqueNlKUJmU091DDb54CgHNxiCL5e9v+PYPpYwgeEZCO8PVzOFxuJo26Vw5TgEZzFURqIvXIsHMXglr85BBljjvaHM7w8WLHgM/rPCGlIkWyKpv2gU0VF4mPnkGu7v1qR0c67/2nDjoFlTq2pbJkLnfqtNu90QIDAQAB',
  'auth-server-url': 'http://localhost:8080',
  'ssl-required': 'external',
  resource: 'pedefacil-api',
  'public-client': true,
};
