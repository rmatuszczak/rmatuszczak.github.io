import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
       
        <div className="content">
            <div className="inner">
                <h1>Hi, I'm Rafal</h1>
                <p>I am a full stack software engineer with over 4 years of professional experience. 
                    Thank you for exploring my website</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><button  onClick={() => {props.onOpenArticle('about')}}>About</button></li>
                <li><button  onClick={() => {props.onOpenArticle('education')}}>Education</button></li>
                <li><button  onClick={() => {props.onOpenArticle('work')}}>Work</button></li>
                <li><button  onClick={() => {props.onOpenArticle('resume')}}>Resume</button></li>
                <li><button  onClick={() => {props.onOpenArticle('contact')}}>Contact</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
