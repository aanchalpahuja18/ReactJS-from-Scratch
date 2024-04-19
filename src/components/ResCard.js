import { CDN_URL } from "../utils/constants"

const styleCard = {
    backgroundColor : "#f0f0f0"

}

const ResCard = (props) => {
    const {resData} = props // Destructuring the props (objects)\

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.info
    return (
        <div className="res-card"  style = {styleCard}>
            <img className="res-logo" src=
                {CDN_URL + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}.</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}


export default ResCard;