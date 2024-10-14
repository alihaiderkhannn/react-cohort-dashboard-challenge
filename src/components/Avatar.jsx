import { useContext } from 'react';
import '../styles/avatar.css'
import { AppContext } from '../App';

export default function Avatar() {
    
    const context = useContext(AppContext);
    const user = context.contacts.find((c) => c.id === 1)
    console.log(context.contacts)


    const transformName = (firstName, lastName) => {
        const firstinitial = firstName.charAt(0).toLocaleUpperCase();
        const secondinitial = lastName.charAt(0).toLocaleUpperCase()
       // const [first, last] = name.split(' ')

        return firstinitial + secondinitial;

    }

    return (
        <div className="avatar-container">
            <p className='initials'>{ user ? transformName(user.firstName, user.lastName) : '?'}</p>
            
        </div>
    )

}