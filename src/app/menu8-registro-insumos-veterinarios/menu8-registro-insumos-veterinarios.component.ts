import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu8-registro-insumos-veterinarios',
  templateUrl: './menu8-registro-insumos-veterinarios.component.html',
  styleUrls: ['./menu8-registro-insumos-veterinarios.component.css']
})
export class Menu8RegistroInsumosVeterinariosComponent {
  data_table:any;
  table_name= "m8_registro_insumos_veterinarios";
  columns = ['Fecha de compra','Droga / Nombre comercial','Presentación','Lote','Fecha de vencimiento','Utilidad'];
  
  keys = ['fecha_compra','nombre_comercial','presentacion','lote','fec_vencimiento','utilidad','aclaracion'];
  data_structure = {id: "",fecha_compra: "", nombre_comercial: "",presentacion: "", lote: "",fec_vencimiento: "",utilidad: "",aclaracion: ""} 
  
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
    this.data_structure = {id: "",fecha_compra: "", nombre_comercial: "",presentacion: "", lote: "",fec_vencimiento: "",utilidad: "",aclaracion: ""} 
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
