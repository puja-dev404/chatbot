$(document).ready(function () {
    $('#toggleIcon').on('click', function () {
        var passwordField = $('#passwordField');
        var toggleIcon = $('#toggleIcon');

        if (passwordField.attr('type') === 'password') {
            passwordField.attr('type', 'text');
            toggleIcon.removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            passwordField.attr('type', 'password');
            toggleIcon.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    $('.collapse-menu').on('click', function () {
        $('.sidebar-main-menus').toggleClass('d-none');
        if ($('.sidebar-main-menus').hasClass('d-none')) {
            $('.contant-wrapper').css('width', 96 + '%');
            $('.sidebar-icons').css({ 'border-top-right-radius': '10px', 'border-bottom-right-radius': '10px' });
        } else {
            $('.contant-wrapper').css('width', 100 - 16 + '%');
        }
    });

    $('.sidebar-menu-item').on('click', function () {
        const submenu = $(this).find('.sidebar-submenu');
        if (submenu.hasClass('d-block')) {
            submenu.removeClass('d-block').addClass('d-none');
            $(this).removeClass('menu-should-openig');
        } else {
            $('.sidebar-menu-item').removeClass('menu-should-openig');
            $('.sidebar-submenu').removeClass('d-block').addClass('d-none');
            $(this).addClass('menu-should-openig');
            submenu.removeClass('d-none').addClass('d-block');
        }
    });


    $('.box-info').on('click', function () {
        $('.box-info').removeClass('active'); // Remove 'active' from all .box-info elements
        $(this).addClass('active'); // Add 'active' only to the clicked .box-info element
    });


});
