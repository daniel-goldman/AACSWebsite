function fadeInPage() {
    $(document).ready(function() {
//        console.log('function running');
        var bgImage = $('.bgImage');
        bgImage.hide();
        bgImage.fadeIn(800);

        var h1 = $('h1');
        h1.hide();
        h1.delay(300).fadeIn(800);

        var mainContentAfterHeader = $('.mainContentAfterHeader');
        mainContentAfterHeader.hide();
        mainContentAfterHeader.delay(450).fadeIn(700);
    });
}
fadeInPage();
