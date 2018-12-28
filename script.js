var app = angular.module('app', ['ngMaterial']);

app.controller("MainCtrl", function($scope, $mdDialog) {
  $scope.showAdvanced = function(ev) {
 		    $mdDialog.show({
		     clickOutsideToClose:true,
		     templateUrl: 'dialog.html',
		     parent: angular.element(document.querySelector('#popupContainer')),
		     targetEvent: ev
 		    });
	};
});

app.controller('GraphCtrl', function($scope) {

  // chart1
  $scope.chart_grid_lines = c3.generate({
    bindto: d3.select('#chart1'),
    resize: {
      height: 300,
      width: 450
    },
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      type: 'spline'
    },
    axis: {
      x: {
          label: 'X Label'
      },
      y: {
          label: 'Y Label'
      }
    },
    legend: {
      show: false
    }
  });
  setTimeout(function () {
    $scope.chart_grid_lines.resize();
  }, 1000);
});

app.controller('Graph2Ctrl', function($scope) {
  
  //chart2
  $scope.chart = c3.generate({
    bindto: d3.select('#chart2'),
    resize: {
      height: 300,
      width: 450
    },
    data: {
      columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    },
    axis: {
      x: {
          label: 'X Label'
      },
      y: {
          label: 'Y Label'
      }
    },
    bar: {
      width: {
          ratio: 0.5 // this makes bar width 50% of length between ticks
      }
    }
  });
  
  setTimeout(function () {
    $scope.chart.resize();
  }, 1000);
});

app.directive('panelWidget', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
      title: '@',
      template: '@',
      options: '@'
    },
    template: '' +
      '<section layout-margin class="md-whiteframe-z1 panel-widget">' +
      '  <div ng-include="template"/>' +
      '</section>',
    compile: function(element, attrs, linker) {
      return function(scope, element) {
        linker(scope, function(clone) {
          element.append(clone);
        });
      };
    }
  };
});