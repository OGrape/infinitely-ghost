/*jslint browser:true, unparam:true*/
/*global $, FastClick, hljs*/

$(function () {

    'use strict';

    // Execute FastClick.js
    FastClick.attach(document.body);

    // Expanded article images
    $('article img').parent().addClass('article-image');

    // Execute Highlight.js
    hljs.initHighlightingOnLoad();

    // Social sharing links
    $('#twitter').click(function () {
        window.open(this.href, 'twitter-share', 'width=550,height=235');
        return false;
    });

    $('#facebook').click(function () {
        window.open(this.href, 'facebook-share', 'width=580,height=296');
        return false;
    });

    $('#google-plus').click(function () {
        window.open(this.href, 'google-plus-share', 'width=490,height=530');
        return false;
    });

});
