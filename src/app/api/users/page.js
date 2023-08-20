import prisma from "../../../../lib/prisma";

async function getUsers() {
  // Fetch the users directly from the database
  const users = await prisma.user.findMany({
    select: { name: true, email: true },
  });
  return users;
}

export default async function Users() {
  const users = await getUsers();

  return (
    <main>
      <p>Show all users!</p>
      <div>
        <h1>User List</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.name || user.email}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
