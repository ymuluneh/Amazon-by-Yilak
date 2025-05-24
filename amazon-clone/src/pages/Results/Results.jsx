import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/Catagory/CatagoryCard";
import Loader from "../../Components/Loader/Loader";
import  "./result.css"
// import Classes from "../../Components/Catagory/category.module.css"

function Results() {
  const [isLoading, setisLoading]= useState(false)
  const [results, setResults] = useState([]); 
  const { categoryName } = useParams();
  console.log(categoryName);

  useEffect(() => {
    setisLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
      
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
        <div className="catagories">
          {results.map((product, i) => (
            <ProductCard key={i} data={product} 
            renderDesc={false }
            renderAdd={true} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Results;
