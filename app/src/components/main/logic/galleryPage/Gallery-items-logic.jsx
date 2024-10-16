"use client";

import { useEffect, useState } from "react";

import GalleryItems from "../../rendering/galleryPage/Gallery-items";

export default function GalleryItemsLogic() {
  const [pictures, setPictures] = useState([]);

  const fetchFiles = async () => {
    try {
      const res = await fetch(`/api/gallery/pictures`);
      if (!res.ok) {
        throw new Error("Erreur lors de la récupération des images");
      }
      
      const data = await res.json();  
      setPictures(data);
    
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);


  return <GalleryItems pictures={pictures} />;
}
