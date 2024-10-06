import React, {useState, useContext} from "react";
import "./booking.css";
import {Form, FormGroup, Label, Input} from "reactstrap";
import {useNavigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({tour, avgRating}) => {

    const {price, reviews, title} = tour;

    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName: title,
        fullName: '',   
        phone: '9595487598',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = (e) => {
        setBooking(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee);

    //send data to the server
    const handleClick = async (e) => {
        e.preventDefault();

        console.log(booking);
        try {
            
            if(!user || user==undefined || user==null){
                return alert('Please Sign in')
            }
            const res = await fetch(`${BASE_URL}/booking`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                    credentials:'include',
                    body:JSON.stringify(booking)
            })
            const result = await res.json()

            if(!res.ok){
                return alert(result.message)
            }
            navigate("/thank-you")
        } catch (err) {
            alert(err.message);
        }

       
    }

    return(
    <>
        <div className="booking">
            <div className="booking__top d-flex align-items-center justify-content-center">
                <h3>${price} <span>/Per Person</span></h3>
                <span className='tour__rating d-flex align-items-center gap-1'>
                    <i class="ri-star-s-fill" ></i> {avgRating === 0 ? null : avgRating}
                    ({reviews?.length})
                </span>
            </div>


            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Full Name" id="Full Name" required onChange={handleChange}/>
                    </FormGroup>

                    <FormGroup>
                        <input type="number" placeholder="Mobile" id="Phone" required onChange={handleChange}/>
                    </FormGroup>

                    <FormGroup className="d-flex align-items-center">
                        <input type="date" placeholder="" id="bookAt" required onChange={handleChange}/>
                        <input type="number" placeholder="Guest" id="guestSize" required onChange={handleChange}/>
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__buttton">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">${price} <i class="ri-close-line"></i> 1 Person</h5>
                        <span>${price}</span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0">
                        <h5>Service Charger</h5>
                        <span>${serviceFee}</span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0 total">
                        <h5>Total</h5>
                        <span>Rs. {price} + 100</span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>
                    Book Now
                </Button>
            </div>
        </div>
    </>)
};

export default Booking;