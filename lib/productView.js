//`productView` is the view that displays the product and contains it's attributes
//
define(['Backbone'], function (Backbone) {

  var productView = Backbone.View.extend({

    tagName: "li",

    className: "document-row",

    events: {
      "click .icon":          "open",
      "click .button.edit":   "openEditDialog",
      "click .button.delete": "destroy"
    },

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
    },

    render: function() {
      ...
    }

  });

});