import React from 'react'

interface TitledListProps {
  title: string
  elements: React.ReactNode[]
}
export default function TitledList({ title, elements }: TitledListProps) {
  return (
    <div>
      <h2>{title}</h2>
      {elements.map((element, key) => (
        <div key={key}>{element}</div>
      ))}
    </div>
  )
}
