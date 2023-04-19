export function Gadgets({ productsData }) {
  // Add a border around the product details which has price above 50000.
  return (
    <div>
      <h1>Gadgets</h1>
      <ol>
        {productsData.map(({ id, name, description, price }) => <li key={id} style={{ border: price > 50000 ? '2px solid red' : 'none' }}>Name: {name}, Description: {description}, Price: {price},</li>)}
      </ol>
    </div>
  );
}
