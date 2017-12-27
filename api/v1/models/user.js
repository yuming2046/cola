'use strict'

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
    nickName: String,
    avatar: String
})

const User = mongoose.model('User', UserSchema)