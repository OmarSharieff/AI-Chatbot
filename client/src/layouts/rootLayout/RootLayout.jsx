import React from "react";
import "./rootLayout.css";
import { Link, Outlet } from "react-router-dom";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/clerk-react"

function RootLayout() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  } 
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/">
            <img src="/logo.png" alt="" />
            <span>LAMA AI</span>
          </Link>
          <div className="user">
        <SignedIn>
          <UserButton />
        </SignedIn>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </ClerkProvider>
  );
}

export default RootLayout;
