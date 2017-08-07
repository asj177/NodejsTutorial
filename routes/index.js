
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tata Consultacny Services' });
};


exports.getInfor=function(req,res) {
	name=req.param('name');
	emp_id=req.param('empid');
	res.render('info', { name: name,employeeId:emp_id,title: 'Tata Consultacny Services' });
};