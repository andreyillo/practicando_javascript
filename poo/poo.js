//4ta forma de crear objetos en js forma clasica
class estudiante{
    nombre;
    apellido;
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    
}
var e1=new estudiante('ana','amgel');
var e2=new estudiante('jorge','linero');
console.log(typeof(e1));
console.log(e1.nombre);

//3ra forma de trabajar con objetos en js en funciones
function aprendiz(nombre,apellido){
    this.nombre=nombre;
    this.apellido=apellido;
    this.nombrecompleto=function(){
        return this.nombre+' '+this.apellido;
    }
}
var ob=new aprendiz('luis','diaz');
var ob2=new aprendiz('paola','suarez');
console.log(typeof(ob));
console.log(ob.nombre);
console.log(ob2.nombre);
console.log(ob.nombrecompleto());
console.log(ob2.nombrecompleto());

//atributos=propiedades
//this=esta clase,este objeto
//2da forma de generar objeto en js
//json=java script object notation -clave:valor
var alumno={
    nombre:'pedro',
    apellido:'dia',
    nombrecompleto:function(){
        return this.nombre+' '+this.apellido;
    }
}
//acceso por operador llave
console.log(alumno['nombrecompleto'])
console.log(alumno['nombre']);
console.log(alumno['apellido']);

//acceso por operador punto
console.log(alumno.nombrecompleto())
console.log(alumno.nombre);
console.log(alumno.apellido);   


console.log(typeof(alumno));
alumno.telefono='3023434';
//recorrer claves de objeto con for in
for(atributo in alumno){
    console.log(atributo);
}

//convertir valores de objetos a array
var arreglo=object.values(alumno);
console.log(arreglo);

//1ra forma de generar onjeto en js
var persona=new object();
persona.nombre='juan';
persona.apellido='bautista';
persona.mostrar=function(){
    return nombre+' '+apellido;
}


//var num=100;
//console.log(typeof(num));
//var t='palabra';
//console.log(typeof(t));