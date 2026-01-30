"use client";
import React, { useState } from 'react';

export default function NovatechEmpireFinal() {
  const [view, setView] = useState('user');

  return (
    <div style={containerStyle}>
      {/* شريط الثقة البريطاني */}
      <div style={trustBar}>
        <span>NOVATECH FOUNDER HOLDINGS LTD | UK Reg: 16945629</span>
        <span>📍 London - Najaf</span>
      </div>

      {/* الرأس الرئيسي الفخم */}
      <header style={headerStyle}>
        <h1 style={logoStyle}>NOVATECH</h1>
        <p style={tagline}>التكنولوجيا تقودها الرؤية.. من عام 3000 إلى قلب العراق</p>
        
        <div style={toggleContainer}>
          <button onClick={() => setView('user')} style={view === 'user' ? activeBtn : inactiveBtn}>بوابة الأفراد</button>
          <button onClick={() => setView('agent')} style={view === 'agent' ? activeBtn : inactiveBtn}>بوابة الوكلاء (Locked 🔐)</button>
        </div>
      </header>

      {/* محتوى البوابة */}
      <main style={mainContent}>
        {view === 'user' ? (
          <>
            {/* قسم المتجر الملكي */}
            <h2 style={sectionTitle}>💎 المتجر الملكي (Premium Assets)</h2>
            <div style={grid}>
              <div style={premiumCard}>
                <h3>Apple ID Golden</h3>
                <p>حسابات بمعرفات ثلاثية نادرة</p>
                <div style={priceTag}>50$ - 100$</div>
                <button style={buyBtn}>اقتنِ الفخامة</button>
              </div>
              <div style={premiumCard}>
                <h3>VIP Numbers</h3>
                <p>أرقام بريطانية/دولية مميزة دائمية</p>
                <div style={priceTag}>50$</div>
                <button style={buyBtn}>حجز الرقم</button>
              </div>
            </div>

            {/* قسم الشحن - بنفس تصميم الفخامة الملكية */}
            <h2 style={sectionTitle}>🎮 شحن الألعاب والتطبيقات</h2>
            <div style={grid}>
              {/* بطاقة الألعاب */}
              <div style={premiumCard}>
                <h3 style={engTitle}>PUBG Mobile</h3>
                <p>شحن فوري لجميع الألعاب</p>
                <div style={priceTag}>أسعار تنافسية</div>
                <button style={buyBtn}>شحن الآن</button>
              </div>

              {/* بطاقة التواصل */}
              <div style={premiumCard}>
                <h3 style={engTitle}>TikTok / Likee</h3>
                <p>شحن رصيد لجميع التطبيقات</p>
                <div style={priceTag}>تسليم آلي</div>
                <button style={buyBtn}>اشحن الآن</button>
              </div>

              {/* بطاقة المتاجر */}
              <div style={premiumCard}>
                <h3 style={engTitle}>iTunes / Google</h3>
                <p>بطاقات متنوعة وعالمية</p>
                <div style={priceTag}>أكواد فورية</div>
                <button style={buyBtn}>اطلب بطاقتك</button>
              </div>
            </div>
          </>
        ) : (
          <div style={agentPortal}>
            <h2 style={{color: '#d4af37'}}>نظام الوكلاء المعتمدين</h2>
            <p>أقل مبلغ لإيداع المحفظة: 200$ | ميزة الطباعة باسم المحل مفعلة</p>
            <div style={formDummy}>
              <input type="text" placeholder="رقم الوكالة / إجازة المحل" style={inputStyle} />
              <button style={goldBtn}>تقديم طلب انضمام للمحاربين</button>
            </div>
          </div>
        )}
      </main>

      {/* التذييل الرسمي الصارم */}
      <footer style={footerStyle}>
        <div style={footerGrid}>
          <div>
            <h4 style={{color: '#d4af37'}}>Legal HQ</h4>
            <p>321-323 High Road, Essex, RM6 6AX, UK</p>
          </div>
          <div>
            <h4 style={{color: '#d4af37'}}>Contact</h4>
            <p>ceo@novaapp.tech | +44 7482 790489</p>
          </div>
        </div>
        <p style={{marginTop: '30px', opacity: 0.5, fontSize: '0.8rem'}}>© 2026 NOVATECH - جميع الحقوق محفوظة للرئيس التنفيذي كاظم حسن جاسم</p>
      </footer>
    </div>
  );
}

// --- Styles (The Premium Gold & Dark Theme) ---
const containerStyle = { backgroundColor: '#050505', color: '#e0e0e0', minHeight: '100vh', direction: 'rtl' as const, fontFamily: 'Arial, sans-serif' };
const trustBar = { backgroundColor: '#d4af37', color: '#000', padding: '8px 20px', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' as const };
const headerStyle = { textAlign: 'center' as const, padding: '60px 20px', background: 'linear-gradient(to bottom, #111, #050505)' };
const logoStyle = { fontSize: '3.5rem', letterSpacing: '8px', color: '#fff', margin: 0, fontWeight: '900' as const };
const tagline = { color: '#d4af37', fontSize: '1.1rem', marginTop: '10px', opacity: 0.9 };
const toggleContainer = { marginTop: '40px' };
const activeBtn = { backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '12px 35px', cursor: 'pointer', fontWeight: 'bold' as const, borderRadius: '8px 0 0 8px' };
const inactiveBtn = { backgroundColor: '#1a1a1a', color: '#fff', border: '1px solid #333', padding: '12px 35px', cursor: 'pointer', borderRadius: '0 8px 8px 0' };
const mainContent = { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' };
const sectionTitle = { borderRight: '5px solid #d4af37', paddingRight: '15px', marginBottom: '35px', fontSize: '1.5rem' };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' };

// البطاقة الموحدة (Premium Card)
const premiumCard = { 
  backgroundColor: '#0f0f0f', 
  border: '1px solid #d4af37', 
  padding: '40px 20px', 
  borderRadius: '20px', 
  textAlign: 'center' as const, 
  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
  transition: '0.3s'
};

const engTitle = { fontSize: '1.6rem', color: '#fff', marginBottom: '10px' };
const priceTag = { fontSize: '1.4rem', color: '#d4af37', margin: '20px 0', fontWeight: 'bold' as const };
const buyBtn = { backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '12px 30px', borderRadius: '8px', fontWeight: 'bold' as const, cursor: 'pointer', fontSize: '1rem' };

const agentPortal = { backgroundColor: '#0f0f0f', padding: '60px 20px', borderRadius: '25px', textAlign: 'center' as const, border: '2px dashed #d4af37' };
const formDummy = { marginTop: '30px' };
const inputStyle = { padding: '15px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1a1a1a', color: '#fff', width: '280px', marginBottom: '15px', textAlign: 'center' as const };
const goldBtn = { backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '15px 40px', borderRadius: '8px', fontWeight: 'bold' as const, cursor: 'pointer', width: '280px' };

const footerStyle = { backgroundColor: '#0a0a0a', padding: '60px 20px', marginTop: '100px', borderTop: '1px solid #1a1a1a' };
const footerGrid = { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' as const, gap: '30px', textAlign: 'center' as const };