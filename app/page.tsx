"use client";
import React, { useState, useEffect } from 'react';

export default function NovatechGlobalEmpire() {
  // --- حالات النظام (System States) ---
  const [view, setView] = useState('user'); 
  const [orderStep, setOrderStep] = useState('none');
  const [agentData, setAgentData] = useState({ name: '', phone: '', type: 0 });
  const [selectedItem, setSelectedItem] = useState('');
  const [aiStatus, setAiStatus] = useState('نظام نوفا 3000 نشط.. بانتظار أوامرك قائد كاظم.');
  const [isSecure, setIsSecure] = useState(true);

  // --- نظام الدفاع الذاتي (Security Guard) ---
  const triggerEmergency = () => {
    setIsSecure(false);
    setAiStatus('⚠️ محاولة اختراق! جاري تجميد النظام والاتصال بالقائد كاظم فوراً...');
    // هنا يتم استدعاء سكريبت الاتصال الهاتفي الحقيقي
  };

  return (
    <div style={containerStyle}>
      {/* شريط السيادة البريطاني */}
      <div style={trustBar}>
        <span>NOVATECH FOUNDER HOLDINGS LTD | UK Reg: 16945629</span>
        <span>📍 London - Najaf | {isSecure ? '🛡️ System Secured' : '⚠️ Emergency Mode'}</span>
      </div>

      <header style={headerStyle}>
        <h1 style={logoStyle}>NOVATECH</h1>
        <p style={tagline}>التكنولوجيا تقودها الرؤية.. من عام 3000 إلى قلب العراق</p>
        
        {/* بوت نوفا المتحدث (ذكاء اصطناعي تفاعلي) */}
        <div style={aiChatBox}>
          <div style={aiIcon}>🤖</div>
          <div style={aiTextArea}>
             <p style={aiName}>نوفا (المساعد الذكي):</p>
             <p>{aiStatus}</p>
          </div>
        </div>

        <div style={toggleContainer}>
          <button onClick={() => setView('user')} style={view === 'user' ? activeBtn : inactiveBtn}>بوابة الأفراد</button>
          <button onClick={() => setView('agent_reg')} style={view !== 'user' ? activeBtn : inactiveBtn}>بوابة الوكلاء (Locked 🔐)</button>
        </div>
      </header>

      <main style={mainContent}>
        {/* 1. المتجر الملكي (الخانات الخمس كاملة) */}
        {view === 'user' && (
          <>
            <h2 style={sectionTitle}>💎 المتجر الملكي (Premium Assets)</h2>
            <div style={grid}>
              <div style={card}>
                <h3>Apple ID Golden</h3>
                <p>حسابات بمعرفات ثلاثية نادرة</p>
                <div style={priceTag}>50$ - 100$</div>
                <button onClick={() => {setSelectedItem('Apple ID'); setOrderStep('input');}} style={buyBtn}>اقتنِ الفخامة</button>
              </div>
              <div style={card}>
                <h3>VIP Numbers</h3>
                <p>أرقام بريطانية/دولية مميزة</p>
                <div style={priceTag}>50$</div>
                <button onClick={() => {setSelectedItem('VIP Numbers'); setOrderStep('input');}} style={buyBtn}>حجز الرقم</button>
              </div>
            </div>

            <h2 style={sectionTitle}>🎮 شحن الألعاب والتطبيقات</h2>
            <div style={grid}>
              <div style={card}>
                <h3>PUBG Mobile</h3>
                <p>شحن فوري مباشر (UC)</p>
                <div style={priceTag}>أسعار تنافسية</div>
                <button onClick={() => {setSelectedItem('PUBG'); setOrderStep('input');}} style={buyBtn}>شحن الآن</button>
              </div>
              <div style={card}>
                <h3>TikTok / Likee</h3>
                <p>تسليم آلي للرصيد</p>
                <div style={priceTag}>تسليم فوري</div>
                <button onClick={() => {setSelectedItem('TikTok'); setOrderStep('input');}} style={buyBtn}>اشحن الآن</button>
              </div>
              <div style={card}>
                <h3>iTunes / Google</h3>
                <p>بطاقات عالمية وأكواد</p>
                <div style={priceTag}>أكواد فورية</div>
                <button onClick={() => {setSelectedItem('Cards'); setOrderStep('input');}} style={buyBtn}>اطلب بطاقتك</button>
              </div>
            </div>
          </>
        )}

        {/* 2. نظام تسجيل الوكيل المتطور (شامل رقم الموبايل) */}
        {view === 'agent_reg' && (
          <div style={agentForm}>
            <h2 style={{color: '#d4af37'}}>تسجيل وكيل معتمد</h2>
            <div style={inputGroup}>
              <input placeholder="اسم المحل" style={input} onChange={(e)=>setAgentData({...agentData, name: e.target.value})} />
              <input placeholder="رقم الموبايل (للتنبيهات)" style={input} onChange={(e)=>setAgentData({...agentData, phone: e.target.value})} />
              <p>اختر فئة الاشتراك لتفعيل ميزات الباركود:</p>
              <div style={btnRow}>
                <button onClick={() => {setAgentData({...agentData, type: 1000}); setView('dashboard');}} style={goldBtn}>مميز (1000$)</button>
                <button onClick={() => {setAgentData({...agentData, type: 200}); setView('dashboard');}} style={goldBtn}>عادي (200$)</button>
              </div>
            </div>
          </div>
        )}

        {/* 3. لوحة تحكم الوكيل (تخصيص الاسم + الباركود) */}
        {view === 'dashboard' && (
          <div style={dashboard}>
             <h2 style={{color: '#d4af37'}}>مركز القيادة: {agentData.name}</h2>
             <div style={dashboardStats}>
                <div style={statItem}>الحالة: متصل ✅</div>
                <div style={statItem}>الفئة: {agentData.type}$</div>
             </div>
             <div style={idCard}>
                <p style={{fontWeight: 'bold'}}>{agentData.name}</p>
                <div style={barcodePlaceholder}>|||| ||| |||| || ||| <br/> [QR-3000-ACTIVE]</div>
                <p style={{fontSize: '0.6rem'}}>هذا الوكيل معتمد من قبل شركة نوفا</p>
             </div>
             <button onClick={() => setView('user')} style={exitBtn}>تسجيل خروج</button>
          </div>
        )}

        {/* 4. نافذة الدفع الشاملة (Zain, Asia, Master) */}
        {orderStep === 'input' && (
          <div style={overlay}>
            <div style={modal}>
              <h2 style={{color: '#d4af37'}}>تأكيد طلب {selectedItem}</h2>
              <input placeholder="أدخل الآيدي (ID) المطلوب" style={input} />
              <div style={paymentOptions}>
                 <button style={payBtn} onClick={()=>setOrderStep('processing')}>💳 ماستركارد (دفع دولي)</button>
                 <button style={payBtn} onClick={()=>setOrderStep('processing')}>📱 زين كاش (ZainCash)</button>
                 <button style={payBtn} onClick={()=>setOrderStep('processing')}>📲 آسيا باي (AsiaPay)</button>
              </div>
              <button onClick={()=>setOrderStep('none')} style={exitBtn}>إلغاء</button>
            </div>
          </div>
        )}

        {/* 5. معالجة الذكاء الاصطناعي للدفع */}
        {orderStep === 'processing' && (
          <div style={overlay}>
             <div style={modal}>
                <div style={spinner}></div>
                <h3>جاري المعالجة بذكاء نوفا...</h3>
                <p>يتم الآن التحقق من عملية الدفع وإرسال الكود.</p>
                <button onClick={()=>setOrderStep('none')} style={goldBtn}>إغلاق</button>
             </div>
          </div>
        )}
      </main>

      <footer style={footer}>
        <div style={footerGrid}>
          <div><h4>Legal HQ</h4><p>321-323 High Road, Essex, RM6 6AX, UK</p></div>
          <div><h4>Contact</h4><p>ceo@novaapp.tech | +44 7482 790489</p></div>
        </div>
        <p style={{marginTop: '30px', opacity: 0.5}}>© 2026 NOVATECH - القيادة للمهندس كاظم حسن جاسم</p>
      </footer>
    </div>
  );
}

