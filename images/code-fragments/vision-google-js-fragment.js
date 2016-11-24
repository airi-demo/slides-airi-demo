var vision = require('@google-cloud/vision')({
    projectId: 'western-oarlock-141504',
    keyFilename: '.service-account-key.json'
});
var json_request = {
    image: {
    },
    //FACE_DETECTION LANDMARK_DETECTION LOGO_DETECTION LABEL_DETECTION TEXT_DETECTION SAFE_SEARCH_DETECTION IMAGE_PROPERTIES
    features: [{type: 'FACE_DETECTION', maxResults: 5, }, { type: 'LABEL_DETECTION', maxResults: 5, }, { type: 'TEXT_DETECTION', maxResults: 5, }],
    imageContext: { languageHints: [], }
};
json_request.image.content = image_content_base64;
vision.annotate(json_request, function(err, annotations, apiResponse) {
    if (err) throw (err);
    callback(annotations);
});