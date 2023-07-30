import { useRef, useState } from 'react';
import { colors_items } from './items';
import { CSSTransition } from 'react-transition-group';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function AsideColorGroup() {
  const [showColorBody, setShowColorBody] = useState(true);
  const COLORRef = useRef(null);

  // map for items to given the items
  const colorList = colors_items.map((item, index) => {
    return (
      <li key={index}>
        <input className="checkbox-input" type="checkbox" name="color" style={{ backgroundColor: `${item.code}` }} data-title-top={item.name} />
      </li>
    );
  });

  return (
    <div className="aside-group">
      <div className="aside-header d-flex justify-content-between align-items-center" onClick={() => setShowColorBody(prev => !prev)}>
        <h4 className="m-0">الالوان</h4>
        {showColorBody ? <FiChevronUp /> : <FiChevronDown />}
      </div>
      <CSSTransition in={showColorBody} nodeRef={COLORRef} timeout={200} classNames="slideup" unmountOnExit>
        <div className="aside-body" ref={COLORRef}>
          <ul className="list-unstyled d-flex flex-wrap gap-10">{colorList}</ul>
        </div>
      </CSSTransition>
    </div>
  );
}

export default AsideColorGroup;
