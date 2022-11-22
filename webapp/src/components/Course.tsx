interface CourseProps {
  title: string
  completionDate: string
  instructor: string
  url: string
  description: string
}
export default function Course({
  title,
  completionDate,
  instructor,
  url,
  description,
}: CourseProps) {
  return (
    <div>
      {title} {completionDate} {instructor} {url} {description}
    </div>
  )
}
