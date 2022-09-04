import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 4.99,
    title: "CS BOOK",
    description: "Complete computer science book",
  },
  {
    id: "p2",
    price: 4.99,
    title: "SE BOOK",
    description: "Complete software engineering book",
  },
  {
    id: "p3",
    price: 9.99,
    title: "Web Dev BOOK",
    description: "Complete web development book",
  },
  {
    id: "p4",
    price: 7.99,
    title: "ReactJS BOOK",
    description: "Complete ReactJS course book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
