import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowDown, Volume2, VolumeX, Crown, Heart, Sparkles, Star, GraduationCap } from "lucide-react";
import "./styles.css";

import img1 from "./assets/jojo-2.jpeg";
import img2 from "./assets/jojo-4.jpeg";
import img3 from "./assets/jojo-3.jpeg";
import img4 from "./assets/jojo-4.jpeg";
import img5 from "./assets/jojo-5.jpeg";
import music from "./assets/jojo-song.mp3";

const photos = [
  { src: img1, title: "يوم يستاهل يتحفظ", text: "جوجا وهي بتقفل فصل كامل من الحكاية وتفتح فصل جديد" },
  { src: img2, title: "اللحظة اللي تستاهل الفخر", text: "كل خطوة وصلت للحظة دي كانت وراها حكاية ومجهود" },
  { src: img3, title: "Senior 2026", text: "مش مجرد سنة تخرج دي علامة على رحلة طويلة" },
  { src: img4, title: "كبرتي الحلم", text: "من الكتب والمذاكرة للروب والساحة والاحتفال" },
  { src: img5, title: "أنا وإنتي", text: "صورة صغيرة بس جواها ذكريات كتير أوي" },
];

const MusicContext = React.createContext(null);

function useMusic() {
  return React.useContext(MusicContext);
}

