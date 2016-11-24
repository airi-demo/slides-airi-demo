function apiAiExample(sendTextFunction) {
    return function handle(sender, text) {
        var request = apiaiApp.textRequest(text);
        request.on('response', function(response) {
            if (response.result &&
                response.result.fulfillment &&
                response.result.fulfillment.speech) {
                sendTextFunction(sender, '[api.ai] ' + response.result.fulfillment.speech);
            }
        });
        request.on('error', function(error) {
            console.error('api.ai: error:', error);
        });
        request.end();
    }
}