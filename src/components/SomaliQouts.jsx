import { useState } from "react"

function SomaliQouts() {

    const [index, setIndex] = useState(0)


    const nextBtn = () => {
        if (index < maahmaah.length - 1) {
            setIndex(index + 1)
        }
    }
    const previousBtn = () => {

        if (index > 0) {
            setIndex(index - 1)
        }
    }



    const maahmaah = [
        "1.Aaddane eed ma waayo",
        "2.Iskaashato ma kufto",
        "3.Abeesadii lix jir kugu qaniintaa lixdan jir bay kugu dishaa ",
        "4.Talo xumo tog baas bay kaa riddaa",
        "5.Talo xumo tog baas bay kaa riddaa",
        "6.Af jooga looma adeego",
        "7.Af macaan garan macaan baa dhaanta",
        "8.Hadday degdegsiinyo door dhalaan, kaadsiinyana kiish lacagay dhalaan",
        "9.Biyo sacabbadaada ayaa looga dhergaa",
        "10.Maroodiga takarta saaran ma arkee kan kale tan saaran ayuu arkaa ",
    ]





    return <div className=" text-center mt-20">
        <h1 className={`text-red-500 ${index === maahmaah.length-1 ? "block" :"hidden"} font-bold text-3xl`}>Dhamaad</h1>
        <p className= {`text-3xl ${index === 2 ? "text-red-500" :  "text-black"} font-bold pb-10`}>{maahmaah[index]} </p>

        <button onClick={previousBtn} className="bg-blue-500 px-8 py-3 rounded text-white text-xl">previous</button>
        <button onClick={nextBtn} className="bg-blue-500 px-12 py-3 rounded text-white ml-5 text-xl">Next</button>
    </div>

}
export default SomaliQouts