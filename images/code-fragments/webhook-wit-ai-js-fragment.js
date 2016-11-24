function createWit(sendTextFunction) {
    const actions = {
        send(request, response) {
            const { sessionId, context, entities } = request;
            const { text, quickreplies } = response;
            return new Promise(function(resolve, reject) {
                const recipientId = sessions[sessionId].fbid;
                if (recipientId) {
                    sendTextFunction(recipientId, '[wit.ai] ' + response.text);
                }
                return resolve();
            });
        },
        getForecast({ context, entities }) {
            return new Promise(function(resolve, reject) {
                var location = firstEntityValue(entities, 'location')
                if (location) {
                    context.forecast = 'sunny in ' + location; // we should call a weather API here
                    delete context.missingLocation;
                } else {
                    context.missingLocation = true;
                    delete context.forecast;
                }
                return resolve(context);
            });
        },
    };
    const client = new Wit({ accessToken, actions, logger: new log.Logger(log.DEBUG) });
    return function run(sender, text) {
        const sessionId = findOrCreateSession(sender);
        client.runActions(
            sessionId,
            text,
            sessions[sessionId].context
        ).then(function(context) {
            console.log('Waiting for next user messages');
            sessions[sessionId].context = context;
        }).catch(function(err) {
            console.error('fb-webhook:', 'error from Wit:', err.stack || err);
        });
    }
}
