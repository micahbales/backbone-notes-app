"use strict";

APP.NoteNew = Backbone.View.extend({

  template: _.template($('#formTemplate').html()),

  events: {
    "click button.save": "save"
  },

  save(e) {
    e.stopPropagation();
    e.preventDefault();

    // Use Values from the Form to Update Models
    this.model.set({
      title: this.$el.find('input[name=title]').val(),
      message: this.$el.find('textarea[name=message]').val()
    });

    if (this.model.isValid()) {
      // Add to Collection
      this.collection.add(this.model);
      // Save the Model
      this.model.save();
      // Redirect back to Index
      Backbone.history.navigate("notes/index", {trigger: true});
    }
  },
  render() {
    this.$el.html(
    	this.template(this.model.toJSON())
    );
    return this;
  }
});
