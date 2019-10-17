import { Component, OnInit } from '@angular/core';
import { TheDb } from '../model/thedb';
import {  OpenDialogOptions, remote } from 'electron';
import { Settings } from '../model/settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public async createDb(filename?: string) {
    if (!filename) {
        const options: OpenDialogOptions = {
            title: 'Create file',
            defaultPath: remote.app.getPath('documents'),
            filters: [
                {
                    name: 'Database',
                    extensions: ['db'],
                },
            ],
        };
        filename = await remote.dialog.showSaveDialogSync(remote.getCurrentWindow(), options);
    }

    if (!filename) {
        return;
    }

    TheDb.createDb(filename)
        .then((dbPath) => {
            if (!Settings.hasFixedDbLocation) {
                Settings.dbPath = dbPath;
                Settings.write();
            }
        })
        .then(() => {
            console.log("Cargado exitosamente");
        })
        .catch((reason) => {
            console.log(reason);
        });
}

}
