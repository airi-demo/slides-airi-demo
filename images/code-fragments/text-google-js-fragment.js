var json_request = {
    "document": {},
    "features": {
        "extractSyntax": "true",
        "extractEntities": "true",
        "extractDocumentSentiment": "true",
    },
    "encodingType": "UTF8"
};
json_request.document['type'] = 'PLAIN_TEXT';
json_request.document['content'] = data;
request.post({
    method: 'POST',
    url: 'https://language.googleapis.com/v1beta1/documents:annotateText',
    json: json_request,
    headers: {
        'Authorization': 'Bearer ' + GOOGLE_ACCESS_TOKEN
    }
}, function(er, response, body) {
    if (er) throw er;
    callback(response.body);
});