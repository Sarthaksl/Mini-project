import React, {useState} from "react";
import "./booking.css";
import {Form, FormGroup, Label, Input} from "reactstrap";
import {useNavigate} from "react-router-dom"

const Booking = ({tour, avgRating}) => {

    const {price, reviews} = tour;

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullName: '',   
        phone: '9595487598',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = (e) => {
        setCredentials(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    const serviceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee);

    //send data to the server
    const handleClick = (e) => {
        e.preventDefault();

        navigate("/thank-you")
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