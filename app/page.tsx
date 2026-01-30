"use client";
import React, { useState } from 'react';
import translations from '../data/translations.json';

export default function Home() {
  // هنا نجعل النظام جاهزاً لكل المحافظات كما طلبت
  // سأضع لك قائمة لاختيار المحافظة لتجربة اللهجات
  const [currentDialect, setCurrentDialect] = useState("Najaf");

  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#ffffff', 
      minHeight: '100vh', 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      direction: 'rtl' 
    }}>
      {/* رأس الصفحة - الهوية المؤسسية */}
      <header style={{ textAlign: 'center', padding: '40px 0', borderBottom: '1px solid #333' }}>
        <h1 style={{ color: '#00d1ff', fontSize: '2.5rem', marginBottom: '10px' }}>
          NOVATECH FOUNDER HOLDINGS
        </h1>
        <div style={{ background: '#1a1a1a', padding: '10px', borderRadius: '10px', display: 'inline-block' }}>
          <p style={{ fontSize: '1.4rem', color: '#ffd700' }}>
            {translations.dialects[currentDialect as keyof typeof translations.dialects]}
          </p>
        </div>
      </header>

      {/* قسم اختيار المحافظة (تجريبي للتأكد من شمولية كل العراق) */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <p>اختبر الترحيب حسب المحافظة:</p>
        <button onClick={() => setCurrentDialect("Baghdad")} style={tabStyle}>بغداد</button>
        <button onClick={() => setCurrentDialect("Basra")} style={tabStyle}>البصرة</button>
        <button onClick={() => setCurrentDialect("Najaf")} style={tabStyle}>النجف</button>
        <button onClick={() => setCurrentDialect("Erbil/Kirkuk")} style={tabStyle}>كردستان / كركوك</button>
      </div>

      {/* عرض الخدمات (البطاقات) */}
      <main style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '30px', 
        maxWidth: '1200px', 
        margin: '40px auto' 
      }}>
        {/* بطاقة PUBG */}
        <div style={cardStyle}>
          <div style={iconPlaceholder}>PUBG</div>
          <h3>شحن شدات ببجي</h3>
          <p>تسليم فوري وتلقائي 24/7</p>
          <button style={btnStyle}>شحن الآن</button>
        </div>

        {/* بطاقة Apple */}
        <div style={cardStyle}>
          <div style={iconPlaceholder}>Apple</div>
          <h3>بطاقات آيتونز</h3>
          <p>المتجر الأمريكي والخليجي</p>
          <button style={btnStyle}>شحن الآن</button>
        </div>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
        <p>© 2026 NOVATECH - جميع الحقوق محفوظة لشركة كاظِم حسن جاسم</p>
      </footer>
    </div>
  );
}

// تنسيقات سريعة (CSS-in-JS)
const cardStyle = {
  background: '#111',
  border: '1px solid #222',
  padding: '30px',
  borderRadius: '20px',
  textAlign: 'center' as const,
  transition: 'transform 0.3s'
};

const iconPlaceholder = {
  fontSize: '2rem',
  background: '#00d1ff',
  width: '60px',
  height: '60px',
  lineHeight: '60px',
  borderRadius: '50%',
  margin: '0 auto 20px',
  color: '#000',
  fontWeight: 'bold' as const
};

const btnStyle = {
  background: '#00d1ff',
  color: '#000',
  border: 'none',
  padding: '12px 25px',
  borderRadius: '8px',
  fontWeight: 'bold' as const,
  cursor: 'pointer',
  marginTop: '20px'
};

const tabStyle = {
  background: '#333',
  color: '#fff',
  border: 'none',
  padding: '8px 15px',
  margin: '5px',
  borderRadius: '5px',
  cursor: 'pointer'
};