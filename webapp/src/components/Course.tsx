interface CourseProps {
  title: string
  startDate: string
  endDate: string
  instructor: string
  url: string
  description: string
}
export default function Course({
  title,
  startDate,
  endDate,
  instructor,
  url,
  description,
}: CourseProps) {
  return (
    <div>
      <h3>
        <a href={url} style={{ textDecoration: 'none', color: 'inherit' }}>
          {title} 🔗
        </a>
      </h3>
      <h4>Host: {instructor}</h4>
      <h5>
        {startDate} - {endDate}
      </h5>
      {description}
    </div>
  )
}
