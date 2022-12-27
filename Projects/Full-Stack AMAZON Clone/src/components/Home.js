/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import { SliderData } from "./SliderData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "./ProductAxios";

function Home({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [products, setProducts] = useState([]);

  //console.log(products, "🚀😍");

  let firstHomeRow = [];
  let secondHomeRow = [];
  let ThirdHomeRow = [];
  let fourthHomeRow = [];
  let fifthHomeRow = [];
  let sixthHomeRow = [];
  let seventhHomeRow = [];
  let eighthsHomeRow = [];
  let ninthsHomeRow = [];
  let tenthHomeRow = [];
  let eleventhHomeRow = [];

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setProducts(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  products.map((product) => {
    switch (product.type) {
      case "firstHomeRow":
        firstHomeRow = [...firstHomeRow, { id: product._id, product }];
        break;
      case "secondHomeRow":
        secondHomeRow = [...secondHomeRow, { id: product._id, product }];
        break;
      case "ThirdHomeRow":
        ThirdHomeRow = [...ThirdHomeRow, { id: product._id, product }];
        break;
      case "fourthHomeRow":
        fourthHomeRow = [...fourthHomeRow, { id: product._id, product }];
        break;
      case "fifthHomeRow":
        fifthHomeRow = [...fifthHomeRow, { id: product._id, product }];
        break;
      case "sixthHomeRow":
        sixthHomeRow = [...sixthHomeRow, { id: product._id, product }];
        break;
      case "seventhHomeRow":
        seventhHomeRow = [...seventhHomeRow, { id: product._id, product }];
        break;
      case "eighthsHomeRow":
        eighthsHomeRow = [...eighthsHomeRow, { id: product._id, product }];
        break;
      case "ninthsHomeRow":
        ninthsHomeRow = [...ninthsHomeRow, { id: product._id, product }];
        break;
      case "tenthHomeRow":
        tenthHomeRow = [...tenthHomeRow, { id: product._id, product }];
        break;
      case "eleventhHomeRow":
        eleventhHomeRow = [...eleventhHomeRow, { id: product._id, product }];
        break;
      default:
        break;
    }
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 6000);
  }, [setTimeout(6000)]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="home">
      <div className="home__container">
        <ArrowBackIosIcon className="left-arrow" onClick={prevSlide} />
        <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"}>
              {index === current && (
                <img src={slide.image} className="home__image" />
              )}
            </div>
          );
        })}

        <div className="home__row">
          {firstHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>

        <div className="home__row">
          {secondHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {ThirdHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {fourthHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {fifthHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {sixthHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {seventhHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {eighthsHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {ninthsHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {tenthHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
        <div className="home__row">
          {eleventhHomeRow.map((data) => (
            <Product
              id={data.product._id}
              title={data.product.title}
              price={data.product.price}
              image={data.product.image}
              rating={data.product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
