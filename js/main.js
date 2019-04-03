$(document).ready(function () {
    'use strict';

    // onLoad -> clear fields
    $('.contact_form--input').each(function(index, el) {
        $(el).val('');
    });

    $('.go-down').on('click', function () {
        $('.body, html').animate({
            scrollTop: $('.about').offset().top
        }, 1000)
    });

    $('.menu-item-box .menu-item').on('click', function (e) {
        e.preventDefault();
        $('.menu-item-box').removeClass('active');
        $(this).parent('.menu-item-box').addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top
        }, 1000);
    });

    $('.menu_like-link').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top + 300
        }, 1000);
    });

    $('.disabled-link').click(function(event) {
        /* Act on the event */
        event.preventDefault();
    });

    



    $('.section-link').on('click', function (e) {
        e.preventDefault();
        $('.menu-item-box').removeClass('active');
        $(this).parent('.menu-item-box').addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).data('link')).offset().top
        }, 1000);
    });

    $(".project-box").on('click', function() {
        const url = $(this).data().url;
        if(url !== "") {
            window.open(url, '_blank');
        }
        
    });

    // COntact Form
    $('#contact_form').submit(function(event) {
        /* Act on the event */
        event.preventDefault();
        let inputs = {};
        $('.contact_form--input').each(function(index, el) {
            inputs[this.name] = $(this).val();
        });

        // console.log(inputs);
        // $.ajax({
        //     url: '/path/to/file',
        //     type: 'default GET (Other values: POST)',
        //     dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
        //     data: {param1: 'value1'},
        // })
        // .done(function() {
        //     console.log("success");
        // })
        // .fail(function() {
        //     console.log("error");
        // })
        // .always(function() {
        //     console.log("complete");
        // });
        

        setTimeout(() => {
            $('#to_hide').fadeOut('slow', function() {
                alert("Thank you for reaching me out, I will reach you out as soon as possible.");
                $('.contact_form--input').each(function(index, el) {
                    $(el).val('');
                });
            });
        }, 1000);

        
    });

    if ($('.projects-slider').length) {
        $('.projects-slider').slick({
            slidesToShow: 4,
            infinite: true,
            focusOnSelect: true,
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    infinite: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2,
                    infinite: true
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1,
                    infinite: true
                }
            }]
        });
    }
    
});
