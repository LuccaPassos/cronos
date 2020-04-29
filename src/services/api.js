import axios from 'axios';
import React, { useEffect, useState } from 'react';
const api = axios.create({
    baseURL: 'http://jacee-api.herokuapp.com'
});

function fetch() {

    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    async function loadEvents() {
        if (loading) {
            return;
        }
        setLoading(true);
        const response = await api.get('/api/event/');
        setEvents(...events, response.data.events);
        console.log(events);
        setLoading(false);
    }

    useEffect(() => {
        loadEvents();
    }, []);

}

export default fetch;