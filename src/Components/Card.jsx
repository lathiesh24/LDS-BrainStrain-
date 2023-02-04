import React, { useState } from "react";

const CardImage = (props) => {
const isImageURL = props.image;

if (isImageURL) {
return (
<div className="h-64 sm:h-full overflow-hidden" onClick={props.onClick}>
<img
  className={`${ props.effect ? "transform-black-and-white" : "" } w-full h-full object-cover`}
  src={props.image}
  alt="Seattle"
/>
</div>
);
}
return null;
};

const CardContent = (props) => {
return (
<div className="p-4">
<p className="text-xl font-bold">{props.title}</p>
<p className="text-gray-500">{props.location}</p>
<p className="text-gray-600">{props.description}</p>
</div>
);
};

const Card = (props) => {
const [bwEffect, setBwEffect] = useState(false);

const toggleEffect = () => {
setBwEffect(!bwEffect);
};

return (
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
<CardImage
       image={props.image}
       effect={bwEffect}
       onClick={toggleEffect}
     />
<CardContent
       title={props.title}
       location={props.location}
       description={props.description}
     />
</div>
</div>
);
};

Card.defaultProps = {
title: "Template - Card Title",
location: "Location label",
description: "Template description textbox"
};

export default Card;





