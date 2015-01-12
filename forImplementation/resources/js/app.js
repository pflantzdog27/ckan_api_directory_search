
angular.module('subcontractorsApp', [
    'subcontractorsApp.controllers',
    'subcontractorsApp.services',
    'subcontractorsApp.directives',
    'subcontractorsApp.routers',
    'subcontractorsApp.filters',
    'ui.bootstrap'
]);

angular.module('subcontractorsApp.services',[])
    .factory('subcontractorsAPIservice',function($http) {


        var promise;
        var myService = {
            async: function() {
                if ( !promise ) {
                    // $http returns a promise, which has a then function, which also returns a promise
                    promise = $http.jsonp('http://oagov.com/smartAmerica/?json=get_recent_posts&count=1264&callback=JSON_CALLBACK').then(function (response) {
                        // The then function here is an opportunity to modify the response
                        // The return value gets picked up by the then in the controller.
                        return response.data;
                    });
                }
                // Return the promise to the controller
                return promise;
            }
        };
        return myService;
    })

angular.module('subcontractorsApp.controllers', [])
    .controller('resultsController',function($scope,$http, subcontractorsAPIservice) {
        $scope.getData = function( ) {
            $('#curtain').fadeIn(600,function() {
                $('<div></div>').attr('id','load-display').insertAfter('.appWrap');
                $('#load-display').attr('class','col-md-4').html('<h4>The Subcontracting Directory is loading. Help us improve this directory.</h4><p>If you have ideas on what it would take to improve this experience, please <a target="_blank" href="#">send us your feedback</a></p>')
            });
            subcontractorsAPIservice.async().then(function(d) {
                // results loading
				
                $('#load-display').fadeOut(1, function() {
					$('#info').fadeOut(100, function() {
						$('#curtain').fadeOut(1);
						$('#results').fadeIn(1);
					});                    
                });


                // INITIALIZE THE DATA
                $scope.makeContractors = function() {
                    // pagination
                    $scope.pageSize = 25;

                    $scope.contracts = [];
                    $.each(d.posts, function(i, contract) {
                        // manipulating results
                        var zipCode = contract.custom_fields.vendor_zip[0];
                        var extendedZip = zipCode.substr(zipCode.length - 4);
                        var shortZip = zipCode.substr(0, 5);
                        var zipCodeB = contract.custom_fields.principal_performance_zip[0];
                        var extendedZipB = zipCodeB.substr(zipCodeB.length - 4);
                        var shortZipB = zipCodeB.substr(0, 5);
                        var phoneNumber = contract.custom_fields.vendor_phone_number[0];
                        var lastFour = phoneNumber.substr(phoneNumber.length - 4);
                        var areaCode = phoneNumber.substr(0, 3);
                        var firstThree = phoneNumber.substr(3, 3);
                        var descriptionContract = contract.content;
                        var frontCutDescrip = descriptionContract.slice(3);
                        var finalDescription = frontCutDescrip.slice(0,-5);
                        var abbrState = convert_state(contract.custom_fields.vendor_state[0],'abbrev');
                        var region = convert_state(contract.custom_fields.principal_performance_state[0],'region');
                        var naics = contract.custom_fields.naics_code[0];
                        var naicsFront = naics.substr(0, 3);
                        var naicsBack = naics.substr(naics.length - 3);
                        $scope.contracts.push({
                            contractor: contract.title,
                            description: finalDescription,
                            piid: contract.custom_fields.PIID[0],
                            naics_front : naicsFront,
                            naics_back : naicsBack,
                            naics_description : contract.custom_fields.naics_description[0],
                            product_code : contract.custom_fields.product_or_service_code[0],
                            street : contract.custom_fields.Street[0],
                            city : contract.custom_fields.vendor_city[0],
                            state : abbrState,
                            zip : shortZip,
                            phone : '('+areaCode+')'+firstThree+'-'+lastFour,
                            performance_city : contract.custom_fields.principal_performance_city[0],
                            performance_state : contract.custom_fields.principal_performance_state[0],
                            performance_zip : shortZipB+'-'+extendedZipB,
                            date_signed : contract.custom_fields.date_signed[0],
                            effective_date : contract.custom_fields.effective_date[0],
                            completion_date : contract.custom_fields.est_completion_date[0],
                            action_obligation : contract.custom_fields.action_obligation[0],
                            region : region
                        })
                    });
                }
                $scope.makeContractors();


            }); // close async
        }; // close getData function

	
        // clear filters for select menus
        $scope.clearNaics = function() {
            $scope.search.naics_front = undefined;
            $scope.filterNaics = false;
        };
        $scope.clearPerformPlace = function() {
            $scope.search.performance_state = undefined;
            $scope.filterPerformPlace = false;
        };
        $scope.clearCompLoc = function() {
            $scope.search.state = undefined;
            $scope.filterCompLoc = false;
        };
        $scope.clearRegion = function() {
            $scope.search.region = undefined;
            $scope.filterRegion = false;
        };
		
        //hide or show close button
        $scope.changeNaics = function() {
            if($scope.search.naics_front != undefined) {
                $scope.filterNaics = true;
            };
        }
        $scope.changePerformPlace = function() {
            if($scope.search.performance_state != undefined) {
                $scope.filterPerformPlace = true;
            };
        }
        $scope.changeCompLoc = function() {
            if($scope.search.state != undefined) {
                $scope.filterCompLoc = true;
            };
        }
        $scope.changeRegion = function() {
            if($scope.search.region != undefined) {
                $scope.filterRegion = true;
            };
        }
		$scope.changeQuery = function() {
		    if($scope.query != undefined) {
                $scope.search = function (contract){
					var term = $scope.query.toUpperCase();
					if (contract.description.indexOf(term)!=-1 || contract.contractor.indexOf(term)!=-1) {
							return true;
						}
				};				
            }				
        }
		


        // CONVERT STATES
        function convert_state(name, to) {
            var name = name.toUpperCase();
            var states = new Array(
                {'name':'District of Columbia', 'abbrev':'DC', 'region':'11'},          {'name':'Alabama', 'abbrev':'AL', 'region':'4'},          {'name':'Alaska', 'abbrev':'AK', 'region':'10'},
                {'name':'Arizona', 'abbrev':'AZ', 'region':'9'},          {'name':'Arkansas', 'abbrev':'AR', 'region':'7'},         {'name':'California', 'abbrev':'CA', 'region':'9'},
                {'name':'Colorado', 'abbrev':'CO', 'region':'8'},         {'name':'Connecticut', 'abbrev':'CT', 'region':'01'},      {'name':'Delaware', 'abbrev':'DE', 'region':'3'},
                {'name':'Florida', 'abbrev':'FL', 'region':'4'},          {'name':'Georgia', 'abbrev':'GA', 'region':'4'},          {'name':'Hawaii', 'abbrev':'HI', 'region':'9'},
                {'name':'Idaho', 'abbrev':'ID', 'region':'10'},           {'name':'Illinois', 'abbrev':'IL', 'region':'5'},         {'name':'Indiana', 'abbrev':'IN', 'region':'5'},
                {'name':'Iowa', 'abbrev':'IA', 'region':'6'},             {'name':'Kansas', 'abbrev':'KS', 'region':'6'},           {'name':'Kentucky', 'abbrev':'KY', 'region':'4'},
                {'name':'Louisiana', 'abbrev':'LA', 'region':'7'},        {'name':'Maine', 'abbrev':'ME', 'region':'01'},            {'name':'Maryland', 'abbrev':'MD', 'region':'3'},
                {'name':'Massachusetts', 'abbrev':'MA', 'region':'01'},    {'name':'Michigan', 'abbrev':'MI', 'region':'5'},         {'name':'Minnesota', 'abbrev':'MN', 'region':'5'},
                {'name':'Mississippi', 'abbrev':'MS', 'region':'4'},      {'name':'Missouri', 'abbrev':'MO', 'region':'6'},         {'name':'Montana', 'abbrev':'MT', 'region':'8'},
                {'name':'Nebraska', 'abbrev':'NE', 'region':'6'},         {'name':'Nevada', 'abbrev':'NV', 'region':'9'},           {'name':'New Hampshire', 'abbrev':'NH', 'region':'01'},
                {'name':'New Jersey', 'abbrev':'NJ', 'region':'2'},       {'name':'New Mexico', 'abbrev':'NM', 'region':'7'},       {'name':'New York', 'abbrev':'NY', 'region':'2'},
                {'name':'North Carolina', 'abbrev':'NC', 'region':'4'},   {'name':'North Dakota', 'abbrev':'ND', 'region':'8'},     {'name':'Ohio', 'abbrev':'OH', 'region':'5'},
                {'name':'Oklahoma', 'abbrev':'OK', 'region':'7'},         {'name':'Oregon', 'abbrev':'OR', 'region':'10'},           {'name':'Pennsylvania', 'abbrev':'PA', 'region':'3'},
                {'name':'Rhode Island', 'abbrev':'RI', 'region':'01'},     {'name':'South Carolina', 'abbrev':'SC', 'region':'4'},   {'name':'South Dakota', 'abbrev':'SD', 'region':'8'},
                {'name':'Tennessee', 'abbrev':'TN', 'region':'4'},        {'name':'Texas', 'abbrev':'TX', 'region':'7'},            {'name':'Utah', 'abbrev':'UT', 'region':'8'},
                {'name':'Vermont', 'abbrev':'VT', 'region':'01'},          {'name':'Virginia', 'abbrev':'VA', 'region':'3'},         {'name':'Washington', 'abbrev':'WA', 'region':'10'},
                {'name':'West Virginia', 'abbrev':'WV', 'region':'3'},    {'name':'Wisconsin', 'abbrev':'WI', 'region':'5'},        {'name':'Wyoming', 'abbrev':'WY', 'region':'8'},
                {'name':'Puerto Rico', 'abbrev':'PR', 'region':'2'},      {'name':'Virgin Islands', 'abbrev':'VI', 'region':'2'}
            );
            var returnthis = false;
            $.each(states, function(index, value){
                if (to == 'name') {
                    if (value.abbrev == name){
                        returnthis = value.name;
                        return false;
                    }
                } else if (to == 'abbrev') {
                    if (value.name.toUpperCase() == name){
                        returnthis = value.abbrev;
                        return false;
                    }
                } else if (to == 'region') {
                    if (value.abbrev.toUpperCase() == name){
                        returnthis = value.region;
                        return false;
                    }
                }
            });
            return returnthis;
        }

        // EXPORT DATA
        $scope.exportData = function () {
            var blob = new Blob([document.getElementById('csv-export').innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
            });
            saveAs(blob, "subContractors.xls");
        };

        $scope.pageChangeHandler = function(num) {
        };
		

    })//close results controller

