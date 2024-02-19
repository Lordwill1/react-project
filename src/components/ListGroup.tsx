// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
}

import { useState } from "react";

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => { setSelectedIndex(index); }}
          
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
