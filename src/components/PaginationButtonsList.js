import React from "react";
const PaginationButtonsList = (props) => {
  console.log(props.pages);

  return (
    <div className="pagination-buttons-list">
      {Array(20)
        .fill(false)
        .map((elm, ind) => {
          return (
            <div className="" key={ind + 1}>
              <button id={`button-${ind+1}`}
                className={props.pages === ind + 1 ? "active-btn" : ""}
                key={ind + 1}
                onClick={() => {
                  props.setPages(ind + 1);
                }}
              >
                {ind + 1}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export { PaginationButtonsList };
