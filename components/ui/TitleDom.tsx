function TitleDom({ name, line1, line2, theme = "w" }: { name: string, line1: string, line2: string, theme?: "w" | "b" }) {
  const style = {
    "w": "text-black",
    "b": "text-white"
  }
  return (
    <div className="flex flex-col items-center gap-4 text-center text-balance">
      <h1 className="text-blue-400 z-10">
        {name}
      </h1>
      <p className={`text-4xl font-medium  max-w-lg ${style[theme]} z-10`}>
        {line1}
      </p>
      <p className="text-base  text-zinc-400 max-w-lg   z-10">
        {line2}
      </p>
    </div>
  )
}

export default TitleDom
