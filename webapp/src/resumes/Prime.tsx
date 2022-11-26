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
      <h2>Introduction</h2>
      <p>
        Your push to build processing for pharmacy rebates and client
        payments caught my attention and I am very interested in helping
        you deliver with focus on collaboration, quality and speed. I am a
        life-long geek with a knack for experimentation and experience in
        JVM programming, collaborative practices, and quality-driven
        practices. I am most effective on a team of members that seek to
        deeply understand and by understood by others.
      </p>
      <p>
        This résumé is a very brief summary of my education and experience
        and serves as a conversation starter for us. I am happy to discuss
        my experience or thoughts on anything not listed here.
      </p>
      <h2>Experience</h2>
      <Experience
        companyName="Best Buy"
        jobTitle="Software Consultant"
        startDate="August 2019"
        endDate="October 2021"
      >
        <ul>
          <li>
            Building rock-solid automations to reduce time for suppliers to
            setup, stock and sell products through Best Buy
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
          <li>
            Mentoring bootcamp graduates and team members in programming
            basics, debugging, and user story mapping
          </li>
          <li>
            Reducing operating costs and time-to-market by rolling our
            microservice fleet onto a new internal infrastructure
            automation tool
          </li>
          <li>
            Reducing expensive supply chain misallocations by adding
            transparency through insightful visualizations
          </li>
          <li>
            Trialing pair programming for the very first time. (It was a
            disaster with many learnings! 😀)
          </li>
        </ul>
      </Experience>
      <h2>Education</h2>
      <Education
        school="North Dakota State University"
        countryRegion="United States of America"
        stateProvince="Fargo, North Dakota"
        yearsAttended="2014-2017"
        fieldOfStudy="B.S. Computer Science"
        levelOfEducation="Undergraduate"
      />
      <div style={{ display: 'flex' }}>
        <TitledList
          title="Practices and Skills"
          elements={[
            'Public Speaking',
            'Pair Programming',
            'Test Driven Development',
            'Incremental Design',
            'Continuous Integration and Deployment',
            'Automated Acceptance Testing',
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
            'Typescript/Jest/React/Node',
            'Git',
            'IntelliJ/Vim',
            'Linux/MacOS/Windows',
            'AWS (S3, EC2, Route53, Cloudfront, awscli+sdk)',
            'OpenShift/Kubernetes',
            'Jenkins',
            'IP/TCP/TLS/HTTP/DNS',
          ]}
        />
        <div>
          <h2>Courses</h2>
          <Course
            title="Mentoring TDD Java and Kotlin"
            startDate="November 2021"
            endDate="January 2022"
            instructor="Me"
            url="https://github.com/Astroversity/java-starter"
            description="description"
          />
          <Course
            title="Leading Technical Change"
            startDate="July 6, 2022"
            endDate="July 21, 2022"
            instructor="Michael Hill, Coach"
            url="https://www.geepawhill.org/courses/leading-technical-change"
            description="description"
          />
        </div>
      </div>
    </div>
  )
}
