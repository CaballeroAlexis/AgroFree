import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu9-registro-gestion-residuos-veterinarios',
  templateUrl: './menu9-registro-gestion-residuos-veterinarios.component.html',
  styleUrls: ['./menu9-registro-gestion-residuos-veterinarios.component.css']
})
export class Menu9RegistroGestionResiduosVeterinariosComponent {
  data_table:any;
  table_name= "m9_registro_gestion_residuos_veterinarios";
  				
  columns = ['Fecha de operación','Insumo desechado','Cantidad','Responsable','Fecha de egreso del establecimiento'];
  
  keys = ['fecha_operacion','insumo_desechado','cantidad','responsable','fecha_egreso_establecimiento'];
  data_structure = {id: "",fecha_operacion: "", insumo_desechado: "",cantidad: "", responsable: "",fecha_egreso_establecimiento: ""} 
  
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
    this.data_structure = {id: "",fecha_operacion: "", insumo_desechado: "",cantidad: "", responsable: "",fecha_egreso_establecimiento: ""} 
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
