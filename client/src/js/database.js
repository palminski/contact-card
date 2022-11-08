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
};

//exports a function we will use to get to the DB
export const getDb = async () => {
    console.log('get from db')

    //create connection to the IndexedDB and the version we want to use
    const contactDb = await openDB('contact_db',1);

    //create new transaction and specify the store data privileges
    const tx = contactDb.transaction('contacts', 'readonly');

    //Open up desired object store
    const store = tx.objectStore('contacts');

    //.getAll() to get all data in the DB
    const request = store.getAll();

    //confirm result
    const result = await request;
    console.log('result.value',result);
    return result;
};

export const postDb = async (name, email, phone, profile) => {
    console.log('Post data to DB');

    //create connection to the IndexedDB and the version we want to use
    const contactDb = await openDB('contact_db',1);
    
    //create new transaction and specify the store data privileges
    const tx = contactDb.transaction('contacts', 'readwrite');

    //Open up desired object store
    const store = tx.objectStore('contacts');

    //.add() to add data to the DB
    const request = store.add({name:name, email:email, phone:phone, profile:profile});

    //confirm request
    const result = await result;
    console.log('data saved to the DB', result);
};