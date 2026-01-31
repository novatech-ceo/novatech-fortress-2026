"use client";
import React, { useState } from 'react';

export default function NovatechFinalEmpire() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [orderStatus, setOrderStatus] = useState(false);

  return (
    <div style={{ backgroundColor: '#020202', color: '#fff', minHeight: '100vh', direction: 'rtl', fontFamily: 'Arial' }}>
      
      {/* سقف السيطرة */}
      <div style={{ background: '#d4af37', color: '#000', padding: '12px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
        <span onClick={() => setIsAdmin(!isAdmin)} style={{cursor:'pointer'}}>🛡️ NOVATECH FOUNDER | القائد كاظم جاسم</span>
        <span>🌍 المركز الرئيسي: لندن - النجف</span>
      </div>

      <header style={{ textAlign: 'center', padding: '50px 0' }}>
        <h1 style={{ color: '#d4af37', fontSize: '3.5rem', margin: 0 }}>NOVATECH</h1>
        <p style={{ color: '#888' }}>إدارة العمليات الرقمية الشاملة 2026</p>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
        
        {/* لوحة تحكم القائد الذكية */}
        {isAdmin && (
          <div style={{ border: '2px solid #d4af37', padding: '20px', borderRadius: '15px', background: '#0a0a0a', marginBottom: '30px' }}>
            <h2 style={{color:'#d4af37'}}>📊 مركز الإدارة والمال</h2>
            <p>رقم زين كاش المعتمد: <input type="text" placeholder="07813105317" style={{background:'#000', color:'#fff', border:'1px solid #333'}} /></p>
            <div style={{display:'flex', gap:'10px'}}>
              <div style={{background:'#111', padding:'15px', borderRadius:'10px', flex:1}}>الطلبات النشطة: 12</div>
              <div style={{background:'#111', padding:'15px', borderRadius:'10px', flex:1}}>أرباح اليوم: $450</div>
            </div>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {/* كرت الخدمة 1 */}
          <div style={cardStyle}>
            <h3>Apple ID Golden</h3>
            <div style={{color:'#d4af37', fontSize:'1.5rem', margin:'10px 0'}}>$10 - $100</div>
            <button onClick={() => setOrderStatus(true)} style={btnStyle}>شراء وتسليم فوري</button>
          </div>
          
          {/* كرت الخدمة 2 */}
          <div style={cardStyle}>
            <h3>VIP Numbers</h3>
            <div style={{color:'#d4af37', fontSize:'1.5rem', margin:'10px 0'}}>$5 - $50</div>
            <button onClick={() => setOrderStatus(true)} style={btnStyle}>حجز الرقم الدولي</button>
          </div>

          {/* كرت الخدمة 3 */}
          <div style={cardStyle}>
            <h3>بوابة شحن UC / PUBG</h3>
            <div style={{color:'#d4af37', fontSize:'1.5rem', margin:'10px 0'}}>أسعار الوكلاء</div>
            <button onClick={() => setOrderStatus(true)} style={btnStyle}>فتح البوابة</button>
          </div>
        </div>

        {/* نافذة التأكيد */}
        {orderStatus && (
          <div style={overlay}>
            <div style={modal}>
              <h2 style={{color:'#d4af37'}}>تم استلام طلبك بنجاح</h2>
              <p>يرجى تحويل المبلغ عبر زين كاش وإرسال الوصل للمدير.</p>
              <button onClick={() => setOrderStatus(false)} style={btnStyle}>فهمت</button>
            </div>
          </div>
        )}
      </main>

      {/* زر الواتساب العائم - يربطك بالزبائن فوراً */}
      <a href="https://wa.me/9647813105317" target="_blank" style={whatsappBtn}>
        💬 تحدث مع القائد (الدعم الفني)
      </a>

      <footer style={{textAlign:'center', padding:'50px', color:'#444'}}>
        © 2026 NOVATECH FOUNDER HOLDINGS LTD | Registered in England
      </footer>
    </div>
  );
}

const cardStyle = { background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '30px', borderRadius: '20px', textAlign: 'center' as const };
const btnStyle = { background: '#d4af37', color: '#000', border: 'none', padding: '12px 20px', borderRadius: '10px', fontWeight: 'bold' as const, cursor: 'pointer', width: '100%' };
const whatsappBtn = { position: 'fixed' as const, bottom: '20px', right: '20px', background: '#25D366', color: '#fff', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold' as const, textDecoration: 'none', boxShadow: '0 5px 15px rgba(0,0,0,0.3)' };
const overlay = { position: 'fixed' as const, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modal = { backgroundColor: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #d4af37', textAlign: 'center' as const };
