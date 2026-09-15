import { Link, useLocation } from "@tanstack/react-router"
import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/constants"
import { cn } from "@/lib/utils"

const Navbar = () => {
    const { pathname } = useLocation()
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    const [prevPath, setPrevPath] = useState(pathname)

    const closeMenu = useCallback(() => {
        setIsHamburgerOpen(false)
    }, [])

    if (prevPath !== pathname) {
        closeMenu()
        setPrevPath(pathname)
    }

    return (
        <nav className="relative bg-[#D9D9D9] lg:bg-inherit">
            <div className="w-contain flex flex-col py-2 lg:py-4">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <picture><source media="(min-width: 64rem)" srcSet="/images/White MoniAK 09-10-2026.png" /><img src="/images/Black MoniAK 09-10-2026.png" alt="MoniAK home" width="187" height="136" className="h-[136px] w-[187px] object-contain" /></picture>
                    </Link>

                    <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-10 lg:flex">
                        {navLinks.map((link, index) => (
                            <li key={link.label + index} className="shrink-0">
                                <Link
                                    to={link.to}
                                    className={cn("font-michroma transition-colors hover:text-[#20A91E]")}
                                    activeProps={{ className: "text-[#20A91E]" }}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Button
                        aria-label={isHamburgerOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isHamburgerOpen ? "true" : "false"}
                        variant="ghost"
                        className="inline-flex size-10 lg:hidden"
                        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
                    >
                        <div className="flex flex-col items-center gap-1.5 [--bar-width:calc(var(--spacing)*6)] *:transition-all *:duration-300">
                            {/* Top bar */}
                            <div
                                className={cn("h-0.5 w-(--bar-width) bg-[#20A91E]", {
                                    "translate-y-2 rotate-45": isHamburgerOpen,
                                })}
                            />
                            {/* Middle bar */}
                            <div
                                className={cn("h-0.5 w-(--bar-width) bg-[#20A91E]", {
                                    "opacity-0": isHamburgerOpen,
                                })}
                            />
                            {/* Bottom bar */}
                            <div
                                className={cn("h-0.5 w-(--bar-width) bg-[#20A91E]", {
                                    "-translate-y-2 -rotate-45": isHamburgerOpen,
                                })}
                            />
                        </div>
                    </Button>
                </div>

                {/* Mobile Nav */}
                <div
                    className={cn(
                        "absolute inset-x-0 top-full z-10 bg-[#D9D9D9] transition-all duration-300 lg:hidden",
                        isHamburgerOpen
                            ? "max-h-dvh py-6 [clip-path:inset(0_0_0_0)]"
                            : "max-h-0 py-0 [clip-path:inset(0_0_100%_0)]",
                    )}
                >
                    <ul className="flex flex-col items-center gap-4">
                        {navLinks.map((link, index) => (
                            <li key={link.label + index} className="group relative">
                                <Link
                                    to={link.to}
                                    className={cn(
                                        "font-michroma text-sm text-background transition-all duration-300 hover:text-[#20A91E]",
                                        {
                                            "text-[#20A91E]": pathname === link.to,
                                        },
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
