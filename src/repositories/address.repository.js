const { address } = require('../models');
const { NOT_FOUND } = require('../utils/errors');

module.exports = {
  createAddress: async data => {
    try {
      return await address.create({
        ...data
      });
    } catch (e) {
      throw e;
    }
  },
  updateAddress: async (id, data) => {
    try {
      const result = await address.findByPk(id);
      if (!result) {
        throw NOT_FOUND();
      }
      return await result.update({
        ...data
      });
    } catch (e) {
      throw e;
    }
  },
  deleteAddress: async id => {
    try {
      const result = await address.findByPk(id);
      if (!result) {
        throw NOT_FOUND();
      }
      await result.destroy();
    } catch (e) {
      throw e;
    }
  },
  getAddress: async id => {
    try {
      const result = await address.findByPk(id);
      if (result) return result;
      throw NOT_FOUND();
    } catch (e) {
      throw e;
    }
  },
  getAddresses: async () => {
    try {
      return await address.findAll();
    } catch (e) {
      throw e;
    }
  }
};