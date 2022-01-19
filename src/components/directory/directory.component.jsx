import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import SECTIONS_DATA from "../../sections.data";
import SHOP_DATA from "../../pages/shop/shop.data";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: SECTIONS_DATA,
      shopData: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size, linkUrl }) => (
          <MenuItem
            key={id}
            title={title}
            size={size}
            subtitle="SHOP NOW"
            imageUrl={imageUrl}
            linkUrl={linkUrl}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
