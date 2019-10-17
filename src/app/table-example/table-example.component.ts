import { Component } from '@angular/core';
import * as fs from 'fs';
//import * as path from 'path';

// tslint:disable-next-line:no-implicit-dependencies

import { Hero } from '../model/hero';
import { Settings } from '../model/settings';
import { TheDb } from '../model/thedb';
@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent {
  public heroes: Hero[];

  constructor() {
      Settings.initialize();

      if (fs.existsSync(Settings.dbPath)) {
          this.openDb(Settings.dbPath);
      }
  }

  public openDb(filename: string) {
      TheDb.openDb(filename)
          .then(() => {
              if (!Settings.hasFixedDbLocation) {
                  Settings.dbPath = filename;
                  Settings.write();
              }
          })
          .then(() => {
              this.getHeroes();
          })
          .catch((reason) => {
              // Handle errors
              console.log('Error occurred while opening database: ', reason);
          });
  }


  public getHeroes() {
      Hero.getAll()
          .then((heroes) => {
              this.heroes = heroes;
              console.log(heroes);
          });
  }

}
