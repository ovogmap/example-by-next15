"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Text from "../text/text";
import { AddressBarStyles, AddressBarTextWrapper } from "./address-bar.css";

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className={AddressBarStyles}>
      <div className={AddressBarTextWrapper}>
        <Text>acme.com</Text>
        {pathname ? (
          <>
            <Text>/</Text>
            {pathname
              .split("/")
              .slice(1)
              .map((segment) => {
                return (
                  <React.Fragment key={segment}>
                    <Text key={segment}>{segment}</Text>
                    <Text>/</Text>
                  </React.Fragment>
                );
              })}
          </>
        ) : null}
      </div>
    </div>
  );
}
