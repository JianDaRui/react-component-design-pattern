import React from "react"

export function isImportant(ChildComponent, isFirst, restProps) {
  function HocComponent() {
    return (
      <div style={{
        color: isFirst ? '#535bf2' : '#999999'
      }}>
        <ChildComponent {...restProps}/>
      </div>
    )
  }
  return <HocComponent />
}