const Controller = require('egg').Controller;

class WcController extends Controller {
  async index() {
    const dataList = {};
    await this.ctx.render('wc/index.html', dataList);
  }
}

module.exports = WcController;
