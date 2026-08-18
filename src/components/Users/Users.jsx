import User from "./User";
import styles from "./Users.module.css";

function Users() {

  const users = [
    {
      id: 1,
      name: "Nuriyya Isgandarova",
      position: "Senior Frontend Developer",
      skill: "React",
    },
    {
      id: 2,
      name: "John Doe",
      position: "Backend Developer",
      skill: "Node.js",
    },
    {
      id: 3,
      name: "Jane Smith",
      position: "UI/UX Designer",
      skill: "Figma",
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "Mobile Developer",
      skill: "Flutter",
    },
  ];

  return (
    <div className={styles.users}>
      <h2>Users</h2>

      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}

      <input type="text" />

    </div>
  );
}

export default Users;