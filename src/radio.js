import React from "react"

function Radio({ value, top, left }) {
  return (
    <label className="structure" style={{ top, left }}>
      <input className="visualization" type="radio" name="test" value={value} />
      <div>{value}</div>
    </label>
  )
}
export default Radio
