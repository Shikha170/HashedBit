import React from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const BookingConfirmation = () => {
  const { state } = useLocation();
  const bookingId = uuidv4();

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
      <p>Mobile: {state.mobile}</p>
    </div>
  );
}

export default BookingConfirmation;
