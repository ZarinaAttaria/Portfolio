import React from "react";
import SearchInput from "./SearchInput";
import Dropdown from "./Dropdown";
import { Badge } from "antd";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ cart, handleSearch, handleCart, handleCategoryFilter }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ProductsApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active HomeLink"
                aria-current="page"
                href="/projectsPage/productsApp"
              >
                Home
              </a>
            </li>
          </ul>
          <Dropdown type="category" handleAction={handleCategoryFilter} />
          <SearchInput handleSearch={handleSearch} />

          <Badge className="badge" count={cart?.length} showZero>
            <img
              src="https://img.icons8.com/?size=100&id=13014&format=png&color=000000"
              className="cartIcon"
              onClick={handleCart}
              alt="cart"
            />
          </Badge>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
