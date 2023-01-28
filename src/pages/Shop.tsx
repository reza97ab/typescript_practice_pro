import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import productItem from "../data/products.json";

const Shop = () => {
  return (
    <>
      <Row lg={3} xs={1} md={2} className="g-3">
        {productItem.map((item) => (
          <Col key={item.id}>
            <Product {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Shop;
