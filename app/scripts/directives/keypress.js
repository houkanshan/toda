define([
  'app'
], function(app) {
  app.directive('notaKeypress', function() {
    console.log('actived!!')
    return function(scope, elem, attrs) {
      elem.bind('keypress', function(e) {
        console.log(e, e.keyCode)
        switch (e.keyCode) {
          case 34: // PgDn
          case 39: // right arrow
          case 40: // down arrow
          case 106: // j
            console.log('down')
            return scope.$apply(attrs.notaDown);

          case 32: // Space
            e.preventDefault();
            return scope.$apply(attrs.notaSpace);

          case 33: // PgUp
          case 37: // left arrow
          case 38: // up arrow
          case 107: // k
            console.log('up')
            return scope.$apply(attrs.notaUp);

          case 85: // U
            return scope.$apply(attrs.notaRead);

          case 72: // H
            return scope.$apply(attrs.notaStar);
        }
      })
    }
  })
})
