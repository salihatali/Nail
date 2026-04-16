import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      <header className="header">
        <h1>Sudenaz Nail Studio</h1>
        <p>Profesyonel Protez Tırnak</p>
        <a href="https://instagram.com/sudenaz.nailss" className="btn">
          Randevu Al
        </a>
      </header>

      <section className="services">
        <h2>Hizmetler</h2>
        <div className="card">Protez Tırnak</div>
        <div className="card">Jel Tırnak</div>
        <div className="card">Nail Art</div>
      </section>

      <section className="gallery">
        <h2>Çalışmalar</h2>
        <div className="images">
          <Image src="/img1.jpg" width={150} height={150} alt="tırnak" />
          <Image src="/img2.jpg" width={150} height={150} alt="tırnak" />
          <Image src="/img3.jpg" width={150} height={150} alt="tırnak" />
        </div>
      </section>

      <section className="price">
        <h2>Fiyatlar</h2>
        <p>Protez Tırnak: 700₺</p>
        <p>Jel Güçlendirme: 600₺</p>
        <p>Kalıcı Oje: 500₺</p>
        <hr />
        <p>Protez Tırnak Çıkartmak: 350₺</p>
        <p>Kalıcı Oje Çıkartmak: 300₺</p>
        <p>Jel Bakımı: 600₺</p>

        <div className="nailart">
          <div>Nail Art: 15 - 30₺</div>
          <small>(Desene göre değişiklik olabilir)</small>
        </div>
      </section>

      <footer className="footer">
        <h2>İletişim</h2>
        <p>
          Instagram:{" "}
          <a href="https://instagram.com/sudenaz.nailss" target="_blank">
            @sudenaz.nailss
          </a>
        </p>

        <p className="copy">
          © 2026 Sudenaz Nail Studio. Tüm hakları saklıdır.
        </p>
      </footer>
    </>
  );
}