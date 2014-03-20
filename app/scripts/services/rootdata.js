'use strict';

angular.module('rootWebappApp')
  .factory('Rootdata', function Rootdata() {
    return function (level) {
    	// TODO: replace with real API calls, mocked for offline development
    	return {
    		nodeName: 'Level' + level,
    		submodules: ['Folder1', 'Folder2'],
    		files: ['File1', 'File2']
    	};
    };
  });
