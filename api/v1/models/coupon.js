'use strict';

import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: { type: String, required: true },
    description: { type: String, required: false },
    createTime: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('Coupon', CouponSchema);