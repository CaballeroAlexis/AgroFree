import { Component, OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { db_controller } from '../model/db_controller';

@Component({
  selector: 'app-edit-insert-row',
  templateUrl: './edit-insert-row.component.html',
  styleUrls: ['./edit-insert-row.component.css']
})
export class EditInsertRowComponent implements OnInit {
  @Input() values: any;
  @Input() table: any;
  @Output() saved = new EventEmitter<boolean>();

  input = '';
  new_data=false;
  id="";
  columns:Array<String>=[];

  constructor() {
    console.log(this.values);
   }

  ngOnInit() {
    console.log("Edicion en la tabla" + this.table);
    console.log(this.values);
    if(this.values.id == "") {
      this.new_data = true;
    } else {
      this.id = this.values.id;
      this.new_data = false;
    }
    delete this.values.id;
    this.getColumns(this.values);
  }

  getColumns(json:Object) {
    for(var i in json){
      var key = i;
      (this.columns).push(key);
    }
    console.log(this.columns);
  }

  onKey(event: any) {
    this.input = event.target.value;
    this.values[event.target.id] = this.input;
  }

  saveData() {
    let string_value = "";
    let columns_value = "";    
    if (this.new_data) {

      for (let i of this.columns) {
        console.log(i);
        if(i.toString() != "id") {
          columns_value+=i.toString()  + ",";
        }
        if (this.values[i.toString()] != "") {
          string_value+= "'"+this.values[i.toString()]+"'" + ",";
        } else {
          string_value+= "''"  + ",";
        }
      }
      columns_value = columns_value.substring(0, columns_value.length - 1);
      string_value = string_value.substring(0, string_value.length - 1);
      db_controller.insert(this.table,columns_value,string_value).then(() =>{
        this.saved.emit(true);
      })
    } else {
      let sql = "UPDATE " + this.table + " SET ";
      for (let i of this.columns) {
        console.log(i);
        if(i.toString() != "id") {
          if (this.values[i.toString()] != "") {
            sql+= i.toString()+"='"+this.values[i.toString()]+"'" + ",";
          } else {
            sql+= i.toString()+"=''" + ",";
          }

         
        }
      }
      sql = sql.substring(0, sql.length - 1);
      sql += "WHERE id="+ this.id;
      console.log(sql);
      db_controller.updateRow(sql).then(() =>{
        this.saved.emit(true);
      })
    }
  }
}
