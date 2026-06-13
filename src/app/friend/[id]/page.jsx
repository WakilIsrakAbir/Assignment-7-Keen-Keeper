import React from 'react';
import friendsData from "../../../../public/data.json";
import Image from "next/image";
import { FiBell, FiArchive, FiTrash2, FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";

const formatStatus = (status) => {
    if (!status) return '';
    return status.split(/[- ]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(status.includes('-') ? '-' : ' ');
};

const getStatusColor = (status) => {
    switch(status) {
        case 'overdue': return 'bg-[#ff4d4f]';
        case 'almost due': return 'bg-[#f5a623]';
        case 'on-track': return 'bg-[#1e5631]';
        default: return 'bg-gray-500';
    }
}

export default async function FriendDetail({ params }) {
    const { id } = await params;
    const friend = friendsData.find(f => f.id === parseInt(id));

    if (!friend) {
        return (
            <div className="min-h-screen bg-[#f8f9fc] flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-700">Friend not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fc] py-12 px-[5%]">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-fit">
                    <div className="p-8 flex flex-col items-center border-b border-gray-100">
                        <Image 
                            src={friend.picture}
                            alt={friend.name}
                            width={120}
                            height={120}
                            className="rounded-full object-cover mb-4"
                        />
                        <h2 className="text-xl font-bold text-slate-800 mb-2">{friend.name}</h2>
                        
                        <div className={`text-xs font-semibold py-1 px-4 rounded-full text-white ${getStatusColor(friend.status)} mb-2`}>
                            {formatStatus(friend.status)}
                        </div>
                        
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {friend.tags.map((tag, index) => (
                                <span key={index} className="bg-[#e6fbf0] text-[#27ae60] text-[10px] font-bold py-1 px-3 rounded-full uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <p className="text-sm text-gray-500 italic text-center mb-2">"{friend.bio}"</p>
                        <p className="text-xs text-gray-400">Preferred: {friend.email ? 'email' : 'phone'}</p>
                    </div>
                    
                    <div className="flex flex-col">
                        <button className="flex items-center justify-center gap-2 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700">
                            <FiBell className="text-lg" /> Snooze 2 Weeks
                        </button>
                        <button className="flex items-center justify-center gap-2 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700">
                            <FiArchive className="text-lg" /> Archive
                        </button>
                        <button className="flex items-center justify-center gap-2 py-4 hover:bg-red-50 transition-colors text-sm font-semibold text-red-500">
                            <FiTrash2 className="text-lg" /> Delete
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
                            <h3 className="text-3xl font-bold text-[#1e5631] mb-1">{friend.days_since_contact}</h3>
                            <p className="text-sm text-gray-400">Days Since Contact</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
                            <h3 className="text-3xl font-bold text-[#1e5631] mb-1">{friend.goal}</h3>
                            <p className="text-sm text-gray-400">Goal (Days)</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center">
                            <h3 className="text-2xl font-bold text-[#1e5631] mb-1">
                                {new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </h3>
                            <p className="text-sm text-gray-400">Next Due</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-[#1e5631]">Relationship Goal</h3>
                            <button className="text-xs font-semibold px-4 py-1.5 border border-gray-200 rounded text-gray-600 hover:bg-gray-50">
                                Edit
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Connect every <span className="font-bold text-slate-800">{friend.goal} days</span>
                        </p>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-bold text-[#1e5631] mb-4">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="flex flex-col items-center justify-center gap-2 py-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-slate-700">
                                <FiPhone className="text-2xl font-semibold" />
                                <span className="text-sm font-semibold">Call</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 py-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-slate-700">
                                <FiMessageSquare className="text-2xl font-semibold" />
                                <span className="text-sm font-semibold">Text</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 py-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-slate-700">
                                <FiVideo className="text-2xl font-semibold" />
                                <span className="text-sm font-semibold">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
