import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "./Loader";

const UserList = ({ searchValue }) => {
    const [userList, setUserList] = useState([]);
    const findUser = async () => {
        const response = await fetch(
            `https://api.github.com/search/users?q=${searchValue}`
        );
        const data = await response.json();
        setUserList(data.items);
        console.log(data);
    };
    useEffect(() => {
        findUser();
    }, [searchValue]);

    return (
        <div>
            {userList.length === 0 ? (
                <Loader />
            ) : (
                <div>
                    {userList.map((user) => {
                        return (
                            //     <div key={user.id}>
                            //         <h1>{user.login}</h1>
                            //         <div className="avatar">
                            //             <div className="w-24 rounded">
                            //                 <img src={user.avatar_url} />
                            //             </div>
                            //         </div>
                            //     </div>
                            <div key={user.id}>
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <img
                                        alt="team"
                                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                        src={user.avatar_url}
                                    />
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 title-font font-medium">
                                            {user.login}
                                        </h2>
                                        <p className="text-gray-500">CTO</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default UserList;
