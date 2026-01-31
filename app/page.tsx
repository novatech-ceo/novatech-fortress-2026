"use client";
import React, { useState, useEffect } from 'react';

export default function NovatechUltimateSystem() {
  // --- الأنظمة الأمنية والإدارية ---
  const [isLocked, setIsLocked] = useState(true);
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [merchantName, setMerchantName] = useState('كاظم حسن جاسم');
  const [merchantPhone, setMerchantPhone] = useState('07813105317');
  const [orderStatus, setOrderStatus] = useState(false);

  // --- نظام الدخول الآمن ---
  const handleLogin = () => {
    if (password === "NOVA2026") { // كلمة السر الخاصة بك
      setIsLocked(false);
      setIsAdmin(true);
    } else {
      alert("⚠️ الوصول مرفوض. رمز السيادة غير صحيح.");
    }
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', direction: 'rtl', fontFamily: 'Tahoma, Arial' }}>
      
      {/* 1. واجهة البصمة والباركود (قفل النظام) */}
      {isLocked && (
        <div style={overlay}>
          <div style={loginBox}>
            <div style={barcodePlaceholder}>|||| || ||||| ||| | ||</div>
            <h2 style={{color:'#d4af37'}}>نظام NOVATECH السيادي</h2>
            <p style={{fontSize:'0.8rem', color:'#666'}}>أدخل رمز القائد للوصول إلى غرفة العمليات</p>
            <input 
              type="password" 
              placeholder="رمز الدخول..." 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={loginInput} 
            />
            <button onClick={handleLogin} style={goldBtn}>تفعيل البصمة الرقمية 🔒</button>
            <div style={{marginTop:'20px', fontSize:'0.7rem', color:'#444'}}>ID: 16945629 | UK REGISTERED</div>
          </div>
        </div>
      )}

      {/* 2. شريط القيادة العلوي (بعد الدخول) */}
      {!isLocked && (
        <div style={topBar}>
          <span>🛡️ القائد: {merchantName}</span>
          <span>📍 الموقع: لندن - النجف</span>
          <span onClick={() => setIsLocked(true)} style={{cursor:'pointer'}}>خروج 🚪</span>
        </div>
      )}

      <header style={headerStyle}>
        <h1 style={logoStyle}>NOVATECH</h1>
        <p style={{color:'#d4af37'}}>إدارة الإمبراطورية الرقمية الذكية</p>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        
        {/* 3. لوحة إدارة التاجر (تغيير البيانات) */}
        {isAdmin && (
          <div style={adminSection}>
            <h3 style={{color:'#d4af37'}}>⚙️ إعدادات الإدارة الذكية</h3>
            <div style={{display:'flex', gap:'15px', flexWrap:'wrap'}}>
              <input value={merchantName} onChange={(e)=>setMerchantName(e.target.value)} style={inputSmall} placeholder="اسم التاجر" />
              <input value={merchantPhone} onChange={(e)=>setMerchantPhone(e.target.value)} style={inputSmall} placeholder="رقم الواتساب" />
              <div style={statBox}>💰 الأرباح: $1,250</div>
            </div>
          </div>
        )}

        {/* 4. شبكة الخدمات المتقدمة */}
        <div style={grid}>
          <ProductCard title="Apple ID Golden" price="100$" desc="حسابات ملكية نادرة" onOrder={() => setOrderStatus(true)} />
          <ProductCard title="VIP Numbers" price="50$" desc="أرقام دولية مميزة" onOrder={() => setOrderStatus(true)} />
          <ProductCard title="شحن ماستر كارد" price="عمولة 1%" desc="تحويل فوري للبطاقات العالمية" onOrder={() => setOrderStatus(true)} />
        </div>

        {/* 5. بوابة الدفع المدمجة (زين كاش / ماستر كارد) */}
        {orderStatus && (
          <div style={overlay}>
            <div style={modal}>
              <h2 style={{color:'#d4af37'}}>بوابة الدفع الرقمية</h2>
              <p>رقم التحويل (زين كاش): {merchantPhone}</p>
              <div style={paymentMethods}>
                <div style={method}>💳 ماستر كارد</div>
                <div style={method}>📱 زين كاش</div>
              </div>
              <button onClick={() => setOrderStatus(false)} style={goldBtn}>تأكيد الدفع وإرسال الوصل</button>
            </div>
          </div>
        )}
      </main>

      {/* 6. بوت نوفا 3000 (ثابت وذكي) */}
      <div style={chatBotContainer}>
        <div style={chatHeader}>🤖 مساعد نوفا 3000 النشط</div>
        <div style={chatBody}>
          <p>أهلاً بك يا قائد {merchantName}. النظام يعمل بكفاءة 100%. هل تريد تقرير الأرباح؟</p>
        </div>
        <input type="text" placeholder="تحدث مع النظام..." style={chatInput} />
      </div>

      {/* 7. زر الواتساب (مربوط برقمك مباشرة) */}
      <a href={`https://wa.me/964${merchantPhone.substring(1)}`} target="_blank" style={whatsappBtn}>
        💬 واتساب القائد
      </a>
    </div>
  );
}

