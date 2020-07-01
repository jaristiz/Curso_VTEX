const api = require("axios");

module.exports = {
  async index(req, res) {
    const { id } = req.headers;
    const response = await api.get(
      `https://${process.env.ACCOUNT_NAME}.${process.env.ENVIRONMENT}/api/catalog_system/pub/products/search?O=OrderByPriceDESC`
    );
    console.log(response.data);
    res.json(response.data);
  },
};
