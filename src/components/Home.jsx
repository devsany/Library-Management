import React from "react";
import HomeLeadImage from "../HomePageComponent/HomeLeadImage";
import DescriptionLib from "../HomePageComponent/DescriptionLib";
import Subscribe from "../HomePageComponent/Subscribe";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="contenet">
          {/* home lead Image */}
          <HomeLeadImage />
          {/* Description of Labrary Management in three coloum*/}
          <DescriptionLib />
          {/* image with content in scroll bar */}
          {/* message form Site admin*/}
          {/* subsciribe our labriry management system */}
          <Subscribe />
          {/* donation for more do in labrary management system */}
          {/* footer
          1. column first little decription of Labrary management system
          2. Link to same site as header containt
          3. manage more
          4. contact to developer
         */}
        </div>
      </div>
    </div>
  );
};

export default Home;
