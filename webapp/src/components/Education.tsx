interface EducationProps {
  school: string
  countryRegion: string
  stateProvince: string
  yearsAttended: string
  fieldOfStudy: string
  levelOfEducation: string
}
export default function Education({
  school,
  countryRegion,
  stateProvince,
  yearsAttended,
  fieldOfStudy,
  levelOfEducation,
}: EducationProps) {
  return (
    <div>
      <h3>
        {fieldOfStudy}, {school}
      </h3>
      <h4>
        {stateProvince}, {yearsAttended}
      </h4>
    </div>
  )
}
