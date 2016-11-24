var json_request = {
    'client_id': ALEXA_Client_ID,
    'client_secret': ALEXA_Client_Secret,
    'refresh_token': ALEXA_refresh_token,
    'grant_type': 'refresh_token'
};
request.post({
    method: 'POST',
    url: 'https://api.amazon.com/auth/o2/token',
    json: json_request,
}, function(er, response, body) {
    if (er) throw er;
    var token = decodeURI(response.body.access_token);
    callback(token);
});
