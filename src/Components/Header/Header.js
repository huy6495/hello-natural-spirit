import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div id="m_nav_container">
      <nav>
        <ul id="m_nav_list" className="m_nav menu__list">
          <li className="m_nav_item">
            <a href="/">
              <div class="btn-menu from-left">Home</div>
            </a>
          </li>
          <li className="m_nav_item">
            <a href="#product">
              <div class="btn-menu from-left">Product</div>
            </a>
          </li>
          <li className="m_nav_item">
            <a href="#about">
              <div class="btn-menu from-left">About</div>
            </a>
          </li>
          <li className="m_nav_item">
            <a href="#contact">
              <div class="btn-menu from-left">Contact</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
