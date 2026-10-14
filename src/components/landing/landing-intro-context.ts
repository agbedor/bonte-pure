"use client";

import { createContext, useContext } from "react";

export const LandingIntroContext = createContext(false);

export function useLandingIntroActive() {
  return useContext(LandingIntroContext);
}
