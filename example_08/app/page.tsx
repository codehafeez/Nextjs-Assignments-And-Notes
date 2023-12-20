export default function Home() {

  const dataArray = ['Item 1', 'Item 2', 'Item 3'];
  const users = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Bob Johnson', email: 'bob@example.com' },
  ];

  return (
    <main>
      <h2>Array Example</h2>
      <ul>
        {dataArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>List of Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </main>
  )
}
