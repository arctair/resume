import Columns from '../components/Columns'
import Course from '../components/Course'
import Education from '../components/Education'
import Experience from '../components/Experience'
import TitledList from '../components/TitledList'

export default function App() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '8.5in',
        height: '11in',
        // backgroundImage: 'url("background.jpg")',
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
          companyName="Best Buy"
          jobTitle="Software Consultant"
          startDate="August 2019"
          endDate="October 2021"
        >
          <ul>
            <li>
              Building rock-solid automations to reduce time for suppliers
              to setup, stock and sell products through Best Buy
            </li>
            <li>
              Focused deliveries with few defects via rapid prototyping,
              test-driven development, pair programming, continuous
              integration, and continuous deployment thru production
            </li>
            <li>
              Eliminating reliance on expensive internal and third party
              systems by giving direct control over product data to
              manufacturers and suppliers
            </li>
            <li>
              Increasing sales by enabling data quality teams to rapidly
              improve customer-facing product information
            </li>
            <li>
              Maintaining team morale and productivity through the pandemic
              by enacting new collaborative practices while distributed
            </li>
            <li>
              Hiring and mentoring several new and seasoned engineers in
              Extreme Programming values, principles, and practices
            </li>
          </ul>
        </Experience>
        <Experience
          companyName="Target"
          jobTitle="Software Engineer"
          startDate="November 2018"
          endDate="August 2019"
        >
          <ul>
            <li>TODO: Allocation visualizations</li>
            <li>TODO: Mentoring</li>
            <li>TODO: Trialed pair programming</li>
          </ul>
        </Experience>
      </div>
      <div>
        <h2>Education</h2>
        <Education
          school="North Dakota State University"
          countryRegion="United States of America"
          stateProvince="Fargo, North Dakota"
          yearsAttended="2014-2017"
          fieldOfStudy="B.S. Computer Science"
          levelOfEducation="Undergraduate"
        />
      </div>
      <div>
        <h2>Areas of Expertise, Skills, and Relevant Courses</h2>
        <Columns>
          <TitledList
            title="Practices and Skills"
            elements={[
              'Public Speaking',
              'Pair Programming',
              'Test Driven Development',
              'Incremental Design',
              'Continuous Integration and Deployment',
              'Collective Ownership',
              'Retrospectives',
              'Blameless Culture',
              'Root-cause Analysis',
            ]}
          />
          <TitledList
            title="Technologies"
            elements={[
              'Java/JUnit',
              'Groovy/Spock',
              'Kotlin/Kotest',
              'Typescript/Jest',
              'Python/Pytest',
              'React',
              'Node',
              'Bukkit/Spigot/Paper',
              'Bungee/Velocity',
              'Linux/Windows/MacOS',
              'AWS (S3, EC2, Route53, Cloudfront, awscli+sdk)',
              'IP/TCP/TLS/HTTP',
              'DNS',
            ]}
          />
          <div>
            <h3>Courses</h3>
            <Course
              title="Leading Technical Change"
              startDate="June 2022"
              endDate="July 21, 2022"
              instructor="Michael Hill, Coach"
              url="https://www.geepawhill.org/courses/leading-technical-change"
              description="description"
            />
          </div>
        </Columns>
      </div>
    </div>
  )
}
