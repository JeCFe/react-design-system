"use client";

// @ts-ignore
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Spinner } from "../spinner";
import { Anchor } from "../anchor";

export function NextUser() {
  const { user, isLoading } = useUser();
  return (
    <div>
      {isLoading ? (
        <Spinner fast={isLoading} size="small" />
      ) : (
        <div>
          {user ? (
            <div className="flex flex-col sm:flex-row divide-x">
              <div className="flex flex-row space-x-4 pr-0 sm:pr-2">
                <p className="flex items-center">{user.name ?? user.email}</p>

                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={user.picture ?? ""}
                  alt="User profile picture"
                  className="w-14 h-14 rounded-full items-center hidden sm:flex"
                />
              </div>

              <Anchor
                className="pl-0 sm:pl-2 flex items-center"
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
