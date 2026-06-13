"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = {
  Text: "#8b5cf6",
  Call: "#1e5631",
  Video: "#22c55e"
};

export default function StatsClient() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("keen_keeper_timeline");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        let textCount = 0;
        let callCount = 0;
        let videoCount = 0;

        parsed.forEach(event => {
          if (event.type === 'Text') textCount++;
          if (event.type === 'Call') callCount++;
          if (event.type === 'Video') videoCount++;
        });

        const chartData = [
          { name: "Text", value: textCount },
          { name: "Call", value: callCount },
          { name: "Video", value: videoCount }
        ];
        
        setData(chartData);
      } catch (e) {
        console.error("Could not parse timeline data", e);
      }
    }
  }, []);

  const totalInteractions = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
        <div className="min-h-screen bg-[#f8f9fc] py-12 px-[5%]">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-[2rem] font-bold text-[#1e293b] mb-8">Friendship Analytics</h1>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-10">
                    <h2 className="text-[#1e5631] font-bold mb-8 text-lg">By Interaction Type</h2>
                    
                    <div className="h-[350px] w-full flex justify-center items-center">
                        {totalInteractions > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={90}
                                        outerRadius={120}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                                        ))}
                                    </Pie>
                                    <Tooltip 
                                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                                </PieChart>
                            </ResponsiveContainer>
                        ) : (
                            <p className="text-gray-400">No interaction data available yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
  );
}
