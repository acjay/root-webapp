'use strict';

angular.module('rootWebappApp')
  .controller('SidebarCtrl', function ($scope, Rootdata, Manipulator) {
  	// Define an empty data store to begin with
 	var treeData = {
 		type: 'submodule',
 		children: {},
 		expanded: true
 	};

 	// Initialize Manipulator, which modifies the data store
 	Manipulator.data = treeData;

 	// Read the level 0 data
 	Manipulator.addData([], Rootdata(0));
 	Manipulator.addData(['Folder1'], Rootdata(1));
 	Manipulator.addData(['Folder1', 'Folder2'], Rootdata(2));

 	$scope.treeData = treeData;
  });
