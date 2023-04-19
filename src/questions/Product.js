export function Product({ name, price }) {
  return (
    <div>
      <h1>Product Details</h1>
      <p style={{ color: 'blue', fontWeight: 'bold' }}>Name: {name}</p>
      <p style={{ color: 'green', fontStyle: 'italics' }}>Price: {price}</p>
    </div>
  );
}
