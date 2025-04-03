import { useState, useEffect } from 'react';
import Layout from '../../components/layout';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../components/fire";

const db = getFirestore(app);
const myCollection = collection(db, "mydata"); // コレクションの参照を作成

export default function Home() {
    const [data, setData] = useState([]); // 初期値を空の配列に変更
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(myCollection);
                const newData = [];
                querySnapshot.forEach(document => {
                    const doc = document.data();
                    newData.push(
                        <tr key={document.id}>
                            <td><a href={"/fire/del?id=" + document.id}></a></td>
                            <td>{doc.name}</td>
                            <td>{doc.email}</td>
                            <td>{doc.age}</td>
                        </tr>
                    );
                });
                setData(newData);
                setMessage("Firebase data");
            } catch (error) {
                console.error("Error fetching data:", error);
                setMessage("Error loading data.");
                setData([]); // エラー発生時はデータを空にするか、エラー表示用のデータを設定
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Layout header="Next.js" title="Top page">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{message}</h5>
                    <table className="table bg-white text-left">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    );
}