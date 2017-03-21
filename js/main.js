function translate() {
  var title= document.getElementById("form-signin-heading")
  var email= document.getElementById("inputEmail");
  var password= document.getElementById("inputPassword");
  var remember= document.getElementsByTagName("span")[0];
  var button= document.getElementsByClassName("btn")[0];

  title.innerHTML= "Por favor inicia sesión";
  email.placeholder= "Correo Electronico";
  password.placeholder="Contraseña";
  remember.innerHTML="Recordar datos";
  button.innerHTML="Iniciar sesión";

}
/*
Este es un intento de hacerlo con el appendChild(); quedo a la mitad
 function mostrarDatos(){
   var mail=document.getElementById("inputEmail").value;
   var contraseña= document.getElementById("inputPassword").value;
   var areaParaMostrarDatos= document.getElementById("areaParaMostrarDatos");

   var node=document.createElement("p");
   var textNode= document.createTextNode(mail);
   node.appendChild(textNode);
   areaParaMostrarDatos.appendChild(node);
 }
 */

 function mostrarDatosFacil(){
   var mail=document.getElementById("inputEmail").value;
   var contrasena= document.getElementById("inputPassword").value;
   var titulo= document.getElementById("tituloDeDatos");
   var areaParaMostrarDatos= document.getElementById("areaParaMostrarDatos");

   titulo.innerHTML="Datos del Formulario";
   areaParaMostrarDatos.innerHTML="El correo ingresado es:"+ mail+ "</br>" + "La clave ingresada es: "+ "</br>" + contrasena;

 }
