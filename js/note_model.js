"use strict";

APP.NoteModel = Backbone.Model.extend({
  defaults: {
    title: "",
    message: "",
    id: _.random(0, 9999)
  }
});

APP.NotesCollection = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("NotesCollection"),
  model: APP.NoteModel,
});
