import ProductCard from './ProductCard';

const ProductsTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>S No.</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            brand={product.brand}
            category={product.category}
            price={product.price}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;