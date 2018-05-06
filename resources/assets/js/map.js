module.exports = (function() {
  const DEBUG = false;
  var http = require('./http.js'),
      mapFactory = require('./mapFactory.js'),
      // Get Local Storage Value
      storage = http.storage.get(),
      // Mapa superior
      map,
      // 
      newFeaturesSource = new ol.source.Vector(),
      // Configuração do Mapa Superior
      mapConfig = {
        'target' : 'map',
        'canvasScale': false
      },

      getNewPointsToSave = function () {
          return mapFactory.saveNewFeatures(map, newFeaturesSource);            
      },

      init = function () {

          map = mapFactory.create(mapConfig);

          // When 'moving' the map get the coordinates updated from server by extent
          map.on('moveend', event => mapFactory.plotFromRequest(map));

          map.on('singleclick', event => mapFactory.addNewFeatures(event, map, newFeaturesSource));
      }

  return {
    init : init,
    getNewPointsToSave : getNewPointsToSave
  }

})();
