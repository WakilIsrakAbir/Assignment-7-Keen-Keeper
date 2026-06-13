"use client";
import React, { useState, useEffect } from "react";

const getIcon = (type) => {
    switch (type) {
        case 'Text': return '💬';
        case 'Call': return '📞';
        case 'Video': return '📹';
        default: return '📝';
    }
};

export default function TimelineClient() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem("keen_keeper_timeline");
        if (storedData) {
            try {
                const parsed = JSON.parse(storedData);
                setEvents(parsed);
            } catch (e) {
                setEvents([]);
            }
        } else {
            setEvents([]);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#f8f9fc] py-12 px-[5%]">
            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-[2rem] font-bold text-[#1e293b] mb-4">Timeline</h1>
                    
                    <div className="w-48">
                        <select defaultValue="" className="w-full bg-white border border-gray-300 text-gray-600 py-2 px-3 rounded focus:outline-none focus:border-blue-500 text-sm shadow-sm cursor-pointer">
                            <option value="" disabled>Filter timeline</option>
                            <option value="Call">Call</option>
                            <option value="Text">Text</option>
                            <option value="Video">Video</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-3">
                    {events.map((event, idx) => (
                        <div key={event.id || idx} className="bg-white rounded shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className="text-2xl flex items-center justify-center shrink-0">
                                {getIcon(event.type)}
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#334155] text-[0.95rem]">
                                    <span className="font-bold text-[#1e293b]">{event.type}</span> with {event.friendName}
                                </p>
                                <p className="text-[0.75rem] text-gray-500 mt-0.5">
                                    {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </p>
                            </div>
                        </div>
                    ))}
                    
                    {events.length === 0 && (
                        <div className="text-center py-12 text-gray-500 bg-white rounded shadow-sm border border-gray-100">
                            No interactions found.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}