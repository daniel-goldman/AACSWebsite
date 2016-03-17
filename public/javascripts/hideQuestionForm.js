function hideQuestionForm(responseText) {
    $(document).ready(function() {
        $('form[name=\'questionForm\']').fadeOut(500);
        $('#questionSubmitStatus').hide();
        document.getElementById('questionSubmitStatus').innerHTML = responseText;
        $('#questionSubmitStatus').delay(500).fadeIn(500);
    });
}