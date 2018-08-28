angular.module('app.controllers', [])
  
.controller('homesickCtrl', ['$scope', '$stateParams', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$rootScope) {
// este es el de homee
 $scope.verperfil = function()
 {
     $state.go('editProfile');
 }
 
  $scope.logout = function()
 {
     $state.go('login');
 }
 
         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};
   

}

])
   
.controller('homesick2Ctrl', ['$scope', '$stateParams', '$rootScope', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,BlankService) {


         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};


BlankService.usuariospais($rootScope.usuario.codigodonde, $rootScope.usuario.usuario).success(function(data61)
{
    
    $scope.usuariospais = data61;
    
    
})





}])
   
.controller('homesick3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}
])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope) {

         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$rootScope', '$state', 'BlankService', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,$state,BlankService,$firebaseArray) {
    
    $scope.logindata = {'user':'','password':''};


    $scope.login = function(usuario, clave)
    {

    $rootScope.fotousuario =  '';
        $rootScope.firebase1 = 0; 
        $rootScope.firebase2 = 0; 
        BlankService.validausuario(usuario,clave).success(function(data6){   
               datofirma = data6[0];
               if (datofirma.id != -1)
               {
                      var database2     = firebase.database().ref();
                      var query         = database2.child("fotos").orderByChild("usuario").equalTo(usuario)
                      var fotousuario   = $firebaseArray(query);
   
       
                     
                    fotousuario.$loaded()
                    .then(function(){                     
                        angular.forEach(fotousuario, function(value, key) {
                            if (key === 0)
                            {
                                $rootScope.fotousuario =  value.imagen;
                            }
                        })
                        
                        
                   $rootScope.usuario = {
                                    'id': datofirma.id,
                                    'usuario': datofirma.usuario, 
                                    'nombre': datofirma.nombre,
                                    'apellidos': datofirma.apellidos,
                                    'celular': datofirma.celular,
                                    'fechanacimiento': new Date(datofirma.fechanacimiento.replace(/-/g, '/')),
                                    'sexo': datofirma.sexo,
                                    'estadocivil': datofirma.estadocivil,
                                    'universidad': datofirma.universidad,
                                    'pais': datofirma.pais,
                                    'dondeesta':datofirma.dondeesta,
                                    'fotofondo':datofirma.fotofondo,
                                    'direccionembajada':datofirma.direccionembajada,
                                    'telefonoembajada':datofirma.telefonoembajada,
                                    'correoembajada':datofirma.correoembajada,
                                    'fotoembajada':datofirma.fotoembajada,
                                    'bandera':datofirma.bandera,
                                    'foto':datofirma.foto,
                                    'codigopais':datofirma.codigopais,
                                    'codigodonde':datofirma.codigodonde
                            }
                            $rootScope.fotousuario = $rootScope.usuario.foto;
                  
console.log ('foro fondo ',datofirma.fotofondo)
                            $state.go('homesick');                        
                        
                        
                        
                    }),
                    function (error)
                    {
                        console.log(error);
                    }
                 // aqui estaba


                            
               }
               else
               {
                   alert('Usuario o Password inválido');
               }
        })  
 
    }
}])
   
.controller('signupCtrl', ['$scope', '$rootScope', '$stateParams', '$state', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $rootScope,$stateParams,$state,BlankService) {

        BlankService.traepaises().success(function(data6){  
            $scope.paises = data6;
        });

        $scope.datos = {
                    'usuario':  '', 
                    'password': '',
                    'nombre':  '',
                    'apellidos':  '',
                    'celular':  '',
                    'fechanacimiento':'',
                    'sexo':  '',
                    'estadocivil': '',
                    'universidad': '',
                    'pais': ''
        };
   

   $scope.altausuario = function()
   {       BlankService.validausuario($scope.datos.usuario,$scope.datos.password).success(function(data6){   
                datofirma = data6[0];
               if (datofirma.id != -1)
               {
                   alert ('Usuario YA existe')
               }
                else
                {
                    
                 BlankService.grabausuario($scope.datos.usuario,$scope.datos.password,$scope.datos.nombre,$scope.datos.apellidos,$scope.datos.celular,$scope.datos.fechanacimiento.toISOString().slice(0,10),$scope.datos.sexo,$scope.datos.estadocivil,$scope.datos.universidad,$scope.datos.pais).success(function(data6){
                     
                     alert('Usuario Dado de Alta!');
                     BlankService.validausuario($scope.datos.usuario,$scope.datos.password).success(function(data61){ 
                         
                            datofirma1 = data61[0]; 
                            
                           $rootScope.usuario = {
                                            'id': datofirma1.id,
                                            'usuario': datofirma1.usuario, 
                                            'nombre': datofirma1.nombre,
                                            'apellidos': datofirma1.apellidos,
                                            'celular': datofirma1.celular,
                                            'fechanacimiento': datofirma1.fechanacimiento,
                                            'sexo': datofirma1.sexo,
                                            'estadocivil': datofirma1.estadocivil,
                                            'universidad': datofirma1.universidad,
                                            'pais': datofirma1.pais,
                                            'dondeesta':datofirma1.dondeesta,
                                            'fotofondo':datofirma1.fotofondo,
                                            'direccionembajada':datofirma1.direccionembajada,
                                            'telefonoembajada':datofirma1.telefonoembajada,
                                            'correoembajada':datofirma1.correoembajada,
                                            'fotoembajada':datofirma1.fotoembajada,
                                            'bandera':datofirma1.bandera,
                                            'foto':datofirma1.foto,
                                            'codigopais':datofirma1.codigopais,
                                            'codigodonde':datofirma1.codigodonde
                                            
                                    }
                                    $state.go('homesick');                            
                            
                         
                     })
                   
                 })     
                    
                }
       
            })

   };
   

}])
   
