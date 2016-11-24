var google = require('googleapis');
var key = require('./.service-account-key.json');
var jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key, ['https://www.googleapis.com/auth/cloud-platform'],
    null);

function get_google_token(callback) {
    jwtClient.authorize(function(err, tokens) {
        if (err) throw err;
        callback(null, tokens.access_token);
    });
}