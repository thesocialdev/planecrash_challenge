module.exports = (function() {
  const DEBUG = false;
  var http = require('./http.js'),
      map = require('./map'),
     
  	  restorePranchaConfig = function () {
        if (typeof prancha !== 'undefined' && 'cabecalho' in prancha){
          var request = JSON.parse(prancha.cabecalho);
          storage = Object.assign({}, request, storage);
          http.storage.set(storage);
        }
        if (typeof prancha !== 'undefined' && 'configuracoes' in prancha){
          var pranchaConfig = JSON.parse(prancha.configuracoes);
          // TODO: Merge geocamadas from config request
          Object.assign(mapTopConfig, {'view' : pranchaConfig['mapTop']});
          Object.assign(mapBottomConfig, {'view' : pranchaConfig['mapBottom']});
          geocamadas = (typeof pranchaConfig['layers'] != 'undefined') ? pranchaConfig['layers'] : [];
          updateLayersColors();
          updateLayersColors(null, true);
          checkAllGeocamadas(geocamadas);
        }
        if (typeof prancha !== 'undefined' && 'rodape' in prancha){
          var rodape = JSON.parse(prancha.rodape);
          for (var key in rodape) {
            $('#' + key + ' input').val(rodape[key]);
          }
        }
      },

      saveArticle = function () {
            
        var points = map.getNewPointsToSave();

        http.post('/article', {
            title: $('#article-title').val(),
            content: $('#article-content').val(),
            hasMap: $('input[name=enable-map]:checked').val(),
            points: points,
        }).then(response => {
          console.log(response);
        });
      },

      init = function () {

          map.init();

          $('#save').on('click', function () {
            saveArticle();
          });
      }

  return {
    init : init
  }

})();
