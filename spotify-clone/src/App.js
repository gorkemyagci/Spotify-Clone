import SideBar from "components/SideBar";
import Footer from "components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "pages/Auth/SignUp";
import ViewsLayout from "views/ViewsLayout/ViewsLayout";
import Home from "./views/ViewsLayout/Home";
import Search from "views/ViewsLayout/Search";
import Login from "pages/Auth/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/auth";
import CollectionLayout from "views/Collection/CollectionLayout";
import Playlists from "views/Collection/Playlists";
import Podcasts from "views/Collection/Podcasts";
import Artists from "views/Collection/Artists";
import Albums from "views/Collection/Albums";



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch(login(token));
      }
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ViewsLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/collection" element={<CollectionLayout />}>
                <Route path="playlists" element={<Playlists />} />
                <Route path="podcasts" element={<Podcasts />} />
                <Route path="artists" element={<Artists />} />
                <Route path="albums" element={<Albums />} />
          </Route>
        </Route>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
