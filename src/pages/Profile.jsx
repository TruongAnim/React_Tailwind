import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-12 px-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
                {/* Avatar */}
                <div className="relative mb-4">
                    {user.avatarUrl ? (
                        <img
                            src={user.avatarUrl}
                            alt="avatar"
                            className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 shadow"
                        />
                    ) : (
                        <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center border-4 border-gray-200 shadow">
                            <UserCircleIcon className="w-24 h-24 text-gray-300" />
                        </div>
                    )}
                </div>
                {/* Username */}
                <h2 className="text-2xl font-bold text-gray-900 mb-1">@{user.username}</h2>
                {/* Email */}
                <p className="text-gray-500 mb-2">{user.email}</p>
                {/* Created at */}
                {user.createdAt && (
                    <p className="text-xs text-gray-400 mb-4">
                        Tham gia: {new Date(user.createdAt).toLocaleDateString('vi-VN')}
                    </p>
                )}
                {/* Logout button */}
                <button
                    onClick={handleLogout}
                    className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-full font-semibold shadow transition"
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    );
} 