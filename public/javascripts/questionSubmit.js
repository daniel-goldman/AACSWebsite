function questionSubmit(data) {
    var req = null;
    var obj = null;

    try { req = new XMLHttpRequest(); } catch (e) { return null; }
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200) {
            hideQuestionForm(req.responseText);
        }
    }
    req.open('post', '/questions/createQuestion');
    req.setRequestHeader('Content-Type', 'application/json');
    obj = JSON.stringify({
        'firstName': data[0].value,
        'lastName': data[1].value,
        'email': data[2].value,
        'question': data[3].value
    });
    req.send(obj);
}
