import { Link } from "@tanstack/react-router"
import { footerLinks, socialLinks } from "@/constants"

const Footer = () => {
    return (
        <footer>
            {/* Links */}
            <section className="bg-primary pt-15 pb-15 lg:pb-30">
                <div className="w-contain flex flex-col gap-10 border-b border-white pb-5 lg:flex-row lg:gap-30">
                    <div className="flex flex-2/5 flex-col gap-6">
                        <Link to="/" className="w-fit">
                            <img src="/images/logo.svg" alt="MoniAK logo" />
                        </Link>
                        <p className="text-sm lg:text-lg">
                            Each project we undertake is more than just
                            <br className="inline lg:hidden" /> construction; it's an opportunity to leave a lasting
                            <br className="inline lg:hidden" /> legacy. Through meticulous attention to detail
                        </p>
                    </div>

                    <div className="flex flex-3/5 flex-col gap-15 lg:gap-30">
                        <div className="grid gap-8 lg:grid-cols-3 lg:gap-4">
                            {footerLinks.map((section, index) => (
                                <div key={section.title + index} className="space-y-4 lg:space-y-6">
                                    <h3 className="font-montserrat text-sm font-semibold lg:text-2xl">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-2 lg:space-y-3">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={link.label + linkIndex} className="whitespace-nowrap">
                                                <Link to={link.to} className="text-sm lg:text-xl">
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="font-michroma text-xs lg:text-xl">Connect with us on social media</p>
                            <div className="flex gap-3 lg:gap-8">
                                {socialLinks.map((link, index) => (
                                    <Link key={link.to + index} to={link.to}>
                                        <img src={link.icon} alt="Social Icon" className="size-4 lg:size-auto" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-[#4A1111] py-4">
                <div className="w-contain flex items-center justify-center">
                    <p className="text-center text-sm lg:text-lg">
                        Copyright @ 2024:{" "}
                        <a href="mailto:moniak@project.com" className="text-[#20A91E]">
                            moniak@project.com
                        </a>
                        . All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
