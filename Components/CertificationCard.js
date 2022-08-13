import style from "../styles/certificationCard.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function CertificationCard({ certification }) {
    const { badge, link } = certification.attributes
    const badgeImageURL = badge.data[0].attributes.url
    return <Link href={link} >
        <div className={style.certification}>
            <div className="box">
                <Image src={badgeImageURL} height={300} width={300} />
            </div>
        </div>

    </Link>
}