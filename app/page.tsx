import MenuHeader from "./components/menuHeader";
import Footer from "./components/footer";
import Table from "./components/table";

export default function Home() {

  return (
    <div className="overflow-x-hidden">

      <main>
        <div className=" mt-[5vh] flex flex-col justify-center items-center">
          <div className="w-[40vw] max-w-[500px]">
            <img src={process.env.NODE_ENV === 'production' ? '/co2-zone/CO2zoneLogo.png' : '/CO2zoneLogo.png'}  alt="logo" width="100%" />
          </div>
          <h1 className="flex hyphens-auto text-center text-blueExtraLight text-lg sm:text-4xl m-4 ">
            Advancing Environmental Consciousness, Together!
          </h1>
              
          <Table/>
         
        </div>
       
      </main>

    </div>
  );
}
