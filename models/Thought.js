const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function(value){
        return value.toDateString()
      },
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
    }
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thoughts', thoughtSchema);

module.exports = Thought;
