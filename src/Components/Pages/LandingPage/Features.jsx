import React from 'react'
import "../LandingPage/LandingPage.css"
import FeatureData from './FeatureData';
import featureimage from "../../images/your_input.png"
import featureimage1 from "../../images/trees.png"
import featureimage2 from "../../images/support.png"
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div id='features'>
        <div className="a-container">
            
            <FeatureData image={featureimage} title=" Document Trees"/>
            <Link to="/dashboard" >
            <FeatureData image={featureimage1} title=" View Your Tree Exercise"/>
            </Link>
            <FeatureData image={featureimage2} title=" Support Tree Planting"/>
        </div>
    </div>
  )
}

export default Features;