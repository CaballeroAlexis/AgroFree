import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu9-registro-extraccion-cama-guano',
  templateUrl: './menu9-registro-extraccion-cama-guano.component.html',
  styleUrls: ['./menu9-registro-extraccion-cama-guano.component.css']
})
export class Menu9RegistroExtraccionCamaGuanoComponent {
  data_table:any;
  table_name= "m9_registro_extraccion_cama_guano";  			
  columns = ['Fecha de operación','Instalación','Responsable','Observación'];

  keys = ['fecha_operacion','instalacion','responsable','observacion'];
  data_structure = {id: "",fecha_operacion: "", instalacion: "",responsable: "", observacion: ""} 
  
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
    this.data_structure = {id: "",fecha_operacion: "", instalacion: "",responsable: "", observacion: ""} 
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
