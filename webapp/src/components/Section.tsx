import React from 'react'

import './Section.css'

interface SectionsProps extends React.PropsWithChildren {
  color: string
}
export default function Section({ children, color }: SectionsProps) {
  return (
    <div
      className="section"
      style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}
    >
      <div
        style={{
          width: '0.5rem',
          marginRight: '0.75rem',
          backgroundColor: color,
        }}
      />
      <div className="container">{children}</div>
    </div>
  )
}
