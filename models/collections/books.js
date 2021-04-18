const mongoose = require("mongoose")
const Schema = mongoose.Schema;

// Creating Books schema
const booksSchema = new Schema({

created_on:{
    type:Date,
    default:Date.now()
},

isbn: {
  type: Number,
  required: true
},

book_title: {
  type:String,
  required: true
},

author_name: [
  {
    type: String,
    required: true
  }
],

small_discription:{
  type: String,
  required: true
},

image_URL: {
  type: String,
  required: true
},

book_category: [
  {
    type: String,
    required: true
  }
],

youtube_links: [
  {
    type: String,
    required: true
  }
],

podcast_mp3: [
  {
    type: String,
  }
],

download_links: [
  {
    type: String,
  }
],

// Todo
comments: [
  {
    type: Object,
  }
],

approved: {
  type: Boolean,
  required: true
},

likes: {
  type: Number,
},

// Todo
total_rating: {
  type: Number
},

// ratingd:[
//   {
//     type: Object
//   }
// ]

})

module.exports = mongoose.model('Books', booksSchema);