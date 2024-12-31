import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Headers = () => {
  const [showsigin, setShowsigin] = useState(false);
  const [search, Setsearch] = useSearchParams();
  const {user}=useUser();
  useEffect(() => {
    if (search.get("signin")) {
      setShowsigin(true);
    }
  }, [search]);
  const handleover = (e) => {
    if (e.target === e.currentTarget) {
      setShowsigin(false);
      Setsearch({});
    }
  };
  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <Link>
          <img src="/l.png" className="h-20 font-extrabold " alt="" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowsigin(true)}>
              Login
            </Button>
            {/* <SignInButton/> */}
          </SignedOut>

          <SignedIn>
           {user?.unsafeMetadata?.role==='recruiter'&&( <Link to="/post-job">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2" />
                Post a JOb
              </Button>
            </Link>)}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-12 h-12",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/save-job"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {showsigin && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleover}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Headers;
