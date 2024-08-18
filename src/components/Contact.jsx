export default function Contact() {
  const handleContactClick = () => {
    window.open('https://forms.gle/your-google-form-link', '_blank');
  };

  return (
    <section 
      id="contact" 
      className="bg-zinc-950 text-center flex flex-col justify-center items-center pb-[10vh] pt-[10vh] px-4"
    >
      <h2 className="text-gray-200 text-5xl mb-12">Get In Touch.</h2>
      <button 
        onClick={handleContactClick} 
        className="text-3xl text-gray-200 bg-zinc-700 py-4 px-8 rounded-lg cursor-pointer hover:text-white hover:bg-zinc-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Contact Us
      </button>
    </section>
  );
}
