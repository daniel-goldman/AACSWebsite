function callAdmin(path){
    var req = null;

    try { req = new XMLHttpRequest(); } catch (e) { return null; }
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200) {
            console.log('ready');
        }
    }
    req.open('post', '/admin/questionAnswer/retrieveRandomQuestion');
    req.send();
}
