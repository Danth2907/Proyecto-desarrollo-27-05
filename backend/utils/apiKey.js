const generateApiKey = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    let apiKey = '';
    for (let i = 0; i < length; i++) {
      apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return apiKey;
  };
  
  let apiKey = generateApiKey();
  console.log('API Key generada:', apiKey);
  
  const checkAuthorization = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization !== `Bearer ${apiKey}`) {
      return res.status(401).json({ message: 'API key incorrecta' });
    }
    next();
  };
  
  export { checkAuthorization, apiKey };
  