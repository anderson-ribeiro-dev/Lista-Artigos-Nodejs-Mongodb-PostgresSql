const admin = require('./admin')

// resgister routes
module.exports = app => {
    //routes authentication
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    //routes users
    app.route('/users')
        .all(app.config.passport.authenticate()) //acess methods passportjs 
        .post(admin(app.api.user.save)) //access methods save with consign
        .get(admin(app.api.user.get)) // call methods user.js

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.user.save))
        .get(admin(app.api.user.getById))
        .delete(admin(app.api.user.remove))   
    
    //routes categories
    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.category.get))
        .post(admin(app.api.category.save))

    //Before generic routes
    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getTree)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.category.getById)
        .put(admin(app.api.category.save))
        .delete(admin(app.api.category.remove))
        
    //routes articles
    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.article.get))
        .post(admin(app.api.article.save))
    
    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))   
        .delete(admin(app.api.article.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())   
        .get(app.api.article.getByCategory)

    //routes mongodb
    app.route('/stats') 
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)   

}