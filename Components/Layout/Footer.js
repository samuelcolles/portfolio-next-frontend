
export default function Footer({copyRight}){
    return <footer className="background-box background-color-a">
        <div className="container">
            <p>Ⓒ Samuel Colles 2022</p>
        </div>
    </footer>
}
// export const getStaticProps = async () => {
//     const res = await fetch(`http://localhost:1337/api/copy-right`)
//     const copyRight = await res.json()
  
//     console.log(copyRight)
//     return {
//       props: {
//         copyRight:copyRight
//       }
//     }
//   }