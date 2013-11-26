define(['Backbone', 'handlebars'], function (Backbone, handlebars) {

  //`productView` is the view class that contains the attributes and methods for rendering the view
  var productView = Backbone.View.extend({

    tagName: "div", //root tag of the view "div" is the default

    id: "productView", //id of the root element

    //attributes of the product view
    attributes: {
      className: "product-view",
      iconZoom: 1,
      viewTemplate: '#view-template'
    },

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
      this.render();
      //bind the render method to the change event of model
      this.listenTo(this.model, "change", this.render);
    },

    //renders the view
    render: function() {

      //(1) Rendering the template from script tag in page
      var src = $(this.attributes.viewTemplate).html();
      var tpl = handlebars.compile(src);
      //get data from model
      var data = this.model.get('productData');
      //generate
      var html = tpl(data);
      //render
      console.log(data);
      this.$el.html(html);
      $('body').html(this.$el.html());

    }

  });

  return productView;

});