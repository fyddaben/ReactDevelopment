var config = global.config;
exports.index = function(req, res) {
  res.render('index', {title: 'hello', static: config.static});
}
