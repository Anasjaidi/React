import ProductItem from './ProductItem.jsx';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
    {id: 'i1', title: "product 1", price: 6, description: "my first product"},
    {id: 'i2', title: "product 2", price: 6, description: "my second product"}
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {
              DUMMY_PRODUCTS.map(pr => {
                  return (
                      <ProductItem
                          id={pr.id}
                          key={pr.id}
                          title={pr.title}
                          price={pr.price}
                          description={pr.description}
                      />
                  )
              })
          }
      </ul>
    </section>
  );
};

export default Products;
