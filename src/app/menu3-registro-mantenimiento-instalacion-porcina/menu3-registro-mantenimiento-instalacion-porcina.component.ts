import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu3-registro-mantenimiento-instalacion-porcina',
  templateUrl: './menu3-registro-mantenimiento-instalacion-porcina.component.html',
  styleUrls: ['./menu3-registro-mantenimiento-instalacion-porcina.component.css']
})
export class Menu3RegistroMantenimientoInstalacionPorcinaComponent {

  data_table:any;
  table_name= "m3_registro_mantenimiento_instalacion_porcina";

  columns = ['Fecha de operación','Nombre comercial','Presentación ','Concentración','Fecha de vencimiento','Forma de aplicación','Tiempo de exposición','Responsable'];
  keys = ['fecha_operacion','nombre_comercial','presentacion','concentracion','fecha_vencimiento','forma_aplicacion','tiempo_exposicion','responsable'];
  data_structure = {id: "",fecha_operacion: "", nombre_comercial: "",presentacion: "", concentracion: "",fecha_vencimiento: "",forma_aplicacion: "",tiempo_exposicion: "",responsable: ""} 
  
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
    this.data_structure = {id: "",fecha_operacion: "", nombre_comercial: "",presentacion: "", concentracion: "",fecha_vencimiento: "",forma_aplicacion: "",tiempo_exposicion: "",responsable: ""} 
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