const letter = `جوجا

أنا مش عارف أبدأ الكلام منين بصراحة لأن مهما كتبت ومهما حاولت أقول اللي جوايا هفضل حاسس إن الكلام قليل عليكي. بس يمكن أحسن حاجة أعملها إني أتكلم معاكي زي ما أنا أخوكي الصغير اللي طول عمره شايفك أختي الكبيرة قبل أي حاجة تانية. النهاردة وإنتي متخرجة وأنا شايف صورك بالروب والقبعة والورد حسيت إن السنين جريت بطريقة غريبة. حسيت إن البنت اللي كنت بشوفها كل يوم بقت فجأة قدامي خريجة ومستعدة تبدأ حكاية جديدة.

أنا فخور بيكي يا جوجا فخر مش عادي. فخر من النوع اللي يخلي الواحد يبص على اللي قدامه ويقول دي أختي الكبيرة. يمكن أنا مش دايمًا بعرف أقول الكلام ده في وشك ويمكن ساعات بهزر معاكي وأرخم عليكي وأعمل نفسي مش مهتم بس الحقيقة إن جوايا دايمًا مكان كبير أوي ليكي. إنتي مش بس أختي الكبيرة إنتي واحدة من الناس اللي وجودهم في البيت بيعمل فرق. وجودك له طعم مختلف وصوت مختلف وذكريات مختلفة.

فاكرة كام مرة الدنيا كانت فيها ضغط ومذاكرة وتعب وامتحانات ومواعيد وحاجات كتير ورا بعض. فاكرة كام مرة كان لازم تكملي وإنتي أصلا تعبانة. يمكن الناس تشوف صورة التخرج وتقول مبروك وخلاص. بس أنا عارف إن ورا الصورة دي أيام كتير محدش شافها. ورا الضحكة دي توتر. ورا الهدوء ده تفكير. ورا يوم التخرج ده مشوار طويل من التعب والمحاولة والصبر.

والحلو إنك وصلتي. وصلتي وانتي لابسة روب التخرج ورافعه القبعة وبتضحكي كأن كل اللي فات كان بيقولك كملي عشان اللحظة دي جاية. وأنا بصراحة لما شفت صورك حسيت إن كل التعب كان مستاهل. حسيت إنك أخدتي حاجة تستحقيها من زمان. مش بس شهادة. أخدتي لحظة تقولك إنك قدرتي وإنك خلصتي وإن اللي جاي أكبر وأحلى بإذن الله.

أنا كأخوكي الصغير يمكن معرفش أقولك كل اللي نفسي أقوله. ساعات الأخ الصغير بيبقى فاكر إن الكلام الحلو لازم يتقال في المناسبات الكبيرة بس. بس أنا عايزك تعرفي إن أنا شايفك من زمان. شايف تعبك. شايف طموحك. شايف إنك لما بتحطي حاجة في دماغك بتفضلي وراها لحد ما توصلي. ودي حاجة أنا فخور بيها فيكي جدًا.

إنتي كمان بالنسبة لي مش بس خريجة. إنتي مثال قدامي. واحدة أكبر مني مشت قبلي في حاجات كتير وأنا اتعلمت منها من غير ما تاخدي بالك. اتعلمت إن الواحد يكمل حتى لو مش شايف آخر الطريق. اتعلمت إن التعب مش معناه إننا وقفنا. اتعلمت إن كل مرحلة ليها وقتها وإن الواحد لازم يعيشها ويعديها وبعدها يبص ورا ويقول الحمد لله إني كملت.

وأنا مبسوط إن اليوم ده جه عشان أقولك قد إيه أنا فخور بيكي. مبسوط إن عندي صورة ليكي بالروب أحطها وأقول دي أختي. مبسوط إنك دلوقتي عندك ذكرى كبيرة بالشكل ده. ومبسوط أكتر إن الحكاية مش بتخلص هنا. بالعكس دي أول صفحة في حكاية أكبر.

يا جوجا إنتي دلوقتي واقفة على أول طريق جديد. يمكن الطريق ده يبقى فيه حاجات حلوة وحاجات صعبة ويمكن تقابلي أيام تحسي فيها إن الدنيا كبيرة أو إن اللي نفسك فيه بعيد. بس لو في حاجة واحدة عايزك تفتكريها فهي إنك وصلتي لحد هنا قبل كده. يعني كل مرة شككتي في نفسك قدرتي تكملي. كل مرة قلتي الموضوع صعب عدتيه. كل مرة خفتي من اللي جاي دخلتي فيه وخرجتي أقوى.

ما تخليش أي حد يقلل من حلمك. وما تخليش يوم وحش يخليكي تنسي كل الأيام الحلوة اللي عملتيها. وما تخليش غلطة واحدة تخليكي تنسي إنك إنسانة بتتعلم وبتكبر. خدي الدنيا واحدة واحدة وخليكي دايمًا جوجا اللي أنا عارفها. جوجا اللي لما تقع تقوم. جوجا اللي بتضحك حتى وهي مضغوطة. جوجا اللي عندها قلب كبير حتى لو ساعات بتعمل نفسها جامدة.

وأنا عارف إن السنين الجاية هتغير حاجات كتير. يمكن الناس تتغير والأماكن تتغير والروتين يتغير. يمكن كل واحد فينا يبقى عنده طريقه ومسؤولياته. بس في حاجة مش هتتغير إنك أختي الكبيرة وأنا أخوكي الصغير. وهفضل دايمًا شايف إن ليكي مكان خاص عندي مهما الدنيا أخدتنا فين.

يمكن أوقات كتير مش هقولك إني محتاج نصيحة أو إني محتاج حد يسمعني. بس وجودك لوحده بيطمن. ودي حاجة يمكن الواحد ما يعرفش قيمتها غير لما يكبر. إن يبقى عنده أخت أكبر يقدر يرجعلها ويقولها حصل كذا أو يسألها رأيها أو حتى يقعد معاها من غير كلام كتير.

وعشان كده النهاردة مش بس بقول مبروك. أنا بقولك شكرًا. شكرًا على كل مرة كنتي فيها أخت كبيرة بجد. شكرًا على كل مرة وقفتي جنبي حتى لو بطريقة بسيطة. شكرًا على كل مرة ضحكتيني فيها. وشكرًا على كل ذكرى بينا حتى لو كانت خناقة صغيرة وانتهت بضحك. كل الحاجات دي بقت جزء من حكايتنا.

وأنا متأكد إن بابا وماما فخورين بيكي جدًا. وأنا كمان فخور بيكي بطريقتي. يمكن طريقتي فيها هزار ورخامة أكتر من اللازم بس صدقيني جواها حب كبير. أنا فرحان عشانك من قلبي. فرحان إنك حققتي حاجة تعبتي عشانها. وفرحان أكتر إني كنت موجود وأنا بشوف الرحلة دي وهي بتكبر قدامي.

النهاردة إنتي Senior 2026. الاسم شكله كبير أوي. بس أنا شايف فيه بنت صغيرة كنا بنشوفها بتكبر سنة ورا سنة. شايف كل عيد وكل مناسبة وكل صورة وكل خروجة وكل موقف. وفجأة لقينا نفسنا بنقول جوجا اتخرجت. والله الزمن غريب.

خليكي فاكرة اليوم ده كويس. خلي الصور دي عندك. خلي القبعة والروب وكل تفصيلة في اليوم ده تفضل فاكرة إنك كنتي هنا. وإنك قدرتي. وإنك وصلتي. وإنك كان ليكي يوم الناس كلها فيه بتقولك برافو.

واللي جاي بقى يا جوجا أنا مستنيه منك كتير. مستني أشوفك في مكان أكبر. مستني أشوفك بتحققي حاجات أكتر. مستني أشوفك بتدخلي مجالات جديدة وتجربي حاجات جديدة وتكبري أكتر. ومهما كان الطريق اللي تختاريه أنا هفضل مشجعك من بعيد وقريب.

ولو في يوم تعبتي افتكري إنك مش لوحدك. ولو في يوم فرحتي تعالى احكيلي. ولو في يوم نجحتي في حاجة حتى لو صغيرة أنا عايز أعرف. ولو في يوم الدنيا زنقت معاكي افتكري إن البيت بيتك وإن أخوكي الصغير موجود حتى لو مش بيعرف يقول الكلام الصح كل مرة.

أنا مش عايزك تبقي مثالية. أنا عايزك تبقي مبسوطة. عايزك تبقي فخورة بنفسك زي ما أنا فخور بيكي. عايزك تصدقي إنك تستاهلي الخير. تستاهلي الفرص الحلوة. تستاهلي ناس تفرحلك بجد. وتستاهلي حياة فيها راحة بعد كل التعب اللي فات.

يا جوجا اليوم ده ليكي. افرحي بيه للآخر. اضحكي. اتصوري. خليكي مبسوطة. وكبري قلبك باللحظة دي. لأنك تستاهليها فعلًا.

ومن أخوكي الصغير لأخته الكبيرة أقولك حاجة واحدة من غير أي تكلف

أنا فخور بيكي جدًا

فخور بالبنت اللي كبرت قدامي وبالست اللي وصلت للمرحلة دي وبالأخت اللي كان ليها دايمًا مكان خاص في حياتي. وربنا يكتبلك في كل خطوة جاية الخير والنجاح والراحة والفرحة. وربنا يفتحلك أبواب أحسن من اللي تتمنيها. ويخلي كل تعب تعبتيه سبب في حاجة جميلة جاية.

وسنة 2026 هتفضل بالنسبة لنا السنة اللي جوجا فيها لبست روب التخرج ورفعت القبعة وقالت أنا خلصت مرحلة وبدأت مرحلة جديدة.

وأنا هفضل أقولها كل ما أشوف الصور دي

دي أختي الكبيرة

دي جوجا

دي واحدة أنا فخور بيها من قلبي

مبروك يا جوجا يا Senior 2026

ومن هنا لسنين كتير جاية إن شاء الله تفضلي دايمًا مكملة وناجحة ومبسوطة ومحققة اللي نفسك فيه

وأنا أخوكي الصغير هفضل دايمًا مبسوط إن عندي أخت كبيرة زيك

بحبك يا جوجا ❤️`;

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), [pathname]);
  return null;
}

