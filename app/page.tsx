import MenuHeader from "./components/menuHeader";
import Footer from "./components/footer";


export default function Home() {

  return (
    <div>
      <MenuHeader />

      <main>
        <div className=" mt-[5vh] flex flex-col justify-center items-center">
          <div className="w-[40vw] max-w-[500px]">
            <img src="/CO2-EmissionWebsite/public/CO2zoneLogo.png" alt="logo" width="100%" />
          </div>
          <h1 className="flex hyphens-auto text-center text-blueExtraLight text-lg sm:text-4xl m-4 ">
            Advancing Environmental Consciousness, Together!
          </h1>
         
        </div>

       


        <h1 className="text-blueExtraLight text-3xl text-center mt-5">
        Get a feel for the measuring Unit
        </h1>
        <ul className="text-blueLight text-xl text-left m-6 ">
          <li>
          - According to the United States Environmental Protection Agency (EPA), the average passenger vehicle emits about 4.6 metric tons of carbon dioxide equivalent per year. Therefore, 1 MtCO2e is roughly equivalent to the annual emissions of approximately 217 passenger cars.
          </li>
          <li></li>
        </ul>
      </main>

      <Footer/>
    </div>
  );
}
