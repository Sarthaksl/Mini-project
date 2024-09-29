import React from "react";
import galleryImages from "./galleryImages";
import Mansonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Mansonry gutter="1rem">
            {galleryImages.map((item, index) => (
                <img className="masonry__img" key={index} src={item} alt="gallery" style={{width: "100%", display: "block", borderRadius: "10px"}}/>
            ))}
        </Mansonry>
        </ResponsiveMasonry>
    );
}

export default MasonryImagesGallery;