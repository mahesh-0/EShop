import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfOne,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfOne}
          productName="Cap for Boys"
          price="35.00"
          color="Blank and White"
          badge={true}
          des="Boys' caps come in various styles and designs, providing a versatile accessory to complement their outfits and add a touch of personal flair."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Tea Table"
          price="180.00"
          color="Gray"
          badge={true}
          des="The tea table is a stylish and functional piece of furniture, serving as a central hub for sharing conversations and enjoying tea in a cozy setting."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="25.00"
          color="Mixed"
          badge={true}
          des="Headphones are audio devices worn over the ears, delivering immersive sound and providing a personalized listening experience for music, calls, or other audio content."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="Sun glasses"
          price="220.00"
          color="Black"
          badge={true}
          des="Sunglasses are stylish accessories that provide protection against harmful UV rays while adding a touch of flair to one's appearance."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
