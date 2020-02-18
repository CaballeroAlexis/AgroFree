import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu1-registro-aplicacion-productos-veterinarios',
  templateUrl: './menu1-registro-aplicacion-productos-veterinarios.component.html',
  styleUrls: ['./menu1-registro-aplicacion-productos-veterinarios.component.css']
})
export class Menu1RegistroAplicacionProductosVeterinariosComponent {

  data_table:any;
  table_name= "m1_registro_aplicacion_productos_veterinarios";

  columns = ['Fecha','Categoria', 'Cantidad de tratados','Droga/ Nombre comercial','Lote','Vto.','Dosis','Via','Responsable'];
  keys = ['fecha','categoria','cant_tratados','droga_nombre_comercial','lote','vto','dosis','via','responsable'];
  data_structure = {id: "",fecha: "", categoria: "",cant_tratados: "", droga_nombre_comercial: "",lote: "",vto: "",dosis: "",via: "",responsable: ""} 
  
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
    this.data_structure = {id: "",fecha: "", categoria: "",cant_tratados: "", droga_nombre_comercial: "",lote: "",vto: "",dosis: "",via: "",responsable: ""} 
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
