const api = require("axios");

module.exports = {
  async index(req, res){
    const response = await api.get(`https://${process.env.ACCOUNT_NAME}.${process.env.ENVIRONMENT}/api/catalog_system/pvt/products/GetProductAndSkuIds`,{
      headers: {
        'x-vtex-api-appkey': process.env.APP_KEY,
        'x-vtex-api-apptoken': process.env.APP_TOKEN
      }
    });
    const {data , range} = response.data;
    res.send({data, range});
  }, 
};