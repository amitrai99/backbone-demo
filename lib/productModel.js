//`productModel` is the model that describes the product and contains it's attributes
//
define(['Backbone'], function (Backbone) {
  //product model extend the base class Backbone.Model
  var productModel = Backbone.Model.extend({
    //built in initializer/constructor function.
    //triggered automatically whenever a new instance of model is created
    //@param {[Object]} attributes, set of attributes and their values that need to be set on the model
    //@param {[Object]} options, options for processing the attributes, the default initialize method uses this some purposes 
    //For example, If {parse: true} is passed as an option, the attributes will first be converted by parse before being set on the model.
    //`initialize new Model([attributes], [options])` 
    //If you provide your custom `initialize` then you will have to handle everything.
    initialize: function(attrs, options) {
      //this is just an example, this functionality is already provided by `Backbone.Model.initialize`
      if (attrs) {
        //set/update the value of attributes in your model
        this.set(attrs);
      }
    },

    //`defaults` sets the `default atributes` for your model
    //it can be a `hash` or a `function`
    defaults: function() {
      return {
        name: null,
        price: null,
        discount: 0.0,
        shipping: 0.0
      };
    },

    //domain method `calculatePrice` calculates the price of an item
    //@returns {Float} calculated price of the current product
    calculatePrice: function() {
      var price = 0.0;
      //check for the existence of the model attribute
      if (!this.has('calculatedPrice') && this.has('price')) {
        price = parseFloat(this.get('price'));
        this.set('calculatedPrice', price);
        return  price * (1 + 0.10);
      }
      throw new Error('Price not available for ' + this.get('name') + ' ' + this.get('id'));
    },

    //domain method `calculateShipping` calculates the shipping cost
    //@return {Float} calculated shipping cost of the current product
    calculateShipping: function() {
      var shipping = 0.0;
      //return some value
      return this.calculatePrice() * 0.05;
    }

  });
});