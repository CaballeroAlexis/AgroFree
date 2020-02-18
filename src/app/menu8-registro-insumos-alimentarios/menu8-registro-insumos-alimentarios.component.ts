import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu8-registro-insumos-alimentarios',
  templateUrl: './menu8-registro-insumos-alimentarios.component.html',
  styleUrls: ['./menu8-registro-insumos-alimentarios.component.css']
})
export class Menu8RegistroInsumosAlimentariosComponent {
  data_table:any;
  table_name= "m8_registro_insumos_alimentarios";
  columns = ['Fecha de compra','Denominación de insumo','Cantidad','Costo total','Destino','Observación'];
  keys = ['fecha_compra','denominacion_insumo','cantidad','costo_total','destino','observacion'];
  data_structure = {id: "",fecha_compra:"",denominacion_insumo: "", cantidad: "",costo_total: "", destino: "",observacion: ""} 
  
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
    this.data_structure = {id: "",fecha_compra:"",denominacion_insumo: "", cantidad: "",costo_total: "", destino: "",observacion: ""} 
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
