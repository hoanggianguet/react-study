import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";

const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  addAlbum(user);
  return <div>Albums for {user.name}</div>;
};

export default AlbumsList;
