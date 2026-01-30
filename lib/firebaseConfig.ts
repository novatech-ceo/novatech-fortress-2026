// هندسة NOVATECH لتأمين المخزن الرقمي
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where } from "firebase/firestore";

const firebaseConfig = {
  // هنا سنضع مفاتيحك الخاصة بـ Firebase لاحقاً
  apiKey: "YOUR_API_KEY",
  authDomain: "novatech-iraq.firebaseapp.com",
  projectId: "novatech-iraq",
};

// تشغيل محرك القاعدة البياناتي
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// دالة ذكية لجلب البطاقات حسب الفئة (PUBG, Razer, iTunes)
export const getDigitalCards = async (category: string) => {
  const cardsRef = collection(db, "inventory");
  const q = query(cardsRef, where("category", "==", category), where("status", "==", "available"));
  // هنا سيعمل الذكاء الاصطناعي على مطابقة الطلب مع المخزون
  return q;
};