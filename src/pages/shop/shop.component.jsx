import React from "react";
import { Route, Routes } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection-page.component";
import "./shop.styles.scss";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <div className="items">
        <Routes>
          <Route exact path="/" element={<CollectionsOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default ShopPage;
