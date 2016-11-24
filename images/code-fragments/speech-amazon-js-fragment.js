var payload_request = {
    'messageHeader': {
        'deviceContext': [{
            'name': 'playbackState',
            'namespace': 'AudioPlayer',
            'payload': {
                'streamId': stream_id,
                'offsetInMilliseconds': '0',
                'playerActivity': 'IDLE'
            }
        }]
    },
    'messageBody': {
        'profile': 'alexa-close-talk',
        'locale': 'en-us',
        'format': 'audio/L16; rate=16000; channels=1'
    }
};
options.files['request#application/json; charset=UTF-8'] = JSON.stringify(payload_request, null, '  ');;
options.files['audio#audio/L16; rate=16000; channels=1'] = wavbuffer; // ArrayBuffer
var ws = new(require('browser-websocket'))('wss://gc-airi-demo.keyma.kr/alexa-skill-ws');
ws.on('message', function(e) {...output text... })
request.post({
    method: 'POST',
    url: 'https://access-alexa-na.amazon.com/v1/avs/speechrecognizer/recognize',
    files: {
        'request#application/json; charset=UTF-8': JSON.stringify(payload_request),
        'audio#audio/L16; rate=16000; channels=1': wavbuffer; // ArrayBuffer
    },
    headers: { 'Authorization': 'Bearer ' + amazon_token },
}, function(er, response, body) {
    if (er) throw er;
    callback(response.body);
});