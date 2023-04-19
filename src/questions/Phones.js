export function Phones({ digitalProducts }) {
  return (
    <div>
      <h1>Mobile Phones</h1>
      <ul>
        {digitalProducts.filter(({ name }) => name === 'mobile').map(({ id, name, description, price }) => <li key={id}>Name: {name}, Description: {description}, Price: {price}</li>)}
      </ul>
    </div>
  );
}
