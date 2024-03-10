import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Beautiful() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="bg-white flex flex-col justify-center items-center rounded-xl p-2 md:p-4 max-w-sm md:max-w-xl lg:max-w-2xl text-white absolute top-60 md:top-60 lg:top-58">
        <div className="text-black font-great text-3xl md:text-4xl lg:text-5xl mt-5">
          Custom Designs Just For You
        </div>
        <div className="mt-5 text-xl md:text-xl lg:text-3xl text-black">
          Bring your favorite nail art and let me turn your nails into the
          reality.
          <img src="/images/glitter.jpg" className="mt-5" alt="Pink Nails" />
        </div>
        <Button
          label="Book An Appointment"
          className=" bg-pink-100 hover:underline p-2 text-xl rounded-full mt-5 text-black"
          onClick={goToContact}
        />
      </section>
    </>
  );
}
