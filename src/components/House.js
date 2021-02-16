import Guest from './Guest';
import Review from './Review';
import './House.css';

const House = (props) => {
    return (
        <div class="container">
            <img src={props.houseimg} alt={props.guestName} class="houseImg" />
            <Review star = {props.star} review={props.review}/>
            <Guest guestImg={props.guestImg} guestName={props.guestName} guestFrom={props.guestFrom}/>
        </div>
    )
}

export default House;