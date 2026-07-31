import { TanStackDevtools } from "@tanstack/react-devtools"
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import appCss from "../styles.css?url"
import SmoothScroll from "@/components/features/smooth-scroll"
import Footer from "@/components/layout/footer"
import Navbar from "@/components/layout/navbar"

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "MoniAK | Construction & Engineering Excellence" },
            {
                name: "description",
                content:
                    "MoniAK is a full-service construction and engineering company specializing in civil infrastructure, building construction, and project management in Nigeria.",
            },
            { name: "theme-color", content: "#114B21" },

            // Open Graph defaults
            { property: "og:site_name", content: "MoniAK" },
            { property: "og:type", content: "website" },
            { property: "og:locale", content: "en_NG" },

            // Twitter defaults
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
            { rel: "manifest", href: "/manifest.json" },
            { rel: "apple-touch-icon", href: "/favicon.svg" },
        ],
    }),

    shellComponent: RootDocument,
    notFoundComponent: () => (
        <main className="w-contain flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold lg:text-6xl">404</h1>
            <p className="text-lg lg:text-xl">Page not found</p>
        </main>
    ),
})

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <HeadContent />
            </head>
            <body>
                <Navbar />
                {children}
                <Footer />
                <SmoothScroll />
                <TanStackDevtools
                    config={{
                        position: "bottom-right",
                    }}
                    plugins={[
                        {
                            name: "Tanstack Router",
                            render: <TanStackRouterDevtoolsPanel />,
                        },
                    ]}
                />
                <Scripts />
            </body>
        </html>
    )
}
