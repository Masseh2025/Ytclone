import { Menu, Upload, Bell, User, Mic, Search } from "lucide-react";
import logo from "../assets/Logo.png";
import { Button } from "../components/Button";

export default function PageHeader() {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className="flex gap-4 items-center flex-shrink-0">
        <Button
          type="button"
          varient="ghost"
          size="icon"
          className="flex-shrink-0"
        >
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} alt="logo" className="h-6" />
        </a>
      </div>
      <form className="flex gap-4 flex-grow justify-center">
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border border-secondary-border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button size="icon">
          <Mic />
        </Button>
      </form>
      <div className="flex flex-shrink-0 md:gap-2">
        <Button size="icon" varient="ghost">
          <Upload />
        </Button>
        <Button size="icon" varient="ghost">
          <Bell />
        </Button>
        <Button size="icon" varient="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
