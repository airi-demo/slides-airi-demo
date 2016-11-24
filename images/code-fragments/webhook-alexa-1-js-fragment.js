app.post('/alexa-skill', function(req, res) {
    var answer = { };
    if (req.body.request.type === 'IntentRequest') {
        var intent = req.body.request.intent;
        if (intent.name === 'RawText') {
            var literal = intent.slots.Text.value;
            stt_ws_server.connections.forEach(function(conn) {
                conn.sendText(literal);
            });
            answer.response.outputSpeech.text = literal;
            answer.response.shouldEndSession = false;
        }
        res.send(answer);
    }
});