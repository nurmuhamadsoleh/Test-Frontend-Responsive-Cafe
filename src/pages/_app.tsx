import "react-toastify/dist/ReactToastify.css";
import "@uppy/core/dist/style.css";
import "@uppy/drag-drop/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/progress-bar/dist/style.css";
import "@uppy/file-input/dist/style.css";
import "@uppy/image-editor/dist/style.css";
import "styles/globals.css";

import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [statusPage, setStatusPage] = useState(true);

  useEffect(() => {
    function changeStatus() {
      setStatusPage(navigator.onLine);
    }
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleStop = () => {
      setIsLoading(false);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    window.addEventListener("online", changeStatus);
    window.addEventListener("offline", changeStatus);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleStop);

    return () => {
      window.addEventListener("online", changeStatus);
      window.addEventListener("offline", changeStatus);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <>
      <Head>
        <title>TechnoPartner</title>
      </Head>
      <div className="light m-0 p-0 ">
        <Component />
      </div>
    </>
  );
}
