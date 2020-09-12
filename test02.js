(function($, window) {
    $(function() {
        // 間に処理を書く
        $('#index').find('li').each(function() {
            alert($(this).text());
        });
    });
})(jQuery, window);
