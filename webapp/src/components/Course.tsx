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
      {title} {startDate} {endDate} {instructor} {url} {description}
    </div>
  )
}
