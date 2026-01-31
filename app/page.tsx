"use client";
import React, { useState } from 'react';

export default function NovatechEmpireLive() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [orderStep, setOrderStep] = useState('none');
  const [selectedItem, setSelectedItem] = useState('');
  const [orders, setOrders] = useState([{id: 'NV-001', item: 'مثال: Apple ID', status: 'نشط'}]);

  const handleOrder = (item: string) => {
    setSelectedItem(item);
    setOrderStep('input');
    setOrders([{id: 'NV-'+Math.floor(Math.random()*900), item: item, status: 'قيد المعالجة'}, ...orders]);
  };

  return (
    <div style={{ backgroundColor: '#020202', color: '#fff', minHeight: '100vh', direction: 'rtl', fontFamily: 'Arial' }}>
      {/* الشريط الذهبي - اضغط هنا لتظهر لوحة التحكم */}
      <div onClick={() => setShowAdmin(!showAdmin)} style={{ backgroundColor: '#d4af37', color: '#000', padding: '10px', textAlign: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
        NOVATECH FOUNDER HOLDINGS LTD | اضغط هنا للدخول للوحة القيادة 🛡️
      </div>

      <header style={{ textAlign: 'center', padding: '40px' }}>
        <h1 style={{ color: '#d4af37', fontSize: '3rem', margin: 0 }}>NOVATECH 2026</h1>
        <p style={{ color: '#888' }}>إدارة الأصول الرقمية - بإشراف القائد كاظم حسن جاسم</p>
      </header>

      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        {/* لوحة تحكم القائد - تظهر وتختفي عند الضغط على الشريط العلوي */}
        {showAdmin && (
          <div style={{ border: '2px solid #d4af37', padding: '20px', borderRadius: '15px', marginBottom: '30px', backgroundColor: '#0a0a0a' }}>
            <h2 style={{ color: '#d4af37' }}>📊 لوحة تحكم القائد (الطلبات الحية)</h2>
            <ul>
              {orders.map(o => <li key={o.id}>📦 {o.item} - {o.id} - <span style={{color: '#0f0'}}>{o.status}</span></li>)}
            </ul>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '15px' }}>
            <h3>Apple ID Golden</h3>
            <p style={{ color: '#d4af37', fontSize: '1.5rem' }}>$10 - $100</p>
            <button onClick={() => handleOrder('Apple ID Golden')} style={{ backgroundColor: '#d4af37', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>اقتنِ الفخامة</button>
          </div>

          <div style={{ border: '1px solid #222', padding: '20px', textAlign: 'center', borderRadius: '15px' }}>
            <h3>VIP Numbers</h3>
            <p style={{ color: '#d4af37', fontSize: '1.5rem' }}>$5 - $50</p>
            <button onClick={() => handleOrder('VIP Numbers')} style={{ backgroundColor: '#d4af37', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>حجز الرقم</button>
          </div>
        </div>

        {orderStep === 'input' && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ border: '1px solid #d4af37', padding: '40px', borderRadius: '20px', backgroundColor: '#111', textAlign: 'center' }}>
              <h2 style={{ color: '#d4af37' }}>تم إرسال طلب {selectedItem} بنجاح!</h2>
              <p>سيظهر الطلب الآن في لوحة تحكم القائد.</p>
              <button onClick={() => setOrderStep('none')} style={{ backgroundColor: '#d4af37', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>إغلاق</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}