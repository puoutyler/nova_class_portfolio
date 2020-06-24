import Link from 'next/link'


const Nav = () => {
    return(
        <nav>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About Us</a></Link>
            <Link href={'/contact'}><a>Contact Us</a></Link>
        </nav>
    )
}

export default Nav