const CONDITIONS_2 = [

  // ============================================================
  // 11. Allergie / Heuschnupfen
  // ============================================================
  {
    id: 'allergie',
    name: 'Allergie / Heuschnupfen',
    tags: ['#allergie', '#heuschnupfen', '#immunsystem', '#histamin', '#pollenallergie', '#nahrungsmittelallergie'],
    koerper: "Bei einer Allergie reagiert das Immunsystem ueberschiesend auf Stoffe, die eigentlich harmlos sind — Pollen, Tierhaare, Nahrungsmittel. Mastzellen schuetten vermehrt Histamin aus, was Schwellungen, Juckreiz, Traenenfluss und Niesreiz ausloest. Die Schleimhaeute entzuenden sich, die Atemwege verengen sich, der Koerper befindet sich in einem Dauerzustand der Abwehr. Das Immunsystem hat verlernt, zwischen Freund und Feind zu unterscheiden.",
    psychosomatik: {
      zitat: "Wogegen wehrst du dich wirklich?",
      text: "Die Allergie zeigt eine tiefe innere Abwehrhaltung — etwas im Leben wird als bedrohlich empfunden, obwohl es das gar nicht ist. Haeufig steckt eine verdraengte Aggression dahinter, ein stilles 'Das will ich hier nicht'. Bei Heuschnupfen ist es oft die Lebendigkeit selbst, die Fruchtbarkeit und Sinnlichkeit des Fruehlings, die unbewusst abgewehrt wird. Wer die Allergie versteht, darf sich fragen: Wo sage ich 'Nein' zum Leben, wo darf ich mich oeffnen und annehmen? In der Bejahung dessen, was ist, entspannt sich das Immunsystem.",
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin setzte auf Brennnessel als natuerliches Antihistaminikum und auf Honig aus der Region, um den Koerper sanft an Pollen zu gewoehnen. Schwarzkuemmelsamen galten als Allheilmittel fuer ueberschiesende Immunantworten.",
      tcm: "In der TCM gehoert die Allergie zum Funktionskreis Lunge und Wei-Qi (Abwehr-Qi). Ein schwaches Lungen-Qi laesst Wind und pathogene Faktoren eindringen. Die Behandlung staerkt das Lungen-Qi und harmonisiert die Milz, die als Wurzel des Wei-Qi gilt.",
      ayurveda: "Im Ayurveda zeigt sich Allergie als Kapha-Pitta-Stoerung mit ueberschuessigem Ama (Schlacken) im Gewebe. Reinigung durch Panchakarma und Staerkung von Agni (Verdauungsfeuer) stehen im Zentrum. Kurkuma und Tulsi sind klassische Heilpflanzen.",
      germanisch: "In der germanischen Medizin nach Hamer zeigt sich Allergie als haengende Heilungsphase — ein Trennungskonflikt, der immer wieder getriggert wird. Die Schleimhaute erinnern sich an den urspruenglichen Schock und reagieren bei jeder aehnlichen Situation.",
      alchemie: "Alchemistisch betrachtet ist Allergie ein Zeichen, dass Sulphur (Seelenkraft) und Sal (Koerper) in Disharmonie sind. Der Koerper wehrt ab, was die Seele einladen moechte. Die Loesung liegt in der Vereinigung der Gegensetze — dem Annehmen.",
    },
    kraeuter: [
      { name: 'Brennnessel', wirkung: 'Natuerliches Antihistaminikum. Reguliert die Histaminausschuettung und staerkt das Immunsystem. Als Tee (3 Tassen taeglich) oder als Frischpflanzenpresssaft.' },
      { name: 'Schwarzkuemmel (Nigella sativa)', wirkung: 'Moduliert die Immunantwort und wirkt stark entzuendungshemmend. Das Oel taeglich einen Teloeffel einnehmen — idealerweise Wochen vor der Pollensaison beginnen.' },
      { name: 'Augentrost (Euphrasia)', wirkung: 'Lindert traenende, juckende Augen und beruhigt entzuendete Schleimhaeute. Als Augentropfen oder Tee-Kompresse.' },
      { name: 'Spitzwegerich', wirkung: 'Beruhigt gereizte Atemwege und Schleimhaeute. Wirkt abschwellend und schuetzt die Bronchien. Als Sirup oder Tee.' },
      { name: 'Kurkuma', wirkung: 'Stark entzuendungshemmend durch Curcumin. Reguliert die Immunantwort und reduziert Histaminfreisetzung. Mit schwarzem Pfeffer und Fett einnehmen fuer bessere Aufnahme.' },
      { name: 'Reishi-Pilz', wirkung: 'Adaptogen, das das Immunsystem intelligent reguliert — beruhigt Ueberreaktionen und staerkt die Grundabwehr. Als Extrakt oder Pulver ueber laengere Zeit einnehmen.' },
    ],
    stoffe: [
      { name: 'Vitamin C', wirkung: 'Natuerlicher Histaminsenker. Hohe Dosen (1-3g taeglich) senken den Histaminspiegel und staerken die Schleimhaeute.' },
      { name: 'Quercetin', wirkung: 'Bioflavonoid, das Mastzellen stabilisiert und die Histaminfreisetzung reduziert. In Kombination mit Vitamin C besonders wirksam.' },
      { name: 'Zink', wirkung: 'Essenziell fuer ein ausgeglichenes Immunsystem. Reguliert die T-Zell-Funktion und reduziert entzuendliche Ueberreaktionen.' },
      { name: 'MSM (Methylsulfonylmethan)', wirkung: 'Organischer Schwefel mit starker antiallergischer Wirkung. Reduziert Schwellungen der Schleimhaeute und erleichtert die Atmung.' },
    ],
    ernaehrung: {
      empfehlung: "Eine entzuendungsarme, histaminarme Ernaehrung entlastet das Immunsystem. Frische, naturbelassene Lebensmittel bilden die Basis. Fermentiertes und lang gelagertes erhoehen den Histaminspiegel — frisch zubereitete Mahlzeiten sind ideal.",
      staerkend: ["Frisches Obst (Aepfel, Beeren, Birnen)", "Gruenes Blattgemuese", "Frischer Ingwer", "Kurkuma", "Leinsamen und Hanfsamen", "Lokaler Honig (desensibilisierend)", "Brokkoli und Blumenkohl", "Frischer Fisch (direkt zubereitet)"],
      meiden: ["Histaminreiche Lebensmittel (gereifter Kaese, Salami, Rotwein)", "Zitrusfruechte waehrend akuter Schuebe", "Industriezucker", "Kuhmilchprodukte", "Weizen und Gluten", "Alkohol", "Fertiggerichte und Zusatzstoffe"],
      rezepte: [
        { name: 'Anti-Allergie-Goldene-Milch', zutaten: '300ml Hafermilch, 1 TL Kurkuma, 1/2 TL Ingwer frisch gerieben, Prise schwarzer Pfeffer, 1 TL Kokosoel, 1 TL Honig', zubereitung: 'Hafermilch erwaermen, Kurkuma und Ingwer einruehren, Pfeffer und Kokosoel zugeben, mit Honig suessen. Taeglich trinken — besonders in der Allergiesaison.' },
        { name: 'Brennnessel-Smoothie', zutaten: 'Handvoll frische Brennnesselblaetter (mit Handschuhen ernten), 1 Banane, 1 Handvoll Heidelbeeren, 200ml Wasser, 1 EL Hanfsamen', zubereitung: 'Alles im Mixer puerieren. Der Smoothie versorgt mit natuerlichem Antihistamin, Vitamin C und Omega-3-Fettsaeuren.' },
      ]
    },
    fasten: {
      text: "Fasten gibt dem Immunsystem die Moeglichkeit, sich zu regenerieren und Fehlprogrammierungen zu korrigieren. Schon kurze Fastenphasen senken den Histaminspiegel deutlich und beruhigen ueberaktive Mastzellen.",
      formen: ["Intermittierendes Fasten 16:8 waehrend der Allergiesaison", "3-5 Tage Saftfasten mit Selleriesaft und Gurkensaft", "Basenfasten ueber 7-14 Tage zur Grundreinigung"],
      reinigung: ["Nasenspuelung mit Salzwasser (Jala Neti) — taeglich morgens", "Dampfinhalation mit Kamille und Thymian", "Darmreinigung mit Zeolith und Flohsamenschalen"]
    },
    bewegung: {
      text: "Sanfte Bewegung an der frischen Luft staerkt das Immunsystem und trainiert die Schleimhaeute. An pollenstarken Tagen ist Bewegung in Innenraeumen oder nach Regen ideal.",
      praktiken: ["Pranayama (Wechselatmung) — beruhigt das Immunsystem und staerkt die Lungenkapazitaet, 10 Minuten taeglich", "Qi Gong fuer die Lunge — sanfte Armbewegungen mit tiefer Atmung oeffnen den Brustraum", "Schwimmen — befeuchtet die Atemwege und staerkt die Ausdauer", "Waldspaziergaenge nach dem Regen — die sauberste Luft und Phytonzide der Baeume beruhigen das Immunsystem"]
    },
    geist: {
      einheit: "Die Allergie laedt ein, das Leben in seiner ganzen Fuelle willkommen zu heissen. Was du abwehrst, darf ankommen. In der Annahme liegt Heilung — der Koerper darf sich entspannen, wenn die Seele Ja sagt.",
      affirmationen: ["Ich bin sicher in dieser Welt. Das Leben meint es gut mit mir.", "Ich oeffne mich fuer alles, was mich umgibt — ich bin eins mit der Natur.", "Mein Koerper weiss, was zu mir gehoert und was voruebergeht. Ich vertraue ihm.", "Ich atme frei und tief. Die Welt ist mein Zuhause."],
      meditation: "Setze dich in die Natur oder ans offene Fenster. Atme bewusst die Luft ein — mit allem, was sie traegt. Stell dir vor, wie jeder Atemzug dich naehrt und staerkt. Sprich innerlich: 'Ich nehme an. Ich bin Teil dieser Welt.' Spuere, wie dein Koerper sich entspannt und die Abwehr weicht.",
      energie: "Das Herzchakra (Anahata) ist hier zentral — Allergie zeigt sich, wenn die Liebesfaehigkeit sich verschliesst. Oeffne das Herzchakra durch sanftes Summen, Hande aufs Herz legen und bewusstes Fuehlen von Dankbarkeit. Auch das Halschakra profitiert von blauem Licht und Toeneuebungen.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: 'Einjaehriger Beifuss mit starker immunmodulierender Wirkung. Unterstuetzt den Koerper dabei, ueberschiesende Immunantworten zu regulieren.', tags: ['#immunsystem', '#entzuendungshemmend', '#artemisinin'] },
      { name: 'Zeolith/ZeoMont', desc: 'Bindet Histamin und Schadstoffe im Darm, entlastet das Immunsystem und staerkt die Darmbarriere — dort, wo Allergie oft ihren Ursprung hat.', tags: ['#entgiftung', '#darmgesundheit', '#histamin'] },
      { name: 'Anorganischer Schwefel', desc: 'MSM-Quelle, die die Schleimhaeute staerkt und die Histaminreaktion daempft. Unterstuetzt die Entgiftung ueber die Leber.', tags: ['#schwefel', '#schleimhaeute', '#entgiftung'] },
      { name: 'Hanfsamen', desc: 'Reich an Omega-3-Fettsaeuren und Gamma-Linolensaeure — beides reguliert Entzuendungsprozesse und staerkt die Hautbarriere.', tags: ['#omega3', '#entzuendungshemmend', '#ernaehrung'] },
    ]
  },

  // ============================================================
  // 12. Bluthochdruck / Herz-Kreislauf
  // ============================================================
  {
    id: 'bluthochdruck',
    name: 'Bluthochdruck / Herz-Kreislauf',
    tags: ['#bluthochdruck', '#hypertonie', '#herzkreislauf', '#herz', '#gefaesse', '#blutdruck'],
    koerper: "Bei Bluthochdruck arbeitet das Herz staendig gegen erhoehten Widerstand in den Gefaessen. Die Arterienwande verdicken sich, verlieren ihre Elastizitaet und der Druck steigt dauerhaft ueber 140/90 mmHg. Das Herz muss mehr leisten, die Gefaesse verengen sich — ein Kreislauf entsteht, der Herz, Nieren und Gehirn belastet. Oft zeigt sich ueber Jahre kein Symptom, waehrend der Koerper still leidet.",
    psychosomatik: {
      zitat: "Welchen Druck machst du dir selbst?",
      text: "Der Blutdruck ist der Spiegel des inneren Drucks. Wer sich staendig unter Druck setzt, Leistung erbringen will, alles kontrollieren moechte, dessen Blut drueckt entsprechend gegen die Waende. Es ist verdraengte Emotion, die sich koerperlich ausdrueckt — gehaltener Zorn, ungesagte Worte, das Gefuehl, staendig funktionieren zu muessen. In der Entspannung, im Loslassen, im ehrlichen Ausdruck der Gefuehle findet der Druck sein natuerliches Mass.",
    },
    traditionen: {
      volksmedizin: "Weissdorn galt seit Jahrhunderten als das Herzkraut schlechthin — staerkend, regulierend, schuetzend. Knoblauch wurde taeglich gegessen, um das Blut fliessfaehig zu halten. Mistel als Tee senkte sanft den Druck.",
      tcm: "In der TCM entsteht Bluthochdruck durch aufsteigendes Leber-Yang — oft durch Leber-Qi-Stagnation (Stress, unterdrueckter Zorn) oder Yin-Mangel. Die Behandlung beruhigt das Leber-Yang, naehrt das Yin und bewegt stagniertes Qi. Chrysanthementee und Sellerie sind klassische Mittel.",
      ayurveda: "Bluthochdruck zeigt im Ayurveda ein erhoehtes Pitta und Vata. Das Blut ist zu heiss und unruhig. Kuehlende Nahrung, meditative Praxis und Pitta-ausgleichende Kraeuter wie Brahmi und Arjuna (Terminalia arjuna) bringen Gleichgewicht.",
      germanisch: "In der germanischen Medizin zeigt Bluthochdruck einen Revierkonflikt — das Gefuehl, das eigene Territorium verteidigen zu muessen, staendig wachsam zu sein. Die Entspannung kommt, wenn das Revier als sicher empfunden wird.",
      alchemie: "Alchemistisch ist das Herz der Sitz der Sonne im Menschen. Bluthochdruck zeigt ein Uebermaess an Sulphur — zu viel Feuer, zu viel Antrieb. Die Loesunge liegt in der Verbindung mit Mercurius — dem Fluss, dem Loslassen, dem Vertrauen in den natuerlichen Rhythmus.",
    },
    kraeuter: [
      { name: 'Weissdorn (Crataegus)', wirkung: 'Das Herzkraut schlechthin. Staerkt den Herzmuskel, erweitert die Herzkranzgefaesse, reguliert den Blutdruck in beide Richtungen. Als Tee, Tinktur oder Extrakt ueber Monate einnehmen.' },
      { name: 'Mistel (Viscum album)', wirkung: 'Senkt sanft den Blutdruck und beruhigt das vegetative Nervensystem. Als Kaltauszug ueber Nacht — morgens trinken.' },
      { name: 'Olive (Olea europaea) — Blaetter', wirkung: 'Olivenblaetterextrakt senkt den Blutdruck vergleichbar mit Medikamenten. Erweitert die Gefaesse und schuetzt die Arterienwand.' },
      { name: 'Hibiskus', wirkung: 'Klinisch erforscht: 3 Tassen Hibiskustee taeglich senken den systolischen Blutdruck messbar. Zudem reich an Anthocyanen, die die Gefaesse schuetzen.' },
      { name: 'Baldrian', wirkung: 'Beruhigt das Nervensystem und loest innere Anspannung — eine haeufige Ursache fuer Bluthochdruck. Als Tee am Abend.' },
      { name: 'Knoblauch (Allium sativum)', wirkung: 'Erweitert die Blutgefaesse, senkt den Blutdruck, haelt das Blut fliessfaehig und schuetzt die Gefaesswand. Taeglich frisch oder als Tinktur.' },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Der wichtigste Mineralstoff fuer entspannte Gefaesse. Magnesium weitet die Blutgefaesse und senkt den Blutdruck. 400-600mg taeglich, am besten als Magnesiumcitrat oder transdermal als Magnesiumoel.' },
      { name: 'Kalium', wirkung: 'Reguliert den Natriumhaushalt und senkt den Blutdruck. Reich enthalten in Bananen, Kartoffeln und gruenem Blattgemuese.' },
      { name: 'Omega-3-Fettsaeuren', wirkung: 'Machen die Gefaesswande elastisch und reduzieren Entzuendungen im Herz-Kreislauf-System. Aus Leinoel, Hanfsamen oder Algenoel.' },
      { name: 'Coenzym Q10', wirkung: 'Versorgt den Herzmuskel mit Energie und senkt nachweislich den Blutdruck. Besonders wichtig bei gleichzeitiger Statin-Einnahme.' },
    ],
    ernaehrung: {
      empfehlung: "Eine pflanzenreiche, kaliumreiche und natriumarme Ernaehrung ist das Fundament. Frisches Gemuese, Beeren, Nuesse und gute Oele naehren Herz und Gefaesse. Jede Mahlzeit darf bunt und lebendig sein.",
      staerkend: ["Rote Bete (natuerliches Nitrat weitet Gefaesse)", "Sellerie (taeglich 4 Stangen senken den Blutdruck)", "Dunkle Beeren (Blaubeeren, Aronia)", "Gruenes Blattgemuese (Spinat, Mangold)", "Walnuesse", "Leinsamen und Hanfsamen", "Knoblauch und Zwiebeln", "Granatapfel"],
      meiden: ["Ueberschuessiges Salz und salzreiche Fertigprodukte", "Industriezucker", "Alkohol in groesseren Mengen", "Koffein in Uebermaessen", "Transfette und frittierte Lebensmittel", "Schweres rotes Fleisch"],
      rezepte: [
        { name: 'Herz-Kreislauf-Saft', zutaten: '2 Rote Bete, 4 Stangen Sellerie, 1 Apfel, Stueck Ingwer, Saft einer halben Zitrone', zubereitung: 'Alles durch den Entsafter geben. Morgens auf nuechternen Magen trinken. Die Rote Bete liefert natuerliches Nitrat, das die Gefaesse weitet, der Sellerie reguliert den Blutdruck.' },
        { name: 'Weissdorn-Herz-Tee', zutaten: '2 TL Weissdornblueten und -blaetter, 1 TL Hibiskusblueten, 1 TL Melisse', zubereitung: 'Mit 250ml heissem Wasser uebergiessen, 10 Minuten ziehen lassen. 3 Tassen taeglich ueber Monate trinken. Dieser Tee naehrt und staerkt das Herz sanft und stetig.' },
      ]
    },
    fasten: {
      text: "Fasten senkt den Blutdruck oft innerhalb weniger Tage spuerbar. Der Koerper kommt zur Ruhe, die Gefaesse entspannen sich, ueberschuessiges Natrium und Wasser werden ausgeschwemmt. Regelmassiges Fasten ist eine der wirksamsten natuerlichen Massnahmen fuer ein gesundes Herz.",
      formen: ["Intermittierendes Fasten 16:8 als dauerhafte Lebensweise", "Buchinger-Heilfasten 7-10 Tage unter Begleitung", "Basenfasten 14 Tage — besonders Herz-Kreislauf-foerdernd"],
      reinigung: ["Aderlass nach Hildegard von Bingen — traditionell reinigend fuer das Blut", "Trockenbuersten am Morgen — foerdert die Durchblutung", "Wechselduschen nach Kneipp — trainieren die Gefaesselastizitaet"]
    },
    bewegung: {
      text: "Regelmaessige, moderate Ausdauerbewegung ist fuer Herz und Gefaesse essenziell. Schon 30 Minuten taegliches Gehen senken den Blutdruck messbar. Wichtig ist Freude an der Bewegung — alles darf leicht sein.",
      praktiken: ["Zuegiges Spazierengehen — 30-45 Minuten taeglich in der Natur, senkt den Druck zuverlaessig", "Tai Chi — verbindet sanfte Bewegung mit Meditation, klinisch erforscht bei Bluthochdruck", "Schwimmen — entlastet die Gelenke und trainiert das Herz gleichmaessig", "Yoga (sanft) — besonders Vorwaertsbeugen und Shavasana senken den Blutdruck sofort"]
    },
    geist: {
      einheit: "Das Herz ist das Zentrum deines Seins. Bluthochdruck zeigt, dass das Herz unter Druck steht — innerem Druck. In dem Moment, wo du aufhoerst, dir Druck zu machen, darf auch dein Blut wieder frei fliessen. Dein Herz moechte lieben, fuehlen und lebendig sein.",
      affirmationen: ["Ich lasse los. Ich vertraue dem Fluss des Lebens.", "Mein Herz schlaegt ruhig und kraftvoll. Ich bin getragen.", "Ich darf entspannen. Alles hat seine Zeit.", "Ich oeffne mein Herz und lasse Liebe fliessen — in mich hinein und aus mir heraus."],
      meditation: "Lege beide Haende auf dein Herz. Spuere den Herzschlag. Atme langsam ein und zaehle bis 4, halte den Atem fuer 4 Zaehler, atme aus fuer 8 Zaehler. Wiederhole dies 10 Mal. Diese Uebung aktiviert den Parasympathikus und senkt den Blutdruck sofort. Spuere dabei Dankbarkeit fuer dein Herz, das seit deinem ersten Lebenstag fuer dich schlaegt.",
      energie: "Das Herzchakra (Anahata) und das Solarplexus-Chakra (Manipura) sind hier angesprochen. Gruenes Licht naehrt das Herz, Loslassen von Kontrolle befreit den Solarplexus. Rosenquarz auf dem Herzen unterstuetzt die Oeffnung.",
    },
    produkte: [
      { name: 'Magnesium-Oel', desc: 'Transdermales Magnesium wird direkt ueber die Haut aufgenommen — entspannt die Gefaesse und senkt den Blutdruck. Taeglich auf Arme und Beine sprühen.', tags: ['#magnesium', '#gefaesse', '#entspannung'] },
      { name: 'Knoblauch-Tinktur', desc: 'Traditionelles Herz-Kreislauf-Mittel. Haelt das Blut fliesssfaehig, senkt den Blutdruck und schuetzt die Gefaesse von innen.', tags: ['#herz', '#gefaesse', '#blutdruck'] },
      { name: 'CBD-Oel', desc: 'Wirkt ueber das Endocannabinoid-System entspannend auf Gefaesse und Nervensystem. Senkt Stress-bedingten Bluthochdruck.', tags: ['#entspannung', '#stress', '#blutdruck'] },
      { name: 'Hanfsamen', desc: 'Perfektes Verhaeltnis von Omega-3 zu Omega-6. Schuetzen die Gefaesswande und regulieren Entzuendungsprozesse im Herz-Kreislauf-System.', tags: ['#omega3', '#herzgesundheit', '#ernaehrung'] },
    ]
  },

  // ============================================================
  // 13. Diabetes
  // ============================================================
  {
    id: 'diabetes',
    name: 'Diabetes',
    tags: ['#diabetes', '#blutzucker', '#insulinresistenz', '#bauchspeicheldruese', '#stoffwechsel'],
    koerper: "Bei Diabetes ist der Zuckerstoffwechsel aus dem Gleichgewicht. Bei Typ 2 reagieren die Zellen zunehmend taub auf Insulin — sie oeffnen ihre Tueren fuer Zucker immer weniger. Die Bauchspeicheldruese produziert immer mehr Insulin, bis sie erschoepft. Der Zucker staut sich im Blut und schaedigt ueber die Jahre Gefaesse, Nerven, Augen und Nieren. Es ist ein stiller Prozess, der frueher beginnt, als die meisten ahnen.",
    psychosomatik: {
      zitat: "Wo fehlt die Suesse in deinem Leben?",
      text: "Diabetes zeigt eine tiefe Sehnsucht nach Suesse, Liebe und Geborgenheit, die im aussen gesucht wird. Der Koerper kann die Suesse (Zucker) buchstaeblich aufnehmen — und doch kommt sie in den Zellen an. Es ist das Thema des Empfangens: Wer sich Liebe und Naehe wuenscht, sie gleichzeitig abwehrt, dessen Zellen verschliessen sich. Im Annehmen von Liebe, in der Selbstfuersorge und im Erlauben von Genuss liegt ein Schluessel zur Heilung.",
    },
    traditionen: {
      volksmedizin: "Bittermelone, Zimt und Bockshornklee galten traditionell als blutzuckersenkend. Heidelbeerblaettertee war das 'pflanzliche Insulin' der Volksmedizin. Loewenzahnwurzel staerkte die Bauchspeicheldruese.",
      tcm: "In der TCM ist Diabetes (Xiao Ke — 'Verzehr und Durst') eine Yin-Mangel-Erkrankung mit Hitze. Das Yin von Lunge, Magen und Niere ist erschoepft. Die Behandlung naehrt das Yin, kuehlt die Hitze und staerkt die Niere als Wurzel des Lebens.",
      ayurveda: "Im Ayurveda heisst Diabetes 'Madhumeha' (Honigurin) und zeigt ein gestoertes Kapha mit vermindertem Agni. Bitterstoffe, Kurkuma, Bockshornklee und eine Kapha-reduzierende Ernaehrung bilden die Therapie. Shilajit gilt als besonders wertvoll.",
      germanisch: "In der germanischen Medizin zeigt Diabetes einen Straeuben-Konflikt — der Widerstand gegen etwas Ekliges, Unzumutbares. Die Bauchspeicheldruese reagiert auf das, was als unverdaulich empfunden wird.",
      alchemie: "Alchemistisch ist Zucker das Prinzip der Suesse — Venus. Diabetes zeigt eine Stoerung im Venus-Prinzip: Die Faehigkeit, das Suesse des Lebens aufzunehmen und zu verwandeln, ist blockiert. Die Transformation geschieht durch wahre innere Suesse.",
    },
    kraeuter: [
      { name: 'Zimt (Ceylon)', wirkung: 'Verbessert die Insulinsensitivitaet der Zellen und senkt den Nuechternblutzucker. 1-2g Ceylon-Zimt taeglich zum Essen oder als Tee.' },
      { name: 'Bockshornklee', wirkung: 'Die Samen enthalten Galactomannan, das die Zuckeraufnahme verlangsamt, und 4-Hydroxyisoleucin, das die Insulinausschuettung unterstuetzt. Samen ueber Nacht einweichen, morgens kauen.' },
      { name: 'Bittermelone (Momordica charantia)', wirkung: 'Wirkt wie pflanzliches Insulin — senkt den Blutzucker durch mehrere Mechanismen. Als Saft, Tee oder Kapseln.' },
      { name: 'Loewenzahnwurzel', wirkung: 'Staerkt die Bauchspeicheldruese und die Leber, verbessert den gesamten Stoffwechsel. Als Wurzel-Tee oder geröstet als Kaffee-Ersatz.' },
      { name: 'Heidelbeerblaetter', wirkung: 'Enthalten Myrtillin, das blutzuckersenkend wirkt. Als Tee (2-3 Tassen taeglich) ueber laengere Zeit.' },
      { name: 'Kurkuma', wirkung: 'Verbessert die Insulinsensitivitaet und schuetzt die Betazellen der Bauchspeicheldruese. Taeglich mit schwarzem Pfeffer und Fett einnehmen.' },
    ],
    stoffe: [
      { name: 'Chrom', wirkung: 'Essenziell fuer die Insulinwirkung. Chrom verstaerkt das Insulinsignal an der Zelle und verbessert die Glukoseaufnahme. 200-400 mcg taeglich.' },
      { name: 'Alpha-Liponsaeure', wirkung: 'Verbessert die Insulinsensitivitaet und schuetzt die Nerven — besonders wichtig bei diabetischer Neuropathie.' },
      { name: 'Magnesium', wirkung: 'Magnesiummangel ist bei Diabetikern extrem haeufig und verschlechtert die Insulinresistenz. 400mg taeglich gleichen den Mangel aus und verbessern den Zuckerstoffwechsel.' },
      { name: 'Vitamin D', wirkung: 'Reguliert die Insulinausschuettung und schuetzt die Betazellen. Die meisten Diabetiker haben einen massiven Vitamin-D-Mangel.' },
    ],
    ernaehrung: {
      empfehlung: "Die Ernaehrung ist bei Diabetes der maechtigste Hebel. Komplexe Kohlenhydrate, viel Gemuese, gute Fette und Eiweisse halten den Blutzucker stabil. Jede Mahlzeit beginnt idealerweise mit Gemuese oder Salat — das verlangsamt den Zuckeranstieg.",
      staerkend: ["Gruenes Gemuese (Brokkoli, Spinat, Gruenkohl)", "Huelsenfruechte (Linsen, Kichererbsen)", "Nuesse und Samen (Walnuesse, Hanfsamen, Leinsamen)", "Bittere Salate (Chicorée, Radicchio, Loewenzahn)", "Zimt, Kurkuma, Bockshornklee", "Avocado", "Fermentiertes Gemuese", "Kokosoel und Olivenoel"],
      meiden: ["Weissmehl und Zucker", "Suesse Getraenke und Saefte", "Weisser Reis und Kartoffelbrei", "Suessigkeiten und Backwaren", "Fruchtjoghurt und gesuesste Cerealien", "Alkohol", "Stark verarbeitete Lebensmittel"],
      rezepte: [
        { name: 'Blutzucker-Balance-Gemuese', zutaten: '200g Brokkoli, 100g Kichererbsen (gekocht), 1 Avocado, 2 EL Olivenoel, 1 TL Kurkuma, 1/2 TL Zimt, Zitronensaft, Hanfsamen', zubereitung: 'Brokkoli daempfen, mit Kichererbsen, Avocado-Stuecken, Olivenoel und Gewuerzen vermengen. Mit Hanfsamen bestreuen. Diese Mahlzeit haelt den Blutzucker fuer Stunden stabil.' },
        { name: 'Zimt-Bockshornklee-Tee', zutaten: '1 TL Bockshornkleesamen, 1 Zimtstange, 1 Scheibe Ingwer, 300ml Wasser', zubereitung: 'Bockshornkleesamen ueber Nacht in Wasser einweichen. Morgens aufkochen mit Zimtstange und Ingwer, 10 Minuten koecheln. Abseihen und warm trinken — vor dem Fruehstueck.' },
      ]
    },
    fasten: {
      text: "Fasten ist bei Typ-2-Diabetes eine der kraftvollsten Massnahmen. Es senkt den Insulinspiegel, verbessert die Insulinsensitivitaet und kann die Erkrankung in fruehen Stadien rueckgaengig machen. Immer in Absprache mit dem behandelnden Arzt, besonders bei Insulintherapie.",
      formen: ["Intermittierendes Fasten 16:8 — taeglich, als neue Lebensweise", "2-Tage-Fasten pro Woche (5:2-Methode)", "Laengeres Wasserfasten (3-7 Tage) unter aerztlicher Begleitung"],
      reinigung: ["Leberreinigung — die Leber ist zentral fuer den Zuckerstoffwechsel", "Bitterstoffreiche Kuren mit Loewenzahn, Artischocke und Mariendistel", "Darmreinigung mit Zeolith und Flohsamenschalen"]
    },
    bewegung: {
      text: "Bewegung wirkt wie Insulin — sie oeffnet die Zelltueren fuer Zucker, ganz natuerlich. Jeder Spaziergang nach dem Essen senkt den Blutzucker. Muskeln sind das groesste Insulin-Organ des Koerpers.",
      praktiken: ["Spaziergang nach jeder Mahlzeit — 15-20 Minuten genuegen, um den Blutzuckeranstieg zu halbieren", "Krafttraining — Muskelaufbau verbessert die Insulinsensitivitaet langfristig, 2-3 Mal pro Woche", "Yoga — besonders Drehungen massieren die Bauchspeicheldruese und foerdern ihre Funktion", "Tanzen — Freude und Bewegung vereint, beides heilt den Zuckerstoffwechsel"]
    },
    geist: {
      einheit: "Diabetes laedt ein, die Suesse im eigenen Inneren zu finden. Liebe, Geborgenheit und Genuss duerfen empfangen werden — direkt, ohne Umweg ueber Essen. Wer beginnt, sich selbst zu naehren, dessen Zellen oeffnen sich wieder.",
      affirmationen: ["Ich empfange die Suesse des Lebens in jeder Zelle.", "Mein Koerper weiss, wie er Nahrung verwandelt. Ich vertraue ihm.", "Ich bin genug. Ich brauche keinen aeusseren Zucker, um mich ganz zu fuehlen.", "Jede meiner Zellen oeffnet sich fuer Liebe und Naehrung."],
      meditation: "Lege deine Haende auf den Oberbauch, dort wo die Bauchspeicheldruese liegt. Atme warmherzige, goldene Energie in diesen Bereich. Stell dir vor, wie jede Zelle deines Koerpers ihre Tueren oeffnet — bereit zu empfangen. Sprich innerlich: 'Ich oeffne mich. Ich empfange.' Spuere die Suesse dieses Moments.",
      energie: "Das Solarplexus-Chakra (Manipura) ist hier zentral — es regiert Bauchspeicheldruese, Stoffwechsel und Selbstwert. Gelbes Licht, Sonnenenergie und das Element Feuer naehren dieses Zentrum. Auch das Sakralchakra darf gestaerkt werden fuer mehr Lebensfreude und Genuss.",
    },
    produkte: [
      { name: 'Zeolith/ZeoMont', desc: 'Bindet Giftstoffe im Darm, die die Insulinresistenz verstaerken. Entlastet die Leber und verbessert den gesamten Stoffwechsel.', tags: ['#entgiftung', '#stoffwechsel', '#darm'] },
      { name: 'CBD-Oel', desc: 'Reguliert den Blutzucker ueber das Endocannabinoid-System und schuetzt die Betazellen der Bauchspeicheldruese.', tags: ['#blutzucker', '#entzuendungshemmend', '#bauchspeicheldruese'] },
      { name: 'Anorganischer Schwefel', desc: 'Unterstuetzt die Entgiftung ueber die Leber — eine gesunde Leber ist essenziell fuer einen stabilen Blutzucker.', tags: ['#leber', '#entgiftung', '#stoffwechsel'] },
      { name: 'Hanfsamen', desc: 'Ihre Kombination aus Eiweiss, Omega-3 und Ballaststoffen stabilisiert den Blutzucker und naehrt den gesamten Koerper.', tags: ['#blutzucker', '#ernaehrung', '#omega3'] },
    ]
  },

  // ============================================================
  // 14. Schilddruesenthemen
  // ============================================================
  {
    id: 'schilddruese',
    name: 'Schilddruesenthemen',
    tags: ['#schilddruese', '#hashimoto', '#unterfunktion', '#ueberfunktion', '#thyreoidea', '#hormone'],
    koerper: "Die Schilddruese ist die Dirigentin des Stoffwechsels — sie bestimmt das Tempo des gesamten Koerpers. Bei Unterfunktion (Hypothyreose) laeuft alles langsamer: Muedigkeit, Gewichtszunahme, Kaeltempfindlichkeit, Antriebslosigkeit. Bei Ueberfunktion (Hyperthyreose) rast alles: Herzrasen, Gewichtsverlust, Nervositaet, Schlaflosigkeit. Bei Hashimoto greift das Immunsystem die eigene Schilddruese an — ein Autoimmunprozess.",
    psychosomatik: {
      zitat: "Was bleibt dir im Halse stecken?",
      text: "Die Schilddruese sitzt am Hals — dem Ort der Kommunikation, des Ausdrucks, der Stimme. Schilddruesenthemen zeigen sich, wenn eigene Beduerfnisse und Worte unterdrueckt werden. Unterfunktion spiegelt den Rueckzug: 'Ich halte mich zurueck, ich traue mich nicht.' Ueberfunktion zeigt Ueberkompensation: 'Ich muss alles schnell erledigen, ich darf keine Zeit verlieren.' Hashimoto traegt den Autoimmun-Aspekt — der Angriff auf sich selbst. In der freien, liebevollen Selbstexpression liegt Heilung.",
    },
    traditionen: {
      volksmedizin: "Wolfstrapp beruhigte die ueberaktive Schilddruese, waehrend Braunalgen (Kelp) durch ihren Jodgehalt die Unterfunktion stuetzten. Zitronenmelisse galt als sanftes Schilddruesenmittel.",
      tcm: "In der TCM gehoert die Schilddruese zum Funktionskreis Leber und Niere. Unterfunktion zeigt Nieren-Yang-Mangel und Milz-Qi-Schwaeche. Ueberfunktion zeigt Leber-Feuer und Yin-Mangel. Die Behandlung harmonisiert entsprechend und beruhigt den Geist (Shen).",
      ayurveda: "Im Ayurveda spiegelt die Schilddruese das Vishuddha-Chakra (Halschakra). Unterfunktion zeigt Kapha-Ueberschuss, Ueberfunktion Vata-Pitta-Stoerung. Ashwagandha ist das klassische Rasayana (Verjuengungsmittel) fuer die Schilddruese.",
      germanisch: "In der germanischen Medizin zeigt sich die Schilddruese bei einem Frontalangst-Konflikt — 'Etwas kommt auf mich zu und ich bin hilflos.' Bei Hashimoto ist der Konflikt in haengender Heilung, immer wieder getriggert.",
      alchemie: "Alchemistisch ist der Hals der Ort von Mercurius — dem Prinzip der Vermittlung zwischen Kopf (Geist) und Rumpf (Koerper). Schilddruesenthemen zeigen eine Stoerung dieser Vermittlung. Die Heilung liegt im freien Fluss zwischen Denken und Fuehlen.",
    },
    kraeuter: [
      { name: 'Ashwagandha (Withania somnifera)', wirkung: 'Adaptogen, das die Schilddruese in beide Richtungen reguliert. Erhoht T3 und T4 bei Unterfunktion und beruhigt bei Ueberfunktion. Als Pulver oder Extrakt, abends einnehmen.' },
      { name: 'Wolfstrapp (Lycopus)', wirkung: 'Klassisches Mittel bei Schilddruesen-Ueberfunktion. Hemmt die TSH-Wirkung und beruhigt Herzrasen. Als Tinktur unter fachkundiger Begleitung.' },
      { name: 'Zitronenmelisse', wirkung: 'Beruhigt eine ueberaktive Schilddruese sanft und loest die damit verbundene Nervositaet. Als Tee, reichlich und regelmaessig trinken.' },
      { name: 'Schwarzkuemmeloel', wirkung: 'Reguliert das Immunsystem und wirkt entzuendungshemmend — besonders wertvoll bei Hashimoto. Taeglich 1 TL einnehmen.' },
      { name: 'Guggul (Commiphora mukul)', wirkung: 'Ayurvedisches Harz, das die Umwandlung von T4 zu aktivem T3 foerdert und den Stoffwechsel anregt. Bei Unterfunktion hilfreich.' },
    ],
    stoffe: [
      { name: 'Selen', wirkung: 'Essenziell fuer die Schilddruese — wird fuer die Umwandlung von T4 zu T3 benoetigt. Senkt bei Hashimoto die TPO-Antikoerper nachweislich. 200 mcg taeglich (z.B. 2 Paranüsse).' },
      { name: 'Jod', wirkung: 'Baustein der Schilddruesenhormone. Bei Jodmangel-bedingter Unterfunktion essenziell. Vorsicht bei Hashimoto — hier ist die individuelle Dosierung wichtig. Natuerliche Quellen: Algen, Seefisch.' },
      { name: 'Zink', wirkung: 'Wird fuer die TSH-Produktion und die T3-Bildung benoetigt. Zinkmangel verstaerkt Schilddruesenprobleme. 15-30mg taeglich.' },
      { name: 'Vitamin D', wirkung: 'Vitamin-D-Mangel ist bei fast allen Schilddruesen-Patienten vorhanden und verschlechtert Autoimmunprozesse. Spiegel auf 60-80 ng/ml bringen.' },
    ],
    ernaehrung: {
      empfehlung: "Die Schilddruese braucht gezielte Naehrstoffe: Selen, Jod, Zink, Eisen. Eine naehrstoffdichte, entzuendungsarme Ernaehrung ist das Fundament. Bei Hashimoto hilft oft der Verzicht auf Gluten und Milch, da diese Entzuendungen foerdern koennen.",
      staerkend: ["Paranuesse (Selen-Quelle)", "Meeresfisch und Algen (bei Jodmangel)", "Kokosoel (staerkt den Stoffwechsel)", "Beeren und farbenfrohes Gemuese", "Knochenbruehe (Kollagen und Mineralien)", "Ingwer und Kurkuma", "Fermentiertes Gemuese (Sauerkraut, Kimchi)", "Avocado und Olivenoel"],
      meiden: ["Gluten (besonders bei Hashimoto)", "Kuhmilchprodukte", "Sojaprodukte (hemmen die Jodaufnahme)", "Rohes Kreuzbluetler-Gemuese in grossen Mengen (Kohl, Brokkoli — gedaempft ist fein)", "Industriezucker", "Stark verarbeitete Lebensmittel"],
      rezepte: [
        { name: 'Schilddruesen-Power-Bowl', zutaten: '100g Quinoa, 1 Avocado, Handvoll Spinat, 2 Paranuesse, 1 EL Kokosoel, Kurkuma, Spritzer Zitrone, Algen-Flocken', zubereitung: 'Quinoa kochen, mit Kokosoel und Kurkuma vermengen. Spinat, Avocado und zerbroeselte Paranuesse darauf anrichten. Mit Algen-Flocken und Zitrone verfeinern.' },
        { name: 'Ashwagandha-Mond-Milch', zutaten: '250ml Mandelmilch, 1 TL Ashwagandha-Pulver, 1/2 TL Zimt, Prise Muskatnuss, 1 TL Honig', zubereitung: 'Mandelmilch erwaermen, Ashwagandha und Gewuerze einruehren, mit Honig suessen. Abends trinken — naehrt die Schilddruese und foerdert erholsamen Schlaf.' },
      ]
    },
    fasten: {
      text: "Bei Schilddruesenthemen ist achtsames Fasten ratsam. Zu langes oder strenges Fasten kann bei Unterfunktion den Stoffwechsel weiter drosseln. Sanftes, zeitbegrenztes Fasten mit naehrstoffreicher Kost in den Essensphasen ist ideal.",
      formen: ["Intermittierendes Fasten 14:10 (sanfter als 16:8, besonders bei Unterfunktion)", "Basenfasten 7 Tage — reinigt und belastet die Schilddruese dabei kaum", "Saftfasten 3 Tage mit gruenen Saeften und Selleriesaft"],
      reinigung: ["Schwermetallausleitung mit Zeolith und Chlorella — Quecksilber und andere Metalle belasten die Schilddruese massiv", "Leberreinigung — die Leber wandelt T4 in aktives T3 um", "Salzwasserspuelung des Halses und Oelziehen am Morgen"]
    },
    bewegung: {
      text: "Bei Unterfunktion hilft aufbauende, waermende Bewegung — sie regt den Stoffwechsel an. Bei Ueberfunktion ist beruhigende, erdende Bewegung heilsam. In jedem Fall: sanft beginnen und mit Freude bewegen.",
      praktiken: ["Schulterstand (Sarvangasana) — die klassische Yoga-Uebung fuer die Schilddruese, foerdert die Durchblutung der Halsgegend", "Singen und Toenen — vibrierende Klaenge im Halsbereich stimulieren die Schilddruese direkt", "Zuegiges Gehen — regt den Stoffwechsel an bei Unterfunktion, taeglich 30 Minuten", "Yin Yoga — beruhigend bei Ueberfunktion, besonders Haltungen die den Hals oeffnen"]
    },
    geist: {
      einheit: "Die Schilddruese laedt ein, die eigene Stimme zu finden und zu leben. Was will gesagt werden? Was darf endlich ausdrueckt werden? In dem Moment, wo du dich frei aeusserst und dein Tempo findest, findet auch die Schilddruese ihr Gleichgewicht.",
      affirmationen: ["Ich spreche meine Wahrheit — liebevoll und klar.", "Mein Koerper findet sein perfektes Tempo. Ich vertraue meinem Rhythmus.", "Ich bin sicher genug, um mich auszudruecken. Meine Stimme zaehlt.", "Ich bin in Frieden mit mir selbst. Mein Immunsystem schuetzt mich liebevoll."],
      meditation: "Richte deine Aufmerksamkeit auf deinen Hals. Spuere den Raum dort — weit und offen. Beginne, leise zu summen — spuere die Vibration in der Schilddruese. Stell dir ein strahlendes, tuerkises Licht an deinem Hals vor, das waermt und heilt. Sage innerlich: 'Ich darf sein, wer ich bin. Ich darf sagen, was ich fuehle.'",
      energie: "Das Halschakra (Vishuddha) ist hier das zentrale Energiezentrum. Tuerkises Licht, Singen, Mantren (besonders 'HAM') und das Tragen von tuerkisfarbenen Steinen (Tuerkis, Aquamarin) naehren dieses Chakra. Auch das Stirnchakra darf einbezogen werden fuer die hormonelle Steuerung ueber die Hypophyse.",
    },
    produkte: [
      { name: 'Borax-Tinktur', desc: 'Bor unterstuetzt die Hormonbalance und die Aufnahme von Vitamin D — beides essenziell fuer die Schilddruese. Reguliert zudem Autoimmunprozesse.', tags: ['#hormone', '#vitaminD', '#autoimmun'] },
      { name: 'Zeolith/ZeoMont', desc: 'Bindet Schwermetalle, die die Schilddruese belasten (besonders Quecksilber). Reinigt den Koerper auf zellulaerer Ebene.', tags: ['#entgiftung', '#schwermetalle', '#schilddruese'] },
      { name: 'CBD-Oel', desc: 'Reguliert das Immunsystem und kann Autoimmunprozesse (Hashimoto) beruhigen. Zusaetzlich foerdert es erholsamen Schlaf.', tags: ['#autoimmun', '#immunsystem', '#schlaf'] },
      { name: 'Artemisia Annua', desc: 'Unterstuetzt das Immunsystem bei Autoimmunprozessen und wirkt entzuendungshemmend auf das Schilddruesengewebe.', tags: ['#immunsystem', '#entzuendungshemmend', '#hashimoto'] },
    ]
  },

  // ============================================================
  // 15. Autoimmunthemen
  // ============================================================
  {
    id: 'autoimmun',
    name: 'Autoimmunthemen',
    tags: ['#autoimmun', '#immunsystem', '#entzuendung', '#hashimoto', '#lupus', '#multiplesklerose', '#colitis'],
    koerper: "Bei Autoimmunerkrankungen verwechselt das Immunsystem koerpereigene Zellen mit Feinden und greift sie an. Bei Hashimoto ist es die Schilddruese, bei Multipler Sklerose die Nervenhuellen, bei Lupus verschiedene Organe, bei Colitis die Darmschleimhaut. Chronische Entzuendungen breiten sich aus und zerstoeren langsam gesundes Gewebe. Der Koerper kaempft gegen sich selbst — ein zutiefst erschoepfender Zustand.",
    psychosomatik: {
      zitat: "Wo kaempfst du gegen dich selbst?",
      text: "Autoimmunitaet ist der koerperliche Ausdruck eines inneren Krieges. Der Koerper tut, was die Seele vorlebt: sich selbst angreifen, sich selbst verurteilen, sich selbst ablehnen. Haeufig steckt eine tiefe Selbstkritik dahinter, das Gefuehl, grundsaetzlich falsch zu sein. Auch verdraengte Wut, die sich nach innen richtet, zeigt sich so. Die Heilung beginnt mit Selbstannahme — mit dem tiefen, bedingungslosen 'Ja' zu sich selbst. In dem Moment, wo innerer Friede einzieht, darf auch das Immunsystem Frieden schliessen.",
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte Autoimmunitaet als Konzept kaum, behandelte die Symptome mit entzuendungshemmenden Kraeutern wie Weidenrinde, Kamille und Ringelblume. Blutreinigungskuren im Fruehling galten als vorbeugend.",
      tcm: "In der TCM zeigt sich Autoimmunitaet als tiefe Disharmonie zwischen Wei-Qi (Abwehr) und Zheng-Qi (aufrechtes Qi). Oft liegt eine Milz-Qi-Schwaeche mit Feuchtigkeit und Hitze vor. Die Behandlung staerkt das Zheng-Qi und loest die pathogenen Faktoren.",
      ayurveda: "Im Ayurveda spiegelt Autoimmunitaet ein gestörtes Ojas (Vitalkraft) und massives Ama (Toxine) im Gewebe. Panchakarma-Reinigungskuren, Rasayana-Therapie und eine streng sattvische Ernaehrung bilden den Heilungsweg.",
      germanisch: "In der germanischen Medizin zeigen Autoimmunerkrankungen einen aktiven Konflikt in haengender Heilung — das Immunsystem wird staendig getriggert und kommt nie zur Ruhe. Die Loesung des zugrunde liegenden biologischen Konflikts ist essenziell.",
      alchemie: "Alchemistisch ist Autoimmunitaet das Solve ohne Coagula — Aufloesung ohne Neuformung. Der Koerper loest sich selbst auf, findet keinen neuen Zusammenhalt. Das Opus liegt in der Coniunctio — der Vereinigung der inneren Gegensetze, dem Frieden zwischen den Teilen des Selbst.",
    },
    kraeuter: [
      { name: 'Kurkuma (Curcuma longa)', wirkung: 'Eines der staerksten natuerlichen Entzuendungshemmer. Moduliert das Immunsystem, schuetzt Gewebe und reduziert Autoimmun-Antikoerper. Taeglich 2-4g mit Pfeffer und Fett.' },
      { name: 'Weihrauch (Boswellia serrata)', wirkung: 'Boswelliasaeuren hemmen Entzuendungswege, die bei Autoimmunerkrankungen ueberaktiv sind. Besonders wirksam bei Darmentzuendungen und Gelenkbeteiligung.' },
      { name: 'Reishi (Ganoderma lucidum)', wirkung: 'Intelligenter Immunmodulator — beruhigt Ueberreaktionen und staerkt die gesunde Abwehr gleichzeitig. Ueber Monate als Extrakt einnehmen.' },
      { name: 'Ashwagandha', wirkung: 'Adaptogen, das die Stressachse reguliert — chronischer Stress ist ein Haupttreiber von Autoimmunitaet. Staerkt zugleich die Regeneration und den Schlaf.' },
      { name: 'Katzenkralle (Uncaria tomentosa)', wirkung: 'Moduliert die Immunantwort und wirkt entzuendungshemmend. Traditionelles Regenwaldmittel fuer das Immunsystem.' },
      { name: 'Aloe Vera', wirkung: 'Beruhigt entzuendete Schleimhaeute (besonders im Darm), moduliert die Immunantwort und foerdert die Geweberegeneration. Frisches Gel oder reiner Saft.' },
    ],
    stoffe: [
      { name: 'Vitamin D', wirkung: 'Zentraler Immunregulator. Fast alle Autoimmun-Patienten haben massive Maengel. Hohe Dosen (nach Spiegelbestimmung, oft 5000-10000 IE taeglich) koennen Autoimmunschuebe reduzieren.' },
      { name: 'Omega-3-Fettsaeuren', wirkung: 'EPA und DHA wirken stark entzuendungshemmend und regulieren die T-Zell-Funktion. 2-4g taeglich aus Algenoel oder Leinoel.' },
      { name: 'Glutathion', wirkung: 'Das koerpereigene Meister-Antioxidans. Schuetzt Zellen vor oxidativem Stress und unterstuetzt die Entgiftung. Als liposomales Glutathion oder ueber Vorstufen (NAC, Selen).' },
      { name: 'Selen', wirkung: 'Essenziell fuer die Immunregulation und die Glutathion-Produktion. 200 mcg taeglich senken Autoimmun-Antikoerper nachweislich.' },
    ],
    ernaehrung: {
      empfehlung: "Eine entzuendungshemmende, naehrstoffdichte Ernaehrung ist das Fundament. Das Autoimmun-Protokoll (AIP) hat vielen Menschen geholfen: Es entfernt entzuendungsfoerdernde Lebensmittel und naehrt den Koerper mit heilender Kost. Die Darmgesundheit steht im Zentrum — denn dort sitzt 80% des Immunsystems.",
      staerkend: ["Knochenbruehe (heilt den Darm)", "Gruenes Blattgemuese", "Wilde Beeren und Granatapfel", "Kurkuma und Ingwer taeglich", "Fermentiertes Gemuese (in kleinen Mengen)", "Kokosoel und Olivenoel", "Organ-Fleisch (Leber) fuer Naehrstoffdichte", "Sueskartoffeln und Wurzelgemuese"],
      meiden: ["Gluten (oberste Prioritaet)", "Kuhmilchprodukte", "Industriezucker", "Nachtschattengewaechse (bei Schubneigung: Tomaten, Paprika, Kartoffeln, Auberginen)", "Huelsenfruechte (in der strengen Phase)", "Alkohol", "Verarbeitete Lebensmittel und Zusatzstoffe"],
      rezepte: [
        { name: 'Heilende Knochenbruehe', zutaten: '1kg Rinder- oder Huehnerknochen, 2 EL Apfelessig, 2L Wasser, Kurkuma, Ingwer, Meersalz', zubereitung: 'Knochen mit kaltem Wasser und Apfelessig ansetzen, 30 Minuten warten. Dann zum Kochen bringen, Schaum abschoepfen, auf kleinste Flamme reduzieren. 12-24 Stunden koecheln lassen. Abseihen, mit Kurkuma und Ingwer verfeinern. Taeglich 1-2 Tassen trinken — heilt die Darmschleimhaut.' },
        { name: 'Autoimmun-Gruener-Smoothie', zutaten: '1 Handvoll Spinat, 1/2 Avocado, 1 Stueck Ingwer, 1/2 Gurke, 200ml Kokoswasser, 1 TL Kurkuma, 1 EL Kokosoel', zubereitung: 'Alles im Mixer puerieren. Naehrt und beruhigt das Immunsystem. Taeglich morgens trinken.' },
      ]
    },
    fasten: {
      text: "Fasten gibt dem Immunsystem die Chance, sich zu 'resetten'. Die Autophagie (Zellreinigung) waehrend des Fastens raeumt fehlprogrammierte Immunzellen auf. Studien zeigen, dass laengeres Fasten Autoimmunschuebe reduzieren kann.",
      formen: ["Intermittierendes Fasten 16:8 als tägliche Praxis", "5-Tage-Fastenimitierende-Diaet (FMD nach Valter Longo) — klinisch erforscht bei Autoimmunitaet", "Saftfasten 3-5 Tage mit gruenen Saeften"],
      reinigung: ["Darmreinigung und -aufbau — das Immunsystem sitzt im Darm", "Schwermetallausleitung mit Zeolith und Chlorella", "Leberreinigung mit Mariendistel und Loewenzahn"]
    },
    bewegung: {
      text: "Bei Autoimmunthemen ist die Balance zwischen Aktivitaet und Ruhe entscheidend. Zu viel Anstrengung kann Schuebe foerdern, zu wenig schwaecht den Koerper. Sanfte, freudvolle Bewegung naehrt den Koerper, ohne ihn zu erschoepfen.",
      praktiken: ["Sanftes Yoga — besonders restaurative Haltungen, die den Parasympathikus aktivieren", "Qi Gong — bewegt die Lebensenergie und harmonisiert das Immunsystem, 20 Minuten taeglich", "Spaziergaenge in der Natur — Waldluft (Phytonzide) reguliert nachweislich das Immunsystem", "Schwimmen in warmem Wasser — entlastet die Gelenke und beruhigt das Nervensystem"]
    },
    geist: {
      einheit: "Autoimmunitaet ist die Einladung, Frieden mit dir selbst zu schliessen. Der Koerper zeigt, was innen geschieht — den Kampf gegen das eigene Sein. In dem Moment, wo du dich ganz annimmst — mit allen vermeintlichen Fehlern, mit deiner ganzen Geschichte — darf dein Immunsystem aufhoeren zu kaempfen.",
      affirmationen: ["Ich bin in Frieden mit mir selbst. Jede Zelle meines Koerpers ist willkommen.", "Mein Immunsystem erkennt mich als Freund. Ich bin sicher in meinem Koerper.", "Ich lasse den inneren Kampf los. Ich waehle Sanftheit und Annahme.", "Ich bin ganz und heil, genau so wie ich bin."],
      meditation: "Lege dich bequem hin. Atme tief. Stell dir vor, wie ein warmes, goldenes Licht deinen gesamten Koerper durchflutet. Ueberall wo es hinfliesst, legen die Immunzellen ihre Waffen nieder. Sie erkennen: 'Das hier ist Heimat. Das hier gehoert zu mir.' Spuere, wie Friede in jede Zelle einzieht. Sage innerlich: 'Ich bin eins mit mir. Alles an mir ist richtig.'",
      energie: "Alle Chakren duerfen hier in Balance gebracht werden — besonders das Herzchakra (Selbstliebe), das Solarplexus-Chakra (Selbstwert) und das Wurzelchakra (Sicherheit im eigenen Koerper). Raeuchern mit Salbei reinigt das Energiefeld. Rosenquarz am Herzen unterstuetzt die Selbstannahme.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: 'Moduliert das Immunsystem intelligent — beruhigt ueberaktive Immunantworten und staerkt die gesunde Abwehr. Traditionell bei Entzuendungsprozessen eingesetzt.', tags: ['#immunmodulation', '#entzuendungshemmend', '#artemisinin'] },
      { name: 'CBD-Oel', desc: 'Wirkt ueber das Endocannabinoid-System regulierend auf das Immunsystem. Reduziert Entzuendungen und foerdert die innere Ruhe, die bei Autoimmunthemen so essenziell ist.', tags: ['#immunsystem', '#entzuendung', '#entspannung'] },
      { name: 'Zeolith/ZeoMont', desc: 'Entgiftet den Darm und staerkt die Darmbarriere — die erste Verteidigungslinie des Immunsystems. Bindet Toxine, die Autoimmunschuebe triggern koennen.', tags: ['#darmgesundheit', '#entgiftung', '#immunsystem'] },
      { name: 'Borax-Tinktur', desc: 'Bor reguliert Immunprozesse und foerdert die Aufnahme von Vitamin D. Unterstuetzt bei Autoimmunerkrankungen die Rebalancierung des Immunsystems.', tags: ['#immunregulation', '#bor', '#vitaminD'] },
      { name: 'Anorganischer Schwefel', desc: 'Schwefel ist Baustein von Glutathion — dem Meister-Antioxidans, das bei Autoimmunitaet essenziell ist. Unterstuetzt die Leber bei der Entgiftung.', tags: ['#glutathion', '#entgiftung', '#schwefel'] },
    ]
  },

  // ============================================================
  // 16. Krebs (begleitende Unterstuetzung)
  // ============================================================
  {
    id: 'krebs',
    name: 'Krebs (begleitende Unterstuetzung)',
    tags: ['#krebs', '#tumor', '#onkologie', '#begleittherapie', '#heilkraft', '#immunsystem'],
    koerper: "Krebs entsteht, wenn Zellen beginnen, sich unkontrolliert zu teilen. Die natuerlichen Kontrollmechanismen (Tumorsuppressorgene, Apoptose, Immunueberwachung) sind uebergangen. Ein Tumor waechst, der Koerper erkennt diese Zellen nur eingeschraenkt als fehlerhaft. Gleichzeitig hat der Koerper eine unglaubliche Heilkraft — taeglich erkennt und beseitigt das Immunsystem tausende entartete Zellen. Diese Kraft darf unterstuetzt und gestaerkt werden.",
    psychosomatik: {
      zitat: "Welcher Konflikt sucht sich seinen Ausdruck?",
      text: "In der psychosomatischen Sicht nach Hamer, Dahlke und Dethlefsen steht hinter jeder Krebserkrankung ein schwerer biologischer Konfliktschock — ein Ereignis, das als existenzbedrohend empfunden wurde. Je nach Organlokalisation zeigt sich der spezifische Konflikt: Brustkrebs oft ein Sorge-Konflikt (Nest), Lungenkrebs ein Todesangst-Konflikt, Darmkrebs ein 'unverdaulicher Aerger'. Das Wissen um den Konflikt gibt Kraft und Orientierung. In der Loesung des Konflikts, in der Rueckkehr zu innerem Frieden und Lebensbejahung liegt eine maechtige Heilkraft, die jede Therapie unterstuetzt.",
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte Misteltherapie (Viscum album), die heute in der anthroposophischen Medizin wissenschaftlich erforscht wird. Beifuss (Artemisia), Schöllkraut und Blutwurz galten als Tumorpflanzen. Bittere Krauter und Reinigungskuren waren Grundpfeiler.",
      tcm: "In der TCM entsteht Krebs durch Qi-Stagnation, Blutstase und Ansammlung von Schleim und Toxinen. Die Behandlung loest Stagnation, bewegt das Blut, staerkt das Zheng-Qi (aufrechtes Qi) und das Wei-Qi (Abwehr). Heilpilze wie Reishi, Maitake und Coriolus sind zentrale Mittel.",
      ayurveda: "Im Ayurveda zeigt Krebs eine schwere Tridosha-Stoerung mit massiver Ama-Ansammlung (Toxine). Tiefe Reinigung (Panchakarma), Rasayana-Therapie (Verjuengung) und meditative Praxis bilden den Heilungsweg. Kurkuma und Tulsi sind hoch geschaetzte Begleiter.",
      germanisch: "In der germanischen Medizin nach Hamer ist jede Krebsart die Antwort auf einen spezifischen biologischen Konflikt — einen DHS (Dirk-Hamer-Syndrom). Der Tumor ist biologisch sinnvoll und dient der Konfliktbewaeltigung. Die Loesung des Konflikts leitet die Heilungsphase ein.",
      alchemie: "Alchemistisch ist Krebs eine Nigredo — die schwaerzeste Phase der Transformation. Und in genau dieser Dunkelheit liegt der Keim der Erneuerung. Wie der Phoenix aus der Asche steigt, so kann aus der Krise eine tiefe Verwandlung entstehen. Krebs fordert den ganzen Menschen — und genau darin liegt sein Geschenk.",
    },
    kraeuter: [
      { name: 'Mistel (Viscum album)', wirkung: 'Wissenschaftlich erforscht in der begleitenden Krebstherapie. Staerkt das Immunsystem, verbessert die Lebensqualitaet und kann Nebenwirkungen von Chemo und Bestrahlung reduzieren. Als Injektion unter anthroposophischer Begleitung.' },
      { name: 'Artemisia Annua (Einjaehriger Beifuss)', wirkung: 'Artemisinin zeigt in Studien selektive Wirkung auf Krebszellen, die vermehrt Eisen speichern. Staerkt das Immunsystem und unterstuetzt den Koerper ganzheitlich.' },
      { name: 'Reishi (Ganoderma lucidum)', wirkung: 'Der Pilz der Unsterblichkeit. Staerkt die natuerlichen Killerzellen, moduliert das Immunsystem und unterstuetzt den Koerper waehrend konventioneller Therapien. Triterpene und Beta-Glucane sind die Wirkstoffe.' },
      { name: 'Kurkuma (Curcuma longa)', wirkung: 'Curcumin hemmt Entzuendungswege (NF-kB), foerdert die Apoptose von Krebszellen und schuetzt gesundes Gewebe. In hoher Dosierung mit Pfeffer und Fett.' },
      { name: 'Wermut und Schafgarbe', wirkung: 'Bitterstoffe staerken Leber und Verdauung — essenziell fuer die Entgiftung waehrend der Therapie. Als Tee-Mischung taeglich.' },
      { name: 'Mariendistel (Silybum marianum)', wirkung: 'Schuetzt die Leber — besonders wichtig waehrend Chemotherapie. Silymarin regeneriert Leberzellen und staerkt die Entgiftungskapazitaet.' },
    ],
    stoffe: [
      { name: 'Vitamin C (hochdosiert)', wirkung: 'Hochdosiertes Vitamin C (intravenoes) kann Krebszellen selektiv schaedigen und gleichzeitig gesunde Zellen staerken. Oral 3-5g taeglich unterstuetzt das Immunsystem.' },
      { name: 'Vitamin D', wirkung: 'Hohe Vitamin-D-Spiegel sind mit besserem Therapieverlauf assoziiert. Reguliert Zellwachstum, foerdert Apoptose und staerkt das Immunsystem. Spiegel auf 80-100 ng/ml bringen.' },
      { name: 'Selen', wirkung: 'Schuetzt gesunde Zellen vor oxidativem Stress waehrend der Therapie und staerkt die Immunabwehr. 200-300 mcg taeglich.' },
      { name: 'Zink', wirkung: 'Essenziell fuer die Funktion der natuerlichen Killerzellen und die Zellreparatur. 30mg taeglich.' },
    ],
    ernaehrung: {
      empfehlung: "Die Ernaehrung bei Krebs darf den Koerper maximal naehren und staerken. Zucker ernaehrt Krebszellen bevorzugt (Warburg-Effekt) — eine zuckerarme, naehrstoffdichte Ernaehrung ist kraftvoll. Antioxidantienreiche, bunte Lebensmittel schuetzen die gesunden Zellen. Jede Mahlzeit ist ein Akt der Selbstfuersorge.",
      staerkend: ["Kurkuma mit schwarzem Pfeffer (taeglich)", "Brokkoli-Sprossen (Sulforaphan — einer der staerksten natuerlichen Krebshemmer)", "Beeren (Blaubeeren, Himbeeren, Brombeeren)", "Gruener Tee (EGCG)", "Pilze (Shiitake, Maitake, Reishi)", "Knoblauch und Zwiebeln", "Gruenes Blattgemuese", "Fermentiertes Gemuese", "Ingwer", "Leinsamen (Lignane)"],
      meiden: ["Zucker und Suessigkeiten", "Weissmehlprodukte", "Verarbeitetes Fleisch (Wurst, Schinken)", "Alkohol", "Transfette und frittierte Lebensmittel", "Kuenstliche Zusatzstoffe"],
      rezepte: [
        { name: 'Heilkraft-Bruehe', zutaten: '2L Wasser, 3 Shiitake-Pilze, Stueck Kurkumawurzel, Stueck Ingwer, 3 Knoblauchzehen, 1 Zwiebel, Handvoll Brokkoli, Meersalz, schwarzer Pfeffer', zubereitung: 'Alles langsam 30 Minuten koecheln lassen. Abseihen oder als Suppe essen. Diese Bruehe vereint die staerksten natuerlichen Schutzstoffe in einer Mahlzeit. Taeglich eine Schale — warmherzig und naehrend.' },
        { name: 'Antioxidantien-Smoothie', zutaten: '1 Tasse Blaubeeren, 1 TL Kurkuma, Stueck Ingwer, 1 Handvoll Spinat, 200ml Gruentee (abgekuehlt), 1 EL Leinsamen, 1 EL Hanfsamen', zubereitung: 'Alles mixen. Dieser Smoothie ist ein Kraftpaket an zellschuetzenden Stoffen. Morgens trinken — ein liebevoller Start in den Tag.' },
      ]
    },
    fasten: {
      text: "Kurzzeitfasten vor und waehrend Chemotherapie zeigt in Studien vielversprechende Ergebnisse: Gesunde Zellen gehen in einen Schutzmodus, waehrend Krebszellen verwundbarer werden. Dies kann Nebenwirkungen reduzieren und die Wirksamkeit erhoehen. Immer in Absprache mit dem behandelnden Arzt.",
      formen: ["Kurzzeitfasten 24-72 Stunden vor und nach Chemotherapie (nach Valter Longo)", "Fastenimitierende Diaet (FMD) in Therapiepausen", "Intermittierendes Fasten 16:8 als unterstuetzende Lebensweise"],
      reinigung: ["Sanfte Leberreinigung mit Mariendistel und Artischocke — die Leber traegt die Hauptlast der Entgiftung", "Basische Baeder mit Natron und Epsomit — unterstuetzen die Ausleitung ueber die Haut", "Lymphdrainage und Trockenbuersten — foerdern den Abtransport von Stoffwechselabfaellen"]
    },
    bewegung: {
      text: "Bewegung waehrend einer Krebstherapie staerkt den Koerper, hebt die Stimmung und verbessert nachweislich den Therapieverlauf. Sanft und liebevoll — jede Bewegung, die Freude macht, ist heilsam. Der Koerper darf sich als lebendig und kraftvoll erleben.",
      praktiken: ["Spaziergaenge im Wald — Phytonzide der Baeume aktivieren die natuerlichen Killerzellen, 30 Minuten taeglich", "Sanftes Yoga — Atemuebungen und sanfte Haltungen staerken Koerper und Geist, foerdern die Regeneration", "Qi Gong — bewegt die Lebensenergie und loest Stagnation, besonders heilsam bei Krebs", "Tanzen zur Lieblingsmusik — Freude ist Medizin fuer jede Zelle"]
    },
    geist: {
      einheit: "Krebs ist eine Einladung zur tiefsten Transformation. Der Koerper hat unglaubliche Heilkraft — sie wird gestaerkt durch Lebensbejahung, Vertrauen und Sinn. Jeder Mensch, der mit Krebs lebt, darf wissen: Du bist mehr als diese Diagnose. Dein Koerper kaempft fuer dich, dein Geist kann ihm dabei helfen. In der Loesung des inneren Konflikts, in der Rueckkehr zu Freude und Liebe liegt eine Kraft, die jede Therapie unterstuetzt.",
      affirmationen: ["Mein Koerper hat unglaubliche Heilkraft. Ich vertraue ihm.", "Jede gesunde Zelle in mir ist stark und lebendig.", "Ich waehle das Leben. Ich waehle die Freude. Ich waehle die Liebe.", "Tag fuer Tag wird mein Koerper staerker. Ich bin auf dem Weg der Heilung.", "Ich bin mehr als diese Diagnose. Ich bin Lebenskraft."],
      meditation: "Lege dich hin und schliesse die Augen. Atme tief und ruhig. Stell dir vor, wie strahlendes, goldenes Licht durch deinen Koerper fliesst — wie eine innere Sonne. Ueberall wo es hinkommt, staerkt es die gesunden Zellen und laedt sie mit Lebenskraft auf. Stell dir vor, wie dein Immunsystem — starke, liebevolle Waechter — jede Zelle ueberpruefen und alles, was nicht gehoert, sanft auflösen. Spuere die Kraft deines Koerpers. Sage: 'Ich bin Heilung. Ich bin Lebenskraft.'",
      energie: "Alle Energiezentren duerfen hier aktiviert und harmonisiert werden. Besonders das Herzchakra (Lebensbejahung, Liebe), das Wurzelchakra (Ueberlebenswille) und das Kronenchakra (Verbindung mit dem Groesseren). Energiearbeit, Reiki, Handauflegen — alles was den Energiefluss foerdert, unterstuetzt die Heilung.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: 'Artemisinin zeigt in Studien selektive Wirksamkeit gegen Krebszellen. Staerkt das Immunsystem und wird traditionell als kraftvolle Heilpflanze geschaetzt.', tags: ['#artemisinin', '#immunsystem', '#zellschutz'] },
      { name: 'CBD-Oel', desc: 'Unterstuetzt bei Schmerzen, Uebelkeit und Appetitlosigkeit waehrend der Therapie. Foerdert Schlaf und innere Ruhe — beides essenziell fuer die Heilung.', tags: ['#schmerz', '#uebelkeit', '#schlaf', '#lebensqualitaet'] },
      { name: 'Zeolith/ZeoMont', desc: 'Bindet Toxine und Schwermetalle, entlastet die Leber waehrend der Therapie und staerkt die koerpereigene Entgiftung.', tags: ['#entgiftung', '#leber', '#therapiebegleitung'] },
      { name: 'Natron', desc: 'Unterstuetzt ein basisches Milieu im Koerper. Krebszellen gedeihen in saurem Milieu — Basenbäder und innerliche Anwendung (nach Anleitung) schaffen ein unguenstiges Umfeld fuer Tumorzellen.', tags: ['#basisch', '#milieu', '#entgiftung'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat-Baeder entspannen, entgiften und fuehren Magnesium zu. Wohltuend waehrend der Therapie und foerdert die Regeneration.', tags: ['#magnesium', '#entspannung', '#entgiftung'] },
    ]
  },

  // ============================================================
  // 17. Depression / Schwermut
  // ============================================================
  {
    id: 'depression',
    name: 'Depression / Schwermut',
    tags: ['#depression', '#schwermut', '#antriebslosigkeit', '#traurigkeit', '#serotonin', '#seele'],
    koerper: "Bei Depression veraendert sich die Biochemie des Gehirns — Serotonin, Dopamin und Noradrenalin geraten aus dem Gleichgewicht. Die Nervenzellen kommunizieren langsamer, das Belohnungssystem wird taub. Gleichzeitig steigen Entzuendungsmarker im Koerper, die Darm-Hirn-Achse ist oft gestoert, die Nebennieren erschoepft. Der ganze Koerper ist betroffen — Depression ist eine systemische Erkrankung, die Koerper, Geist und Seele umfasst.",
    psychosomatik: {
      zitat: "Was drueckt dich so tief nach unten — und was moechte wieder aufsteigen?",
      text: "Depression ist der Ruf der Seele nach Tiefe. Etwas Wesentliches wurde verdraengt — ein Schmerz, eine Trauer, ein ungelebtes Leben. Dahlke sieht in der Depression die 'Einladung zur Unterweltreise': Der Abstieg in die eigene Dunkelheit, um dort den verlorenen Schatz zu finden. Louise Hay beschreibt es als verdraengte Wut, die sich nach innen richtet. In der Depression liegt ein enormes Potenzial — wer aus der Tiefe zurueckkehrt, traegt Weisheit und Mitgefuehl in sich, die vorher unerreichbar waren.",
    },
    traditionen: {
      volksmedizin: "Johanniskraut war und ist das Sonnenkraut — es bringt Licht in die Seele. Auch Rosmarinbaeder zur Belebung, Lavendelkissen fuer den Schlaf und Melissentee zur Beruhigung gehoerten zum Repertoire der Volksheiler.",
      tcm: "In der TCM ist Depression haeufig eine Leber-Qi-Stagnation — die Lebensenergie fliesst nicht mehr frei. Auch Herz-Blut-Mangel und Milz-Qi-Schwaeche koennen zugrunde liegen. Die Behandlung bewegt das Qi, naehrt das Blut und staerkt den Geist (Shen).",
      ayurveda: "Im Ayurveda zeigt Depression ein erhoehtes Tamas (Traegheit) und gestoertes Vata. Sattvische Ernaehrung, Sonnenlicht, Abhyanga (Oelmassage) und aufbauende Kraeter wie Brahmi und Ashwagandha heben die Schwere. Prana (Lebensatem) muss wieder fliessen.",
      germanisch: "In der germanischen Medizin zeigt Depression einen nicht geloesten Verlust-Konflikt — der Verlust eines geliebten Menschen, einer Zugehoerigkeit, eines Lebenssinns. Die biologische Reaktion ist der Rueckzug, das Sparen von Energie.",
      alchemie: "Alchemistisch ist Depression die Nigredo — die Schwaerzung, der notwendige Abstieg ins Dunkel. Es ist die schmerzhafteste, gleichzeitig transformativste Phase des Opus Magnum. Aus der Asche der Nigredo steigt das Gold auf. Depression ist der Anfang der Verwandlung.",
    },
    kraeuter: [
      { name: 'Johanniskraut (Hypericum perforatum)', wirkung: 'Das Sonnenkraut. Klinisch erwiesen wirksam bei leichter bis mittlerer Depression — vergleichbar mit synthetischen Antidepressiva. Erhoht Serotonin, Dopamin und Noradrenalin. 300mg Extrakt, 3x taeglich. Achtung: Wechselwirkungen mit Medikamenten moeglich.' },
      { name: 'Safran (Crocus sativus)', wirkung: 'Klinisch erforscht als Stimmungsaufheller. Wirkt auf die Serotonin-Wiederaufnahme aehnlich wie SSRIs. 30mg Safran-Extrakt taeglich — teuer, doch kraftvoll.' },
      { name: 'Rosenwurz (Rhodiola rosea)', wirkung: 'Adaptogen, das die Stressresistenz erhoht und die mentale Energie steigert. Hilft besonders bei Erschoepfungsdepression und Antriebslosigkeit.' },
      { name: 'Ashwagandha', wirkung: 'Reguliert die Stressachse (HPA-Achse), senkt Cortisol und foerdert erholsamen Schlaf. Gibt dem Koerper Kraft, aus der Erschoepfung aufzutauchen.' },
      { name: 'Lavendel', wirkung: 'Beruhigt das Nervensystem, lindert Angst und foerdert den Schlaf. Als Tee, ätherisches Oel oder Badezusatz — die Seele atmet auf.' },
      { name: 'Damiana (Turnera diffusa)', wirkung: 'Traditionelles Mittel gegen Schwermut und Erschoepfung. Hebt die Stimmung sanft und staerkt die Lebenskraft. Als Tee oder Tinktur.' },
    ],
    stoffe: [
      { name: 'Vitamin D', wirkung: 'Der "Sonnenschein-Vitamin". Massive Mangel sind bei Depression die Regel. Vitamin D wird im Gehirn fuer die Serotoninsynthese gebraucht. Spiegel auf 60-80 ng/ml bringen.' },
      { name: 'Omega-3-Fettsaeuren (EPA)', wirkung: 'EPA wirkt entzuendungshemmend im Gehirn und verbessert die Neurotransmitterbalance. 2-3g EPA-reiches Fischoel oder Algenoel taeglich.' },
      { name: 'Magnesium', wirkung: 'Magnesiummangel verstaerkt Depression und Aengste. Magnesium beruhigt das Nervensystem und unterstuetzt die Serotoninsynthese. 400-600mg taeglich.' },
      { name: 'B-Vitamine (besonders B6, B9, B12)', wirkung: 'Essenziell fuer die Neurotransmitterbildung. Mangel fuehrt direkt zu depressiven Symptomen. Als Komplex in methylierter Form einnehmen.' },
    ],
    ernaehrung: {
      empfehlung: "Die Darm-Hirn-Achse ist bei Depression zentral — 90% des Serotonins werden im Darm gebildet. Eine darmgesunde, entzuendungsarme Ernaehrung hebt die Stimmung biochemisch. Jede Mahlzeit, die den Koerper naehrt, ist ein Akt der Selbstliebe.",
      staerkend: ["Fetter Fisch oder Algenoel (Omega-3)", "Dunkle Schokolade (ab 85%)", "Walnuesse und Hanfsamen", "Fermentiertes Gemuese (Sauerkraut, Kimchi)", "Kurkuma und Safran", "Bananen und Datteln (Tryptophan)", "Haferflocken", "Gruenes Blattgemuese (Folsaeure)"],
      meiden: ["Industriezucker (erzeugt Stimmungsschwankungen)", "Alkohol (ist ein Depressivum)", "Weissmehlprodukte", "Stark verarbeitete Lebensmittel", "Koffein in Uebermengen (erschoepft die Nebennieren)", "Kuenstliche Suessungsmittel"],
      rezepte: [
        { name: 'Gluecklichmacher-Bowl', zutaten: '50g Haferflocken, 1 Banane, 2 EL Walnuesse, 1 EL Hanfsamen, 1 EL Kakaonibs, Prise Safran, 200ml Hafermilch', zubereitung: 'Haferflocken in warmer Hafermilch quellen lassen, Safran einruehren. Mit Bananenscheiben, Walnuessen, Hanfsamen und Kakaonibs toppen. Ein Fruehstueck, das Tryptophan, Omega-3 und Magnesium liefert — Bausteine fuer Serotonin.' },
        { name: 'Seelen-Tee', zutaten: '1 TL Johanniskraut, 1 TL Zitronenmelisse, 1/2 TL Lavendel, 1/2 TL Rosenblueten', zubereitung: 'Mit 250ml heissem Wasser uebergiessen, 10 Minuten ziehen lassen. Langsam und bewusst trinken — ein Ritual der Selbstfuersorge. 2-3 Tassen taeglich.' },
      ]
    },
    fasten: {
      text: "Kurzes Fasten kann die Stimmung heben — der Koerper schuettet waehrend des Fastens BDNF (Brain-Derived Neurotrophic Factor) aus, der das Gehirn regeneriert. Bei schwerer Depression ist langes Fasten allerdings mit Vorsicht zu geniessen — sanfte Formen sind hier ratsam.",
      formen: ["Intermittierendes Fasten 16:8 — die BDNF-Erhoehung hebt die Stimmung", "Basenfasten 7 Tage — reinigt und naehrt gleichzeitig", "Digitales Fasten — Medienkonsum reduzieren kann die Stimmung erheblich verbessern"],
      reinigung: ["Darmreinigung mit Flohsamenschalen und Zeolith — ein gesunder Darm produziert Serotonin", "Kaltwasseranwendungen nach Kneipp — der Kaltreiz aktiviert Noradrenalin und hebt die Stimmung sofort", "Schwitzhuette oder Sauna — Waerme und Schwitzen loesen emotionale Blockaden"]
    },
    bewegung: {
      text: "Bewegung ist eines der wirksamsten Mittel bei Depression — klinisch erwiesen, vergleichbar mit Medikamenten. Jeder einzelne Schritt zaehlt. Der Koerper schuettet Endorphine, Serotonin und BDNF aus. Die Herausforderung ist, den ersten Schritt zu tun — und genau dieser eine Schritt reicht.",
      praktiken: ["Taeglich 30 Minuten Gehen — idealerweise in der Natur und bei Tageslicht (reguliert den Serotonin-Melatonin-Haushalt)", "Laufen oder Radfahren — Ausdauerbewegung setzt Endorphine frei ('Runner's High')", "Yoga — besonders Herzöffner und Rueckbeugen heben die Stimmung, Atemuebungen aktivieren", "Tanzen — die Kombination aus Musik, Bewegung und Ausdruck ist zutiefst heilsam"]
    },
    geist: {
      einheit: "Depression zeigt, dass die Seele nach etwas Wesentlichem ruft. In der Tiefe liegt ein Schatz verborgen — eine ungelebte Sehnsucht, ein verborgener Schmerz, der gesehen werden will. Der Weg durch die Depression fuehrt zu einem tieferen, wahrhaftigeren Leben. Du bist auf dem Weg — auch wenn es sich gerade schwer anfuehlt.",
      affirmationen: ["Auch diese Dunkelheit traegt Licht in sich. Ich bin auf dem Weg.", "Ich erlaube mir zu fuehlen. Jedes Gefuehl ist willkommen und darf fliessen.", "Tag fuer Tag kehrt mehr Licht in mein Leben zurueck.", "Ich bin wertvoll und geliebt — genau so, wie ich bin.", "Das Leben traegt mich, auch wenn ich es gerade schwer spuere."],
      meditation: "Setze dich hin oder lege dich bequem hin. Lege eine Hand auf dein Herz. Atme langsam und tief. Erlaube dir, genau so zu sein, wie du gerade bist — mit allem, was du fuehlst. Stell dir vor, wie ein warmes, goldenes Licht in dein Herz fliesst — wie Sonnenlicht, das langsam den Nebel durchdringt. Es muss nichts geschehen. Du darfst einfach sein. Atme und fuehle: 'Ich bin da. Und das ist genug.'",
      energie: "Das Herzchakra (Anahata) und das Solarplexus-Chakra (Manipura) sind bei Depression oft geschwächt. Warme Farben (Gold, Orange, Gelb), Sonnenlicht auf der Haut, das Tragen von Citrin oder Sonnenstein und wohlriechende Raeucherungen (Weihrauch, Rosmarin) heben die Energie. Auch Klangschalen auf dem Herzbereich koennen tief beruehren.",
    },
    produkte: [
      { name: 'CBD-Oel', desc: 'Wirkt angstloesend und stimmungsaufhellend ueber das Endocannabinoid-System. Foerdert erholsamen Schlaf und innere Ruhe — die Basis fuer Erholung.', tags: ['#stimmung', '#schlaf', '#angst', '#nervensystem'] },
      { name: 'Kratom', desc: 'In niedrigen Dosen stimmungshebend und energetisierend. Kann bei schwerer Antriebslosigkeit einen Impuls geben. Bewusst und respektvoll anwenden.', tags: ['#stimmung', '#energie', '#antrieb'] },
      { name: 'Magnesium-Oel', desc: 'Transdermales Magnesium beruhigt das Nervensystem und foerdert die Serotoninsynthese. Abends auf die Fusssohlen sprühen.', tags: ['#magnesium', '#nervensystem', '#schlaf'] },
      { name: 'Heiltee', desc: 'Kraeutertee-Mischung, die die Seele waermt und den Koerper naehrt. Das Ritual des Tee-Trinkens selbst ist bereits heilsam.', tags: ['#ritual', '#waerme', '#seele'] },
    ]
  },

  // ============================================================
  // 18. Angst / Panikattacken
  // ============================================================
  {
    id: 'angst',
    name: 'Angst / Panikattacken',
    tags: ['#angst', '#panik', '#panikattacke', '#nervensystem', '#sympathikus', '#phobien'],
    koerper: "Bei Angst und Panik uebernimmt der Sympathikus die Kontrolle — das Nervensystem schaltet auf Kampf-oder-Flucht. Adrenalin und Cortisol fluten den Koerper, das Herz rast, die Atmung wird flach, die Muskeln spannen sich an, der Magen zieht sich zusammen. Bei Panikattacken geschieht dies scheinbar grundlos — der Koerper reagiert auf eine Bedrohung, die der Verstand oft gar nicht erkennt. Die Amygdala (Mandelkern im Gehirn) ist ueberaktiviert.",
    psychosomatik: {
      zitat: "Welcher Teil von dir will beschuetzt werden?",
      text: "Angst zeigt, dass ein Teil in uns Schutz braucht — ein verletztes inneres Kind, eine verdraengte Erinnerung, ein Gefuehl der Hilflosigkeit. Dethlefsen sieht in der Angst die Begegnung mit dem, was wir aus unserem Bewusstsein verdraengt haben — es kehrt als Angst zurueck. Dahlke beschreibt Panik als 'Pan' — den griechischen Naturgott, der uns an die eigene Wildheit und Lebendigkeit erinnert. In der bewussten Begegnung mit der Angst liegt Befreiung: Was wir anschauen, verliert seine Macht.",
    },
    traditionen: {
      volksmedizin: "Baldrian, Hopfen und Passionsblume waren die klassischen Nervenkraeuter der Volksmedizin. Auch das Tragen von Lavendelsaeckchen, warme Fussbäder und das Einhuellen in Decken bei Angstattacken gehoerten zum Heilwissen der Grossmuetter.",
      tcm: "In der TCM gehoert Angst zum Funktionskreis Niere — die Niere speichert das Jing und den Lebenswillen. Angst erschoepft die Niere. Auch Herz-Blut-Mangel (der Geist Shen findet keinen Halt) und Leber-Qi-Stagnation spielen eine Rolle. Die Behandlung staerkt die Niere, naehrt das Herz-Blut und beruhigt den Shen.",
      ayurveda: "Im Ayurveda ist Angst ein klassisches Vata-Thema — zu viel Luft und Raum, zu wenig Erdung. Warme, naehrende Nahrung, Oelmassagen (Abhyanga), Routine und erdende Kraeuter wie Ashwagandha und Brahmi bringen das Vata zurueck ins Gleichgewicht.",
      germanisch: "In der germanischen Medizin ist Angst verbunden mit einem Motor-Konflikt (Flucht-Gefahr) oder einem Existenz-Konflikt. Der Koerper aktiviert uralte Ueberlebensprogramme. Die Loesung liegt in der Erkenntnis, dass die aktuelle Situation sicher ist.",
      alchemie: "Alchemistisch ist Angst der Drache, der den Schatz bewacht. Wer ihm begegnet und standhaelt, findet dahinter das Gold — die eigene Kraft, den eigenen Mut. Die Angst zu durchschreiten ist ein alchemistischer Initiationsweg.",
    },
    kraeuter: [
      { name: 'Passionsblume (Passiflora incarnata)', wirkung: 'Beruhigt das ueberreizte Nervensystem und wirkt angstloesend — vergleichbar mit Benzodiazepinen, dabei sanft und pflanzlich. Als Tee, Tinktur oder Extrakt.' },
      { name: 'Baldrian (Valeriana officinalis)', wirkung: 'Beruhigt die Nerven und foerdert den Schlaf. Wirkt ueber den GABA-Rezeptor im Gehirn — denselben Weg, den auch pharmazeutische Beruhigungsmittel nutzen. Als Tinktur oder Kapseln.' },
      { name: 'Ashwagandha', wirkung: 'Senkt Cortisol nachweislich und staerkt die Stressresistenz. Gibt dem Nervensystem die Basis, auf der Ruhe moeglich wird. Abends einnehmen.' },
      { name: 'Lavendel', wirkung: 'Silexan (Lavendeloel-Extrakt) ist klinisch erwiesen angstloesend. Schon der Duft aktiviert beruhigende Gehirnareale. Als Kapsel, Tee oder aetherisches Oel.' },
      { name: 'Melisse (Melissa officinalis)', wirkung: 'Beruhigt Herzklopfen und nervöse Unruhe, die mit Angst einhergehen. Wirkt mild und doch spuerbar. Als Tee, reichlich und warm.' },
      { name: 'Hopfen (Humulus lupulus)', wirkung: 'Stark beruhigend, besonders in Kombination mit Baldrian. Wirkt auf das GABA-System und foerdert tiefen, erholsamen Schlaf.' },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Das Mineral der Entspannung. Magnesiummangel verstaerkt Angst massiv. 400-600mg taeglich, als Magnesiumglycinat besonders gut vertraeglich und beruhigend.' },
      { name: 'GABA', wirkung: 'Der wichtigste hemmende Neurotransmitter im Gehirn. Als Supplement kann GABA die ueberaktive Amygdala beruhigen. 500-750mg bei akuter Unruhe.' },
      { name: 'L-Theanin', wirkung: 'Aus gruenem Tee — foerdert Alpha-Wellen im Gehirn (entspannte Wachheit) und erhoht GABA. 200mg wirken beruhigend, dabei wach und klar.' },
      { name: 'B-Vitamine', wirkung: 'Das Nervensystem braucht B-Vitamine fuer jede einzelne Signalweiterleitung. Mangel verstaerkt Angst und Nervositaet. Als hochdosierter B-Komplex.' },
    ],
    ernaehrung: {
      empfehlung: "Bei Angst braucht der Koerper erdende, naehrende Kost. Warme Mahlzeiten, regelmaessige Essenszeiten und Nahrungsmittel, die den Blutzucker stabil halten, geben dem Nervensystem Sicherheit. Jede warme Mahlzeit ist wie eine Umarmung von innen.",
      staerkend: ["Haferflocken (beruhigend fuer die Nerven)", "Warme Suppen und Eintöpfe", "Nuesse (besonders Cashews — reich an Tryptophan)", "Bananen und Datteln", "Kamillentee und Melissentee", "Dunkle Schokolade (in Massen)", "Avocado", "Warme Gewuerze (Zimt, Kardamom, Vanille)"],
      meiden: ["Koffein (verstaerkt Angst direkt)", "Alkohol (beruhigt kurzfristig, verstaerkt Angst langfristig)", "Zucker (Blutzuckerschwankungen triggern Aengste)", "Energydrinks", "Stark gewuerzte, scharfe Speisen", "Kalte Rohkost in grossen Mengen (bei Vata-Konstitution)"],
      rezepte: [
        { name: 'Nervenruhe-Milch', zutaten: '250ml warme Mandelmilch, 1 TL Ashwagandha-Pulver, 1/4 TL Muskatnuss, 1/4 TL Kardamom, 1 TL Honig', zubereitung: 'Mandelmilch erwaermen, Gewuerze einruehren, mit Honig suessen. Abends trinken — diese Mischung beruhigt das Vata und foerdert tiefen Schlaf.' },
        { name: 'Beruhigungs-Tee', zutaten: '1 TL Passionsblume, 1 TL Melisse, 1/2 TL Lavendel, 1/2 TL Baldrian', zubereitung: 'Mit heissem Wasser uebergiessen, 10 Minuten ziehen lassen, langsam trinken. Bei akuter Angst eine Tasse, zur Vorbeugung 2-3 Tassen taeglich.' },
      ]
    },
    fasten: {
      text: "Bei Angst ist Fasten mit Achtsamkeit anzuwenden. Hunger kann Aengste verstaerken — das Nervensystem braucht Sicherheit. Sanftes Intervallfasten kann helfen, laengeres Fasten ist nur ratsam, wenn die Grundangst bereits gemildert ist.",
      formen: ["Sanftes Intervallfasten 14:10 — genuegend Nahrung in den Essensphasen", "Digitales Fasten — Nachrichtenkonsum und Social Media reduzieren senkt die Angstlast enorm", "Stille-Fasten — Zeiten der Stille und des Alleinseins als Praxis, um die innere Stimme zu hoeren"],
      reinigung: ["Warme Fussbäder mit Lavendel — erden und beruhigen sofort", "Basisches Vollbad mit Natron und Epsomit — loest Anspannung auf koerperlicher Ebene", "Atemreinigung (Pranayama) — besonders die verlaengerte Ausatmung aktiviert den Parasympathikus"]
    },
    bewegung: {
      text: "Bewegung verbraucht die Stresshormone, die bei Angst ausgeschuettet werden — sie gibt dem Koerper das, was er eigentlich will: Handlung. Gleichzeitig foerdert Bewegung GABA und Endorphine. Erdende, rhythmische Bewegungsformen sind besonders heilsam.",
      praktiken: ["Erdungsgang — barfuss auf der Erde gehen, den Boden unter den Fuessen spueren, 10-20 Minuten", "Yoga Nidra — 'yogischer Schlaf', tiefste Entspannung bei vollem Bewusstsein, loest Angstmuster auf zellulaerer Ebene", "Rhythmisches Gehen oder Laufen — der gleichmaessige Rhythmus beruhigt das Nervensystem", "Schuetteln und Zittern (TRE) — kontrolliertes Zittern loest gespeicherte Angst aus dem Koerper"]
    },
    geist: {
      einheit: "Angst zeigt, dass ein Teil von dir nach Sicherheit und Geborgenheit ruft. Dieser Teil verdient Zuwendung, Mitgefuehl und Schutz. In dem Moment, wo du dich der Angst zuwendest — liebevoll und mutig — beginnt sie, sich aufzuloesen. Du bist groesser als deine Angst. Du warst es immer.",
      affirmationen: ["Ich bin sicher. In diesem Moment ist alles gut.", "Ich atme ein — Ruhe. Ich atme aus — Vertrauen.", "Mein Koerper beschuetzt mich. Ich darf mich entspannen.", "Ich begegne meiner Angst mit Mitgefuehl. Sie darf da sein und darf auch wieder gehen.", "Ich bin geerdet, gehalten und getragen."],
      meditation: "Wenn Angst aufsteigt: Setze dich hin, spuere deine Fuesse auf dem Boden. Atme ein fuer 4 Zaehler, halte fuer 4, atme aus fuer 8 Zaehler. Diese verlaengerte Ausatmung aktiviert sofort den Parasympathikus. Lege eine Hand auf den Bauch, eine auf das Herz. Spuere den Kontakt deiner Haende. Sage innerlich: 'Ich bin hier. Ich bin sicher. Alles ist gut.' Wiederhole, bis die Welle abebbt.",
      energie: "Das Wurzelchakra (Muladhara) braucht bei Angst besondere Aufmerksamkeit — Erdung, Sicherheit, Verwurzelung. Rotes Licht, der Kontakt mit der Erde, Baeume umarmen, schwere Decken und Trommelklaenge staerken das Wurzelchakra. Auch das Nabelchakra (Hara) darf gestaerkt werden — es ist das Zentrum der inneren Kraft.",
    },
    produkte: [
      { name: 'CBD-Oel', desc: 'Klinisch erforscht bei Angststoerungen. Wirkt ueber CB1-Rezeptoren im Gehirn angstloesend und beruhigend — dabei wach und klar. Ideal als tägliche Unterstuetzung.', tags: ['#angst', '#beruhigend', '#nervensystem'] },
      { name: 'Kratom', desc: 'In niedriger Dosierung beruhigend und angstloesend. Kann bei akuten Angstphasen Erleichterung bringen. Bewusst und mit Respekt anwenden.', tags: ['#angst', '#beruhigend', '#akuthilfe'] },
      { name: 'Magnesium-Oel', desc: 'Sofort wirksam ueber die Haut. Entspannt Muskeln und Nervensystem. Bei akuter Panik auf den Nacken und die Fusssohlen sprühen.', tags: ['#magnesium', '#entspannung', '#akuthilfe'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat-Bad — wirkt zutiefst entspannend auf Koerper und Nervensystem. Abendliches Bad als Ritual gegen Angst.', tags: ['#magnesium', '#bad', '#entspannung'] },
      { name: 'Heiltee', desc: 'Warmer Kraeutertee als Ritual — das Halten der warmen Tasse, der Duft, das langsame Trinken beruhigen das Nervensystem auf allen Ebenen.', tags: ['#ritual', '#waerme', '#beruhigend'] },
    ]
  },

  // ============================================================
  // 19. Rheuma / Gicht
  // ============================================================
  {
    id: 'rheuma',
    name: 'Rheuma / Gicht',
    tags: ['#rheuma', '#gicht', '#gelenke', '#entzuendung', '#arthritis', '#harnsaeure'],
    koerper: "Rheuma umfasst ueber 100 Erkrankungen des Bewegungsapparates — am bekanntesten ist die rheumatoide Arthritis, bei der das Immunsystem die Gelenke angreift. Gicht entsteht durch erhoehte Harnsaeurespiegel, die als Kristalle in den Gelenken auskristallisieren und heftige Entzuendungen verursachen. Beide fuehren zu Schmerzen, Schwellungen, Steifheit und langfristig zu Gelenkschaeden. Der Koerper ist im Zustand chronischer Entzuendung.",
    psychosomatik: {
      zitat: "Wo bist du steif und unbeweglich geworden — im Denken, im Fuehlen, im Leben?",
      text: "Die Gelenke stehen fuer Beweglichkeit und Flexibilitaet — koerperlich wie seelisch. Rheuma zeigt innere Erstarrung: festgehaltene Ueberzeugungen, verdraengter Groll, die Unfaehigkeit, loszulassen. Gicht galt historisch als 'Krankheit der Koenige' — sie spiegelt Ueberfluss und den Wunsch nach Kontrolle. Dethlefsen sieht in der Gelenksteife die verdraengte Aggression, die sich gegen den eigenen Koerper richtet. In der inneren Beweglichkeit, im Loslassen alter Urteile und im freien Fluss der Gefuehle liegt die Medizin.",
    },
    traditionen: {
      volksmedizin: "Brennnessel (als Tee und aeusserlich als 'Nesselschlag'), Teufelskralle und Weidenrinde waren die grossen Rheumamittel der Volksmedizin. Auch Heilerdewickel, Bienengifttherapie und Moorbaeder gehoerten zum Repertoire.",
      tcm: "In der TCM ist Rheuma ein 'Bi-Syndrom' — Wind, Kaelte und Feuchtigkeit dringen in die Meridiane ein und blockieren den Qi- und Blutfluss. Die Behandlung vertreibt die pathogenen Faktoren, bewegt Qi und Blut und staerkt das Wei-Qi (Abwehr).",
      ayurveda: "Im Ayurveda ist Rheuma (Amavata) die Verbindung von Ama (Toxine) und Vata (Bewegungsprinzip). Ama lagert sich in den Gelenken ab und blockiert Vata. Die Therapie beginnt mit Ama-Ausleitung (Panchakarma), gefolgt von Vata-ausgleichenden Massnahmen und warmem Oel.",
      germanisch: "In der germanischen Medizin zeigt Rheuma einen Selbstwert-Konflikt in Bezug auf Geschicklichkeit und Bewegung. Die Haende (Fingergelenke) sprechen von Feinmotorik und Kontrolle, die Knie von Demut und Flexibilitaet.",
      alchemie: "Alchemistisch ist Rheuma eine Sal-Erkrankung — zu viel Festigkeit, zu viel Kristallisation. Das Sal (Koerper-Prinzip) hat die Oberhand ueber Mercurius (Fluss) und Sulphur (Seele). Die Loesung liegt im 'Solve' — dem Auflösen des Erstarrten, dem Zurueckfinden zum Fluss.",
    },
    kraeuter: [
      { name: 'Teufelskralle (Harpagophytum)', wirkung: 'Klinisch erforschtes Antirheumatikum aus Afrika. Die Wurzel wirkt stark entzuendungshemmend und schmerzlindernd. 2-4g Trockenextrakt taeglich ueber Wochen einnehmen.' },
      { name: 'Weidenrinde (Salix alba)', wirkung: 'Natuerliches Aspirin — enthaelt Salicin, das entzuendungshemmend und schmerzlindernd wirkt. Magenfreundlicher als synthetisches Aspirin. Als Tee oder Extrakt.' },
      { name: 'Brennnessel', wirkung: 'Wirkt entzuendungshemmend und foerdert die Harnsaeureausscheidung (bei Gicht essenziell). Als Tee (3-4 Tassen taeglich) oder als Frischpflanzenpresssaft.' },
      { name: 'Kurkuma', wirkung: 'Curcumin ist ein kraftvoller Entzuendungshemmer, der bei Rheuma vergleichbar mit Medikamenten wirkt. 2-4g taeglich mit Pfeffer und Fett.' },
      { name: 'Weihrauch (Boswellia)', wirkung: 'Boswelliasaeuren hemmen die 5-Lipoxygenase — einen Entzuendungsweg, der bei Rheuma besonders aktiv ist. 1200mg Extrakt taeglich.' },
      { name: 'Ingwer', wirkung: 'Wirkt entzuendungshemmend und schmerzlindernd auf die Gelenke. Frisch gerieben in Tee oder als warme Ingwerkompresse auf betroffene Gelenke.' },
    ],
    stoffe: [
      { name: 'MSM (Methylsulfonylmethan)', wirkung: 'Organischer Schwefel, essenziell fuer Knorpel, Bindegewebe und die Entgiftung. Wirkt entzuendungshemmend und schmerzlindernd bei Gelenkproblemen. 3-6g taeglich.' },
      { name: 'Omega-3-Fettsaeuren', wirkung: 'EPA und DHA reduzieren Entzuendungsmarker (CRP, IL-6) und verbessern die Gelenkbeweglichkeit. 3-4g taeglich — die Dosis macht den Unterschied.' },
      { name: 'Vitamin D', wirkung: 'Reguliert das Immunsystem und reduziert Autoimmun-Entzuendungen. Fast alle Rheuma-Patienten haben einen Mangel. Hohe Spiegel anstreben.' },
      { name: 'Kollagen (Typ II)', wirkung: 'Baustein des Gelenkknorpels. Oral eingenommen kann es den Knorpelabbau verlangsamen und das Immunsystem tolerant gegenueber eigenem Knorpel machen.' },
    ],
    ernaehrung: {
      empfehlung: "Eine entzuendungshemmende, basische Ernaehrung ist bei Rheuma und Gicht das Fundament. Arachidonsaeure (in tierischen Produkten) foerdert Entzuendungen direkt — pflanzenbetonte Kost reduziert sie. Bei Gicht ist die Reduktion von Purinen zentral.",
      staerkend: ["Gruenes Blattgemuese", "Kirschen und Beerenobst (senken Harnsaeure)", "Ananas (Bromelain wirkt entzuendungshemmend)", "Kurkuma, Ingwer, Knoblauch", "Leinoel und Hanfsamen (Omega-3)", "Sellerie (foerdert Harnsaeureausscheidung)", "Basisches Wasser", "Hirse und Quinoa"],
      meiden: ["Schweinefleisch (hoechster Arachidonsauregehalt)", "Innereien und Wurst (purinreich)", "Alkohol, besonders Bier (erhoht Harnsaeure)", "Zucker und Weissmehl", "Kuhmilchprodukte", "Tomaten und Paprika (bei Empfindlichkeit)", "Kaffee in Uebermass"],
      rezepte: [
        { name: 'Goldene Kurkuma-Paste', zutaten: '50g Kurkumapulver, 250ml Wasser, 1 TL schwarzer Pfeffer, 2 EL Kokosoel', zubereitung: 'Kurkuma und Wasser in einem Topf verruehren, auf kleiner Flamme 10 Minuten ruehren bis eine Paste entsteht. Pfeffer und Kokosoel einruehren. Im Kuehlschrank aufbewahren. 1 TL taeglich in warme Milch, Suppe oder Smoothie geben.' },
        { name: 'Anti-Entzuendungs-Saft', zutaten: 'Handvoll Kirschen, 4 Stangen Sellerie, 1 Stueck Ingwer, 1 Apfel, 1/2 Ananas', zubereitung: 'Alles entsaften. Dieser Saft vereint die staerksten natuerlichen Entzuendungshemmer und Harnsaeuresenker in einem Glas. Morgens auf nuechternen Magen.' },
      ]
    },
    fasten: {
      text: "Fasten hat bei Rheuma spektakulaere Wirkung — oft verschwinden die Schmerzen nach wenigen Tagen vollstaendig. Der Koerper stoppt die Entzuendungsprozesse, der Harnsaeurespiegel sinkt. Die Herausforderung liegt im Beibehalten der Ergebnisse danach — mit entzuendungsarmer Ernaehrung.",
      formen: ["Buchinger-Heilfasten 7-14 Tage — klinisch erforscht bei Rheuma mit hervorragenden Ergebnissen", "Basenfasten als Einstieg oder Uebergangsphase", "Intervallfasten 16:8 als langfristige Strategie"],
      reinigung: ["Basenbader mit Natron und Epsomit — schwemmen Saeuren aus den Geweben", "Leberreinigung — die Leber baut Harnsaeure ab", "Schroepfen auf betroffenen Gelenken — traditionelle Methode zur Schmerzlinderung"]
    },
    bewegung: {
      text: "Bewegung ist bei Rheuma essenziell — Gelenke brauchen Bewegung, um ernaehrt zu werden. Der Gelenkknorpel hat keine eigene Blutversorgung und wird nur durch Bewegung mit Naehrstoffen versorgt. Sanfte, regelmaessige Bewegung haelt die Gelenke geschmeidig und reduziert Schmerzen.",
      praktiken: ["Schwimmen in warmem Wasser — die sanfteste Art, alle Gelenke zu bewegen, Auftrieb entlastet", "Qi Gong — fliessende, weiche Bewegungen foerdern den Qi-Fluss durch die Gelenke", "Sanftes Yoga — besonders Handgelenk- und Fingeruebungen bei Fingerarthritis", "Taeglich 5 Minuten jedes Gelenk sanft kreisen — morgens, um die Morgensteifigkeit zu loesen"]
    },
    geist: {
      einheit: "Rheuma und Gicht laden ein, innerlich beweglich zu werden. Alte Urteile, Groll und Verbitterung kristallisieren sich im Koerper — genau wie Harnsaeurekristalle in den Gelenken. Vergebung — sich selbst und anderen — ist die kraftvollste Medizin. In der Beweglichkeit des Herzens werden auch die Gelenke wieder frei.",
      affirmationen: ["Ich lasse los, was mich steif und starr macht. Ich fliesse mit dem Leben.", "Meine Gelenke sind geschmeidig und frei. Bewegung ist Freude.", "Ich vergebe — mir und anderen. Ich befreie mich von altem Groll.", "Mein Koerper erneuert sich. Jeder Tag bringt mehr Beweglichkeit."],
      meditation: "Schliesse die Augen und bringe deine Aufmerksamkeit zu einem Gelenk, das dich gerade am meisten beschaeftigt. Atme warmes, goldenes Licht in dieses Gelenk. Stell dir vor, wie das Licht die Kristalle und Entzuendungen aufloest — sanft, wie warmes Wasser Eis schmilzt. Sprich zum Gelenk: 'Ich danke dir. Ich lasse los, was dich belastet. Du darfst dich frei bewegen.' Spuere, wie Waerme und Leichtigkeit einziehen.",
      energie: "Das Sakralchakra (Svadhisthana) — Sitz der Beweglichkeit und des Fliessens — und das Solarplexus-Chakra (Manipura) — Sitz der Willenskraft — sind hier zentral. Warme, orangefarbene Energie unterstuetzt das Sakralchakra. Bienenwachs-Wickel auf den Gelenken uebertragen wohltuende Waerme.",
    },
    produkte: [
      { name: 'Anorganischer Schwefel', desc: 'MSM-Quelle fuer Gelenke und Bindegewebe. Schwefel ist Baustein von Knorpel und wirkt stark entzuendungshemmend. Das wichtigste Supplement bei Gelenkproblemen.', tags: ['#schwefel', '#gelenke', '#entzuendungshemmend'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat-Baeder entspannen die Muskulatur um die Gelenke, liefern Magnesium und Schwefel transdermal und loesen Saeuren aus dem Gewebe.', tags: ['#magnesium', '#schwefel', '#bad', '#gelenke'] },
      { name: 'Zeolith/ZeoMont', desc: 'Bindet Saeuren und Giftstoffe im Darm und entlastet den Koerper. Unterstuetzt die Entsaeuerung, die bei Rheuma und Gicht essenziell ist.', tags: ['#entsaeuerung', '#entgiftung', '#saeuren'] },
      { name: 'Natron', desc: 'Basisches Natriumhydrogencarbonat — aeusserlich als Basenbad und innerlich zur Entsaeuerung (nach Anleitung). Loest Saeurekristalle im Gewebe.', tags: ['#basisch', '#entsaeuerung', '#gelenke'] },
      { name: 'Borax-Tinktur', desc: 'Bor ist essenziell fuer den Knochenund Gelenkstoffwechsel. Studien zeigen, dass Bormangelregionen deutlich hoehere Arthritisraten haben. Reguliert den Calciumhaushalt.', tags: ['#bor', '#gelenke', '#knochen'] },
      { name: 'CBD-Oel', desc: 'Wirkt entzuendungshemmend und schmerzlindernd bei Gelenkschmerzen. Kann aeusserlich auf betroffene Gelenke aufgetragen und innerlich eingenommen werden.', tags: ['#schmerz', '#entzuendung', '#gelenke'] },
    ]
  },

  // ============================================================
  // 20. Sodbrennen / Reflux
  // ============================================================
  {
    id: 'sodbrennen',
    name: 'Sodbrennen / Reflux',
    tags: ['#sodbrennen', '#reflux', '#magen', '#magensaeure', '#speiseroehre', '#verdauung'],
    koerper: "Bei Sodbrennen fliesst Magensaeure in die Speiseroehre zurueck — der untere Oesophagussphinkter (Schliessmuskel) schliesst zu schwach. Die empfindliche Schleimhaut der Speiseroehre wird gereizt und entzuendet sich. Haeufig liegt paradoxerweise zu wenig Magensaeure vor — der Magen produziert zu wenig, die Verdauung stockt, Gaerungsgase druecken den Mageninhalt nach oben. Chronischer Reflux kann die Speiseroehre dauerhaft veraendern.",
    psychosomatik: {
      zitat: "Was liegt dir sauer auf? Was kannst du gerade schwer verdauen?",
      text: "Der Magen ist das Organ des Annehmens und Verdauens — von Nahrung und von Lebenserfahrungen. Sodbrennen zeigt, dass etwas aufstosst — ein Aerger, eine Situation, ein Gefuehl, das verdraengt wurde und zurueck an die Oberflaeche draengt. Der Magen sagt: 'Das ist mir zu viel, das kommt mir hoch.' Die Saeure, die brennt, ist oft verdraengte Wut, die sich koerperlich ausdrueckt. In der ehrlichen Verarbeitung und im Ausdruecken der Gefuehle beruhigt sich der Magen.",
    },
    traditionen: {
      volksmedizin: "Kamillentee war das Hausmittel bei Magenbeschwerden, ebenso Fencheltee und Anis. Kartoffelsaft galt als sofort wirksam bei Sodbrennen. Heilerde (eingeruehrt in Wasser) band ueberschuessige Saeure.",
      tcm: "In der TCM ist Sodbrennen oft 'rebellierendes Magen-Qi' — das Qi fliesst nach oben statt nach unten. Ursachen sind Magen-Hitze (zu viel scharfes Essen, Stress) oder Leber-Qi, das den Magen angreift (Stress, Wut). Die Behandlung senkt das Magen-Qi und harmonisiert die Leber.",
      ayurveda: "Im Ayurveda zeigt Sodbrennen erhoehtes Pitta im Magen — zu viel Feuer. Kuehlende Nahrungsmittel, Aloe-Vera-Saft, Shatavari und der Verzicht auf scharfe, saure und fermentierte Speisen bringen das Pitta zurueck ins Gleichgewicht.",
      germanisch: "In der germanischen Medizin ist der Magen mit einem Revier-Aerger-Konflikt verbunden — etwas wurde 'geschluckt', das unverdaulich ist. Die kleine Kurvatur des Magens reagiert auf aergerliche Situationen im nahen Umfeld.",
      alchemie: "Alchemistisch ist die Magensaeure das innere Feuer — das Aqua Regia, das Koenigswasser, das alles aufloest und verwandelt. Sodbrennen zeigt, dass dieses Feuer fehlgeleitet ist — es brennt am falschen Ort. Die Heilung liegt in der richtigen Lenkung des inneren Feuers.",
    },
    kraeuter: [
      { name: 'Kamille (Matricaria chamomilla)', wirkung: 'Das Magenkraut schlechthin. Beruhigt die Schleimhaut, hemmt Entzuendungen und loest Kraempfe. Als Rollkur: starken Kamillentee trinken und sich nacheinander auf alle vier Seiten legen, je 5 Minuten.' },
      { name: 'Suessholzwurzel (Glycyrrhiza glabra)', wirkung: 'Schuetzt die Magenschleimhaut durch Bildung einer Schutzschicht. DGL-Form (deglycyrrhiziniert) ist bei laengerer Anwendung vorzuziehen. Kautabletten vor dem Essen.' },
      { name: 'Eibisch (Althaea officinalis)', wirkung: 'Die Schleimstoffe legen sich wie ein Balsam ueber die gereizte Schleimhaut und schuetzen sie. Als Kaltauszug ueber Nacht — morgens trinken.' },
      { name: 'Fenchel-Anis-Kuemmel', wirkung: 'Die klassische Dreier-Kombination gegen Voellegefuehl, Blaehungen und aufstossende Gaerungsgase. Als Tee nach dem Essen.' },
      { name: 'Ingwer', wirkung: 'Foerdert die Magenentleerung (prokinetisch) und verhindert so den Rueckfluss. Ein Stueck frischer Ingwer vor dem Essen kauen oder als Tee.' },
      { name: 'Kalmuswurzel (Acorus calamus)', wirkung: 'Traditionelles Magenmittel, das die Verdauungskraft staerkt und den Magen beruhigt. Ein kleines Stueck Wurzel vor dem Essen kauen.' },
    ],
    stoffe: [
      { name: 'Betain-HCl', wirkung: 'Bei zu wenig Magensaeure (die haeufigste, oft verkannte Ursache von Reflux) ergaenzt Betain-HCl die fehlende Saeure. Zu den Mahlzeiten einnehmen — staerkt die gesamte Verdauung.' },
      { name: 'Zink-Carnosin', wirkung: 'Schuetzt und regeneriert die Magenschleimhaut. Klinisch erforscht bei Gastritis und Reflux. 75mg zweimal taeglich.' },
      { name: 'Verdauungsenzyme', wirkung: 'Unterstuetzen die Verdauung und verhindern Gaerung im Magen. Besonders bei schwerer Kost hilfreich. Zu den Mahlzeiten einnehmen.' },
      { name: 'Probiotika', wirkung: 'Eine gesunde Darmflora unterstuetzt die gesamte Verdauung. Lactobacillus und Bifidobacterium Staemme auf nuechternen Magen einnehmen.' },
    ],
    ernaehrung: {
      empfehlung: "Langsam essen, gut kauen und in Ruhe geniessen — das allein loest viele Magenprobleme. Kleinere Mahlzeiten entlasten den Magen. Die letzte Mahlzeit darf 3 Stunden vor dem Schlafengehen liegen. Jede Mahlzeit bewusst und dankbar zu sich nehmen ist bereits Medizin.",
      staerkend: ["Kartoffeln und Kartoffelsaft (basisch, schuetzt die Schleimhaut)", "Haferflocken (Schleimstoffe beruhigen den Magen)", "Bananen (natuerliches Antazidum)", "Fenchel und Sellerie", "Mandeln (basisch, gut kauen)", "Ingwer und Kurkuma", "Geduenstetes Gemuese", "Naturbelassener Honig (schleimhautschuetzend)"],
      meiden: ["Kaffee auf nuechternen Magen", "Alkohol", "Scharfe Gewuerze (Chili, scharfer Pfeffer)", "Zitrusfruechte bei akutem Sodbrennen", "Schokolade (entspannt den Schliessmuskel)", "Minze (entspannt den Schliessmuskel)", "Kohlensaeurehaltige Getraenke", "Fettreiche Speisen spaet abends"],
      rezepte: [
        { name: 'Kartoffelsaft-Kur', zutaten: '2-3 rohe, bio Kartoffeln', zubereitung: 'Kartoffeln waschen, roh entsaften. 100ml Kartoffelsaft morgens auf nuechternen Magen trinken. Der basische Saft neutralisiert ueberschuessige Saeure und legt sich schuetzend auf die Schleimhaut. 2-3 Wochen durchfuehren.' },
        { name: 'Magenberuhigungs-Tee', zutaten: '1 TL Kamillenblueten, 1 TL Fenchelsamen, 1/2 TL Anis, 1/2 TL Kuemmel, 1 Stueck Suessholzwurzel', zubereitung: 'Mit 300ml heissem Wasser uebergiessen, 10 Minuten ziehen lassen. In kleinen Schlucken nach dem Essen trinken. Dieser Tee vereint die sanftesten Magenheilkraeuter.' },
      ]
    },
    fasten: {
      text: "Fasten gibt dem Magen die wertvollste Medizin: Ruhe. Wenn der Magen leer ist, kann die Schleimhaut sich regenerieren, der Schliessmuskel sich erholen. Schon ein Fasttag pro Woche kann chronisches Sodbrennen deutlich verbessern.",
      formen: ["Intermittierendes Fasten 16:8 — die naechte Fastenpause lässt den Magen heilen", "Ein Fasttag pro Woche mit warmem Kraeutertee und Wasser", "Basenfasten 7 Tage als Regenerationskur fuer den gesamten Magen-Darm-Trakt"],
      reinigung: ["Heilerde (Montmorillonit) in Wasser eingeruehrt — bindet ueberschuessige Saeure und Giftstoffe im Magen", "Oelziehen am Morgen — reinigt den Mundraum und regt die Verdauung reflektorisch an", "Abdominal-Massage im Uhrzeigersinn — foerdert die Magenentleerung und loest Spannungen"]
    },
    bewegung: {
      text: "Ein kurzer Spaziergang nach dem Essen foerdert die Magenentleerung und verhindert Reflux. Flaches Liegen nach dem Essen ist ungünstig — der Oberkörper darf erhöht bleiben. Sanfte Bauchuebungen staerken den Schliessmuskel langfristig.",
      praktiken: ["Verdauungsspaziergang — 15 Minuten nach jeder Hauptmahlzeit genuegen", "Bauchatmung — tiefes Zwerchfellatmen staerkt den unteren Oesophagussphinkter direkt, 10 Minuten taeglich", "Yoga — besonders der Diamantsitz (Vajrasana) nach dem Essen foerdert die Verdauung", "Sanfte Bauchmuskeluebungen — ein starker Rumpf stuetzt den Schliessmuskel"]
    },
    geist: {
      einheit: "Sodbrennen zeigt, dass etwas im Leben aufstösst — ein unverdauter Aerger, eine Situation, die sauer macht. Der Magen bittet darum, die Dinge zu verarbeiten — emotional wie koerperlich. In dem Moment, wo die Gefuehle ehrlich ausdrueckt werden, beruhigt sich auch der Magen.",
      affirmationen: ["Ich verdaue das Leben mit Leichtigkeit. Alles, was kommt, kann ich annehmen und verwandeln.", "Mein Magen ist ruhig und stark. Ich vertraue meiner Verdauungskraft.", "Ich spreche aus, was mich bewegt. Meine Gefuehle fliessen frei.", "Ich nehme mir Zeit — fuer mein Essen und fuer mein Leben."],
      meditation: "Lege beide Haende auf deinen Bauch. Atme tief in den Bauch hinein und spuere, wie er sich hebt und senkt. Stell dir vor, wie ein kuehles, beruhigendes, blaues Licht deinen Magen erfuellt — es loescht das ueberschuessige Feuer und bringt Frieden. Sage innerlich: 'Ich bin in Frieden mit dem, was ist. Ich verdaue mit Leichtigkeit.' Spuere die Ruhe, die sich im Bauch ausbreitet.",
      energie: "Das Solarplexus-Chakra (Manipura) und das Sakralchakra (Svadhisthana) sind hier beteiligt. Gelbes Licht staerkt das Manipura und die Verdauungskraft. Kuehlende Steine (Mondstein, Aquamarin) auf dem Solarplexus beruhigen ueberschuessige Hitze. Klangschalen auf dem Bauch harmonisieren die Verdauungsenergie.",
    },
    produkte: [
      { name: 'Natron', desc: 'Natuerliches Antazidum — ein halber Teloeffel in Wasser aufgeloest neutralisiert Magensaeure sofort. Als Soforthilfe bei akutem Sodbrennen. Regelmaessige Anwendung nach Anleitung.', tags: ['#basisch', '#soforthilfe', '#magen'] },
      { name: 'Montmorillonit', desc: 'Heilerde, die ueberschuessige Saeure bindet, die Magenschleimhaut schuetzt und Giftstoffe adsorbiert. In Wasser eingeruehrt vor dem Essen oder bei Bedarf.', tags: ['#heilerde', '#magen', '#saeurebindend'] },
      { name: 'Zeolith/ZeoMont', desc: 'Vulkanmineral mit enormer Bindungsfaehigkeit fuer Saeuren und Toxine. Entlastet den gesamten Verdauungstrakt und foerdert die Schleimhautregeneration.', tags: ['#entgiftung', '#magen', '#schleimhaut'] },
      { name: 'Heiltee', desc: 'Kraeutertee-Mischung fuer den Magen — waermt, beruhigt und unterstuetzt die Verdauung. Das taegliche Ritual des Tee-Trinkens ist bereits heilsam.', tags: ['#magen', '#verdauung', '#ritual'] },
      { name: 'CBD-Oel', desc: 'Reguliert die Magensaureproduktion und wirkt entzuendungshemmend auf die Schleimhaut. Beruhigt das stressbedingte Sodbrennen ueber das Nervensystem.', tags: ['#magen', '#entzuendungshemmend', '#stress'] },
    ]
  },

];
