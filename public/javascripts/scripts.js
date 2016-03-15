function fadeInPage() {
    $(document).ready(function() {
        console.log('function running');
        $('.bgImage').hide();
        $('.bgImage').fadeIn(800);

        $('h1').hide();
        $('h1').delay(300).fadeIn(600);

        $('.mainContentAfterHeader').hide();
        $('.mainContentAfterHeader').delay(450).fadeIn(600);
    });
}
fadeInPage();

/*
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
*/