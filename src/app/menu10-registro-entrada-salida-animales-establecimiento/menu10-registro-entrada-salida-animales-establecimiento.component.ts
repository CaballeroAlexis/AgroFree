import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu10-registro-entrada-salida-animales-establecimiento',
  templateUrl: './menu10-registro-entrada-salida-animales-establecimiento.component.html',
  styleUrls: ['./menu10-registro-entrada-salida-animales-establecimiento.component.css']
})
export class Menu10RegistroEntradaSalidaAnimalesEstablecimientoComponent  {
  data_table:any;
  table_name= "m10_registro_entrada_salida_animales_establecimiento";
  				
  columns = ['Fecha del movimiento','Movimiento','Categoría	','Nº  cabezas','Origen / destino','Observación'];
  keys = ['fecha_movimiento','movimiento','categoria','num_cabezas','origen_destino','observacion'];
  data_structure = {id: "",fecha_movimiento: "", movimiento: "",categoria: "", num_cabezas: "",origen_destino: "",observacion: ""} 
  
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
    this.data_structure = {id: "",fecha_movimiento: "", movimiento: "",categoria: "", num_cabezas: "",origen_destino: "",observacion: ""} 
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
