function UserList() {
    const users = [" John", "Jane", "Bob", "Alice"];
    
  return (
    <ul>
        {users.map((user, index) =>(
            <li key={index}>{user}</li>

        ))}
      
    </ul>
  );
}

export default UserList
