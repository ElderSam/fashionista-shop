import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./styles.scss";

import Topbar from "../../components/Topbar";
import FilterBar from "../../components/FilterBar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

import { handleScroll } from "../../utils";
import { getProducts } from "../../services/api";
import { setProducts } from "../../store/actions/actions";

const Home = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((response) => {
      dispatch(setProducts(response));
    });
  }, [dispatch]);

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <>
      <Topbar />
      <div className="photo">
        <a href="#cards">Conheça nossos produtos</a>
      </div>
      <FilterBar />
      <div className="cards" id="cards">
        {products.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>
      <Footer />
    </>
  );
};
export default Home;