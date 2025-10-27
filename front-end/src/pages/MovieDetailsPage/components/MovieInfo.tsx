interface MovieInfoProps {
  title: string
  content: string | React.ReactNode
}

export function MovieInfo({ title, content }: MovieInfoProps) {
  return (
    <section>
      <h3 className="mb-2 font-bold text-base md:text-lg lg:text-xl">
        {title}
      </h3>
      <div className="text-paragraph text-xs md:text-sm lg:text-base text-justify">
        {content}
      </div>
    </section>
  )
}
