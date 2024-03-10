import Header from "./Header";
import Beautiful from "./Beautiful";

export default function Home() {
  return (
    <>
      <main className="flex flex-col h-screen bg-cover bg-no-repeat bg-pink-100">
        <div className="flex flex-col justify-center items-center">
          <Header />
          <Beautiful />
        </div>
      </main>
    </>
  );
}