import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Users({ users }) {
  console.log(users);
  return (
    <div>
      <nav>
        <div className={styles.navbar}>
          <div>
            <h1>Canvas</h1>
          </div>
          <div className={styles.listItems}>
            <Link href="/">Home</Link>
            <Link href="/project">Project</Link>
            <Link href="/team">Our Team</Link>
          </div>
        </div>
      </nav>
      <h1>Random Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.login}>
            <Link href={'/users/' + user.login}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const resp = await fetch(
    `https://api.github.com/search/users?q=Tony&per_page=5`
  );
  const data = await resp.json();
  console.log(data.items);

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      users: data.items,
    },
  };
}
