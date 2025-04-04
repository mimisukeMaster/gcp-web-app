import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "@/pages/header"
import Footer from "./footer"

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header header={props.header} />
            <div className="container">
                <h3 className="my-3 text-primary text-center">
                    {props.title}</h3>
                    {props.children}
            </div>
            <Footer footer="copyright mimisukeMaster." />
        </div>
    )
}