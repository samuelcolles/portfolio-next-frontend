import React from "react";
import Style from "./toolList.module.scss";
import Image from "next/image";
import { motion } from "framer-motion"
import slideUp from "../../animations/slideUp"

const ToolList = props => {
	const { title, tools } = props.toolList.attributes;
	const logoSize = 32;
	return <motion.div
		className={Style.root}
		initial="hidden"
		variants={slideUp}
		whileInView="visible"
		viewport={{ once: true }}
	>
		<h1>{title}</h1>
		<div className={Style.grid}>
			{tools.map(tool => (
				<div className={Style.tool} key={tool.name}>
					<div className={Style.shelf + " " + Style.titleBox}>
						<Image
							className={Style.logo}
							src={tool.icon.data.attributes.url}
							width={logoSize}
							height={logoSize}
							priority
						/>
						<p>{tool.name}</p>
					</div>
				</div>
			))}
		</div>
	</motion.div>
};

export default ToolList;
