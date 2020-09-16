// 課題4
(function($, window) {
    const config = {
    wrap: true
    }
    flatpickr('.flatpickr', config);
})(jQuery, window);


// 課題4
(function($, window) {
    $(function() {
        $('#date_picker').flatpickr({"locale": "ja"})    
    });
})(jQuery, window);
