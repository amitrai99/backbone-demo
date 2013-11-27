define(['Backbone', 'handlebars', 'productView'], function (Backbone, handlebars, productView) {

  //`productView` is the view class that contains the attributes and methods for rendering the view
  var productViewShoe = productView.extend({

    //attributes of the product shoe view
    attributes: {
      viewTemplate: '#view-template-shoe',
    },

    initialize: function() {
      //Set the template property for rendering data on page
      var src = $(this.attributes.viewTemplate).html();
      var tpl = handlebars.compile(src);
      //setting the template property to the compiled template
      this.template = tpl;
      //set attributes class dynamically
      this.$el.attr('class', 'productViewShoe_' + this.model.get('ID'));
      this.render();
      //bind the render method to the change event of model
      this.listenTo(this.model, 'change', this.render);      
    }

  });

  return productViewShoe;

});