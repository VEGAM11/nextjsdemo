import HomePage from "@/components/home/home";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <HomePage/>
      </div>
    </div>
  );
};
