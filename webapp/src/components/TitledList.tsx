import React, { CSSProperties } from 'react'

interface TitledListProps {
  title: string
  elements: React.ReactNode[]
  style?: CSSProperties
}
export default function TitledList({
  title,
  elements,
  style,
}: TitledListProps) {
  return (
    <div style={style}>
      <h2>{title}</h2>
      {elements.map((element, key) => (
        <div key={key}>{element}</div>
      ))}
    </div>
  )
}
