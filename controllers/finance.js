/**
 * GET /finance
 * 管理主页
 */
exports.index = function(req, res) {
  res.render('finance', {
    title: '管理'
  });
}

/**
 * POST /finance/change_earning
 * 收入与支出登记
 */
exports.changeEarning = function(req, res) {
  req.flash('success', { msg: '数据记录成功' } );
  res.redirect('/finance');
}