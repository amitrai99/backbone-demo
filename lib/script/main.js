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
require(['productView', 'productViewShoe', 'productViewBrowse', 'productModel'], function(view, viewShoe, viewBrowse, model) {
  //create model by passing both `attributes` and `options` hash
  //for your custom options that is not part of the model attribute always use options hash
  //options is NOT set on attributes
  //attributes hash becomes part of the model's internal `attributes` object
  //if you pass `id` in the `attributes` hash, it will be set on the model attribute as well as the model instance directly
  var pm = new model({"id":123, "productID": '123', 'foo': 'bar'}, {'something': 'foobar'});
  
  console.log(pm); //entire model object
  console.log(pm.id); //model instance has the `id` property
  console.log(pm.toJSON());// only returns the `attributes` data that is added via `set` or `defaults`
  console.log(pm.get('name'));// only returns the `attributes` data that is added via `set` or `defaults`
  console.log(pm.url);// only for prototype data, obviously
  
  //create model
  var pm2 = new model({
    "productID": '456'
  });

  //create view with a model
  var pv = new view({
    "model": pm
  });
  
  //create view with a model
  var pv2 = new view({
    "model": pm2
  });

  setInterval(update, 3000);
  //update the existing model 
  function update() {
    pm2.set({
      'price': 50.00  + parseFloat((Math.random() * 100).toFixed(2)), 
      'discount': 1.00  + parseFloat((Math.random() * 10).toFixed(2)), 
      'color': ['YELLOW', 'MAROON']
    });
  }

  //create model
  var pm3 = new model({
    "productID": '789'
  });

  //create view with a model and an existing DOM element as `el`
  var pv3 = new viewShoe({
    "model": pm3,
    "el": '#productView3'
   });

});
