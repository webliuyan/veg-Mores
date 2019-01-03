(function(){
  var $navbarToggle = $('.navbar-toggle'),
      $navbarNav    =$('#navbar'),
      hasClass = function( elem, className ) {
        return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
      },
      toggleClass = function( elem, className ) {
        var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
        if( hasClass(elem, className ) ) {
          while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
          }
            elem.className = newClass.replace( /^\s+|\s+$/g, '' );
          } else {
            elem.className += ' ' + className;
          }
      },
      navbarToggleNav =  function (){
        toggleClass($navbarToggle, "active");
        toggleClass($navbarNav, "collapse");
      }
      $navbarToggle.on('click', navbarToggleNav);
    
})()