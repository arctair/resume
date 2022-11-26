import Course from '../components/Course'
import Education from '../components/Education'
import Experience from '../components/Experience'
import ExperienceContainer from '../components/ExperienceContainer'
import Section from '../components/Section'
import TitledList from '../components/TitledList'

const sectionColors = ['#CCE6DE', '#39403E', '#AABFB9', '#E3FFF7']

export default function App() {
  return (
    <div
      style={{
        margin: 'auto',
        width: '8.5in',
        height: '11in',
        backgroundColor: 'white',
        padding: '0 1rem',
        boxSizing: 'border-box',
      }}
    >
      <Section color={sectionColors[0]}>
        <h2>
          Introduction
          <a
            href="https://github.com/arctair"
            style={{
              float: 'right',
              textAlign: 'justify',
              marginTop: '0.125rem',
              marginRight: '1rem',
            }}
          >
            <img
              style={{ width: '1.25rem', display: 'inline-block' }}
              src="Octicons-mark-github.svg"
            />
          </a>
        </h2>
        <p>
          Your push to build processing for pharmacy rebates and client
          payments at Prime Therapeutics caught my attention and I am very
          interested in helping you deliver with focus on collaboration,
          quality and speed. I am a life-long geek with a knack for
          experimentation and experience in JVM programming, collaborative
          practices, and quality-driven practices. I am most effective on a
          team of members that seek to deeply understand and be understood
          by others.
        </p>
        <p>
          This résumé is a very brief summary of my experience and serves
          as a conversation starter for us. I am happy to discuss my
          experience or thoughts on anything not listed here.
        </p>
      </Section>
      <Section color={sectionColors[1]}>
        <ExperienceContainer title="Experience">
          <Experience
            companyName="Best Buy"
            jobTitle="Independent Software Developer"
            startDate="August 2019"
            endDate="October 2021"
          >
            <ul>
              <li>
                Building rock-solid automations to reduce time for
                suppliers to setup, stock and sell products through Best
                Buy
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
                Initiating dark rollout deployment strategy to uncover more
                defects sooner than production deployment
              </li>
              <li>
                Increasing sales by enabling data quality teams to rapidly
                improve customer-facing product information
              </li>
              <li>
                Maintaining team morale and productivity through the
                pandemic by adapting collaborative practices while
                distributed
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
                Mentoring bootcamp graduates and team members in
                programming basics, debugging, and user story mapping
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
                Trialing pair programming for the very first time. (It was
                a disaster with many learnings! 😀)
              </li>
            </ul>
          </Experience>
        </ExperienceContainer>
      </Section>
      <Section color={sectionColors[2]}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
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
                'Real Customer Involvement',
              ]}
            />
          </div>
          <div style={{ flex: 1 }}>
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
          </div>
          <div style={{ flex: 1.2 }}>
            <h2>Courses</h2>
            <Course
              title="JVM Mentoring"
              startDate="November 2021"
              endDate="January 2022"
              instructor="Me"
              url="https://github.com/Astroversity/java-starter"
              description="Mentored a new programmer in JVM, pair programming, and TDD to prepare him for an entry-level software role"
            />
            <Course
              title="Leading Technical Change"
              startDate="July 6, 2022"
              endDate="July 21, 2022"
              instructor="Michael Hill, Coach"
              url="https://www.geepawhill.org/courses/leading-technical-change"
              description="Workshopped non-coercive coaching strategies for helping developers, stakeholders, managers and executives"
            />
          </div>
        </div>
      </Section>
      <Section color={sectionColors[3]}>
        <h2>Education</h2>
        <Education
          school="North Dakota State University"
          countryRegion="United States of America"
          stateProvince="Fargo, North Dakota"
          yearsAttended="2014-2017"
          fieldOfStudy="B.S. Computer Science"
          levelOfEducation="Undergraduate"
        />
      </Section>
    </div>
  )
}
