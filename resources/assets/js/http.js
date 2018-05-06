module.exports = (function () {
    'use strict';

    var location  = new URL(document.location);
    const API_URL = location.origin + '/api',
      BASE_URL    = location.origin + location.pathname;

    var _requestOptions = function() {
      return {
        headers: new Headers({
          'Content-Type' : 'application/json',
          'Authorization': getParams('token'),
        }),
        mode : 'cors'
      }
    };

    var _request = function (route, options, blobToFile = null) {
      let req = fetch(API_URL + route, options);
      if (!blobToFile)
        return req.then(response => response.json())
          .then(response => response.data);

      return req.then(response => response.blob())
        .then(blob => _saveFile(blob, blobToFile));
    }

    var _parseParams = function (params) {
      var searchParams = new URLSearchParams();
      if (!params) {
        return searchParams;
      }

      for (var i in params) {
        if (params[i] instanceof Array) {
          for (var j in params[i]) {
            searchParams.set(`${i}[${j}]`, params[i][j]);
          }
        } else {
          searchParams.set(i, params[i]);
        }
      }

      return searchParams;
    }

    var _getUrlParams = function () {
      let searchParams = location.searchParams;
      return Array.from(searchParams.keys())
        .reduce((prev, curr) => {
          let param = searchParams.get(curr);
          let aux = { }
          try {
            aux[curr] = JSON.parse(param);
          } catch (error) {
            aux[curr] = param;
          }
          return { ...prev, ...aux }
        }, { })
    }

    var _saveFile = function (blob, filename) {
      if (navigator.msSaveBlob)
        return navigator.msSaveBlob(blob, filename);

      let url = window.URL.createObjectURL(blob);
      let element = document.createElement('a');
      element.setAttribute('href', url);
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.append(element);
      element.click();
      window.URL.revokeObjectURL(url);
      element.remove();
    }

    var getParams = function (key) {
      let item = localStorage.getItem(`${location.pathname}:${identifier}`);
      if (!item)
        return { };

      storedParams = !storedParams ? JSON.parse(atob(item)) : storedParams;

      if (!key)
        return storedParams;

      return storedParams[key];
    }

    var setParams = function (object) {
      let params = { ...getParams(), ...object };
      localStorage.setItem(`${location.pathname}:${identifier}`, btoa(JSON.stringify(params)));
    }

    var post = function (route, params, downloadFile = null) {
      var options = _requestOptions();
      options.method = 'POST';
      options.body = JSON.stringify(params);

      return _request(route, options, downloadFile);
    }

    var get = function (route, params, downloadFile = null) {
      var options = _requestOptions();
      options.method = 'GET';
      route = !params ? route : `${route}?${_parseParams(params)}`;

      return _request(route, options, downloadFile);
    }

    var storedParams,
      urlParams  = _getUrlParams(),
      key        = 't',
      identifier = urlParams[key] || null;

    if (!identifier) {
      identifier = Date.now();
      setParams(urlParams);
      history.pushState({}, location.pathname, `${BASE_URL}?${key}=${identifier}`);
    }

    return {
      get: get,
      post: post,
      storage: {
        get: getParams,
        set: setParams,
      },
      API_URL: API_URL,
      BASE_URL: BASE_URL,
    }

})();
