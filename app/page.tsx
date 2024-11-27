import WelcomeCard from "@/src/components/index/welcomeCard";
import Hero from "../src/components/index/hero"
import QuickCalculator from "@/src/components/index/quickCalculator";

export default function Index(): JSX.Element {
  return (
    <>
      <div className="flex flex-col lg:px-32 px-6 lg:py-8 py-4 mb-4">
        <div className="flex lg:flex-row flex-col mb-8">
          <WelcomeCard />
          <Hero />
        </div>
        <div className="">
          <QuickCalculator />
        </div>
      </div>
    </>
  );
}
