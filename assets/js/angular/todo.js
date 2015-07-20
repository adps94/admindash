    function DashCtrl($scope, $http) {
        $http({
                method: 'GET',
                url: 'https://api.parse.com/1/classes/userVisit',
                headers: {
                    "Content-Type": "application/json",
                    "X-Parse-Application-Id": "52r6nwCF2fHdqy7UJ5nugOJr5r09ckEoEGp9drWU",
                    "X-Parse-REST-API-Key": "rfs2A2Om3Q0erGIc4suh6wBzbdphGQnFytmFMFMt"
                }
            })
            .success(function(successData) {
                $scope.visitorList = successData.results;
            });
    }
