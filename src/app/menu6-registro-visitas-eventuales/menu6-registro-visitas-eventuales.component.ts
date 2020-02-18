import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu6-registro-visitas-eventuales',
  templateUrl: './menu6-registro-visitas-eventuales.component.html',
  styleUrls: ['./menu6-registro-visitas-eventuales.component.css']
})
export class Menu6RegistroVisitasEventualesComponent{

  data_table:any;
  table_name= "m6_registro_visitas_eventuales";

  columns = ['Fecha','Apellido y nombre','Procedencia ','Motivo de la visita','Hora entrada','Hora salida','Firma (salida)','Contacto con cerdos ultimas 72hs (SI/NO)'];
  keys = ['fecha','apellido_nombre','procedencia','motivo_visita','hora_entrada','hora_salida','firma_salida','contacto_cerdos_72_horas'];
  data_structure = {id: "",fecha: "", apellido_nombre: "",procedencia: "", motivo_visita: "",hora_entrada: "",hora_salida: "",firma_salida: "",contacto_cerdos_72_horas: ""} 
  
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
    this.data_structure = {id: "",fecha: "", apellido_nombre: "",procedencia: "", motivo_visita: "",hora_entrada: "",hora_salida: "",firma_salida: "",contacto_cerdos_72_horas: ""} 
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
