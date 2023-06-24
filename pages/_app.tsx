import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-50 my-12 sm:px-20 md:px-32">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <SideBar />
        </div>
        <div className="flex flex-col col-span-12 bg-white shadow-custom-light dark:shadow-custom-dark lg:col-span-9 dark:bg-dark-500 rounded-2xl overflow-hidden">
          <NavBar />
          <AnimatePresence>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}
