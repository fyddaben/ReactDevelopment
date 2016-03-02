exports.index = function(req, res) {
  var config = global.config;
  res.render('index', {title: 'hello', static: config.static});
}
