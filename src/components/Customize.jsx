import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Customize() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="bg-white flex flex-col font-serif justify-center items-center rounded-xl p-2 md:p-4 max-w-sm md:max-w-lg lg:max-w-xl text-white absolute top-64 lg:top-64">
        <div className="text-black text-3xl mt-5 ">
          Customize Your Nails at Juliet's
        </div>
        <div className="mt-5 text-xl text-black">
          Sit back, relax and enjoy getting your nails done. Choose from a wide
          variety of colors, and choose from acrylic, gel, or powder. Lets
          customize your nails..!
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
