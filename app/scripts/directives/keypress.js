define([
  'app'
], function(app) {
  app.directive('notaKeypress', function() {
    console.log('actived!!')
    return function(scope, elem, attrs) {
      elem.bind('keyup', function(e) {
        console.log(e, e.keyCode)
        switch (e.keyCode) {
          case 34: // PgDn
          case 40: // down arrow
          case 74: // j
            return scope.$apply(attrs.notaDown)
          case 33: // PgUp
          case 38: // up arrow
          case 75: // k
            return scope.$apply(attrs.notaUp)
          case 76: // l
          case 39: // right arrow
            return scope.$apply(attrs.notaRight)
          case 72: // h
          case 37: // left arrow
            return scope.$apply(attrs.notaLeft)
          case 32: // Space
            e.preventDefault()
            return scope.$apply(attrs.notaSpace)
          case 85: // U
            return scope.$apply(attrs.notaRead)
          case 72: // H
            return scope.$apply(attrs.notaStar)
          case 73: // i
            return scope.$apply(attrs.noteInsert)
          case 68: // d
            return scope.$apply(attrs.noteDelete)
        }
      })
    }
  })
})
