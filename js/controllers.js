angular.module('subcontractorsApp.controllers', [])
    .controller('resultsController',function($scope,$http, subcontractorsAPIservice) {
        $scope.getData = function( ) {
            $('#landing-screen').hide(200, function() {
                $('#load-display').show(100);
            });
            subcontractorsAPIservice.async().then(function(d) {
                // INITIALIZE THE DATA
                $scope.makeContractors = function() {
                    $scope.pageSize = 25;
                    $scope.contracts = [];

                    $.each(d, function(i, contract) {
                        // manipulating results
                        var zipCode = contract.Zip;
                        var extendedZip = zipCode.substr(zipCode.length - 4);
                        var shortZip = zipCode.substr(0, 5);
                        var zipCodeB = contract["Place of Performance Zip Code"];
                            if(zipCodeB) {
                                var extendedZipB = zipCodeB.substr(zipCodeB.length - 4);
                                var shortZipB = zipCodeB.substr(0, 5);
                            } else {
                                var extendedZipB = 'null';
                                var shortZipB = 'null';
                            }
                        var phoneNumber = contract["Vendor Phone Number"];
                        var lastFour = phoneNumber.substr(phoneNumber.length - 4);
                        var areaCode = phoneNumber.substr(0, 3);
                        var firstThree = phoneNumber.substr(3, 3);
                        var abbrState = convert_state(contract["Vendor State"],'abbrev');
                        var region = convert_state(contract["Principal Place of Performance State Code"],'region');
                        var naics = contract["NAICS Code"];
                        var naicsFront = naics.substr(0, 3);
                        var naicsBack = naics.substr(naics.length - 3);
                        $scope.contracts.push({
                            contractor: contract["Contractor Name"],
                            description: contract["Product or Service Description"],
                            piid: contract.PIID,
                            naics_front : naicsFront,
                            naics_back : naicsBack,
                            naics_description : contract["NAICS Description"],
                            product_code : contract["Product or Service Code"],
                            street : contract.Street,
                            city : contract["Vendor City"],
                            state : abbrState,
                            zip : shortZip,
                            phone : '('+areaCode+')'+firstThree+'-'+lastFour,
                            performance_city : contract["Principal Place of Performance City Name"],
                            performance_state : contract["Principal Place of Performance State Code"],
                            performance_zip : shortZipB+'-'+extendedZipB,
                            date_signed : contract["Date Signed"],
                            effective_date : contract["Effective Date"],
                            completion_date : contract["Est. Ultimate Completion Date"],
                            action_obligation : contract["Action Obligation"],
                            region : region
                        })
                    });
                };
                $('#load-display').hide(300, function() {
                    $('#results').fadeIn(300);
                });
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





