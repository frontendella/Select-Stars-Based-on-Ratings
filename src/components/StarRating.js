import React, { useState } from "react";
import Star from "./Star";

export default function StarRating() {
  const [rating, setRating] = useState(null);

  // Write a function that returns 5 Star components
  function Stars() {
    let all_stars = [];
    let maxRating = 5;
    for (let i = 0; i < maxRating; i++) {
      all_stars.push(
        <Star
          isSelected={rating > i}
          setRating={() => handleSetRating(i + 1)}
          key={i}
        />
      );
    }
    return all_stars;
  }
  // Write an event handler that updates the rating state.
  function handleSetRating(rating_set) {
    if (rating_set === rating) {
      setRating({ rating_set: 0 });
    } else {
      setRating(rating_set);
    }
  }
  // Pass the function to a Star component via props

  return <ul className="course--stars">{Stars()}</ul>;
}
