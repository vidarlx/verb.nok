function loadConfig() {
  const config = {
    prod: {
      apiUrl: 'https://bnhsknkm2k.execute-api.eu-west-2.amazonaws.com/test'
    },
    dev: {
      apiUrl: 'http://localhost:3000/'
    }
  }

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    //return config.dev;
  }

  return config.prod;
}

export default loadConfig();
