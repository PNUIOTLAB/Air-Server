import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {

  const state = {
      co2: 0,
      device1: false,
      device2: false,
      device3: false,
      device4: false,
      device5: false,
      device6: false,
      finedust: 60,
      fire: false,
      huminity: 35.13,
      room: 101,
      temperature: 25.44,
      time: "2020-11-08T15:06:14.000Z",
      ufinedust: 40
  }

  const [state, setUsers] = useState(
    {
      co2: 0,
      device1: false,
      device2: false,
      device3: false,
      device4: false,
      device5: false,
      device6: false,
      finedust: 60,
      fire: false,
      huminity: 35.13,
      room: 101,
      temperature: 25.44,
      time: "2020-11-08T15:06:14.000Z",
      ufinedust: 40
    });
    /*const onToggle = id => {
      setUsers(
        users.map(user =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    };*/
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://192.168.0.55:5000/room/101'
        );
        console.log(users);
        console.log(response.data);
        //setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
        console.log(users)
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <ul>
      {response.data.map(user => (
        <li key={user.temperature}>
        </li>
      ))}
    </ul>
  );
}

export default Users;