import { SiLinktree } from "react-icons/si";

export default function Footer() {
  return (
    <div className="flex my-2 items-center justify-center space-x-2">
    <a
      href="https://theredcorporation.com"
      target="_blank"
      title="Visit our parent company's website."
    >
      &copy;&nbsp;The Red Corporation&nbsp;
    </a>
    <a
      href="https://linktr.ee/PhotogramInc"
      target="_blank"
      title="Linktree"
      className="text-2xl"
      alt="Linktree"
    >
      <SiLinktree />
    </a>
  </div>
  )
}
