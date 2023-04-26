import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";

const Result = ({ searchValue }) => {
    const [resultNumber, setResultNumber] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    const fetchUser = async () => {
        try {
            const response = await fetch(
                `https://api.github.com/search/users?q=${searchValue}`
            );
            const data = await response.json();
            setData(data.items);
            setResultNumber(data.total_count);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [searchValue]);

    return (
        <div className="flex flex-col justify-center items-center bg-gray-900">
            <h1 className="text-white text-2xl mt-4 animation_enter">
                {resultNumber} results found
            </h1>
            {loading && <Loader />}
            {error && <Error message={error} />}
            <div className="flex flex-wrap justify-center items-center">
                {data.map((user) => {
                    return (
                        <div
                            key={user.id}
                            className="flex flex-col justify-center items-center m-4">
                            <a
                                href={user.html_url}
                                className="text-white text-xl text-center mt-2">
                                <img
                                    src={user.avatar_url}
                                    alt="user"
                                    className="rounded-full h-24 w-24 imgeffect"
                                />

                                {user.login}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Result;
