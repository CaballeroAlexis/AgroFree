import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu1-registro-alta-baja-reproductores',
  templateUrl: './menu1-registro-alta-baja-reproductores.component.html',
  styleUrls: ['./menu1-registro-alta-baja-reproductores.component.css']
})
export class Menu1RegistroAltaBajaReproductoresComponent {

  data_table:any;
  table_name= "m1_registro_alta_baja_reproductores";
  columns =['Fecha de alta','Tipo de reproductor(Macho/Hembra)', 'Código identificatorio',' Edad de meses en fecha de alta',' Origen',' Observación en fecha de alta',' Fecha de baja',' Observación en fecha de baja'];
  data_structure = {id: "", cod_identificatorio: "",edad_meses_fecha_alta: "", fecha_alta: "", fecha_baja: "", observacion_fecha_alta: "", observacion_fecha_baja: "", origen: "", tipo_reproductor: ""} 
  
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
    this.data_structure={id: "", cod_identificatorio: "",edad_meses_fecha_alta: "", fecha_alta: "", fecha_baja: "", observacion_fecha_alta: "", observacion_fecha_baja: "", origen: "", tipo_reproductor: ""} 
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
