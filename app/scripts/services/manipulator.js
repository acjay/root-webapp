'use strict';

angular.module('rootWebappApp')
  .service('Manipulator', function Manipulator() {
  	/**
  	  * Merges new data into the global data structure
  	  */ 
  	this.addData = function (path, newData) {
  		var node = this.getNode(path);

  		newData.submodules.forEach(function (submodule) {
  			node.children[submodule] = {
  				type: 'submodule',
  				children: {},
  				expanded: false
  			};
  		});
  		newData.files.forEach(function (file) {
  			node.children[file] = {
  				type: 'file'
  			};
  		});
  	};

  	/**
  	  * Gets the node data at a given path
  	  */
  	this.getNode = function getNode(path, data) {
  		data || (data = this.data);
  		if (path.length === 0) {
  			return data;
  		} else {
  			return getNode(path.slice(1), data.children[path[0]]);
  		}
  	}
  });
