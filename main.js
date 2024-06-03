// statement impor module
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// konfigurasi firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjxjGgc1_HHBUGoXM1kFq4aXiV--plwZE",
  authDomain: "pasarcemerlang-11fa3.firebaseapp.com",
  projectId: "pasarcemerlang-11fa3",
  storageBucket: "pasarcemerlang-11fa3.appspot.com",
  messagingSenderId: "390685080124",
  appId: "1:390685080124:web:6a69ed5fd39c3fc21da139",
};

// inisialisasi firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fungsi mengambil daftar produk dari firebase
export async function ambilDaftarProduk() {
  const refDokumen = collection(db, "produk");
  const kuery = query(refDokumen, orderBy("nama"));
  const cuplikanKuery = await getDocs(kuery);

  let hasil = [];
  cuplikanKuery.forEach((dok) => {
    hasil.push({
      id: dok.id,
      nama: dok.data().nama,
      harga: dok.data().harga,
      stok: dok.data().stok,
    });
  });
  
  return hasil;
}

// gungsi untuk memformat angka dengan pemisah ribuan pakai titik
export function formatAngka(x) { 
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
}