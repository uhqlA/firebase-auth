import React from 'react'
import "../LandingPage/LandingPage.css"
import FeatureData from './FeatureData';
import featureimage from "../../images/feature_1.png"
import featureimage1 from "../../images/feature_2.png"
import featureimage2 from "../../images/feature_3.png"
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div id='features'>
        <div className="a-container">
            <Link to="/dashboard" >
            <FeatureData image={featureimage} title=" Document Trees"/></Link>
            <FeatureData image={featureimage1} title=" View Your Tree Exercise"/>
            <FeatureData image={featureimage2} title=" Support Tree Planting"/>
        </div>
    </div>
  )
}

export default Features;