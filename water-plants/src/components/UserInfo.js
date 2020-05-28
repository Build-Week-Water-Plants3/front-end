import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {axiosWithAuth} from "../util/axiosWihAuth"

const UserInfo = (props) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/users')
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, [Info]);

    return (
        <>
            {User.map((data) => {
                return (
                    <>
                        <br/>
                            <p>username:{data.username}</p>
                            <p>password: {data.password}</p>
                            <p>number: {data.Number}</p>
                        <br/>
                    </>
                )
            })}
        </>
    )
}

export default connect((state) =>{
    return {
        initialState: state
    }
})(List);