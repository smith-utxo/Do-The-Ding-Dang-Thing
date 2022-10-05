import React from "react";


function Review (user, review) {
  return (
    <div className='review'>
        <div className="review-box box">
          <div className="reviewBody">
            <p>review body will go here</p><p>{review}</p>
          </div>
          <div className="review-leaver">
            <p>user who left review goes here</p><p>{user}</p>
          </div>
        </div>
      </div>
  )
}
// function Review () {
//   return (
//     <div className='review'>
//         <div className="review-box box">
//           <div className="reviewBody">
//             <p>review body will go here, right here  </p>
//           </div>
//           <div className="review-leaver">
//             <p>user who left review goes here</p>
//           </div>
//         </div>
//       </div>
  // )
// }

export default Review;