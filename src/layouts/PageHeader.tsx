import { Menu, Upload, Bell, User, Mic, Search, ArrowLeft } from "lucide-react";
import logo from "../assets/Logo.png";
import { Button } from "../components/Button";
import { useState } from "react";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div
        className={
          showFullWidthSearch
            ? "gap-4 items-center flex-shrink-0 hidden"
            : "gap-4 items-center flex-shrink-0 flex"
        }
      >
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
      <form
        className={
          showFullWidthSearch
            ? "gap-4 flex-grow justify-center flex"
            : "md:flex gap-4 flex-grow justify-center hidden"
        }
      >
        {showFullWidthSearch && (
          <Button
            type="button"
            onClick={() => setShowFullWidthSearch(false)}
            size="icon"
            className="flex-shrink-0"
            varient="ghost"
          >
            <ArrowLeft />
          </Button>
        )}
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
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={
          showFullWidthSearch
            ? "flex-shrink-0 md:gap-2 hidden"
            : "flex-shrink-0 md:gap-2 flex"
        }
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          varient="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" varient="ghost" className="md:hidden">
          <Mic />
        </Button>
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
