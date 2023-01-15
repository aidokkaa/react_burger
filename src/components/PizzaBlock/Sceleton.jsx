import React from "react"
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="10" cy="20" r="8" /> 
    <rect x="20" y="181" rx="0" ry="0" width="0" height="1" /> 
    <circle cx="127" cy="112" r="112" /> 
    <circle cx="156" cy="110" r="19" /> 
    <circle cx="156" cy="46" r="15" /> 
    <circle cx="162" cy="113" r="14" /> 
    <circle cx="155" cy="85" r="19" /> 
    <circle cx="170" cy="146" r="15" /> 
    <circle cx="176" cy="160" r="19" /> 
    <rect x="0" y="261" rx="10" ry="10" width="280" height="23" /> 
    <rect x="-1" y="318" rx="10" ry="10" width="280" height="54" /> 
    <rect x="127" y="317" rx="0" ry="0" width="1" height="2" /> 
    <rect x="1" y="401" rx="10" ry="10" width="95" height="30" /> 
    <rect x="130" y="392" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
)

export default Sceleton