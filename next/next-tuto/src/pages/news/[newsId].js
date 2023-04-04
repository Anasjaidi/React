import {useRouter} from "next/router";

const specificNews = () => {
    const router = useRouter();

    return (
        <h1>News number {router.query.newsId} </h1>
    );
}

export default specificNews