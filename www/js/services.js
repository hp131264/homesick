angular.module('app.services', [])


.service('BlankService', ['$http',function($http){
    var BASE_URL = 'http://108.175.2.51:1338/';
    return {
            validausuario:function(usuario,password){
                return $http.get(BASE_URL+'usuarios/validausuario/?idusuario='+usuario+'&password='+password);
            }   ,
            traepaises:function(){
                return $http.get(BASE_URL+'paises/');
            }     ,
            grabausuario:function(idusuario,password,nombre,apellidos,celular,fechanacimiento,sexo,estadocivil,universidad,pais){
                
                
                return $http.get(BASE_URL+'usuarios/altausuario/?idusuario='+idusuario+'&password='+password+'&nombre='+nombre+'&apellidos='+apellidos+'&celular='+celular+'&fechanacimiento='+fechanacimiento+'&sexo='+sexo+'&estadocivil='+estadocivil+'&universidad='+universidad+'&pais='+pais);
            }     ,
            traeeventos:function(id){
                return $http.get(BASE_URL+'eventos/buscaeventos/'+id);
            }  ,    
            traecomidas:function(id){
                return $http.get(BASE_URL+'comida/buscacomida/'+id);
            }  ,
            usuariospais:function(idpais,idusuario){
                return $http.get(BASE_URL+'usuarios/usuariospais/?idpais='+idpais+'&idusuario='+idusuario);
            }       
    }

}]);
