/**
 * GET /finance
 * 管理主页
 */
exports.index = function(req, res) {
  res.render('finance', {
    title: '管理'
  });
}