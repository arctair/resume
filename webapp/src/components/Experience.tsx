import React from 'react'

interface ExperienceProps extends React.PropsWithChildren {
  companyName: string
  endDate: string
  jobTitle: string
  startDate: string
}
export default function Experience({
  children,
  companyName,
  endDate,
  jobTitle,
  startDate,
}: ExperienceProps) {
  return (
    <div style={{ maxWidth: '65%' }}>
      <h3>
        {jobTitle} at {companyName}
      </h3>
      <h4>
        {startDate} - {endDate}
      </h4>
      {children}
    </div>
  )
}