.controller('editProfileCtrl', ['$scope', '$stateParams', '$rootScope', 'BlankService', '$state', '$cordovaCamera', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,BlankService,$state,$cordovaCamera,$firebaseArray) {


// este es el de cambiar el perfil



        BlankService.traepaises().success(function(data6){  
            $scope.paises = data6;
        });

         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
                };
   
               

                if ($rootScope.fotousuario === undefined ||     $rootScope.fotousuario === '' )
                {
                    $rootScope.fotousuario = 'data:image/png;base64,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';
                }


                $scope.imgURI = $rootScope.fotousuario;
 

                $scope.takePhotoGallery = function () {
                    
                    var options = {
                        quality: 75,
                        destinationType: Camera.DestinationType.DATA_URL,
                        sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
                        allowEdit: true,
                        encodingType: Camera.EncodingType.JPEG,
                        targetWidth: 300,
                        targetHeight: 300,
                        popoverOptions: CameraPopoverOptions,
                        saveToPhotoAlbum: false                    
                    }
    
                    var database2 = firebase.database().ref().child("fotos");
                    var database3 = firebase.database().ref();                      
                      
                    var query     = database3.child("fotos").orderByChild("usuario").equalTo($rootScope.usuario.usuario);
                    var borrar    = $firebaseArray(query);
                      
                    borrar.$loaded().then(function(){
                      
                            borrar.$remove(0).then(function(){
                                console.log ('eliminado') 
                            }).catch(function(err){
                                console.log ('error ',err)
                            })                            
            
                    });                       
                      
                      
                    $scope.fotos = $firebaseArray(database2);
                        
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                        $rootScope.fotousuario =  "data:image/jpeg;base64," + imageData;
                        $scope.fotos.$add(
                        {
                            usuario:$scope.datos.usuario,
                            imagen:"data:image/jpeg;base64," +imageData
                        })
                        BlankService.grabausuario($scope.datos.usuario,'-1','','','','','','','',$rootScope.fotousuario).success(function(data6){})
                    }, function (err) {
                       console.log (err)
                    });
                    

                }

                

                $scope.takePhoto = function () {
                    
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 300,
                    targetHeight: 300,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: true
                };

                      var database2 = firebase.database().ref().child("fotos");
                      var database3 = firebase.database().ref();                      
                      var query     = database3.child("fotos").orderByChild("usuario").equalTo($rootScope.usuario.usuario);
                      var borrar    = $firebaseArray(query);
                      
                      borrar.$loaded().then(function(){
                      
                            borrar.$remove(0).then(function(){
                                console.log ('eliminado') 
                            }).catch(function(err){
                                console.log ('error ',err)
                            })                            
            
                    });                       
                      
                      
                    $scope.fotos = $firebaseArray(database2);
                        
                    $cordovaCamera.getPicture(options).then(function (imageData) {
                    $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    $rootScope.fotousuario = "data:image/jpeg;base64," + imageData;
                    $scope.fotos.$add(
                    {
                      usuario:$scope.datos.usuario,
                      imagen:"data:image/jpeg;base64," +imageData
                     })
                     BlankService.grabausuario($scope.datos.usuario,'-1','','','','','','','',$rootScope.fotousuario).success(function(data6){})
                    }, function (err) {
                       console.log (err)
                    });
                    
                }

  

   $scope.actualizadatos = function()
   {
       
       console.log ($scope.datos.fechanacimiento.toISOString().slice(0,10));
       
       BlankService.grabausuario($scope.datos.usuario,$scope.datos.usuario,$scope.datos.nombre,$scope.datos.apellidos,$scope.datos.celular,$scope.datos.fechanacimiento.toISOString().slice(0,10),$scope.datos.sexo,$scope.datos.estadocivil,$scope.datos.universidad,$scope.datos.pais).success(function(data6){  
            $scope.respuesta = data6;
             $rootScope.usuario = $scope.datos;
             alert('Datos Actualizados !');
             $state.go('login');

        });
   };
}])
   
