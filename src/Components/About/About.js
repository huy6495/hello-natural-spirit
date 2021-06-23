import React from "react";

//import square img
import p1s from "../../Assets/ProductImg/p1-square.jpg";
import p2s from "../../Assets/ProductImg/p2-square.jpg";
import p3s from "../../Assets/ProductImg/p3-square.jpg";
import p4s from "../../Assets/ProductImg/p4-square.jpg";

export default function About() {
  return (
    <div className="pt-5" id="about">
      <div className="mt-5 pb-5" style={{ backgroundColor: "#e2cc1e75" }}>
        <div className="container text-center my-5 ">
          <h1 className="text-light">
            <span style={{ color: "#e2cc1e", fontSize: "60px" }}>A</span>bout us
          </h1>
        </div>
        <div className="container text-light ">
          <div className="row">
            <div className="col-5 mt-5">
              <h3>Hello natural spirit</h3>
              <p>
                Chúng tôi làm ra những sản phẩm rượu từ homemade làm từ nguyên
                liệu tươi thiên nhiên. Chúng tôi làm ra những sản phẩm rượu từ
                homemade làm từ nguyên liệu tươi thiên nhiên. Chúng tôi làm ra
                những sản phẩm rượu từ homemade làm từ nguyên liệu tươi thiên
                nhiên.
              </p>
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col-2"></div>
                <div
                  className="col-4 mx-2"
                  style={{ padding: "0", border: "5px solid #e2cc1e" }}
                >
                  <img style={{ width: "100%" }} src={p1s} />
                </div>
                <div
                  className="col-4"
                  style={{ padding: "0", border: "5px solid #e2cc1e" }}
                >
                  <img style={{ width: "100%" }} src={p2s} />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-1"></div>
                <div
                  className="col-4 mx-2"
                  style={{ padding: "0", border: "5px solid #e2cc1e" }}
                >
                  <img style={{ width: "100%" }} src={p3s} />
                </div>
                <div
                  className="col-4"
                  style={{ padding: "0", border: "5px solid #e2cc1e" }}
                >
                  <img style={{ width: "100%" }} src={p4s} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
