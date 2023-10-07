import React from "react"

const Popup = ({ closePopup }) => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>Congats!</h1>
        <h3>
          You booked a trip Our manager will contact with you to set details =)
        </h3>
        <button className="close" onClick={closePopup}>
          X
        </button>
      </div>
    </div>
  )
}

export default Popup