angular.module('subcontractorsApp.routers',['ngRoute','ngAnimate'])
.config(function($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'partials/intro.html'
        }
    )
        .when('/results',
        {
            controller: 'resultsController',
            templateUrl: 'partials/results.html'
        }
    )

        .otherwise({ redirectTo: '/'});
});

angular.module('subcontractorsApp.directives', [])
    .directive('dirPaginate', ['$compile', '$parse', '$timeout', 'paginationService', function($compile, $parse, $timeout, paginationService) {
        return  {
            priority: 5000, //High priority means it will execute first
            terminal: true,
            compile: function(element, attrs){
                attrs.$set('ngRepeat', attrs.dirPaginate); //Add ng-repeat to the dom

                var expression = attrs.dirPaginate;
                // regex taken directly from https://github.com/angular/angular.js/blob/master/src/ng/directive/ngRepeat.js#L211
                var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

                var filterPattern = /\|\s*itemsPerPage:[^|]*/;
                if (match[2].match(filterPattern) === null) {
                    throw "pagination directive: the 'itemsPerPage' filter must be set.";
                }
                var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
                var collectionGetter = $parse(itemsPerPageFilterRemoved);

                //Now that we added ng-repeat to the element, proceed with compilation
                //but skip directives with priority 5000 or above to avoid infinite
                //recursion (we don't want to compile ourselves again)
                var compiled =  $compile(element, null, 5000);

                return function(scope, element, attrs){
                    var paginationId;
                    paginationId = attrs.paginationId || "__default";
                    paginationService.registerInstance(paginationId);

                    var currentPageGetter;
                    if (attrs.currentPage) {
                        currentPageGetter = $parse(attrs.currentPage);
                    } else {
                        // if the current-page attribute was not set, we'll make our own
                        var defaultCurrentPage = paginationId + '__currentPage';
                        scope[defaultCurrentPage] = 1;
                        currentPageGetter = $parse(defaultCurrentPage);
                    }
                    paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                    if (typeof attrs.totalItems !== 'undefined') {
                        paginationService.setAsyncModeTrue(paginationId);
                        scope.$watch(function() {
                            return $parse(attrs.totalItems)(scope);
                        }, function (result) {
                            if (0 < result) {
                                paginationService.setCollectionLength(paginationId, result);
                            }
                        });
                    } else {
                        scope.$watchCollection(function() {
                            return collectionGetter(scope);
                        }, function(collection) {
                            if (collection) {
                                paginationService.setCollectionLength(paginationId, collection.length);
                            }
                        });
                    }
                    //When linking just delegate to the link function returned by the new compile
                    compiled(scope);
                };
            }
        };
    }])

    .directive('dirPaginationControls', ['paginationService', function(paginationService) {
        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i ++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange/2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }

        return {
            restrict: 'AE',
            templateUrl:  'dirPagination.tpl.html',
            scope: {
                maxSize: '=?',
                onPageChange: '&?'
            },
            link: function(scope, element, attrs) {
                var paginationId;
                paginationId = attrs.paginationId || "__default";
                if (!scope.maxSize) { scope.maxSize = 9; }
                scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
                scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

                if (paginationService.isRegistered(paginationId) === false) {
                    throw "pagination directive: the pagination controls cannot be used without the corresponding pagination directive.";
                }

                var paginationRange = Math.max(scope.maxSize, 5);
                scope.pages = [];
                scope.pagination = {
                    last: 1,
                    current: 1
                };

                scope.$watch(function() {
                    return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
                }, function(length) {
                    if (0 < length) {
                        generatePagination();
                    }
                });

                scope.$watch(function() {
                    return paginationService.getCurrentPage(paginationId);
                }, function(currentPage) {
                    scope.setCurrent(currentPage);
                });

                scope.setCurrent = function(num) {
                    if (/^\d+$/.test(num)) {
                        if (0 < num && num <= scope.pagination.last) {
                            paginationService.setCurrentPage(paginationId, num);
                            scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                            scope.pagination.current = num;

                            // if a callback has been set, then call it with the page number as an argument
                            if (scope.onPageChange) {
                                scope.onPageChange({ newPageNumber : num });
                            }
                        }
                    }
                };

                function generatePagination() {
                    scope.pages = generatePagesArray(1, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.last = scope.pages[scope.pages.length - 1];
                    if (scope.pagination.last < scope.pagination.current) {
                        scope.setCurrent(scope.pagination.last);
                    }
                }
            }
        };
    }])

    .filter('itemsPerPage', ['paginationService', function(paginationService) {
        return function(collection, itemsPerPage, paginationId) {
            if (typeof (paginationId) === 'undefined') {
                paginationId = "__default";
            }
            var end;
            var start;
            if (collection instanceof Array) {
                itemsPerPage = itemsPerPage || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                return collection.slice(start, end);
            } else {
                return collection;
            }
        };
    }])

    .service('paginationService', function() {
        var instances = {};
        var lastRegisteredInstance;
        this.paginationDirectiveInitialized = false;

        this.registerInstance = function(instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.isRegistered = function(instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function() {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function(instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function(instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function(instanceId) {
            return instances[instanceId].currentPageParser(instances[instanceId].context);
        };

        this.setItemsPerPage = function(instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function(instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function(instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function(instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function(instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.isAsyncMode = function(instanceId) {
            return instances[instanceId].asyncMode;
        };
    });
	

	
angular.module('subcontractorsApp.filters', ['ngSanitize'])
    .filter('highlight', function() {
        return function(text, filter) {
            if (filter === undefined) {
                return text;
            } else {
                return text.replace(new RegExp(filter, 'gi'), '<span class="match">$&</span>');
            };
        };
    })
    .filter('unique', function () {

        return function (items, filterOn) {

            if (filterOn === false) {
                return items;
            }

            if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
                var hashCheck = {}, newItems = [];

                var extractValueToCompare = function (item) {
                    if (angular.isObject(item) && angular.isString(filterOn)) {
                        return item[filterOn];
                    } else {
                        return item;
                    }
                };

                angular.forEach(items, function (item) {
                    var valueToCheck, isDuplicate = false;

                    for (var i = 0; i < newItems.length; i++) {
                        if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                            isDuplicate = true;
                            break;
                        }
                    }
                    if (!isDuplicate) {
                        newItems.push(item);
                    }

                });
                items = newItems;
            }
            return items;
        };
    })

/*
 jQuery UI Slider plugin wrapper
 */
angular.module('ui.slider', []).value('uiSliderConfig',{}).directive('uiSlider', ['uiSliderConfig', '$timeout', function(uiSliderConfig, $timeout) {
    uiSliderConfig = uiSliderConfig || {};
    return {
        require: 'ngModel',
        compile: function () {
            return function (scope, elm, attrs, ngModel) {

                function parseNumber(n, decimals) {
                    return (decimals) ? parseFloat(n) : parseInt(n);
                };

                var options = angular.extend(scope.$eval(attrs.uiSlider) || {}, uiSliderConfig);
                // Object holding range values
                var prevRangeValues = {
                    min: null,
                    max: null
                };

                // convenience properties
                var properties = ['min', 'max', 'step'];
                var useDecimals = (!angular.isUndefined(attrs.useDecimals)) ? true : false;

                var init = function() {
                    // When ngModel is assigned an array of values then range is expected to be true.
                    // Warn user and change range to true else an error occurs when trying to drag handle
                    if (angular.isArray(ngModel.$viewValue) && options.range !== true) {
                        console.warn('Change your range option of ui-slider. When assigning ngModel an array of values then the range option should be set to true.');
                        options.range = true;
                    }

                    // Ensure the convenience properties are passed as options if they're defined
                    // This avoids init ordering issues where the slider's initial state (eg handle
                    // position) is calculated using widget defaults
                    // Note the properties take precedence over any duplicates in options
                    angular.forEach(properties, function(property) {
                        if (angular.isDefined(attrs[property])) {
                            options[property] = parseNumber(attrs[property], useDecimals);
                        }
                    });

                    elm.slider(options);
                    init = angular.noop;
                };

                // Find out if decimals are to be used for slider
                angular.forEach(properties, function(property) {
                    // support {{}} and watch for updates
                    attrs.$observe(property, function(newVal) {
                        if (!!newVal) {
                            init();
                            elm.slider('option', property, parseNumber(newVal, useDecimals));
                            ngModel.$render();
                        }
                    });
                });
                attrs.$observe('disabled', function(newVal) {
                    init();
                    elm.slider('option', 'disabled', !!newVal);
                });

                // Watch ui-slider (byVal) for changes and update
                scope.$watch(attrs.uiSlider, function(newVal) {
                    init();
                    if(newVal != undefined) {
                        elm.slider('option', newVal);
                    }
                }, true);

                // Late-bind to prevent compiler clobbering
                $timeout(init, 0, true);

                // Update model value from slider
                elm.bind('slide', function(event, ui) {
                    ngModel.$setViewValue(ui.values || ui.value);
                    scope.$apply();
                });

                // Update slider from model value
                ngModel.$render = function() {
                    init();
                    var method = options.range === true ? 'values' : 'value';

                    if (!options.range && isNaN(ngModel.$viewValue) && !(ngModel.$viewValue instanceof Array)) {
                        ngModel.$viewValue = 0;
                    }
                    else if (options.range && !angular.isDefined(ngModel.$viewValue)) {
                        ngModel.$viewValue = [0,0];
                    }

                    // Do some sanity check of range values
                    if (options.range === true) {

                        // Check outer bounds for min and max values
                        if (angular.isDefined(options.min) && options.min > ngModel.$viewValue[0]) {
                            ngModel.$viewValue[0] = options.min;
                        }
                        if (angular.isDefined(options.max) && options.max < ngModel.$viewValue[1]) {
                            ngModel.$viewValue[1] = options.max;
                        }

                        // Check min and max range values
                        if (ngModel.$viewValue[0] > ngModel.$viewValue[1]) {
                            // Min value should be less to equal to max value
                            if (prevRangeValues.min >= ngModel.$viewValue[1])
                                ngModel.$viewValue[0] = prevRangeValues.min;
                            // Max value should be less to equal to min value
                            if (prevRangeValues.max <= ngModel.$viewValue[0])
                                ngModel.$viewValue[1] = prevRangeValues.max;
                        }

                        // Store values for later user
                        prevRangeValues.min = ngModel.$viewValue[0];
                        prevRangeValues.max = ngModel.$viewValue[1];

                    }
                    elm.slider(method, ngModel.$viewValue);
                };

                scope.$watch(attrs.ngModel, function() {
                    if (options.range === true) {
                        ngModel.$render();
                    }
                }, true);

                function destroy() {
                    elm.slider('destroy');
                }
                elm.bind('$destroy', destroy);
            };
        }
    };
}]);






