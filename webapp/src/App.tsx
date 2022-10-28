export default function App() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '8.5in',
        height: '11in',
        backgroundImage: 'url("background.jpg")',
        padding: '0.5rem',
        boxSizing: 'border-box',
      }}
    >
      <div>
        <h1>Tyler Johnson</h1>
        <a
          style={{ textDecoration: 'none', color: 'inherit' }}
          href="mailto:tyler@cruftbusters.com"
        >
          tyler@cruftbusters.com
        </a>
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          congue nunc erat, vitae mollis magna egestas et. Etiam vel
          pulvinar ligula, ac eleifend elit. Fusce luctus id ipsum ac
          pharetra. Vestibulum pretium rhoncus viverra. Cras placerat
          vestibulum mauris at laoreet. Vestibulum dictum quam mauris, a
          mollis nisl euismod vel. Aenean aliquet dapibus enim eget porta.
        </p>
      </div>
      <div>
        <h2>Experience</h2>
        <Experience
          companyName="companyName"
          jobTitle="jobTitle"
          startDate="startDate"
          endDate="endDate"
          description="description"
        />
      </div>
      <div>
        <h2>Education</h2>
        <Education
          school="school"
          countryRegion="countryRegion"
          stateProvince="stateProvince"
          yearsAttended="yearsAttended"
          fieldOfStudy="fieldOfStudy"
          levelOfEducation="levelOfEducation"
        />
      </div>
      <div>
        <h2>Areas of Expertise, Skills, and Relevant Courses</h2>
      </div>
    </div>
  )
}

interface ExperienceProps {
  companyName: string
  jobTitle: string
  startDate: string
  endDate: string
  description: string
}
function Experience({
  companyName,
  jobTitle,
  startDate,
  endDate,
  description,
}: ExperienceProps) {
  return (
    <div>
      {companyName} {jobTitle} {startDate} {endDate} {description}
    </div>
  )
}

interface EducationProps {
  school: string
  countryRegion: string
  stateProvince: string
  yearsAttended: string
  fieldOfStudy: string
  levelOfEducation: string
}
function Education({
  school,
  countryRegion,
  stateProvince,
  yearsAttended,
  fieldOfStudy,
  levelOfEducation,
}: EducationProps) {
  return (
    <div>
      {school} {countryRegion} {stateProvince} {yearsAttended}{' '}
      {fieldOfStudy} {levelOfEducation}
    </div>
  )
}
