import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

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
      <h1>Our Team Members</h1>
      <ul className="team-list">
        {users.map((user) => (
          <li key={user.login}>
            <Link href={'/team/' + user.login}>{user.login}</Link>
            <Image
              src="/images/right-arrow.png"
              height={30}
              width={30}
              alt="Profile Pic"
            />
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
