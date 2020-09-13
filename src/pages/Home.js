import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from '../components/Card';

const APIURL = 'https://api.github.com/users/bilarslan';

function Home() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const extraData = {
        showRepoStatus: true,
        email: null, //'YOUR_EMAIL@ADDRESS',
        linkedin_url: 'https://www.linkedin.com/in/bilarslan/',
    };

    useEffect(() => {
        axios.get(APIURL)
            .then(result => {
                //console.log(result.data)
                setData(Object.assign(result.data, extraData));
                document.title = `HOMEPAGE | ${result.data.name}`;
            })
            .catch(error => {
                setError(true);
                console.error('ERROR!', error?.response?.data)
            });
    }, []);

    return (
        <>
            {data == null &&
                <div style={{ color: '#FFF', fontSize: '2rem' }}>
                    <i className={error === true ? 'fas fa-bug' : 'fas fa-spinner fa-spin'}></i>
                </div>
            }
            {data != null &&
                <Card data={data} />
            }
        </>
    )
}

export default Home;