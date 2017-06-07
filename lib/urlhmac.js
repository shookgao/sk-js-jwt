'use strict';

const crypto = require('crypto');
const querystring = require('querystring')

function urlEncoding(data, secret) {
    let h = crypto.createHmac('sha256', secret);
    h.update(data);
    let s = h.digest('base64');
    s = querystring.escape(s);
    return s;
}

module.exports = {urlEncoding}