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
      // Initial map config
      mapConfig = {
        'target' : 'map',
        'edit_mode': window.location.pathname.split( '/' )[1] === 'edit',
      },

      getNewPointsToSave = function () {
          var point = mapFactory.saveNewFeatures(map, newFeaturesSource);
          
          newFeaturesSource = new ol.source.Vector();

          return point;
      },

      init = function () {
		map = mapFactory.create(mapConfig);

		// When 'moving' the map get the coordinates updated from server by extent
		map.on('moveend', event => mapFactory.plotFromRequest(map));

		map.on('singleclick', event => mapFactory.addNewFeatures(event, map, newFeaturesSource));

		$('.clear-coordinate').on('click', function (event){
			newFeaturesSource = new ol.source.Vector();
			mapFactory.clear(map, 'temp', true);
		});
      }

  return {
    init : init,
    getNewPointsToSave : getNewPointsToSave
  }

})();
