import React, { useContext, useEffect, useState } from "react";
import styles from "./ProductDetails.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context-food/context-food";
import ProductDetailsMain from "./ProductDetailsMain/ProductDetailsMain";
import Button from "../../components/UI/Button/Button";


export default function ProductDetails() {
  const { allProducts, loading } = useContext(Context);

  const [product, setProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (allProducts.length) {
      const itemFound = allProducts.find((product) => product._id === id);
      itemFound ? setProduct(itemFound) : navigate("/NotFound");
    }
  }, [allProducts]);

  return (
    <div className={styles['product-details-wrapper']}>
      <Button text={'Return Homepage'} func={() => navigate('/')} />
      {!loading && <ProductDetailsMain product={product}/>}
    </div>
  );
}
