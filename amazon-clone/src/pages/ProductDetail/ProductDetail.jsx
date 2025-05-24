import React, { useState, useEffect  } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoint';
import ProductCard from '../../Components/Products/ProductCard';
import Loader from '../../Components/Loader/Loader';

function ProductDetail() {
  const [singleProduct, setSingleProduct] = useState([])
  const [isLoading, setisLoading]=useState(false)
  const {productId}=useParams()
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setSingleProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={singleProduct}
          flex={true}
          renderDesc={true}
          renderAdd ={true}
        />
      )}
    </>
  );
}

export default ProductDetail;