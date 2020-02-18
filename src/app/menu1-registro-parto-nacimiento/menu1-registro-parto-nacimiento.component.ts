import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu1-registro-parto-nacimiento',
  templateUrl: './menu1-registro-parto-nacimiento.component.html',
  styleUrls: ['./menu1-registro-parto-nacimiento.component.css']
})
export class Menu1RegistroPartoNacimientoComponent {

  data_table:any;
  table_name= "m1_registro_parto_nacimiento";

  columns = ['Fecha de parto','Código madre', 'N° nacidos vivos','N° nacidos muertos','N° nacidos totales','Celda N°',' Observacion'];
  data_structure = {id: "",fecha_parto: "", codigo_madre: "",n_nacidos_vivos: "", num_nacidos_muertos: "",num_nacidos_totales: "",num_celda: "", observacion: ""} 
  
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
    this.data_structure = {id: "",fecha_parto: "", codigo_madre: "",n_nacidos_vivos: "", num_nacidos_muertos: "",num_nacidos_totales: "",num_celda: "", observacion: ""} 
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
