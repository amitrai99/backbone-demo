define(['Backbone', 'productView', 'productModel'], function (Backbone, productView, productModel) {

    var AppRouter = Backbone.Router.extend({
      //setup `routes`
      //Note that you'll want to avoid using a leading slash in your route definitions
      routes: {
        "product/id/:id": "getProduct" // matches #product/id/12345
      },

      getProduct: function(id) {
        var pm = new productModel({productID: id});
        var pv = new productView({model: pm, el : '#productDialog'});
      }

    });

    return AppRouter;

});