// --- التنسيقات الهندسية (Styles) ---
const containerStyle = { backgroundColor: '#020202', color: '#fff', minHeight: '100vh', direction: 'rtl' as const, fontFamily: 'Arial' };
const trustBar = { backgroundColor: '#d4af37', color: '#000', padding: '10px 20px', fontSize: '0.8rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' as const };
const headerStyle = { textAlign: 'center' as const, padding: '40px' };
const logoStyle = { fontSize: '4rem', letterSpacing: '10px', fontWeight: '900' as const, textShadow: '0 0 10px #d4af37' };
const tagline = { color: '#d4af37', fontSize: '1.2rem', marginTop: '10px' };
const aiChatBox = { backgroundColor: '#0a0a0a', border: '1px solid #d4af37', padding: '20px', borderRadius: '15px', display: 'inline-flex', alignItems: 'center', marginTop: '30px', textAlign: 'right' as const };
const aiIcon = { fontSize: '2.5rem', marginLeft: '20px' };
const aiTextArea = { display: 'flex', flexDirection: 'column' as const };
const aiName = { color: '#d4af37', fontWeight: 'bold' as const, fontSize: '0.8rem', marginBottom: '5px' };
const toggleContainer = { marginTop: '40px' };
const activeBtn = { backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '15px 40px', fontWeight: 'bold' as const, borderRadius: '10px 0 0 10px', cursor: 'pointer' };
const inactiveBtn = { backgroundColor: '#111', color: '#fff', border: '1px solid #333', padding: '15px 40px', borderRadius: '0 10px 10px 0', cursor: 'pointer' };
const mainContent = { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' };
const sectionTitle = { borderRight: '5px solid #d4af37', paddingRight: '15px', marginBottom: '30px' };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' };
const card = { backgroundColor: '#0a0a0a', border: '1px solid #d4af37', padding: '40px 20px', borderRadius: '20px', textAlign: 'center' as const };
const priceTag = { fontSize: '1.5rem', color: '#d4af37', margin: '20px 0', fontWeight: 'bold' as const };
const buyBtn = { backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: 'bold' as const, width: '100%', cursor: 'pointer' };
const agentForm = { backgroundColor: '#0a0a0a', padding: '60px', borderRadius: '30px', border: '2px dashed #d4af37', textAlign: 'center' as const };
const inputGroup = { display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '20px' };
const input = { width: '100%', maxWidth: '400px', padding: '15px', borderRadius: '10px', backgroundColor: '#111', border: '1px solid #333', color: '#fff', textAlign: 'center' as const };
const btnRow = { display: 'flex', gap: '20px' };
const goldBtn = { backgroundColor: '#d4af37', color: '#000', border: 'none', padding: '15px 30px', borderRadius: '10px', fontWeight: 'bold' as const, cursor: 'pointer' };
const dashboard = { backgroundColor: '#0a0a0a', padding: '40px', borderRadius: '25px', border: '1px solid #d4af37', textAlign: 'center' as const };
const dashboardStats = { display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '30px' };
const statItem = { backgroundColor: '#111', padding: '15px 30px', borderRadius: '10px', border: '1px solid #222' };
const idCard = { backgroundColor: '#fff', color: '#000', padding: '30px', borderRadius: '15px', width: '300px', margin: '0 auto 30px', border: '4px solid #d4af37' };
const barcodePlaceholder = { margin: '20px 0', letterSpacing: '5px', fontWeight: 'bold' as const };
const exitBtn = { backgroundColor: 'transparent', color: '#ff4444', border: 'none', cursor: 'pointer', fontWeight: 'bold' as const };
const overlay = { position: 'fixed' as const, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modal = { backgroundColor: '#0a0a0a', padding: '50px', borderRadius: '30px', border: '1px solid #d4af37', textAlign: 'center' as const, width: '90%', maxWidth: '500px' };
const paymentOptions = { display: 'flex', flexDirection: 'column' as const, gap: '15px', margin: '30px 0' };
const payBtn = { padding: '18px', backgroundColor: '#111', color: '#fff', border: '1px solid #333', borderRadius: '12px', textAlign: 'right' as const, cursor: 'pointer' };
const spinner = { width: '50px', height: '50px', border: '5px solid #d4af37', borderTop: '5px solid transparent', borderRadius: '50%', margin: '0 auto 20px', animation: 'spin 1s linear infinite' };
const footer = { backgroundColor: '#050505', padding: '80px 20px', marginTop: '100px', borderTop: '1px solid #111', textAlign: 'center' as const };
const footerGrid = { display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' as const, gap: '40px' };
