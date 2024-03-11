import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header>
        <Link
          className="flex flex-col justify-center items-center  text-black text-5xl  md:text-6xl lg:text-6xl font-play mb-96 mt-10"
          to="/"
        >
          Juliet's Custom Nails
          <div className="text-xl font-serif bg-white p-4 rounded-full flex flex-row lg:flex-row gap-5 md:gap-20 lg:gap-20 justify-center items-center cursor-pointer mt-5">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-pink-300"
              >
                {link.name}{" "}
              </Link>
            ))}
          </div>
        </Link>
      </header>
    </>
  );
}
