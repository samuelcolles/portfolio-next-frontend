

export default function ReferenceItem({item}){
    return <div>
        <h2>{item.attributes.name} - {item.attributes.title}</h2>
        <p>{item.attributes.phoneNumber}</p>
    </div>
}