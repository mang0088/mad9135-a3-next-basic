import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import { useAppContext } from '../../context/AppContext';

function Userlist() {
  const list = useAppContext();

  return (
    <>
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
          s
        </div>
      </nav>
      <main>
        <div>
          <h2>list of users</h2>
          <ul>
            {list.map((item) => (
              <Link href="/project" key={item.id}>
                <div className="project-list">
                  <div className="prof-img">
                    <Image
                      src="/images/pic1.png"
                      height={200}
                      width={300}
                      alt="Profile Pic"
                    />
                  </div>
                  <div className="prof-details">
                    <ul>
                      <li>
                        Name: {item.firstName} {item.lastName}
                      </li>
                      <li>Job Title: {item.jobTitleName}</li>
                      <li>Contact No.: {item.phoneNumber}</li>
                      <li>Email: {item.emailAddress}</li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Userlist;
