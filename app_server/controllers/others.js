/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Tims Resturant Help',
        content: 'Tims Resturant Help was created to help people find places to sit down and enjoy coffee and also find a place to enjoy the best pizza near Amarillo!'
    });
};