import { Card } from "react-bootstrap";

type ProductProps = {
  id: Number;
  title: String;
  price: Number;
  imgUrl: String;
};

const Product = ({ id, title, price, imgUrl }: ProductProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column bg-dark">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2 text-light">{title}</span>
          <span className="ms-2 text-light">{price}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Product;
