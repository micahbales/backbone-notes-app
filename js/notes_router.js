"use strict";

// Create Global Namespace for App
window.APP = window.APP || {};

APP.NotesRouter = Backbone.Router.extend({
  routes: {
    "notes/index": "index"
  },
  $container: $('#template-body'),
  initialize: function () {
    this.collection = new APP.NotesCollection();
    this.collection.fetch({ajaxSync: false});
    this.index();
    // Backbone Watches Changes in URL
    Backbone.history.start();
  },
  index: function () {
    var view = new APP.NoteIndex({collection: this.collection});
    this.$container.html(view.render().el);
  }
});
