import React, { useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import { ColRef } from './config/Config'; 

const FirebaseData = () => {
    useEffect(() => {
        
        getDocs(ColRef)
            .then((snapshot) => {
                let items = [];
                snapshot.docs.forEach((doc) => {
                    items.push({ ...doc.data(), id: doc.id });
                });
                console.log('Firebase Data:', items); 
            })
            .catch((err) => {
                console.error('Error fetching Firebase data:', err.message);
            });
    }, []); 

    return null; 
};

export default FirebaseData;
