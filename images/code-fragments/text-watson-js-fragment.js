var extract_list = [
    'authors', 'concepts', 'dates', 'doc-emotion', 'entities',
    'feeds', 'keywords', 'pub-date', 'relations', 'typed-rels',
    'doc-sentiment', 'taxonomy', 'title'
];
request.post({
    method: 'POST',
    url: 'https://gateway-a.watsonplatform.net/calls/text/TextGetCombinedData',
    form: {
        apikey: ALCHEMY_API_KEY,
        extract: extract_list.join(','),
        outputMode: 'json',
        showSourceText: 0,
        text: 'text string'
    }
}, function(er, response, body) {
    if (er) throw er;
    callback(response.body);
});


