import React from 'react'
import Style from './toolList.module.scss'
import Image from "next/image"

const ToolList = (props) => {
	const { title, tools } = props.toolList.attributes
	console.log(props)
	const logoSize = 32;
	return (
		<div className={Style.root}>
			<h1>{title}</h1>
			<div className={Style.grid}>

				{
					tools.map(tool =>
						<div className={Style.tool}>
							<div className={Style.shelf + " " + Style.titleBox}>
								<Image className={Style.logo} src={tool.icon.data.attributes.url} width={logoSize} height={logoSize} />
								<p>{tool.name}</p>
							</div>
							<div className={Style.grid2}>
								{
									tool.nestedtools.map(nestedTool =>

										<div className={Style.nestedTool + " " + Style.shelf} >
											<Image className={Style.logo} src={nestedTool.icon.data.attributes.url} width={logoSize} height={logoSize} />
											<p>{nestedTool.name}</p>
										</div>
									)
								}
							</div>
						</div>
					)}
			</div>
		</div>
	)
}

export default ToolList