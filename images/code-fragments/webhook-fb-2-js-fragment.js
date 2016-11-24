function receivedMessage(event) {
    var senderID = event.sender.id;
    var message = event.message;
    var messageText = message.text;
    if (messageText) {
        switch (messageText) {
            case 'image':
                sendImageMessage(senderID);
                break;
            default:
                wit_ai_service(senderID, messageText);
                api_ai_service(senderID, messageText);
        }
    }
}