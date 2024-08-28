import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Cart from "./Cart";
import Sort from "./Sort";
import _ from "lodash";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [productsPerPage, setProductsPerPage] = useState(4);
  const [isCategoryFilter, setIsCategoryFilter] = useState(false);
  const [cart, setCart] = useState([]);
  const [isCartIcon, setIsCartIcon] = useState(false);

  useEffect(() => {
    const existingCartItem = localStorage.getItem("cart");
    if (existingCartItem) setCart(JSON.parse(existingCartItem));
  }, []);

  useEffect(() => {
    console.log("useEffect dependencies changed");
    if (isSearch && searchQuery.length >= 3) {
      searchProduct(searchQuery);
    } else if (isCategoryFilter) {
      categoryFilter(filterCategory);
    } else {
      getData(page, sort, sortOrder);
    }
  }, [
    page,
    sort,
    sortOrder,
    productsPerPage,
    isSearch,
    isCategoryFilter,
    searchQuery,
  ]);

  const getData = async (page, sort, sortOrder) => {
    const skip = (page - 1) * productsPerPage;
    const sortType = sort ? `&sortBy=${sort}&order=${sortOrder}` : "";
    console.log(
      `Fetching data: page=${page}, sort=${sort}, sortOrder=${sortOrder}`
    );

    await fetch(
      `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}${sortType}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched: ", data);
        setProducts(data.products);
        setTotalProducts(data.total);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const searchProduct = async (query) => {
    const sortType = sort ? `&sortBy=${sort}&order=${sortOrder}` : "";
    console.log(
      `Searching products: query=${query}, sort=${sort}, sortOrder=${sortOrder}`
    );

    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}&limit=${productsPerPage}&skip=${
        (page - 1) * productsPerPage
      }${sortType}`
    );
    const data = await response.json();
    console.log("Search data fetched: ", data);
    setProducts(data.products);
    setTotalProducts(data.total);
  };

  const categoryFilter = async (category) => {
    const skip = (page - 1) * productsPerPage;
    const sortType = sort ? `&sortBy=${sort}&order=${sortOrder}` : "";
    console.log(
      `Filtering by category: category=${category}, sort=${sort}, sortOrder=${sortOrder}`
    );

    const response = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=${productsPerPage}&skip=${skip}${sortType}`
    );
    const data = await response.json();
    console.log("Category filter data fetched: ", data);
    setProducts(data.products);
    setTotalProducts(data.total);
  };

  const handleCategoryFilter = (category) => {
    console.log("Category filter applied:", category);
    setIsCategoryFilter(true);
    setIsSearch(false);
    setFilterCategory(category);
    setPage(1);
  };

  const debouncedSearch = _.debounce(() => searchProduct(searchQuery), 500);

  const handleSearch = (query) => {
    console.log("Search query:", query);
    setIsSearch(true);
    setIsCategoryFilter(false);
    setSearchQuery(query);
    setPage(1);
    debouncedSearch();
  };

  const handleAddToCart = (product) => {
    console.log("Product added to cart:", product);
    const productIndex = cart.findIndex((p) => p.id === product.id);
    if (productIndex > -1) {
      cart[productIndex].quantity += 1;
    } else {
      product.quantity = 1;
      cart.push(product);
    }

    const updatedCart = [...cart];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item added to cart!");
  };
  const navigate = useNavigate();

  const handleCart = () => {
    navigate("/projectsPage/productsApp/cart");
    console.log("Cart icon clicked");
    setIsCartIcon(true);
  };

  return (
    <>
      <Navbar
        handleSearch={handleSearch}
        handleCategoryFilter={handleCategoryFilter}
        handleCart={handleCart}
        cart={cart}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="Main_Container">
              <Toaster position="top-center" reverseOrder={false} />
              <div className="d-flex align-items-center justify-content-end">
                <Sort setSort={setSort} setSortOrder={setSortOrder} />
                <Pagination
                  totalProducts={totalProducts}
                  productsPerPage={productsPerPage}
                  setProductsPerPage={setProductsPerPage}
                  page={page}
                  setPage={setPage}
                />
              </div>
              <ProductCard
                products={products}
                handleAddToCart={handleAddToCart}
              />
              <Footer />
            </div>
          }
        />
        <Route
          path="cart"
          element={
            <div className="Main_Container">
              <Cart cart={cart} isCartIcon={isCartIcon} setCart={setCart} />
            </div>
          }
        />
        <Route
          path="/products/:id"
          element={
            <div className="Main_Container">
              <ProductDetail
                products={products}
                handleAddToCart={handleAddToCart}
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
