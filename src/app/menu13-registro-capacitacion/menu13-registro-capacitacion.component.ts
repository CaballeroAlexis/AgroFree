import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu13-registro-capacitacion',
  templateUrl: './menu13-registro-capacitacion.component.html',
  styleUrls: ['./menu13-registro-capacitacion.component.css']
})
export class Menu13RegistroCapacitacionComponent  {
  data_table:any;
  table_name= "m13_registro_capacitacion";

  columns = ['Apellido y nombre','DNI','Cargo','Entrega de material','Firma'];

  keys = ['apellido_nombre','dni','cargo','entrega_material','firma',];
  data_structure = {id: "",apellido_nombre: "", dni: "",cargo: "", entrega_material: "",firma: ""} 
  
  insert_edit=false;
  constructor() { 
    this.getAllInfo();
  }
  public getAllInfo() {
    db_controller.getAll(this.table_name).then((result) =>{
      console.log(result);
      this.data_table = result;
    })
  }
  ngAfterViewInit(){
    this.getAllInfo();  
  }

  change_insert_edit() {
    console.log(this.insert_edit);
    this.data_structure = {id: "",apellido_nombre: "", dni: "",cargo: "", entrega_material: "",firma: ""} 
    this.insert_edit = true;
  }

  changeState(status:boolean){
    console.log("Cambiando el estado ");
    this.getAllInfo(); 
    this.insert_edit =!status;
  }

  editData(row:any) {
    this.insert_edit =!status;
    this.data_structure =row;
  }
  deleteData(id:any){
    this.table_name;
    let sql = "DELETE FROM "+ this.table_name +" WHERE id="+id;
    db_controller.deleteRow(sql).then(() =>{
      this.getAllInfo();  
    })    
  }

}
