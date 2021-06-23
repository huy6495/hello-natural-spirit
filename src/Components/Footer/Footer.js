import React from "react";
import { FaFacebook, FaTwitter, FaRss } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="contact">
      <div className="pb-3 bg-dark">
        <div className="container text-center pt-3" style={{ padding: "0" }}>
          <hr style={{ borderTop: "1px solid #e2cc1e" }}></hr>
        </div>
        <div className="container text-light ">
          <div className="row">
            <div
              className="col-3 ml-2 mt-1"
              style={{ borderRight: "1px solid #e2cc1e" }}
            >
              <h3>Hello natural spirit</h3>
              <p style={{ color: "#e2cc1e" }}>About us</p>
              <p>
                Chúng tôi làm ra những sản phẩm rượu từ homemade làm từ nguyên
                liệu tươi thiên nhiên.
              </p>
            </div>
            <div className="col-8 text-center">
              <h3 style={{ textDecoration: "underline" }}>CONTACT US</h3>
              <h6 className="mt-4">
                Email: example@gmail.com - <span>Phone: 0945453345</span>
              </h6>
              <h3 className="mt-3">
                <FaFacebook></FaFacebook>
                <span className="mx-2"> </span>
                <FaTwitter></FaTwitter>
                <span className="mx-2"> </span>
                <FaRss></FaRss>
              </h3>
            </div>
          </div>
        </div>
        <div className="container text-center" style={{ padding: "0" }}>
          <hr style={{ borderTop: "1px solid #e2cc1e" }}></hr>
        </div>
        <div className="text-center text-light mt-4">
          <h6 style={{ lineHeight: 0.6 }}>
            © 2021 Hello natural spirit. All Rights Reserved | Design by
            <span> </span>
            <a href="#" target="=_blank" style={{ color: "#e2cc1e" }}>
              HELLO NATURAL SPIRIT
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}
