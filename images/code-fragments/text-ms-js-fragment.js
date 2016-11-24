var json_request = { "documents": [{}] };
json_request.documents[0].id = "0000000001";
json_request.documents[0].language = "en";
json_request.documents[0].text = data;
request.post({
    method: 'POST',
    url: 'https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases',
    json: json_request,
    headers: { 'Ocp-Apim-Subscription-Key': MS_TEXT_API_KEY }
}, function(er, response, body) {
    if (er) throw er;
    callback(response.body);
});

