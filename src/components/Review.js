import Guest from './Guest'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Review.css';

const Review = (props) => {

    const renderIcon = () => <FontAwesomeIcon icon={faStar}/>;
    const renderIcons = num => [...Array(num)].map(renderIcon);

    return (
        <div>
            <div class = "stars">
                <h3>{renderIcons(props.star)}</h3>
            </div>
            <div class="review">
                <p>{props.review}</p>
            </div>
        </div>
    )
}

export default Review;