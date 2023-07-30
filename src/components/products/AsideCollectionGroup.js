import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { CSSTransition } from 'react-transition-group';
import { shop_items } from "../collections/items";
import { useRef, useState } from "react";


function AsideCollectionGroup() {
  const COLLECTIONRef = useRef(null);
  const [showCollectionBody, setShowCollectionBody] = useState(true);

  // map for items to given the items
  const collectionList = shop_items.map((item, index) => {
    return (
      <li className="d-flex justify-content-start" key={index}>
        <input className="radio-input" type="radio" name="collections" id={`filter_collections_${item.id}`} />
        <label htmlFor={`filter_collections_${item.id}`} className="mr-2">
          {item.title}
        </label>
        <span className="mr-auto">{item.count}</span>
      </li>
    );
  });

  return (
    <div className="aside-group">
      <div className="aside-header d-flex justify-content-between align-items-center" onClick={() => setShowCollectionBody(prev => !prev)}>
        <h4 className="m-0">الاقسام</h4>
        {showCollectionBody ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      <CSSTransition in={showCollectionBody} nodeRef={COLLECTIONRef} timeout={200} classNames="slideup" unmountOnExit>
        <div className="aside-body" ref={COLLECTIONRef}>
          <ul className="list-unstyled">{collectionList}</ul>
        </div>
      </CSSTransition>
    </div>
  );
}

export default AsideCollectionGroup;
