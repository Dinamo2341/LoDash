$(function() {
    $('.jcarousel')
        .jcarousel({
            wrap: 'circular'
        })
        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        });

        $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .jcarouselPagination({
            item: function(page) {
           return '<a href="#' + page + '">' + page + '</a>';
        }
        })

        $( ".accordion" ).accordion({
        active: false,
        collapsible: true,
        animate: 400
        });

        $('.accordion p').click(function() {
            $(this).addClass('active');
            });
        $('.accordion p').click(function() {
             $('.accordion .active').removeClass("active");
             $(this).addClass('active');
});

})
