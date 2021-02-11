import React, { useState } from "react";
import Story1 from "./story1";
import Story2 from "./story2";
import Story3 from "./story3";
import Story4 from "./story4";
import Story5 from "./story5";
import Story6 from "./story6";
import Story7 from "./story7";

export default function Story() {
  const [slide, setSlide] = useState(1);
  const slides = {
    1: Story1,
    2: Story2,
    3: Story3,
    4: Story4,
    5: Story5,
    6: Story6,
    7: Story7,
  };
  const Component = slides[slide];

  return (
    <div className="row story">
      <p
        className="col-2 direction"
        id="title"
        onClick={() => slide !== 1 && setSlide(slide - 1)}
      >
        back
      </p>
      <div className="col-8 content" id="body">
        <Component />
      </div>
      {slide === 7 ? (
        ""
      ) : (
        <p
          className="col-2 direction"
          id="title"
          onClick={() => setSlide(slide + 1)}
        >
          next
        </p>
      )}
    </div>
  );
}
