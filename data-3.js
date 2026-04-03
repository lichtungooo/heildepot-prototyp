const CONDITIONS_3 = [
  {
    id: 'burnout',
    name: 'Burnout / Chronische Erschöpfung',
    tags: ['#erschöpfung', '#stress', '#nebenniere', '#energie', '#schlaf'],
    koerper: "Burnout ist ein Zustand tiefgreifender körperlicher, emotionaler und geistiger Erschöpfung. Die Nebennieren produzieren dauerhaft zu viel Cortisol, bis sie erschöpfen. Es kommt zu chronischer Müdigkeit, Schlafstörungen, Konzentrationsproblemen, Infektanfälligkeit, Muskelschmerzen und hormonellen Dysbalancen. Das Nervensystem ist im Dauersympathikus gefangen.",
    psychosomatik: {
      zitat: "Ich brenne für andere, bis nichts mehr von mir übrig ist.",
      text: "Nach Louise Hay steht Burnout für die Weigerung, die eigenen Bedürfnisse anzuerkennen. Dahlke sieht darin das Muster des Sich-Verausgabens als Ersatz für echte Lebendigkeit. Dethlefsen beschreibt es als Flucht vor der inneren Leere durch äußere Aktivität. Der Mensch opfert sich auf, weil er glaubt, nur durch Leistung wertvoll zu sein."
    },
    traditionen: {
      volksmedizin: "Melissengeist, Haferstroh-Bäder und Baldrian-Hopfen-Kuren galten als bewährte Nervenstärker. Kneippsche Wechselbäder und Waldspaziergänge wurden bei Erschöpfung verordnet.",
      tcm: "Burnout entspricht einer Nieren-Qi- und Yin-Schwäche mit Leber-Qi-Stagnation. Die Lebensessenz (Jing) ist erschöpft. Akupunktur an Niere 3, Magen 36 und Leber 3 stärkt die Grundenergie. Goji-Beeren und Reishi nähren das Yin.",
      ayurveda: "Burnout ist eine massive Vata-Störung mit Ojas-Verlust (Lebensenergie). Ashwagandha, warme Ölmassagen (Abhyanga) und Shirodhara (Stirnölguss) beruhigen Vata. Ghee, warme Milch mit Muskat und regelmäßige Routinen sind essenziell.",
      germanisch: "Nach Hamer liegt dem Burnout oft ein Selbstwert-Konflikt zugrunde – das Gefühl, nicht zu genügen. Die ständige Aktivierung der Stressachse verhindert die Regenerationsphase (Vagotonie). Erst das Lösen des Konflikts ermöglicht echte Heilung.",
      alchemie: "Spagyrisch wird Gold (Aurum) als Sonnenessenz eingesetzt, um die Lebenskraft zu stärken. Rosmarinus-Essenz weckt die innere Flamme. Die alchemistische Arbeit am Burnout ist ein Nigredo-Prozess – durch die Asche der Erschöpfung entsteht neue Lebenskraft."
    },
    kraeuter: [
      { name: 'Ashwagandha', wirkung: 'Adaptogen, reguliert Cortisol, stärkt die Nebennieren und fördert erholsamen Schlaf. 3-5g Wurzelpulver täglich.' },
      { name: 'Rhodiola rosea', wirkung: 'Rosenwurz steigert Stressresistenz und mentale Leistungsfähigkeit. 200-400mg Extrakt morgens.' },
      { name: 'Hafer (Avena sativa)', wirkung: 'Haferstroh-Tee nährt das erschöpfte Nervensystem. 2-3 Tassen täglich als Kur über 6 Wochen.' },
      { name: 'Melisse', wirkung: 'Beruhigt das überreizte Nervensystem, fördert Schlaf und Verdauung. Als Tee oder Tinktur.' },
      { name: 'Süßholzwurzel', wirkung: 'Unterstützt die Nebennieren und verlängert die Cortisol-Wirkung. 1-2 Tassen Tee täglich (nicht bei Bluthochdruck).' }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Entspannt Muskeln und Nerven, fördert Schlaf. 400-600mg Magnesiumcitrat abends.' },
      { name: 'B-Vitamine', wirkung: 'B-Komplex unterstützt Energiestoffwechsel und Nervenfunktion. Hochdosiert als aktivierte Form.' },
      { name: 'Vitamin C', wirkung: 'Die Nebennieren verbrauchen bei Stress große Mengen Vitamin C. 1-3g täglich gepuffert.' },
      { name: 'Coenzym Q10', wirkung: 'Unterstützt die zelluläre Energieproduktion in den Mitochondrien. 100-200mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Regelmäßige, nährstoffreiche Mahlzeiten stabilisieren den Blutzucker und entlasten die Nebennieren. Kein Koffein, kein Zucker, keine Stimulanzien.",
      staerkend: ["Knochenbrühe", "Avocado", "Eier", "Süßkartoffel", "Hirse", "Walnüsse", "Datteln", "Ghee"],
      meiden: ["Kaffee", "Zucker", "Weißmehl", "Alkohol", "Energy-Drinks", "Stark verarbeitete Lebensmittel"],
      rezepte: [
        { name: 'Goldene Milch', zutaten: '250ml Hafermilch, 1 TL Kurkuma, Prise schwarzer Pfeffer, 1 TL Ghee, Honig', zubereitung: 'Alles erwärmen (nicht kochen), cremig rühren, abends trinken.' },
        { name: 'Nebennieren-Tonikum', zutaten: '1 TL Ashwagandha, 1 TL Honig, warme Milch, Prise Zimt', zubereitung: 'Pulver in warme Milch einrühren, mit Honig und Zimt abschmecken. Abends trinken.' }
      ]
    },
    fasten: {
      text: "Bei Burnout ist strenges Fasten kontraproduktiv, da der Körper Nährstoffe braucht. Sanftes Intervallfasten (16:8) kann die Zellregeneration fördern, sollte aber erst bei stabilem Zustand begonnen werden.",
      formen: ["Sanftes Intervallfasten 16:8", "Digitales Fasten", "Reizfasten (Stille, Natur)"],
      reinigung: ["Basenbäder mit Natron", "Trockenbürsten", "Ölziehen morgens"]
    },
    bewegung: {
      text: "Sanfte Bewegung statt Leistungssport. Der Körper braucht Regeneration, keine weitere Belastung. Natur und Rhythmus sind heilend.",
      praktiken: ["Waldspaziergänge (Shinrin Yoku)", "Sanftes Yoga (Yin Yoga)", "Qi Gong", "Schwimmen", "Tiefes Atmen (Pranayama)"]
    },
    geist: {
      einheit: "Burnout ist ein Ruf der Seele, zum Wesentlichen zurückzukehren. Es geht darum, den eigenen Wert nicht über Leistung zu definieren, sondern aus dem Sein heraus zu leben. Die Asche des Ausbrennens birgt den Samen eines authentischeren Lebens.",
      affirmationen: ["Ich bin wertvoll, einfach weil ich bin.", "Ich erlaube mir Ruhe und Regeneration.", "Meine Kraft wächst aus der Stille.", "Ich sage Nein, wenn mein Herz Nein sagt."],
      meditation: "Yoga Nidra (Schlaf des Yogi) – eine geführte Tiefenentspannung im Liegen, die das Nervensystem in den Parasympathikus bringt. 20-30 Minuten ersetzen Stunden unruhigen Schlafs.",
      energie: "Reiki oder Handauflegen auf die Nebennieren (unterer Rücken). Erdungsübungen: Barfuß auf der Erde stehen, den Kontakt zur Erde spüren. Das Wurzelchakra stärken."
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Reguliert das Stresssystem, fördert Schlaf und innere Ruhe. 2x täglich 3-5 Tropfen sublingual.', tags: ['#stress', '#schlaf'] },
      { name: 'Hericium', desc: 'Löwenmähne-Pilz regeneriert Nervengewebe und verbessert kognitive Funktion.', tags: ['#nerven', '#gehirn'] },
      { name: 'Magnesium-Öl', desc: 'Transdermales Magnesium zur Muskelentspannung und Schlafförderung. Abends auf Fußsohlen auftragen.', tags: ['#entspannung', '#schlaf'] },
      { name: 'Vitamin D3+K2', desc: 'Burnout-Betroffene haben oft massiven Vitamin-D-Mangel. 4000-5000 IE täglich mit K2.', tags: ['#immunsystem', '#energie'] }
    ]
  },
  {
    id: 'migraene',
    name: 'Migräne',
    tags: ['#kopfschmerz', '#migräne', '#leber', '#spannung', '#neurologie'],
    koerper: "Migräne ist ein anfallsartiger, meist halbseitiger Kopfschmerz mit Übelkeit, Licht- und Geräuschempfindlichkeit. Auslöser können hormonelle Schwankungen, Stress, bestimmte Nahrungsmittel (Histamin, Tyramin), Wetterwechsel oder Schlafmangel sein. Die Blutgefäße im Gehirn verengen und weiten sich krankhaft, begleitet von einer Entzündungskaskade.",
    psychosomatik: {
      zitat: "Mein Kopf will die Kontrolle nicht abgeben.",
      text: "Louise Hay sieht Migräne als Ausdruck von Perfektionismus und dem Widerstand gegen den Fluss des Lebens. Dahlke deutet sie als unterdrückte Sexualität und Kreativität, die im Kopf 'explodiert'. Dethlefsen beschreibt den Migräniker als jemanden, der alles über den Kopf lösen will und den Körper dabei übergeht. Die Halbseitigkeit verweist auf einen Konflikt zwischen Denken und Fühlen."
    },
    traditionen: {
      volksmedizin: "Mutterkraut galt seit dem Mittelalter als bestes Migränemittel. Schläfenmassage mit Pfefferminzöl, kalte Wickel und Kaffee mit Zitrone waren Hausmittel der Großmütter.",
      tcm: "Migräne wird als aufsteigendes Leber-Yang oder Leber-Feuer betrachtet, oft durch emotionale Stagnation (unterdrückter Zorn). Akupunktur an Gallenblase 20, Leber 3 und Dickdarm 4. Chrysanthemen-Tee kühlt das Leber-Feuer.",
      ayurveda: "Migräne ist meist eine Pitta-Störung (Hitze steigt auf). Nasya (Nasenöl) mit Brahmi, kühlende Stirnwickel, Sandelholz-Paste auf die Schläfen. Pitta-reduzierende Ernährung ist essenziell.",
      germanisch: "Hamer ordnet Migräne einem frontal-sensorischen Konflikt zu – oft einem 'Stirn-Angst-Konflikt' oder einem Revierkonflikt. Die Schmerzen treten in der Regenerationsphase (nach Konfliktlösung) auf. Die betroffene Seite gibt Hinweis auf den Konfliktinhalt.",
      alchemie: "Spagyrische Mond-Essenzen (Luna/Silber) kühlen das überhitzte Haupt. Melissa-Destillat und Lavendel-Essenz harmonisieren. Der alchemistische Blick sieht in der Migräne ein Zuviel an Sulfur (Feuer) im Kopf, das durch Merkur (Vermittlung) gelöst wird."
    },
    kraeuter: [
      { name: 'Mutterkraut (Tanacetum parthenium)', wirkung: 'Klassisches Migränekraut, wirkt entzündungshemmend und gefäßregulierend. Als Prophylaxe 100-300mg Extrakt täglich über Monate.' },
      { name: 'Pestwurz', wirkung: 'Reduziert Häufigkeit und Intensität von Migräneattacken. 50-75mg PA-freier Extrakt 2x täglich.' },
      { name: 'Pfefferminze', wirkung: 'Ätherisches Öl auf Schläfen und Nacken kühlt und lindert akute Schmerzen. Gleichwertig zu Paracetamol in Studien.' },
      { name: 'Weidenrinde', wirkung: 'Natürliches Salicin wirkt schmerzlindernd und entzündungshemmend. Als Tee oder Extrakt bei akutem Anfall.' },
      { name: 'Ingwer', wirkung: 'Wirkt antiemetisch gegen Migräne-Übelkeit und entzündungshemmend. Frischer Ingwertee oder 250mg Pulver.' }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Magnesiummangel ist ein häufiger Migräne-Trigger. 400-600mg Magnesiumcitrat täglich als Prophylaxe.' },
      { name: 'Riboflavin (B2)', wirkung: 'Hochdosiert (400mg/Tag) reduziert es Migräneattacken um bis zu 50%. Über 3 Monate einnehmen.' },
      { name: 'Coenzym Q10', wirkung: 'Verbessert die mitochondriale Energieproduktion im Gehirn. 100-300mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Histaminarme Ernährung ist oft der Schlüssel. Regelmäßige Mahlzeiten, ausreichend Wasser, Trigger-Tagebuch führen. Leber entlasten.",
      staerkend: ["Frisches Gemüse", "Reis", "Kartoffeln", "Frischer Fisch", "Quinoa", "Birnen", "Ingwer"],
      meiden: ["Rotwein", "Alter Käse", "Schokolade", "Geräuchertes", "Glutamat", "Aspartam", "Zitrusfrüchte", "Histaminreiche Lebensmittel"],
      rezepte: [
        { name: 'Ingwer-Kurkuma-Shot', zutaten: 'Daumengroßes Stück Ingwer, 1 TL Kurkuma, Saft einer halben Zitrone, Prise Pfeffer', zubereitung: 'Ingwer pressen, mit Kurkuma, Zitrone und Pfeffer mischen. Bei Aura sofort trinken.' }
      ]
    },
    fasten: {
      text: "Regelmäßiges Intervallfasten kann Migräne reduzieren, aber Vorsicht: Unterzuckerung ist ein häufiger Trigger. Langsam herantasten. Leberfasten und Entgiftungskuren können die Migränehäufigkeit langfristig senken.",
      formen: ["Sanftes 16:8-Fasten", "Leberfasten nach Dr. Bruker", "Histamin-Eliminationsdiät"],
      reinigung: ["Leberwickel mit Schafgarbe", "Einläufe", "Ölziehen"]
    },
    bewegung: {
      text: "Regelmäßiger Ausdauersport (3x/Woche) reduziert Migräneattacken nachweislich. Wichtig: Gleichmäßige Belastung, keine Spitzen.",
      praktiken: ["Moderates Joggen", "Schwimmen", "Yoga (kein Kopfstand)", "Nacken-Dehnübungen", "Progressive Muskelentspannung nach Jacobson"]
    },
    geist: {
      einheit: "Migräne lädt ein, vom Kopf ins Herz zu sinken. Sie zeigt, wo wir zu viel kontrollieren und zu wenig fließen lassen. Der Schmerz ist ein Tor zur Hingabe – an das Leben, wie es ist.",
      affirmationen: ["Ich lasse los und vertraue dem Fluss des Lebens.", "Mein Kopf darf ruhen, mein Herz darf führen.", "Ich erlaube mir, nicht perfekt zu sein."],
      meditation: "Bodyscan-Meditation: Vom Scheitel bis zu den Füßen den Körper durchspüren. Besonders im Nacken, Kiefer und Stirnbereich bewusst loslassen. Energie nach unten lenken.",
      energie: "Stirnchakra (Ajna) sanft mit Lavendelöl berühren. Nacken-Akupressur an Gallenblase 20 (Vertiefung am Hinterkopf). Energieüberschuss vom Kopf über die Arme in die Erde ableiten."
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Wirkt entzündungshemmend und schmerzlindernd. Bei Aura 5-10 Tropfen sublingual.', tags: ['#schmerz', '#entzündung'] },
      { name: 'Magnesium-Öl', desc: 'Auf Nacken und Schläfen einmassieren bei akuter Migräne und zur Prophylaxe.', tags: ['#muskel', '#entspannung'] },
      { name: 'Weihrauch', desc: 'Boswellia-Extrakt hemmt Entzündungsprozesse im Gehirn. Zur Prophylaxe.', tags: ['#entzündung', '#prophylaxe'] },
      { name: 'Kurkuma', desc: 'Curcumin wirkt stark entzündungshemmend. Mit Piperin für bessere Aufnahme.', tags: ['#entzündung', '#leber'] }
    ]
  },
  {
    id: 'asthma',
    name: 'Asthma / Atemwege',
    tags: ['#atmung', '#lunge', '#allergie', '#bronchien', '#entzündung'],
    koerper: "Asthma ist eine chronisch-entzündliche Erkrankung der Atemwege mit anfallsartiger Verengung der Bronchien. Symptome sind Atemnot, Husten, pfeifende Atmung und Engegefühl in der Brust. Auslöser können Allergene, Kälte, Anstrengung, Stress oder Schadstoffe sein. Die Schleimhäute schwellen an, produzieren zähen Schleim und die Bronchialmuskulatur verkrampft.",
    psychosomatik: {
      zitat: "Ich kann nicht frei atmen – das Leben schnürt mir die Luft ab.",
      text: "Louise Hay sieht Asthma als erstickte Liebe und die Unfähigkeit, für sich selbst zu atmen. Dahlke deutet es als Konflikt zwischen Nehmen und Geben (Einatmen/Ausatmen) – der Asthmatiker nimmt zu viel und kann nicht loslassen. Dethlefsen beschreibt es als Angst vor dem Raum des Lebens, den man sich nicht nimmt. Oft beginnt Asthma in der Kindheit bei dominanten Eltern."
    },
    traditionen: {
      volksmedizin: "Thymian-Tee und Spitzwegerich galten als die stärksten Lungenkräuter. Brustwickel mit Schweineschmalz, Rettichsaft mit Honig und Inhalationen mit Kamille waren bewährte Hausmittel.",
      tcm: "Asthma ist eine Schwäche des Lungen-Qi, oft kombiniert mit Nieren-Schwäche (die Niere 'greift' das Qi nicht). Schleim-Hitze oder Schleim-Kälte blockieren die Lunge. Akupunktur an Lunge 7, Konzeptionsgefäß 17 und Niere 3.",
      ayurveda: "Asthma ist eine Kapha-Störung (Schleim) mit Vata-Beteiligung (Verkrampfung). Pippali (langer Pfeffer), Sitopaladi Churna und Vasaka (Adhatoda) sind klassische Mittel. Nasya und Dampfinhalation mit Eukalyptus.",
      germanisch: "Hamer sieht Asthma als einen Revierangst-Konflikt der Bronchialschleimhaut. In der aktiven Phase verengen sich die Bronchien. Die Heilungsphase bringt Schwellung und Schleim. Der Konflikt dreht sich oft um Revierverlust oder -bedrohung.",
      alchemie: "Spagyrisch wird Antimon (Stibium) zur Reinigung der Lunge eingesetzt. Quecksilber-Essenzen (Merkur) fördern den Gasaustausch. Thymian-Destillat als spagyrische Essenz stärkt die Lebenskraft der Lunge."
    },
    kraeuter: [
      { name: 'Thymian', wirkung: 'Löst Bronchialkrämpfe, wirkt schleimlösend und antibakteriell. Als Tee oder Tinktur 3x täglich.' },
      { name: 'Spitzwegerich', wirkung: 'Beruhigt gereizte Schleimhäute, wirkt entzündungshemmend und hustenstillend. Frischpflanzenpresssaft oder Tee.' },
      { name: 'Königskerze', wirkung: 'Stärkt und schützt die Lunge, löst Schleim. Als Tee oder Tinktur langfristig einnehmen.' },
      { name: 'Süßholz', wirkung: 'Entzündungshemmend, schleimlösend, kortisonähnliche Wirkung. In Teemischungen, nicht bei Bluthochdruck.' },
      { name: 'Eukalyptus', wirkung: 'Ätherisches Öl zum Inhalieren, öffnet die Atemwege sofort. 3-5 Tropfen in heißes Wasser.' }
    ],
    stoffe: [
      { name: 'Vitamin D3', wirkung: 'Moduliert das Immunsystem und reduziert Asthmaanfälle. 4000-5000 IE täglich, Spiegel kontrollieren.' },
      { name: 'NAC (N-Acetyl-Cystein)', wirkung: 'Löst zähen Schleim und ist ein starkes Antioxidans für die Lunge. 600-1200mg täglich.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Hemmen Entzündungsprozesse in den Bronchien. 2-3g EPA/DHA täglich.' },
      { name: 'Quercetin', wirkung: 'Natürliches Antihistaminikum, stabilisiert Mastzellen. 500-1000mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Entzündungshemmende, schleimreduzierende Ernährung. Milchprodukte oft reduzieren, da sie Schleimbildung fördern können. Viel Antioxidantien aus Obst und Gemüse.",
      staerkend: ["Zwiebeln", "Knoblauch", "Ingwer", "Kurkuma", "Rettich", "Kresse", "Fetter Fisch", "Brokkoli"],
      meiden: ["Kuhmilch", "Weizen", "Zucker", "Konservierungsstoffe", "Sulfite (Wein, Trockenfrüchte)", "Kalte Getränke"],
      rezepte: [
        { name: 'Zwiebel-Honig-Sirup', zutaten: '2 Zwiebeln, 3 EL Honig', zubereitung: 'Zwiebeln fein schneiden, mit Honig bedecken, über Nacht ziehen lassen. Den Sirup 3x täglich 1 EL einnehmen.' },
        { name: 'Atemwegs-Tee', zutaten: 'Thymian, Spitzwegerich, Königskerze, Süßholz zu gleichen Teilen', zubereitung: '2 TL der Mischung mit 250ml heißem Wasser aufgießen, 10 Min. ziehen, 3x täglich.' }
      ]
    },
    fasten: {
      text: "Fasten kann Asthma deutlich verbessern, da es Entzündungen reduziert und das Immunsystem moduliert. Heilfasten unter Begleitung oder Intervallfasten sind empfehlenswert.",
      formen: ["Heilfasten nach Buchinger (5-7 Tage)", "Intervallfasten 16:8", "Milchfreie Eliminationsdiät"],
      reinigung: ["Dampfinhalation mit Thymian", "Nasenspülung mit Salzwasser (Jala Neti)", "Leberwickel"]
    },
    bewegung: {
      text: "Atemtraining ist der Schlüssel. Buteyko-Atmung kann Asthmamedikamente reduzieren. Moderate Bewegung stärkt die Lunge, Überanstrengung vermeiden.",
      praktiken: ["Buteyko-Atemtechnik", "Pranayama (Nadi Shodhana)", "Schwimmen", "Qi Gong (Lungen-Übungen)", "Sanftes Ausdauertraining"]
    },
    geist: {
      einheit: "Atmen ist der intimste Austausch mit der Welt. Asthma fragt: Wo nimmst du dir nicht den Raum, der dir zusteht? Frei atmen bedeutet, das Leben vollständig anzunehmen – einzuatmen UND loszulassen.",
      affirmationen: ["Ich atme frei und tief – das Leben trägt mich.", "Ich nehme mir den Raum, den ich brauche.", "Ich lasse los mit jedem Ausatmen.", "Es ist sicher, lebendig zu sein."],
      meditation: "Atemlenkung: Bewusst in den Bauch atmen, den Atem nach und nach verlängern. 4 Sekunden ein, 7 halten, 8 ausatmen (4-7-8-Technik). Visualisierung von weitem, offenem Raum.",
      energie: "Herzchakra-Öffnung: Hände auf die Brust legen, grünes Licht visualisieren, das sich mit jedem Atemzug ausdehnt. Lungenmeridian an den Armen entlangstreichen."
    },
    produkte: [
      { name: 'Artemisia', desc: 'Beifuß-Tinktur wirkt entzündungshemmend und antiallergisch auf die Atemwege.', tags: ['#atemwege', '#entzündung'] },
      { name: 'Schwarzkümmelöl', desc: 'Wirkt bronchienentspannend, antihistaminisch und immunmodulierend. 1 TL morgens.', tags: ['#allergie', '#lunge'] },
      { name: 'MSM', desc: 'Organischer Schwefel reduziert allergische Reaktionen und Atemwegsentzündungen.', tags: ['#entzündung', '#allergie'] },
      { name: 'Oregano-Öl', desc: 'Starkes natürliches Antibiotikum für die Atemwege. 2-3 Tropfen in Wasser.', tags: ['#antibakteriell', '#lunge'] }
    ]
  },
  {
    id: 'wechseljahre',
    name: 'Wechseljahre / Hormonsystem',
    tags: ['#hormone', '#menopause', '#östrogen', '#hitzewallungen', '#frauengesundheit'],
    koerper: "Die Wechseljahre (Klimakterium) beschreiben den natürlichen Übergang, in dem die Eierstöcke ihre Hormonproduktion (Östrogen, Progesteron) reduzieren. Symptome können Hitzewallungen, Schlafstörungen, Stimmungsschwankungen, Trockenheit der Schleimhäute, Gewichtszunahme, Gelenkschmerzen und Osteoporose-Risiko umfassen. Der Zeitraum erstreckt sich meist über 5-10 Jahre.",
    psychosomatik: {
      zitat: "Ich werde frei von der Pflicht zu gefallen – mein inneres Feuer erwacht.",
      text: "Louise Hay sieht die Wechseljahre als Übergang zur Weisheit und Selbstbestimmung. Dahlke deutet die Hitzewallungen als aufsteigendes Lebensfeuer, das nun der Frau selbst gehört. Dethlefsen beschreibt es als Wandlung von der Mutter zur Weisen. Die Beschwerden entstehen dort, wo dieser Übergang nicht bewusst gelebt wird – wo Jugend festgehalten und Reife abgelehnt wird."
    },
    traditionen: {
      volksmedizin: "Traubensilberkerze, Mönchspfeffer und Salbei waren die wichtigsten Frauenkräuter bei Wechseljahresbeschwerden. Schafgarben-Sitzbäder und Rotklee-Tee wurden traditionell eingesetzt.",
      tcm: "Wechseljahre sind ein natürliches Abnehmen von Nieren-Yin und -Essenz. Hitzewallungen zeigen aufsteigendes Yang bei Yin-Mangel. Akupunktur an Niere 3, 6 und Milz 6. Rehmannia, Dang Gui und Goji nähren das Yin.",
      ayurveda: "Der Übergang geht von der Pitta- in die Vata-Lebensphase. Shatavari ist das wichtigste Frauenrasayana. Abhyanga mit Sesamöl, warme Ernährung und regelmäßige Routinen gleichen Vata aus.",
      germanisch: "Hamer sieht hormonelle Veränderungen als biologisch sinnvollen Prozess. Starke Beschwerden weisen auf aktive Konflikte hin – oft Verlust-Konflikte (Nest, Kinder verlassen Haus) oder Selbstwert-Konflikte im weiblichen Bereich.",
      alchemie: "Der alchemistische Blick sieht in den Wechseljahren die große Transmutation des Weiblichen – von Luna (Mond/Fruchtbarkeit) zu Sol (Sonne/Weisheit). Rosenessenz und Gold-Elixier unterstützen diesen Wandel."
    },
    kraeuter: [
      { name: 'Traubensilberkerze', wirkung: 'Reguliert Hitzewallungen und Schweißausbrüche. 20-40mg Extrakt täglich. Wirkung nach 4-6 Wochen.' },
      { name: 'Salbei', wirkung: 'Reduziert Schwitzen und Hitzewallungen um bis zu 50%. Als Tee (nicht mehr als 3 Tassen) oder Tinktur.' },
      { name: 'Mönchspfeffer', wirkung: 'Reguliert den Hormonhaushalt über die Hypophyse. 20mg Extrakt morgens, besonders in der Perimenopause.' },
      { name: 'Rotklee', wirkung: 'Enthält Isoflavone (Phytoöstrogene), die sanft hormonell ausgleichend wirken. Als Tee oder Extrakt.' },
      { name: 'Shatavari', wirkung: 'Ayurvedisches Frauenrasayana, nährt das weibliche Gewebe und die Schleimhäute. 3-5g Pulver täglich.' },
      { name: 'Johanniskraut', wirkung: 'Hilft bei Stimmungsschwankungen und depressiven Verstimmungen der Wechseljahre. 300mg Extrakt 3x täglich.' }
    ],
    stoffe: [
      { name: 'Vitamin D3+K2', wirkung: 'Schützt die Knochen vor Osteoporose und stärkt die Stimmung. 4000-5000 IE D3 mit K2 täglich.' },
      { name: 'Magnesium', wirkung: 'Gegen Schlafstörungen, Muskelkrämpfe und Nervosität. 400mg abends.' },
      { name: 'Bor', wirkung: 'Unterstützt den Östrogenstoffwechsel und die Kalziumaufnahme. 3-6mg täglich.' },
      { name: 'DHEA', wirkung: 'Vorstufe der Sexualhormone. Nur nach Labortest und in niedriger Dosis (5-10mg). Ärztliche Begleitung.' }
    ],
    ernaehrung: {
      empfehlung: "Phytoöstrogenreiche Ernährung unterstützt den hormonellen Übergang. Kalziumreiche Lebensmittel für die Knochen, gute Fette für die Hormonproduktion. Zucker und Alkohol verstärken Hitzewallungen.",
      staerkend: ["Leinsamen", "Soja (fermentiert)", "Sesam", "Granatapfel", "Brokkoli", "Grünkohl", "Fetter Fisch", "Ghee"],
      meiden: ["Alkohol", "Kaffee", "Scharfe Gewürze", "Zucker", "Stark verarbeitete Lebensmittel"],
      rezepte: [
        { name: 'Hormon-Smoothie', zutaten: '1 EL Leinsamen (geschrotet), 1 Handvoll Beeren, 1 TL Shatavari, 200ml Hafermilch, 1 TL Honig', zubereitung: 'Alles im Mixer cremig pürieren. Morgens trinken.' },
        { name: 'Salbei-Kaltauszug', zutaten: '5 frische Salbeiblätter, 250ml Wasser', zubereitung: 'Blätter über Nacht in kaltem Wasser ziehen lassen. Morgens abseihen und trinken. Gegen Schwitzen.' }
      ]
    },
    fasten: {
      text: "Intervallfasten unterstützt die hormonelle Balance und die Zellregeneration. Längeres Fasten kann die Autophagie aktivieren und den Stoffwechsel neu einstellen.",
      formen: ["Intervallfasten 16:8", "Basenfasten (1-2 Wochen)", "Buchinger-Fasten (5-7 Tage)"],
      reinigung: ["Leberwickel", "Basenbäder", "Hormon-Detox (Phytoöstrogene erhöhen, Xenoöstrogene meiden)"]
    },
    bewegung: {
      text: "Krafttraining schützt die Knochen und verbessert die Körperzusammensetzung. Yoga reguliert das Hormonsystem. Tanzen bringt die weibliche Lebensfreude zurück.",
      praktiken: ["Krafttraining (2-3x/Woche)", "Hormon-Yoga nach Dinah Rodrigues", "Tanzen", "Wandern in der Natur", "Schwimmen"]
    },
    geist: {
      einheit: "Die Wechseljahre sind eine Initiation in die Kraft der weisen Frau. Die Energie, die bisher in die Fortpflanzung floss, steht nun der eigenen Entfaltung zur Verfügung. Es ist ein zweiter Frühling, wenn er bewusst gelebt wird.",
      affirmationen: ["Ich umarme meine Wandlung mit Freude.", "Meine innere Weisheit wächst mit jedem Tag.", "Ich bin schön und kraftvoll in jedem Alter.", "Mein Feuer gehört nun mir."],
      meditation: "Gebärmutter-Meditation: Hand auf den Unterbauch legen, rotes warmes Licht visualisieren. Den Raum ehren, der Leben getragen hat. Dankbarkeit für den Körper und seinen Wandel.",
      energie: "Sakralchakra (Svadhisthana) stärken: Orangefarbenes Licht im Beckenraum visualisieren. Kundalini-Übungen, die die Energie sanft nach oben lenken. Mondrituale zur Ehrung der weiblichen Zyklen."
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Reguliert Stimmungsschwankungen, fördert Schlaf, lindert Gelenkschmerzen.', tags: ['#hormone', '#schlaf'] },
      { name: 'Borax', desc: 'Natürliche Borquelle unterstützt Östrogenstoffwechsel und Knochengesundheit. Minimaldosis.', tags: ['#knochen', '#hormone'] },
      { name: 'Johanniskraut-Tee', desc: 'Gegen Stimmungsschwankungen, innere Unruhe und depressive Phasen der Wechseljahre.', tags: ['#stimmung', '#nerven'] },
      { name: 'Vitamin D3+K2', desc: 'Essenziell für Knochen, Stimmung und Immunsystem in der Menopause.', tags: ['#knochen', '#immunsystem'] }
    ]
  },
  {
    id: 'prostata',
    name: 'Prostata / Männergesundheit',
    tags: ['#prostata', '#männer', '#hormone', '#testosteron', '#blase'],
    koerper: "Die Prostata (Vorsteherdrüse) kann sich ab dem 50. Lebensjahr gutartig vergrößern (BPH), was zu häufigem Harndrang, schwachem Strahl und nächtlichem Wasserlassen führt. Prostatitis (Entzündung) verursacht Schmerzen im Beckenbereich. Erhöhte PSA-Werte erfordern Abklärung. Hormonelle Veränderungen (Testosteron/DHT-Verhältnis), Bewegungsmangel und Fehlernährung begünstigen Prostataprobleme.",
    psychosomatik: {
      zitat: "Meine Männlichkeit sucht einen neuen Ausdruck.",
      text: "Louise Hay sieht Prostataprobleme als Ausdruck von mentaler Ängstlichkeit und dem Gefühl, als Mann nicht mehr zu genügen. Dahlke deutet sie als Konflikt mit der alternden Männlichkeit und unterdrückter Sexualität. Dethlefsen beschreibt die vergrößerte Prostata als den Versuch, die schwindende männliche Potenz zu kompensieren. Es geht um die Wandlung von äußerer zu innerer Kraft."
    },
    traditionen: {
      volksmedizin: "Kürbiskerne galten als das Prostata-Hausmittel schlechthin. Brennnesselwurzel-Tee, Weidenröschen und Bärentrauben-Blätter wurden bei Blasen- und Prostatabeschwerden eingesetzt.",
      tcm: "Prostatavergrößerung wird als Nieren-Yang-Schwäche mit Feuchtigkeits-Stagnation im unteren Erwärmer betrachtet. Akupunktur an Niere 3, Blase 23 und Konzeptionsgefäß 4. Sägepalme und Brennnesselwurzel.",
      ayurveda: "Prostatahyperplasie ist eine Kapha-Ansammlung im Becken mit Vata-Störung (Harnfluss). Gokshura (Tribulus), Shilajit und Ashwagandha stärken die männliche Vitalität. Sitzbäder und Beckenboden-Übungen.",
      germanisch: "Hamer ordnet der Prostata einen Fortpflanzungs-Konflikt zu – den Wunsch, sich fortzupflanzen oder sexuelle Konflikte. In der Heilungsphase schwillt die Prostata an. Auch unschöne Trennungskonflikte in Bezug auf die Partnerin.",
      alchemie: "Mars (Eisen) ist das Planetenmetall der Männlichkeit. Spagyrische Eisen-Essenzen stärken die männliche Lebenskraft. Brennnessel-Destillat (ebenfalls Mars-Pflanze) unterstützt die Prostata."
    },
    kraeuter: [
      { name: 'Sägepalme', wirkung: 'Hemmt die DHT-Produktion und reduziert Prostatavergrößerung. 320mg Extrakt täglich.' },
      { name: 'Brennnesselwurzel', wirkung: 'Reduziert Prostatavolumen und verbessert den Harnfluss. 600-1200mg Extrakt täglich.' },
      { name: 'Weidenröschen', wirkung: 'Traditionelles Prostata-Heilkraut, entzündungshemmend. 2-3 Tassen Tee täglich.' },
      { name: 'Kürbiskerne', wirkung: 'Enthalten Phytosterole und Zink, die die Prostata schützen. 2-3 EL täglich knabbern.' },
      { name: 'Granatapfel', wirkung: 'Ellagsäure hemmt das Prostatawachstum. Als Saft oder Extrakt täglich.' }
    ],
    stoffe: [
      { name: 'Zink', wirkung: 'Essenziell für die Prostata und den Testosteronstoffwechsel. 25-50mg Zinkpicolinat täglich.' },
      { name: 'Selen', wirkung: 'Schützt Prostatazellen vor oxidativem Stress. 200µg täglich.' },
      { name: 'Lycopin', wirkung: 'Aus Tomaten, schützt die Prostata vor Zellveränderungen. 10-15mg täglich oder gekochte Tomaten.' },
      { name: 'Vitamin D3', wirkung: 'Reguliert das Zellwachstum der Prostata. 4000-5000 IE täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Pflanzenreich, zinkhaltig und arm an Milchprodukten. Tomaten (gekocht) liefern Lycopin. Phytoöstrogene aus Soja und Leinsamen können überschüssiges DHT ausgleichen.",
      staerkend: ["Kürbiskerne", "Gekochte Tomaten", "Brokkoli", "Granatapfel", "Leinsamen", "Walnüsse", "Fetter Fisch", "Knoblauch"],
      meiden: ["Milchprodukte", "Rotes Fleisch (übermäßig)", "Alkohol", "Zucker", "Scharfe Gewürze (bei Entzündung)"],
      rezepte: [
        { name: 'Prostata-Müsli', zutaten: '3 EL Kürbiskerne, 1 EL Leinsamen, 1 EL Sonnenblumenkerne, Beeren, Hafer', zubereitung: 'Alles mischen, mit Pflanzenmilch oder Joghurt genießen. Täglich zum Frühstück.' }
      ]
    },
    fasten: {
      text: "Intervallfasten und regelmäßige Entgiftung unterstützen den Hormonstoffwechsel. Mehrtägiges Fasten kann entzündliche Prozesse in der Prostata reduzieren.",
      formen: ["Intervallfasten 16:8", "Saftfasten (3-5 Tage)", "Karottensaft-Kur"],
      reinigung: ["Sitzbäder mit Eichenrinde", "Leberwickel", "Darmreinigung"]
    },
    bewegung: {
      text: "Beckenbodentraining verbessert die Prostatafunktion und den Harnfluss. Regelmäßige Bewegung senkt das Risiko für Prostataprobleme.",
      praktiken: ["Beckenbodentraining (Kegel-Übungen)", "Radfahren (aufrechter Sattel)", "Yoga (Hüftöffner)", "Spaziergänge", "Krafttraining"]
    },
    geist: {
      einheit: "Prostataprobleme laden den Mann ein, seine Männlichkeit jenseits von Leistung und Sexualität neu zu definieren. Die Kraft des reifen Mannes liegt in Weisheit, Präsenz und Gelassenheit. Es ist der Übergang vom Krieger zum weisen König.",
      affirmationen: ["Ich bin in meiner Männlichkeit geborgen.", "Meine Kraft wandelt sich und wächst.", "Ich lasse los, was nicht mehr dient.", "Ich bin genug, wie ich bin."],
      meditation: "Beckenboden-Meditation: Aufmerksamkeit in den Beckenboden lenken, warmes rotes Licht im Bereich der Prostata visualisieren. Anspannen, loslassen, fließen lassen.",
      energie: "Wurzelchakra (Muladhara) stärken: Rotes Licht im Beckenboden visualisieren, Erdung spüren. Akupressur auf Niere 1 (Fußsohle) und Konzeptionsgefäß 4 (Unterbauch)."
    },
    produkte: [
      { name: 'Brennnessel-Tee', desc: 'Brennnesselwurzel-Tee bei Prostatabeschwerden und zur Durchspülung der Harnwege.', tags: ['#prostata', '#harnwege'] },
      { name: 'ZeoMont', desc: 'Zeolith bindet Schwermetalle und Toxine, die hormonelle Disruptoren sein können.', tags: ['#entgiftung', '#hormone'] },
      { name: 'Kurkuma', desc: 'Curcumin wirkt entzündungshemmend und schützt Prostatazellen.', tags: ['#entzündung', '#prostata'] },
      { name: 'Vitamin D3+K2', desc: 'Reguliert Zellwachstum und stärkt das Immunsystem.', tags: ['#zellen', '#immunsystem'] }
    ]
  },
  {
    id: 'niere',
    name: 'Niere / Blase / Harnwege',
    tags: ['#niere', '#blase', '#harnwege', '#entgiftung', '#wasser'],
    koerper: "Die Nieren filtern täglich 1500 Liter Blut, regulieren den Wasserhaushalt, den Blutdruck und den Säure-Basen-Haushalt. Nierensteine, Blasenentzündungen, Nierenschwäche und Harnwegsinfekte sind häufige Beschwerden. Symptome sind Schmerzen im Lendenbereich, häufiges oder schmerzhaftes Wasserlassen, trüber Urin, Ödeme und Erschöpfung.",
    psychosomatik: {
      zitat: "Ich halte an alten Enttäuschungen fest und kann nicht loslassen.",
      text: "Louise Hay verbindet Nierenprobleme mit Enttäuschung, Versagen und Scham. Dahlke sieht in Nierensteinen verhärtete Partnerschaftsthemen – Konflikte, die sich kristallisiert haben. Dethlefsen deutet Blasenentzündungen als den Druck, Altes loszulassen. Die Niere als Partnerschaftsorgan (paarig) spiegelt Beziehungsthemen wider."
    },
    traditionen: {
      volksmedizin: "Birkenblätter-Tee, Goldrute und Bärentraube waren die wichtigsten Nieren- und Blasenkräuter. Wacholderbeeren zur Durchspülung, warme Nierenkissen und Kartoffelwickel auf die Nierengegend.",
      tcm: "Die Niere ist die Wurzel des Lebens, Sitz von Jing (Essenz) und Willenskraft. Nieren-Qi-Schwäche zeigt sich in Rückenschmerzen, Kälteempfinden und Ängstlichkeit. Akupunktur an Niere 3, 7 und Blase 23. Walnüsse und schwarze Sesamsamen stärken die Niere.",
      ayurveda: "Nieren werden durch Vata und Kapha beeinflusst. Gokshura (Tribulus) und Punarnava sind die klassischen Nierenkräuter. Viel warmes Wasser trinken, Steinbrecher-Kräuter (Pashanabheda) bei Steinen.",
      germanisch: "Hamer ordnet der Nierensammelrohr einen Existenzkonflikt ('Flüchtlingskonflikt') zu – das Gefühl, auf sich allein gestellt zu sein. Der Körper hält Wasser zurück als Überlebensstrategie. Blasenentzündung bezieht sich auf Reviergrenzen-Konflikte.",
      alchemie: "Die Nieren stehen unter der Herrschaft der Venus (Kupfer) – dem Planeten der Beziehung und Harmonie. Spagyrische Venus-Essenzen und Birken-Destillat reinigen und stärken das Nieren-System."
    },
    kraeuter: [
      { name: 'Goldrute', wirkung: 'Durchspült die Harnwege, entzündungshemmend, beugt Steinen vor. 3-4 Tassen Tee täglich.' },
      { name: 'Birkenblätter', wirkung: 'Harntreibend, reinigt Nieren und Blase, löst Wassereinlagerungen. Als Tee oder Frischpflanzenpresssaft.' },
      { name: 'Bärentraube', wirkung: 'Antibakteriell bei Blasenentzündungen. Nur kurweise (max. 1 Woche), da Arbutin die Leber belastet.' },
      { name: 'Brennnessel', wirkung: 'Entwässernd, reinigend, remineralisierend. Als Tee, Saft oder Suppe langfristig einnehmen.' },
      { name: 'Schachtelhalm', wirkung: 'Stärkt das Bindegewebe der Harnwege, liefert Kieselsäure. Als Absud 2-3 Tassen täglich.' }
    ],
    stoffe: [
      { name: 'Magnesiumcitrat', wirkung: 'Beugt Kalziumoxalat-Nierensteinen vor. 300-400mg täglich.' },
      { name: 'Vitamin B6', wirkung: 'Reduziert die Oxalatproduktion und senkt das Steinrisiko. 50-100mg täglich.' },
      { name: 'D-Mannose', wirkung: 'Verhindert das Anheften von E.coli-Bakterien an der Blasenwand. 2g bei akuter Blasenentzündung alle 2-3 Stunden.' },
      { name: 'Kalium', wirkung: 'Reguliert den Wasserhaushalt und unterstützt die Nierenfunktion. Über kaliumreiche Nahrung (Bananen, Kartoffeln).' }
    ],
    ernaehrung: {
      empfehlung: "Ausreichend trinken (2-3 Liter), basisch essen, Oxalate und Purine bei Steinneigung reduzieren. Nierenwärme durch warme Speisen und Getränke.",
      staerkend: ["Wassermelone", "Gurke", "Sellerie", "Petersilie", "Spargel", "Cranberries", "Walnüsse", "Schwarze Bohnen"],
      meiden: ["Übermäßiges Salz", "Oxalatreiche Kost (Spinat, Rhabarber bei Steinen)", "Zu viel tierisches Eiweiß", "Cola", "Alkohol"],
      rezepte: [
        { name: 'Nieren-Spülung-Tee', zutaten: 'Goldrute, Birkenblätter, Brennnessel zu gleichen Teilen', zubereitung: '2 TL der Mischung mit 250ml heißem Wasser aufgießen, 10 Min. ziehen, 3-4 Tassen täglich über 4-6 Wochen.' },
        { name: 'Cranberry-Drink', zutaten: '200ml ungesüßter Cranberry-Saft, 500ml Wasser, 1 TL Honig', zubereitung: 'Mischen und über den Tag verteilt trinken. Prophylaxe gegen Harnwegsinfekte.' }
      ]
    },
    fasten: {
      text: "Nierenfasten mit viel Flüssigkeit und Kräutertees entlastet das Ausscheidungssystem. Wassermelonen-Kuren im Sommer sind ideal zur Nierenreinigung.",
      formen: ["Wassermelonen-Tag (1x pro Woche)", "Saftfasten mit Gurke und Sellerie", "Basenfasten"],
      reinigung: ["Nieren-Reinigung nach Hulda Clark", "Warme Nierengüsse nach Kneipp", "Sitzbäder mit Schachtelhalm"]
    },
    bewegung: {
      text: "Bewegung fördert die Nierendurchblutung und den Lymphfluss. Die Nieren lieben Wärme – nach dem Sport warm halten.",
      praktiken: ["Wandern", "Qi Gong (Nieren-Übungen)", "Yoga (Vorwärtsbeugen)", "Trampolinspringen (Lymphe)", "Rückenübungen"]
    },
    geist: {
      einheit: "Die Nieren sind der Sitz der Lebenskraft und Urangst. Nierenprobleme fragen: Wo hältst du an alten Ängsten und Beziehungsmustern fest? Das Loslassen – wie das Wasser, das fließt – ist der Schlüssel zur Nierenheilung.",
      affirmationen: ["Ich lasse los, was mich belastet.", "Mein Leben fließt wie klares Wasser.", "Ich bin sicher und getragen.", "Ich vergebe und befreie mich."],
      meditation: "Nieren-Meditation: Hände auf den unteren Rücken legen, tiefblaues Licht in die Nieren atmen. Wärme und Geborgenheit spüren. Alten Kummer wie trübes Wasser abfließen lassen.",
      energie: "Nieren-Meridian an der Fußsohle (Niere 1, 'Sprudelnde Quelle') massieren. Warme Hände auf die Nierengegend legen und Wärme einströmen lassen. Wurzelchakra stärken."
    },
    produkte: [
      { name: 'Brennnessel-Tee', desc: 'Durchspült und reinigt Nieren und Harnwege. Remineralisierend und entwässernd.', tags: ['#niere', '#harnwege'] },
      { name: 'ZeoMont', desc: 'Zeolith bindet Giftstoffe im Darm und entlastet damit die Nieren als Entgiftungsorgan.', tags: ['#entgiftung', '#niere'] },
      { name: 'Natron', desc: 'Gleicht den Säure-Basen-Haushalt aus und entlastet die Nieren. Messerspitze in Wasser.', tags: ['#basisch', '#niere'] },
      { name: 'Kolloidales Silber', desc: 'Bei Harnwegsinfekten antibakteriell einsetzbar. Äußerlich und innerlich in niedriger Konzentration.', tags: ['#antibakteriell', '#blase'] }
    ]
  },
  {
    id: 'leber',
    name: 'Leber / Galle',
    tags: ['#leber', '#galle', '#entgiftung', '#stoffwechsel', '#zorn'],
    koerper: "Die Leber ist das zentrale Entgiftungs- und Stoffwechselorgan. Sie verstoffwechselt Nährstoffe, produziert Galle, baut Hormone ab und entgiftet Medikamente, Alkohol und Umweltgifte. Leberbeschwerden äußern sich in Müdigkeit, Verdauungsproblemen, Oberbauchschmerzen rechts, Hautproblemen, Gallensteine und erhöhten Leberwerten. Eine Fettleber ist inzwischen eine Volkskrankheit.",
    psychosomatik: {
      zitat: "Mein Zorn frisst mich von innen auf.",
      text: "Louise Hay sieht Leberprobleme als Sitz des Zorns und der Verbitterung. Dahlke deutet Gallensteine als verhärtete Aggression, die nicht gelebt wurde. Dethlefsen beschreibt die Leber als Organ der Lebensbewertung – wer das Leben ständig kritisch bewertet, überlastet sie. Gelbe Hautfarbe bei Gelbsucht zeigt den Neid (Gelbsucht = Gelb-Sucht)."
    },
    traditionen: {
      volksmedizin: "Mariendistel war das wichtigste Leberkraut der Volksmedizin. Löwenzahn-Kuren im Frühling, Artischocken-Tee, Leberwickel mit Schafgarbe und Schwedenbitter nach Maria Treben waren bewährte Hausmittel.",
      tcm: "Die Leber regiert den freien Qi-Fluss, speichert Blut und beherbergt die Wanderseele (Hun). Leber-Qi-Stagnation ist die häufigste Disharmonie – ausgelöst durch unterdrückte Emotionen, besonders Zorn. Akupunktur an Leber 3, 14 und Gallenblase 34.",
      ayurveda: "Die Leber ist ein Pitta-Organ. Überhitzung (Zorn, scharfes Essen, Alkohol) schädigt sie. Kutki, Bhumyamalaki und Aloe-Vera-Saft reinigen und kühlen die Leber. Bittere Geschmäcker sind heilsam.",
      germanisch: "Hamer ordnet dem Leberparenchym einen Existenz-Angst-Konflikt zu (Verhungern) und den Gallengängen einen Revierärger-Konflikt. Gallensteine entstehen in der Heilungsphase nach gelöstem Ärger. Die Leber als größtes Organ hat viele Konfliktebenen.",
      alchemie: "Die Leber steht unter Jupiter (Zinn) – dem Planeten der Expansion und Großzügigkeit. Spagyrisches Zinn und Löwenzahn-Destillat stärken die Leber. Die alchemistische Reinigung der Leber ist ein Albedo-Prozess – Klärung und Reinigung."
    },
    kraeuter: [
      { name: 'Mariendistel', wirkung: 'Silymarin schützt und regeneriert Leberzellen. 200-400mg Extrakt (80% Silymarin) 2-3x täglich.' },
      { name: 'Löwenzahn', wirkung: 'Regt den Gallefluss an und unterstützt die Leberentgiftung. Als Tee, Salat oder Frischpflanzenpresssaft.' },
      { name: 'Artischocke', wirkung: 'Senkt Cholesterin, fördert Galleproduktion und schützt Leberzellen. 600mg Extrakt täglich.' },
      { name: 'Schöllkraut', wirkung: 'Löst Gallekrämpfe und fördert den Gallefluss. Nur in homöopathischer Dosis oder Fertigpräparaten (giftig!).' },
      { name: 'Kurkuma', wirkung: 'Entzündungshemmend, cholagog (galleanregend) und leberschützend. 3-5g täglich mit Pfeffer.' }
    ],
    stoffe: [
      { name: 'NAC (N-Acetyl-Cystein)', wirkung: 'Vorstufe von Glutathion, dem stärksten Leber-Antioxidans. 600-1200mg täglich.' },
      { name: 'Alpha-Liponsäure', wirkung: 'Starkes Antioxidans, schützt die Leber vor Toxinen. 300-600mg täglich.' },
      { name: 'Cholin', wirkung: 'Essenziell für den Fettstoffwechsel der Leber, beugt Fettleber vor. 500mg täglich.' },
      { name: 'B-Vitamine', wirkung: 'Unterstützen die Phase-I- und Phase-II-Entgiftung der Leber. Hochdosierter B-Komplex.' }
    ],
    ernaehrung: {
      empfehlung: "Bittere Lebensmittel regen den Gallefluss an. Faserreiche, naturbelassene Kost entlastet die Leber. Alkohol, Zucker und Weißmehl sind die größten Leberbelastungen.",
      staerkend: ["Artischocke", "Rucola", "Chicorée", "Löwenzahn", "Rote Bete", "Kurkuma", "Zitrone", "Knoblauch"],
      meiden: ["Alkohol", "Zucker", "Weißmehl", "Frittiertes", "Transfette", "Konservierungsstoffe", "Medikamente (wenn möglich reduzieren)"],
      rezepte: [
        { name: 'Leberwasser', zutaten: 'Saft einer halben Zitrone, 250ml warmes Wasser, 1 TL Kurkuma, Prise Cayenne', zubereitung: 'Alles mischen und morgens nüchtern trinken. Regt den Gallefluss an.' },
        { name: 'Bittersalat', zutaten: 'Rucola, Chicorée, Löwenzahn, Radicchio, Olivenöl, Zitrone', zubereitung: 'Blattsalate mischen, mit Olivenöl und Zitrone anmachen. Vor den Mahlzeiten essen.' }
      ]
    },
    fasten: {
      text: "Die Leber profitiert enorm von Fastenphasen. Schon 24 Stunden Fasten aktiviert die Autophagie in Leberzellen. Leberfasten nach Dr. Worm mit Eiweißshakes und Gemüse kann eine Fettleber rückgängig machen.",
      formen: ["Leberfasten nach Dr. Worm (14 Tage)", "Buchinger-Fasten", "Saftfasten mit Gemüsesäften", "Intervallfasten 16:8"],
      reinigung: ["Leberwickel mit Schafgarbe (täglich 30 Min.)", "Leber-Galle-Reinigung nach Moritz", "Bitterstoffe-Kur", "Ölziehen"]
    },
    bewegung: {
      text: "Moderate Bewegung fördert die Leberdurchblutung und den Abbau von Leberfett. Drehbewegungen massieren die Leber sanft.",
      praktiken: ["Yoga (Drehhaltungen)", "Qi Gong (Leber-Übungen im Frühling)", "Wandern", "Moderate Ausdauerbewegung", "Atemübungen"]
    },
    geist: {
      einheit: "Die Leber ist das Organ der Vision und des Mutes. Wenn sie geschwächt ist, fehlen Klarheit und Entschlusskraft. Leber heilen heißt: den Zorn in Tatkraft verwandeln, Bitterkeit in Weisheit, und den Mut finden, das eigene Leben zu leben.",
      affirmationen: ["Ich lasse Zorn und Groll los.", "Ich sehe das Leben mit Wohlwollen.", "Mein Körper reinigt sich mit Leichtigkeit.", "Ich vertraue dem Fluss meines Lebens."],
      meditation: "Lebermeditation: Hand auf den rechten Oberbauch legen, grünes (TCM: Leber-Farbe) Licht visualisieren. Den Leber-Heilungslaut 'SHHHH' tönen. Zorn wie dunkelgrünen Rauch ausatmen.",
      energie: "Lebermeridian an der Beininnenseite entlangstreichen. Gallenblase 20 (Nacken) bei Kopfschmerzen massieren. Solarplexus-Chakra stärken (gelbes Licht)."
    },
    produkte: [
      { name: 'Mariendistel', desc: 'Silymarin regeneriert Leberzellen und schützt vor Toxinen. Das wichtigste Leber-Naturheilmittel.', tags: ['#leber', '#regeneration'] },
      { name: 'Zeolith', desc: 'Bindet Toxine im Darm und entlastet die Leber als Entgiftungsorgan.', tags: ['#entgiftung', '#leber'] },
      { name: 'Kurkuma', desc: 'Curcumin wirkt cholagog, entzündungshemmend und schützt die Leber.', tags: ['#leber', '#galle'] },
      { name: 'Schwefel', desc: 'MSM-Schwefel unterstützt die Phase-II-Entgiftung der Leber (Sulfatierung).', tags: ['#entgiftung', '#stoffwechsel'] }
    ]
  },
  {
    id: 'tinnitus',
    name: 'Tinnitus / Ohren',
    tags: ['#tinnitus', '#ohren', '#niere', '#stress', '#hören'],
    koerper: "Tinnitus ist die Wahrnehmung von Geräuschen (Pfeifen, Rauschen, Brummen) ohne äußere Schallquelle. Ursachen können Lärm, Durchblutungsstörungen, Halswirbelsäulenprobleme, Kieferfehlstellungen, Hörsturz oder Medikamente sein. Chronischer Stress und Erschöpfung sind häufige Auslöser. Die Hörnerven sind überaktiviert, das Gehirn erzeugt 'Phantomgeräusche'.",
    psychosomatik: {
      zitat: "Ich will etwas nicht hören – oder ich höre endlich hin.",
      text: "Louise Hay sieht Tinnitus als Weigerung, auf die innere Stimme zu hören. Dahlke deutet das Ohrgeräusch als inneren Ruf, der gehört werden will – was im Außen überhört wird, erzeugt der Körper selbst. Dethlefsen beschreibt es als den Wunsch nach Stille, der sich paradox als Geräusch manifestiert. Tinnitus fragt: Was willst du nicht hören? Oder: Worauf sollst du endlich hören?"
    },
    traditionen: {
      volksmedizin: "Ginkgo-Tee und Knoblauchkuren zur Durchblutungsförderung. Zwiebelsaft ins Ohr, warme Öl-Ohrenwickel und Dampfbäder mit Kamille. Johanniskrautöl wurde ins Ohr geträufelt.",
      tcm: "Tinnitus wird als aufsteigendes Leber-Feuer (hoher, lauter Ton) oder Nieren-Schwäche (tiefer, leiser Ton) betrachtet. Die Ohren sind das Sinnesorgan der Niere. Akupunktur an Dünndarm 19, Gallenblase 2 und Niere 3.",
      ayurveda: "Tinnitus ist eine Vata-Störung (Wind im Kopf). Karna Purana (warmes Sesamöl ins Ohr) ist die klassische Behandlung. Ashwagandha und Brahmi beruhigen das überreizte Nervensystem.",
      germanisch: "Hamer ordnet Tinnitus einem Hörkonflikt zu – 'Ich kann nicht glauben, was ich höre' oder 'Ich will etwas Bestimmtes hören'. In der aktiven Phase ist das Hören überempfindlich, in der Heilungsphase kommt der Tinnitus.",
      alchemie: "Die Ohren stehen in Verbindung mit Saturn (Blei) – der Planet der Stille und Verinnerlichung. Spagyrische Saturn-Essenzen und Ginkgo-Destillat fördern die innere Stille. Der alchemistische Weg: durch das Geräusch zur Stille finden."
    },
    kraeuter: [
      { name: 'Ginkgo biloba', wirkung: 'Verbessert die Durchblutung des Innenohrs. 240mg Extrakt (EGb 761) täglich, Wirkung nach 8-12 Wochen.' },
      { name: 'Baldrian', wirkung: 'Beruhigt das überreizte Nervensystem und fördert Schlaf. Als Tee oder Tinktur abends.' },
      { name: 'Passionsblume', wirkung: 'Anxiolytisch, reduziert die Stresskomponente des Tinnitus. 3x täglich als Tee oder Extrakt.' },
      { name: 'Johanniskraut', wirkung: 'Hebt die Stimmung und stärkt die Nerven. Besonders bei Tinnitus mit depressiver Begleitstimmung.' },
      { name: 'Traubensilberkerze', wirkung: 'Bei Tinnitus, der mit Nacken-/HWS-Verspannungen zusammenhängt. Durchblutungsfördernd.' }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Schützt die Hörnerven und entspannt die Muskulatur im Ohrbereich. 400-600mg täglich.' },
      { name: 'Zink', wirkung: 'Zinkmangel ist bei Tinnitus-Patienten häufig. 25-50mg Zinkpicolinat täglich.' },
      { name: 'B-Vitamine', wirkung: 'B12-Mangel kann Tinnitus verursachen. Hochdosierter B-Komplex mit Methylcobalamin.' },
      { name: 'Alpha-Liponsäure', wirkung: 'Neuroprotektiv, schützt die Hörnervenzellen vor oxidativem Stress. 300-600mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Durchblutungsfördernd und entzündungshemmend essen. Koffein und Salz können Tinnitus verschlimmern. Antioxidantien schützen die empfindlichen Hörzellen.",
      staerkend: ["Walnüsse", "Fetter Fisch", "Knoblauch", "Ingwer", "Blaubeeren", "Spinat", "Avocado"],
      meiden: ["Koffein (kann verschlimmern)", "Übermäßiges Salz", "Alkohol", "Glutamat", "Aspartam"],
      rezepte: [
        { name: 'Durchblutungs-Tonikum', zutaten: '2 Knoblauchzehen, Saft einer Zitrone, 1 TL Honig, warmes Wasser', zubereitung: 'Knoblauch pressen, mit Zitrone, Honig und Wasser mischen. Täglich morgens trinken.' }
      ]
    },
    fasten: {
      text: "Fasten kann Tinnitus lindern, da es Entzündungen reduziert und die Durchblutung verbessert. Stille-Fasten (Reizreduktion) ist besonders heilsam.",
      formen: ["Intervallfasten 16:8", "Stille-Retreat (Reizfasten)", "Basenfasten"],
      reinigung: ["Ohr-Kerzen (umstritten, sanfte Entspannung)", "Nasenspülung", "Nacken-Entlastung"]
    },
    bewegung: {
      text: "Nacken- und Kieferübungen können Tinnitus lindern, wenn muskuläre Verspannungen beteiligt sind. Ausdauertraining verbessert die Durchblutung.",
      praktiken: ["HWS-Mobilisation", "Kieferentspannung", "Moderater Ausdauersport", "Yoga (Schulterstand)", "Progressive Muskelentspannung"]
    },
    geist: {
      einheit: "Tinnitus ist eine Einladung, in die Stille jenseits des Geräuschs zu finden. Wer lernt, mit dem Ton zu sein statt gegen ihn zu kämpfen, findet oft eine tiefere Stille als je zuvor. Das Ohr öffnet sich nach innen.",
      affirmationen: ["Ich höre die Stille hinter dem Geräusch.", "Ich vertraue meiner inneren Stimme.", "Ich lasse los, was ich nicht kontrollieren kann.", "Frieden durchströmt meinen ganzen Körper."],
      meditation: "Klangmeditation: Nicht gegen den Tinnitus meditieren, sondern ihn als Meditationsobjekt nutzen. Den Ton beobachten, ohne zu bewerten. In den Ton hineinsinken, bis er sich verändert. Nada-Yoga (Meditation auf den inneren Klang).",
      energie: "Ohren mit den Handflächen bedecken und sanft kreisen (Trommeln des himmlischen Donners – TCM-Technik). Schädelakupressur an den Ohrmuschelreflexzonen. Halschakra (Vishuddha) stärken."
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Beruhigt das Nervensystem und kann die Tinnitus-Wahrnehmung reduzieren.', tags: ['#nerven', '#entspannung'] },
      { name: 'Magnesium-Öl', desc: 'Auf Nacken und hinter die Ohren einmassieren. Entspannt die Muskulatur.', tags: ['#entspannung', '#nacken'] },
      { name: 'Knoblauch-Tinktur', desc: 'Fördert die Durchblutung und wirkt antimikrobiell. Traditionelles Ohren-Hausmittel.', tags: ['#durchblutung', '#ohren'] },
      { name: 'Hericium', desc: 'Löwenmähne-Pilz regeneriert Nervengewebe und kann Hörnerven unterstützen.', tags: ['#nerven', '#regeneration'] }
    ]
  },
  {
    id: 'candida',
    name: 'Pilzinfektionen / Candida',
    tags: ['#candida', '#pilze', '#darm', '#immunsystem', '#mykose'],
    koerper: "Candida albicans ist ein Hefepilz, der natürlicherweise im Darm lebt. Bei geschwächtem Immunsystem, Antibiotikaeinnahme oder zuckerreicher Ernährung kann er sich übermäßig vermehren. Symptome sind Blähungen, Müdigkeit, Heißhunger auf Süßes, Hautpilz, Scheidenpilz, Mundpilz (Soor), Gehirnnebel und chronische Verdauungsbeschwerden.",
    psychosomatik: {
      zitat: "Etwas frisst mich von innen auf – oder ich füttere etwas, das nicht mir dient.",
      text: "Louise Hay sieht Pilzinfektionen als Ausdruck von Frustration und Wut, die sich selbst zersetzt. Dahlke deutet Candida als Parasitismus-Thema – der Pilz lebt auf Kosten des Wirts, wie auch der Betroffene sich ausbeuten lässt oder andere ausbeutet. Dethlefsen beschreibt Mykosen als Grenzüberschreitungsthema – wo lässt man zu, dass etwas die eigene Integrität untergräbt?"
    },
    traditionen: {
      volksmedizin: "Knoblauch galt als stärkstes natürliches Antimykotikum. Apfelessig-Spülungen, Sauerkraut für die Darmflora und bittere Kräuter (Wermut, Enzian) wurden bei Pilzbefall eingesetzt.",
      tcm: "Candida-Überwucherung ist eine Milz-Qi-Schwäche mit Feuchtigkeits-Ansammlung. Die Milz kann die Nahrung nicht transformieren, es entsteht pathogene Feuchtigkeit. Akupunktur an Milz 9, Magen 36 und Dickdarm 11. Wenig Zucker, keine Feuchtigkeit erzeugenden Lebensmittel.",
      ayurveda: "Candida ist eine Ama-Ansammlung (Verdauungsgifte) mit Kapha-Überschuss. Triphala, Neem und Kurkuma reinigen den Verdauungstrakt. Scharfe und bittere Geschmäcker reduzieren Kapha. Agni (Verdauungsfeuer) stärken.",
      germanisch: "Hamer sieht Pilzinfektionen als Teil des Heilungsprozesses – Pilze bauen in der Vagotonie überschüssiges Gewebe ab. Candida-Überwucherung im Darm kann auf einen gelösten Brocken-Konflikt ('unverdaulicher Brocken') hinweisen.",
      alchemie: "Pilze gehören zum Mond-Prinzip (Luna) – dem Bereich des Unbewussten und der Zersetzung. Die alchemistische Heilung nutzt Sulfur (Feuer/Schwefel) gegen die feuchte Mond-Natur des Pilzes. Spagyrische Schwefel-Essenzen und Wermut-Destillat."
    },
    kraeuter: [
      { name: 'Knoblauch', wirkung: 'Starkes natürliches Antimykotikum (Allicin). 2-3 frische Zehen täglich roh essen oder als Tinktur.' },
      { name: 'Oregano', wirkung: 'Oreganoöl ist hochpotent gegen Candida. 2-3 Tropfen in Kapsel oder Wasser, 2x täglich für 2-4 Wochen.' },
      { name: 'Kapuzinerkresse', wirkung: 'Natürliches Antibiotikum und Antimykotikum. Als Frischpflanze oder Presssaft.' },
      { name: 'Wermut', wirkung: 'Bitter, antimykotisch, stärkt die Verdauung. Als Tee kurweise (max. 3 Wochen), nicht in der Schwangerschaft.' },
      { name: 'Pau d\'Arco (Lapacho)', wirkung: 'Südamerikanische Rinde mit starker antifungaler Wirkung. Als Tee 2-3 Tassen täglich.' }
    ],
    stoffe: [
      { name: 'Caprylsäure', wirkung: 'Aus Kokosöl, durchdringt die Candida-Zellmembran. 1000-2000mg täglich zu den Mahlzeiten.' },
      { name: 'Probiotika', wirkung: 'Hochdosierte Lactobacillen und Bifidobakterien verdrängen Candida. 20-50 Milliarden KBE täglich.' },
      { name: 'Biotin', wirkung: 'Verhindert die Umwandlung von Candida in die aggressive Hyphenform. 5-10mg täglich.' },
      { name: 'Schwefel (MSM)', wirkung: 'Stärkt die Abwehr und wirkt antimikrobiell. 2-4g täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Strikte Anti-Candida-Diät für mindestens 4-8 Wochen: Kein Zucker, keine Hefe, kein Alkohol. Candida verhungern lassen. Danach langsam wieder aufbauen.",
      staerkend: ["Kokosfett (Caprylsäure)", "Knoblauch", "Sauerkraut", "Kimchi", "Kefir", "Bittere Salate", "Kurkuma", "Ingwer"],
      meiden: ["Zucker (jede Form)", "Weißmehl", "Alkohol", "Hefe", "Pilze", "Obst (anfangs)", "Milchprodukte", "Essig (außer Apfelessig)"],
      rezepte: [
        { name: 'Anti-Candida-Suppe', zutaten: 'Knoblauch, Zwiebeln, Kokosmilch, Kurkuma, Ingwer, Brokkoli, Zucchini', zubereitung: 'Gemüse in Kokosmilch kochen, mit Kurkuma und Ingwer würzen. Als Hauptmahlzeit.' },
        { name: 'Knoblauch-Kokos-Drink', zutaten: '2 Knoblauchzehen, 1 TL Kokosöl, warmes Wasser', zubereitung: 'Knoblauch pressen, Kokosöl schmelzen, in warmes Wasser rühren. Morgens nüchtern trinken.' }
      ]
    },
    fasten: {
      text: "Fasten entzieht dem Candida die Nahrungsgrundlage (Zucker). Ein 3-5-tägiges Saftfasten mit Gemüsesäften kann den Pilz deutlich reduzieren. Wichtig: langsamer Einstieg, da Absterbe-Reaktionen (Herxheimer) auftreten können.",
      formen: ["Gemüsesaft-Fasten (3-5 Tage)", "Anti-Candida-Eliminationsdiät", "Intervallfasten 16:8"],
      reinigung: ["Darmspülung mit Einläufen", "Zeolith zur Toxinbindung", "Leberwickel (Entgiftung)"]
    },
    bewegung: {
      text: "Moderate Bewegung stärkt das Immunsystem und verbessert die Verdauung. Übermäßiger Sport kann bei Candida kontraproduktiv sein (Immunschwächung).",
      praktiken: ["Moderate Spaziergänge", "Yoga (Drehhaltungen für die Verdauung)", "Trampolinspringen (Lymphe)", "Atemübungen"]
    },
    geist: {
      einheit: "Candida fragt: Was nähre ich, das mich schwächt? Welche 'Parasiten' – Beziehungen, Gewohnheiten, Gedanken – zehren an meiner Lebenskraft? Die Heilung beginnt damit, klare Grenzen zu setzen und sich nur noch zu nähren, was wirklich nährt.",
      affirmationen: ["Ich nähre nur, was mich stärkt.", "Mein Körper ist ein klarer, reiner Tempel.", "Ich setze gesunde Grenzen.", "Mein Immunsystem ist stark und wachsam."],
      meditation: "Reinigungs-Meditation: Weißes Licht durch den ganzen Körper strömen lassen, das alles Fremde und Schädliche auflöst. Besonders den Bauchraum mit Licht füllen. Die eigene Integrität spüren.",
      energie: "Solarplexus-Chakra (Manipura) stärken: Gelbes Feuer im Bauch visualisieren, das alles Fremde verbrennt. Bauchmassage im Uhrzeigersinn. Handauflegen auf den Bauch."
    },
    produkte: [
      { name: 'Oregano-Öl', desc: 'Carvacrol wirkt stark antimykotisch gegen Candida. 2-3 Tropfen verdünnt einnehmen.', tags: ['#antimykotisch', '#candida'] },
      { name: 'Knoblauch-Tinktur', desc: 'Allicin als natürliches Antimykotikum. Täglich einnehmen während der Kur.', tags: ['#antimykotisch', '#darm'] },
      { name: 'Zeolith', desc: 'Bindet die beim Absterben freigesetzten Candida-Toxine (Herxheimer-Reaktion reduzieren).', tags: ['#entgiftung', '#darm'] },
      { name: 'Kolloidales Silber', desc: 'Antimikrobiell und antifungal. Äußerlich bei Hautpilz, innerlich kurweise.', tags: ['#antimykotisch', '#pilz'] }
    ]
  },
  {
    id: 'osteoporose',
    name: 'Osteoporose / Knochenschwund',
    tags: ['#knochen', '#osteoporose', '#kalzium', '#vitamin-d', '#säure-basen'],
    koerper: "Osteoporose ist ein fortschreitender Verlust an Knochendichte und -qualität. Die Knochen werden porös und brüchig, Frakturen treten schon bei geringer Belastung auf. Besonders betroffen sind Wirbelkörper, Oberschenkelhals und Handgelenk. Frauen nach den Wechseljahren sind durch den Östrogenmangel besonders gefährdet. Auch Männer können betroffen sein.",
    psychosomatik: {
      zitat: "Mein inneres Gerüst bricht zusammen – ich habe keinen Halt mehr.",
      text: "Louise Hay sieht Osteoporose als Gefühl, keine Stütze im Leben mehr zu haben. Dahlke deutet den Knochenschwund als Verlust der inneren Struktur – wer seine Werte und sein Rückgrat verliert, verliert es auch körperlich. Dethlefsen beschreibt es als Aufgabe der Standfestigkeit, die innere Haltlosigkeit spiegelt sich in brüchigen Knochen wider."
    },
    traditionen: {
      volksmedizin: "Schachtelhalm-Tee lieferte Kieselsäure für die Knochen. Beinwell-Umschläge bei Brüchen, Eichenrinden-Bäder zur Stärkung. Knochenbrühe war das traditionelle Aufbaumittel. Kalkwasser und Eierschalenpulver lieferten Kalzium.",
      tcm: "Osteoporose ist eine Nieren-Essenz-Schwäche (Jing-Mangel). Die Niere beherrscht die Knochen. Akupunktur an Niere 3, Blase 23 und Magen 36. Du Zhong (Eucommia) und Rehmannia stärken Niere und Knochen. Tai Chi zur Sturzprophylaxe.",
      ayurveda: "Osteoporose ist eine Vata-Störung mit Dhatu-Schwäche (Knochen-Gewebe/Asthi). Ashwagandha, Shatavari und Arjuna stärken die Knochen. Ghee, Sesam und warme Milch nähren das Knochengewebe. Panchakarma mit Basti (Einlauf) wirkt auf Vata.",
      germanisch: "Hamer ordnet Knochenabbau einem Selbstwert-Konflikt zu – 'Ich bin wertlos, ich tauge nichts.' Der Knochen baut in der aktiven Konfliktphase ab (Osteolyse) und in der Heilungsphase wieder auf (Rekalzifizierung).",
      alchemie: "Saturn (Blei) regiert die Knochen – Struktur, Zeit und Beständigkeit. Spagyrische Saturn-Essenzen und Schachtelhalm-Destillat stärken das Knochengerüst. Der alchemistische Weg: Blei zu Gold verwandeln – Steifheit in lebendige Stärke."
    },
    kraeuter: [
      { name: 'Schachtelhalm', wirkung: 'Reichste pflanzliche Kieselsäure-Quelle, stärkt Knochen und Bindegewebe. Als Absud 2-3 Tassen täglich.' },
      { name: 'Beinwell', wirkung: 'Fördert die Knochenregeneration (Allantoin). Äußerlich als Salbe oder Umschlag.' },
      { name: 'Brennnessel', wirkung: 'Kalzium- und Mineralstoffreich, remineralisierend. Als Tee, Suppe oder Pulver täglich.' },
      { name: 'Rotklee', wirkung: 'Phytoöstrogene schützen die Knochen nach den Wechseljahren. Als Tee oder Extrakt.' },
      { name: 'Alfalfa (Luzerne)', wirkung: 'Reich an Vitamin K, Kalzium und Mineralien für den Knochenaufbau. Als Sprossen oder Tee.' }
    ],
    stoffe: [
      { name: 'Vitamin D3+K2', wirkung: 'D3 fördert die Kalziumaufnahme, K2 lenkt es in die Knochen (nicht in die Arterien). 4000-5000 IE D3 + 200µg K2 MK7.' },
      { name: 'Kalzium', wirkung: 'Aus natürlichen Quellen (Korallen-Kalzium, Eierschale). 800-1000mg täglich. Immer mit D3 und K2.' },
      { name: 'Magnesium', wirkung: 'Nötig für die Kalziumverwertung und Knochenstruktur. 400mg täglich im Verhältnis 2:1 zu Kalzium.' },
      { name: 'Bor', wirkung: 'Reduziert Kalziumverlust und unterstützt den Vitamin-D-Stoffwechsel. 3-6mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Basische, mineralstoffreiche Ernährung. Übersäuerung ist ein Hauptfaktor: Der Körper puffert Säuren mit Kalzium aus den Knochen. Kalziumräuber meiden (Cola, Kaffee, Zucker).",
      staerkend: ["Sesam (Kalzium)", "Brokkoli", "Grünkohl", "Mandeln", "Sardinen (mit Gräten)", "Knochenbrühe", "Feigen", "Tahini"],
      meiden: ["Cola (Phosphorsäure)", "Übermäßig Kaffee", "Zucker", "Übermäßig tierisches Eiweiß", "Alkohol", "Salz im Übermaß"],
      rezepte: [
        { name: 'Knochenbrühe', zutaten: 'Rinderknochen, Apfelessig, Sellerie, Karotte, Zwiebel, Salz', zubereitung: 'Knochen mit Essig und Gemüse 12-24 Stunden köcheln. Täglich eine Tasse trinken.' },
        { name: 'Sesam-Kalzium-Paste', zutaten: '100g Sesam (geröstet), 1 EL Honig, Prise Zimt', zubereitung: 'Sesam mahlen, mit Honig und Zimt mischen. 2 EL täglich, z.B. auf Brot oder in Smoothie.' }
      ]
    },
    fasten: {
      text: "Kurzzeitfasten kann die Autophagie alter Knochenzellen anregen. Längeres Fasten ist bei Osteoporose mit Vorsicht zu genießen, da Mineralstoffverluste drohen. Basenfasten ist ideal.",
      formen: ["Basenfasten (1-2 Wochen)", "Sanftes Intervallfasten 16:8", "Entsäuerungskur"],
      reinigung: ["Basenbäder mit Natron (3x/Woche)", "Basische Wickel", "Trockenbürsten"]
    },
    bewegung: {
      text: "Krafttraining und Erschütterungsreize stimulieren den Knochenaufbau (Wolffsches Gesetz). Schwimmen allein reicht nicht – die Knochen brauchen Belastung und Erschütterung.",
      praktiken: ["Krafttraining mit Gewichten", "Wandern (Erschütterung)", "Tanzen", "Tai Chi (Sturzprophylaxe)", "Seilspringen (bei stabilen Knochen)"]
    },
    geist: {
      einheit: "Knochen sind das tiefste Gewebe unseres Körpers – sie tragen unsere innerste Struktur. Osteoporose fragt: Was gibt dir Halt? Worauf stehst du? Innere Stabilität entsteht durch Werte, Vertrauen und die Verbindung zu etwas Größerem.",
      affirmationen: ["Ich stehe fest und sicher im Leben.", "Meine Knochen sind stark und tragen mich.", "Ich habe inneren Halt und Struktur.", "Ich bin getragen und unterstützt."],
      meditation: "Knochen-Meditation: Im Sitzen die Wirbelsäule spüren, Wirbel für Wirbel. Sich vorstellen, wie weißes Licht die Knochen durchströmt und stärkt. Die eigene Aufrichtigkeit spüren.",
      energie: "Wurzelchakra (Muladhara) stärken für Erdung und Stabilität. Klopfmassage entlang der großen Knochen (Arme, Beine) zur Stimulation. Barfußgehen auf der Erde."
    },
    produkte: [
      { name: 'Vitamin D3+K2', desc: 'Die wichtigste Nahrungsergänzung bei Osteoporose. D3 für Kalziumaufnahme, K2 für Knocheneinbau.', tags: ['#knochen', '#kalzium'] },
      { name: 'Borax', desc: 'Natürliches Bor unterstützt Kalziumstoffwechsel und Knochenaufbau. Minimaldosis in Wasser.', tags: ['#knochen', '#mineralien'] },
      { name: 'MSM', desc: 'Organischer Schwefel für Kollagen und Bindegewebe der Knochen.', tags: ['#knochen', '#bindegewebe'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat als Badezusatz – transdermale Magnesiumaufnahme für Knochen und Muskeln.', tags: ['#magnesium', '#knochen'] }
    ]
  },
  {
    id: 'uebergewicht',
    name: 'Übergewicht / Stoffwechsel',
    tags: ['#stoffwechsel', '#gewicht', '#insulin', '#schilddrüse', '#ernährung'],
    koerper: "Übergewicht entsteht durch ein Ungleichgewicht zwischen Energieaufnahme und -verbrauch, wird aber durch hormonelle Faktoren (Insulin, Schilddrüse, Cortisol, Leptin), Darmflora, Toxinbelastung, Schlafmangel und Stress stark beeinflusst. Viszerales Bauchfett produziert Entzündungsbotenstoffe und erhöht das Risiko für Diabetes, Herz-Kreislauf-Erkrankungen und Krebs.",
    psychosomatik: {
      zitat: "Ich schütze mich mit einer Schicht vor der Welt.",
      text: "Louise Hay sieht Übergewicht als Schutzmechanismus – Angst, Unsicherheit und das Bedürfnis nach Abgrenzung. Dahlke deutet Fett als 'Polster' gegen die Verletzlichkeit des Lebens. Dethlefsen beschreibt den Übergewichtigen als jemanden, der versucht, eine innere Leere mit Äußerem zu füllen. Das Gewicht ist ein Anker, der am Boden hält – manchmal aus Angst vor der eigenen Größe."
    },
    traditionen: {
      volksmedizin: "Apfelessig-Kuren, Brennnesselkuren im Frühling und bittere Kräuter (Enzian, Löwenzahn) zur Stoffwechselanregung. Heublumenbäder und Schwitzen in der Sauna. Schwedenbitter vor den Mahlzeiten.",
      tcm: "Übergewicht ist Milz-Qi-Schwäche mit Feuchtigkeit und Schleim-Ansammlung. Die Milz kann Nahrung nicht transformieren. Akupunktur am Ohr (Hungerpunkte), Magen 36 und Milz 6. Ingwertee, Rettich und bittere Kräuter stärken die Milz.",
      ayurveda: "Übergewicht ist eine Kapha-Störung. Triphala, Guggulu und scharfe Gewürze (Pfeffer, Ingwer) reduzieren Kapha. Warmes Wasser morgens, kein Mittagsschlaf, Bewegung. Leichte Abendmahlzeiten vor 18 Uhr.",
      germanisch: "Hamer sieht Wassereinlagerungen und Fettspeicherung als Überlebensprogramm – der Körper hortet für Notzeiten (Existenzangst/Flüchtlingskonflikt). Auch Selbstwert-Konflikte ('Ich bin nicht schön genug') können beteiligt sein.",
      alchemie: "Übergewicht zeigt ein Übermaß an Sal (Materie/Erde) bei zu wenig Sulfur (Feuer/Lebenskraft). Die alchemistische Lösung: das innere Feuer entfachen. Spagyrische Mars-Essenzen (Eisen) und Brennnessel-Destillat aktivieren die Lebenskraft."
    },
    kraeuter: [
      { name: 'Grüner Tee', wirkung: 'EGCG steigert die Fettverbrennung und den Stoffwechsel. 3-4 Tassen täglich.' },
      { name: 'Brennnessel', wirkung: 'Stoffwechselanregend, entwässernd und mineralstoffreich. Als Tee oder in Smoothies.' },
      { name: 'Ingwer', wirkung: 'Thermogen, regt den Stoffwechsel an und unterstützt die Verdauung. Frisch gerieben in heißem Wasser.' },
      { name: 'Zimt', wirkung: 'Verbessert die Insulinsensitivität und reguliert den Blutzucker. 1-2g Ceylon-Zimt täglich.' },
      { name: 'Löwenzahn', wirkung: 'Bitterstoff, fördert Galle, Leber und Verdauung. Als Tee, Salat oder Frischsaft.' }
    ],
    stoffe: [
      { name: 'Chrom', wirkung: 'Verbessert die Insulinsensitivität und reduziert Heißhunger. 200-400µg Chrompicolinat täglich.' },
      { name: 'Alpha-Liponsäure', wirkung: 'Verbessert den Zuckerstoffwechsel und wirkt antioxidativ. 300-600mg täglich.' },
      { name: 'L-Carnitin', wirkung: 'Transportiert Fettsäuren in die Mitochondrien zur Verbrennung. 1-3g täglich, morgens.' },
      { name: 'Jod', wirkung: 'Unterstützt die Schilddrüsenfunktion und den Grundumsatz. Über Algen, Meeresfrüchte oder Supplement.' }
    ],
    ernaehrung: {
      empfehlung: "Low-Carb oder ketogene Ernährung kann die Insulinresistenz durchbrechen. Echte Lebensmittel statt Industrienahrung. Kein Snacking, klare Mahlzeitenstruktur.",
      staerkend: ["Gemüse aller Art", "Gesunde Fette (Kokosöl, Olivenöl, Avocado)", "Eier", "Fetter Fisch", "Nüsse", "Beeren", "Fermentiertes"],
      meiden: ["Zucker", "Weißmehl", "Softdrinks", "Fruchtsäfte", "Fertiggerichte", "Transfette", "Alkohol"],
      rezepte: [
        { name: 'Stoffwechsel-Booster', zutaten: '1 TL Apfelessig, 1 TL Zitronensaft, 1 Prise Cayenne, 300ml warmes Wasser', zubereitung: 'Alles mischen, morgens nüchtern trinken. Regt Stoffwechsel und Verdauung an.' },
        { name: 'Grüner Smoothie', zutaten: 'Spinat, Gurke, Sellerie, Apfel, Ingwer, Zitrone', zubereitung: 'Alles im Mixer pürieren. Als Frühstücksersatz oder Zwischenmahlzeit.' }
      ]
    },
    fasten: {
      text: "Fasten ist eines der wirksamsten Mittel bei Übergewicht. Intervallfasten senkt den Insulinspiegel und aktiviert die Fettverbrennung. Mehrtägiges Fasten setzt einen metabolischen Reset.",
      formen: ["Intervallfasten 16:8 oder 18:6", "OMAD (One Meal A Day)", "Mehrtägiges Wasserfasten (3-7 Tage)", "5:2-Fasten"],
      reinigung: ["Darmreinigung mit Flohsamenschalen", "Leberwickel", "Basenbäder", "Trockenbürsten"]
    },
    bewegung: {
      text: "Krafttraining erhöht den Grundumsatz langfristig. HIIT (Intervalltraining) verbrennt Fett effektiver als langes Joggen. Alltagsbewegung nicht unterschätzen.",
      praktiken: ["Krafttraining (2-3x/Woche)", "HIIT-Training", "Spazierengehen (10.000 Schritte)", "Schwimmen", "Tanzen"]
    },
    geist: {
      einheit: "Übergewicht ist oft der Versuch, eine innere Leere mit Äußerem zu füllen. Die wahre Nahrung, die fehlt, ist Liebe, Sinn und Verbindung. Wenn die Seele genährt ist, braucht der Körper weniger.",
      affirmationen: ["Ich nähre mich mit Liebe und Achtsamkeit.", "Ich bin leicht und frei.", "Mein Körper findet sein natürliches Gleichgewicht.", "Ich verdiene es, mich wohlzufühlen."],
      meditation: "Achtsames Essen: Jede Mahlzeit langsam und bewusst genießen. Vor dem Essen innehalten: Bin ich wirklich hungrig? Was brauche ich gerade wirklich? Dankbarkeit für die Nahrung spüren.",
      energie: "Solarplexus-Chakra (Manipura) stärken: Gelbes Feuer im Bauch visualisieren, das den Stoffwechsel anheizt. Bauchselbstmassage. Inneres Feuer (Agni) durch Kapalabhati-Atmung aktivieren."
    },
    produkte: [
      { name: 'Flohsamenschalen', desc: 'Quellen im Magen, sättigen langanhaltend und regulieren den Blutzucker.', tags: ['#sättigung', '#darm'] },
      { name: 'Zeolith', desc: 'Bindet Toxine, die im Fettgewebe gespeichert sind und beim Abnehmen freigesetzt werden.', tags: ['#entgiftung', '#stoffwechsel'] },
      { name: 'Kurkuma', desc: 'Curcumin reduziert Entzündungen im Fettgewebe und unterstützt die Leber.', tags: ['#entzündung', '#leber'] },
      { name: 'Spirulina', desc: 'Eiweißreich, nährstoffdicht, sättigend. Unterstützt den Stoffwechsel und liefert Mikronährstoffe.', tags: ['#nährstoffe', '#sättigung'] }
    ]
  },
  {
    id: 'demenz',
    name: 'Demenz / Alzheimer / Vergesslichkeit',
    tags: ['#gehirn', '#gedächtnis', '#alzheimer', '#demenz', '#neuronen'],
    koerper: "Demenz ist ein fortschreitender Verlust kognitiver Fähigkeiten – Gedächtnis, Orientierung, Sprache und Urteilsvermögen. Alzheimer ist die häufigste Form (60-70%) mit Ablagerung von Beta-Amyloid und Tau-Proteinen im Gehirn. Ursachen sind multifaktoriell: Insulinresistenz im Gehirn ('Diabetes Typ 3'), chronische Entzündungen, Schwermetallbelastung, Durchblutungsstörungen und oxidativer Stress.",
    psychosomatik: {
      zitat: "Ich vergesse, weil die Erinnerungen zu schmerzhaft sind.",
      text: "Louise Hay sieht Demenz als Weigerung, sich der Welt so zu stellen, wie sie ist – ein Rückzug in eine eigene Realität. Dahlke deutet es als den Wunsch, alles Belastende zu vergessen und in eine kindliche Unschuld zurückzukehren. Dethlefsen beschreibt den Demenzkranken als jemanden, der die Verantwortung für sein Leben abgeben will. Es kann auch ein weises Loslassen alter Strukturen sein."
    },
    traditionen: {
      volksmedizin: "Rosmarin galt als Gedächtniskraut – 'Rosmarin stärkt das Hirn'. Salbei-Tee, Ginkgo-Blätter und Walnüsse (die dem Gehirn ähneln – Signaturenlehre) wurden zur Hirnstärkung eingesetzt.",
      tcm: "Demenz ist eine Nieren-Essenz-Schwäche (Gehirn = Meer des Marks, genährt von der Niere) mit Blut-Stase und Schleim-Trübung. Akupunktur an Du Mai 20 (Scheitel), Niere 3 und Herz 7. Ginkgo, Goji und Rehmannia nähren die Essenz.",
      ayurveda: "Demenz ist Vata-Störung mit Ojas-Verlust. Brahmi (Bacopa monnieri) ist das wichtigste Gehirnrasayana. Shankhpushpi, Ashwagandha und Ghee nähren das Gehirn. Nasya mit Brahmi-Öl erreicht das Gehirn direkt.",
      germanisch: "Hamer sieht kognitive Veränderungen als Folge aktiver Konflikte im Großhirn. Chronische Revierkonflikte, Trennungskonflikte oder unlösbare Konflikte führen zu dauerhafter Aktivierung bestimmter Hirnareale und schließlich zu Gewebeabbau.",
      alchemie: "Das Gehirn steht unter Merkur (Quecksilber) – Kommunikation und Vernetzung. Spagyrisches Silber (Luna) und Quecksilber-Essenzen (in potenzierter Form) stärken die geistige Klarheit. Rosmarin-Destillat als 'Sonnenpflanze' erhellt den Geist."
    },
    kraeuter: [
      { name: 'Ginkgo biloba', wirkung: 'Verbessert die Hirndurchblutung und neuronale Vernetzung. 240mg Extrakt täglich, Wirkung nach 8-12 Wochen.' },
      { name: 'Brahmi (Bacopa monnieri)', wirkung: 'Ayurvedisches Gehirntonikum, verbessert Gedächtnis und Lernfähigkeit. 300-600mg Extrakt täglich.' },
      { name: 'Rosmarin', wirkung: 'Steigert die Durchblutung des Gehirns und die Konzentration. Als Tee, Gewürz oder ätherisches Öl zum Einatmen.' },
      { name: 'Kurkuma', wirkung: 'Curcumin überwindet die Blut-Hirn-Schranke und reduziert Amyloid-Ablagerungen. 3-5g mit Pfeffer täglich.' },
      { name: 'Löwenmähne (Hericium)', wirkung: 'Stimuliert die Produktion von Nervenwachstumsfaktor (NGF). 1-3g Extrakt täglich.' }
    ],
    stoffe: [
      { name: 'Omega-3 (DHA)', wirkung: 'DHA ist der wichtigste Baustein der Hirnzellmembranen. 2-3g hochwertiges Fischöl (>1g DHA) täglich.' },
      { name: 'Vitamin D3', wirkung: 'Niedrige D3-Spiegel korrelieren stark mit Demenz. 4000-5000 IE täglich.' },
      { name: 'B-Vitamine', wirkung: 'B12, B6 und Folsäure senken Homocystein, einen Risikofaktor für Alzheimer. Methylierte Formen.' },
      { name: 'Phosphatidylserin', wirkung: 'Baustein der Nervenzellmembranen, verbessert Gedächtnis und Konzentration. 100-300mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Ketogene oder mediterrane Ernährung schützt das Gehirn. Ketonkörper sind ein alternativer Treibstoff für Gehirnzellen, die insulinresistent geworden sind. MCT-Öl aus Kokos liefert schnelle Ketone.",
      staerkend: ["Fetter Fisch", "Walnüsse", "Blaubeeren", "Kokosöl/MCT-Öl", "Eier (Cholin)", "Avocado", "Kurkuma", "Rosmarin"],
      meiden: ["Zucker", "Transfette", "Aluminium (Kochgeschirr)", "Hoch verarbeitete Lebensmittel", "Übermäßiger Alkohol"],
      rezepte: [
        { name: 'Gehirn-Smoothie', zutaten: '1 EL MCT-Öl, Blaubeeren, 1 TL Brahmi, 1 TL Kakao, Kokosmilch', zubereitung: 'Alles im Mixer pürieren. Als Frühstück für geistige Klarheit.' },
        { name: 'Rosmarin-Gedächtnis-Tee', zutaten: 'Frischer Rosmarin, Salbei, Honig', zubereitung: 'Je 1 TL Rosmarin und Salbei mit 250ml heißem Wasser aufgießen, 10 Min. ziehen. 2x täglich.' }
      ]
    },
    fasten: {
      text: "Intervallfasten und ketogenes Fasten fördern die Autophagie im Gehirn – der Abbau von Amyloid-Plaques. Ketonkörper durch Fasten sind 'Superfood' für alternde Gehirnzellen.",
      formen: ["Intervallfasten 16:8 oder 18:6", "Ketogenes Fasten (nur Fett)", "Mehrtägiges Fasten (unter Begleitung)"],
      reinigung: ["Schwermetallausleitung (Chlorella, Koriander, Zeolith)", "Nasenspülung", "Tiefes Atmen für Hirnversorgung"]
    },
    bewegung: {
      text: "Bewegung ist einer der stärksten Schutzfaktoren gegen Demenz. Sie fördert BDNF (Brain-Derived Neurotrophic Factor), der neue Nervenzellen wachsen lässt. Tanzen kombiniert Bewegung, Musik und soziale Interaktion.",
      praktiken: ["Tanzen (besonders wirksam)", "Spazierengehen (30 Min. täglich)", "Koordinationsübungen", "Tai Chi", "Kopfrechnen beim Gehen"]
    },
    geist: {
      einheit: "Das Vergessen kann auch ein weiser Prozess sein – das Loslassen dessen, was nicht mehr gebraucht wird. Gleichzeitig ist geistige Lebendigkeit ein Geschenk, das gepflegt werden will. Neugier, Lernfreude und soziale Verbindung halten den Geist wach.",
      affirmationen: ["Mein Geist ist klar und wach.", "Ich bin neugierig und lernfreudig.", "Mein Gehirn erneuert sich jeden Tag.", "Ich erinnere mich an alles, was wichtig ist."],
      meditation: "Neugier-Meditation: Jeden Tag etwas Neues entdecken – einen neuen Weg gehen, ein neues Wort lernen, eine neue Perspektive einnehmen. Achtsamkeitsmeditation hält den Geist im Hier und Jetzt.",
      energie: "Stirnchakra (Ajna) aktivieren: Violettes Licht zwischen den Augenbrauen visualisieren. 'Trommeln des himmlischen Donners' – Ohren zuhalten und mit den Fingern auf den Hinterkopf klopfen. Kopfmassage."
    },
    produkte: [
      { name: 'Hericium', desc: 'Löwenmähne-Pilz fördert Nervenwachstumsfaktor (NGF) und Neuroregeneration.', tags: ['#gehirn', '#nerven'] },
      { name: 'Kurkuma', desc: 'Curcumin kann Amyloid-Ablagerungen im Gehirn reduzieren.', tags: ['#gehirn', '#entzündung'] },
      { name: 'Chlorella', desc: 'Bindet Schwermetalle, die bei Demenz eine Rolle spielen können (Aluminium, Quecksilber).', tags: ['#entgiftung', '#schwermetall'] },
      { name: 'CBD-Öl', desc: 'Neuroprotektiv und entzündungshemmend. Kann Unruhe und Schlafstörungen bei Demenz lindern.', tags: ['#nerven', '#schlaf'] }
    ]
  },
  {
    id: 'fibromyalgie',
    name: 'Fibromyalgie / Chronischer Schmerz',
    tags: ['#schmerz', '#fibromyalgie', '#muskel', '#nerven', '#faszien'],
    koerper: "Fibromyalgie ist ein chronisches Schmerzsyndrom mit weit verbreiteten Muskel- und Gelenkschmerzen an typischen Druckpunkten (Tender Points). Begleitet wird es von Erschöpfung, Schlafstörungen, Konzentrationsproblemen ('Fibro-Fog'), Reizdarm und Überempfindlichkeit gegen Reize. Die zentrale Schmerzverarbeitung im Gehirn ist gestört – die Schmerzschwelle ist herabgesetzt.",
    psychosomatik: {
      zitat: "Mein ganzer Körper schreit vor Schmerz, weil die Seele nicht schreien darf.",
      text: "Louise Hay sieht Fibromyalgie als Ausdruck von Rigidität, Angst und Anspannung – der Körper ist in einer Daueranspannung gefangen. Dahlke deutet den Ganzkörperschmerz als Ruf der Seele nach Aufmerksamkeit, die nie dem eigenen Körper galt. Dethlefsen beschreibt chronischen Schmerz als eingefroren Aggression – Wut, die sich gegen den eigenen Körper richtet, weil sie keinen anderen Ausdruck findet."
    },
    traditionen: {
      volksmedizin: "Weidenrinden-Tee als natürliches Aspirin, Arnika-Einreibungen, Fichtennadel-Bäder und Heublumenbäder zur Muskelentspannung. Schröpfen und Blutegel bei chronischen Schmerzen.",
      tcm: "Fibromyalgie ist eine Bi-Störung (Blockade) – Wind, Kälte und Feuchtigkeit blockieren die Leitbahnen. Leber-Qi-Stagnation und Blut-Stase spielen eine zentrale Rolle. Akupunktur an mehreren Schmerzpunkten, Leber 3 und Milz 10.",
      ayurveda: "Fibromyalgie ist Vata-Aggravation mit Ama (Toxinen) in den Muskeln und Gelenken. Panchakarma-Kuren mit Abhyanga (Ölmassage), Svedana (Dampf) und Basti (Einlauf). Ashwagandha, Guggulu und Ingwer.",
      germanisch: "Hamer sieht chronische Muskelschmerzen als Selbstwert-Konflikt in der hängenden Heilung – ein Konflikt, der immer wieder aktiviert wird (Rezidive). Die Schmerzpunkte korrelieren mit spezifischen Selbstwert-Themen der jeweiligen Körperregion.",
      alchemie: "Chronischer Schmerz zeigt eine Stagnation des Sulfur-Prinzips (Lebensfeuer) – die Energie fließt nicht. Spagyrische Arnika-Essenz und Johanniskraut-Destillat lösen die Erstarrung. Der alchemistische Weg: durch das Feuer des Schmerzes zur Transformation."
    },
    kraeuter: [
      { name: 'Weidenrinde', wirkung: 'Natürliches Salicin gegen Schmerzen und Entzündungen. 240mg Salicin-Extrakt täglich.' },
      { name: 'Teufelskralle', wirkung: 'Afrikanisches Schmerzpflanze, entzündungshemmend. 2-4g Wurzelextrakt täglich.' },
      { name: 'Johanniskraut', wirkung: 'Nervenstärkend und stimmungsaufhellend, hilft bei der Schmerzverarbeitung. 900mg Extrakt täglich.' },
      { name: 'Weihrauch (Boswellia)', wirkung: 'Hemmt Entzündungsenzyme und lindert chronische Schmerzen. 1200mg Extrakt täglich.' },
      { name: 'Cannabis/CBD', wirkung: 'Wirkt auf das Endocannabinoid-System, das bei Fibromyalgie gestört ist. CBD-Öl nach Bedarf dosieren.' }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Muskelentspannend, reduziert Krämpfe und verbessert Schlaf. 400-800mg täglich (Malat-Form bevorzugt).' },
      { name: 'Vitamin D3', wirkung: 'Niedrige D3-Spiegel sind bei Fibromyalgie extrem häufig. 4000-5000 IE täglich.' },
      { name: 'MSM', wirkung: 'Organischer Schwefel wirkt entzündungshemmend und schmerzlindernd. 3-6g täglich.' },
      { name: '5-HTP', wirkung: 'Serotonin-Vorstufe, verbessert Schlaf und Schmerzverarbeitung. 100-300mg abends.' }
    ],
    ernaehrung: {
      empfehlung: "Anti-entzündliche Ernährung ist essenziell. Glutenfrei und zuckerfrei essen, da beides Entzündungen fördert. Viele Fibromyalgie-Patienten profitieren von einer Eliminationsdiät.",
      staerkend: ["Fetter Fisch (Omega-3)", "Kurkuma", "Ingwer", "Beeren", "Grünes Blattgemüse", "Knochenbrühe", "Walnüsse"],
      meiden: ["Zucker", "Gluten", "Milchprodukte (bei Unverträglichkeit)", "Alkohol", "Koffein", "Nachtschattengewächse (bei Empfindlichkeit)", "Aspartam", "Glutamat"],
      rezepte: [
        { name: 'Anti-Schmerz-Paste', zutaten: '2 TL Kurkuma, 1 TL Ingwerpulver, 1 TL Kokosöl, Prise Pfeffer, Honig', zubereitung: 'Zu einer Paste verrühren, 2x täglich einen Teelöffel einnehmen oder in warmes Wasser rühren.' }
      ]
    },
    fasten: {
      text: "Fasten kann die zentrale Schmerzverarbeitung positiv beeinflussen. Entzündungsfasten (Elimination von Triggern) und Intervallfasten können Schmerzschübe reduzieren.",
      formen: ["Intervallfasten 16:8", "Entzündungs-Eliminationsdiät (30 Tage)", "Basenfasten"],
      reinigung: ["Basenbäder mit Natron und Epsomit", "Infrarot-Sauna", "Trockenbürsten", "Leberwickel"]
    },
    bewegung: {
      text: "Sanfte Bewegung ist essenziell – trotz Schmerzen! Bewegungsmangel verschlimmert die Symptome. Faszientraining löst verklebte Bindegewebe. Warmwasser-Therapie ist besonders wirksam.",
      praktiken: ["Warmwasser-Gymnastik", "Yin Yoga", "Faszientraining", "Tai Chi", "Sanftes Schwimmen", "Spaziergänge"]
    },
    geist: {
      einheit: "Fibromyalgie ist ein Ruf des Körpers nach liebevoller Zuwendung. Der Schmerz zeigt, wo Aufmerksamkeit fehlt. Wenn der ganze Körper wehtut, braucht der ganze Mensch Heilung – Körper, Seele und Geist gemeinsam.",
      affirmationen: ["Ich bin mehr als mein Schmerz.", "Mein Körper verdient Liebe und Sanftheit.", "Ich lasse die Anspannung los, Schicht für Schicht.", "Ich bin in Sicherheit und kann mich entspannen."],
      meditation: "Schmerzmeditation: Den Schmerz nicht bekämpfen, sondern beobachten. Dem Schmerz eine Farbe und Form geben. Warmes, goldenes Licht in die schmerzenden Bereiche atmen. Liebevolle Güte (Metta) an den eigenen Körper senden.",
      energie: "Ganzkörper-Energiearbeit: Reiki-Selbstbehandlung, Hände auf jede schmerzende Stelle legen und Wärme fließen lassen. Faszien-Klopfmassage. Meridiane an Armen und Beinen mit Akupressur stimulieren."
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Wirkt auf das Endocannabinoid-System und kann bei Fibromyalgie die Schmerzschwelle anheben.', tags: ['#schmerz', '#nerven'] },
      { name: 'MSM', desc: 'Organischer Schwefel lindert Muskelschmerzen und Entzündungen.', tags: ['#schmerz', '#entzündung'] },
      { name: 'DMSO', desc: 'Äußerlich angewendet dringt DMSO tief ins Gewebe ein und wirkt schmerzlindernd.', tags: ['#schmerz', '#äußerlich'] },
      { name: 'Magnesium-Öl', desc: 'Transdermales Magnesium direkt auf schmerzende Stellen auftragen.', tags: ['#muskel', '#schmerz'] }
    ]
  },
  {
    id: 'augen',
    name: 'Augenprobleme / Sehschwäche',
    tags: ['#augen', '#sehen', '#leber', '#netzhaut', '#brille'],
    koerper: "Augenprobleme umfassen Kurzsichtigkeit (Myopie), Weitsichtigkeit (Hyperopie), Alterssichtigkeit (Presbyopie), trockene Augen, Grauer Star (Katarakt), Grüner Star (Glaukom) und Makuladegeneration. Die Augen sind eng mit der Leber verbunden und reagieren empfindlich auf Bildschirmarbeit, oxidativen Stress, Durchblutungsstörungen und Nährstoffmangel.",
    psychosomatik: {
      zitat: "Ich will etwas nicht sehen – oder ich schaue nicht richtig hin.",
      text: "Louise Hay sieht Kurzsichtigkeit als Angst vor der Zukunft und Weitsichtigkeit als Angst vor der Gegenwart. Dahlke deutet Augenprobleme als selektives Sehen – wir sehen nur, was wir sehen wollen. Dethlefsen beschreibt die Brille als 'Krücke' und fragt: Was genau willst du nicht so genau sehen? Grauer Star ist das Trübwerden des Blicks auf die Welt."
    },
    traditionen: {
      volksmedizin: "Augentrost (Euphrasia) war DAS Augenkraut – als Tee zum Trinken und als Augenspülung. Ringelblumen-Kompressen, Fencheltee-Augenwaschung und Honigwasser als Augentropfen waren bewährte Hausmittel.",
      tcm: "Die Augen sind das Sinnesorgan der Leber. Leber-Blut-Mangel zeigt sich in trockenen, müden Augen. Aufsteigendes Leber-Yang verursacht Glaukom. Akupunktur um die Augen (Gallenblase 1, Blase 1) und an Leber 3. Goji-Beeren nähren die Augen.",
      ayurveda: "Augen sind ein Pitta-Organ (Sehkraft = Alochaka Pitta). Triphala ist das wichtigste Augentonikum – als Tee und als Augenwaschung. Ghee nährt die Augen. Netra Tarpana (Ghee-Augenbad) ist eine Königsdisziplin.",
      germanisch: "Hamer ordnet der Sehkraft verschiedene Konflikte zu: Netzhaut – Angstkonflikt ('Gefahr im Nacken'), Glaskörper – visueller Verlustkonflikt, Linse – Trennungskonflikt im visuellen Bereich.",
      alchemie: "Die Augen stehen unter der Sonne (Sol/Gold) – dem Prinzip des Lichts und der Erkenntnis. Spagyrische Gold-Essenzen und Augentrost-Destillat stärken die Sehkraft. Die alchemistische Sicht: Klar sehen ist klar erkennen."
    },
    kraeuter: [
      { name: 'Augentrost (Euphrasia)', wirkung: 'Klassisches Augenheilkraut, entzündungshemmend und stärkend. Als Tee und als Augenspülung.' },
      { name: 'Goji-Beeren', wirkung: 'Schützen die Netzhaut (Zeaxanthin) und nähren das Leber-Blut. 20-30g täglich knabbern oder im Müsli.' },
      { name: 'Heidelbeere', wirkung: 'Anthocyane stärken die Netzhautgefäße und verbessern das Nachtsehen. Als Frucht oder Extrakt.' },
      { name: 'Fenchel', wirkung: 'Traditionelles Augenmittel, stärkt die Sehkraft. Als Tee oder Fenchelwasser zur Augenspülung.' },
      { name: 'Ginkgo', wirkung: 'Verbessert die Durchblutung der Netzhaut und des Sehnervs. 240mg Extrakt täglich.' }
    ],
    stoffe: [
      { name: 'Lutein & Zeaxanthin', wirkung: 'Schützen die Makula vor Lichtschäden und freien Radikalen. 10-20mg Lutein + 2-4mg Zeaxanthin täglich.' },
      { name: 'Vitamin A', wirkung: 'Essenziell für die Netzhaut und die Dunkeladaptation. Als Beta-Carotin aus Karotten oder als Retinol.' },
      { name: 'Astaxanthin', wirkung: 'Stärkstes natürliches Antioxidans, überwindet die Blut-Retina-Schranke. 4-12mg täglich.' },
      { name: 'Omega-3 (DHA)', wirkung: 'DHA ist ein Hauptbestandteil der Netzhaut. 1-2g DHA täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Bunte, antioxidantienreiche Ernährung schützt die Augen. Orange, grüne und violette Lebensmittel liefern Carotinoide. Die Leber unterstützen, da sie die Augen mitversorgt.",
      staerkend: ["Karotten", "Goji-Beeren", "Heidelbeeren", "Spinat", "Grünkohl", "Eigelb", "Süßkartoffel", "Lachs"],
      meiden: ["Zucker (schädigt die Retina-Gefäße)", "Transfette", "Übermäßiger Alkohol", "Übermäßige Bildschirmzeit"],
      rezepte: [
        { name: 'Augen-Saft', zutaten: '3 Karotten, 1 Handvoll Heidelbeeren, 1 Stange Sellerie, etwas Ingwer', zubereitung: 'Alles entsaften und frisch trinken. Täglich für 4-6 Wochen als Kur.' },
        { name: 'Goji-Chrysanthemen-Tee', zutaten: '1 EL Goji-Beeren, 5 Chrysanthemenblüten, 300ml heißes Wasser', zubereitung: 'Aufgießen, 10 Min. ziehen, Goji-Beeren mitessen. Klassischer TCM-Augentee.' }
      ]
    },
    fasten: {
      text: "Kurzes Fasten kann die Augendurchblutung verbessern. Leberfasten unterstützt die Augen indirekt, da die Leber die Sehkraft nährt (TCM). Bildschirmfasten ist die wichtigste Maßnahme.",
      formen: ["Bildschirm-Fasten (1 Tag/Woche)", "Intervallfasten 16:8", "Leberfasten", "Augenfasten (Dunkelretreat)"],
      reinigung: ["Augenwaschung mit Euphrasia-Tee", "Leberwickel", "Nasenspülung (reinigt auch die Augen)"]
    },
    bewegung: {
      text: "Augenübungen nach Bates können die Sehkraft verbessern. Regelmäßiges Blinzeln, Fernblick-Training und Palming entlasten überanstrengte Augen.",
      praktiken: ["Bates-Methode (Augenübungen)", "Palming (Augen abdecken, entspannen)", "Fernblick-Nahblick-Wechsel", "Augengymnastik (Kreise, Achten)", "Spazierengehen in der Natur (Grünsehen)"]
    },
    geist: {
      einheit: "Die Augen sind das Tor zur Seele – und zur Welt. Sehen ist mehr als eine physische Funktion: Es ist Wahrnehmung, Erkenntnis, Verstehen. Wenn die Augen schwächer werden, fragen sie: Schaust du genau hin? Siehst du die Schönheit? Erkennst du die Wahrheit?",
      affirmationen: ["Ich sehe klar und wahr.", "Meine Augen sind gesund und stark.", "Ich schaue dem Leben mit Vertrauen entgegen.", "Ich sehe die Schönheit in allem."],
      meditation: "Trataka (Kerzenflammen-Meditation): Eine Kerze in Augenhöhe aufstellen, die Flamme fixieren, ohne zu blinzeln. Wenn die Augen tränen, schließen und das Nachbild beobachten. Stärkt die Konzentration und die Augenmuskeln.",
      energie: "Augen-Qi-Gong: Mit den Augen langsam Kreise ziehen, dann ruhen lassen. Warme Handflächen auf die geschlossenen Augen legen (Palming) und Dunkelheit genießen. Lebermeridian stimulieren."
    },
    produkte: [
      { name: 'OPC', desc: 'Oligomere Proanthocyanidine stärken die feinen Blutgefäße der Netzhaut.', tags: ['#augen', '#gefäße'] },
      { name: 'Vitamin D3+K2', desc: 'Schützt vor Makuladegeneration und stärkt das Immunsystem der Augen.', tags: ['#augen', '#immunsystem'] },
      { name: 'Mariendistel', desc: 'Stärkt die Leber und damit indirekt die Augen (Leber-Augen-Achse in der TCM).', tags: ['#leber', '#augen'] },
      { name: 'Spirulina', desc: 'Reich an Beta-Carotin und Zeaxanthin – natürlicher Augenschutz.', tags: ['#antioxidans', '#augen'] }
    ]
  },
  {
    id: 'zaehne',
    name: 'Zähne / Mundraum / Zahnfleisch',
    tags: ['#zähne', '#zahnfleisch', '#mundraum', '#karies', '#parodontose'],
    koerper: "Zahnprobleme umfassen Karies (Zahnfäule), Parodontitis (Zahnfleischentzündung mit Knochenabbau), Zahnfleischbluten, Wurzelentzündungen, Kiefergelenkprobleme und empfindliche Zähne. Der Mundraum ist ein Spiegel der Gesamtgesundheit – chronische Entzündungen im Mund belasten den ganzen Körper (Herz-Kreislauf, Gelenke). Tote Zähne und Amalgam-Füllungen können den Organismus belasten.",
    psychosomatik: {
      zitat: "Ich kann nicht zubeißen – oder ich beiße zu hart.",
      text: "Louise Hay sieht Zahnprobleme als Unentschlossenheit und Schwierigkeiten, Entscheidungen zu treffen ('zubeißen'). Dahlke deutet Karies als Aggression, die den eigenen Biss zerstört. Dethlefsen verbindet Zahnprobleme mit unterdrückter Vitalität und der Unfähigkeit, sich durchzusetzen. Jeder Zahn steht über Meridiane in Verbindung mit Organen – ein kranker Zahn kann ein Fernproblem anzeigen."
    },
    traditionen: {
      volksmedizin: "Nelkenöl war DAS Zahnschmerzmittel. Salbei-Mundspülungen bei Zahnfleischentzündung, Myrrhe-Tinktur zum Pinseln, Eichenrinden-Absud zum Spülen. Ölziehen mit Sesamöl war in vielen Kulturen bekannt.",
      tcm: "Die Zähne gehören zum Nieren-System (Knochen). Zahnfleisch zum Magen. Zahnfleischbluten zeigt Magen-Feuer, lockere Zähne zeigen Nieren-Schwäche. Akupunktur an Dickdarm 4 (Zahnschmerzen), Magen 6 und Niere 3.",
      ayurveda: "Zähne sind Asthi Dhatu (Knochengewebe). Ölziehen (Gandusha) mit Sesamöl ist die ayurvedische Grundroutine für die Mundgesundheit. Triphala-Mundspülung, Nelke und Kurkuma-Paste auf das Zahnfleisch.",
      germanisch: "Hamer ordnet Zahnbein (Dentin) einem Selbstwert-Konflikt zu ('Ich darf/kann nicht zubeißen'). Zahnschmelz gehört zum Trennungskonflikt. Die Position des betroffenen Zahns (links/rechts, oben/unten) gibt Hinweis auf den Konfliktinhalt.",
      alchemie: "Zähne stehen unter Saturn (Blei) – Struktur, Härte und Dauerhaftigkeit. Spagyrische Saturn-Essenzen stärken das Knochengewebe. Myrrhe-Destillat reinigt und heilt den Mundraum. Kalzit (Calcarea carbonica) als alchemistisches Mittel."
    },
    kraeuter: [
      { name: 'Nelke', wirkung: 'Eugenol betäubt Zahnschmerzen und wirkt antibakteriell. Nelkenöl direkt auf den schmerzenden Zahn.' },
      { name: 'Salbei', wirkung: 'Antibakteriell und entzündungshemmend für das Zahnfleisch. Als Mundspülung (starken Tee aufbrühen) oder frische Blätter kauen.' },
      { name: 'Myrrhe', wirkung: 'Adstringierend und wundheilend bei Zahnfleischentzündung. Als Tinktur auf das Zahnfleisch pinseln.' },
      { name: 'Kamille', wirkung: 'Entzündungshemmend und schmerzlindernd. Als Mundspülung bei Zahnfleischproblemen.' },
      { name: 'Blutwurz', wirkung: 'Stark adstringierend, festigt lockeres Zahnfleisch. Als Tinktur zum Spülen.' }
    ],
    stoffe: [
      { name: 'Vitamin D3+K2', wirkung: 'D3 für die Kalziumaufnahme, K2 für den Einbau in Zähne und Knochen. 4000-5000 IE D3 + 200µg K2.' },
      { name: 'Kalzium + Phosphor', wirkung: 'Bausteine des Zahnschmelzes. Über naturbelassene Ernährung (Sesam, Mandeln, Knochenbrühe).' },
      { name: 'Coenzym Q10', wirkung: 'Stärkt das Zahnfleisch und kann Parodontitis verbessern. 100-200mg täglich.' },
      { name: 'Vitamin C', wirkung: 'Kollagenbildung für gesundes Zahnfleisch. Mangel führt zu Zahnfleischbluten. 1-2g täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Nach Weston A. Price ist die traditionelle, nährstoffreiche Ernährung der Schlüssel zu gesunden Zähnen. Fettlösliche Vitamine (A, D, K2) und Mineralien remineralisieren die Zähne. Zucker und Phytinsäure meiden.",
      staerkend: ["Rohmilch-Butter (K2)", "Lebertran (A+D)", "Knochenbrühe", "Fermentiertes Gemüse", "Sesam", "Grünes Blattgemüse", "Eier"],
      meiden: ["Zucker (Hauptursache von Karies)", "Fruchtsäfte (Säure!)", "Getreide mit hohem Phytinsäuregehalt", "Softdrinks", "Saure Lebensmittel direkt vor dem Zähneputzen"],
      rezepte: [
        { name: 'Remineralisierende Mundspülung', zutaten: '250ml warmes Wasser, 1/2 TL Natron, 2 Tropfen Nelkenöl, 2 Tropfen Teebaumöl', zubereitung: 'Alles mischen, nach dem Zähneputzen 30 Sekunden spülen, ausspucken.' },
        { name: 'Kurkuma-Zahnfleisch-Paste', zutaten: '1 TL Kurkuma, 1/2 TL Kokosöl, Prise Salz', zubereitung: 'Zu einer Paste mischen, auf entzündetes Zahnfleisch auftragen, 5 Min. einwirken lassen, ausspülen.' }
      ]
    },
    fasten: {
      text: "Fasten gibt dem Körper die Möglichkeit, Zähne zu remineralisieren, wenn keine Säuren und Zucker zugeführt werden. Ölziehen morgens auf nüchternen Magen ist eine essenzielle Mundreinigung.",
      formen: ["Zuckerfasten (dauerhaft reduzieren)", "Intervallfasten 16:8", "Ölziehen-Kur (21 Tage)"],
      reinigung: ["Ölziehen mit Kokosöl oder Sesamöl (20 Min. morgens)", "Zungenreinigung", "Mundspülung mit Salzwasser oder Salbeitee"]
    },
    bewegung: {
      text: "Kieferentspannung ist bei Bruxismus (Zähneknirschen) essenziell. Viele Zahnprobleme hängen mit Kieferverspannungen zusammen.",
      praktiken: ["Kiefermassage", "Kieferentspannungsübungen", "Gähnen und Strecken", "Yoga (Löwenatem – Simhasana)", "Progressive Muskelentspannung (Kieferbereich)"]
    },
    geist: {
      einheit: "Zähne stehen für Entschlusskraft und Durchsetzungsvermögen. Gesunde Zähne zeigen einen Menschen, der zubeißen kann – im übertragenen Sinn: der sich für sein Leben einsetzt. Zahnprobleme laden ein, die eigene Kraft wieder zu beanspruchen.",
      affirmationen: ["Ich beiße zu, wenn es nötig ist.", "Meine Zähne sind stark und gesund.", "Ich treffe klare Entscheidungen.", "Ich sorge liebevoll für meinen Körper."],
      meditation: "Kieferentspannung: Im Sitzen den Kiefer bewusst lösen, die Zungenspitze hinter die oberen Schneidezähne legen. Lippen leicht geöffnet. Spüren, wie die gesamte Kiefermuskulatur sich entspannt. Dann das Lächeln visualisieren – den 'inneren' Mund weich werden lassen.",
      energie: "Kiefergelenk-Akupressur: Sanft kreisend die Kiefergelenke massieren. Dickdarm 4 (zwischen Daumen und Zeigefinger) gegen Zahnschmerzen drücken. Halschakra (Vishuddha) stärken für authentischen Ausdruck."
    },
    produkte: [
      { name: 'Propolis', desc: 'Natürliches Antibiotikum der Bienen – als Mundspülung oder Tinktur bei Zahnfleischentzündung.', tags: ['#zahnfleisch', '#antibakteriell'] },
      { name: 'Natron', desc: 'Als sanftes Zahnpulver oder Mundspülung. Neutralisiert Säuren und hellt die Zähne auf.', tags: ['#zähne', '#basisch'] },
      { name: 'Kolloidales Silber', desc: 'Antibakteriell als Mundspülung bei Zahnfleischentzündung und nach Zahnbehandlungen.', tags: ['#antibakteriell', '#mundraum'] },
      { name: 'DMSO', desc: 'Äußerlich bei Zahnfleischentzündung – dringt tief ins Gewebe und wirkt entzündungshemmend.', tags: ['#entzündung', '#zahnfleisch'] }
    ]
  }
];
