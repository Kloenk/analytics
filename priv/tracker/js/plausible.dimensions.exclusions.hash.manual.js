!function(){"use strict";var p=window.location,w=window.document,d=w.currentScript,g=d.getAttribute("data-api")||new URL(d.src).origin+"/api/event";function f(t){console.warn("Ignoring Event: "+t)}function t(t,e){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(t){}var n=d&&d.getAttribute("data-include"),r=d&&d.getAttribute("data-exclude");if("pageview"===t){var i=!n||n&&n.split(",").some(s),a=r&&r.split(",").some(s);if(!i||a)return f("exclusion rule")}var o={};o.n=t,o.u=e&&e.u?e.u:p.href,o.d=d.getAttribute("data-domain"),o.r=w.referrer||null,o.w=window.innerWidth,e&&e.meta&&(o.m=JSON.stringify(e.meta)),e&&e.props&&(o.p=e.props);var l=d.getAttributeNames().filter(function(t){return"event-"===t.substring(0,6)}),u=o.p||{};l.forEach(function(t){var e=t.replace("event-",""),n=d.getAttribute(t);u[e]=u[e]||n}),o.p=u,o.h=1;var c=new XMLHttpRequest;c.open("POST",g,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&e&&e.callback&&e.callback()}}function s(t){return p.pathname.match(new RegExp("^"+t.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var e=window.plausible&&window.plausible.q||[];window.plausible=t;for(var n=0;n<e.length;n++)t.apply(this,e[n])}();