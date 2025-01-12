// config/Config.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDREmCa7Xt_4hkO44N6rCswBLe_6YFK6J4',
    authDomain: 'sportcatalog-d6768.firebaseapp.com',
    projectId: 'sportcatalog-d6768',
    storageBucket: 'sportcatalog-d6768.appspot.com',
    messagingSenderId: '221651104026',
    appId: '1:221651104026:web:dccde558c9aa009c843ca3',
    measurementId: 'G-PNPYKLW207',
};

// Инициализация на Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Референция към колекцията
const ColRef = collection(db, 'items');

// Функция за извличане на данни
export const fetchItems = async () => {
    try {
        const snapshot = await getDocs(ColRef);
        const items = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }));
        console.log('Fetched Items:', items);
        return items; // Връща масив с елементи
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};


export { db, ColRef };
