(function(document) {
  'use strict';

  window.CellsPolymer.start({
    routes: {
      'home': '/',
      'another': '/another',
      'routerExample': '/routerExample/:queryStringToPrettyUrl'
    }
  });
}(document));
