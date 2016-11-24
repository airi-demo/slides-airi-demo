    var oxfordspeech = Microsoft.ProjectOxford.SpeechRecognition,
        client = oxfordspeech.SpeechRecognitionServiceFactory.createDataClient(
            oxfordspeech.SpeechRecognitionMode.shortPhrase,
            'en-US',
            MS_SPEECH_API_KEY,
            MS_SPEECH_API_KEY);
    client.onPartialResponseReceived = function(response) {
        doSomething(response);
    };
    client.onFinalResponseReceived = function(response) {
        doSomething(response);
    };
    client.onIntentReceived = function(response) {
        doSomething(response);
    };
    client.onError = function(errcode, msg) {
        console.error(msg);
    };
    client.sendAudio(wav_slice); // ArrayBuffer
    client.endAudio();