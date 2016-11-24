var features = [
    'Categories',
    'Tags',
    'Description',
    'Faces',
    'ImageType',
    'Color',
    'Adult',
].join(',');
var details = ['Celebrities'].join(','); // for 'Faces'
var json_request = {
    method: 'POST',
    url: 'https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=' + features + '&details=' + details,
    json: { 'url': image_url },
    headers: {
        'Ocp-Apim-Subscription-Key': MS_VISION_API_KEY,
        'Content-Type': 'application/json'
    }
};
request.post(json_request, function(er, response, body) {
    if (er) throw er;
    callback(null, body);
});