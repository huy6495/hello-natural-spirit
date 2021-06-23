import React from "react";

//Img import
import productImg1 from "../../Assets/ProductImg/p1.jpg";
import productImg2 from "../../Assets/ProductImg/p2.jpg";
import productImg3 from "../../Assets/ProductImg/p3.jpg";
import productImg4 from "../../Assets/ProductImg/p4.jpg";
import ProductCard from "../ProductCard/ProductCard";

//database
export const listProduct = [
  {
    id: "1",
    name: "Lemon",
    description:
      "Rượu homemade làm từ nguyên liệu tươi thiên nhiên với nguyên liệu chính là chanh vàng.",
    image: productImg1,
  },
  {
    id: "2",
    name: "Banana",
    description:
      "Rượu homemade làm từ nguyên liệu tươi thiên nhiên với nguyên liệu chính là chuối.",
    image: productImg2,
  },
  {
    id: "3",
    name: "Mango",
    description:
      "Rượu homemade làm từ nguyên liệu tươi thiên nhiên với nguyên liệu chính là xoài cát.",
    image: productImg3,
  },
  {
    id: "4",
    name: "Peppermin",
    description:
      "Rượu homemade làm từ nguyên liệu tươi thiên nhiên với nguyên liệu chính là bạc hà.",
    image: productImg4,
  },
];

export default function Product() {
  const renderList = (list) => {
    return list.map((item, index) => {
      return (
        <ProductCard
          key={index}
          name={item.name}
          description={item.description}
          image={item.image}
        ></ProductCard>
      );
    });
  };

  return (
    <div id="product" className="pt-4">
      <div className="mt-5">
        <div className="container text-center my-5">
          <h1>
            <span style={{ color: "#e2cc1e", fontSize: "60px" }}>A</span>ll
            product
          </h1>
          <div className="d-inline-flex justify-content-center w-100">
            {renderList(listProduct)}
          </div>
        </div>
      </div>
    </div>
  );
}
