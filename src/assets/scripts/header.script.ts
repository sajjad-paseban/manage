const $ = require('jquery');

export function openSidebar(){
    $('.sidebar').toggleClass('close');
    $('.main-content').toggleClass('full-width');
}

export function app(){
    $('.sidebar').addClass('close');
    $('.main-content').addClass('full-width');
    $('.header-profile-content').removeClass('show');
}

export function showProfile(){
    $('.header-profile-content').toggleClass('show');
}