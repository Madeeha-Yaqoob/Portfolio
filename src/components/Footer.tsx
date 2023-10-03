import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full p-10 border-t-2 border-solid border-black dark:text-white dark:border-white font-medium text-lg">
      <div className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Right Reverse</span>
        <div>
          Build Width{" "}
          <span className=" text-pink-700 dark:text-pink-300 text-2xl px-1"> &#9825;</span>by
          <Link href={"/"} className="underline underline-offset-2">
            Madeeha Mehr
          </Link>
        </div>
        <Link href={"/"} target="_blank" className="underline">
          Say Hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
