app.controller('productsCtrl', function($scope) {
    $scope.services = [
        { "title": "Turkey", "price": 3000, "image": "images/products-photo/man.jpg" },
        { "title": "Egypt", "price": 2500, "image": "images/products-photo/ped.jpg" },
        { "title": "Bulgaria", "price": 10000, "image": "images/products-photo/hc.jpg" },
        { "title": "Family trip", "price": 3000, "image": "images/products-photo/hu.jpg" },
        { "title": "Greece", "price": 3500, "image": "images/products-photo/brows.jpg" },
        { "title": "Italy", "price": 4500, "image": "images/products-photo/lashes.jpg" },
        { "title": "Hawaii", "price": 2500, "image": "images/products-photo/lashes2.png" },
        { "title": "Romania", "price": 4000, "image": "images/products-photo/d_makeup.jpg" },
        { "title": "Ukraine", "price": 8000, "image": "images/products-photo/n_makeup.jpg" },
          ];

    $scope.inputLogin = "";
    $scope.inputPass = "";

    $scope.login = "dmitrii";
    $scope.password = "admin";
    $scope.isSignIn = false;
    $scope.editing = false;


    $scope.signIn = function() {
        if ($scope.inputLogin === $scope.login) {
            if ($scope.inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('myModal').style.display = "none"
            }
        }
    };

    $scope.removeProduct = function(itemTitle) {
        const index = $scope.services.findIndex(x => x.title === itemTitle);

        $scope.services.splice(index, 1);

        console.log(index);
    }
	


    $scope.addNewService = function() {
        newService = {
            title: "Unknown",
            price: 0,
            image: "images/logos/logo.jpg"
        }

        $scope.services.push(newService);
    }


    $scope.orderByMe = function(item) {
        $scope.myOrderBy = item;
        $scope.reverseOrder();
    }

    $scope.myReverseBy = false;
    $scope.reverseOrder = function() {
        $scope.myReverseBy = !($scope.myReverseBy);
    }


});