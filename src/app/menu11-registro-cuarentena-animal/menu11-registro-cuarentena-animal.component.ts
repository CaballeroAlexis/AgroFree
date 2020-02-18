import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu11-registro-cuarentena-animal',
  templateUrl: './menu11-registro-cuarentena-animal.component.html',
  styleUrls: ['./menu11-registro-cuarentena-animal.component.css']
})
export class Menu11RegistroCuarentenaAnimalComponent  {
  data_table:any;
  table_name= "m11_registro_cuarentena_animal";

  columns = ['Fecha inicio','Tipo','Categoría','Nº  cabezas','Causa','Fecha de finalización','Responsable','Observación'];
  
  
  keys = ['fecha_inicio','tipo','categoria','num_cabezas','causa','fecha_finalizacion','responsable','observacion'];
  data_structure = {id: "",fecha_inicio: "", tipo: "",categoria: "", num_cabezas: "",causa: "",fecha_finalizacion: "",responsable: "", observacion:""} 
  
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
    this.data_structure = {id: "",fecha_inicio: "", tipo: "",categoria: "", num_cabezas: "",causa: "",fecha_finalizacion: "",responsable: "", observacion:""} 
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
