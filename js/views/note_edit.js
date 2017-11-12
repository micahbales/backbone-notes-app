"use strict";

APP.NoteEdit = Backbone.View.extend({

  template: _.template($('#formTemplate').html()),

  events: {
    "click button.save": "save"
  },

  save: function (e) {
    e.stopPropagation();
    e.preventDefault();

    this.model.set({
      title: this.$el.find('input[name=title]').val(),
      message: this.$el.find('textarea[name=message]').val()
    });

    if (this.model.isValid()) {
      this.model.save();
      Backbone.history.navigate('notes/index', {trigger: true});
    }
  },
  render: function () {
    this.$el.html(
      this.template(this.model.toJSON())
    );
    return this;
  }
});
