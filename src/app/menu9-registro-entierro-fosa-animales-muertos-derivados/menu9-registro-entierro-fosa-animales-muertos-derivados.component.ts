import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu9-registro-entierro-fosa-animales-muertos-derivados',
  templateUrl: './menu9-registro-entierro-fosa-animales-muertos-derivados.component.html',
  styleUrls: ['./menu9-registro-entierro-fosa-animales-muertos-derivados.component.css']
})
export class Menu9RegistroEntierroFosaAnimalesMuertosDerivadosComponent {
  data_table:any;
  table_name= "m9_registro_entierro_fosa_animales_muertos_derivados";
  						
  columns = ['Fecha de operación','Tipo','Categoría','Nº de cabezas','Ubicación de fosa','Responsable','Observación'];

 
  keys = ['fecha_operacion','tipo','categoria','num_cabezas','ubicacion_fosa','responsable','observacion'];
  data_structure = {id: "",fecha_operacion: "", tipo: "",categoria: "", num_cabezas: "",ubicacion_fosa: "",responsable: "",observacion: ""} 
  
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
    this.data_structure = {id: "",fecha_operacion: "", tipo: "",categoria: "", num_cabezas: "",ubicacion_fosa: "",responsable: "",observacion: ""} 
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
