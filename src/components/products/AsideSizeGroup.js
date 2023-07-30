import { useRef, useState } from 'react';
import { num_sizes_items, x_sizes_items } from './items';
import { CSSTransition } from 'react-transition-group';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function AsideSizeGroup() {
  const [showSizeBody, setShowSizeBody] = useState(true);
  const SIZERef = useRef(null);

  // map for items to given the items
  const numSizeList = num_sizes_items.map((item, index) => {
    return (
      <li className="d-flex justify-content-start" key={index}>
        <input className="radio-input" type="checkbox" name="sizes" id={`num_filter_sizes_${index}`} />
        <label htmlFor={`num_filter_sizes_${index}`} className="mr-2">
          {item}
        </label>
      </li>
    );
  });
  // map for items to given the items
  const xSizeList = x_sizes_items.map((item, index) => {
    return (
      <li className="d-flex justify-content-start" key={index}>
        <input className="radio-input" type="checkbox" name="sizes" id={`x_filter_sizes_${index}`} />
        <label htmlFor={`x_filter_sizes_${index}`} className="mr-2">
          {item}
        </label>
      </li>
    );
  });

  return (
    <div className="aside-group">
      <div className="aside-header d-flex justify-content-between align-items-center" onClick={() => setShowSizeBody(prev => !prev)}>
        <h4 className="m-0">المقاسات</h4>
        {showSizeBody ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      <CSSTransition in={showSizeBody} nodeRef={SIZERef} timeout={200} classNames="slideup" unmountOnExit>
        <div className="aside-body d-flex" ref={SIZERef}>
          <ul className="list-unstyled d-flex flex-column w-50">{numSizeList}</ul>
          <ul className="list-unstyled d-flex flex-column w-50">{xSizeList}</ul>
        </div>
      </CSSTransition>
    </div>
  );
}

export default AsideSizeGroup;
