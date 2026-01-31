"use client";
import React, { useState, useEffect } from 'react';

export default function NovatechEmpireLive() {
  // --- حالات النظام ---
  const [view, setView] = useState('user'); 
  const [orders, setOrders] = useState([]); // قاعدة بيانات الطلبات
  const [orderStep, setOrderStep] = useState('none');
  const [selectedItem, setSelectedItem] = useState('');
  const [agentData, setAgentData] = useState({ name: '', phone: '', balance: 0 });
  const [showAdmin, setShowAdmin] = useState(false);

  // --- محرك الطلبات (Logic) ---
  const handleFinalOrder = (paymentMethod) => {
    const newOrder = {
      id: "NV-" + Math.floor(Math.random() * 9000),
      item: selectedItem,
      method: paymentMethod,
      time: new Date().toLocaleTimeString('ar-IQ'),
      status: 'بانتظار التأكيد'
    };
    setOrders([newOrder, ...orders]);
    setOrderStep('processing');
    
    // محاكاة إرسال تنبيه للقائد
    console.log("تنبيه للقائد كاظم: طلب جديد قادم!");
  };

  return (
    <div style={s.container}>
      {/* شريط السيادة */}
      <div style={s.trustBar} onClick={() => setShowAdmin(!showAdmin)}>
        <span>NOVATECH FOUNDER HOLDINGS LTD | UK Reg: 16945629</span>
        <span>{showAdmin ? "📍 وضع القائد نشط" : "🛡️ نظام مؤمن بذكاء نوفا"}</span>
      </div>

      <header style={s.header}>
        <h1 style={s.logo}>NOVATECH</h1>
        <p style={s.tagline}>إدارة الأصول الرقمية العالمية - مجهزة للقائد كاظم</p>
      </header>

      <main style={s.main}>
        {/* بوابة الإدارة - تظهر فقط عند الحاجة */}
        {showAdmin && (
          <div style={s.adminPanel}>
            <h2 style={{color: '#d4af37'}}>📊 لوحة تحكم القائد (الطلبات الواردة)</h2>
            {orders.length === 0 ? <p>لا توجد طلبات حالياً..</p> : (
              <table style={s.table}>
                <thead>
                  <tr>
                    <th>المعرف</th>
                    <th>المنتج</th>
                    <th>وسيلة الدفع</th>
                    <th>الوقت</th>
                    <th>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(o => (
                    <tr key={o.id}>
                      <td>{o.id}</td>
                      <td>{o.item}</td>
                      <td>{o.method}</td>
                      <td>{o.time}</td>
                      <td style={{color: '#0f0'}}>{o.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* المتجر الملكي */}
        {view === 'user' && (
          <div style={s.grid}>
            <div style={s.card}>
              <h3>Apple ID Golden</h3>
              <div style={s.priceTag}>$10 - $100</div>
              <button onClick={() => {setSelectedItem('Apple ID Golden'); setOrderStep('input');}} style={s.buyBtn}>اقتنِ الفخامة</button>
            </div>
            <div style={s.card}>
              <h3>VIP Numbers</h3>
              <div style={s.priceTag}>$5 - $50</div>
              <button onClick={() => {setSelectedItem('VIP Numbers'); setOrderStep('input');}} style={s.buyBtn}>حجز رقم</button>
            </div>
          </div>
        )}

        {/* نافذة الدفع */}
        {orderStep === 'input' && (
          <div style={s.overlay}>
            <div style={s.modal}>
              <h2 style={{color: '#d4af37'}}>تأكيد طلب {selectedItem}</h2>
              <div style={s.paymentGrid}>
                <button onClick={() => handleFinalOrder('Zain Cash')} style={s.payBtn}>📱 زين كاش</button>
                <button onClick={() => handleFinalOrder('MasterCard')} style={s.payBtn}>💳 ماستركارد</button>
                <button onClick={() => setOrderStep('none')} style={s.closeBtn}>إلغاء</button>
              </div>
            </div>
          </div>
        )}

        {/* معالجة الذكاء الاصطناعي */}
        {orderStep === 'processing' && (
          <div style={s.overlay}>
            <div style={s.modal}>
              <div style={s.spinner}></div>
              <h3>جاري إرسال الطلب لغرفة القيادة...</h3>
              <button onClick={() => setOrderStep('none')} style={s.buyBtn}>موافق</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const s = {
  container: { backgroundColor: '#020202', color: '#fff', minHeight: '100vh', direction: 'rtl' as const, fontFamily: 'Tahoma' },
  trustBar: { backgroundColor: '#d4af37', color: '#000', padding: '10px', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' },
  header: { textAlign: 'center' as const, padding: '50px 20px' },
  logo: { fontSize: '3rem', letterSpacing: '8px', color: '#d4af37', margin: 0 },
  tagline: { color: '#888' },
  main: { maxWidth: '1000px', margin: '0 auto', padding: '20px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' },
  card: { backgroundColor: '#0a0a0a', border: '1px solid #222', padding: '30px', borderRadius: '15px', textAlign: 'center' as const },
  priceTag: { fontSize: '1.5rem', color: '#d4af37', margin: '15px 0' },
  buyBtn: { backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '12px 25px', borderRadius: '8px', fontWeight: 'bold' as const, cursor: 'pointer' },
  overlay: { position: 'fixed' as const, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center' },
  modal: { backgroundColor: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #d4af37', textAlign: 'center' as const, width: '400px' },
  paymentGrid: { display: 'flex', flexDirection: 'column' as const, gap: '10px', marginTop: '20px' },
  payBtn: { padding: '15px', backgroundColor: '#000', color: '#fff', border: '1px solid #333', borderRadius: '10px', cursor: 'pointer' },
  closeBtn: { marginTop: '10px', backgroundColor: 'transparent', color: '#ff4444', border: 'none', cursor: 'pointer' },
  adminPanel: { backgroundColor: '#0a0a0a', padding: '20px', borderRadius: '15px', border: '1px solid #d4af37', marginBottom: '30px' },
  table: { width: '100%', borderCollapse: 'collapse' as const, marginTop: '20px', textAlign: 'right' as const },
  spinner: { width: '40px', height: '40px', border: '4px solid #d4af37', borderTop: '4px solid transparent', borderRadius: '50%', margin: '0 auto 20px', animation: 'spin 1s linear infinite' }
};