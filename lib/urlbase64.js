'use strict';
const querystring = require('querystring')

function urlEncoding(obj) {
    let b = new Buffer(JSON.stringify(obj));
    let s = b.toString('base64');
    s = querystring.escape(s)
    return s;
}

function urlDecoding(str) {
    str = querystring.unescape(str);
    let b = new Buffer(str, 'base64');
    let s = b.toString();
    try {
        let p = JSON.parse(s);
        return p;
    } catch (error) {
        return '';
    }
}

module.exports = {urlEncoding, urlDecoding}