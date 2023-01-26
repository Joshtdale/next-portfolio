import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <div className="sticky-top">
                <Navbar />
            </div>
            <main>{children}</main>
        </>
    )
}