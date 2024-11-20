import { DatosBase } from "./FinalFIP/DatoBase";
import { Cliente } from "./FinalFIP/Cliente";
import { Proveedor } from "./FinalFIP/Proveedor";
//import * as rsl from "readline-sync";


export class Veterinaria extends DatosBase{
       
  private email:string;
  private listaClientes:Cliente[]=[];    // modifique Clientes de CL
  private listaProveedores:Proveedor[]=[];


      constructor (id:number,nombre:string,direccion:string,telefono:number,email:string){
        super(id,nombre,direccion,telefono)
        this.email=email;
      }


      public getemail(): string {
                 return this.email;
             }
        
      public setemail(email: string) {
                 this.email = email;
             }

            public altaCliente(nuevoCliente:Cliente):void{
                  // let nuevoCliente= new Cliente(id,nombre,direccion,telefono,email) 
                if (!this.listaClientes.some(Cliente=>Cliente===nuevoCliente)){
                  this.listaClientes.push(nuevoCliente);
                } else {
                  console.log(" El cliente ya existe");
                }
              }
            
                
                public altaProveedor(nuevoProveedor:Proveedor):void{  
                  // let nuevoProvedor= new Provedor(id,nombre,direccion,telefono,email) 
                if (!this.listaProveedores.some(Proveedor=>Proveedor===nuevoProveedor)){
                  this.listaProveedores.push(nuevoProveedor);
              } else {
                console.log( "El proveedor ya existe");
                
              }
            }
                
              
    public bajaCliente (clienteAEliminar:Cliente): void{
      if (clienteAEliminar != undefined && this.listaClientes.includes(clienteAEliminar)){
        let posicionCliente:number =this.listaClientes.indexOf(clienteAEliminar);
        this.listaClientes.splice(posicionCliente,1)
      }

    }

  
    public bajaProveedor (ProveedorAEliminar:Proveedor): void{  // modifique a bajaProvee
      if (ProveedorAEliminar != undefined && this.listaProveedores.includes(ProveedorAEliminar)){
        let posicionProveedor:number =this.listaProveedores.indexOf(ProveedorAEliminar);
        this.listaProveedores.splice(posicionProveedor,1)
      }

    }




public modificarCliente(nuevosDatos:Cliente): void {
   let cliente= this.listaClientes.find(cliente=> cliente === nuevosDatos); // cambie a nuevos datos
    Object.assign(cliente, nuevosDatos);
    console.log(`Cliente ${cliente.nombre} modificado correctamente.`);
}



public modificarProveedor(nuevosDatos:Proveedor): void {
  let proveedor= this.listaProveedores.find(prov=> prov === nuevosDatos); // cambie a nuevos datos
   Object.assign(proveedor, nuevosDatos);
   console.log(`Proveedor ${proveedor.nombre} modificado correctamente.`);
}




}



