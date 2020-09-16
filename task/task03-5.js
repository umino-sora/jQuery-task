// 課題5、6
(function($, window) {
    $(function() {
        $('#zip').jpostal({
            click : '#search',
            postcode : [
                '#zip'
            ],
            address : {
                '#pref'  : '%3',
                '#city'  : '%4',
                '#street'  : '%5'
            }
        });
    });
})(jQuery, window);
