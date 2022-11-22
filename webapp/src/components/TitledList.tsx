import React from 'react'

interface TitledListProps {
  title: string
  elements: React.ReactNode[]
}
export default function TitledList({ title, elements }: TitledListProps) {
  return (
    <>
      <h3>{title}</h3>
      {elements.map((element, key) => (
        <div key={key}>{element}</div>
      ))}
    </>
  )
}
