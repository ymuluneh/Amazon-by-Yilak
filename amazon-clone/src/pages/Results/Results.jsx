import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/Products/ProductCard";
import Loader from "../../Components/Loader/Loader";
import classes from "./result.module.css"

function Results() {
  const [isLoading, setisLoading]= useState(false)
  const [results, setResults] = useState([]); 
  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
      console.log(res.data);
        setisLoading(false);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, [categoryName]);

  return (
    <section>
      <h2 style={{ padding: "30px" }}>Results</h2>
      <p style={{ padding: "30px" }}>Category: {categoryName}</p>
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.catagories}>
          {results.map((product, i) => (
            <ProductCard key={i} product={product} 
            renderDesc={false }
            renderAdd={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Results;
