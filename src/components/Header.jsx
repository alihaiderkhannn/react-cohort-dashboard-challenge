import Logo from "./Logo";
import '../styles/header.css'
import Avatar from "./Avatar";


export default function Header() {
   // const { posts } = useContext(AppContext)

    return (
        <div className="header-container">
            <Logo />
            <Avatar  />
        </div>
    )
}

