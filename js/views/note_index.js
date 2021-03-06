"use strict";

APP.NoteIndex = Backbone.View.extend({

	template: _.template($('#indexTemplate').html()),

  render() {
    this.$el.html(
    	this.template({notes: this.collection.toJSON()})
    );
    return this;
  }
});
