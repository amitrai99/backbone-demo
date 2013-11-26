Backbone Demo
=============

Backbone JS demo/training.

## Why Backbone.js?

* Backbone provides modular MV* structure for your application.
* It provides features that will allow us to create dynamic single page applications easily.

## Dependencies
* Underscore js is a hard dependency.
* jQuery is needed for general purpose use like DOM manipulation and Ajax.

## Backbone components

* Model
* View
* Router
* Collection
* Events

### [Backbone Model](http://backbonejs.org/#Model)

* Models encapsulate an application's data and logic. 
* Notify change via the `change` event.
* `Backbone.Model` is the base class. Extend this to create your custom Model.

### [Backbone View](http://backbonejs.org/#View)

* View will render the UI using data from model.
* Registers and listens to the events arising out of UI.
* Binds to model and listens to the changes in model.
* `Backbone.View` is the base class. Extend this to create your custom view.

For generating HTML use a templating library like Mustache or Handlebars.

### [Backbone Router](http://backbonejs.org/#Router)

* Similar (not same) as controller in MVC.
* Provides mapping between a path and method that handles the path
* Has history capabilities using the old `hash-bang` (#!) or the new HTML5 [history](http://diveintohtml5.info/history.html) API
* Supports static as well as parameterized paths
* `Backbone.Router` is the base class. Extend this to create your custom Router.

### [Backbone Collection](http://backbonejs.org/#Collection)

* Backbone collections are simply an ordered set of models. 
* A collection will typically have only a single type of model in it.
* `Backbone.Collection` is the base class. Extend this to create your custom Collection.

### [Backbone Events](http://backbonejs.org/#Events)

* Event module is used to bind and trigger custom named events. 
* It is an independent module that can be mixed with other objects, giving them the capability to bind and trigger custom events.

##Misc

* [Refer the backbone documentation](http://backbonejs.org/docs/backbone.html#section-116)