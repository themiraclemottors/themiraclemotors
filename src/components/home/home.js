import React from "react"
// import PropTypes from "prop-types"
import styles from "./home.module.scss"
import BookingCard from "./booking-card"
import AppStoreAction from "../common/app-store-action"
import Features from "./features"
import PopularTrips from "./popular-trips"
import Newsletter from "./newsletter"

const Home = props => {
  return (
    <div className={styles.Home}>
      <div className={styles.Home__Fold}>
        <div className={styles.Home__Fold__Overlay} />
        <div className={styles.Home__Caption}>
          <h4>The safest way to travel on road in Nigeria.</h4>
          <p>
            When it comes to safety, no better company places it customers and
            staffs well-being as a priority over profit.
          </p>
        </div>
        <BookingCard />
        <AppStoreAction className={styles.AppStoreAction} />
      </div>
      <Features />
      <PopularTrips />
      <Newsletter />
    </div>
  )
}

Home.propTypes = {}

export default Home
