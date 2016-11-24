var watson = require('watson-developer-cloud');
var visualRecognition = watson.visual_recognition({
    version: 'v3',
    api_key: WATSON_API_KEY,
    version_date: '2015-05-19'
});
var params = {};
params.images_file = fs.createReadStream(file_path);
visualRecognition.classify(params, function(err, res) {
    if (err) throw err;
    callback(res);
});
visualRecognition.detectFaces(params, function(err, res) {
    if (err) throw err;
    callback(res);
});
visualRecognition.recognizeText(params, function(err, res) {
    if (err) throw err;
    callback(res);
});