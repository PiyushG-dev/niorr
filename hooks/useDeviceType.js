"use client";
import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    if (/android/i.test(userAgent)) {
      setDeviceType("android");
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setDeviceType("ios");
    } else {
      setDeviceType("other");
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
