        /*Express*/
        var express = require('express');
        var app = express();
        PORT = 3054;

        app.get('/',function(req,res){
          res.render('home');
        });

        app.use(function(req,res){
          res.status(404);
          res.render('404');
        });

        app.use(function(err, req, res, next){
          console.error(err.stack);
          res.type('plain/text');
          res.status(500);
          res.render('500');
        });

        /*LISTENER*/
                app.listen(PORT, function(){
                console.log('Express started on http:' + PORT + '; press Ctrl-C to terminate.')
        });
