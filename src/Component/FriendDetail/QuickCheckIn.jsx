"use client";
import React from 'react';
import { FiPhone, FiMessageSquare, FiVideo } from "react-icons/fi";
import { toast } from 'react-toastify';

const QuickCheckIn = ({ friend }) => {
    const handleInteraction = (type) => {
        const newInteraction = {
            id: Date.now(),
            type,
            friendName: friend.name,
            date: new Date().toISOString()
        };

        const storedData = localStorage.getItem('keen_keeper_timeline');
        let timeline = [];
        if (storedData) {
            try {
                timeline = JSON.parse(storedData);
            } catch (e) {}
        }
        
        timeline.unshift(newInteraction);
        localStorage.setItem('keen_keeper_timeline', JSON.stringify(timeline));
        
        toast.success(`Successfully recorded a ${type} with ${friend.name}!`);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-[#1e5631] mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
                <button 
                    onClick={() => handleInteraction('Call')}
                    className="flex flex-col items-center justify-center gap-2 py-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-slate-700 cursor-pointer"
                >
                    <FiPhone className="text-2xl font-semibold cursor-pointer" />
                    <span className="text-sm font-semibold">Call</span>
                </button>
                <button 
                    onClick={() => handleInteraction('Text')}
                    className="flex flex-col items-center justify-center gap-2 py-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-slate-700 cursor-pointer"
                >
                    <FiMessageSquare className="text-2xl font-semibold cursor-pointer" />
                    <span className="text-sm font-semibold">Text</span>
                </button>
                <button 
                    onClick={() => handleInteraction('Video')}
                    className="flex flex-col items-center justify-center gap-2 py-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-slate-700"
                >
                    <FiVideo className="text-2xl font-semibold cursor-pointer" />
                    <span className="text-sm font-semibold">Video</span>
                </button>
            </div>
        </div>
    );
};

export default QuickCheckIn;
