import React,{useState, useEffect} from 'react'
import axios from "axios"


const UserList = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
      getUSers()
    }, [])
    

    const getUSers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        console.log(response.data)
    }
    return (
    <div className='columns mt-5 is-centered'>
        <div className='column is-half'>
            <table className='table is-stripped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList

// menit 38.34