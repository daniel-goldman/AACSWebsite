function createHttpRequest() {
    var httpRequest;
    try { httpRequest = new XMLHttpRequest(); } catch (e) { return null; }

    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState == 4) {
            // parse JSON data
            var jsonObj = JSON.parse(httpRequest.responseText);
            // jsonObj now contains the object and can be accessed using jsonObj.[name]
            document.getElementById('status').innerHTML = jsonObj.status;
        }
    }
    httpRequest.open('post', '/questions/createQuestion')
}
