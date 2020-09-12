// GET('/')
exports.getIndexPage = async (req, res) => {
  const message = "Page d'accueil" 
  /*
  const products  = await query( 'SELECT * FROM product')
  const categories = await query( 'SELECT * FROM category');
  */

  try {
    res.render('index', {
     message
    //  products,
    // categories
    });
  } catch (e) {
    res.send(e)
  }
};