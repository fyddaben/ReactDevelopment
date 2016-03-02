exports.index = function(req, res) {
  var config = global.config;
  res.render('index', {title: 'hello', static: config.relativePath});
}
exports.mobile = function(req, res) {
  var config = global.config;
  res.render('mobile', {title: 'hello', static: config.relativePath});
}
