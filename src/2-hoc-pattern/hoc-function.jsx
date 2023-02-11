import React from "react"

export function isOdd(ChildComponent, isOdd, restProps) {
  function HocComponent() {
    return (
      <div style={{
        color: isOdd ? '#535bf2' : '#999999'
      }}>
        <ChildComponent {...restProps}/>
      </div>
    )
  }
  return <HocComponent />
}