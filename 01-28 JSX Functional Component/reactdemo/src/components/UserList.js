function Heading()
{
    return (
        <h1>This is  heading component</h1>
    )
}
function UserList()
{
    const users = [
        { name: "John Doe", email: "john@example.com", age: 25 },
        { name: "Jane Smith", email: "jane@example.com", age: 30 },
        { name: "Alice Johnson", email: "alice@example.com", age: 28 },
        { name: "Bob Brown", email: "bob@example.com", age: 22 },
        { name: "Charlie Davis", email: "charlie@example.com", age: 35 }
    ];

    return (
        <>
            <Heading />
            <table>
                <tbody>
                    {
                        users.map(user =>
                        {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export { Heading, UserList }

// export default UserList;