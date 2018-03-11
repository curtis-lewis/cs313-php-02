function calculateRate(req, res) {
	var weight = req.query.weight;
	var mail_type = req.query.mail_type;

	var data = {weight: weight, mail_type: mail_type};

	res.render('results', data);
}

module.exports = {calculateRate: calculateRate};