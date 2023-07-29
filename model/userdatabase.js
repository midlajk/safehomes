module.exports = (req, res, next) => {
    if (!req.session.isadminlogged) {
        req.flash('error',"You have To Login First")
        return res.redirect('/login');
    }
    else{

        const db2 = mongoose.createConnection('mongodb://localhost:27017/req.session.user._id', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
        });
  next()

    }
    
}