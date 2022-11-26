import React from 'react'
import './Experience.css'

interface ExperienceContainerProps extends React.PropsWithChildren {
  title: string
}
export default function ExperienceContainer({
  children,
  title,
}: ExperienceContainerProps) {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  )
}
