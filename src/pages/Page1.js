import React, {useState} from "react";
import hzImage from '../img/杭州.png'
import shImage from '../img/上海.png'
import bjImage from '../img/北京.png'
import cdImage from '../img/成都.png'
import Button from "../components/Button";
import {findByDisplayValue} from "@testing-library/react";
export default function Page1() {
  const cityData = [
    {
      city: "杭州",
      src: hzImage,
      isActive: true
    },
    {
      city: "上海",
      src: shImage,
      isActive: false
    },
    {
      city: "北京",
      src: bjImage,
      isActive: false
    },
    {
      city: "成都",
      src: cdImage,
      isActive: false
    }
  ]
  const [cityList, setCityList] = useState(cityData);
  const [imageSrc, setImageSrc] = useState(hzImage);
  // const [imageIsActive, setIsActive] = useState(hz)
  const onBtnClicked = (index) => {
    const newCity = cityData.map((city, i) => {
      // city.isActive = index === i;
      // return setImageSrc(city.src)
      if(index === i) {
        setImageSrc(city.src)
      }
      city.isActive = index === i
      return city
    })
    setCityList(newCity)
  }
  return (
    <div>
      <div className="citiesButton">
        {
          cityList.map((city, index) => {
            return (
              <button
                onClick={() => onBtnClicked(index)}
                className={`cityButton ${city.isActive ? 'active' : ''}`}
                id={`cityButton${index}`}
              >
                {city.city}
              </button>
            )
          })
        }
      </div>
      <div className="cityImageWrap">
        <img className="cityImage" src={imageSrc} alt=""/>
      </div>
    </div>

  )
}
