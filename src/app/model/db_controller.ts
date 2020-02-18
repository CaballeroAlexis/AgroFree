import { TheDb } from './thedb';

/**
 * Simple class for selecting, inserting, updating and deleting Heroes in hero table.
 *
 * @export
 * @class Hero
 */
export class db_controller {
    public id = -1;
    public name = '';

    public static get(id: number,table:String): Promise<db_controller> {
        const sql = 'SELECT * FROM'+ table +'WHERE id = $id';
        const values = { $id: id };

        return TheDb.selectOne(sql, values)
            .then((row) => {
                if (row) {
                    return new db_controller().fromRow(row);
                } else {
                    throw new Error('Expected to find 1 Hero. Found 0.');
                }
            });
    }

    public static getAll(table:String) {
        const sql = `SELECT * FROM ` +table;
        const values = {};

        return TheDb.selectAll(sql, values)
            .then((rows) => {
                console.log(rows);
                return rows;
            });
    }

    public static insert(table:string,columns:string,values:string) {
        const sql = 'INSERT INTO ' +table +'('+columns +') VALUES('+values +')';
        console.log("El query es "+sql);
       
        return TheDb.insertRow(sql)
            .then((result) => {
                console.log("resultado es "+result);
            });
    }

    public static updateRow(sql:string) {
        return TheDb.insertRow(sql)
            .then((result) => {
                console.log("resultado es "+result);
            });
    }

    public static deleteRow(sql:string) {
        return TheDb.insertRow(sql)
        .then((result) => {
            console.log("resultado es "+result);
        });
    }

    public update(): Promise<void> {
        const sql = `
            UPDATE hero
               SET name = $name
             WHERE id = $id`;

        const values = {
            $name: this.name,
        };

        return TheDb.update(sql, values)
            .then((result) => {
                if (result.changes !== 1) {
                    throw new Error(`Expected 1 Hero to be updated. Was ${result.changes}`);
                }
            });
    }

    public delete(): Promise<void> {
        const sql = `
            DELETE FROM hero WHERE id = $id`;

        const values = {
            $id: this.id,
        };

        return TheDb.delete(sql, values)
            .then((result) => {
                if (result.changes !== 1) {
                    throw new Error(`Expected 1 Hero to be deleted. Was ${result.changes}`);
                }
            });
    }

    public fromRow(row: object): db_controller {
        this.id = row['id'];
        this.name = row['name'];

        return this;
    }
}
