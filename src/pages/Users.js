import { useState, useEffect } from "react";
import UsersList from "../components/users/UsersList"

const Users = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [loadedUsers, setLoadedUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch('https://jsonplaceholder.typicode.com/users'
        ).then(response => response.json()
        ).then(data => {  
            setIsLoading(false)
            setLoadedUsers(data)
        })
    }, []);

    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading...</p>
            </section>
        )}

    return (
        <section className="container">
            <h2>Users</h2>
            <UsersList users={loadedUsers} />
        </section>
    )
  }

  export default Users