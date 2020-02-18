import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu7-registro-mantenimiento-identificacion-ubicacion-trampas',
  templateUrl: './menu7-registro-mantenimiento-identificacion-ubicacion-trampas.component.html',
  styleUrls: ['./menu7-registro-mantenimiento-identificacion-ubicacion-trampas.component.css']
})
export class Menu7RegistroMantenimientoIdentificacionUbicacionTrampasComponent {

  data_table:any;
  table_name= "m7_registro_mantenimiento_iden_ubi_trampas_roedores";

  columns = ['Fecha de operación','Nombre comercial','Presentación','Principio activo','Número de lote','Fecha de vencimiento','Clasificación toxicológica','Dosis','Fecha de control','Responsable'];
  keys = ['fecha_operacion','nombre_comercial','presentacion','principio_activo','num_lote','fec_vencimiento','clas_toxicologica','dosis','fec_control','responsable'];
  data_structure = {id: "",fecha_operacion: "", nombre_comercial: "", presentacion: "", principio_activo: "",num_lote: "", fec_vencimiento: "",clas_toxicologica: "",dosis:"",fec_control:"",responsable:""} 
  
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
    this.data_structure = {id: "",fecha_operacion: "", nombre_comercial: "", presentacion: "", principio_activo: "",num_lote: "", fec_vencimiento: "",clas_toxicologica: "",dosis:"",fec_control:"",responsable:""}
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
