import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center tw-justify-between p-24">
      <nav className="tw-flex tw-items-center tw-p-4 tw-justify-between tw-border-y-2">
        <div>
          <h1 className="tw-text-2xl dark:text-violet-40 tw-font-bold">
            Aman Kadam
          </h1>
        </div>
        <div>
          <a
            className="tw-cursor-pointer"
            href="./AMAN_KADAM_RESUME_SDE2.pdf"
            download
          >
            <span className="tw-p-4">Resume</span>
          </a>
          <a href="mailto:aman.kadam.268@gmail.com">
            <span className="tw-p-4">Contact Me</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://api.whatsapp.com/send/?phone=8503812748&text=Hi+Aman%2C%0A&type=phone_number&app_absent=0"
          >
            <span className="tw-p-4">Whatsapp</span>
          </a>
        </div>
      </nav>
      <section>
        <div className="tw-flex tw-h-screen tw-justify-center tw-items-center">
          <div className="tw-flex-col tw-mt-12">
            <p className="tw-text-2xl  dark:text-violet-40">
              Hey, I&apos;m Aman, a
            </p>
            <h1 className="tw-text-4xl tw-mt-4 dark:text-violet-40 ">
              Full Stack Developer
            </h1>
          </div>
          <Image
            src="/aman.jpg"
            alt="Aman Kadam"
            width={400}
            height={50}
            className="tw-rounded-lg tw-ml-20"
          />
        </div>
      </section>
    </main>
  );
}