.controller('signupFinishCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('homesick4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('homesick5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
   
.controller('mapsExampleCtrl', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps){
        // Configuration needed to display the road-map with traffic
        // Displaying Ile-de-france (Paris neighbourhood)
        $scope.map = {
            center: {
              latitude: -23.598763,
              longitude: -46.676547
            },
            zoom: 13,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP, // This is an example of a variable that cannot be placed outside of uiGmapGooogleMapApi without forcing of calling the google.map helper outside of the function
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: false
            }, 
            showTraficLayer:true
        };
    });
}])
   
.controller('homesick6Ctrl', ['$scope', '$stateParams', '$rootScope', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,$firebaseArray) {


         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};
            

   $scope.data = {
        'message': ''
    }
    
  //    var ref = firebase.database().ref().child("messages");
      
      
      
      
      
      var ref = firebase.database().ref().child("messages").orderByChild("donde").equalTo($scope.datos.codigopais+$scope.datos.codigodonde);
      
  
      // create a synchronized array
      $scope.messages = $firebaseArray(ref);

      
      

      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
          text: $scope.data.message,
          email: $scope.datos.usuario,
          name: $scope.datos.nombre,
          donde:$scope.datos.codigopais+$scope.datos.codigodonde,
          foto:$rootScope.fotousuario
        });
        $scope.data.message = '';
      };

}])
   
.controller('homesick7Ctrl', ['$scope', '$stateParams', '$rootScope', '$http', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,$http,BlankService) {
//Este es el de los eventos


         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};
   
           BlankService.traeeventos($rootScope.usuario.codigodonde).success(function(data6){  
            $scope.eventos = data6;
        });


}])
   
.controller('homesick8Ctrl', ['$scope', '$stateParams', '$rootScope', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,BlankService) {

         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};
   
           BlankService.traecomidas($rootScope.usuario.codigodonde).success(function(data6){  
            $scope.comidas = data6;
        });
        
}])
   
.controller('homesick9Ctrl', ['$scope', '$stateParams', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope) {


         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};






}])
   
.controller('homeSickChatCtrl', ['$scope', '$stateParams', '$rootScope', '$firebaseArray', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$rootScope,$firebaseArray) {

    $scope.usuariochat = $stateParams.usuariotelefono;
        

         $scope.datos = {
                    'id':  $rootScope.usuario.id,
                    'usuario':  $rootScope.usuario.usuario, 
                    'nombre':  $rootScope.usuario.nombre,
                    'apellidos':  $rootScope.usuario.apellidos,
                    'celular':  $rootScope.usuario.celular,
                    'fechanacimiento':  $rootScope.usuario.fechanacimiento,
                    'sexo':  $rootScope.usuario.sexo,
                    'estadocivil':  $rootScope.usuario.estadocivil,
                    'universidad':  $rootScope.usuario.universidad,
                    'pais':  $rootScope.usuario.pais,
                    'dondeesta':$rootScope.usuario.dondeesta,
                    'fotofondo':$rootScope.usuario.fotofondo,
                    'direccionembajada':$rootScope.usuario.direccionembajada,
                    'telefonoembajada':$rootScope.usuario.telefonoembajada,
                    'correoembajada':$rootScope.usuario.correoembajada,
                    'fotoembajada':$rootScope.usuario.fotoembajada,
                    'bandera':$rootScope.usuario.bandera,
                    'foto':$rootScope.usuario.foto,
                    'codigopais':$rootScope.usuario.codigopais,
                    'codigodonde':$rootScope.usuario.codigodonde
};
            

   $scope.data = {
        'message': ''
    }
    
  //    var ref = firebase.database().ref().child("messages");
      
 //      try
 //      {
 //          var app3        = firebase.initializeApp({databaseURL: "https://homesick-3266a-4ae03.firebaseio.com/"}, 'app3');
 //      }
 //      catch ( error )
 //      {
 //          console.log ( error );
 //      }
    //    var ref3   = firebase.database(app3).ref().child("messages").orderByChild("entrequienes").equalTo($rootScope.usuario.usuario+$scope.usuariochat);

         var ref3   = firebase.database().ref().child("messageschat").orderByChild("entrequienes").equalTo($rootScope.usuario.usuario+$scope.usuariochat);
         
      // create a synchronized array
      $scope.messages = $firebaseArray(ref3);
      
      // add new items to the array
      // the message is automatically added to our Firebase database!
      $scope.addMessage = function() {
        $scope.messages.$add({
          text: $scope.data.message,
          de: $scope.datos.usuario,
          a:$scope.usuariochat,
          name: $scope.datos.nombre,
          entrequienes:$rootScope.usuario.usuario+$scope.usuariochat,
          foto:$rootScope.fotousuario
        });
        $scope.messages.$add({
          text: $scope.data.message,
          de: $scope.datos.usuario,
          a:$scope.usuariochat,
          name: $scope.datos.nombre,
          entrequienes:$scope.usuariochat+$rootScope.usuario.usuario,
          foto:$rootScope.fotousuario
        });        
        $scope.data.message = '';
      };
      
      
}])
 