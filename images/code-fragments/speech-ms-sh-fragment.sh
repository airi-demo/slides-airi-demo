access_token=$(curl -s -L -X POST \
		-d grant_type=client_credentials \
		-d client_id=${SPEECH_API_KEY} \
		-d client_secret=${SPEECH_API_KEY} \
		-d scope=https://speech.platform.bing.com \
		https://oxford-speech.cloudapp.net/token/issueToken \
	      | jq -r .access_token -)
instance_id=$(uuidgen)
request_id=$(uuidgen)
curl -v -s -L \
    -X POST \
    -H "Authorization: Bearer ${access_token}" \
    -H "Content-Type: audio/wav; codec=\"audio/pcm\"; samplerate=16000" \
    --data-binary @${audio_file} \
    "https://speech.platform.bing.com/recognize?scenarios=smd&appid=D4D52672-91D7-4C74-8AD8-42B1D98141A5&locale=en-US&device.os=linux&version=3.0&format=json&instanceid=${instance_id}&requestid=${request_id}"
