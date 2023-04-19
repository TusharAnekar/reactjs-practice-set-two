export function UserProfile({ userData: { name, age, email } }) {
  return (
    <div>
      <h1>User Details:</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}
