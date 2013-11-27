 var configDev = {
  baseUrl: "script",
  paths: {
    underscore: 'thirdparty/underscore',
    handlebars: 'thirdparty/handlebars',
    require: 'thirdparty/require',
    jquery: 'thirdparty/jquery',
    Backbone: 'thirdparty/backbone',
    cviewTemplate: 'templates/cviewTemplate'
  },
  shim: {
    Backbone : {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  waitSeconds: 15
};

//pass the config object to require' config method.
require.config(configDev);

//start the application
require(['productViewBrowse', 'productModel', 'appRouter'], function(viewBrowse, model, appRouter) {

  // Initiate the router
  var appRouter = new appRouter;

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();

  //create model
  var pm = new model({
    "productID": '123'
  });
  //create model
  var pm2 = new model({
    "productID": '456'
  });

  //create model
  var pm3 = new model({
    "productID": '789'
  });

  //create view with a model and an existing DOM element as `el`
  var pvb = new viewBrowse({
    "model": pm
   });

  var pvb2 = new viewBrowse({
    "model": pm2
   });

  var pvb3 = new viewBrowse({
    "model": pm3
   });

});