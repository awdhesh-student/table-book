import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const AllBookings = () => {
  const [allBookings, setBookings] = useState([])

  const getAllBookings = async () => {
    try {
      const res = await axios.get('http://localhost:8001/api/admin/getallbookings', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      if (res.data.success) {
        setBookings(res.data.data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllBookings()
  }, [])
  return (
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope='col'>Booking ID</th>
            <th scope='col'>Hotel Name</th>
            <th scope='col'>Customer Phone</th>
            <th scope='col'>No. of Guest</th>
            <th scope='col'>Table Type</th>
            <th scope='col'>Date and Time</th>
            <th scope='col'>Booking Status</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {allBookings && allBookings.map((booking) => {
            return (
              <tr key={booking._id}>
                <th>{booking._id}</th>
                <td>{booking.hotelName}</td>
                <td>{booking.customerPhone}</td>
                <td>{booking.noOfGuest}</td>
                <td>{booking.tabletype}</td>
                <td>{booking.dateTime}</td>
                <td>{booking.status}</td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
      <p>we have {allBookings.length} bookings in the App.</p>
    </div>
  )
}

export default AllBookings
