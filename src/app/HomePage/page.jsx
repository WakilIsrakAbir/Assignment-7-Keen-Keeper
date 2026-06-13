import React from "react";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc]">
            
            <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center">
                
                <div className="text-center mb-10 mt-6">
                    <h1 className="text-[32px] md:text-[38px] font-bold text-[#1e293b] mb-4 tracking-tight leading-tight">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-[#64748b] max-w-[500px] mx-auto mb-8 text-[15px] leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    <button className="bg-[#245345] hover:bg-[#1a3e33] transition-colors text-white px-5 py-2 rounded-md font-medium text-sm flex items-center justify-center gap-1.5 mx-auto shadow-sm">
                        <span className="text-lg leading-none">+</span> Add a Friend
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                    
                    <div className="bg-white border border-slate-100/60 rounded-xl py-6 px-4 text-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                        <div className="text-[28px] font-bold text-[#245345] mb-1.5">10</div>
                        <div className="text-[#64748b] text-[13px] font-medium">Total Friends</div>
                    </div>

                    <div className="bg-white border border-slate-100/60 rounded-xl py-6 px-4 text-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                        <div className="text-[28px] font-bold text-[#245345] mb-1.5">3</div>
                        <div className="text-[#64748b] text-[13px] font-medium">On Track</div>
                    </div>

                    <div className="bg-white border border-slate-100/60 rounded-xl py-6 px-4 text-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                        <div className="text-[28px] font-bold text-[#245345] mb-1.5">6</div>
                        <div className="text-[#64748b] text-[13px] font-medium">Need Attention</div>
                    </div>

                    <div className="bg-white border border-slate-100/60 rounded-xl py-6 px-4 text-center shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]">
                        <div className="text-[28px] font-bold text-[#245345] mb-1.5">12</div>
                        <div className="text-[#64748b] text-[13px] font-medium">Interactions This Month</div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomePage;