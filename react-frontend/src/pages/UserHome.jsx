import { useState, useEffect } from "react";
import api from "../api";
import SearchBar from "../components/SearchBar";

const UserHome = () => {
  // keep track of state
  const [watchlistItems, setWatchlistItems] = useState([]);
//   const [stockTitle, setStockTitle] = useState('');
//   const [stockSubtitle, setStockSubtitle] = useState('');
//   const [stockContent, setStockContent] = useState('');

  useEffect(() => {
    getWatchlist();
  }, []);

  const getWatchlist = () => {
    api
      .get("api/watchlist/")
      .then((res) => res.data)
      .then((data) => {
        setWatchlistItems(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteWatchlistItem = (id) => {
    api.get("api/watchlist/${id}/").then((res) => {
      if (res.status === 204) {
        alert("Item deleted!");
      } else {
        alert("Failed to delete.");
      }
    }).catch((err) => console.log(err));

    // change this to more efficient deletion
    getWatchlist();
  };
  // if created in other website, call api for creation on that website, then reload this page

  const createWatchlistItem = (e) => {
    e.preventDefault();
    api
        .post("/api/watchlist/", { 
            stock_title: 'AAPL',
            stock_subtitle: 'Apple Computer Inc.',
            content: 'Apple Inc. is a multinational technology company focused on .....'
         })
        .then((res) => {
            if (res.status === 201) alert("Item created!");
            else alert("Failed to add to Watchlist.");
            getWatchlist();
        })
        .catch((err) => alert(err));
};


  return (
  <>
  <h1>User Home Page...</h1>
  <SearchBar></SearchBar>
  </>
  )
};

export default UserHome;
