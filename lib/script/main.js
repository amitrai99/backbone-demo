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
require(['productView', 'productModel'], function(view, model) {

  var pm = new model({
    "productID": '12345'
  });
  
  var pv = new view({
    "model": pm
  });

});