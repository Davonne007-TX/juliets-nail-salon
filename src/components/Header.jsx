import { Link } from "react-router-dom";

export default function Header() {
  const links = [
    { name: "About" },
    { name: "Services" },
    { name: "Gallery" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <header>
        <h1 className="text-black text-5xl md:text-6xl lg:text-6xl font-great mb-96 text-center mt-10">
          Nails By Juliet
          <div className="text-3xl bg-white p-4 rounded-full flex flex-row lg:flex-row gap-5 md:gap-20 lg:gap-20 justify-center items-center cursor-pointer mt-5">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-bold hover:text-pink-300"
              >
                {link.name}{" "}
              </Link>
            ))}
          </div>
        </h1>
      </header>
    </>
  );
}
