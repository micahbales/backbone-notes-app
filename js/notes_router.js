"use strict";

// Create Global Namespace for App
window.APP = window.APP || {};

APP.NotesRouter = Backbone.Router.extend({
  routes: {
    "notes/index": "index",
    "note/new": "create",
    "note/:id/delete": "delete",
    "note/:id/edit": "edit"
  },
  $container: $('#template-body'),
  initialize() {
    this.collection = new APP.NotesCollection();
    this.collection.fetch({ajaxSync: false});
    this.index();
    // Backbone Watches Changes in URL
    Backbone.history.start();
  },
  index() {
    const view = new APP.NoteIndex({collection: this.collection});
    this.$container.html(view.render().el);
  },
  create() {
    const view = new APP.NoteNew({
      collection: this.collection,
      model: new APP.NoteModel()
    });
    this.$container.html(view.render().el);
  },
  delete(id) {
    const note = this.collection.get(id);
    note.destroy();
    Backbone.history.navigate("notes/index", {trigger: true});
  },
  edit(id) {
    const view = new APP.NoteEdit({
      model: this.collection.get(id)
    });
    this.$container.html(view.render().el);
  }
});
