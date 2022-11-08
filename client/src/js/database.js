import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initDb = async () => {
        //create a new database called contact_db which will be using version 1 of database
    openDB('contact_db', 1, {
        //Add database Schema if it has not been initialised
        upgrade(db) {
            if(db.objectStoreNames.contains('contacts')) {
                console.log('Already Exists');
                return;
            }
            db.createObjectStore('contacts', {keyPath: 'id', autoIncrement: true});
            console.log('contents store created');
        }
    })
}