function MusicButton() {
  const { audioRef, playing, toggle } = useMusic();
  return (
    <button className="music-btn" onClick={toggle} aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}>
      {playing ? <Volume2 size={17}/> : <VolumeX size={17}/>}
      <span>{playing ? "الموسيقى شغالة" : "شغلي الموسيقى"}</span>
    </button>
  );
}

function Gate() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { audioRef, playMusic } = useMusic();

  const enter = async () => {
    if (open) return;
    setOpen(true);
    await playMusic();
    window.setTimeout(() => navigate("/photos"), 1750);
  };

  return (
    <main className={`gate ${open ? "gate-open" : ""}`}>
      <div className="gate-bg" />
      <div className="gate-stars" aria-hidden="true">
        {Array.from({ length: 42 }).map((_, i) => <span key={i} style={{ "--i": i }} />)}
      </div>

      <div className="gate-frame">
        <div className="stage-glow" />
        <div className="curtain curtain-left" />
        <div className="curtain curtain-right" />

        <motion.div
          className="gate-copy"
          animate={open ? { opacity: 0, scale: 0.96, y: -18 } : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="crest"><GraduationCap size={36} /></div>
          <p className="eyebrow">A VERY SPECIAL DAY</p>
          <h1>
            <span>SENIOR</span>
            <strong>JOJA</strong>
            <span>2026</span>
          </h1>
          <div className="gold-line" />
          <p className="gate-sub">النهاردة مش يوم عادي ده يوم جوجا</p>
          <button className="enter-btn" onClick={enter} disabled={open}>
            <Heart size={17} fill="currentColor" />
            <span>{open ? "لحظة يا جوجا..." : "افتحي باب الفرحة"}</span>
            <ArrowLeft size={18} />
          </button>
          <p className="tiny">من اخوكي الصغير ليكي يانور عيني ❤️</p>
        </motion.div>

        <div className="curtain-title curtain-title-left">SENIOR</div>
        <div className="curtain-title curtain-title-right">2026</div>
      </div>

      <div className="gate-bottom-note">اضغطي وخلّي الحكاية تبدأ <Heart size={14} fill="currentColor" /></div>
      <motion.div className="scroll-hint" animate={{ y: [0, 7, 0], opacity: [0.45, 1, 0.45] }} transition={{ repeat: Infinity, duration: 1.8 }}>
        <ArrowDown size={18} />
      </motion.div>
    </main>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Link to="/photos" className="brand"><span className="brand-mark"><Crown size={17}/></span><span>JOJO <b>2026</b></span></Link>
      <nav><Link to="/photos">الصور</Link><Link to="/proud">فخور بيكي</Link><Link to="/letter">الرسالة</Link></nav>
    </header>
  );
}

