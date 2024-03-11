import Header from "./Header";
import Customize from "./Customize";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen bg-pink-100">
        <div className="flex flex-col justify-center items-center">
          <Header />
          <Customize />
        </div>
      </main>
    </>
  );
}
