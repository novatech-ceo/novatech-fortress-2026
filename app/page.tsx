"use client";
import React, { useState } from 'react';

export default function NovatechFinalEmpire() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showChat, setShowChat] = useState(true);
  const [orderStatus, setOrderStatus] = useState(false);

  return (
    <div style={{ backgroundColor: '#020202', color: '#fff', minHeight: '100vh', direction: 'rtl', fontFamily: 'Arial' }}>
      
      {/* شريط السيادة العلوي */}
      <div onClick={() => setIsAdmin(!isAdmin)} style={{ background: 'linear-gradient(90deg, #d4af37, #f2d472)', color: '#000', padding: '12px', textAlign: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
        🛡️ مركز قيادة NOVATECH | القائد كاظم حسن جاسم (اضغط هنا للإدارة)
      </div>

      <header style={{ textAlign: 'center', padding: '60px 20px', background: 'radial-gradient(circle, #111 0%, #020202 100%)' }}>
        <h1 style={{ color: '#d4af37', fontSize: '4rem', letterSpacing: '8px', margin: 0 }}>NOVATECH</h1>
        <p style={{ color: '#888', fontSize: '1.2rem' }}>إدارة العمليات الرقمية الشاملة | لندن - النجف</p>
      </header>

      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
        
        {/* لوحة الإدارة المالية (تظهر عند الضغط على الشريط العلوي) */}
        {isAdmin && (
          <section style={{ border: '2px solid #d4af37', padding: '30px', borderRadius: '20px', background: '#0a0a0a', marginBottom: '40px', boxShadow: '0 0 20px rgba(212,175,55,0.1)' }}>
            <h2 style={{color:'#d4af37'}}>📊 غرفة العمليات الحية</h2>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'20px', marginTop:'20px'}}>
              <div style={statCard}>💰 الأرباح: $450</div>
              <div style={statCard}>📦 طلبات نشطة: 12</div>
              <div style={statCard}>👥 وكلاء: 8</div>
            </div>
          </section>
        )}

        {/* شبكة الخدمات الملكية */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <ServiceCard title="Apple ID Golden" price="$10 - $100" desc="حسابات ملكية بمعرفات نادرة" action={() => setOrderStatus(true)} />
          <ServiceCard title="VIP Numbers" price="$5 - $50" desc="أرقام دولية مميزة للوكلاء" action={() => setOrderStatus(true)} />
          <ServiceCard title="بوابة شحن UC" price="أسعار الجملة" desc="شحن فوري مباشر بآيدي اللاعب" action={() => setOrderStatus(true)} />
        </div>

        {/* نظام نوفا 3000 الذكي (Chatbot) */}
        {showChat && (
          <div style={chatStyle}>
            <div style={{background:'#d4af37', color:'#000', padding:'10px', fontWeight:'bold', display:'flex', justifyContent:'space-between'}}>
              <span>🤖 مساعد نوفا 3000</span>
              <span onClick={() => setShowChat(false)} style={{cursor:'pointer'}}>X</span>
            </div>
            <div style={{padding:'15px', fontSize:'0.9rem'}}>
              مرحباً قائد كاظم. نظام NOVATECH نشط بنسبة 100%. جميع بوابات العراق مؤمنة.
            </div>
            <input type="text" placeholder="اكتب أمراً لنوفا..." style={chatInput} />
          </div>
        )}

        {/* إشعار الطلبات */}
        {orderStatus && (
          <div style={overlay} onClick={() => setOrderStatus(false)}>
            <div style={modal}>
              <h2 style={{color:'#d4af37'}}>تم تسجيل الطلب</h2>
              <p>جاري إشعار القائد كاظم لمعالجة الطلب فوراً.</p>
              <button style={btnStyle}>إغلاق</button>
            </div>
          </div>
        )}
      </main>

      {/* زر الواتساب */}
      <a href="https://wa.me/9647813105317" target="_blank" style={whatsappBtn}>💬 الدعم الفني المباشر</a>

      <footer style={{textAlign:'center', padding:'60px', color:'#444', fontSize:'0.8rem'}}>
        © 2026 NOVATECH FOUNDER HOLDINGS LTD | Registered in Companies House: 16945629
      </footer>
    </div>
  );
}

// مكونات التصميم (Components)
function ServiceCard({title, price, desc, action}: any) {
  return (
    <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px', borderRadius: '25px', textAlign: 'center' }}>
      <h3 style={{fontSize:'1.8rem'}}>{title}</h3>
      <p style={{color:'#666'}}>{desc}</p>
      <div style={{color:'#d4af37', fontSize:'2rem', fontWeight:'bold', margin:'20px 0'}}>{price}</div>
      <button onClick={action} style={btnStyle}>اطلب الآن</button>
    </div>
  );
}

const statCard = { background: '#111', padding: '20px', borderRadius: '15px', textAlign: 'center' as const, border: '1px solid #222' };
const btnStyle = { background: '#d4af37', color: '#000', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 'bold' as const, cursor: 'pointer', width: '100%' };
const chatStyle = { position: 'fixed' as const, bottom: '100px', left: '20px', width: '280px', background: '#0a0a0a', border: '1px solid #d4af37', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' };
const chatInput = { width: '100%', background: '#000', border: 'none', borderTop: '1px solid #333', padding: '10px', color: '#fff' };
const whatsappBtn = { position: 'fixed' as const, bottom: '20px', right: '20px', background: '#25D366', color: '#fff', padding: '15px 30px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' as const };
const overlay = { position: 'fixed' as const, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const modal = { background: '#111', padding: '50px', borderRadius: '25px', border: '1px solid #d4af37', textAlign: 'center' as const };
