import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState('');

    onAuthStateChanged(auth, (user => {
        if (user) {
            setUser(user)
        }
        else (console.log('nothing'))
    }))

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data)
        }
        getOrders();
    }, [])

    return (
        <div>
            <h2>Your Orders {orders.length} </h2>
        </div>
    );
};

export default Order;