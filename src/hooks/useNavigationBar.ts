import { useEffect, useState } from "react";

const useNavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past the hero section (assuming hero is ~100vh)
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.3 // 80% of viewport height

      setIsScrolled(scrollPosition > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuNav = [
    {
      id: 1,
      name: "Home",
      dir: "/"
    },
    {
      id: 2,
      name: "Class List",
      dir: "/class-list"
    },
    {
      id: 2,
      name: "Tournament Events",
      dir: "/class-list?isTournament=true"
    },
  ]

  return {
    menuNav,
    isScrolled,
  }
};

export default useNavigationBar;