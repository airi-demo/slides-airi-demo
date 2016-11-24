var watson = require('watson-developer-cloud');
var speech_to_text = watson.speech_to_text({
    username: config.username,
    password: config.password,
    version: config.version,
});
var recognizeStream = speech_to_text.createRecognizeStream({
    content_type: 'audio/wav',
    continuous: true,
    interim_results: true
});
fs.createReadStream(file).pipe(recognizeStream);
recognizeStream.pipe(fs.createWriteStream('transcription.txt'));
recognizeStream.setEncoding('utf8');
recognizeStream.on('data', function(event) { onEvent('Data:', event); });
recognizeStream.on('results', function(event) { onEvent('Results:', event); });
recognizeStream.on('error', function(event) { onEvent('Error:', event); });
recognizeStream.on('close-connection', function(event) { onEvent('Close:', event); });
function onEvent(name, event) {
    console.log(name, event);
};

