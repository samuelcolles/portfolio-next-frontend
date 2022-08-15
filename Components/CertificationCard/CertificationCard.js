import Style from "./certificationCard.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function CertificationCard({ certification }) {
    const { badge, link } = certification.attributes
    const badgeImageURL = badge.data[0].attributes.url
    return <Link href={link} >
        <div className={Style.certification}>
            
                <Image src={badgeImageURL} layout="fill"/>
            
        </div>

    </Link>
}