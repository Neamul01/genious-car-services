import axios from 'axios';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user, setUser] = useState('');
    const navigate = useNavigate()

    onAuthStateChanged(auth, (user => {
        if (user) {
            setUser(user)
        }
        else (console.log('nothing'))
    }))

    useEffect(() => {
        const getOrders = async () => {
            const email = user.email;
            // console.log(email)
            const url = `https://powerful-cove-68962.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrders(data)
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [user, navigate])

    return (
        <div>
            <h2>Your Orders {orders.length} </h2>
        </div>
    );
};

export default Order;