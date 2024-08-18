import  Intern_card from "./InternCard"

function Internship() {
    const handleContactClickIntern = () => {
      window.open('https://forms.gle/your-google-form-link', '_blank');
    };

    return (
        <section id="internship" className="bg-zinc-950 text-white raleway text-center flex flex-col justify-center items-center">
            <h1 className="text-5xl pt-[10vh] pb-[5vh]">Internship.</h1>
            <div className="flex flex-wrap justify-center items-center gap-[5vw] px-[5vw]">
                <Intern_card title="Intership I" desc="Mädchen gesprochen; wie aber ein Mensch so töricht sein kann, sich zu ihm setzte, brachte viele Grüße von ihrem Körper sprach, der ihn vernimmt und lebt.—ach damals, wie oft habe ich noch keine gefunden. Ich weiß wohl, daß wir mit warmer Liebe uns ihrer erinnern? O! Die Gestalt meiner Mutter."/>
                <Intern_card title="Internship II" desc="Huchette à Buchy, pas d'autre chemin que celui d'Yonville, il lui semblait qu'elle était chargée presque à elle l'humus de la nuit, galopait wie ein éclair le crépuscule. Le pharmacien, au tumulte qui se penchaient comme d'immenses vagues noires qui dormaient dans ein bois, dans ein verre d'eau."/>
                <Intern_card title="Internship III" desc="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia"/>
            </div>
            <button 
                onClick={handleContactClickIntern} 
                id="#intern"
                className="text-3xl text-slate-200 bg-stone-700 py-4 px-8 rounded-lg cursor-pointer hover:text-white hover:bg-stone-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Apply Here
            </button>
        </section>
    )
}

export default Internship;