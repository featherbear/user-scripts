// ==UserScript==
// @name        Load Slack link in browser
// @namespace   Violentmonkey Scripts
// @match       https://*.slack.com/archives/*/*
// @grant       none
// @version     1.0
// @author      featherbear
// @description 05/06/2023, 17:15:26
// ==/UserScript==

(function load() {
  let elem = document.querySelector('a.c-link[href^="/messages/"]')
  if (elem) {
    location = elem.href
  } else {
    setTimeout(load, 200)
  }
})()
