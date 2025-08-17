import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" border-t border-white/[0.5] mt-12 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-4 md:space-y-0">
        {/* Left side text */}
        <p className="text-violet-200 text-sm">
          © {new Date().getFullYear()} Harsh Dixit. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/HarshDikshit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-white transition-transform transform hover:scale-125"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/harshdixit1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-300 hover:text-white transition-transform transform hover:scale-125"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}
