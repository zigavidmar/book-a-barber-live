import React, { Component } from 'react'
import '../sass/app.scss';
import SectionImage from '../img/image.jpg';
import BookAppointment from './BookAppointment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'

export class AppointmentBooking extends Component {
    render() {
        return (
            <div className="section-booking">
                <div className="container">

                    <div className="section-title">
                        <h1>Book your barber</h1>
                    </div>

                    <div className="section-subtitle">
                        <h3>Great Hair Doesn’t Happen By Chance. It Happens By Appointment! So, Don't Wait And Book Your Appointment Now!</h3>
                    </div>

                    <div className="section-image">
                        <div className="image-wrapper">
                            <div className="image-inner">
                                <LazyLoadImage 
                                alt="Barber"
                                effect="blur"
                                src={SectionImage}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="section-booking-app">
                        <BookAppointment/>
                    </div>

                </div>
            </div>
        )
    }
}

export default AppointmentBooking
