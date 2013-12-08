    $(document).ready( function() {
    // Filters

                        var $posts = $('.post-list article');
                        var $filters = $('#filters li a');
                        var $categories = $('#categories li a');
                        var $introductions = $('#introductions a');
                        var displayed = ['.post', ''];
                        function Sort(target) {
                                $posts.not(displayed.join('')).stop().slideUp(500, 'easeOutExpo');
                                $posts.filter(displayed.join('')).stop().slideDown(500, 'easeOutExpo');
                              target.addClass('on');
                              target.parent().siblings().find('a').removeClass('on');

                        }

                       $introductions.click( function() {
                                if (!$(this).hasClass('on')) {
                                        $posts.find('.post-introduction').slideToggle(500, 'easeOutExpo');
                                        $introductions.toggleClass('on');
                                }
                        });

                        $filters.click( function() {
                                displayed[0] = '.' + $(this).data('view');
                                $filters.toggleClass('on');
                                Sort($(this));
                        });

                        $categories.click( function() {
                                var view = ($(this).data('view')) ? '.' + $(this).data('view') : '';
                                displayed[1] = view;
                                Sort($(this));
                        });
});