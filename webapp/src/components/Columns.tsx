import React from 'react'

export default function Columns({ children }: React.PropsWithChildren) {
  const childrenAsArray = React.Children.toArray(children)
  return (
    <div style={{ columnCount: 3 }}>
      {childrenAsArray.map((child) => (
        <div style={{ breakInside: 'avoid' }}>{child}</div>
      ))}
    </div>
  )
}
