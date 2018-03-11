function calculateRate(req, res) {
	var weight = req.query.weight;
	var mail_type = req.query.mail_type;
	var price = 0;

	if (mail_type == 'stamped') {
		if (weight <= 1) 
			price = .5;
		if (weight > 1 && weight <= 2)
			price = .71;
		if (weight > 3 && weight <=3)
			price = .92;
		if (weight >= 3.5)
			price = 1.13;
	}

	if (mail_type == 'metered') {
		if (weight <= 1) 
			price = .47;
		if (weight > 1 && weight <= 2)
			price = .68;
		if (weight > 2 && weight <= 3)
			price = .89;
		if (weight > 3 && weight <=3.5)
			price = .89;
		if (weight >= 3.5)
			price = 1.10;
	}

	if (mail_type == 'flats') {
		if (weight <= 1) 
			price = 1;
		if (weight > 1 && weight <= 2)
			price = 1.21;
		if (weight > 2 && weight <= 3)
			price = 1.42
		if (weight > 3 && weight <=4)
			price = 1.63;
		if (weight > 4 && weight <= 5)
			price = 1.84;
		if (weight > 5 && weight <= 6)
			price = 2.05;
		if (weight > 6 && weight <= 7)
			price = 2.26;
		if (weight > 7 && weight <= 8)
			price = 2.47;
		if (weight > 8 && weight <= 9)
			price = 2.68;
		if (weight > 9 && weight <= 10)
			price = 2.89;
		if (weight > 10 && weight <= 11)
			price = 3.10;
		if (weight > 11 && weight <= 12)
			price = 3.31;
		if (weight >= 13)
			price = 3.52;
	}

	if (mail_type == 'retail') {
		if (weight <= 1) 
			price = 3.50;
		if (weight > 1 && weight <= 2)
			price = 3.50;
		if (weight > 2 && weight <= 3)
			price = 3.50;
		if (weight > 3 && weight <=4)
			price = 3.50;
		if (weight > 4 && weight <= 5)
			price = 3.75;
		if (weight > 5 && weight <= 6)
			price = 3.75;
		if (weight > 6 && weight <= 7)
			price = 3.75;
		if (weight > 7 && weight <= 8)
			price = 3.75;
		if (weight > 8 && weight <= 9)
			price = 4.10;
		if (weight > 9 && weight <= 10)
			price = 4.56;
		if (weight > 10 && weight <= 11)
			price = 4.80;
		if (weight > 11 && weight <= 12)
			price = 4.15
		if (weight > 12 && weight <= 13)
			price = 5.15;
		if (weight >= 13)
			price = 5.50;
	}

	var data = {weight: weight, mail_type: mail_type, price: price};

	res.render('results', data);
}

module.exports = {calculateRate: calculateRate};