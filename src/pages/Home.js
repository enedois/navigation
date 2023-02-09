import React from 'react'

const Home = () => {
    var img1 = require('../images/car.jpg');
  return (
    <>
    <div className="text">
        <h2>Home Text</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quas molestias vero et explicabo at, architecto magnam quis mollitia nulla reiciendis expedita quasi aliquid sunt sequi iure omnis eum eligendi?
        </div>
        <div className="images">
          <img src={img1} alt="" height="200" />
        </div>
    </>
  )
}

export default Home