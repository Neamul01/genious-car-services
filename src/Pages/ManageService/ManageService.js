import React from 'react';
import useServices from '../../hooks/useServices';

const ManageService = () => {
    const [services, setServices] = useServices();
    // console.log(services)

    const handleDelete = id => {
        const proceed = window.confirm('Are you want to delete?');
        if (proceed) {
            fetch(`https://powerful-cove-68962.herokuapp.com/service/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                })
        }
        // console.log(id)
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='mb-4'>Manage Your Services</h2>
            {
                services?.map(service => <div key={service._id}>
                    <h5>{service.name} <button onClick={() => handleDelete(service._id)}>X</button> </h5>
                </div>)
            }
        </div >
    );
};

export default ManageService;