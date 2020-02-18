import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu2-registro-signos-visibles-enfermedad',
  templateUrl: './menu2-registro-signos-visibles-enfermedad.component.html',
  styleUrls: ['./menu2-registro-signos-visibles-enfermedad.component.css']
})
export class Menu2RegistroSignosVisiblesEnfermedadComponent{

  data_table:any;
  table_name= "m2_registro_signos_visibles_enfermedad";

  columns = ['Fecha y hora','Categoria', 'Cantidad aproximada de afectados','Descripción','Medidas tomadas'];
  keys = ['fecha_hora','categoria','cant_aprox_afectados','descripcion','medidas_tomadas'];
  data_structure = {id: "",fecha_hora: "", categoria: "",cant_aprox_afectados: "", descripcion: "",medidas_tomadas: ""} 
  
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
    this.data_structure = {id: "",fecha_hora: "", categoria: "",cant_aprox_afectados: "", descripcion: "",medidas_tomadas: ""} 
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
