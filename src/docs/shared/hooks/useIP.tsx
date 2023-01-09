import axios from 'axios';
import { useState, useEffect } from 'react';

const teamIPs = [
  '165.225.57.60',
  '165.225.57.43',
  '165.225.57.38',
  '66.31.42.9',
  '96.237.115.225',
  '192.168.1.155',
  '192.168.1.6',
  '72.87.85.30'
];

// detect IP with Axios
const useIP = () => {
  const [ip, setIP] = useState('');
  const [searchAnalytics, setSearchAnalytics] = useState(true);

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setIP(res.data.IPv4);
  }

  useEffect(() => {
    getData();
    setSearchAnalytics(teamIPs.includes(ip));

  }, [ip, searchAnalytics])

  return searchAnalytics;
};

export default useIP;