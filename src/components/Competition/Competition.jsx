import { Link } from "react-router-dom";
import camera from "../../assets/images/camera.png";

const Competition = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300 my-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">
        Tovarlar haqidagi izohlar tanlovi
      </h2>
      <p className="mb-4 text-gray-700">
        Sizning telefon, planshet, televizor yoki boshqa qurilmadan foydalanish
        tajribangiz bilan o'rtoqlashing. Buning uchun bizning saytda tovar
        haqida izoh yozing, uning afzalliklari va kamchiliklari haqida batafsil
        so'zlab bering. Saytimiz foydalanuvchilariga sotib olishda to'g'ri
        tanlov qilishga ko'maklashing.
        <br />
        <br />
        Har <strong>juma kuni</strong> biz haftaning eng yaxshi izohlarini
        tanlaymiz va izoh egalariga <strong>sovg'alar</strong> beramiz! Ishtirok
        etish juda oson, buning uchun bizning saytdagi hohlagan tovar haqida
        izoh qoldirish kerak. Tovar haqida <strong>rasmga</strong> ega izohlar
        ustunlikka ega{" "}
        <Link to="/">
          <img
            src={camera}
            alt="Tovar haqida rasm"
            className="h-6 brightness-90 hover:brightness-75 inline-block"
          />
        </Link>
        . G'oliblar bizning{" "}
        <a
          href="https://t.me/kattabozoruz/"
          className="text-blue-600 hover:text-blue-800 active:text-blue-900"
        >
          telegram kanalda
        </a>{" "}
        e'lon qilinadi.
      </p>
      <p>O'z sovg'alarini olgan izoh egalari:</p>
      <ul className="mb-6 space-y-2">
        <li>
          <p>Andryushka, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            smartfon haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Diyorbek, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            smartfon haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Muxtabar, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            smartfon haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Sardor, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            smartfon haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Svetlana, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            fen haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Vyacheslav, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            smartfon haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Kamila, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            telefon haqida izoh - 50 ming so'm
          </Link>
        </li>
        <li>
          <p>Ilmir, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            televizor haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Axmadjonov26, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            smartfon haqida izoh - 100 ming so'm
          </Link>
        </li>
        <li>
          <p>Shohruh Qosimov, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            monitor haqida izoh - 50 ming so'm
          </Link>
        </li>
        <li>
          <p>Asil Mavlonov, </p>
          <Link
            to="*"
            className="text-blue-600 hover:text-blue-800 active:text-blue-900"
          >
            muzlatgich haqida izoh - 50 ming so'm
          </Link>
        </li>
        <li>
          <p>Va boshqalar.</p>
        </li>
      </ul>
      <div className="space-y-6 text-gray-700">
        <section>
          <h3 className="text-xl font-semibold text-gray-900">Qoidalar</h3>
          <p>
            Tanlovda siz qurilmani ishlatish davomida nimalarga duch
            kelganingiz, uning ijobiy va salbiy tomonlari haqidagi izohlar
            qatnashadi. Telefon yoki kompyuteringizdan o'z so'zlaringiz bilan,
            Sizga qulay bo'lganidek yozing. Qancha batafsil bo'lsa, shuncha
            yaxshi. Masalan, Sizning telefoningiz ishlatilayotganda qizib
            ketadimi, uzoq vaqt foydalangandan keyin qotib qoladimi, yoki
            Sizning televizoringiz yon tomonlarida oq burchaklari borligi haqida
            aytib bering.
          </p>
          <p>
            Foydali ma'lumotsiz, reklamalik yoki ko'chirib olingan izohlar
            tanlovda ishtirok etmaydi. Sovg'ani tanlov o'tkaziladigan kun hisobi
            bilan 3 kun ichida olish mumkin.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900">
            Qanday qilib izoh qoldirsa bo'ladi
          </h3>
          <p>
            Izoh qoldirmoqchi bo'lgan tovaringizni tanlang, tovar sahifasiga
            o'ting, "Izohlar" ilovasini bosing. Keyin "Izoh qoldirish" tugmasini
            bosing. Sizga telegram orqali kirishingiz kerak bo'lishi mumkin,
            buning uchun Siz telefon raqamingizni kiritishingiz kerak bo'ladi
            (telegram raqamni bizga uzatmaydi, bu faqat identifikatsiya qilish
            uchun kerak). Shundan so'ng, Sizga sharh qo'shish uchun ilova
            ochiladi.
          </p>
        </section>
        <section>
          <h3 className="text-xl font-semibold text-gray-900">Kategoriyalar</h3>
          <ul className="list-disc pl-6">
            <li>
              <Link
                to="/product/phones/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Mobil telefonlar
              </Link>
            </li>
            <li>
              <Link
                to="/product/tablets/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Planshetlar
              </Link>
            </li>
            <li>
              <Link
                to="/product/laptops/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Noutbuklar
              </Link>
            </li>
            <li>
              <Link
                to="/product/televisions/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Televizorlar
              </Link>
            </li>
            <li>
              <Link
                to="/product/smartwatches/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Smart soatlar va fitnes brasletlar
              </Link>
            </li>
            <li>
              <Link
                to="/product/conditioners/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Konditsionerlar
              </Link>
            </li>
            <li>
              <Link
                to="/product/refrigerators/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Muzlatgichlar
              </Link>
            </li>
            <li>
              <Link
                to="/product/monitors/:id"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Monitorlar
              </Link>
            </li>
            <li>
              <Link
                to="*"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Kir yuvish mashinalari
              </Link>
            </li>
            <li>
              <Link
                to="*"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Oshxona plitalari
              </Link>
            </li>
            <li>
              <Link
                to="*"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Havo namlagich va havo tozalagichlar
              </Link>
            </li>
            <li>
              <Link
                to="*"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Fenlar
              </Link>
            </li>
            <li>
              <Link
                to="*"
                className="text-blue-600 hover:text-blue-800 active:text-blue-900"
              >
                Isitgichlar
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Competition;
