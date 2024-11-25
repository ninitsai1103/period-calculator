import WelcomeCard from "@/src/components/index/welcomeCard";
import Hero from "../src/components/index/hero"

export default function Index(): JSX.Element {
  return (
    <>
      <div className="flex flex-col lg:px-32 px-6 lg:py-8 py-4">
        <div className="flex lg:flex-row flex-col">
          <WelcomeCard />
          <Hero />
        </div>
        <div></div>
      </div>
    </>
  );
}
