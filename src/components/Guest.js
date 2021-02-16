import './Guest.css';

const Guest = (props) => {
    return (
        <div class="guestCont">
            <img src={props.guestImg} class="guestImg" />
            
            <div class="guestInfo">
                <h3 class="guestName">{props.guestName}</h3>
                <h4 class="guestFrom">{props.guestFrom}</h4>
            </div>
        </div>
    )
}

export default Guest;