import style from "../styles/certificationCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function CertificationCard({ certification }) {
    const { badge, link } = certification.attributes
    const badgeImageURL = badge.data[0].attributes.url
    return <Link href={link} >
        <div className={style.certification}>
            <div className="box">
                <Image src={badgeImageURL} height={400} width={400} />
            </div>
        </div>

    </Link>
}