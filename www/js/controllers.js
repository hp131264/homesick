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

//alert(' 1 suaurio '+usuario);

        $rootScope.firebase1 = 0; 
        $rootScope.firebase2 = 0; 
        BlankService.validausuario(usuario,clave).success(function(data6){   
               datofirma = data6[0];
               if (datofirma.id != -1)
               {
                      var database2     = firebase.database().ref();
                      var query         = database2.child("fotos").orderByChild("usuario").equalTo(usuario)
                      var fotousuario   = $firebaseArray(query);
   
  // alert(' 4 lo que llegó '+fotousuario);                  
                     
                    fotousuario.$loaded()
                    .then(function(){                     
                        angular.forEach(fotousuario, function(value, key) {
                            //alert(' 5 en el for each '+value+' '+key);
                            if (key === 0)
                            {
                                $rootScope.fotousuario =  value.imagen;
                              // alert ('de firebase '+$rootScope.fotousuario );
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
                     //       alert('6 en base de datos '+$rootScope.usuario.foto);
                            $rootScope.fotousuario = $rootScope.usuario.foto;

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
   
  // alert ('aqio '+$rootScope.fotousuario)
                

                if ($rootScope.fotousuario === undefined ||     $rootScope.fotousuario === '' )
                {
                    $rootScope.fotousuario = 'http://108.175.2.51:1338/images/inicial.png';
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
 