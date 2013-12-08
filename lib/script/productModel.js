//`productModel` is the model that describes the product and contains it's attributes
//
define(['Backbone'], function (Backbone) {
  //product model extend the base class Backbone.Model
  var ProductModel = Backbone.Model.extend({
    //`initialize` is then built in initializer/constructor function. 
    //By default it is an [empty method](http://backbonejs.org/docs/backbone.html#section-34)
    //triggered automatically whenever a new instance of model is created
    //@param {[Object]} attributes, set of attributes and their values that need to be set on the model
    //@param {[Object]} options, options for processing the attributes, the default initialize method uses this
    //For example, If {parse: true} is passed as an option, the attributes will first be converted by parse before being set on the model.
    //`var m = new Model([attributes], [options])` 
    //# Call the Backbone model's default constructor
    //# Then call the initialize method with the same parameters passed to the constructor
    //If you provide your custom `initialize` then Backbone will call the [Backbone.Model's Constructor](http://backbonejs.org/docs/backbone.html#section-29) 
    //and then your custom initialize method.
    initialize: function(attrs, options) {
      var data;
      //this is just an example, this functionality is already provided by `Backbone.Model.initialize`
      if (attrs) {
        //set/update the value of attributes in your model
        this.set(attrs);
      }

      data = this.getProductInfo(attrs.productID);
      //this.set('productData', data);
    },

    //`defaults` sets the `default atributes` for your model
    //it can be a `hash` or a `function`
    defaults: function() {
      return {
        name: null,
        price: null,
        discount: 0.0,
        shipping: 0.0,
        currency: '$'
      };
    },

    //domain method `calculateShipping` calculates the shipping cost
    //@return {Float} calculated shipping cost of the current product
    calculateShipping: function(price) {
      var shipping = 0.0;
      //return some value
      return price * 0.05;
    },

    //`getProductInfo` gets the data from the server
    //@param {String} pid Product ID
    //@return {Object} data from server
    getProductInfo: function(pid) {
      var shipping = 0.0;
      var pd = this.fakeDB(pid);

      if (pd) {
        var shipping = this.calculateShipping(pd.price);
        pd.shipping =  shipping.toFixed(2);        
        this.set(pd);
      }
    },

    fakeDB: function(pid) {
      if (!pid) {
        throw new Error('No pid was specified');
      }
      //fake db
      var db = {
      
        '123' : {
          ID: pid,
          name: 'Levis Jeans',
          price: 50.34,
          discount: 7.00,
          color: ['blue', 'green', 'red'],
          size: ['XS', 'S', 'M', 'L']
        },

        '456' : {
          ID: pid,
          name: 'Nike Sports Jacket',
          price: 100.34,
          discount: 0.00,
          color: ['grey', 'blue', 'yellow'],
          size: ['S', 'M', 'L']
        },

        '789' : {
          ID: pid,
          name: 'Reebok Running Shoes',
          price: 79.34,
          discount: 4.00,
          color: ['white', 'grey', 'yellow'],
          size: ['8', '9', '9.5', '10']
        }

      };

      return db[pid];
    }

  });
  /*end productModel*/

  return ProductModel;

});
