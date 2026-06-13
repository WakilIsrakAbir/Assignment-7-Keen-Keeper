import React from "react";
import friendsData from "../../../public/data.json";
import Image from "next/image";
import Link from "next/link";

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

const Friends = () => {
    return (
        <section className="py-8 px-[5%] bg-[#f8f9fc] min-h-screen">
            <h2 className="text-2xl text-[#2c3e50] mb-8 font-bold">Your Friends</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {friendsData.map(friend => (
                    <Link key={friend.id} href={`/friend/${friend.id}`} className="block">
                        <div className="bg-white rounded-xl py-8 px-6 flex flex-col items-center shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-200 border border-black/5 h-full">
                            <Image 
                                src={friend.picture} 
                                alt={friend.name} 
                                width="100"
                                height="100"
                                className="rounded-full object-cover mb-4" 
                            />
                            <h3 className="text-[1.2rem] font-bold text-[#2c3e50] mb-1">{friend.name}</h3>
                            <p className="text-xs text-[#888] mb-6">{friend.days_since_contact}d ago</p>
                            
                            <div className="flex flex-wrap gap-2 justify-center mb-6 min-h-[24px]">
                                {friend.tags.map((tag, index) => (
                                    <span key={index} className="bg-[#e6fbf0] text-[#27ae60] text-[10px] font-bold py-[0.3rem] px-[0.8rem] rounded-[12px] uppercase tracking-[0.5px]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <div className={`text-[0.75rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-[15px] text-white ${getStatusColor(friend.status)} mt-auto`}>
                                {formatStatus(friend.status)}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Friends;