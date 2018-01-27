'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: String,
    decription: text,
    thumbImg: String
})

const User = mongoose.model('Article', UserSchema)