import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryCompo = ({images=[]}) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 3 }}>
      <Masonry columnsCount={2} gutter="10px">
       {/* <div className="w-1/2"> */}
       {images.map((image, i) => (
          <img
            key={i}
            src={image}
            style={{ width: "100%", display: "block" }}
          />
        ))}
       {/* </div> */}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryCompo;
