import styles from "./Users.module.css";

function User({ user }) {
  return (
    <div className={styles.user}>
      <ul>
        <li><strong>ID:</strong> {user.id}</li>
        <li><strong>Name:</strong> {user.name}</li>
        <li><strong>Position:</strong> {user.position}</li>
        <li><strong>Skill:</strong> {user.skill}</li>
      </ul>
    </div>
  );
}

export default User;