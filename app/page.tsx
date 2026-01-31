"use client";
import React, { useState, useEffect } from 'react';

export default function NovatechMegaSystem() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState('landing'); 
  const [wallet, setWallet] = useState(0);
  const [orders, setOrders] = useState([
    {id: 'NV-101', item: 'VIP Number', price: 50, status: 'Completed'},
    {id: 'NV-102', item: 'Apple ID Golden', price: 100, status: 'Pending'}
  ]);

  return (
    <div style={{ backgroundColor: '#020202', color: '#fff', minHeight: '100vh', direction: 'rtl', fontFamily: 'Arial' }}>
      {/* الشريط العلوي للتحكم المطلق */}
      <div style={{ background: '#d4af37', color: '#000', padding: '10px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
        <span onClick={() => setIsAdmin(!isAdmin)} style={{cursor:'pointer'}}>🛡️ نظام NOVATECH السيادي | القائد كاظم</span>
        <span>💰 رصيد المحفظة: ${wallet}</span>
      </div>

      {/* المحتوى الديناميكي */}
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {isAdmin && (
          <section style={{ border: '2px solid #d4af37', padding: '20px', borderRadius: '15px', marginBottom: '20px', background: '#0a0a0a' }}>
            <h2 style={{color:'#d4af37'}}>📊 لوحة التحكم العليا (Admin)</h2>
            <div style={{display:'flex', gap:'20px', marginBottom:'20px'}}>
               <button onClick={() => setWallet(wallet + 500)} style={btnStyle}>إضافة رصيد وهمي للتيست ($500)</button>
               <button onClick={() => alert('تم إرسال تنبيه للموبايل')} style={btnStyle}>تفعيل تنبيهات التليجرام</button>
            </div>
            <table>
              <thead><tr><th>المعرف</th><th>المنتج</th><th>الحالة</th></tr></thead>
              <tbody>{orders.map(o => <tr key={o.id}><td>{o.id}</td><td>{o.item}</td><td style={{color:'#0f0'}}>{o.status}</td></tr>)}</tbody>
            </table>
          </section>
        )}

        <header style={{ textAlign: 'center', padding: '40px 0' }}>
          <h1 style={{ color: '#d4af37', fontSize: '3rem', margin: 0 }}>NOVATECH FOUNDER</h1>
          <p>إدارة العمليات الرقمية - الإصدار النهائي 2026</p>
        </header>

        {/* المتجر والخدمات */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <div style={cardStyle}>
            <h3>Apple ID Golden</h3>
            <p>$10 - $100</p>
            <button onClick={() => alert('تم تسجيل الطلب في لوحة القائد')} style={buyBtn}>اطلب الآن</button>
          </div>
          <div style={cardStyle}>
            <h3>VIP Numbers</h3>
            <p>$5 - $50</p>
            <button onClick={() => alert('تم تسجيل الطلب في لوحة القائد')} style={buyBtn}>حجز رقم</button>
          </div>
          <div style={cardStyle}>
            <h3>شحن ألعاب (PUBG/UC)</h3>
            <p>أسعار الوكلاء</p>
            <button style={buyBtn}>بوابة الشحن</button>
          </div>
        </div>

        {/* محرك المحادثة الذكي المدمج (نوفا 3000) */}
        <div style={chatBox}>
          <div style={{color:'#d4af37', fontWeight:'bold', borderBottom:'1px solid #333', paddingBottom:'5px'}}>🤖 مساعد نوفا الذكي</div>
          <p style={{fontSize:'0.9rem'}}>قائد كاظم، جميع الأنظمة نشطة. بانتظار أوامر الشحن للوكلاء.</p>
          <input type="text" placeholder="اكتب أمراً لنوفا..." style={{width:'100%', background:'#000', color:'#fff', border:'1px solid #d4af37', padding:'5px'}} />
        </div>
      </main>
    </div>
  );
}

const btnStyle = { background: '#d4af37', border: 'none', padding: '10px', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bold' };
const buyBtn = { ...btnStyle, width: '100%', marginTop: '10px' };
const cardStyle = { background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '20px', borderRadius: '15px', textAlign: 'center' };
const chatBox = { position: 'fixed', bottom: '20px', left: '20px', width: '250px', background: '#0a0a0a', border: '1px solid #d4af37', padding: '15px', borderRadius: '10px', boxShadow: '0 0 15px rgba(212,175,55,0.2)' };
