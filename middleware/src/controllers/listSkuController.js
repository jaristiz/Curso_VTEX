const api = require("axios");

module.exports = {
  async index(req, res) {
    const { link } = req.headers;
    const response = await api.get(
      `https://${process.env.ACCOUNT_NAME}.${process.env.ENVIRONMENT}/api/catalog_system/pub/products/search/${link}/p`
    );
    console.response.data;
    res.json(response.data);
  },
};
