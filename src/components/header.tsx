import { ModeToggle } from "./ui/mode-toggle";
import Profile from "./profile";
import { Profile as IProfile } from "../app/types/data";

type ProfileDataProps = {
  profile: IProfile;
};

export default function Header({ profile }: ProfileDataProps) {
  return (
    <header className="pt-6 text-center">
      <div className="mb-2 flex justify-end">
        <div className="ml-auto inline-flex items-center justify-center">
          <ModeToggle />
        </div>
      </div>
      <Profile profile={profile} />
    </header>
  );
}
