import Image from "next/image";
import Button from "../ui/Button";
import admikMiniLogo from "/public/images/admik-mini-logo.svg";

export default function Navbar() {
  return (
    <header>
      <div className="flex justify-between px-4 py-3 font-gt_america_mono text-[.8125rem]">
        <nav className="flex items-center gap-1">
          <Image src={admikMiniLogo} alt="admik mini logo" />
          <Button>WORK</Button>
          <Button>ABOUT</Button>
          <Button>CONTACT</Button>
        </nav>
        <nav className="flex items-center gap-1 text-primary_light">
          <Button>WORK</Button>
          <Button>ABOUT</Button>
          <Button>CONTACT</Button>
          <div>
            <span>10:09AM</span>
            <span> — ATLANTA, GA (EST)</span>
          </div>
          <span>2022</span>
        </nav>
      </div>
    </header>
  );
}
