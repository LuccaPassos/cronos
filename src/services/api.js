import axios from 'axios';
import React, { useEffect, useState } from 'react';
const api = axios.create({
    baseURL: 'http://jacee-api.herokuapp.com'
});

export default api;