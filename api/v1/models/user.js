'use strict';

import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, required: true },
    nickName: { type: String, required: true },
    password: {type: String, required: true },
    avatar: { type: String, required: false },
    createdTime: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);