import React from "react";
import { useParams } from "react-router-dom";
import "./collection-page.styles.scss";

import { selectCollection } from "../../redux/shop/shop.selector";

import { useSelector } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = (props) => {
  const params = useParams();
  const paramsId = params.collectionId;
  const collection = useSelector((state) => selectCollection(paramsId)(state));

  // console.log("COLLECTION", collection);
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>

      <div className="items">
        {collection.items.map(({ id, ...otherClProps }) => (
          <CollectionItem key={id} {...otherClProps} id={id} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
