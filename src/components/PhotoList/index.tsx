import React, { useState, useEffect } from 'react';
import styles from "./PhotoList.module.css";
import { BASE_URL } from '../../constant';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const PhotoList: React.FC<{ albumId: number }> = ({ albumId }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/photos`)
      .then((response) => response.json())
      .then((data) => setPhotos(data.filter((d: { albumId: number; }) => d.albumId === albumId)));
  }, [albumId]);

  return (
    <div className={styles.photoListContainer}>
      <h2>Photos</h2>
      <div className={styles.shweta}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.photoItem}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
