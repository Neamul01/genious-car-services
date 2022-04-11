import React from 'react';

import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'

const experts = [
    { id: 1, name: 'Mashrafi', img: expert1 },
    { id: 2, name: 'Tamim', img: expert2 },
    { id: 3, name: 'Shakib Al-Hasan', img: expert3 },
    { id: 4, name: 'Mustafiz', img: expert4 },
    { id: 5, name: 'Mushfiqur Rahim', img: expert5 },
    { id: 6, name: 'Taskin Ahmed.', img: expert6 }
]

const Experts = () => {
    return (
        <div>
            <h2>This is Expert component</h2>
        </div>
    );
};

export default Experts;