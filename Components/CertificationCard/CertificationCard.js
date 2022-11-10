import Style from "./certificationCard.module.scss"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import slideUp from "../../animations/slideUp"


export default function CertificationCard({ certification }) {
    const { badge, link } = certification.attributes
    const badgeImageURL = badge.data[0].attributes.url
    return <Link href={link} >
        <motion.div
            initial="hidden"
            variants={slideUp}
            whileInView="visible"
            viewport={{ once: true }}
        >

            <motion.div
                className={Style.certification}
                variants={slideUp}
            >
                <Image src={badgeImageURL} layout="fill" />

            </motion.div>
        </motion.div>

    </Link>
}