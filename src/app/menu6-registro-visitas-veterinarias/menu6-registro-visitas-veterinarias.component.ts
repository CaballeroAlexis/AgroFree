import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu6-registro-visitas-veterinarias',
  templateUrl: './menu6-registro-visitas-veterinarias.component.html',
  styleUrls: ['./menu6-registro-visitas-veterinarias.component.css']
})
export class Menu6RegistroVisitasVeterinariasComponent {

  data_table:any;
  table_name= "m6_registro_visitas_veterinarias";

  columns = ['Fecha','Hora inicio','Hora finalización','Actividades desarrolladas','Novedades','Firma','Aclaración'];
  keys = ['fecha','hora_inicio','hora_finalizacion','act_desarrolladas','novedades','firma','aclaracion'];
  data_structure = {id: "",fecha: "", hora_inicio: "",hora_finalizacion: "", act_desarrolladas: "",novedades: "",firma: "",aclaracion: ""} 
  
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
    this.data_structure = {id: "",fecha: "", hora_inicio: "",hora_finalizacion: "", act_desarrolladas: "",novedades: "",firma: "",aclaracion: ""} 
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
