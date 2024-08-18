import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ProfileCard({ name, position, photo, desc, linkedinUrl }) {
    return (
        <figure className="md:flex rounded-xl p-8 md:p-0 bg-slate-900">
            <img
                className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={photo}
                alt=""
                width="384"
                height="512"
            />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        {desc}
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-white">
                        {name}
                    </div>
                    <div className="text-slate-400">
                        {position}
                    </div>
                    <div>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} className="text-slate-500 text-2xl mt-1" />
                        </a>
                    </div>
                </figcaption>
            </div>
        </figure>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    linkedinUrl: PropTypes.string.isRequired,
};

export default ProfileCard;
