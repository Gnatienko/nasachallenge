import React from "react"

function Radio({ value, top, left, checked, onChange, width }) {
  return (
    <label className="structure" style={{ top, left, width }}>
      <input
        className="visualization"
        type="radio"
        name="test"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="planetName">{value}</div>
    </label>
  )
}
export default Radio
