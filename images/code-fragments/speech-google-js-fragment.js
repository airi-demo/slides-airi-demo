var json_request = {
    'config': {
        'encoding': 'LINEAR16',
        'sample_rate': 16000,
        'languageCode': 'en-US',
        'maxAlternatives': 5,
        'profanityFilter': false,
    },
    'audio': {}
};
json_request.audio.content = _arrayBufferToBase64(wav.buffer, 0, wav.byteLength);
request.post({
    method: 'POST',
    url: 'https://speech.googleapis.com/v1beta1/speech:syncrecognize',
    body: JSON.stringify(json_request),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + GOOGLE_ACCESS_TOKEN
    }
}, function(er, response, body) {
    if (er) throw er;
    callback(response.body);
});

