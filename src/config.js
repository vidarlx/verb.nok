function loadConfig() {
  const config = {
    prod: {
      apiUrl: 'https://rocky-reaches-26524.herokuapp.com/'
    },
    dev: {
      apiUrl: 'http://localhost:3000/'
    }
  }

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return config.dev;
  }

  return config.prod;
}

export default loadConfig();
