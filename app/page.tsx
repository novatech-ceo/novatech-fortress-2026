"use client";
import React, { useState } from 'react';

export default function NovatechEliteSystem() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [orders, setOrders] = useState([
    {id: 'NV-9921', item: 'VIP Number', price: 50, status: 'Completed', time: '10:30 AM'},
    {id: 'NV-9922', item: 'Apple ID Golden', price: 100, status: 'Pending', time: '12:45 PM'}
  ]);

  const totalRevenue = orders.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div style={{ backgroundColor: '#050505', color: '#fff', minHeight: '100vh', direction: 'rtl', fontFamily: 'Segoe UI, Tahoma' }}>
      
      {/* سقف السيطرة الذهبي */}
      <div onClick={() => setShowAdmin(!showAdmin)} style={{ background: 'linear-gradient(90deg, #d4af37, #f2d472)', color: '#000', padding: '12px', textAlign: 'center', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)' }}>
        👑 NOVATECH COMMAND CENTER | القائد كاظم حسن جاسم
      </div>

      <header style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h1 style={{ color: '#d4af37', fontSize: '3.5rem', letterSpacing: '5px', margin: 0, textShadow: '2px 2px 10px rgba(212,175,55,0.2)' }}>NOVATECH</h1>
        <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '10px' }}>Global Digital Infrastructure & Assets Management</p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* لوحة الإدارة الاحترافية */}
        {showAdmin && (
          <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #d4af37', borderRadius: '20px', padding: '30px', marginBottom: '40px', animation: 'fadeIn 0.5s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ color: '#d4af37', margin: 0 }}>📊 غرفة العمليات (Live Stats)</h2>
              <div style={{ backgroundColor: '#111', padding: '10px 20px', borderRadius: '10px', border: '1px solid #222' }}>
                <span style={{ color: '#888' }}>إجمالي الإيرادات: </span>
                <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.2rem' }}>${totalRevenue}</span>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #222', color: '#888' }}>
                    <th style={{ padding: '15px' }}>المعرف</th>
                    <th>المنتج</th>
                    <th>السعر</th>
                    <th>الحالة</th>
                    <th>التوقيت</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(o => (
                    <tr key={o.id} style={{ borderBottom: '1px solid #111' }}>
                      <td style={{ padding: '15px', color: '#d4af37' }}>{o.id}</td>
                      <td>{o.item}</td>
                      <td>${o.price}</td>
                      <td><span style={{ backgroundColor: o.status === 'Completed' ? '#0f3a1a' : '#3a2a0f', color: o.status === 'Completed' ? '#0f0' : '#d4af37', padding: '5px 10px', borderRadius: '5px', fontSize: '0.8rem' }}>{o.status}</span></td>
                      <td style={{ color: '#555' }}>{o.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* شبكة المنتجات الملكية */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
          <ProductCard title="Apple ID Golden" price="$10 - $100" desc="حسابات نادرة بمعرفات ثلاثية" btn="اقتنِ الفخامة" />
          <ProductCard title="VIP Numbers" price="$5 - $50" desc="أرقام دولية وبريطانية مميزة" btn="حجز الرقم" />
        </div>

      </main>

      <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid #111', color: '#444' }}>
        © 2026 NOVATECH FOUNDER HOLDINGS LTD | London, UK
      </footer>
    </div>
  );
}

function ProductCard({ title, price, desc, btn }: any) {
  return (
    <div style={{ backgroundColor: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px', borderRadius: '25px', textAlign: 'center', transition: '0.3s' }}>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#666', marginBottom: '20px' }}>{desc}</p>
      <div style={{ color: '#d4af37', fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}>{price}</div>
      <button style={{ backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '15px 40px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>{btn}</button>
    </div>
  );
}