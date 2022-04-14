import * as React from "react"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"

type IconType = "git" | "linkedin"

const IndexPage = () => {
  const [Icon, setIcon] = React.useState<IconType | "">()

  const leave = () => {
    setIcon("")
  }

  const backGroundClass = (icon: IconType | "") => {
    if (icon == "git") {
      return "bg-black"
    } else if (icon === "linkedin") {
      return "bg-[#0072b1]"
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
        "h-screen overflow-hidden  flex justify-center items-center " +
        backGroundClass(Icon)
      }
    >
      <div className="text-center">
        <h1 className={textColor(Icon)}>Welcome!</h1>
        <h4 className={textColor(Icon)}> My name is Barti! </h4>
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
        </div>
      </div>
    </main>
  )
}

export default IndexPage
