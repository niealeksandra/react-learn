import UserItem from "./UserItem";

const UsersList = (props) => {

    return (
        <div>
            {props.users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    )
  }

  export default UsersList