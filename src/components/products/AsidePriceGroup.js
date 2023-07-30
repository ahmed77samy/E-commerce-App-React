import { useRef, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';

function AsidePriceGroup() {
  const [showPriceBody, setShowPriceBody] = useState(true);
  const PRICERef = useRef(null);
  const RANGERef = useRef(0);
  const LEFTRef = useRef(0);
  const RIGHTRef = useRef(0);
  const MXRef = useRef(0);
  const VALUEMXRef = useRef(0);
  const THUMBMXRef = useRef(0);
  const MNRef = useRef(0);
  const VALUEMNRef = useRef(0);
  const THUMBMNRef = useRef(0);

  // handleMin input range to range price
  const handleMin = (e) => {
    e.preventDefault();
    e.target.value = Math.min(e.target.value, MXRef.current.value - 1);
    RIGHTRef.current.style.width = (e.target.value * 100) / e.target.max + '%';
    RANGERef.current.style.right = (e.target.value * 100) / e.target.max + '%';
    THUMBMNRef.current.style.right = (e.target.value * 100) / e.target.max + '%';
    VALUEMNRef.current.style.right = (e.target.value * 100) / e.target.max + '%';
    VALUEMNRef.current.children[0].innerHTML = e.target.value;
  };

  // handleMax input range to range price
  const handleMax = (e) => {
    e.preventDefault();
    e.target.value = Math.max(e.target.value, MNRef.current.value - -1);
    LEFTRef.current.style.width = 100 - (e.target.value * 100) / e.target.max + '%';
    RANGERef.current.style.left = 100 - (e.target.value * 100) / e.target.max + '%';
    THUMBMXRef.current.style.right = (e.target.value * 100) / e.target.max + '%';
    VALUEMXRef.current.style.right = (e.target.value * 100) / e.target.max + '%';
    VALUEMXRef.current.children[0].innerHTML = e.target.value;
  };

  return (
    <div className="aside-group">
      <div className="aside-header d-flex justify-content-between align-items-center" onClick={() => setShowPriceBody(prev => !prev)}>
        <h4 className="m-0">السعر</h4>
        {showPriceBody ? <FiChevronUp /> : <FiChevronDown />}
      </div>

      <CSSTransition in={showPriceBody} nodeRef={PRICERef} timeout={200} classNames="slideup" unmountOnExit>
        <div className="aside-body" ref={PRICERef}>
          <div className="slider-range">
            <div>
              <div className="inverse-right" ref={RIGHTRef}></div>
              <div className="inverse-left" ref={LEFTRef}></div>
              <div className="range" ref={RANGERef}></div>
              <span className="thumb" style={{ right: '0%' }} ref={THUMBMNRef}></span>
              <span className="thumb" style={{ right: '100%' }} ref={THUMBMXRef}></span>
              <div className="sign" style={{ right: '0%' }} ref={VALUEMNRef}>
                <span id="value">0</span>
              </div>
              <div className="sign" style={{ right: '100%' }} ref={VALUEMXRef}>
                <span id="value">900</span>
              </div>
            </div>
            <input type="range" defaultValue="0" max="900" min="0" step="1" onInput={handleMin} ref={MNRef} />
            <input type="range" defaultValue="900" max="900" min="0" step="1" onInput={handleMax} ref={MXRef} />
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default AsidePriceGroup;
