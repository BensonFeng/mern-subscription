import axios from "axios";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const ArticlesPlan = () => {
  useEffect(() => {
    fetchPrices();
  }, []);

  const fetchPrices = async () => {
    const { data: response } = await axios.get(
      "http://localhost:8080/subs/prices"
    );
    console.log(response);
  };
  return <Container>Articles</Container>;
};

export default ArticlesPlan;
