module.exports = (function() {
  var http = require('./http.js'),
      map = require('./map'),
     
      saveArticle = function () {
            
        var points = map.getNewPointsToSave();

        http.post('/article', {
            title: $('#article-title').val(),
            content: $('#article-content').val(),
            hasMap: $('input[name=enable-map]:checked').val(),
            points: points,
        }).then(response => {
          // TODO: Show feedback message with the status of the response
          console.log(response);
        });
      },

      init = function () {
          // Call map setup
          map.init();

          // Bind the button to execute the save function
          $('#save').on('click', function () {
            saveArticle();
            location.replace('/');
          });
      }

  return {
    init : init
  }

})();
