import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import auth from '../../../../firebase.init'


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState();
    const [user, setUser] = useState('');
    // const [user, setUser] = useState({
    //     name: 'Akbar',
    //     email: 'akbar@m.com',
    //     address: 'Tajmahal',
    //     phone: '017643345'
    // });
    onAuthStateChanged(auth, (user => {
        if (user) {
            setUser(user)
        }
        else (console.log('nothing'))
    }))


    //add a loading state or it will be failed



    useEffect(() => {
        fetch(`https://powerful-cove-68962.herokuapp.com/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [user])

    // const handleAddressChange = event => {
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.velue;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser)
    // }

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service?.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://powerful-cove-68962.herokuapp.com/order', order)
            .then(response => {
                console.log(response)
                if (response.data.insertedId) {
                    alert('data added')
                }
                event.target.reset()
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='mx-auto w-50'>
            <h2>This is service details for: {service?.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2 p-2' type="text" name='name' placeholder='Your name' value={user?.displayName} readOnly disabled required />
                <br />
                <input className='w-100 mb-2 p-2' type="email" name='email' placeholder='Your email' value={user.email} readOnly disabled required />
                <br />
                <input className='w-100 mb-2 p-2' type="text" name='service' placeholder='service' value={service?.name} readOnly disabled required />
                <br />
                <input className='w-100 mb-2 p-2' type="text" name='address' placeholder='address' required />
                <br />
                <input className='w-100 mb-2 p-2' type="number" name='phone' placeholder='Your phone' required />
                <br />
                <input className='w-50 text-center btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default ServiceDetails;