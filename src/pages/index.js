import Link from "next/link"
import Image from "next/image"
import hero from "../../public/assets/hero.png"

export default function HomePage() {
    return <>

    <div className="grid-halves h-screen-navbar">
        <div className="bg-teal boarder-right">
            <div className="column-padding">
                <div className="tablet-centered">
                    <div className="content-grid home-hero">
                        <h1>Great HTML <br/>Website Template</h1>
                        <p className="section-subtitle">Create your own Website in no time!</p>
                        <Link href="/products" className="large-button">
                            <div className="large-button-text">Expore Products</div>
                        </Link>
                    </div>               
                </div>
            </div>
        </div>
        <div className="bg-salmon">
            <div className="collumn-padding centered">
                <div className="callout-wrap">
                    <Image src={hero} placeholder="blur" className="callout-image"></Image>
                </div>
            </div>
        </div>
    </div>
    </>
}
    

