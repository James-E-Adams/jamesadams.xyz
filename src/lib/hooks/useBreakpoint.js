// @flow
import { useState, useEffect } from "react"
import throttle from "lodash/throttle"

// lazy bird gets the worm
// https://medium.com/better-programming/usebreakpoint-hook-get-media-query-breakpoints-in-react-3f1779b73568

const getDeviceConfig = width => {
  if (width < 640) {
    return "xs"
  } else if (width >= 640 && width < 768) {
    return "sm"
  } else if (width >= 768 && width < 1024) {
    return "md"
  } else if (width >= 1024 && width < 1280) {
    return "lg"
  } else {
    return "xxl"
  }
}

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(null) // important so you don't get a weird flash at the start

  useEffect(() => {
    if (typeof window === "undefined") return
    //initial breakpoint:
    setBreakpoint(getDeviceConfig(window.innerWidth))
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getDeviceConfig(window.innerWidth))
    }, 200)
    window.addEventListener("resize", calcInnerWidth)
    return () => window.removeEventListener("resize", calcInnerWidth)
  }, [])

  return breakpoint
}

export const useIsMobile = () => useBreakpoint() === "xs"
export default useBreakpoint
