"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
// @ts-ignore
import React from "react";
import { Anchor } from "../anchor";
import { Spinner } from "../spinner";

export function NextUser() {
  const { user, isLoading } = useUser();
  return (
    <div>
      {isLoading ? (
        <Spinner fast={isLoading} size="small" />
      ) : (
        <div>
          {user ? (
            <div className="flex flex-col divide-x sm:flex-row">
              <div className="flex flex-row space-x-4 pr-0 sm:pr-2">
                <p className="flex items-center">{user.name ?? user.email}</p>

                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={user.picture ?? ""}
                  alt="User profile picture"
                  className="hidden h-14 w-14 items-center rounded-full sm:flex"
                />
              </div>

              <Anchor
                className="flex items-center pl-0 sm:pl-2"
                href="/api/auth/logout"
              >
                Logout
              </Anchor>
            </div>
          ) : (
            <Anchor className="inline-block" href="/api/auth/login">
              Login
            </Anchor>
          )}
        </div>
      )}
    </div>
  );
}