// --- استايلات التصميم الفخم ---
const overlay = { position: 'fixed' as const, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.98)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 };
const loginBox = { backgroundColor: '#0a0a0a', padding: '50px', borderRadius: '30px', border: '2px solid #d4af37', textAlign: 'center' as const, width: '400px' };
const loginInput = { width: '100%', padding: '15px', margin: '20px 0', backgroundColor: '#000', border: '1px solid #333', color: '#d4af37', textAlign: 'center' as const, fontSize: '1.2rem' };
const barcodePlaceholder = { letterSpacing: '5px', color: '#d4af37', marginBottom: '10px' };
const goldBtn = { backgroundColor: '#d4af37', color: '#000', padding: '15px 30px', border: 'none', borderRadius: '10px', fontWeight: 'bold' as const, cursor: 'pointer', width: '100%' };
const topBar = { backgroundColor: '#d4af37', color: '#000', padding: '10px 30px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' as const };
const headerStyle = { textAlign: 'center' as const, padding: '60px 0' };
const logoStyle = { fontSize: '4rem', letterSpacing: '15px', margin: 0 };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', padding: '20px' };
const adminSection = { background: '#0a0a0a', padding: '30px', borderRadius: '20px', border: '1px solid #d4af37', marginBottom: '30px' };
const inputSmall = { background: '#111', border: '1px solid #333', color: '#fff', padding: '10px', borderRadius: '5px', flex: 1 };
const statBox = { background: '#d4af37', color: '#000', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold' as const };
const chatBotContainer = { position: 'fixed' as const, bottom: '20px', left: '20px', width: '300px', backgroundColor: '#0a0a0a', border: '1px solid #d4af37', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 0 20px rgba(212,175,55,0.3)' };
const chatHeader = { background: '#d4af37', color: '#000', padding: '10px', fontWeight: 'bold' as const, textAlign: 'center' as const };
const chatBody = { padding: '15px', height: '100px', overflowY: 'auto' as const, fontSize: '0.85rem' };
const chatInput = { width: '100%', background: '#000', border: 'none', borderTop: '1px solid #333', padding: '10px', color: '#fff' };
const whatsappBtn = { position: 'fixed' as const, bottom: '20px', right: '20px', background: '#25D366', color: '#fff', padding: '15px 25px', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' as const };
const modal = { background: '#0a0a0a', padding: '40px', borderRadius: '20px', border: '2px solid #d4af37', width: '450px', textAlign: 'center' as const };
const paymentMethods = { display: 'flex', gap: '10px', margin: '20px 0' };
const method = { flex: 1, padding: '15px', background: '#111', border: '1px solid #333', borderRadius: '10px' };

function ProductCard({title, price, desc, onOrder}: any) {
  return (
    <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', padding: '40px', borderRadius: '30px', textAlign: 'center' as const }}>
      <h3>{title}</h3>
      <p style={{color:'#666'}}>{desc}</p>
      <div style={{color:'#d4af37', fontSize:'2rem', margin:'20px 0'}}>{price}</div>
      <button onClick={onOrder} style={goldBtn}>اطلب الآن</button>
    </div>
  );
}
