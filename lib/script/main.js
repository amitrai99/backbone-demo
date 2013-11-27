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
    "productID": '123'
  });
  
  var pm2 = new model({
    "productID": '456'
  });

  var pv = new view({
    "model": pm
  });
  
  var pv2 = new view({
    "model": pm2
  });

  setTimeout(update, 5000);

  function update() {
    pm2.set({'price': 125.00, 'discount': 2.34, 'color': ['YELLOW', 'MAROON']});
  }

});