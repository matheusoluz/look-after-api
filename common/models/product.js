'use strict';
const moment = require('moment');

module.exports = (Product) => {
  Product.observe('before save', hookUpdateCreatationDate(Product));
};

/***
 *
 * @param {object} ctx
 */
const hookUpdateCreatationDate = Product => async (ctx) => {
  if (!ctx.isNewInstance) {
    if (ctx.data && (ctx.data.purchasedQty || ctx.data.availableQty)) {
      var a = moment(Date.now());
      var b = moment(ctx.currentInstance.creatationDate);
      ctx.data.timeToZeroed = ctx.data.availableQty * a.diff(b, 'minutes', true)
      ctx.data.creatationDate = Date.now();
    }
  }
  return true;
};
