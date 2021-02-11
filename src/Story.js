import React, {useState} from "react"
import story1 from "./story1"

export default function Story(){

    const [slide, setSlide] = useState(1)

    return(
        <>
        {slide === 1 ? null : <p onClick={() => setSlide(slide - 1)}>back</p>}
        <p onClick={() => setSlide(slide + 1)}>next</p>
        <story1.useState />
        </>
    )
}