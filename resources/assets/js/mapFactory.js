/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

module.exports = (function() {
    'use strict';
    var http = require('./http.js'),

        addNewFeatureActivate = false,

        create = function (mapConfig = false){

            var config = {
                'edit_mode': false,
                'target': 'map',
                'canvasScale': false,
                'layers': [
                  new ol.layer.Tile({
                    preload: Infinity,
                    source:  new ol.source.BingMaps({
                      key: 'AoGwOff1xHlD_EsIyFAVwedXJpeC5RObYdYWjtC8xULKeMqhyRT3x4dXZJQg-n2n',
                      imagerySet: 'Aerial',
                      maxZoom: 19,
                      crossOrigin: "Anonymous"
                    })
                  })
                ],
                'interactions': ol.interaction.defaults({
                    altShiftDragRotate: true,
                    dragPan: true,
                }),
                'controlsArray': [
                    new ol.control.Rotate({
                      tipLabel: 'Alt + Shift + drag to rotate'
                    }),
                    new ol.control.ScaleLine(),
                ],
                'view': {
                    center: [0, 0],
                    zoom: 3,
                    maxZoom: 19,
                },
            };
            Object.assign(config, mapConfig);
            var map = new ol.Map({
                    layers: config.layers,
                    target: config.target,
                    controls: config.controlsArray,
                    interactions: config.interactions,
                    view: new ol.View(config.view),
                });
            
            ol.inherits(addNewFeatureControl, ol.control.Control);
            map.addControl(new addNewFeatureControl());

            return map;
        },
        getPosition = function (map) {
          let view = map.getView();
          return {
            zoom: view.getZoom(),
            extent: view.calculateExtent(map.getSize())
          };
        },
        plotFromRequest = function (map) {
          const position = getPosition(map);
          let request = Promise.resolve();

            request = request
              .then(() => http.get('/coordinates/extent', { ...position }))
              .then(response => addGeoJson(map, response));

          return request;
        },
        addGeoJson = function (map, data, geoJson = true) {
          if (!data)
            return
          data.forEach(each => {
            clear(map, each.fc.id_layer);
            var zoom = map.getView().getZoom(),
                radius;

            if (zoom < 17) {
              radius = zoom * 1.5;
            } else if (zoom < 15){
              radius =  zoom * 1.3;
            } else {
              radius = zoom;
            }

            if (geoJson){
              var source = new ol.source.Vector({
                  features: (new ol.format.GeoJSON()).readFeatures(each.fc, {
                    featureProjection: 'EPSG:3857'
                  })
                });
            } else {
              var source = each.fc.source
            }

            var	layer = new ol.layer.Vector({
              style: new ol.style.Style({
			        image: new ol.style.Circle({
			          radius: radius,
			          fill: new ol.style.Fill({
			            color: 'rgba(255,0,0,0.5)'
			          }),
			          stroke: new ol.style.Stroke({
			            color: 'rgb(255,0,0)',
			            width: zoom < 15 ? zoom * 0.2 : zoom * 0.4
			          })
  			        })
  			      }),
              source: source
            });
            layer.getSource().setProperties({ id: each.fc.id_layer });
            map.addLayer(layer);
          })
        },
        clear = function (map, id, render = false) {
          map.getLayers().forEach(layer => {
            if (layer && layer.getSource().getProperties()['id'] === id)
              map.removeLayer(layer);
          });
          if (render){
            map.renderSync();
          }
        },
        saveNewCoordinates = function () {
          // Send to server features from newFeatures
        },
        /**
         * @constructor
         * @extends {ol.control.Control}
         * @param {Object=} opt_options Control options.
         */
        addNewFeatureControl = function (opt_options) {
          
            var options = opt_options || {};

            var anchor = document.createElement('a');
            anchor.href = '#new-coordinate';
            anchor.className = 'new-coordinate';

            anchor.addEventListener('click', toggleAddFeatureTool, false);
            anchor.addEventListener('touchstart', toggleAddFeatureTool, false);

            var element = document.createElement('div');
            element.className = 'add-feature ol-unselectable';
            element.appendChild(anchor);

            ol.control.Control.call(this, {
                element: element,
                target: options.target
            });
        },
        /**
         * @param {Event} e Browser event.
         */
        toggleAddFeatureTool = function (event) {
          // prevent anchor from getting appended to the url
          event.preventDefault();
          addNewFeatureActivate = !addNewFeatureActivate;

          // Change button CSS
        },
        saveNewFeatures = function (map, newFeaturesSource) {
          var features = newFeaturesSource.getFeatures(),
              points = [];

          features.forEach(function (feature){
            var coord = feature.getGeometry().getCoordinates();
            coord = ol.proj.transform(coord, 'EPSG:3857', 'EPSG:4326');
            points.push(coord);
          });
          return points;
        },
        addNewFeatures = function (event, map, newFeaturesSource) {
            // Add feature into source used by map
            if (!addNewFeatureActivate) 
              return;
            
            // Create feature from coordinate captured on single click
            let feature = new ol.Feature({
                geometry: new ol.geom.Point(event.coordinate)
            });

            // Add the feature into the new features source and plot it insert into temporary layer
            newFeaturesSource.addFeature(feature);
            addGeoJson(map, [{
              fc: {
                source: newFeaturesSource,
                id_layer: 'temp',
                type: 'FeatureCollection'
              }
            }], false);

            saveNewFeatures(map, newFeaturesSource);
        };

        return {
            create: create,
            clear: clear,
            plotFromRequest: plotFromRequest,
            saveNewCoordinates: saveNewCoordinates,
            addNewFeatures: addNewFeatures,
            saveNewFeatures : saveNewFeatures
        }

})();
