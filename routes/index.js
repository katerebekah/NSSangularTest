/* GET home page. */
exports.index = function(req, res){
	res.render('index', { title: 'Kate' });
};

exports.partials = function(req, res){
	res.render('partials/' + req.params.name)
};