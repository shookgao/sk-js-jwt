'use strict';

const urlbase64 = require('./urlbase64');
const urlhmac = require('./urlhmac');

function sign(secret = 'secret', payload = {iss: 'Shook Gao'}, header = {typ: 'JWT',alg: 'HS256'}) {
    let a = [];
    a.push(urlbase64.urlEncoding(header));
    a.push(urlbase64.urlEncoding(payload));
    a.push(urlhmac.urlEncoding(a.join('.'), secret));
    return a.join('.');
}

function verify(str, secret='secret') {
    if (typeof str === 'string' && str.split('.').length == 3) {
        let a = str.split('.');
        let header = urlbase64.urlDecoding(a[0]);
        let payload = urlbase64.urlDecoding(a[1]);
        let res = sign(secret, payload, header);
        if (res === str) {
            return {ok: true, data: payload};
        }
    }
    return {ok: false};
}

module.exports = {sign, verify}