import React, { useState } from 'react';
import AlbumList from './components/AlbumList';
import Breadcrumbs from './components/Breadcrumb';
import UserList from './components/UserList';
import PhotoList from './components/PhotoList';
import styles from "./App.module.css";


const App: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState<number | null>(null);
  const [breadcrumbPath, setBreadcrumbPath] = useState<string[]>([]);

  const handleSelectUser = (userId: number) => {
    setSelectedUserId(userId);
    setSelectedAlbumId(null);
    setBreadcrumbPath([`User ${userId}`]);
  };

  const handleSelectAlbum = (albumId: number) => {
    setSelectedAlbumId(albumId);
    setBreadcrumbPath((prevPath) => [...prevPath, `Album ${albumId}`]);
  };

  const handleNavigateBreadcrumb = (index: number) => {
    setBreadcrumbPath((prevPath) => prevPath.slice(0, index + 1));
    setSelectedAlbumId(null);
  };

  return (
    <div className={styles.Main}>
            <Breadcrumbs path={breadcrumbPath} onNavigate={handleNavigateBreadcrumb} />
      <UserList onSelectUser={handleSelectUser} />
      {selectedUserId && <AlbumList userId={selectedUserId} onSelectAlbum={handleSelectAlbum} />}
      {selectedAlbumId && <PhotoList albumId={selectedAlbumId} />}
    </div>
  );
};

export default App;
