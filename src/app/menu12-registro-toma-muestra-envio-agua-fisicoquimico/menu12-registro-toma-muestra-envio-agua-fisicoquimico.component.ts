import { Component } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-menu12-registro-toma-muestra-envio-agua-fisicoquimico',
  templateUrl: './menu12-registro-toma-muestra-envio-agua-fisicoquimico.component.html',
  styleUrls: ['./menu12-registro-toma-muestra-envio-agua-fisicoquimico.component.css']
})
export class Menu12RegistroTomaMuestraEnvioAguaFisicoquimicoComponent {
  data_table:any;
  table_name= "m12_registro_toma_muestra_envio_agua_fisicoquimico";
  columns = ['Fecha de extracción','Hora de extracción','Cantidad','Fuente','Responsable','Destino','Fecha de envío','Hora de envío'];
  
  keys = ['fecha_extraccion','hora_extraccion','cantidad','fuente','responsable','destino','fecha_envio','hora_envio'];
  data_structure = {id: "",fecha_extraccion: "", hora_extraccion: "",cantidad: "", fuente: "",responsable: "",destino: "",fecha_envio: "", hora_envio: ""} 
  
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
    this.data_structure = {id: "",fecha_extraccion: "", hora_extraccion: "",cantidad: "", fuente: "",responsable: "",destino: "",fecha_envio: "", hora_envio: ""} 
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
