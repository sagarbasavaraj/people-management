import React from "react";
import classnames from "classnames";

function CardHeader({ title, description, className }) {
  const cardHeaderClassName = classnames("card-header", {
    [className]: !!className,
  });

  return (
    <div className={cardHeaderClassName}>
      <h1 className="title">{title}</h1>
      <h2 className="description">{description}</h2>
    </div>
  );
}

export default CardHeader;
