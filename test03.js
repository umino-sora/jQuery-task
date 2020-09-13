(function($, window) {
    $(function() {
        //ここに処理を書く
        // $('#click_me').on('click', function() {
        $('body').on('click', function() {
            $(this).css({'color': 'red'});
        });
    });
})(jQuery,window);
