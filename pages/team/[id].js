export default function Details({ user }) {
  console.log(user);
  return (
    <div>
      <h1>User Details</h1>
      <ul>
        <li>UserId: {user.login}</li>
        <li>User Name: {user.name}</li>
        <li>Company: {user.company}</li>
        <li>Location: {user.location}</li>
        <li>Followers: {user.followers}</li>
        <li>Following: {user.following}</li>
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const resp = await fetch(
    'https://api.github.com/search/users?q=Tony&per_page=5'
  );
  const value = await resp.json();

  const paths = value.items.map((item) => {
    return {
      params: { id: item.login },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const response = await fetch('https://api.github.com/users/' + id);
  const data = await response.json();
  console.log(data);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data,
    },
  };
}
