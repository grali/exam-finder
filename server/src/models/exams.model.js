// exams-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const exams = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    title: { type: String, required: true },
    description: { type: String, required: false },
    notes: { type: String, required: false },
    category: { type: String, required: true },

  }, {
    timestamps: true
  });

  return mongooseClient.model('exams', exams);
};
