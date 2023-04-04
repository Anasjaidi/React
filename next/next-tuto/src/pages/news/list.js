import Link from "next/link";

const ListNews = () => {
    return (
        <>
            <h1>List of news</h1>
            <ul>
                <li><Link href={'/news/news1'}>news1</Link></li>
                <li><Link href={'/news/news2'}>news2</Link></li>
                <li><Link href={'/news/news3'}>news3</Link></li>
            </ul>
        </>
    );
}

export default ListNews