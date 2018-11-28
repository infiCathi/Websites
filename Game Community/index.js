$(function() {
    $('#streamer_dropdown, #game_dropdown').on('click', 'li', function() {
        var val = $(this).data('value');

        if (val) {
            window.open(val);
        }
    });

    window.setTimeout(function() {
        $('.classes li').each(function() {
            var $this = $(this);
            var $span = $this.children('span');

            $span.css('height', ($this.height() / 100) * (100 - $span.data('fill')) + 'px').after($('<span class="percent"></span>').text((100 - $span.data('fill')) + '%'));
        });
    }, 500);

    $('.vid video').on('ended', function() {
        $('body').addClass('completed');
    }).add('.signup').on('click', function() {
        $('.vid video')[0].pause();
        $('body').addClass('completed');
    });

    $(document).on('click', '#calendar-tab', function() {
        $('.google').toggleClass('google-collapse');
        $(this).toggleClass('inactive');
    });

    $('.nav-tabs a').on('click', function() {
        setTimeout(function() {
            var $iframe = $('iframe:visible[data-src]');

            if ($iframe.length) {
                $iframe.attr('src', $iframe.data('src')).removeData('src');
            }
        }, 200);
    });
    $('.carousel').carousel({
        interval: 10000
    })
    $(function() {
        $('[data-toggle="popover"]').popover()
    })

});
