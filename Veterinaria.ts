
import { DatosBase } from "./DatoBase";

class Veterinaria extends DatosBase{
    
    private estadoDeAlta:boolean;

    constructor(id:number,nombre:string,direccion:string,telefono:number,estadoDeAlta:boolean){
        super (id,nombre,direccion,telefono)
        this.estadoDeAlta=estadoDeAlta;
        
    }


getAlta():void{ 
    if (this.estadoDeAlta== true){
        console.log("El paciente tiene el Alta");
        
    } else {
        console.log("El paciente no tiene el Alta");
        
    }
    
}















}