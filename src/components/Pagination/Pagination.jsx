import { useState, useRef, useEffect } from "react";
import "./pagination.css";
import ArrowUp from "../../assets/icons/arrow-up.svg";

const Pagination = ({
  onNext,
  onPrevious,
  page,
  maxPages,
  totalItems,
  pageSize,
  setPageSize
}) => {
  const pageMessage = `${(page - 1) * pageSize + 1} to ${page * pageSize > totalItems ? totalItems : page * pageSize} of ${totalItems}`;
  const pageSizes = [5, 10, 15, 20];
  const [activeSize, setActiveSize] = useState(5);
  const [showSizes, setShowSizes] = useState(false);
  const handleSizeClick = (e, size) => {
    setActiveSize(size);
    setPageSize(size);
    setShowSizes(false);
    e.stopPropagation();
  }
  const dropdownRef = useRef(null);

  const handleClick = (e) => {
    const isClickedOutside = !dropdownRef?.current?.contains(e.target);
    if (isClickedOutside) setShowSizes(false);
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => { 
      document.removeEventListener("click", handleClick);
    }
  }, []);

  return <div className="pagination-parent">
    <div className="page-control">
      <button onClick={page > 1 ? onPrevious : () => { }}>{"<<"}</button>
      <p className="page-no">{ page }</p>
      <button onClick={page < maxPages ? onNext : () => { }}> {">>"} </button>
    </div>
    <p className="page-message">{ pageMessage }</p>
    <div className="rows-per-page">
      <p className="title">Page size</p>
      <div className="page-sizes" ref={dropdownRef} onClick={() => setShowSizes(size => size = !size)}>
        <div className="active-page-size">
          <p>{activeSize}</p>
          <img src={ArrowUp} /> 
        </div>
        { 
          showSizes &&
          <div className="page-sizes-list">
            {
              pageSizes.map((size, index) =>
                <p
                  key={`size-item-key-${index}`}
                  className={`${activeSize === size ? "active" : ""}`}
                  onClick={(e) => handleSizeClick(e, size)}
                >{size}</p>
              )
            }
          </div>
        }
      </div>
    </div>
  </div>
}

export default Pagination;