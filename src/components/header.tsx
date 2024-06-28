import { ModeToggle } from "./ui/mode-toggle";
import Profile from "./profile";

export default function Header() {
  return (
    <header className="pt-6 text-center">
      <div className="mb-2 flex justify-end">
        <div className="ml-auto inline-flex items-center justify-center">
          <ModeToggle />
        </div>
      </div>
      <Profile />
    </header>
  );
}
