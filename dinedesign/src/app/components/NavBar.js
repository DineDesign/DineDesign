'use client';
import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import GoogleMapOverlay from "./Maps";
import Link from 'next/link';

const hours = {
  "time": [
    {"monday":"10:00-22:00"},
    {"tuesday":"10:00-15:00"},
    {"wednesday":"10:00-22:00"},
    {"thursday":"10:00-22:00"},
    {"friday":"10:00-24:00"},
    {"saturday":"10:00-22:00"},
    {"sunday":"10:00-22:00"}
  ],
  "closed": [
    {"id1":"2024-01-1"},
    {"id2":"2024-12-25"},
    {"id3":"2024-12-31"}
  ]
};

const getDayName = (date) => {
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  return days[date.getDay()];
};

const isHoliday = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;
  
  const isHoliday = hours.closed.some(holiday => {
    const holidayDate = Object.values(holiday)[0];
    return holidayDate === dateString;
  });
  return isHoliday;
};

const convertTo12Hour = (time) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

const getTodayHours = () => {
  const now = new Date();
  const day = getDayName(now);
  const hoursToday = hours.time.find(h => h[day])[day].split('-');
  const openTime = convertTo12Hour(hoursToday[0]);
  const closeTime = convertTo12Hour(hoursToday[1]);
  return `${openTime} - ${closeTime}`;
};

const checkTime = () => {
  const now = new Date();
  console.log(now)
  if (isHoliday(now)) {
    return { status: "Closed", color: "red" };
  }

  const day = getDayName(now);
  const hoursToday = hours.time.find(h => h[day])[day].split('-');
  const openTime = new Date(now);
  const closeTime = new Date(now);

  const [openHour, openMinute] = hoursToday[0].split(':');
  const [closeHour, closeMinute] = hoursToday[1].split(':');

  openTime.setHours(openHour, openMinute, 0, 0);
  closeTime.setHours(closeHour, closeMinute, 0, 0);

  const oneHour = 60 * 60 * 1000;

  if (now >= openTime && now < closeTime) {
    if (closeTime - now < oneHour) {
      return { status: "Closing soon", color: "DarkGoldenRod" };
    }
    return { status: "Open", color: "green" };
  } else {
    if (now < openTime && openTime - now < oneHour) {
      return { status: "Opening soon", color: "DarkGoldenRod" };
    }
    return { status: "Closed", color: "red" };
  }
};

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [status, setStatus] = useState({ status: "", color: "" });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [todayHours, setTodayHours] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    const handleScroll = () => {
      if (window.innerWidth >= 960) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    const updateStatus = () => {
      setStatus(checkTime());
      setTodayHours(getTodayHours());
    };

    updateStatus();
    const intervalId = setInterval(updateStatus, 60000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalId);
    };
  }, [lastScrollY]);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {["Offers", "Menu", "Contact", "Reviews"].map((item) => (
        <li key={item} className="p-1 font-normal text-sm text-blue-gray-500">
          <ScrollLink to={item.toLowerCase()} smooth={true} duration={500} className="flex items-center cursor-pointer">
            {item}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`sticky top-0 z-10 h-max w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-white shadow transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex mr-4 cursor-pointer py-1.5 font-medium gap-4 items-baseline">

            <Link className="hover:text-gray-600 text-xl align-baseline" href="/">Dine Design</Link>

            <div style={{ color: status.color }} className="align-baseline">
                {status.status}
            </div>

            <div className="align-baseline">
                <span className="text-xs hidden sm:block align-baseline">
                    Today's Hours: {todayHours}
                </span>
            </div>

            <div className="align-baseline">
                <GoogleMapOverlay />
            </div>

        </div>
        
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <button className="hidden lg:inline-block px-4 py-2 text-sm font-medium text-white bg-emerald-800 rounded-lg">
              <span className="button" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075">See MENU & Order</span>
            </button>
            <button className="hidden lg:inline-block px-4 py-2 text-sm font-medium text-white bg-yellow-600 rounded-lg">
              <span className="button" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075" data-glf-reservation="true">Table Reservation</span>
            </button>
          </div>
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {openNav && (
        <div className="lg:hidden">
          {navList}
          <div className="flex flex-col gap-2 mt-4">
            <button className="w-full px-4 py-2 text-sm font-medium text-blue-gray-500 bg-transparent border border-blue-gray-200 rounded-lg">
              <span className="glf-button" data-glf-cuid="94badddd-5f1d-46f5-900e-fe497c12f5ff" data-glf-ruid="c07978a7-6d4a-48d4-8b9b-a15ff281c075">See MENU & Order</span>
            </button>
            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg">
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}