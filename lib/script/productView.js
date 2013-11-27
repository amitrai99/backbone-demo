define(['Backbone', 'handlebars'], function (Backbone, handlebars) {

  //`productView` is the view class that contains the attributes and methods for rendering the view
  var productView = Backbone.View.extend({

    tagName: "div", //root tag of the view "div" is the default

    className: "productView", //id of the root element

    //attributes of the product view
    attributes: {
      class: "product-view",
      iconZoom: 1,
      viewTemplate: '#view-template',
    },

    rendered: false,

    //set of events for this view
    events: {
      "click .icon": "zoomImage",
      "click .button.close": "closeDialog"
    },

    //`initialize` initializes the view [Refer the backbone documentation](http://backbonejs.org/docs/backbone.html#section-116)
    //note that our custom initialize does not take any options but if we pass 
    //an object literal (hash) with special Backbone options those will be set on the view automatically
    //These properties are `model`, `collection`, `el`, `id`, `className`, `tagName`, `attributes` and `events`.
    //```js
    //create model
    //var pm = new productModel({id:12345, name: 'foo product', price: '123', currency: '$'});
    ////set the model and el on the view on instantiation
    //var pv = new productView({model:pm, el: $('#prodview')});
    //```
    initialize: function() {
      //Set the template property for rendering data on page
      var src = $(this.attributes.viewTemplate).html();
      var tpl = handlebars.compile(src);
      //setting the template property to the compiled template
      this.template = tpl;
      //set attributes id dynamically
      this.attributes.id = 'productView_' + this.model.get('ID');
      this.render();
      //attach your el to the DOM
      $('body').append(this.$el);
      
      //bind the render method to the change event of model
      this.listenTo(this.model, "change", this.render);      
    },

    //renders the view
    render: function() {
      //get data from model
      var data = this.model.toJSON();
      var html = this.template(data);
      this.$el.html(html);
      //A good convention is to return `this` at the end of render to enable chained calls.
      return this;
    }

  });

  return productView;

});