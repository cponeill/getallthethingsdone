
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
  	title: 'Get All The Things Done',
  	name: 'Get ALL the things done! (A super simple To-Do app)'
  });
};