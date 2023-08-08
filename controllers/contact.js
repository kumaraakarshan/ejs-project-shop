exports.getcontact = (req, res, next) => {
  res.render('admin/contact'); // Assuming 'contact' is the name of your EJS file in the 'views' directory
}

exports.postcontact =(req, res, next) => {

    res.render('admin/success');
  }
