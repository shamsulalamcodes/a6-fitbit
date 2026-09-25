import Banner from "@/components/home/Banner";
import Library from "@/components/home/Library";
import { getAllData } from "@/components/shared/Data";

export default async function Home() {
  const allData = await getAllData()
  return (
    <div className="">
      <Banner />
      <Library allData={allData} />
    </div>
  );
}
