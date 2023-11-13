import React, { useEffect, useRef } from "react"
import "./Collection.css"
import { Link } from "react-router-dom"
import prod1 from '../../img/collection1.png'
import prod2 from '../../img/collection2.png'
import prod3 from '../../img/collection3.png'
import prod4 from '../../img/collection4.png'
import prod5 from '../../img/collection5.png'

export default function Collection() {

    const data = [
        {
            name: "Paloma",
            img: prod1
        },
        {
            name: "Pation Fruit Martini",
            img: prod2
        },
        {
            name: "Cosmopolitan",
            img: prod3
        },
        {
            name: "Negroni",
            img: prod4
        },
        {
            name: "Mojito",
            img: prod5
        },
        {
            name: "Paloma",
            img: prod1
        },
        {
            name: "Pation Fruit Martini",
            img: prod2
        },
        {
            name: "Cosmopolitan",
            img: prod3
        },
        {
            name: "Negroni",
            img: prod4
        },
        {
            name: "Mojito",
            img: prod5
        }
    ]

  return (
    <div className="Collection">
        <h2 className="title-Collection">Our full collection</h2>
        <CustomCarousel>
            {data.map((product, index) => {
                return <Box name={product.name} img={product.img} key={index} />;
            })}
        </CustomCarousel>
        <Link to="/collections/all">
            <button className="btn-product">Shop all products</button>
        </Link>
    </div>
  );
}

function CustomCarousel(props) {
  const slider = useRef(null);
  let isDown = useRef(false);
  let startX = useRef(null);
  let scrollLeft = useRef(null);

  useEffect(() => {
    if (slider && slider.current) {
      let sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", one);
      sliderRef.addEventListener("mousedown", two);
      sliderRef.addEventListener("mouseleave", three);
      sliderRef.addEventListener("mouseup", four);
      sliderRef.addEventListener("mousemove", five);

      return () => {
        sliderRef.removeEventListener("mousedown", one);
        sliderRef.removeEventListener("mousedown", two);
        sliderRef.removeEventListener("mouseleave", three);
        sliderRef.removeEventListener("mouseup", four);
        sliderRef.removeEventListener("mousemove", five);
      };
    }
  }, []);

  function one(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function two(e) {
    isDown.current = true;
    startX.current = e.pageX - slider.current.offsetLeft;
    scrollLeft.current = slider.current.scrollLeft;
  }

  function three() {
    isDown.current = false;
  }

  function four() {
    isDown.current = false;
  }

  function five(e) {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = x - startX.current;
    slider.current.scrollLeft = scrollLeft.current - walk;
  }

  return (
    <div className="items" ref={slider}>
      {props.children}
    </div>
  );
}

function Box({ name, img}) {
    return(
        <div className="box">
            <div className="img-container">
                <img src={img} />
            </div>
            <div className="name-product">{name}</div>
        </div>
  )
}
