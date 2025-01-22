import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Home,
  Library,
  Repeat,
} from "lucide-react";
import { Children, ElementType, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";

export function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 lg:hidden">
        <SmallSideBarItem Icon={Home} title="Home" url="/" />
        <SmallSideBarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSideBarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSideBarItem Icon={Library} title="Library" url="/library" />
      </aside>
      <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex">
        <LargeSideBarSection visibleItemCount={1}>
          <LargeSideBarItem isActive Icon={Home} title="Home" url="/" />
          <LargeSideBarItem
            Icon={Clapperboard}
            title="Subscriptions"
            url="/subscriptions"
          />
        </LargeSideBarSection>
        <hr></hr>
      </aside>
    </>
  );
}

type SmallSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

function SmallSideBarItem({ Icon, title, url }: SmallSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ varient: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

type LargeSideBarSectionProps = {
  children: React.ReactNode;
  title?: string;
  visibleItemCount?: number;
};

function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSideBarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();
  const showExpandButton = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;
  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          varient="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3"
        >
          <ButtonIcon className="w-6 h-6" />
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}

type LargeSideBarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSideBarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ varient: "ghost" }),
        isActive
          ? `w-full flex items-center rounded-lg gap-4 p-3 font-bold bg-neutral-100 hover:bg-secondary`
          : `w-full flex items-center rounded-lg gap-4 p-3`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