function PageShell({children}) {
  return <div className="site"><Header/>{children}<MusicButton/></div>;
}

function Photos() {
  return <PageShell>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><Sparkles size={15}/> THE GRADUATION EDITION</p>
        <h2>JOJA<br/><em>Senior 2026</em></h2>
        <p className="hero-text">النهاردة مش مجرد يوم تخرج دي لحظة اتجمعت فيها سنين من التعب والضحك والذكريات والنجاح.</p>
        <Link className="gold-btn" to="/proud">كملي الحكاية <ArrowLeft size={18}/></Link>
      </div>
      <motion.div className="hero-photo" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1.1,ease:[.22,1,.36,1]}}>
        <img src={img1} alt="جوجا في يوم التخرج"/><div className="photo-label">THE DAY<br/><b>YOU DID IT</b></div>
      </motion.div>
    </section>
    <section className="gallery-section">
      <div className="section-heading"><div><span className="eyebrow">MEMORIES</span><h3>صور من يوم <em>يستاهل الفخر</em></h3></div><span className="counter">05 / 05</span></div>
      <div className="gallery">{photos.map((p,i)=><motion.article className={`photo-card card-${i+1}`} key={p.src} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{delay:i*.1,duration:.7,ease:[.22,1,.36,1]}}><img src={p.src} alt={p.title}/><div className="card-overlay"><span>0{i+1}</span><div><h4>{p.title}</h4><p>{p.text}</p></div></div></motion.article>)}</div>
    </section>
  </PageShell>;
}

function Proud() {
  return <PageShell><section className="proud-page"><div className="proud-glow"/><div className="proud-content"><span className="eyebrow">FROM YOUR LITTLE BROTHER</span><Heart className="heart-icon" size={36} fill="currentColor"/><h2>أنا<br/><em>فخور بيكي</em></h2><p className="lead">مش عشان الشهادة بس<br/>عشان كل حاجة وصلتك للحظة دي</p><div className="quote">"دي أختي الكبيرة<br/>ودي جوجا<br/>ودي واحدة أنا فخور بيها من قلبي"</div><Link className="gold-btn" to="/letter">اقري رسالتي <ArrowLeft size={18}/></Link></div><motion.div className="proud-photo" initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:1,ease:[.22,1,.36,1]}}><img src={img4} alt="جوجا بزي التخرج"/></motion.div></section></PageShell>;
}

function Letter() {
  return <PageShell><section className="letter-page"><div className="letter-head"><span className="eyebrow">A LETTER FROM YOUR LITTLE BROTHER</span><h2>إلى جوجا<br/><em>أختي الكبيرة</em></h2><div className="letter-meta"><span>Senior 2026</span><span>♡</span><span>من أخوكي الصغير</span></div></div><article className="letter-paper"><div className="paper-ornament"><Star size={16}/></div>{letter.split("\n").map((p,i)=>p.trim()?<p key={i} className={i===0?"letter-name":""}>{p}</p>:<div key={i} className="space"/>) }<div className="signature">أخوكي الصغير ❤️</div></article><div className="next-links"><Link to="/proud"><ArrowLeft size={17}/> فخور بيكي</Link><Link to="/photos">الصور <ArrowLeft size={17}/></Link></div></section></PageShell>;
}

function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.preload = "auto";
    audio.volume = 0.42;
    audio.playsInline = true;
    audioRef.current = audio;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("ended", onPause);
    return () => {
      audio.pause();
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("ended", onPause);
      audio.src = "";
    };
  }, []);

  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      await audio.play();
      setPlaying(true);
    } catch {}
  };

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) await playMusic();
    else audio.pause();
  };

  const value = { audioRef, playing, playMusic, toggle };

  return (
    <MusicContext.Provider value={value}>
      <BrowserRouter>
        <ScrollTop/>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Gate/>}/>
            <Route path="/photos" element={<Photos/>}/>
            <Route path="/proud" element={<Proud/>}/>
            <Route path="/letter" element={<Letter/>}/>
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </MusicContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
