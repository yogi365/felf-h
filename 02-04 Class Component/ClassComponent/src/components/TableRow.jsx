export default function TableRow(props)
{
    console.log(props)
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.name}</td>
            <td>{props.user.age}</td>
            <td>{props.user.email}</td>
            <td>{props.user.isActive}</td>
        </tr>
    )
}