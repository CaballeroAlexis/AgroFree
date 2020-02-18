import { Component } from '@angular/core';

import { Database } from 'sqlite3';
import { Hero } from '../model/hero';
import { db_controller } from '../model/db_controller';

import { Settings } from '../model/settings';
import { TheDb } from '../model/thedb';
@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})

export class TableExampleComponent {
    public db:Database;
    public heroes: Hero[];

  constructor() {
      Settings.initialize();
      this.getAllInfo();
  }

  public openDb(filename: string) {
    console.log("El filename es" + filename);
    TheDb.openDb(filename)
    .then(() => {
              if (!Settings.hasFixedDbLocation) {
                  Settings.dbPath = filename;
                  Settings.write();
              }
          })
          .then(() => {
              this.testDB();
          })
          .catch((reason) => {
              // Handle errors
              console.log('Error occurred while opening database: ', reason);
          });
  }
    public getAllInfo() {
        db_controller.getAll("Registro_alta_baja_reproductores").then((result) =>
            console.log(result));
    }

    public getHeroes() {
        Hero.getAll()
            .then((heroes) => {
                this.heroes = heroes;
                console.log(heroes);
            });
    }
  testDB() {
      this.db.get("SELECT * FROM hero", (err,rows) => {
        if(!err) {
            console.log(rows);
        }
      });
  }

  
}
