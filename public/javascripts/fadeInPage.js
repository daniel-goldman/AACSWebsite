function fadeInPage() {
    $(document).ready(function() {
        var bgImage = $('.bgImage');
        var h1 = $('h1');
        var mainContentAfterHeader = $('.mainContentAfterHeader');

        bgImage.hide();
        bgImage.fadeIn(800);
        h1.hide();
        h1.delay(300).fadeIn(800);
        mainContentAfterHeader.hide();
        mainContentAfterHeader.delay(450).fadeIn(700);
    });
}
fadeInPage();
