import PropTypes from 'prop-types';

function Service_card({ title, desc }) {
    const handleScroll = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    return (
        <div className="bg-black text-white rounded-lg border-8 border-slate-900 p-4 w-80 mb-8 min-h-48 raleway">
            <a  onClick={handleScroll} href="#contact" className='text-2xl pb-4 cursor-pointer hover:underline'>{title}</a>
            <p className='text-md mt-2'>{desc}</p>
        </div>
    );
}

Service_card.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default Service_card;
