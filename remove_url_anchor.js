const removeUrlAnchor = url => 
  (url.includes('#') === true) ? 
      url.slice(0, url.indexOf('#')) :
        url;