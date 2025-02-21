import React, { useEffect, useState } from 'react'
import data from '../data/userData.json';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/userSlice';

export const Auth = () => {

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState(false);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        setSubmit(true);
        const trimedName = name.trim();
        const userExists = data.find(user => user.name.toLowerCase() === trimedName.toLowerCase
            ());


        if (!userExists) {
            setMessage("User not found. Please enter Your Full Name. If I Know You then you can login");
            setSubmit(false);

            return;
        } else {
            dispatch(login(userExists));
            navigate("/gallery/" + userExists.name, { replace: true });
        }

    };

    useEffect(() => {
        document.body.style.overflow = "hidden"; // Disable scroll
        return () => {
            document.body.style.overflow = "auto"; // Re-enable scroll when leaving page
        };
    }, []);


    return (
        <div className='max-w-sm mx-auto h-screen flex items-center justify-center bg-gray-200 overflow-hidden'>

            <div className='mx-5 w-full flex flex-col gap-2' >
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col gap-3">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                    <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded w-full mb-4 bg-black text-white"
                    />

                    {
                        submit ? (
                            <p className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">Loading</p>
                        ) : <button
                            onClick={handleLogin}
                            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
                        >
                            Login
                        </button>
                    }

                    {
                        message && <p className="mt-4 text-red-500">{message}</p>
                    }
                </div>

            </div>


        </div>
    )
}
