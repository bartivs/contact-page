import * as React from "react"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

type IconType = "git" | "linkedin" | "instagram"

const IndexPage = () => {
  const [Icon, setIcon] = React.useState<IconType | "">()
  const [Gradient, setGradient] = React.useState(false)

  const leave = () => {
    setIcon("")
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (!!Icon) setGradient(true)
      else setGradient(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [Icon])

  const backGroundClass = (icon: IconType | "", gradient: boolean) => {
    const transition = " "
    if (icon == "git") {
      if (gradient)
        return " bg-gradient-to-r from-[#062a63] via-[#040d21] to-[#3e1b44]"
      return "bg-[#062a63] "
    } else if (icon === "linkedin") {
      if (gradient)
        return "bg-gradient-to-r from-[#0072b1] via-[#00a0dc] to-[#caccce]"
      return "bg-[#0072b1]"
    } else if (icon === "instagram") {
      if (gradient)
        return "bg-gradient-to-r from-[#8134AF] via-[#DD2A7B] to-[#FEDA77]"
      return "bg-[#8134AF]"
    }
    return ""
  }

  const textColor = (icon: string) => {
    if (!!icon) return "text-white"
    return ""
  }

  return (
    <main
      className={
        "transition-all duration-1000 h-screen overflow-hidden  flex justify-center items-center  " +
        backGroundClass(Icon, Gradient)
      }
    >
      <div className="text-center">
        <h1 className={textColor(Icon)}>Welcome!</h1>
        <h4 className={textColor(Icon)}> My name is Barti! </h4>
        <h6 className={textColor(Icon)}>I write code</h6>
        <div className="flex gap-3 justify-center">
          <a
            href="https://github.com/bartivs"
            onMouseEnter={() => setIcon("git")}
            onMouseLeave={leave}
          >
            <AiFillGithub className="icon" />
          </a>
          <a
            href="https://linkedin.com/in/barti-valdez-80a3a5168"
            onMouseEnter={() => setIcon("linkedin")}
            onMouseLeave={leave}
          >
            <AiFillLinkedin className="icon" />
          </a>
          <a
            href="https://www.instagram.com/bartivsa/"
            onMouseEnter={() => setIcon("instagram")}
            onMouseLeave={leave}
          >
            <AiFillInstagram className="icon" />
          </a>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
