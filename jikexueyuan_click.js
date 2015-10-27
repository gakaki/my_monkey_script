// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// @match        http://*.jikexueyuan.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

setInterval ( function () {

    var clickEvent  = document.createEvent ("HTMLEvents");
    clickEvent.initEvent ("click", true, true);
    //var selector_str = ".game-opt,.btn-wrap,.canvas-mask,#clickbox,.btn";
    var selector_str = ".canvas-mask";
    console.log($(selector_str)[0]);
    $(selector_str).trigger("click");
    $(selector_str)[0].dispatchEvent (clickEvent);
        $(selector_str).click();

    console.log("clicked");
    
}, 100);