import React, { useState, useEffect } from 'react';
import styles from "./AlbumList.module.css";
import { BASE_URL } from '../../constant';

interface Album {
  id: number;
  title: string;
}

const AlbumList: React.FC<{ userId: number; onSelectAlbum: (albumId: number) => void }> = ({ userId, onSelectAlbum }) => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/albums`)
      .then((response) => response.json())
      .then((data) => setAlbums(data.filter((d: { userId: number; }) => d.userId === userId)))
      .catch((error) => {
        console.error('Error fetching albums:', error);
      });
  }, [userId]);


  return (
    <div>
      <h2>Albums</h2>
      <ul id="album_list">
        {albums.length > 0 && albums.map((album, index) => (
          <li key={`album_${index+1}`} className={styles.albumItem} onClick={() => onSelectAlbum(album.id)}>
            {album.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
