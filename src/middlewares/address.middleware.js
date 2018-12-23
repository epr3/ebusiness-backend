const role = require('../utils/role');
const addressService = require('../services/address.service');

module.exports = async (req, res, next) => {
  try {
    let err;
    const address = await addressService.findAddress({
      clientId: req.client.id
    });
    if (!!address || req.user.role === role.ADMIN) {
      next();
    } else {
      err = new Error('Not Found');
      err.status = 404;
      throw err;
    }
  } catch (e) {
    next(e);
  }
};
