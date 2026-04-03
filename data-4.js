const CONDITIONS_4 = [
  {
    id: 'erschoepfung',
    name: 'Chronische Müdigkeit / CFS / Energiemangel',
    tags: ['#müdigkeit', '#cfs', '#erschöpfung', '#energie', '#nebenniere', '#mitochondrien'],
    koerper: "Chronische Erschöpfung (CFS) äußert sich durch anhaltende, tiefgreifende Müdigkeit, die durch Schlaf nicht besser wird. Betroffene erleben Konzentrationsstörungen, Muskelschmerzen, Schlafstörungen und eine erhöhte Infektanfälligkeit. Ursächlich spielen mitochondriale Dysfunktion, Nebennierenschwäche, chronische Entzündungen, Virusbelastungen (z.B. EBV) und Nährstoffmängel eine zentrale Rolle. Der Körper befindet sich in einem dauerhaften Erschöpfungszustand, bei dem die Energieproduktion auf Zellebene gestört ist.",
    psychosomatik: {
      zitat: "Ich bin es nicht wert, zu leben. Ich gebe meine Kraft an andere ab.",
      text: "Nach Louise Hay steht chronische Müdigkeit für einen tiefen inneren Widerstand gegen das Leben und die eigene Lebenskraft. Dahlke sieht darin das Bild eines Menschen, der seine Energie nicht für sich selbst nutzt, sondern ständig anderen zur Verfügung stellt. Dethlefsen beschreibt CFS als den Körper, der den Menschen zwingt, innezuhalten und sich der Frage zu stellen: Wofür lebe ich? Die Erschöpfung ist eine Einladung, die eigene Lebensrichtung zu überprüfen und wieder in die eigene Kraft zu kommen."
    },
    traditionen: {
      volksmedizin: "In der europäischen Volksmedizin wurde Erschöpfung mit stärkenden Kräutertonika behandelt. Hafer (Avena sativa) galt als das wichtigste Nervenstärkungsmittel. Rosmarin-Bäder belebten den Kreislauf, Brennnessel-Kuren im Frühling reinigten das Blut und gaben neue Kraft. Bienenhonig mit Pollen war ein bewährtes Kräftigungsmittel.",
      tcm: "In der TCM wird CFS als Qi-Mangel mit Milz-Schwäche und Nieren-Yang-Mangel betrachtet. Das Qi, die Lebensenergie, wird nicht ausreichend produziert oder verteilt. Akupunkturpunkte wie Magen 36 (Zusanli) und Niere 3 (Taixi) werden stimuliert. Ginseng, Astragalus und Reishi stärken das Qi. Moxibustion am Punkt Ren 6 (Qihai) wärmt das Lebenszentrum.",
      ayurveda: "Ayurveda ordnet chronische Müdigkeit einem Vata-Kapha-Ungleichgewicht zu. Ama (Stoffwechselschlacken) blockiert die Srotas (Körperkanäle) und verhindert den Energiefluss. Ashwagandha (Withania somnifera) ist das Hauptmittel zur Stärkung von Ojas (Lebensessenz). Panchakarma-Reinigungskuren entfernen Ama, danach stärken Rasayana-Mittel die Vitalität.",
      germanisch: "Nach der Germanischen Neuen Medizin (Hamer) steht Erschöpfung in Verbindung mit einem aktiven biologischen Konflikt der Selbstwerteinbruch-Konstellation. Der Körper fährt die Energie herunter, weil ein ungelöster Konflikt permanent Ressourcen bindet. Die Nebennieren reagieren auf Existenz- und Überforderungskonflikte. Konfliktlösung ist der Schlüssel zur Regeneration.",
      alchemie: "In der Spagyrik wird Erschöpfung als Mangel an Sulphur (Lebensfeuer) verstanden. Spagyrische Essenzen aus Rosmarin, Hafer und Ginseng werden eingesetzt, um das innere Feuer neu zu entfachen. Aurum metallicum (Gold) stärkt die Herzkraft und das Selbstbewusstsein. Die alchemistische Devise lautet: Erst reinigen (Sal), dann nähren (Sulphur), dann harmonisieren (Mercurius)."
    },
    kraeuter: [
      { name: 'Ashwagandha', wirkung: 'Adaptogen, stärkt Nebennieren, reguliert Cortisol, verbessert Schlafqualität. 300-600 mg standardisierter Extrakt täglich.' },
      { name: 'Rhodiola rosea', wirkung: 'Adaptogen, steigert mentale und körperliche Belastbarkeit, hebt Energielevel. 200-400 mg morgens.' },
      { name: 'Brennnessel', wirkung: 'Eisenreich, blutbildend, entgiftend. Als Tee 3x täglich oder als Frischsaft im Frühling.' },
      { name: 'Rosmarin', wirkung: 'Kreislaufanregend, durchblutungsfördernd, geistig belebend. Als Tee oder Badezusatz.' },
      { name: 'Ginseng', wirkung: 'Klassisches Tonikum, stärkt Qi und Lebenskraft. 200 mg standardisierter Extrakt morgens.' }
    ],
    stoffe: [
      { name: 'Coenzym Q10', wirkung: 'Essentiell für die mitochondriale Energieproduktion. 200-400 mg täglich, am besten mit Fett.' },
      { name: 'Magnesium', wirkung: 'Beteiligt an über 300 Enzymreaktionen der Energiegewinnung. 400 mg elementares Magnesium abends.' },
      { name: 'Vitamin B12', wirkung: 'Zentral für Energiestoffwechsel und Nervenfunktion. 1000 mcg Methylcobalamin sublingual täglich.' },
      { name: 'Eisen', wirkung: 'Sauerstofftransport und Energieproduktion. Nur bei nachgewiesenem Mangel supplementieren, 20-40 mg mit Vitamin C.' },
      { name: 'D-Ribose', wirkung: 'Zucker, der direkt in die ATP-Produktion einfließt. 5 g 2-3x täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Energiereiche, nährstoffdichte Ernährung mit Fokus auf B-Vitamine, Eisen und gesunde Fette. Regelmäßige Mahlzeiten stabilisieren den Blutzucker. Verarbeitete Lebensmittel, Zucker und Koffein meiden, da sie kurzfristig Energie geben, langfristig aber erschöpfen.",
      staerkend: ["Grünes Blattgemüse", "Knochenbrühe", "Leber und Innereien", "Eier aus Freilandhaltung", "Hirse", "Datteln", "Mandeln", "Süßkartoffeln", "Fermentiertes Gemüse", "Hanfsamen"],
      meiden: ["Weißer Zucker", "Koffein in großen Mengen", "Alkohol", "Weizenmehl", "Industrielle Fertiggerichte", "Energy-Drinks"],
      rezepte: [
        { name: 'Kraftbrühe mit Hirse', zutaten: '200g Hirse, 1L Knochenbrühe, 2 Karotten, 1 Stück Ingwer, Kurkuma, Brennnesselblätter', zubereitung: 'Hirse in Knochenbrühe mit geraspelten Karotten, Ingwer und Kurkuma 20 Minuten köcheln. Frische Brennnesselblätter zum Schluss unterheben. Täglich eine Schale als Aufbaukur.' },
        { name: 'Energie-Smoothie', zutaten: '1 Banane, 2 EL Hanfsamen, 1 TL Ashwagandha-Pulver, 1 EL Honig, 250ml Hafermilch, 1 TL Spirulina', zubereitung: 'Alles im Mixer zu einem cremigen Smoothie verarbeiten. Morgens auf nüchternen Magen trinken.' }
      ]
    },
    fasten: {
      text: "Bei chronischer Erschöpfung ist mit Fasten Vorsicht geboten. Harte Fastenformen können die Nebennieren weiter belasten. Sanftes Intervallfasten (16:8) kann die mitochondriale Funktion verbessern, wenn der Körper stabil genug ist. Vorher unbedingt Nährstoffspeicher auffüllen.",
      formen: ["16:8 Intervallfasten (sanft beginnen)", "Saftfasten mit grünen Säften (3-5 Tage)", "Brühe-Fasten zur Darmsanierung"],
      reinigung: ["Leberwickel nach Kneipp", "Ölziehen morgens", "Basenbäder mit Natron und Epsomit", "Sanfte Darmreinigung mit Flohsamenschalen"]
    },
    bewegung: {
      text: "Bei CFS ist Überanstrengung kontraproduktiv. Sanfte, regenerative Bewegung steht im Vordergrund. Die Belastung sollte langsam gesteigert werden, immer unterhalb der Erschöpfungsgrenze. Natur und frische Luft sind besonders heilsam.",
      praktiken: ["Qi Gong (besonders 8 Brokate)", "Sanftes Yoga (Yin Yoga)", "Spaziergänge in der Natur (Waldbaden)", "Atemübungen nach Wim Hof (sanft beginnen)", "Leichtes Schwimmen"]
    },
    geist: {
      einheit: "Erschöpfung fragt dich: Lebst du dein eigenes Leben oder das der anderen? Die Kraft kehrt zurück, wenn du dich mit deiner wahren Bestimmung verbindest. Jede Zelle deines Körpers will leben und leuchten. Erlaube dir, Energie zu empfangen statt nur zu geben.",
      affirmationen: ["Ich bin voller Lebenskraft und Energie.", "Meine Zellen erneuern sich in jedem Moment.", "Ich verdiene es, mein eigenes Leben mit Freude zu leben.", "Ich nehme mir die Ruhe, die ich brauche, ohne Schuld."],
      meditation: "Visualisiere goldenes Licht, das durch deinen Scheitel einfließt und jede Zelle deines Körpers mit Energie erfüllt. Spüre, wie dieses Licht besonders deine Nebennieren und dein Herz nährt. Atme Erschöpfung als grauen Rauch aus und atme Lebenskraft als goldenes Licht ein. 15 Minuten morgens und abends.",
      energie: "Reiki oder Handauflegen auf die Nebennieren (unterer Rücken). Chakra-Arbeit am Solarplexus (Manipura) zur Stärkung der persönlichen Kraft. Erdungsübungen, um kosmische Energie aufnehmen zu können. Meridian-Klopfen (EFT) bei emotionaler Erschöpfung."
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Unterstützt die Nebennieren-Regulation und verbessert die Schlafqualität. 2x täglich 3-5 Tropfen sublingual.', tags: ['#schlaf', '#nebenniere', '#regeneration'] },
      { name: 'Hericium', desc: 'Vitalpilz für Nervenregeneration und Energiestoffwechsel. Stärkt die Mitochondrienfunktion.', tags: ['#vitalpilz', '#nerven', '#energie'] },
      { name: 'Spirulina', desc: 'Nährstoffdichte Mikroalge mit B12, Eisen und Chlorophyll. Füllt Nährstoffspeicher auf.', tags: ['#mineralstoffe', '#blutbildung'] },
      { name: 'Vitamin D3+K2', desc: 'Essentiell für Energiestoffwechsel und Immunfunktion. Mangel ist eine häufige CFS-Ursache.', tags: ['#vitamin', '#immunsystem', '#energie'] },
      { name: 'Magnesium-Öl', desc: 'Transdermale Magnesiumaufnahme für Muskelentspannung und Energieproduktion.', tags: ['#magnesium', '#muskel', '#entspannung'] }
    ]
  },

  {
    id: 'entzuendung',
    name: 'Chronische Entzündungen (allgemein)',
    tags: ['#entzündung', '#inflammation', '#autoimmun', '#silent-inflammation', '#schmerz'],
    koerper: "Chronische Entzündungen (Silent Inflammation) sind niedriggradige, systemische Entzündungsprozesse, die oft unbemerkt den gesamten Organismus belasten. Sie gelten als Wurzel vieler Zivilisationskrankheiten wie Diabetes, Herzkrankheiten, Krebs und Autoimmunerkrankungen. Erhöhte Entzündungsmarker (CRP, IL-6, TNF-alpha) zeigen die Belastung. Ursachen sind Fehlernährung, Darmstörungen, Umweltgifte, chronischer Stress und Bewegungsmangel.",
    psychosomatik: {
      zitat: "Mein inneres Feuer richtet sich gegen mich selbst, weil ich nicht wage, es nach außen zu tragen.",
      text: "Louise Hay sieht Entzündungen als entzündeten, wütenden Gedanken, der den Körper erfasst. Dahlke beschreibt chronische Entzündung als einen Kampf, der nie zu Ende geführt wird, ein Konflikt, der im Körper schwelt statt im Leben gelöst zu werden. Dethlefsen betont, dass Entzündung immer ein Zeichen von Auseinandersetzung ist. Der Körper kämpft stellvertretend den Kampf, den die Seele meidet."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte zahlreiche entzündungshemmende Mittel. Weidenrinde (natürliches Aspirin) wurde bei Schmerzen und Fieber eingesetzt. Kamille und Ringelblume wurden innerlich und äußerlich verwendet. Kohlwickel zogen Entzündungen heraus. Quarkwickel kühlten entzündete Stellen.",
      tcm: "In der TCM werden chronische Entzündungen als Hitze-Toxine (Re Du) und Blut-Stase betrachtet. Feuchte Hitze (Shi Re) sammelt sich besonders in Milz und Leber. Akupunktur kühlt die Hitze und bewegt das Blut. Chinesische Kräuter wie Huang Qin (Baikal-Helmkraut) und Dan Shen (Rotwurzel-Salbei) werden eingesetzt.",
      ayurveda: "Ayurveda sieht chronische Entzündung als Pitta-Aggravation. Übermäßiges Pitta (Feuer) verbrennt die Gewebe. Kühlende Nahrungsmittel und Kräuter wie Kurkuma, Amalaki und Guduchi reduzieren Pitta. Virechana (therapeutisches Abführen) reinigt die Pitta-Toxine aus dem Körper.",
      germanisch: "Nach Hamer ist Entzündung die Heilungsphase nach Konfliktlösung. Der Körper repariert das Gewebe, das während der Konfliktaktivität verändert wurde. Chronische Entzündung deutet auf wiederkehrende Konfliktrezidive hin. Der biologische Sinn ist Geweberegeneration und Heilung.",
      alchemie: "Spagyrisch betrachtet ist chronische Entzündung ein Übermaß an Sulphur (Feuer-Prinzip) bei geschwächtem Sal (Formprinzip). Spagyrische Essenzen aus Weidenrinde, Kamille und Weihrauch harmonisieren die drei Prinzipien. Antimonit und Quarz werden als mineralische Heilmittel eingesetzt."
    },
    kraeuter: [
      { name: 'Kurkuma', wirkung: 'Curcumin hemmt NF-kB und COX-2. 500-1000 mg Curcumin mit Piperin täglich.' },
      { name: 'Weihrauch (Boswellia)', wirkung: 'Hemmt 5-Lipoxygenase, stark entzündungshemmend. 300-400 mg Boswelliasäuren 3x täglich.' },
      { name: 'Ingwer', wirkung: 'Hemmt Prostaglandin-Synthese, wärmt und bewegt. Frisch gerieben als Tee oder 500 mg Extrakt.' },
      { name: 'Brennnessel', wirkung: 'Antiinflammatorisch und entgiftend. Als Tee oder Urtinktur 3x täglich.' },
      { name: 'Artemisia (Beifuß)', wirkung: 'Traditionell bei Entzündungen und Infektionen. Artemisinin wirkt modulierend auf das Immunsystem.' }
    ],
    stoffe: [
      { name: 'Omega-3-Fettsäuren', wirkung: 'EPA und DHA hemmen entzündungsfördernde Prostaglandine. 2-4 g täglich als Fischöl oder Algenöl.' },
      { name: 'MSM', wirkung: 'Organischer Schwefel mit starker entzündungshemmender Wirkung. 2-4 g täglich.' },
      { name: 'OPC', wirkung: 'Traubenkernextrakt, starkes Antioxidans, schützt Gefäße. 200-400 mg täglich.' },
      { name: 'Zeolith', wirkung: 'Bindet Entzündungstoxine im Darm, entlastet das Immunsystem. 3 g in Wasser morgens nüchtern.' },
      { name: 'Natron', wirkung: 'Alkalisiert den Körper, puffert Entzündungssäuren. 1/2 TL in Wasser, 2x täglich zwischen den Mahlzeiten.' }
    ],
    ernaehrung: {
      empfehlung: "Entzündungshemmende Ernährung bedeutet: viel Gemüse, Omega-3-reiche Fette, Kräuter und Gewürze. Zucker, Weizen, industrielle Pflanzenöle und verarbeitete Lebensmittel sind die größten Entzündungstreiber und müssen konsequent gemieden werden.",
      staerkend: ["Wildlachs", "Walnüsse", "Leinsamen", "Kurkuma", "Ingwer", "Beeren (Blaubeeren, Brombeeren)", "Grünes Blattgemüse", "Olivenöl (kaltgepresst)", "Knoblauch", "Ananas (Bromelain)"],
      meiden: ["Zucker und Süßigkeiten", "Weizen und Gluten", "Sonnenblumenöl, Rapsöl", "Schweinefleisch", "Fertiggerichte", "Alkohol", "Milchprodukte (bei Unverträglichkeit)"],
      rezepte: [
        { name: 'Goldene Milch (Kurkuma-Latte)', zutaten: '250ml Hafermilch, 1 TL Kurkuma, 1/2 TL Zimt, Prise schwarzer Pfeffer, 1 TL Kokosöl, Honig', zubereitung: 'Hafermilch erwärmen, Kurkuma, Zimt, Pfeffer und Kokosöl einrühren. Mit Honig süßen. Abends trinken, wirkt entzündungshemmend und schlaffördernd.' },
        { name: 'Entzündungshemmendes Ingwer-Feuer', zutaten: '50g frischer Ingwer, 2 Zitronen, 1 TL Kurkuma, Cayennepfeffer, 500ml Wasser, Honig', zubereitung: 'Ingwer reiben, mit heißem Wasser übergießen, Zitronensaft, Kurkuma und eine Prise Cayenne zugeben. 10 Minuten ziehen lassen, abseihen, mit Honig trinken.' }
      ]
    },
    fasten: {
      text: "Fasten ist eines der wirksamsten Mittel gegen chronische Entzündungen. Schon 24 Stunden ohne Nahrung senken Entzündungsmarker messbar. Intervallfasten aktiviert die Autophagie, den zellulären Selbstreinigungsprozess. Längeres Fasten kann Autoimmunprozesse grundlegend umkehren.",
      formen: ["Intervallfasten 16:8 oder 18:6", "Buchinger-Heilfasten (7-14 Tage)", "Wasserfasten (3-5 Tage unter Aufsicht)", "FMD (Fasting Mimicking Diet nach Longo)"],
      reinigung: ["Leberreinigung nach Moritz", "Darmspülungen (Einläufe)", "Zeolith-Kur zur Toxinbindung", "Basenfasten als Einstieg"]
    },
    bewegung: {
      text: "Moderate Bewegung wirkt stark entzündungshemmend. Myokine, die bei Muskelbewegung freigesetzt werden, hemmen direkt Entzündungsprozesse. Übertraining dagegen fördert Entzündungen. Die Balance ist entscheidend.",
      praktiken: ["Moderate Ausdauerbewegung (Walken, Radfahren)", "Yoga (besonders entzündungshemmend)", "Schwimmen in natürlichen Gewässern", "Kneipp-Anwendungen (Warm-Kalt-Wechsel)", "Tai Chi"]
    },
    geist: {
      einheit: "Chronische Entzündung ist ein Krieg im Inneren, der um Frieden bittet. Wo in deinem Leben schwelt ein ungelöster Konflikt? Die Entzündung erlischt, wenn du den Mut findest, die Auseinandersetzung in deinem Leben zu führen, statt sie deinen Körper führen zu lassen.",
      affirmationen: ["Ich bin bereit, meinen inneren Frieden zu finden.", "Ich lasse los, was mich innerlich verbrennt.", "Mein Körper heilt in Harmonie und Ruhe.", "Ich löse meine Konflikte bewusst und liebevoll."],
      meditation: "Stelle dir kühlenden, blaugrünen Heilungsnebel vor, der durch deinen gesamten Körper fließt. Überall dort, wo Entzündung brennt, löscht dieser Nebel sanft das Feuer. Spüre, wie Ruhe und Kühle sich ausbreiten. Atme Hitze aus, atme Kühle ein. 20 Minuten täglich.",
      energie: "Kühlendes Prana durch das linke Nasenloch atmen (Chandra Bhedana Pranayama). Reiki auf entzündete Stellen legen. Blaues Licht visualisieren am Halschakra (Vishuddha) für Kommunikation ungelöster Konflikte."
    },
    produkte: [
      { name: 'Kurkuma', desc: 'Hochdosiertes Curcumin mit schwarzem Pfeffer für maximale Bioverfügbarkeit. Das goldene Gewürz gegen Entzündungen.', tags: ['#entzündung', '#curcumin', '#antioxidans'] },
      { name: 'Weihrauch', desc: 'Boswelliasäuren hemmen Entzündungskaskaden auf natürliche Weise. Traditionsreiches Heilmittel.', tags: ['#boswellia', '#entzündung', '#gelenke'] },
      { name: 'MSM', desc: 'Organischer Schwefel für Entgiftung und Entzündungshemmung. Unterstützt Bindegewebe und Gelenke.', tags: ['#schwefel', '#gelenke', '#entgiftung'] },
      { name: 'Schwarzkümmelöl', desc: 'Thymoquinon wirkt stark entzündungshemmend und immunmodulierend. 1 TL täglich.', tags: ['#immunsystem', '#entzündung', '#haut'] },
      { name: 'CBD-Öl', desc: 'Cannabidiol moduliert das Endocannabinoid-System und hemmt systemische Entzündungen.', tags: ['#entzündung', '#schmerz', '#immunsystem'] }
    ]
  },

  {
    id: 'parasiten',
    name: 'Parasiten / Würmer / Darmparasiten',
    tags: ['#parasiten', '#würmer', '#darm', '#reinigung', '#entgiftung', '#antiparasitär'],
    koerper: "Parasitäre Infektionen sind weitaus häufiger als angenommen. Würmer (Spulwürmer, Bandwürmer, Madenwürmer), Einzeller (Giardia, Blastocystis) und andere Parasiten besiedeln den Darm und manchmal andere Organe. Symptome sind vielfältig: Blähungen, Durchfall, Verstopfung, Gewichtsschwankungen, Heißhunger (besonders auf Süßes), Hautprobleme, Zähneknirschen, Müdigkeit, Anämie und Gelenkschmerzen. Die Diagnose ist schwierig, da Stuhlproben oft falsch-negativ ausfallen.",
    psychosomatik: {
      zitat: "Ich lasse andere an meiner Lebensenergie zehren, ohne Grenzen zu setzen.",
      text: "Louise Hay verbindet Parasiten mit dem Abgeben von Kraft an andere. Dahlke sieht Parasiten als Spiegel für parasitäre Beziehungsmuster im eigenen Leben. Wer lässt andere auf seine Kosten leben? Dethlefsen beschreibt den Parasiten als den Schatten des Gastgebers: Erst wenn wir erkennen, wo wir selbst parasitär leben oder parasitäres Verhalten dulden, können wir die Eindringlinge auf allen Ebenen loslassen."
    },
    traditionen: {
      volksmedizin: "In der Volksmedizin war die Wurmkur eine regelmäßige Gesundheitsmaßnahme. Knoblauch galt als stärkstes Wurmmittel. Wermutkraut (Artemisia absinthium) wurde als Tee oder Tinktur eingenommen. Kürbiskerne lähmten Bandwürmer. Rainfarn und Thymian ergänzten die Behandlung. Eine jährliche Wurmkur im Frühjahr war üblich.",
      tcm: "Die TCM kennt Parasiten als Gu-Syndrome (Gu Zheng), Vergiftungszustände durch pathogene Organismen. Feuchte Hitze im Mittleren Erwärmer begünstigt Parasiten. Bittere, kalte Kräuter wie Huang Lian (Coptis) und Qing Hao (Artemisia annua) werden eingesetzt. Die Milz muss gestärkt werden, um das innere Milieu parasitenfeindlich zu machen.",
      ayurveda: "Im Ayurveda werden Parasiten als Krimi (Wurmbefall) bezeichnet. Sie entstehen durch Ama-Ansammlung und schwaches Verdauungsfeuer (Agni). Vidanga (Embelia ribes) ist das Hauptmittel gegen Würmer. Neem (Azadirachta indica) reinigt Blut und Darm. Eine strenge Diät ohne Zucker und Milchprodukte entzieht Parasiten die Nahrungsgrundlage.",
      germanisch: "Nach Hamer sind Parasiten Helfer in der Heilungsphase. Mykobakterien und andere Mikroorganismen bauen Gewebe ab, das während der Konfliktphase aufgebaut wurde. Die Germanische Neue Medizin sieht den Parasiten nicht als Feind, sondern als Teil des biologischen Heilungsprogramms. Der Grundkonflikt liegt oft im Bereich von Brocken-Konflikten (unverdaute Lebenssituationen).",
      alchemie: "In der Alchemie steht der Parasit für das Prinzip des unerwünschten Gastes, der sich vom Wirt ernährt. Spagyrische Antiparasitika nutzen Pflanzenmittel auf Schwefelbasis (Sulphur-Prinzip), um das innere Feuer zu stärken und Parasiten zu vertreiben. Antimonpräparate galten als reinigende Universalmittel. Bittere Elixiere reinigen den Verdauungstrakt."
    },
    kraeuter: [
      { name: 'Wermut (Artemisia absinthium)', wirkung: 'Klassisches Wurmmittel, wirkt gegen Darmparasiten und Einzeller. Tee oder Tinktur, Kur über 2-4 Wochen.' },
      { name: 'Schwarzwalnuss-Schale', wirkung: 'Enthält Juglon, wirkt gegen Würmer und Pilze. Tinktur aus grünen Schalen, 20 Tropfen 3x täglich.' },
      { name: 'Gewürznelke', wirkung: 'Tötet Parasiteneier ab. Frisch gemahlen 3x täglich 1/2 TL, am besten in Kombination mit Wermut.' },
      { name: 'Papaya-Kerne', wirkung: 'Carpain und Benzylisothiocyanat wirken antiparasitär. 1 EL getrocknete Kerne täglich kauen.' },
      { name: 'Knoblauch', wirkung: 'Allicin wirkt breit antiparasitär, antibakteriell und antifungal. 2-3 rohe Zehen täglich.' }
    ],
    stoffe: [
      { name: 'Zeolith', wirkung: 'Bindet Parasitentoxine und Stoffwechselgifte. 3 g in Wasser morgens nüchtern während der Kur.' },
      { name: 'Borax', wirkung: 'Bor wirkt antiparasitär und antifungal. Minimale Dosen (Prise in 1L Wasser) nach Protokoll.' },
      { name: 'Diatomeen-Erde', wirkung: 'Kieselgur in Lebensmittelqualität verletzt Parasiten mechanisch. 1 TL in Wasser täglich.' },
      { name: 'Schwefel', wirkung: 'Organischer Schwefel (MSM) schafft ein parasitenfeindliches Milieu. 2-4 g täglich.' },
      { name: 'Kolloidales Silber', wirkung: 'Antimikrobiell gegen Einzeller und Bakterien. 50ml 10ppm 2x täglich für max. 2 Wochen.' }
    ],
    ernaehrung: {
      empfehlung: "Parasiten ernähren sich von Zucker und einfachen Kohlenhydraten. Die Diät während einer Parasitenkur muss streng zuckerfrei sein. Bittere und scharfe Lebensmittel schaffen ein feindliches Milieu. Rohkost mit antiparasitären Eigenschaften bevorzugen.",
      staerkend: ["Roher Knoblauch", "Kürbiskerne (roh, ungesalzen)", "Papaya und Papayakerne", "Ananas (Bromelain)", "Kokosnussöl", "Fermentiertes Gemüse", "Bittere Salate (Radicchio, Endivie)", "Meerrettich", "Thymian", "Oregano"],
      meiden: ["Jeglicher Zucker", "Weißmehlprodukte", "Milch und Milchprodukte", "Schweinefleisch (rohe Formen)", "Alkohol", "Süße Früchte in großen Mengen"],
      rezepte: [
        { name: 'Antiparasitärer Knoblauch-Shot', zutaten: '3 Knoblauchzehen, 1 Stück Ingwer, Saft 1 Zitrone, Prise Cayenne, 50ml Wasser', zubereitung: 'Knoblauch und Ingwer pressen, mit Zitronensaft, Cayenne und Wasser mischen. Morgens nüchtern als Shot trinken. Über 14 Tage durchführen.' },
        { name: 'Kürbiskern-Kur', zutaten: '100g rohe Kürbiskerne, 2 EL Rizinusöl, 1 Knoblauchzehe', zubereitung: 'Morgens nüchtern 50g Kürbiskerne gründlich kauen. Nach 2 Stunden 1 EL Rizinusöl einnehmen. 3 Tage lang wiederholen. Traditionelles Bandwurm-Mittel.' }
      ]
    },
    fasten: {
      text: "Fasten ist ein mächtiges Werkzeug gegen Parasiten, da es ihnen die Nahrungsgrundlage entzieht. Kombiniert mit antiparasitären Kräutern ist es besonders effektiv. Während des Fastens sterben Parasiten ab, daher ist die Toxinbindung essentiell.",
      formen: ["3-5-tägiges Saftfasten mit bitteren Säften", "Wasserfasten mit Kräutertees (Wermut, Thymian)", "Kokosöl-Fasten (nur Kokosöl und Wasser für 3 Tage)"],
      reinigung: ["Einläufe mit Knoblauch-Wasser", "Zeolith zur Toxinbindung", "Leberwickel abends", "Bittersalz-Flush zur Darmentleerung"]
    },
    bewegung: {
      text: "Bewegung unterstützt die Darmmotilität und hilft, Parasiten auszuscheiden. Moderate Bewegung stärkt das Immunsystem. Übermäßiger Sport während einer Parasitenkur kann die Entgiftungsreaktionen verstärken.",
      praktiken: ["Moderate Spaziergänge", "Yoga-Drehungen (Matsyendrasana)", "Bauchübungen zur Förderung der Peristaltik", "Trampolin-Schwingen für das Lymphsystem"]
    },
    geist: {
      einheit: "Parasiten im Körper spiegeln parasitäre Muster im Leben. Wer zehrt an deiner Energie? Wo gibst du deine Kraft ab, ohne Grenzen zu setzen? Die Reinigung beginnt im Außen und im Innen gleichzeitig. Setze klare Grenzen, dann hat kein Parasit mehr Platz.",
      affirmationen: ["Ich setze klare Grenzen und schütze meine Energie.", "Mein Körper ist mein heiliger Raum, den ich rein halte.", "Ich lasse nur das in mein Leben, was mir guttut.", "Ich bin frei von allem, was an mir zehrt."],
      meditation: "Visualisiere ein reinigendes Feuer, das durch deinen Verdauungstrakt fließt und alle unerwünschten Gäste sanft verbrennt. Sieh, wie sich dein Darm in strahlendes, rosafarbenes Licht hüllt. Bitte die Parasiten, zu gehen, und sende ihnen Licht. Danke deinem Körper für seine Reinigungskraft.",
      energie: "Solarplexus-Chakra stärken durch Nabel-Meditation. Energetische Raumreinigung mit Salbei-Räucherung. Aura-Schutz-Übungen täglich. EFT-Klopfen auf Grenzthemen."
    },
    produkte: [
      { name: 'Artemisia', desc: 'Artemisia annua (Einjähriger Beifuß) mit Artemisinin. Starkes antiparasitäres Kraut, auch gegen Einzeller.', tags: ['#antiparasitär', '#darm', '#reinigung'] },
      { name: 'ZeoMont', desc: 'Hochwertiges Zeolith zur Bindung von Parasitentoxinen während der Kur. Entlastet Leber und Nieren.', tags: ['#zeolith', '#entgiftung', '#toxinbindung'] },
      { name: 'Knoblauch-Tinktur', desc: 'Konzentrierte Allicin-Power gegen Würmer, Pilze und pathogene Bakterien.', tags: ['#knoblauch', '#antiparasitär', '#antifungal'] },
      { name: 'Kolloidales Silber', desc: 'Antimikrobiell gegen Einzeller und Biofilm-bildende Organismen. Kurweise anwenden.', tags: ['#antimikrobiell', '#reinigung'] },
      { name: 'Oregano-Öl', desc: 'Carvacrol und Thymol wirken breit antiparasitär, antibakteriell und antifungal. Sehr potent.', tags: ['#oregano', '#antiparasitär', '#pilze'] }
    ]
  },

  {
    id: 'schwindel',
    name: 'Schwindel / Gleichgewichtsstörungen',
    tags: ['#schwindel', '#vertigo', '#gleichgewicht', '#innenohr', '#kreislauf'],
    koerper: "Schwindel kann verschiedene Ursachen haben: Lagerungsschwindel (BPPV) durch Kristalle im Innenohr, Morbus Menière mit Druckgefühl und Tinnitus, vestibuläre Migräne, HWS-bedingte Durchblutungsstörungen oder zentraler Schwindel. Auch Blutdruckschwankungen, Anämie, Unterzuckerung und Medikamentennebenwirkungen lösen Schwindel aus. Das Gleichgewichtssystem verbindet Innenohr, Augen, Propriozeption und Kleinhirn zu einem komplexen Netzwerk.",
    psychosomatik: {
      zitat: "Mir wird schwindelig vor der Fülle der Möglichkeiten, weil ich keinen festen Stand im Leben habe.",
      text: "Nach Louise Hay steht Schwindel für zerstreutes, wirres Denken und die Weigerung, hinzuschauen. Dahlke interpretiert Schwindel als Verlust des Gleichgewichts im Leben. Der Mensch hat seinen Standpunkt verloren oder steht an einem Wendepunkt, an dem die alte Orientierung nicht mehr trägt. Dethlefsen sieht darin die Aufforderung, sich der eigenen Mitte zu nähern und festen Boden unter den Füßen zu finden."
    },
    traditionen: {
      volksmedizin: "In der Volksmedizin wurde Schwindel mit Melissentee und Baldriantropfen behandelt. Ingwer galt als wirksames Mittel gegen Schwindelübelkeit. Kalte Güsse an den Beinen nach Kneipp stärkten den Kreislauf. Lavendelöl an den Schläfen beruhigte das Nervensystem.",
      tcm: "In der TCM wird Schwindel meist dem aufsteigenden Leber-Yang oder Leber-Wind zugeordnet. Blut-Mangel und Nieren-Jing-Schwäche können ebenfalls Schwindel verursachen. Akupunktur an Gallenblase 20 (Fengchi) und Leber 3 (Taichong) beruhigt den Wind. Tian Ma (Gastrodia) ist das Hauptkraut gegen Schwindel.",
      ayurveda: "Ayurveda ordnet Schwindel (Bhrama) primär einem Vata-Überschuss zu. Gestörtes Prana-Vayu beeinträchtigt die Sinneswahrnehmung. Öl-Einläufe (Basti) beruhigen Vata. Nasya (Nasenöl-Behandlung) mit Anu Taila wirkt direkt auf das Gehirn. Brahmi (Bacopa) stärkt die Nervenfunktion.",
      germanisch: "Nach Hamer steht Schwindel in Verbindung mit einem Fallkonflikt, der Angst vor dem Stürzen oder dem Verlust des Gleichgewichts. Das Kleinhirn und das Innenohr reagieren auf diesen Konflikt. In der Lösung kommt es zu Schwindelattacken als Zeichen der Regeneration.",
      alchemie: "Spagyrisch wird Schwindel als Ungleichgewicht zwischen Mercurius (Geist) und Sal (Körper) verstanden. Der Geist schwebt, der Körper kann nicht folgen. Spagyrische Essenzen aus Mistel, Melisse und Rosmarin erden den Geist und verbinden ihn wieder mit dem Körper."
    },
    kraeuter: [
      { name: 'Ginkgo biloba', wirkung: 'Verbessert die Durchblutung des Innenohrs und des Gehirns. 120-240 mg standardisierter Extrakt täglich.' },
      { name: 'Ingwer', wirkung: 'Wirkt gegen Schwindelübelkeit und fördert die Durchblutung. Frischer Tee oder Kapselform.' },
      { name: 'Melisse', wirkung: 'Beruhigt das Nervensystem und lindert stressbedingten Schwindel. 3-4 Tassen Tee täglich.' },
      { name: 'Weißdorn', wirkung: 'Stabilisiert den Kreislauf und reguliert den Blutdruck. 450 mg Extrakt 2x täglich.' },
      { name: 'Rosmarin', wirkung: 'Kreislaufanregend und durchblutungsfördernd. Als Tee morgens oder Einreibung an den Schläfen.' }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Entspannt Gefäße, verbessert die Durchblutung. 400 mg täglich, besonders bei Migräneschwindel.' },
      { name: 'Vitamin B6', wirkung: 'Essentiell für die Vestibulärfunktion. 50-100 mg täglich.' },
      { name: 'Eisen', wirkung: 'Bei Schwindel durch Anämie. Ferritinwert prüfen, bei Mangel 20 mg mit Vitamin C.' },
      { name: 'Ginkgo-Extrakt', wirkung: 'Verbessert die Mikrozirkulation im Innenohr. 240 mg standardisierter Extrakt.' },
      { name: 'Vitamin D3', wirkung: 'Mangel kann Lagerungsschwindel begünstigen. 4000 IE täglich mit K2.' }
    ],
    ernaehrung: {
      empfehlung: "Bei Schwindel ist eine kreislaufstabilisierende Ernährung wichtig. Regelmäßige Mahlzeiten verhindern Blutzuckerschwankungen. Ausreichend Flüssigkeit und Salz bei niedrigem Blutdruck. Histaminarme Ernährung bei Morbus Menière hilfreich.",
      staerkend: ["Rote Bete (durchblutungsfördernd)", "Granatapfel", "Walnüsse", "Hirse (eisenhaltig)", "Ingwer", "Knoblauch", "Haferflocken", "Dunkle Beeren"],
      meiden: ["Koffein in großen Mengen", "Alkohol", "Sehr salzige Speisen (bei Menière)", "Histaminreiche Lebensmittel (bei Menière)", "Zucker"],
      rezepte: [
        { name: 'Rote-Bete-Ingwer-Saft', zutaten: '2 Rote Bete, 1 Apfel, 3cm Ingwer, 1 Karotte', zubereitung: 'Alles durch den Entsafter geben. Morgens frisch trinken. Fördert die Durchblutung und stabilisiert den Kreislauf.' },
        { name: 'Melisse-Rosmarintee', zutaten: '2 TL Melissenblätter, 1 TL Rosmarinblätter, 1 TL Weißdornblüten, 250ml heißes Wasser', zubereitung: 'Kräuter mit heißem Wasser überbrühen, 10 Minuten ziehen lassen. 3x täglich trinken bei Schwindelneigung.' }
      ]
    },
    fasten: {
      text: "Bei Schwindel ist Fasten mit Vorsicht anzugehen. Blutzuckerschwankungen und Elektrolytverluste können den Schwindel verschlimmern. Sanftes Intervallfasten ist möglich, wenn ausreichend Flüssigkeit und Mineralstoffe zugeführt werden.",
      formen: ["Sanftes Intervallfasten 14:10", "Basenfasten mit viel Gemüsebrühe", "Saftfasten nur mit stabilem Kreislauf"],
      reinigung: ["Ölziehen morgens", "Basenbäder", "Leichte Leberwickel", "Fußbäder mit Epsomit"]
    },
    bewegung: {
      text: "Gezielte Gleichgewichtsübungen trainieren das vestibuläre System und reduzieren Schwindel langfristig. Lagerungsmanöver (Epley-Manöver) helfen bei BPPV. Sanfte, fließende Bewegungen sind hart ruckartigen vorzuziehen.",
      praktiken: ["Epley-Manöver (bei Lagerungsschwindel)", "Tai Chi (Gleichgewichtstraining)", "Yoga (Baumstellung, Krieger)", "Vestibulärgymnastik", "Barfuß-Laufen auf unebenem Boden"]
    },
    geist: {
      einheit: "Schwindel fragt dich: Wo hast du deinen Standpunkt verloren? Wo drehst du dich im Kreis? Finde deine Mitte, deinen inneren Anker. Wenn du weißt, wer du bist und wofür du stehst, wird der Boden unter deinen Füßen wieder fest.",
      affirmationen: ["Ich stehe fest und sicher in meinem Leben.", "Ich bin zentriert und in meiner Mitte.", "Ich vertraue meinem inneren Gleichgewicht.", "Ich bin geerdet und verbunden mit der Erde."],
      meditation: "Stelle dich hin und spüre deine Füße auf dem Boden. Visualisiere Wurzeln, die aus deinen Fußsohlen tief in die Erde wachsen. Spüre die Stabilität der Erde, die dich trägt. Atme Erdenergie durch die Füße ein und lasse sie durch deinen ganzen Körper aufsteigen bis zum Scheitel. Du bist wie ein Baum: verwurzelt und doch frei.",
      energie: "Erdungschakra (Muladhara) stärken durch Wurzelchakra-Meditation. Füße massieren und erden. Barfuß auf der Erde stehen (Earthing). Cranio-Sacral-Therapie für das Gleichgewichtssystem."
    },
    produkte: [
      { name: 'Magnesium-Öl', desc: 'Transdermales Magnesium für Gefäßentspannung und Kreislaufstabilisierung. An Nacken und Schläfen einreiben.', tags: ['#magnesium', '#kreislauf', '#entspannung'] },
      { name: 'Weißdorn-Tee', desc: 'Traditionelles Herz-Kreislauf-Tonikum, reguliert Blutdruck und stärkt die Gefäße.', tags: ['#herz', '#kreislauf', '#blutdruck'] },
      { name: 'CBD-Öl', desc: 'Beruhigt das Nervensystem und kann Schwindel durch Angst und Stress lindern.', tags: ['#nerven', '#angst', '#entspannung'] },
      { name: 'Vitamin D3+K2', desc: 'Vitamin-D-Mangel ist ein häufiger Auslöser von Lagerungsschwindel (BPPV).', tags: ['#vitamin', '#knochen', '#gleichgewicht'] },
      { name: 'Hericium', desc: 'Löwenmähne-Pilz unterstützt Nervenwachstum und vestibuläre Regeneration.', tags: ['#vitalpilz', '#nerven', '#regeneration'] }
    ]
  },

  {
    id: 'herz',
    name: 'Herzschwäche / Herzrhythmusstörungen',
    tags: ['#herz', '#herzrhythmus', '#herzschwäche', '#arrhythmie', '#kreislauf', '#blutdruck'],
    koerper: "Herzschwäche (Herzinsuffizienz) bedeutet, dass das Herz nicht mehr ausreichend Blut durch den Körper pumpt. Symptome sind Kurzatmigkeit, Wassereinlagerungen, Müdigkeit und eingeschränkte Belastbarkeit. Herzrhythmusstörungen (Arrhythmien) wie Extrasystolen, Vorhofflimmern oder Tachykardien stören den regelmäßigen Herzschlag. Ursachen sind Nährstoffmängel (Magnesium, Kalium, CoQ10), koronare Herzkrankheit, Bluthochdruck, Schilddrüsenprobleme und chronischer Stress.",
    psychosomatik: {
      zitat: "Mein Herz schlägt nicht mehr im Rhythmus des Lebens, weil ich die Freude verloren habe.",
      text: "Louise Hay sieht Herzprobleme als Ausdruck langanhaltender emotionaler Probleme, besonders Mangel an Freude und Liebe. Dahlke beschreibt das Herz als den Sitz der Lebensfreude. Herzrhythmusstörungen zeigen, dass der Mensch aus seinem natürlichen Rhythmus gefallen ist. Dethlefsen betont: Das Herz ist das Organ der Liebe und des Mutes (cor = Herz = courage). Herzschwäche spiegelt einen Menschen, der nicht wagt, aus vollem Herzen zu leben."
    },
    traditionen: {
      volksmedizin: "Weißdorn (Crataegus) ist das wichtigste Herzmittel der europäischen Volksmedizin. Es stärkt den Herzmuskel, reguliert den Rhythmus und schützt die Gefäße. Herzgespann (Leonurus cardiaca) beruhigte bei Herzjagen. Mistel regulierte den Blutdruck. Rosmarin-Wein stärkte das schwache Herz.",
      tcm: "In der TCM ist das Herz (Xin) der Kaiser der Organe und beherbergt den Geist (Shen). Herzschwäche ist Herz-Qi- oder Herz-Yang-Mangel. Rhythmusstörungen zeigen oft Herz-Blut-Mangel oder aufgestörten Shen. Dan Shen (Salvia miltiorrhiza) belebt das Herzblut, Suan Zao Ren (Ziziphus) beruhigt den Shen.",
      ayurveda: "Ayurveda sieht das Herz als Sitz von Ojas, der feinsten Essenz des Lebens. Herzschwäche ist Ojas-Mangel. Arjuna-Rinde (Terminalia arjuna) ist das wichtigste ayurvedische Herzmittel. Es stärkt den Herzmuskel und reguliert den Blutdruck. Brahmi beruhigt den Geist und damit das Herz.",
      germanisch: "Nach Hamer sind Herzrhythmusstörungen oft mit einem Revierkonflikt verbunden. Die Koronararterien und der Herzmuskel reagieren auf Revierverluste. Vorhofflimmern zeigt einen gelösten territorialen Konflikt. Die Lösung liegt in der Klärung von Rangordnungs- und Revierfragen.",
      alchemie: "Das Herz entspricht in der Alchemie dem Gold (Aurum) und der Sonne. Herzschwäche ist ein Verlust des inneren Goldes, der Lebensfreude. Aurum metallicum in homöopathischer Potenz stärkt das Herz. Spagyrische Weißdorn-Essenz verbindet die drei Prinzipien Sal, Sulphur und Mercurius im Herzorgan."
    },
    kraeuter: [
      { name: 'Weißdorn (Crataegus)', wirkung: 'Stärkt Herzmuskel, verbessert Koronardurchblutung, reguliert Rhythmus. 450-900 mg Extrakt täglich.' },
      { name: 'Herzgespann (Leonurus)', wirkung: 'Beruhigt Herzrasen und nervöse Herzstörungen. 2-4 ml Tinktur 3x täglich.' },
      { name: 'Olive (Blattextrakt)', wirkung: 'Blutdrucksenkend, antioxidativ, schützt Gefäße. 500 mg Extrakt täglich.' },
      { name: 'Mistel', wirkung: 'Reguliert Blutdruck und stärkt das Herz-Kreislauf-System. Als Kaltauszug über Nacht.' },
      { name: 'Rosmarin', wirkung: 'Stärkt das schwache Herz, hebt den niedrigen Blutdruck. Tee morgens oder Rosmarinwein.' }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Das wichtigste Mineral für den Herzrhythmus. Mangel verursacht Extrasystolen. 400-600 mg als Citrat oder Glycinat.' },
      { name: 'Coenzym Q10', wirkung: 'Der Herzmuskel hat den höchsten CoQ10-Bedarf. Bei Herzschwäche 200-400 mg täglich.' },
      { name: 'Kalium', wirkung: 'Essentiell für die elektrische Erregungsleitung am Herzen. Über kaliumreiche Nahrung zuführen.' },
      { name: 'Taurin', wirkung: 'Aminosäure, die den Herzmuskel stärkt und Rhythmusstörungen reduziert. 1-3 g täglich.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Senken Triglyceride und wirken antiarrhythmisch. 2-4 g EPA/DHA täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Herzgesunde Ernährung ist reich an Kalium, Magnesium und Omega-3-Fettsäuren. Mediterrane Kost hat die beste Evidenz für Herzgesundheit. Salz reduzieren bei Bluthochdruck, aber nicht bei niedrigem Blutdruck. Antioxidantienreiche Nahrung schützt die Gefäße.",
      staerkend: ["Fettreicher Fisch (Wildlachs, Makrele)", "Walnüsse", "Olivenöl", "Granatapfel", "Rote Trauben", "Knoblauch", "Rote Bete", "Dunkle Schokolade (>85%)", "Haferflocken", "Weißdornbeeren"],
      meiden: ["Transfette", "Übermäßig Salz (bei Bluthochdruck)", "Zucker", "Alkohol in großen Mengen", "Koffein bei Rhythmusstörungen", "Schweinefleisch"],
      rezepte: [
        { name: 'Herzstärkender Weißdorn-Trunk', zutaten: '2 EL getrocknete Weißdornbeeren, 1 TL Rosmarin, 500ml Rotwein oder Traubensaft', zubereitung: 'Weißdornbeeren und Rosmarin 14 Tage in Rotwein (oder Traubensaft) mazerieren. Abseihen. 1 Likörglas täglich als Herztonikum.' },
        { name: 'Kalium-Smoothie', zutaten: '1 Banane, 100g Spinat, 1 Avocado, 200ml Kokoswasser, 1 EL Hanfsamen', zubereitung: 'Alles im Mixer pürieren. Reich an Kalium und Magnesium für einen stabilen Herzrhythmus.' }
      ]
    },
    fasten: {
      text: "Bei Herzschwäche ist Fasten nur unter ärztlicher Aufsicht durchzuführen. Elektrolytverluste können Rhythmusstörungen verschlimmern. Sanftes Basenfasten mit ausreichend Mineralstoffen kann das Herz entlasten, indem es Gewicht reduziert und Entzündungen senkt.",
      formen: ["Basenfasten (1-2 Wochen)", "Sanftes Intervallfasten 14:10", "Schonende Heilfastenkur nach Buchinger (unter Aufsicht)"],
      reinigung: ["Basenbäder mit Epsomit", "Herz-Wickel mit Lavendelöl", "Sanftes Ölziehen", "Leberwickel zur Entlastung"]
    },
    bewegung: {
      text: "Moderate Bewegung ist das beste Medikament fürs Herz. Sie stärkt den Herzmuskel, senkt den Blutdruck und verbessert die Herzratenvariabilität. Bei Herzschwäche langsam beginnen und steigern. Überanstrengung vermeiden.",
      praktiken: ["Herzfrequenzgesteuertes Walking", "Sanftes Radfahren", "Schwimmen (gleichmäßige Belastung)", "Yoga (Herzöffner-Positionen)", "Coherent Breathing (5-6 Atemzüge/Minute)"]
    },
    geist: {
      einheit: "Dein Herz ist der Sitz deiner Seele, der Ort, wo Liebe und Wahrheit wohnen. Wenn das Herz schwach schlägt, hat die Freude am Leben nachgelassen. Öffne dein Herz wieder für die Liebe, für den Mut und für die Begeisterung. Ein offenes Herz ist ein starkes Herz.",
      affirmationen: ["Mein Herz schlägt kraftvoll und im Rhythmus der Freude.", "Ich öffne mein Herz für die Liebe des Lebens.", "Ich lebe mutig und aus vollem Herzen.", "Mein Herz ist stark, sicher und von Freude erfüllt."],
      meditation: "Lege beide Hände auf dein Herz und spüre deinen Herzschlag. Atme tief ein und stelle dir vor, wie dein Herz mit jedem Atemzug grünes Heilungslicht aufnimmt. Sende mit jedem Ausatmen Liebe und Dankbarkeit an dein Herz. Sage innerlich: Danke, Herz, für jeden einzelnen Schlag. 10-20 Minuten täglich.",
      energie: "Herzchakra (Anahata) öffnen durch Brustöffner und Herzmeditation. Grüne und rosa Heilsteine (Rosenquarz, Aventurin) auf das Herz legen. HeartMath-Kohärenzübungen. Klangtherapie mit Herzschalen (Frequenz 341 Hz)."
    },
    produkte: [
      { name: 'Weißdorn-Tee', desc: 'Das klassische Herztonikum der Naturheilkunde. Stärkt den Herzmuskel und reguliert den Rhythmus.', tags: ['#herz', '#herzmuskel', '#rhythmus'] },
      { name: 'Magnesium-Öl', desc: 'Transdermales Magnesium gegen Herzrhythmusstörungen und Extrasystolen. Auf die Brust einreiben.', tags: ['#magnesium', '#herzrhythmus', '#entspannung'] },
      { name: 'CBD-Öl', desc: 'Entspannt das Nervensystem, senkt Stresshormone und unterstützt die Herzratenvariabilität.', tags: ['#herz', '#stress', '#entspannung'] },
      { name: 'OPC', desc: 'Traubenkernextrakt schützt die Gefäße und stärkt die Kapillaren. Starkes Antioxidans fürs Herz.', tags: ['#gefäße', '#antioxidans', '#herz'] },
      { name: 'Hanfsamen', desc: 'Perfektes Omega-3-zu-6-Verhältnis, reich an Arginin für die Gefäßgesundheit.', tags: ['#omega3', '#gefäße', '#herz'] }
    ]
  },

  {
    id: 'krampfadern',
    name: 'Krampfadern / Venenschwäche / Durchblutung',
    tags: ['#venen', '#krampfadern', '#durchblutung', '#bindegewebe', '#beine', '#varizen'],
    koerper: "Krampfadern (Varizen) entstehen durch Schwäche der Venenwände und Venenklappen, wodurch das Blut in den Beinen versackt. Besenreiser, schwere Beine, Schwellungen, Spannungsgefühl und im Verlauf bräunliche Hautveränderungen sind typisch. Risikofaktoren sind Bindegewebsschwäche, Bewegungsmangel, Übergewicht, Schwangerschaft, Stehberufe und genetische Veranlagung. Komplikationen wie Thrombosen und offene Beine (Ulcus cruris) drohen bei Vernachlässigung.",
    psychosomatik: {
      zitat: "Ich stehe in einer Situation, die mich belastet und aus der ich nicht herausfinde.",
      text: "Louise Hay verbindet Krampfadern mit dem Stehen in einer verhassten Situation. Dahlke sieht in gestauten Venen gestaute Gefühle und Lebensenergie. Das Blut fließt nicht zurück zum Herzen, die Liebe und Freude stagnieren. Dethlefsen beschreibt Krampfadern als den Versuch, Erstarrtes festzuhalten. Die Flexibilität ist verloren gegangen, im Körper wie im Leben."
    },
    traditionen: {
      volksmedizin: "Rosskastanie (Aesculus hippocastanum) ist das wichtigste Venenmittel der Volksmedizin. Steinklee und Mäusedorn stärkten die Venenwände. Kalte Wassergüsse nach Kneipp waren das Mittel der Wahl. Apfelessig-Wickel auf die Beine reduzierten Schwellungen. Ringelblumensalbe pflegte die überlastete Haut.",
      tcm: "In der TCM werden Krampfadern als Blut-Stase (Xue Yu) und Milz-Qi-Schwäche betrachtet. Die Milz hält das Blut in den Gefäßen und hebt das Qi. Bei Milz-Schwäche sackt das Qi und Blut ab. Akupunktur und Moxibustion stärken die Milz. Dang Gui (Angelica sinensis) belebt das Blut.",
      ayurveda: "Ayurveda ordnet Krampfadern einem Vata-Pitta-Ungleichgewicht zu. Vata trocknet das Bindegewebe aus, Pitta entzündet die Venenwände. Sariva (Hemidesmus indicus) reinigt das Blut. Äußerlich werden Eranda (Rizinusöl)-Packungen angewendet. Beinmassagen mit Sesamöl stärken die Gewebe.",
      germanisch: "Nach Hamer stehen Venenprobleme in Verbindung mit einem Selbstwerteinbruch-Konflikt der Beine. Der biologische Sinn der Gewebeveränderung ist eine Verstärkung der Venenstruktur. In der Lösung kommt es zu Schwellung und Entzündung als Zeichen der Reparatur.",
      alchemie: "Krampfadern zeigen spagyrisch eine Schwäche des Sal-Prinzips (Formkraft) und eine Stauung des Mercurius (Fließprinzip). Spagyrische Rosskastanien-Essenz stärkt die Gefäßwände. Kupfer (Venus-Metall) fördert die Elastizität des Bindegewebes und den venösen Rückfluss."
    },
    kraeuter: [
      { name: 'Rosskastanie', wirkung: 'Aescin stärkt Venenwände und reduziert Schwellungen. 300 mg Aescin-Extrakt 2x täglich.' },
      { name: 'Mäusedorn (Ruscus aculeatus)', wirkung: 'Ruscogenine verengen erweiterte Venen und fördern den Blutfluss. 150 mg Extrakt 2x täglich.' },
      { name: 'Steinklee (Melilotus)', wirkung: 'Cumarin verbessert den Lymphfluss und reduziert Ödeme. Als Tee oder Extrakt.' },
      { name: 'Hamamelis', wirkung: 'Gerbstoffe stärken Gefäßwände. Äußerlich als Salbe, innerlich als Tee.' },
      { name: 'Weinlaub (Rotes)', wirkung: 'Flavonoide stärken die Kapillaren. 360-720 mg Extrakt täglich.' }
    ],
    stoffe: [
      { name: 'OPC', wirkung: 'Traubenkernextrakt stärkt Kollagen in den Venenwänden. 200-400 mg täglich.' },
      { name: 'Vitamin C', wirkung: 'Essentiell für die Kollagenbildung und Venenstabilität. 1-2 g täglich.' },
      { name: 'Silizium', wirkung: 'Stärkt das Bindegewebe von innen. Als Kieselsäure (Bambus-Extrakt) oder Zeolith.' },
      { name: 'Rutin/Hesperidin', wirkung: 'Bioflavonoide, die Kapillaren stärken und Ödeme reduzieren. 500 mg Rutin täglich.' },
      { name: 'MSM', wirkung: 'Schwefel für elastisches Bindegewebe und Gefäßwände. 2-4 g täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Flavonoid- und Vitamin-C-reiche Ernährung stärkt die Gefäße. Ballaststoffreiche Kost verhindert Verstopfung, die den venösen Rückfluss behindert. Entzündungshemmende Ernährung schützt die Venenwände. Übergewicht reduzieren.",
      staerkend: ["Dunkle Beeren (Heidelbeeren, Brombeeren)", "Buchweizen (Rutin-reich)", "Zitrusfrüchte", "Paprika", "Knoblauch", "Zwiebeln", "Ingwer", "Dunkle Trauben", "Kirschen"],
      meiden: ["Zucker", "Weißmehl", "Transfette", "Alkohol", "Übermäßig Salz", "Schweinefleisch"],
      rezepte: [
        { name: 'Venenstärkender Beerensmoothie', zutaten: '150g gemischte Beeren, 1 EL Buchweizenkeimlinge, 1 Orange, 200ml Wasser, 1 TL OPC-Pulver', zubereitung: 'Alles im Mixer pürieren. Reich an Flavonoiden und Vitamin C für starke Venen. Täglich trinken.' },
        { name: 'Buchweizen-Salat', zutaten: '200g gekochter Buchweizen, 1 rote Paprika, Walnüsse, Petersilie, Olivenöl, Zitronensaft', zubereitung: 'Buchweizen kochen und abkühlen lassen. Mit gewürfelter Paprika, gehackten Walnüssen und Petersilie mischen. Mit Olivenöl und Zitronensaft anmachen. Rutinreich.' }
      ]
    },
    fasten: {
      text: "Fasten kann bei Venenschwäche unterstützend wirken, da es Entzündungen reduziert und Gewicht senkt. Während des Fastens verbessert sich die Blutrheologie (Fließeigenschaften des Blutes). Ausreichend Flüssigkeit ist besonders wichtig.",
      formen: ["Basenfasten (ideal für den Einstieg)", "Intervallfasten 16:8", "Buchinger-Heilfasten mit Kneipp-Anwendungen"],
      reinigung: ["Kalte Beingüsse nach Kneipp (täglich)", "Basenbäder", "Trockenbürsten der Beine (herzwärts)", "Leberwickel"]
    },
    bewegung: {
      text: "Bewegung ist das wichtigste Mittel gegen Krampfadern. Die Wadenmuskelpumpe presst das Blut nach oben. Stehen und Sitzen sind Gift für die Venen, Gehen und Liegen sind Balsam. Beine regelmäßig hochlegen. Venengymnastik mehrmals täglich.",
      praktiken: ["Spaziergänge und Walking", "Schwimmen (Wasserdruck unterstützt Venen)", "Radfahren", "Venengymnastik (Fußkreisen, Zehenstand)", "Yoga mit Umkehrhaltungen (Beine an der Wand hoch)", "Kneipp-Wassertreten"]
    },
    geist: {
      einheit: "Gestaute Venen zeigen dir gestaute Lebensenergie. Wo stehst du fest und kommst nicht vorwärts? Erlaube deinem Leben wieder zu fließen. Geh neue Wege, bewege dich aus der Starre heraus. Dein Blut will zum Herzen, zur Liebe zurückkehren.",
      affirmationen: ["Mein Leben fließt leicht und frei.", "Ich bewege mich mit Freude durch mein Leben.", "Ich löse mich aus Situationen, die mich belasten.", "Mein Blut fließt kraftvoll und meine Venen sind stark."],
      meditation: "Lege dich hin und lege die Beine an eine Wand hoch. Visualisiere, wie das Blut aus deinen Beinen frei und leicht zum Herzen zurückfließt. Sieh deine Venen als starke, elastische Flüsse. Atme Schwere aus den Beinen und atme Leichtigkeit ein. 15 Minuten täglich.",
      energie: "Fußchakren aktivieren und mit dem Herzchakra verbinden. Energetische Lymphdrainage durch Handauflegen. Kupfersohlen in den Schuhen für den Venusaspekt. Meridianmassage der Beinmeridiane (Magen, Milz, Leber)."
    },
    produkte: [
      { name: 'OPC', desc: 'Traubenkernextrakt stärkt die Venenwände und das Kollagen. Das wichtigste Supplement bei Krampfadern.', tags: ['#venen', '#kollagen', '#antioxidans'] },
      { name: 'MSM', desc: 'Organischer Schwefel für elastisches Bindegewebe und starke Venenwände.', tags: ['#schwefel', '#bindegewebe', '#venen'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat-Bäder fördern die Durchblutung und reduzieren Schwellungen in den Beinen.', tags: ['#magnesium', '#bad', '#beine'] },
      { name: 'Schwefel', desc: 'Unterstützt die Kollagenbildung und stärkt das Bindegewebe von innen.', tags: ['#bindegewebe', '#kollagen', '#elastizität'] },
      { name: 'Magnesium-Öl', desc: 'Äußerlich auf die Beine auftragen für bessere Durchblutung und Muskelentspannung.', tags: ['#magnesium', '#beine', '#durchblutung'] }
    ]
  },

  {
    id: 'neurodermitis',
    name: 'Neurodermitis / Ekzem',
    tags: ['#neurodermitis', '#ekzem', '#haut', '#juckreiz', '#atopisch', '#allergie'],
    koerper: "Neurodermitis (atopisches Ekzem) ist eine chronisch-entzündliche Hauterkrankung mit starkem Juckreiz, trockener Haut, Rötungen und Ekzemschüben. Sie tritt oft schon im Kindesalter auf und verläuft in Schüben. Die Hautbarriere ist gestört, Umweltallergene dringen leichter ein. Das Immunsystem reagiert überschießend. Auslöser für Schübe sind Stress, Nahrungsmittelunverträglichkeiten, Histaminintoleranz, Darmstörungen, trockene Luft, Textilien und chemische Reizstoffe.",
    psychosomatik: {
      zitat: "Meine Haut zeigt, was ich nicht zeigen darf: meine Verletzlichkeit und mein Bedürfnis nach Berührung.",
      text: "Louise Hay sieht Hautprobleme als Angst, bedroht zu werden, und als fehlende Selbstakzeptanz. Dahlke beschreibt Neurodermitis als Grenzkonflikt: Die Haut als Grenzorgan zwischen Ich und Welt ist entzündet. Der Mensch hat Schwierigkeiten, Nähe und Distanz zu regulieren. Dethlefsen betont den unterdrückten Zorn, der sich über die Haut Bahn bricht. Was nicht ausgesprochen wird, spricht der Körper über die Haut aus."
    },
    traditionen: {
      volksmedizin: "In der Volksmedizin wurde Neurodermitis als Blutkrankheit betrachtet. Blutreinigungskuren im Frühling mit Brennnessel, Löwenzahn und Klettenwurzel waren Standard. Nachtkerzenöl und Borretschöl pflegten die Haut. Haferbäder linderten den Juckreiz. Kamille und Ringelblume beruhigten die Entzündung.",
      tcm: "Die TCM sieht Neurodermitis als Wind-Hitze oder Blut-Hitze mit Feuchtigkeit. Wind verursacht den Juckreiz, Hitze die Rötung, Feuchtigkeit das Nässen. Die Behandlung kühlt das Blut, vertreibt Wind und transformiert Feuchtigkeit. Bai Xian Pi (Diptam-Rinde) und Di Fu Zi (Kochia-Frucht) sind wichtige Kräuter.",
      ayurveda: "Ayurveda klassifiziert Hautkrankheiten als Kushtha und ordnet Neurodermitis einem Vata-Kapha-Ungleichgewicht mit Pitta-Beteiligung zu. Neem reinigt das Blut, Kurkuma wirkt entzündungshemmend, Ghee nährt die trockene Haut von innen. Panchakarma mit Virechana reinigt die Haut über den Darm.",
      germanisch: "Nach Hamer steht Neurodermitis in Verbindung mit einem Trennungskonflikt. Die Haut reagiert auf einen erlebten oder befürchteten Kontaktverlust. In der aktiven Phase wird die Haut trocken und empfindungsarm, in der Heilungsphase kommt es zum Ekzem mit Juckreiz, Rötung und Schwellung.",
      alchemie: "Spagyrisch ist die Haut der Spiegel der inneren Reinheit (Sal-Prinzip). Neurodermitis zeigt, dass innere Unreinheiten sich nach außen drängen. Spagyrische Essenzen aus Stiefmütterchen, Klettenwurzel und Nachtkerze reinigen von innen. Antimonit-Essenzen unterstützen die Entgiftung."
    },
    kraeuter: [
      { name: 'Nachtkerzenöl', wirkung: 'Gamma-Linolensäure stärkt die Hautbarriere. 2-4 g täglich innerlich, äußerlich auftragen.' },
      { name: 'Stiefmütterchen (Viola tricolor)', wirkung: 'Traditionelles Hautkraut, reinigt das Blut. Als Tee 3x täglich.' },
      { name: 'Klettenwurzel (Arctium lappa)', wirkung: 'Blutreinigend und leberunterstützend. Als Tee oder Tinktur über 6-8 Wochen.' },
      { name: 'Kamille', wirkung: 'Entzündungshemmend und juckreizlindernd. Äußerlich als Kompresse oder Bad.' },
      { name: 'Süßholzwurzel', wirkung: 'Glycyrrhizin wirkt wie natürliches Cortison. Innerlich als Tee, äußerlich als Gel.' }
    ],
    stoffe: [
      { name: 'Vitamin D3', wirkung: 'Reguliert das Immunsystem und die Hautbarriere. 4000-5000 IE täglich mit K2.' },
      { name: 'Zink', wirkung: 'Essentiell für Hautreparatur und Immunregulation. 15-30 mg Zink-Bisglycinat täglich.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Hemmen Entzündungsmediatoren in der Haut. 2-4 g EPA/DHA täglich.' },
      { name: 'Probiotika', wirkung: 'Lactobacillus rhamnosus GG und L. reuteri regulieren die Immunantwort über den Darm. 10 Mrd. KBE täglich.' },
      { name: 'Histidin', wirkung: 'Aminosäure, die den Histaminspiegel reguliert. 500-1000 mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Bei Neurodermitis ist die Ernährung zentral. Häufige Trigger sind Kuhmilch, Eier, Weizen, Soja und Histamin. Eine Eliminationsdiät hilft, individuelle Auslöser zu identifizieren. Entzündungshemmende, darmgesunde Ernährung bildet die Basis.",
      staerkend: ["Grünes Blattgemüse", "Hanfsamen und Hanföl", "Kokosöl", "Süßkartoffeln", "Avocado", "Haferflocken (glutenfrei)", "Fermentiertes Gemüse", "Knochenbrühe (Kollagen)", "Leinsamen"],
      meiden: ["Kuhmilch und Milchprodukte", "Weizen und Gluten", "Zucker", "Histaminreiche Lebensmittel (gereifter Käse, Wein, Salami)", "Nachtschattengewächse (bei Empfindlichkeit)", "Erdnüsse", "Zitrusfrüchte (bei Empfindlichkeit)"],
      rezepte: [
        { name: 'Hautnährender Goldener Brei', zutaten: '50g Hirseflocken, 200ml Hafermilch, 1 TL Kurkuma, 1 TL Kokosöl, Blaubeeren, Hanfsamen', zubereitung: 'Hirseflocken in Hafermilch aufkochen, Kurkuma und Kokosöl einrühren. Mit Blaubeeren und Hanfsamen toppen. Nährt die Haut von innen.' },
        { name: 'Brennnessel-Klettenwurzel-Tee', zutaten: '2 TL Brennnesselblätter, 1 TL Klettenwurzel, 1 TL Stiefmütterchenkraut, 400ml Wasser', zubereitung: 'Kräuter mit kochendem Wasser überbrühen, 15 Minuten ziehen lassen. 3 Tassen täglich über 6-8 Wochen als Blutreinigungskur.' }
      ]
    },
    fasten: {
      text: "Fasten kann bei Neurodermitis Wunder wirken, da es das Immunsystem reguliert und den Darm entlastet. Viele Betroffene erleben deutliche Besserung nach einer Fastenkur. Die Haut ist der Spiegel des Darms, Darmreinigung reinigt die Haut.",
      formen: ["Buchinger-Heilfasten (7-10 Tage)", "Eliminationsdiät als sanfte Fastenform", "Intervallfasten 16:8", "Saftkur mit grünen Gemüsesäften"],
      reinigung: ["Darmreinigung mit Flohsamenschalen", "Zeolith zur Toxinbindung", "Leberwickel nach Kneipp", "Basenbäder (3x wöchentlich)"]
    },
    bewegung: {
      text: "Moderate Bewegung unterstützt die Hautgesundheit durch bessere Durchblutung und Stressabbau. Starkes Schwitzen kann bei manchen den Juckreiz verschlimmern. Schwimmen in Chlorwasser meiden. Bewegung in der Natur ist ideal.",
      praktiken: ["Spaziergänge in der Natur", "Sanftes Yoga", "Schwimmen in Naturgewässern (Salzwasser)", "Moderate Ausdauerbewegung", "Tai Chi (Stressreduktion)"]
    },
    geist: {
      einheit: "Deine Haut ist die Grenze zwischen dir und der Welt. Neurodermitis sagt: Diese Grenze braucht Aufmerksamkeit. Wo lässt du zu viel an dich heran? Wo sehnst du dich nach Berührung? Erlaube dir, verletzlich zu sein, und setze gleichzeitig liebevolle Grenzen.",
      affirmationen: ["Meine Haut ist mein schützender Mantel, und ich pflege sie mit Liebe.", "Ich bin sicher in meiner Haut.", "Ich erlaube mir Nähe und setze gesunde Grenzen.", "Mein Körper und ich sind im Frieden miteinander."],
      meditation: "Visualisiere deine Haut als einen sanften, schützenden Mantel aus goldenem Licht. Überall, wo die Haut gereizt ist, sende kühlendes, blaugrünes Heilungslicht. Streichle innerlich über deine Haut und sage: Ich nehme dich an. Du darfst heilen. 15 Minuten abends vor dem Schlafen.",
      energie: "Hautmeridiane (Lunge, Dickdarm) mit Akupressur behandeln. Energetische Grenzarbeit: Visualisiere eine goldene Aura um deinen Körper. Reiki auf betroffene Hautstellen. Emotional Freedom Technique (EFT) bei Juckreizattacken."
    },
    produkte: [
      { name: 'Schwarzkümmelöl', desc: 'Thymoquinon wirkt immunmodulierend und entzündungshemmend. Innerlich und äußerlich bei Neurodermitis.', tags: ['#haut', '#entzündung', '#immunsystem'] },
      { name: 'CBD-Öl', desc: 'Reguliert das Immunsystem über das Endocannabinoid-System. Lindert Juckreiz und Entzündung.', tags: ['#haut', '#juckreiz', '#entzündung'] },
      { name: 'ZeoMont', desc: 'Zeolith bindet Toxine im Darm und entlastet die Haut als Ausscheidungsorgan.', tags: ['#darm', '#entgiftung', '#haut'] },
      { name: 'Vitamin D3+K2', desc: 'Reguliert die Immunantwort und stärkt die Hautbarriere. Essentiell bei Neurodermitis.', tags: ['#vitamin', '#immunsystem', '#haut'] },
      { name: 'Chlorella', desc: 'Bindet Schwermetalle und Toxine, die Hautprobleme verschlimmern können.', tags: ['#entgiftung', '#schwermetalle', '#haut'] }
    ]
  },

  {
    id: 'reizdarm',
    name: 'Reizdarm / IBS',
    tags: ['#reizdarm', '#ibs', '#darm', '#blähungen', '#verdauung', '#bauchschmerzen'],
    koerper: "Das Reizdarmsyndrom (IBS) äußert sich durch chronische Bauchschmerzen, Blähungen, Durchfall und/oder Verstopfung ohne organisch fassbare Ursache. Das Darmnervensystem (Bauchhirn) ist überreizt, die Darm-Hirn-Achse gestört. SIBO (Dünndarmfehlbesiedelung), Leaky Gut, Nahrungsmittelunverträglichkeiten (Fruktose, Laktose, FODMAP) und Dysbiose der Darmflora spielen eine zentrale Rolle. Stress ist einer der stärksten Auslöser.",
    psychosomatik: {
      zitat: "Ich kann das Leben nicht verdauen, es liegt mir schwer im Magen.",
      text: "Louise Hay verbindet Darmprobleme mit Angst und der Unfähigkeit, Erlebnisse zu verarbeiten. Dahlke sieht den Reizdarm als Spiegel einer überreizten Seele, die nicht mehr verdauen kann, was das Leben serviert. Der Durchfall steht für Flucht, die Verstopfung für Festhalten. Dethlefsen beschreibt den Darm als Ort der Verarbeitung. Was nicht seelisch verdaut wird, muss der Darm stellvertretend bearbeiten."
    },
    traditionen: {
      volksmedizin: "In der Volksmedizin wurden Bauchkrämpfe mit Kamillentee und Fenchelsamen behandelt. Pfefferminze löste Spasmen. Schafgarbe und Tausendgüldenkraut stärkten die Verdauung. Leinsamen-Schleim schützte die Darmschleimhaut. Feuchtwarme Bauchwickel beruhigten den Darm.",
      tcm: "Die TCM sieht Reizdarm als Disharmonie zwischen Leber und Milz. Emotionaler Stress (Leber-Qi-Stagnation) überwindet die Milz und stört die Verdauung. Die Behandlung harmonisiert Leber und Milz, reguliert das Qi und stärkt die Mitte. Xiao Yao San (Freier Wanderer) ist die klassische Formel.",
      ayurveda: "Im Ayurveda entspricht IBS einem gestörten Agni (Verdauungsfeuer) mit Vata-Aggravation. Unregelmäßiges, schwaches Agni führt zu Ama-Bildung. Triphala reguliert die Verdauung, Ashwagandha beruhigt das Nervensystem, Ingwer entzündet das Verdauungsfeuer. Regelmäßige Mahlzeiten zu festen Zeiten sind zentral.",
      germanisch: "Nach Hamer steht der Darm in Verbindung mit unverdaulichen Ärgernissen. Dünndarmprobleme zeigen einen Konflikt, der nicht aufgenommen (verdaut) werden kann. Dickdarmthemen beziehen sich auf Dinge, die nicht ausgeschieden (losgelassen) werden können. Die Darmmotorik spiegelt die Fähigkeit, Lebensprozesse zu verarbeiten.",
      alchemie: "Der Darm ist spagyrisch der Ort der Separation, wo Nützliches von Unnützem getrennt wird. Reizdarm zeigt, dass diese Trennung nicht mehr gelingt. Spagyrische Bitterstoffe aus Enzian, Angelika und Wermut aktivieren die Verdauungskraft. Antimonit-Essenzen unterstützen die innere Reinigung."
    },
    kraeuter: [
      { name: 'Pfefferminze', wirkung: 'Menthol entspannt die glatte Darmmuskulatur. Magensaftresistente Kapseln mit 0,2ml Pfefferminzöl 2-3x täglich.' },
      { name: 'Kamille', wirkung: 'Entzündungshemmend, spasmolytisch, schleimhautschützend. 3-4 Tassen Tee täglich.' },
      { name: 'Fenchel', wirkung: 'Entblähend, krampflösend, verdauungsfördernd. Als Tee nach den Mahlzeiten.' },
      { name: 'Flohsamenschalen', wirkung: 'Regulieren Stuhlgang bei Durchfall und Verstopfung. 1-2 TL in viel Wasser 2x täglich.' },
      { name: 'Angelikawurzel', wirkung: 'Bitterstoff, stärkt die Verdauungskraft und löst Krämpfe. Tinktur vor den Mahlzeiten.' }
    ],
    stoffe: [
      { name: 'Probiotika', wirkung: 'Lactobacillus plantarum 299v und Bifidobacterium infantis 35624 haben Evidenz bei IBS. 10-20 Mrd. KBE täglich.' },
      { name: 'L-Glutamin', wirkung: 'Nährt die Darmschleimhaut und repariert Leaky Gut. 5-10 g in Wasser morgens nüchtern.' },
      { name: 'Zeolith', wirkung: 'Bindet Toxine und Gase im Darm, reduziert Blähungen. 3 g in Wasser morgens nüchtern.' },
      { name: 'Butyrat', wirkung: 'Kurzkettige Fettsäure, Hauptnahrung der Darmzellen. 300-600 mg verkapselt 2x täglich.' },
      { name: 'Verdauungsenzyme', wirkung: 'Unterstützen die Aufspaltung von Nahrung. Zu den Hauptmahlzeiten einnehmen.' }
    ],
    ernaehrung: {
      empfehlung: "Low-FODMAP-Diät hat die beste Evidenz bei IBS. Fermentierbare Kohlenhydrate (Fruktose, Laktose, Fruktane, Polyole) meiden. Regelmäßige Mahlzeiten, gut kauen, in Ruhe essen. Individuelle Trigger durch Ernährungstagebuch identifizieren.",
      staerkend: ["Reis", "Kartoffeln", "Karotten (gekocht)", "Zucchini", "Haferflocken (glutenfrei)", "Fenchel", "Ingwer", "Knochenbrühe", "Fermentierte Lebensmittel (in kleinen Mengen)", "Banane"],
      meiden: ["FODMAP-reiche Lebensmittel (Zwiebeln, Knoblauch, Hülsenfrüchte, Äpfel, Birnen)", "Gluten (bei Empfindlichkeit)", "Milchprodukte (bei Laktoseintoleranz)", "Koffein", "Alkohol", "Künstliche Süßstoffe", "Kohlensäure"],
      rezepte: [
        { name: 'Beruhigende Karottensuppe nach Moro', zutaten: '500g Karotten, 1L Wasser, 1 TL Salz, frischer Ingwer', zubereitung: 'Karotten in Wasser 90 Minuten (!) lang kochen. Pürieren, mit Wasser auf 1L auffüllen, salzen, Ingwer hinzufügen. Die lange Kochzeit bildet Oligosaccharide, die pathogene Keime binden.' },
        { name: 'Fenchel-Kamillen-Verdauungstee', zutaten: '1 TL Fenchelsamen (leicht angestoßen), 1 TL Kamillenblüten, 1 TL Pfefferminze, 300ml Wasser', zubereitung: 'Mit kochendem Wasser überbrühen, 10 Minuten ziehen lassen. Nach jeder Mahlzeit eine Tasse trinken.' }
      ]
    },
    fasten: {
      text: "Fasten gibt dem gereizten Darm die dringend benötigte Pause. Schon ein Fastentag pro Woche kann deutlich lindern. Längeres Fasten ermöglicht eine Neubesiedlung der Darmflora und die Reparatur der Darmschleimhaut. Vorsicht bei starker Untergewichtigkeit.",
      formen: ["1 Fastentag pro Woche", "Intervallfasten 16:8", "Brühefasten (3 Tage nur Knochenbrühe)", "Buchinger-Heilfasten (5-7 Tage)"],
      reinigung: ["Einläufe mit Kamillentee", "Zeolith zur Toxinbindung", "Flohsamenschalen als Darmreiniger", "Leberwickel abends"]
    },
    bewegung: {
      text: "Sanfte Bewegung fördert die Darmmotilität und reduziert Stress, den Haupttrigger des Reizdarms. Yoga hat in Studien die beste Wirkung bei IBS gezeigt. Bauchbewegungen massieren den Darm. Tiefes Bauchatmen aktiviert den Vagusnerv.",
      praktiken: ["Yoga (besonders Drehungen und Vorwärtsbeugen)", "Bauchatmung (Vagus-Aktivierung)", "Spaziergänge nach dem Essen", "Tai Chi", "Sanftes Bauchtraining"]
    },
    geist: {
      einheit: "Dein Darm ist dein zweites Gehirn und fühlt alles mit. Reizdarm sagt: Du versuchst, alles mit dem Kopf zu verarbeiten, aber der Bauch braucht auch gehört zu werden. Vertraue deinem Bauchgefühl und lerne, das Leben leichter zu nehmen.",
      affirmationen: ["Ich verdaue das Leben mit Leichtigkeit.", "Ich vertraue meinem Bauchgefühl.", "Ich lasse los, was mir nicht mehr dient.", "Mein Darm ist ruhig, stark und gesund."],
      meditation: "Lege deine Hände auf den Bauch und atme tief in den Bauchraum. Spüre die Wärme deiner Hände. Stelle dir vor, wie warmes, goldenes Licht deinen gesamten Verdauungstrakt durchflutet und jeden gereizten Bereich beruhigt. Sage innerlich: Ich vertraue dir, mein Bauch. Alles ist gut. 15 Minuten täglich.",
      energie: "Sakralchakra (Svadhisthana) und Solarplexuschakra (Manipura) stärken. Bauchmassage im Uhrzeigersinn. Vagusnerv-Stimulation durch Summen, Gurgeln oder Kältereize. EFT-Klopfen auf Verdauungsängste."
    },
    produkte: [
      { name: 'ZeoMont', desc: 'Bindet Toxine und Gase im Darm, reduziert Blähungen und Bauchschmerzen. Natürlicher Darmentlaster.', tags: ['#darm', '#blähungen', '#entgiftung'] },
      { name: 'Flohsamenschalen', desc: 'Regulieren den Stuhlgang sanft in beide Richtungen. Der beste Ballaststoff bei Reizdarm.', tags: ['#darm', '#stuhlgang', '#ballaststoff'] },
      { name: 'CBD-Öl', desc: 'Beruhigt das Darmnervensystem und reduziert stressbedingte Darmspasmen.', tags: ['#darm', '#stress', '#krampf'] },
      { name: 'Heiltee', desc: 'Kräuterteemischung für die Verdauung mit Fenchel, Kamille und Pfefferminze.', tags: ['#verdauung', '#beruhigung', '#kräuter'] },
      { name: 'Natron', desc: 'Neutralisiert Magensäure, reduziert Sodbrennen und gleicht den pH-Wert im Verdauungstrakt aus.', tags: ['#magen', '#säure', '#basisch'] }
    ]
  },

  {
    id: 'gicht',
    name: 'Gicht / Harnsäure',
    tags: ['#gicht', '#harnsäure', '#gelenke', '#purine', '#niere', '#entzündung'],
    koerper: "Gicht ist eine Stoffwechselerkrankung, bei der sich Harnsäurekristalle in Gelenken ablagern und akute, extrem schmerzhafte Entzündungen auslösen. Betroffen ist häufig das Großzehengrundgelenk (Podagra). Hyperurikämie (erhöhte Harnsäure) entsteht durch übermäßige Purinzufuhr, verminderte Ausscheidung über die Nieren oder übermäßige körpereigene Produktion. Chronische Gicht führt zu Gelenkzerstörung und Nierensteinen (Uratsteine). Risikofaktoren sind purinreiche Ernährung, Alkohol, Übergewicht und Niereninsuffizienz.",
    psychosomatik: {
      zitat: "Ich will alles kontrollieren und beherrsche mich, bis es mir in die Knochen fährt.",
      text: "Louise Hay verbindet Gicht mit dem Bedürfnis zu dominieren und übermäßiger Ungeduld und Wut. Dahlke sieht in Gicht kristallisierten Ärger, verhärtete Emotionen, die sich als harte Kristalle in den Gelenken manifestieren. Der Mensch ist starr in seinen Ansichten und lässt keine Flexibilität zu. Dethlefsen beschreibt Gicht als den Preis des Genusses ohne Maß und der Weigerung, sich zu bewegen und zu verändern."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin behandelte Gicht mit Brennnesselkuren zur Harnsäureausleitung. Birkenblättertee förderte die Nierenausscheidung. Kohlwickel zogen die Entzündung aus den Gelenken. Kirschsaftkuren waren ein bewährtes Hausmittel. Quark-Wickel kühlten akute Anfälle.",
      tcm: "In der TCM wird Gicht als Bi-Syndrom (schmerzhaftes Obstruktionssyndrom) durch Feuchte-Hitze klassifiziert. Wind, Feuchtigkeit und Hitze blockieren die Meridiane. Akupunktur an lokalen Schmerzpunkten und entfernten Punkten leitet die pathogenen Faktoren aus. Bi Xie (Dioscorea) transformiert die Feuchtigkeit.",
      ayurveda: "Ayurveda kennt Gicht als Vatarakta (Vata im Blut). Pitta erhitzt das Blut, Vata transportiert die Hitze in die Gelenke. Guduchi (Tinospora cordifolia) reinigt das Blut, Triphala reinigt den Darm. Bittere und zusammenziehende Geschmäcker reduzieren Pitta und Ama.",
      germanisch: "Nach Hamer stehen Gelenkprobleme in Verbindung mit Selbstwerteinbruch-Konflikten. Die Ablagerung von Kristallen in den Gelenken kann als Verstärkung des Gelenkgewebes in der Reparaturphase verstanden werden. Der Körper versucht, die Struktur zu stabilisieren.",
      alchemie: "Gicht zeigt alchemistisch eine Erstarrung des Sulphur-Prinzips. Das innere Feuer kristallisiert statt zu fließen. Spagyrische Mittel aus Herbstzeitlose (Colchicum, niedrig dosiert), Birke und Wacholder lösen die Kristallisation. Kalium-Salze (Sal) unterstützen die Ausleitung."
    },
    kraeuter: [
      { name: 'Brennnessel', wirkung: 'Fördert die Harnsäureausscheidung über die Nieren. 3-4 Tassen Tee täglich oder Frischsaft.' },
      { name: 'Birkenblätter', wirkung: 'Harntreibend, fördert die Ausscheidung. Als Tee 3-4 Tassen täglich mit viel Wasser.' },
      { name: 'Teufelskralle', wirkung: 'Entzündungshemmend und schmerzlindernd. 960 mg Extrakt 2x täglich.' },
      { name: 'Weidenrinde', wirkung: 'Natürliches Salicin, schmerzlindernd bei akuten Anfällen. 240 mg Salicin täglich.' },
      { name: 'Sellerie-Extrakt', wirkung: 'Reduziert Harnsäurespiegel und Entzündungen. 75 mg Extrakt 2x täglich.' }
    ],
    stoffe: [
      { name: 'Vitamin C', wirkung: 'Senkt den Harnsäurespiegel durch verstärkte renale Ausscheidung. 500-1000 mg täglich.' },
      { name: 'Natron', wirkung: 'Alkalisiert den Urin und fördert die Harnsäurelösung. 1/2 TL in Wasser 2-3x täglich.' },
      { name: 'Kirschen-Extrakt', wirkung: 'Anthocyane senken Harnsäure und hemmen Entzündungen. 500 mg Extrakt oder 200g frische Kirschen täglich.' },
      { name: 'Magnesium', wirkung: 'Alkalisch, unterstützt den Purinstoffwechsel. 400 mg als Citrat täglich.' },
      { name: 'Borax', wirkung: 'Bor beeinflusst den Kalzium- und Harnsäurestoffwechsel. Minimale Dosen nach Protokoll.' }
    ],
    ernaehrung: {
      empfehlung: "Purinarme Ernährung ist das A und O bei Gicht. Fleisch (besonders Innereien), bestimmte Fische, Alkohol (besonders Bier) und Fruktose erhöhen die Harnsäure massiv. Pflanzenbetonte, basische Ernährung mit viel Flüssigkeit senkt die Harnsäure natürlich.",
      staerkend: ["Kirschen (senken Harnsäure)", "Sellerie", "Gurken", "Wassermelone", "Kartoffeln", "Zucchini", "Milchprodukte (fettarm, purinarm)", "Eier", "Buchweizen"],
      meiden: ["Innereien (Leber, Niere)", "Fleischbrühe und Fleischextrakte", "Sardinen, Hering, Muscheln", "Bier und Spirituosen", "Fruktosehaltige Getränke", "Hülsenfrüchte in großen Mengen", "Spargel in großen Mengen"],
      rezepte: [
        { name: 'Entsäuernde Kirsch-Kur', zutaten: '500g frische Sauerkirschen oder 100ml Kirschsaftkonzentrat, 1L Wasser', zubereitung: 'Täglich 200g Kirschen essen oder 2x 50ml Kirschsaftkonzentrat verdünnt trinken. Über 4 Wochen durchführen. Senkt Harnsäure und Gichtanfall-Risiko.' },
        { name: 'Basen-Gemüsesuppe', zutaten: '2 Kartoffeln, 2 Zucchini, 2 Karotten, 1 Selleriestange, Petersilie, 1L Wasser', zubereitung: 'Gemüse kleinschneiden, in Wasser weich kochen. Leicht pürieren. Mit Petersilie garnieren. Stark basisch, purinarm und harntreibend.' }
      ]
    },
    fasten: {
      text: "Bei Gicht ist Fasten mit Bedacht durchzuführen. Totales Fasten kann kurzfristig die Harnsäure durch Ketonkörper-Konkurrenz erhöhen und einen Anfall auslösen. Sanftes Basenfasten oder Saftfasten mit viel Flüssigkeit ist sicherer und senkt langfristig die Harnsäure.",
      formen: ["Basenfasten (7-14 Tage, ideal)", "Saftfasten mit basischen Gemüsesäften", "Intervallfasten 16:8 (vorsichtig beginnen)"],
      reinigung: ["Viel trinken (3L täglich)", "Natron-Wasser zur Alkalisierung", "Basenbäder mit Natron", "Nierenwickel mit warmem Schafgarbentee"]
    },
    bewegung: {
      text: "Regelmäßige moderate Bewegung senkt den Harnsäurespiegel und hält die Gelenke beweglich. Bei akutem Gichtanfall das Gelenk schonen und kühlen. Im Intervall sanft mobilisieren. Übergewicht reduzieren ist zentral.",
      praktiken: ["Schwimmen (gelenkschonend)", "Radfahren", "Sanftes Yoga", "Nordic Walking", "Gymnastik für die betroffenen Gelenke"]
    },
    geist: {
      einheit: "Gicht zeigt, dass etwas in deinem Leben kristallisiert ist, erstarrt, verhärtet. Wo bist du unnachgiebig? Wo hältst du an Genuss, Kontrolle oder Ärger fest? Flexibilität im Denken und Fühlen löst die Kristalle in den Gelenken. Lerne, loszulassen und zu fließen.",
      affirmationen: ["Ich lasse los und erlaube dem Leben zu fließen.", "Ich bin flexibel in meinem Denken und Handeln.", "Ich vergebe und löse verhärtete Emotionen.", "Mein Körper ist rein und meine Gelenke sind frei."],
      meditation: "Visualisiere warmes, goldenes Wasser, das durch deine Gelenke fließt und sanft alle Kristalle auflöst. Sieh, wie die Kristalle sich in Licht verwandeln und ausgeschwemmt werden. Spüre, wie Weichheit und Flexibilität in jedes Gelenk zurückkehren. 15 Minuten täglich.",
      energie: "Akupressur an Niere 3 und Milz 6 zur Harnsäureausleitung. Handauflegen auf betroffene Gelenke. Meridianarbeit am Nieren- und Blasenmeridian. Energetische Entgiftung durch Fußbäder."
    },
    produkte: [
      { name: 'Natron', desc: 'Alkalisiert den Körper, löst Harnsäurekristalle und fördert deren Ausscheidung.', tags: ['#basisch', '#harnsäure', '#entsäuerung'] },
      { name: 'Brennnessel-Tee', desc: 'Fördert die Nierendurchspülung und Harnsäureausscheidung. Das Hauptkraut bei Gicht.', tags: ['#niere', '#harnsäure', '#entgiftung'] },
      { name: 'Kurkuma', desc: 'Curcumin hemmt Entzündungen in den Gichtgelenken und moduliert den Purinstoffwechsel.', tags: ['#entzündung', '#gelenke', '#gicht'] },
      { name: 'Borax', desc: 'Bor beeinflusst Kalzium- und Mineralstoffwechsel, traditionell bei Gelenkbeschwerden.', tags: ['#gelenke', '#mineral', '#knochen'] },
      { name: 'DMSO', desc: 'Äußerlich auf betroffene Gelenke für schnelle Schmerzlinderung und Entzündungshemmung.', tags: ['#schmerz', '#entzündung', '#äußerlich'] }
    ]
  },

  {
    id: 'erektionsstoerung',
    name: 'Erektionsstörungen / Libido / Potenz',
    tags: ['#erektion', '#potenz', '#libido', '#testosteron', '#mann', '#sexualität'],
    koerper: "Erektile Dysfunktion (ED) betrifft Millionen Männer und nimmt mit dem Alter zu. Ursachen sind vaskulärer Natur (Arteriosklerose, Durchblutungsstörungen), hormonell (Testosteronmangel), neurologisch (Diabetes, MS), medikamentös (Blutdrucksenker, Antidepressiva) oder psychisch (Stress, Versagensangst). ED ist oft ein Frühwarnsignal für Herz-Kreislauf-Erkrankungen, da die feinen Penisgefäße früher betroffen sind als größere Arterien. Niedriger Testosteronspiegel, Zinkmangel und Östrogenüberschuss spielen häufig eine Rolle.",
    psychosomatik: {
      zitat: "Ich habe die Verbindung zu meiner männlichen Kraft und meinem Selbstvertrauen verloren.",
      text: "Louise Hay sieht ED als Ausdruck von Versagensangst, Anspannung und Schuldgefühlen bezüglich der Sexualität. Dahlke beschreibt die Erektion als Symbol für Aufrichtung, Standhaftigkeit und Durchsetzungskraft. Erektionsstörungen zeigen einen Mann, der seine Kraft nicht leben darf oder nicht an sie glaubt. Dethlefsen betont: Potenzprobleme spiegeln Machtprobleme. Der Mann hat seine innere Autorität verloren oder traut sich nicht, sie zu leben."
    },
    traditionen: {
      volksmedizin: "In der europäischen Volksmedizin galt Brennnessel-Samen als potenzstärkendes Mittel. Petersilie, Sellerie und Pastinake waren als aphrodisierend bekannt. Bibernelle und Bockshornklee stärkten die Manneskraft. Rosmarin-Bäder belebten den Kreislauf im Beckenbereich. Honig mit Nüssen war ein klassisches Potenz-Tonikum.",
      tcm: "In der TCM ist Impotenz meist ein Nieren-Yang-Mangel. Die Niere speichert das Jing (Essenz), das für die Sexualkraft verantwortlich ist. Akupunktur am Punkt Ren 4 (Guanyuan) und Niere 3 stärkt das Nieren-Yang. Lu Rong (Hirschgeweih-Samt), Du Zhong (Eucommia) und Yin Yang Huo (Epimedium, Ziegenkraut) sind klassische Mittel.",
      ayurveda: "Ayurveda kennt eine eigene Fachrichtung für sexuelle Gesundheit: Vajikarana. Ashwagandha stärkt Shukra Dhatu (Samengewebe) und Ojas. Safran (Kesar) in warmer Milch ist ein klassisches Aphrodisiakum. Shilajit (Bergpech) stärkt die sexuelle Energie. Kapikacchu (Mucuna pruriens) erhöht L-DOPA und Testosteron.",
      germanisch: "Nach Hamer steht die Erektionsstörung in Verbindung mit einem sexuellen Konflikt oder Revierkonflikt. Die Unfähigkeit zur Erektion kann biologisch als Vermeidung von Konfrontation im Revierkontext verstanden werden. Die Lösung liegt in der Klärung der eigenen männlichen Rolle und Identität.",
      alchemie: "In der Alchemie entspricht die männliche Potenz dem Mars-Prinzip (Eisen) und dem Sulphur (Lebensfeuer). Impotenz zeigt ein erloschenes Feuer. Spagyrische Mars-Essenzen (Eisen, Brennnessel) und Sulphur-Mittel (Knoblauch, Ingwer) entzünden die Manneskraft. Aurum (Gold) stärkt das Selbstbewusstsein."
    },
    kraeuter: [
      { name: 'Maca', wirkung: 'Peruanische Wurzel, steigert Libido und Vitalität. 1,5-3 g Pulver täglich.' },
      { name: 'Tribulus terrestris', wirkung: 'Erhöht LH und freies Testosteron. 250-500 mg Extrakt 2x täglich.' },
      { name: 'Ashwagandha', wirkung: 'Steigert Testosteron, Samenqualität und sexuelle Ausdauer. 300-600 mg Extrakt täglich.' },
      { name: 'Ginseng (Panax)', wirkung: 'Verbessert die Erektionsfähigkeit und Durchblutung. 900 mg roter Ginseng 3x täglich.' },
      { name: 'Brennnesselsamen', wirkung: 'Traditionelles Potenzmittel, nährt die Nieren-Essenz. 1-2 TL täglich, geröstet oder roh.' }
    ],
    stoffe: [
      { name: 'Zink', wirkung: 'Essentiell für Testosteronproduktion und Spermienbildung. 25-50 mg täglich.' },
      { name: 'L-Arginin', wirkung: 'Aminosäure, die NO (Stickstoffmonoxid) bildet und Blutgefäße erweitert. 3-5 g täglich.' },
      { name: 'Vitamin D3', wirkung: 'Mangel senkt Testosteron signifikant. 4000-5000 IE täglich mit K2.' },
      { name: 'Magnesium', wirkung: 'Erhöht freies Testosteron und verbessert die Durchblutung. 400 mg abends.' },
      { name: 'Bor', wirkung: 'Erhöht freies Testosteron und senkt SHBG. 6-10 mg täglich (aus Borax).' }
    ],
    ernaehrung: {
      empfehlung: "Potenzfördernde Ernährung stärkt die Durchblutung, erhöht Testosteron und senkt Östrogen. Zinkreich, argininreich und reich an gesunden Fetten. Phytoöstrogene und Umweltöstrogene meiden. Alkohol reduziert Testosteron und verschlechtert die Erektion.",
      staerkend: ["Austern (zinkreich)", "Granatapfel (NO-Booster)", "Wassermelone (Citrullin)", "Nüsse (Walnüsse, Paranüsse)", "Eier (Cholesterin für Testosteron)", "Sellerie (Androstenon)", "Knoblauch (Allicin, Durchblutung)", "Ingwer", "Dunkle Schokolade"],
      meiden: ["Alkohol (besonders Bier, phytoöstrogen)", "Soja in großen Mengen", "Zucker", "Transfette", "Verarbeitetes Fleisch", "Kunststoffverpackungen (BPA, Xenoöstrogene)", "Lakritz (senkt Testosteron)"],
      rezepte: [
        { name: 'Potenz-Smoothie', zutaten: '200g Wassermelone, 1 Banane, 2 EL Hanfsamen, 1 TL Maca-Pulver, 100ml Granatapfelsaft, 1 EL Kakaopulver', zubereitung: 'Alles im Mixer pürieren. Enthält Citrullin (Wassermelone), Zink (Hanfsamen), Adaptogene (Maca) und Antioxidantien (Granatapfel). Morgens trinken.' },
        { name: 'Honig-Nuss-Energie', zutaten: '100g Walnüsse, 50g Kürbiskerne, 50g Paranüsse, 3 EL roher Honig, 1 TL Zimt', zubereitung: 'Nüsse grob hacken, mit Honig und Zimt mischen. 2 EL täglich als Potenz-Tonikum. Klassisches Rezept aus der orientalischen Medizin.' }
      ]
    },
    fasten: {
      text: "Kurzes Fasten kann Testosteron kurzfristig erhöhen (bis zu 180% nach 24h). Intervallfasten verbessert die Hormonsensitivität und reduziert Bauchfett (das Testosteron in Östrogen umwandelt). Zu langes Fasten senkt jedoch Testosteron. Die Balance ist entscheidend.",
      formen: ["Intervallfasten 16:8 (optimal für Testosteron)", "24-Stunden-Fasten 1x pro Woche", "Kurze Saftfastenkuren (3 Tage)"],
      reinigung: ["Leberreinigung (Leber baut Östrogen ab)", "Basenbäder mit Epsomit", "Kalte Duschen (Testosteron-Boost)", "Zeolith zur Xenoöstrogen-Ausleitung"]
    },
    bewegung: {
      text: "Krafttraining ist der stärkste natürliche Testosteron-Booster. Große Muskelgruppen trainieren (Kniebeuge, Kreuzheben). Beckenbodentraining stärkt die Erektionsfähigkeit direkt. Übertraining vermeiden, da es Testosteron senkt. HIIT-Training in kurzen Einheiten.",
      praktiken: ["Krafttraining mit schweren Gewichten (Grundübungen)", "HIIT (High-Intensity Interval Training)", "Beckenbodentraining (Kegel-Übungen)", "Yoga (besonders Beckenöffner)", "Kalte Duschen und Eisbaden"]
    },
    geist: {
      einheit: "Potenz ist mehr als Sexualität. Sie ist deine Fähigkeit, aufzustehen, dich aufzurichten und deine Kraft in die Welt zu bringen. Verbinde dich wieder mit deiner männlichen Urkraft. Du musst nicht perfekt sein, um kraftvoll zu sein. Erlaube dir, verletzlich und stark zugleich zu sein.",
      affirmationen: ["Ich bin in meiner männlichen Kraft und stehe aufrecht im Leben.", "Meine sexuelle Energie fließt frei und kraftvoll.", "Ich bin zuversichtlich, sicher und selbstbewusst.", "Mein Körper ist vital und voller Lebenskraft."],
      meditation: "Visualisiere ein warmes, rotes Licht im Beckenbereich, das sich mit jedem Atemzug ausbreitet. Spüre die Wärme und Kraft in deinem Becken. Verbinde diese Energie mit deinem Herzen (grünes Licht) und deinem Selbstbewusstsein (gelbes Licht im Solarplexus). Atme Kraft ein, atme Selbstzweifel aus. 15 Minuten täglich.",
      energie: "Wurzelchakra (Muladhara) und Sakralchakra (Svadhisthana) stärken. Mulabandha (Beckenboden-Energieverschluss) im Yoga. Kundalini-Energie sanft wecken. Sexuelle Energie sublimieren und im Körper verteilen (Tantra-Prinzip)."
    },
    produkte: [
      { name: 'Borax', desc: 'Bor erhöht freies Testosteron und senkt SHBG. Traditionell für Hormonbalance und Gelenkgesundheit.', tags: ['#testosteron', '#hormone', '#mann'] },
      { name: 'Knoblauch-Tinktur', desc: 'Allicin verbessert die Durchblutung, auch im Beckenbereich. Unterstützt NO-Produktion.', tags: ['#durchblutung', '#gefäße', '#herz'] },
      { name: 'Hanfsamen', desc: 'Reich an Zink, Magnesium und Omega-3 für die Testosteronproduktion und Samenqualität.', tags: ['#zink', '#hormone', '#ernährung'] },
      { name: 'Vitamin D3+K2', desc: 'Vitamin-D-Mangel senkt Testosteron signifikant. Supplementierung hebt den Spiegel nachweislich.', tags: ['#vitamin', '#testosteron', '#hormone'] },
      { name: 'Schwefel', desc: 'MSM unterstützt die Entgiftung von Xenoöstrogenen und stärkt das Bindegewebe.', tags: ['#entgiftung', '#östrogen', '#bindegewebe'] }
    ]
  },

  {
    id: 'immunschwaeche',
    name: 'Immunschwäche / Häufige Infekte',
    tags: ['#immunsystem', '#infekte', '#abwehr', '#erkältung', '#grippe', '#immunität'],
    koerper: "Häufige Infekte (mehr als 4-6 pro Jahr bei Erwachsenen) deuten auf eine geschwächte Immunabwehr hin. Das Immunsystem besteht aus angeborener (unspezifischer) und erworbener (spezifischer) Abwehr. Ursachen für Immunschwäche sind Nährstoffmängel (Vitamin D, Zink, Selen), chronischer Stress, Schlafmangel, Darmstörungen (80% des Immunsystems sitzen im Darm), Umweltgifte, Medikamente und chronische Infektionen (EBV). Auch ein überreagierendes Immunsystem (Allergien, Autoimmun) zeigt eine Fehlregulation.",
    psychosomatik: {
      zitat: "Ich bin nicht stark genug, mich gegen die Welt zu wehren.",
      text: "Louise Hay sieht Immunschwäche als mangelnden Selbstschutz und fehlende innere Stärke. Dahlke beschreibt das Immunsystem als Armee der Identität. Wer nicht weiß, wer er ist, kann sich nicht verteidigen. Häufige Infekte zeigen, dass der Mensch zu wenig Grenzen setzt und sich nicht genug wehrt. Dethlefsen betont: Jeder Infekt ist ein Konflikt, der auf körperlicher Ebene ausgetragen wird, weil er auf geistiger Ebene vermieden wird."
    },
    traditionen: {
      volksmedizin: "Knoblauch galt als das stärkste Immunmittel der Volksmedizin. Holunderblüten- und Holunderbeerentee stärkten die Abwehr. Propolis schützte vor Infekten. Hagebutte lieferte Vitamin C im Winter. Sauerkraut und Fermente versorgten den Darm. Kneipp-Anwendungen härteten den Körper ab.",
      tcm: "In der TCM schützt das Wei Qi (Abwehr-Qi) die Oberfläche. Wei-Qi-Schwäche entsteht durch Lungen- und Milz-Qi-Mangel. Huang Qi (Astragalus) ist das Hauptmittel zur Stärkung des Wei Qi. Reishi, Shiitake und Maitake stärken die Abwehr. Yu Ping Feng San (Jade-Windschutz-Pulver) ist die klassische Formel.",
      ayurveda: "Ayurveda stärkt die Immunität (Vyadhikshamatva) durch Rasayana-Therapie. Chyawanprash (Amla-basiertes Tonikum) ist das bekannteste Immunmittel. Tulsi (Heiliges Basilikum) schützt vor Infekten. Ashwagandha stärkt das Ojas. Goldene Milch mit Kurkuma ist ein tägliches Immuntonikum.",
      germanisch: "Nach Hamer sind Infekte Heilungsphasen. Erkältungen zeigen einen gelösten Stinkkonflikt (Nase) oder Trennungskonflikt (Bronchien). Das Immunsystem kämpft nicht gegen Erreger, sondern unterstützt den Heilungsprozess. Häufige Infekte bedeuten häufige Konfliktrezidive.",
      alchemie: "Spagyrisch ist das Immunsystem Ausdruck des Sulphur-Prinzips (Lebenskraft). Immunschwäche zeigt ein erlöschendes Lebensfeuer. Spagyrische Essenzen aus Echinacea, Propolis und Knoblauch stärken das Sulphur. Gold (Aurum) und Antimon sind die mineralischen Immunstärker. Das Immunsystem ist der innere Alchemist."
    },
    kraeuter: [
      { name: 'Echinacea', wirkung: 'Stimuliert die unspezifische Immunabwehr. 500 mg Extrakt 3x täglich bei ersten Anzeichen.' },
      { name: 'Astragalus', wirkung: 'Stärkt das Wei Qi, beugt Infekten vor. 500 mg Extrakt 2x täglich als Kur.' },
      { name: 'Holunder (Sambucus)', wirkung: 'Anthocyane wirken antiviral und immunstärkend. Als Saft, Tee oder Extrakt.' },
      { name: 'Cistus (Zistrose)', wirkung: 'Polyphenole bilden eine Schutzschicht gegen Viren. Als Tee 3x täglich in der Erkältungszeit.' },
      { name: 'Thymian', wirkung: 'Thymol wirkt antibakteriell und schleimlösend. Als Tee oder Sirup bei Atemwegsinfekten.' }
    ],
    stoffe: [
      { name: 'Vitamin D3', wirkung: 'Aktiviert die Killerzellen und das angeborene Immunsystem. 4000-5000 IE täglich mit K2.' },
      { name: 'Zink', wirkung: 'Essentiell für T-Zell-Funktion und Thymusaktivität. 15-30 mg täglich, bei Infekt kurzfristig höher.' },
      { name: 'Vitamin C', wirkung: 'Stärkt die Immunzellaktivität. 1-2 g täglich, bei akutem Infekt bis 5 g verteilt.' },
      { name: 'Selen', wirkung: 'Aktiviert Glutathionperoxidase und stärkt die Virenabwehr. 100-200 mcg als Selenmethionin.' },
      { name: 'Beta-Glucane', wirkung: 'Aus Pilzen oder Hefe, stimulieren Makrophagen und NK-Zellen. 250-500 mg täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Das Immunsystem wird über den Darm genährt. Probiotische und präbiotische Lebensmittel stärken die Darmflora. Zink- und Vitamin-C-reiche Kost, Knoblauch und Ingwer sind tägliche Immunstärker. Zucker unterdrückt das Immunsystem für Stunden nach dem Verzehr.",
      staerkend: ["Knoblauch (roh)", "Ingwer", "Kurkuma", "Sauerkraut und Kimchi", "Beeren (Vitamin C)", "Pilze (Shiitake, Reishi)", "Hühnerbrühe", "Zitrusfrüchte", "Brokkoli", "Spinat"],
      meiden: ["Zucker (unterdrückt Immunzellen für 5 Stunden)", "Alkohol", "Verarbeitete Lebensmittel", "Weißmehl", "Industrielle Pflanzenöle"],
      rezepte: [
        { name: 'Immun-Feuer-Trunk', zutaten: '50g Ingwer, 5 Knoblauchzehen, 2 Zitronen, 1 TL Kurkuma, 1 TL Cayenne, 2 EL Honig, 500ml Apfelessig', zubereitung: 'Ingwer und Knoblauch fein reiben, mit allen Zutaten in ein Glas füllen. 2 Wochen im Kühlschrank ziehen lassen, abseihen. Täglich 1 Schnapsglas als Immunstärker.' },
        { name: 'Holunder-Ingwer-Heiltee', zutaten: '2 EL getrocknete Holunderblüten, 3cm Ingwer, 1 TL Thymian, 1 TL Honig, 500ml Wasser', zubereitung: 'Ingwer reiben, mit Holunderblüten und Thymian übergießen. 10 Minuten ziehen lassen. Mit Honig trinken. Bei ersten Erkältungsanzeichen.' }
      ]
    },
    fasten: {
      text: "Fasten regeneriert das Immunsystem grundlegend. Studien zeigen, dass 72 Stunden Fasten das Immunsystem komplett erneuert, indem alte, geschädigte Immunzellen abgebaut und neue Stammzellen gebildet werden. Regelmäßiges Intervallfasten hält das Immunsystem jung.",
      formen: ["Intervallfasten 16:8 (täglich)", "72-Stunden-Wasserfasten (1-2x jährlich zur Immunerneuerung)", "Buchinger-Heilfasten (7 Tage, Immunreset)", "Saftfasten (3-5 Tage)"],
      reinigung: ["Darmreinigung (80% des Immunsystems)", "Zeolith zur Entgiftung", "Leberwickel", "Kneipp-Güsse zur Abhärtung", "Basenbäder"]
    },
    bewegung: {
      text: "Moderate Bewegung ist einer der stärksten Immunstärker. 30-45 Minuten moderater Sport erhöht die NK-Zellaktivität für 24 Stunden. Übertraining schwächt dagegen das Immunsystem stark (Open-Window-Effekt). Regelmäßigkeit ist wichtiger als Intensität.",
      praktiken: ["Moderate Ausdauerbewegung (Walking, Radfahren)", "Waldbaden (Terpene stärken NK-Zellen)", "Kneipp-Anwendungen und kalte Duschen", "Yoga", "Qi Gong"]
    },
    geist: {
      einheit: "Dein Immunsystem ist der Hüter deiner Identität. Es unterscheidet Selbst von Fremd, Eigenes von Fremdem. Stärke dein Immunsystem, indem du dich selbst erkennst und stärkst. Wer weiß, wer er ist, hat eine starke Abwehr auf allen Ebenen.",
      affirmationen: ["Mein Immunsystem ist stark und wachsam.", "Ich bin geschützt und sicher.", "Mein Körper weiß, wie er sich verteidigt.", "Ich stärke mich jeden Tag auf allen Ebenen."],
      meditation: "Visualisiere dein Immunsystem als eine Armee aus leuchtenden, weißen Lichtkriegern, die deinen Körper durchströmen. Sie erkennen sofort, was nicht zu dir gehört, und transformieren es in Licht. Fühle dich geschützt und geborgen in dieser Kraft. 10-15 Minuten täglich.",
      energie: "Thymusdrüse klopfen (oberer Brustbereich). Alle Chakren stärken für ein vollständiges Energiefeld. Aura-Stärkungsübungen. Reiki als tägliche Energiedusche. Atemübungen zur Immunstärkung (Wim-Hof-Methode)."
    },
    produkte: [
      { name: 'Vitamin D3+K2', desc: 'Das wichtigste Immunvitamin. Mangel ist die häufigste Ursache für Immunschwäche in unseren Breiten.', tags: ['#vitamin', '#immunsystem', '#winter'] },
      { name: 'Propolis', desc: 'Das natürliche Antibiotikum der Bienen. Breitband-antimikrobiell und immunstärkend.', tags: ['#bienen', '#antibiotisch', '#immunsystem'] },
      { name: 'Kolloidales Silber', desc: 'Antimikrobiell bei akuten Infekten. Kurweise als natürliches Breitband-Antimikrobikum.', tags: ['#antimikrobiell', '#infekt', '#silber'] },
      { name: 'Hericium', desc: 'Löwenmähne-Pilz stärkt die Immunabwehr und die Darmbarriere (Immunsitz Darm).', tags: ['#vitalpilz', '#darm', '#immunsystem'] },
      { name: 'Oregano-Öl', desc: 'Carvacrol wirkt antibakteriell, antiviral und antifungal. Das stärkste ätherische Öl gegen Infekte.', tags: ['#antibakteriell', '#antiviral', '#ätherisch'] }
    ]
  },

  {
    id: 'schmerzen',
    name: 'Chronische Schmerzen (allgemein)',
    tags: ['#schmerzen', '#chronisch', '#schmerzgedächtnis', '#fibromyalgie', '#nervenschmerz'],
    koerper: "Chronische Schmerzen bestehen länger als drei Monate und haben sich oft von der ursprünglichen Ursache verselbstständigt. Das Schmerzgedächtnis hält die Schmerzsignale aufrecht, auch wenn das Gewebe längst geheilt ist. Zentrale Sensibilisierung, Neuroinflammation und gestörte Schmerzverarbeitung spielen eine Rolle. Häufige Formen sind Rücken-, Kopf-, Nerven-, Gelenk- und Muskelschmerzen. Fibromyalgie, Neuropathien und myofasziale Schmerzsyndrome gehören in diese Kategorie. Schlafmangel, Stress und Depression verschlimmern chronische Schmerzen.",
    psychosomatik: {
      zitat: "Mein Schmerz ist der Schrei meiner Seele nach Aufmerksamkeit.",
      text: "Louise Hay sieht Schmerzen als Ausdruck von Schuld und dem Bedürfnis nach Bestrafung. Dahlke beschreibt chronische Schmerzen als eine Lektion, die nicht verstanden wurde. Der Schmerz fragt: Was willst du nicht fühlen? Was willst du nicht sehen? Dethlefsen betont: Schmerz macht bewusst. Er zwingt uns, unsere Aufmerksamkeit auf eine Stelle zu richten, die wir ignoriert haben. Chronischer Schmerz zeigt einen chronisch ignorierten Lebensbereich."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte zahlreiche Schmerzmittel: Weidenrinde (natürliches Aspirin), Mädesüß, Arnika-Salbe äußerlich, Johanniskraut-Öl bei Nervenschmerzen. Beinwellwickel bei Gelenkschmerzen. Teufelskralle bei Rückenschmerzen. Bienengiftsalbe und Capsaicin-Pflaster wärmten und durchbluteten schmerzende Stellen.",
      tcm: "In der TCM gilt: Wo Qi fließt, ist kein Schmerz. Wo Stagnation ist, ist Schmerz. Chronische Schmerzen sind immer Qi- und/oder Blut-Stase. Akupunktur bewegt Qi und Blut und ist bei chronischen Schmerzen wissenschaftlich belegt. Moxibustion wärmt bei Kälteschmerzen. Tuina-Massage löst Blockaden.",
      ayurveda: "Ayurveda ordnet Schmerzen primär Vata zu, dem Prinzip von Bewegung und Nervensystem. Aggraviertes Vata trocknet Gewebe aus und erhöht die Schmerzempfindlichkeit. Warme Ölanwendungen (Abhyanga, Kati Basti) beruhigen Vata. Guggulu-Präparate wirken entzündungshemmend und schmerzlindernd.",
      germanisch: "Nach Hamer ist Schmerz ein sinnvolles biologisches Signal. In der Heilungsphase treten Schmerzen auf, weil Gewebe repariert und Schwellung Druck auf Nerven ausübt. Chronische Schmerzen zeigen wiederkehrende Konfliktmuster (Rezidive). Die dauerhafte Lösung ist die endgültige Konfliktauflösung.",
      alchemie: "Schmerz zeigt spagyrisch eine Blockade des Mercurius-Flusses (Lebensstrom). Das Sulphur (Feuer) brennt am falschen Ort. Spagyrische Essenzen aus Weidenrinde, Mädesüß und Weihrauch lösen die Blockade. Aurum muriaticum (Goldchlorid) hebt die Schwingung über den Schmerz."
    },
    kraeuter: [
      { name: 'Weidenrinde', wirkung: 'Natürliches Salicin, entzündungshemmend und schmerzlindernd. 240 mg Salicin täglich.' },
      { name: 'Kurkuma', wirkung: 'Curcumin hemmt COX-2 und NF-kB. 500-1000 mg mit Piperin 2-3x täglich.' },
      { name: 'Weihrauch', wirkung: 'Boswelliasäuren hemmen 5-Lipoxygenase. Besonders bei Gelenk- und Nervenschmerzen. 300 mg 3x täglich.' },
      { name: 'Teufelskralle', wirkung: 'Harpagosid wirkt entzündungshemmend. Besonders bei Rücken- und Gelenkschmerzen. 600-1200 mg Extrakt täglich.' },
      { name: 'Johanniskraut', wirkung: 'Äußerlich als Rotöl bei Nervenschmerzen und Verspannungen. Innerlich stimmungsaufhellend.' }
    ],
    stoffe: [
      { name: 'DMSO', wirkung: 'Dimethylsulfoxid, äußerlich als Schmerzträger und Entzündungshemmer. 50-70% Lösung auf die Haut.' },
      { name: 'MSM', wirkung: 'Organischer Schwefel, reduziert Schmerzen und Entzündungen. 3-6 g täglich.' },
      { name: 'Magnesium', wirkung: 'Entspannt Muskulatur und Nerven. 400-600 mg als Glycinat oder Citrat.' },
      { name: 'CBD', wirkung: 'Wirkt über das Endocannabinoid-System schmerzlindernd und entzündungshemmend. 20-40 mg 2x täglich.' },
      { name: 'PEA (Palmitoylethanolamid)', wirkung: 'Körpereigenes Schmerzmittel, hemmt Mastzellen und Gliazellen. 300-600 mg 2x täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Entzündungshemmende Ernährung ist die Basis der Schmerztherapie. Omega-3-Fettsäuren hemmen Prostaglandine, Antioxidantien schützen Nervenzellen. Zucker und Weizen fördern Entzündungen und damit Schmerzen. Der Darm spielt über die Darm-Hirn-Achse eine zentrale Rolle.",
      staerkend: ["Fettreicher Fisch", "Kurkuma und Ingwer", "Beeren", "Grünes Blattgemüse", "Walnüsse", "Olivenöl", "Kirschsaft (Anthocyane)", "Knochenbrühe", "Hanfsamen"],
      meiden: ["Zucker", "Weizen", "Industrielle Pflanzenöle", "Alkohol", "Verarbeitetes Fleisch", "Glutamat", "Aspartam"],
      rezepte: [
        { name: 'Anti-Schmerz-Paste', zutaten: '2 TL Kurkuma, 1 TL Ingwerpulver, 1/2 TL schwarzer Pfeffer, 1 EL Kokosöl, 1 TL Honig', zubereitung: 'Alles zu einer Paste verrühren. 1 TL 2-3x täglich mit warmem Wasser einnehmen. Synergie aus Curcumin, Gingerol und Piperin.' },
        { name: 'DMSO-Schmerzwickel', zutaten: '50ml DMSO 50%, 5 Tropfen Weihrauchöl, 3 Tropfen Pfefferminzöl, Baumwolltuch', zubereitung: 'DMSO mit ätherischen Ölen mischen. Auf das Baumwolltuch geben und auf die schmerzende Stelle legen. 30-60 Minuten einwirken lassen.' }
      ]
    },
    fasten: {
      text: "Fasten kann chronische Schmerzen dramatisch reduzieren. Die Autophagie baut entzündliche Substanzen ab. Nach 2-3 Fastentagen berichten viele Schmerzpatienten von deutlicher Linderung. Regelmäßiges Intervallfasten hält den Schmerzlevel dauerhaft niedrig.",
      formen: ["Buchinger-Heilfasten (7-14 Tage, beste Evidenz bei Schmerz)", "Intervallfasten 16:8 (täglich)", "Wasserfasten (3-5 Tage)", "FMD nach Longo"],
      reinigung: ["Basenbäder mit Natron und Epsomit", "Leberwickel", "Darmreinigung", "Ölziehen"]
    },
    bewegung: {
      text: "Bewegung ist das wichtigste Mittel gegen chronische Schmerzen, auch wenn es paradox klingt. Bewegung setzt körpereigene Endorphine frei, verbessert die Durchblutung und trainiert das Schmerzverarbeitungssystem. Langsam beginnen und steigern. Vermeidung verstärkt Schmerzen.",
      praktiken: ["Sanftes Yoga (Yin Yoga, Restorative Yoga)", "Schwimmen in warmem Wasser", "Walking und Spaziergänge", "Tai Chi und Qi Gong", "Faszientraining mit Rollen", "Progressive Muskelentspannung nach Jacobson"]
    },
    geist: {
      einheit: "Chronischer Schmerz ist ein Ruf deines Körpers, der gehört werden will. Er fragt: Was tut dir weh im Leben? Welchen Schmerz vermeidest du zu fühlen? Wenn du den emotionalen Schmerz annimmst und durchfühlst, kann der körperliche Schmerz sich auflösen. Dein Körper spricht die Wahrheit.",
      affirmationen: ["Ich höre meinen Körper und nehme seine Botschaft an.", "Ich lasse den Schmerz los und erlaube Heilung.", "Ich bin mehr als mein Schmerz. Ich bin Bewusstsein.", "Mit jedem Atemzug fließt Heilung durch meinen Körper."],
      meditation: "Richte deine volle Aufmerksamkeit auf den Schmerzpunkt, ohne zu bewerten. Atme in den Schmerz hinein und beobachte ihn wie eine Wolke, die sich verändert. Frage den Schmerz: Was willst du mir sagen? Höre zu. Dann umhülle den Schmerzpunkt mit goldenem Licht und lasse ihn sich auflösen. 20 Minuten täglich.",
      energie: "Akupressur auf Dickdarm 4 (Hegu, allgemeiner Schmerzpunkt). Reiki auf schmerzende Stellen. Energetisches Schmerzatmen: In den Schmerz einatmen, Schmerz ausatmen. EFT-Klopfen auf die Schmerzintensität. Cranio-Sacral-Therapie."
    },
    produkte: [
      { name: 'DMSO', desc: 'Dimethylsulfoxid dringt tief ins Gewebe ein und wirkt schmerzlindernd, entzündungshemmend und abschwellend.', tags: ['#schmerz', '#entzündung', '#äußerlich'] },
      { name: 'CBD-Öl', desc: 'Moduliert die Schmerzwahrnehmung über das Endocannabinoid-System. Natürliches Schmerzmittel ohne Suchtpotential.', tags: ['#schmerz', '#entzündung', '#nerven'] },
      { name: 'Weihrauch', desc: 'Boswelliasäuren hemmen Entzündungskaskaden und lindern besonders Gelenk- und Nervenschmerzen.', tags: ['#entzündung', '#gelenke', '#nerven'] },
      { name: 'Magnesium-Öl', desc: 'Äußerlich auf verspannte Muskulatur auftragen. Löst Krämpfe und lindert Muskelschmerzen.', tags: ['#muskel', '#krampf', '#entspannung'] },
      { name: 'Kratom', desc: 'Pflanzliches Analgetikum mit opioidähnlicher Wirkung. Für starke Schmerzen, verantwortungsvoller Umgang nötig.', tags: ['#schmerz', '#stark', '#pflanzlich'] }
    ]
  },

  {
    id: 'sucht',
    name: 'Sucht / Abhängigkeit / Entzug',
    tags: ['#sucht', '#abhängigkeit', '#entzug', '#dopamin', '#alkohol', '#rauchen'],
    koerper: "Sucht ist eine chronische Erkrankung des Belohnungssystems im Gehirn. Dopaminrezeptoren werden herunterreguliert, sodass immer mehr Substanz für den gleichen Effekt nötig ist (Toleranz). Entzugssymptome (Zittern, Schwitzen, Angst, Schlaflosigkeit, Schmerzen) treiben den Konsum an. Betroffen sind Alkohol, Nikotin, Opiate, Benzodiazepine, Cannabis, Koffein, Zucker, aber auch Verhaltenssüchte (Handy, Glücksspiel, Pornografie). Nährstoffmängel, Darmstörungen und Leberbelastung begleiten substanzgebundene Süchte.",
    psychosomatik: {
      zitat: "Ich suche im Außen, was ich nur in mir selbst finden kann: Erfüllung, Liebe, Frieden.",
      text: "Louise Hay sieht Sucht als Flucht vor sich selbst, als Angst und Unwissenheit, sich selbst zu lieben. Dahlke beschreibt Sucht als die Suche nach Ganzheit auf dem falschen Weg. Das Suchtmittel simuliert kurzfristig den Zustand der Einheit, den die Seele wirklich sucht. Dethlefsen betont: Jede Sucht ist eine Sehnsucht. Hinter der Sucht steht die Suche nach dem Göttlichen, nach Transzendenz, nach dem Aufgehen in etwas Größerem. Der Weg zur Heilung führt über die Erfüllung dieser tiefen Sehnsucht."
    },
    traditionen: {
      volksmedizin: "In der Volksmedizin wurde Alkoholismus mit Bitterkräutern behandelt, die den Leberstoffwechsel unterstützten. Baldrian und Hopfen halfen bei Entzugsschlaflosigkeit. Johanniskraut hob die Stimmung. Knoblauch und Mariendistel reinigten die Leber. Hafer-Tinktur (Avena sativa) galt als nervenstärkend und suchtmildernd.",
      tcm: "Die TCM sieht Sucht als Mangel an Shen (Geist) und Leere im Herzen. Die Substanz füllt vorübergehend die innere Leere. Leber-Qi-Stagnation und Herz-Blut-Mangel sind häufige Muster. Akupunktur am NADA-Protokoll (5 Ohrpunkte) ist wissenschaftlich bei Suchtbehandlung belegt. Reishi beruhigt den Shen.",
      ayurveda: "Ayurveda sieht Sucht als Tamas-Zustand (Trägheit, Dunkelheit) des Geistes. Das Verdauungsfeuer (Agni) ist erloschen, Ama (Toxine) vernebeln den Geist. Brahmi und Shankhapushpi klären den Geist. Panchakarma-Reinigung entfernt die Toxine. Sattvische Ernährung hebt die Bewusstseinsebene.",
      germanisch: "Nach Hamer ist Sucht oft die Kompensation eines aktiven biologischen Konflikts. Die Substanz lindert den Konfliktstress vorübergehend. Alkoholismus kann mit einem Existenzangst-Konflikt (Nierensammelrohr) oder Revierkonflikt verbunden sein. Die dauerhafte Lösung ist die Konfliktauflösung.",
      alchemie: "In der Alchemie ist Sucht die Verwechslung des materiellen Lösungsmittels (Solve) mit dem geistigen. Der Mensch versucht, die innere Transformation (Opus Magnum) durch äußere Substanzen zu ersetzen. Die wahre Lösung liegt in der inneren Alchemie: der Verwandlung des niederen Selbst in Gold. Spagyrische Essenzen unterstützen diesen Prozess."
    },
    kraeuter: [
      { name: 'Kudzu (Pueraria lobata)', wirkung: 'Reduziert Alkoholverlangen signifikant. Isoflavone beeinflussen das Belohnungssystem. 500 mg Extrakt 3x täglich.' },
      { name: 'Johanniskraut', wirkung: 'Natürliches Antidepressivum, hebt Serotonin. Hilft bei Stimmungstiefs im Entzug. 600-900 mg Extrakt täglich.' },
      { name: 'Baldrian', wirkung: 'Beruhigend und schlaffördernd im Entzug. 300-600 mg Extrakt abends.' },
      { name: 'Passionsblume', wirkung: 'Angstlösend ohne Suchtpotential. Hilft bei Entzugsangst. 500 mg Extrakt 2-3x täglich.' },
      { name: 'Mariendistel', wirkung: 'Silymarin regeneriert die Leber, die durch Substanzmissbrauch geschädigt ist. 200-400 mg 3x täglich.' }
    ],
    stoffe: [
      { name: 'NAC (N-Acetylcystein)', wirkung: 'Reguliert Glutamat im Belohnungssystem, reduziert Suchtdruck. 1200-2400 mg täglich.' },
      { name: 'L-Glutamin', wirkung: 'Reduziert Zuckersucht und Alkoholverlangen. Nährt das Gehirn. 2-5 g 3x täglich.' },
      { name: 'Magnesium', wirkung: 'Beruhigt das übererregte Nervensystem im Entzug. 400-600 mg als Glycinat.' },
      { name: 'B-Vitamine', wirkung: 'Alkohol- und Drogenkonsum deplettiert B-Vitamine massiv. Hochdosierter B-Komplex täglich.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Repariert geschädigte Nervenzellmembranen und reduziert Neuroinflammation. 3-4 g EPA/DHA täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Bei Sucht ist der Blutzucker oft instabil und das Belohnungssystem entgleist. Regelmäßige, proteinreiche Mahlzeiten stabilisieren den Blutzucker und damit die Stimmung. Zucker ist eine Einstiegsdroge und muss gemieden werden. Nährstoffmängel konsequent ausgleichen.",
      staerkend: ["Eier (Cholin, Protein)", "Nüsse und Samen", "Fettreicher Fisch", "Grünes Gemüse", "Haferflocken", "Fermentiertes Gemüse", "Knochenbrühe", "Avocado", "Süßkartoffeln"],
      meiden: ["Zucker (aktiviert Suchtschaltkreise)", "Koffein (in der Entzugsphase)", "Weißmehl", "Künstliche Süßstoffe", "Verarbeitete Lebensmittel", "Alkohol in jeder Form (bei Alkoholsucht)"],
      rezepte: [
        { name: 'Stabilisierender Nährstoff-Shake', zutaten: '1 Banane, 2 EL Hanfsamen, 1 EL Spirulina, 1 EL Kakaopulver, 200ml Mandelmilch, 1 TL Zimt', zubereitung: 'Alles mixen. Stabilisiert den Blutzucker, liefert B-Vitamine, Magnesium und Tryptophan. Morgens und bei Suchtdruck trinken.' },
        { name: 'Leber-Reinigungs-Tee', zutaten: '1 TL Mariendistelsamen (gemörsert), 1 TL Löwenzahnwurzel, 1 TL Pfefferminze, 300ml Wasser', zubereitung: 'Samen mit kochendem Wasser überbrühen, 15 Minuten ziehen lassen. 3 Tassen täglich zur Leberregeneration.' }
      ]
    },
    fasten: {
      text: "Fasten kann ein mächtiges Werkzeug sein, um Suchtmuster zu durchbrechen. Es lehrt den Körper und Geist, ohne äußere Stimulation auszukommen. Intervallfasten reguliert das Dopaminsystem. Bei schwerem Entzug sollte Fasten nur unter Begleitung erfolgen.",
      formen: ["Dopamin-Fasten (bewusster Reizentzug)", "Intervallfasten 16:8", "Saftfasten (3-5 Tage, nicht bei Alkoholentzug)", "Digitales Fasten als Begleitung"],
      reinigung: ["Leberreinigung (zentral bei Alkohol- und Drogensucht)", "Zeolith zur Toxinbindung", "Basenbäder zur Entgiftung über die Haut", "Darmreinigung (Darm-Hirn-Achse)"]
    },
    bewegung: {
      text: "Bewegung ist einer der wirksamsten natürlichen Dopaminquellen. Sport reduziert Suchtdruck, hebt die Stimmung und gibt dem Tag Struktur. Laufen kann ein natürliches High erzeugen. In der Entzugsphase ist Bewegung das wichtigste Werkzeug gegen Rückfall.",
      praktiken: ["Joggen (Runner's High als natürlicher Dopaminschub)", "Krafttraining (Selbstwertgefühl)", "Yoga (Achtsamkeit und Körperbewusstsein)", "Schwimmen", "Kampfsport (kontrollierte Aggression)", "Wandern in der Natur"]
    },
    geist: {
      einheit: "Sucht ist die Suche nach Ganzheit. Du suchst in der Substanz, was nur in dir selbst zu finden ist: Frieden, Liebe, Verbindung. Der erste Schritt ist, die Sehnsucht hinter der Sucht zu erkennen. Der zweite ist, diese Sehnsucht auf echtem Weg zu stillen. Du bist nicht deine Sucht. Du bist das Bewusstsein, das die Sucht beobachtet.",
      affirmationen: ["Ich bin frei und wähle bewusst, was in meinen Körper kommt.", "Ich finde Erfüllung in mir selbst.", "Ich bin stärker als jede Gewohnheit.", "Ich verdiene ein klares, waches, freudvolles Leben."],
      meditation: "Wenn Suchtdruck aufsteigt, halte inne. Setze dich hin, schließe die Augen und beobachte das Verlangen wie eine Welle, die aufsteigt und wieder abflacht. Nenne es beim Namen: Da ist Verlangen. Atme 10 Mal tief ein und aus. Die Welle wird vorbeigehen. Du bist der Ozean, nicht die Welle. Surfe die Welle, statt von ihr verschlungen zu werden.",
      energie: "Sakralchakra (Svadhisthana) reinigen und stärken (Sitz der Sucht). Herzchakra öffnen als Alternative zum Suchtdruck. EFT-Klopfen bei akutem Verlangen. Yoga Nidra zur tiefen Entspannung ohne Substanz. 12-Schritte-Programm als spiritueller Weg."
    },
    produkte: [
      { name: 'Kratom', desc: 'Pflanzliche Alternative bei Opiat-Entzug, mildert Entzugssymptome. Verantwortungsvoller, zeitlich begrenzter Einsatz.', tags: ['#entzug', '#opiat', '#pflanzlich'] },
      { name: 'CBD-Öl', desc: 'Reduziert Angst und Suchtdruck ohne psychoaktive Wirkung. Unterstützt das Nervensystem im Entzug.', tags: ['#angst', '#entzug', '#nerven'] },
      { name: 'Mariendistel', desc: 'Silymarin regeneriert die Leber und schützt sie vor weiteren Schäden. Essentiell bei Alkohol- und Drogensucht.', tags: ['#leber', '#entgiftung', '#regeneration'] },
      { name: 'Johanniskraut-Tee', desc: 'Natürliches Antidepressivum, hebt die Stimmung im Entzug und reduziert emotionale Tiefs.', tags: ['#stimmung', '#depression', '#nerven'] },
      { name: 'Amanita', desc: 'Microdosing mit Fliegenpilz-Extrakt kann Suchtmuster unterbrechen. Nur unter fachkundiger Anleitung.', tags: ['#microdosing', '#sucht', '#bewusstsein'] }
    ]
  },

  {
    id: 'trauma',
    name: 'Trauma / PTBS / Seelische Verletzung',
    tags: ['#trauma', '#ptbs', '#ptsd', '#seele', '#heilung', '#nervensystem'],
    koerper: "Trauma manifestiert sich tief im Körper. Das autonome Nervensystem bleibt in einem Zustand der Übererregung (Sympathikus) oder Erstarrung (dorsaler Vagus) stecken. Symptome sind Flashbacks, Hypervigilanz, Schlafstörungen, Panikattacken, Konzentrationsstörungen, emotionale Taubheit, Dissoziation und chronische Muskelverspannungen. Der Körper speichert Trauma in der Faszie, der Muskulatur und dem Nervensystem. Chronische Entzündungen, Immunstörungen und Hormonstörungen sind häufige Begleiterscheinungen.",
    psychosomatik: {
      zitat: "Mein Körper erinnert sich an das, was mein Geist vergessen will.",
      text: "Louise Hay sieht Trauma als tiefe Wunde, die nach Liebe und Vergebung ruft. Dahlke beschreibt Trauma als eine Erfahrung, die nicht integriert werden konnte und deshalb im Körper eingefroren ist. Der Körper lebt im Daueralarm, als wäre die Gefahr noch gegenwärtig. Dethlefsen betont, dass jedes Trauma auch eine Initiationsmöglichkeit ist, ein Tor zur Transformation, wenn es durchgearbeitet und integriert wird. Peter Levine (Somatic Experiencing) zeigt: Der Schlüssel liegt im Körper, nicht im Verstand."
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin kannte beruhigende Kräuter für den geschockten Körper: Baldrian, Lavendel, Melisse und Herzgespann. Schütteln und Zittern wurde intuitiv als heilsam erkannt (der Körper entlädt sich). Warme Bäder mit Lavendel beruhigten das Nervensystem. Bachblüten (Rescue Remedy/Star of Bethlehem) wurden bei Schock eingesetzt.",
      tcm: "In der TCM wird Trauma als Shen-Störung (gestörter Geist) verstanden. Der Shen residiert im Herzen und wird durch Schock aus seiner Wohnung vertrieben. Herz-Blut-Mangel und Nieren-Jing-Schwäche entstehen durch Trauma. An Mian (Schlaf-Formel) und Gui Pi Tang (Milz-Herz-Stärkung) beruhigen den Shen. Akupunktur am Punkt Du 20 (Baihui) verankert den Geist.",
      ayurveda: "Trauma stört Vata massiv und führt zu Unruhe, Angst und Dissoziation. Warme, erdende Maßnahmen sind zentral: Shirodhara (Stirnguss mit warmem Öl) beruhigt das Nervensystem tiefgreifend. Ashwagandha stärkt die Widerstandskraft. Nasya (Nasenöl) wirkt direkt auf das Gehirn. Regelmäßige Abhyanga (Ölmassage) erdet den Körper.",
      germanisch: "Nach Hamer ist Trauma ein DHS (Dirk-Hamer-Syndrom): Ein biologischer Schock, der unerwartet, dramatisch, isolativ und ohne Lösungsstrategie erlebt wird. Der Schock hinterlässt einen Hamerschen Herd im Gehirn, der ein Organprogramm steuert. Die Lösung liegt in der bewussten Konfrontation und Integration des Konflikts.",
      alchemie: "In der Alchemie ist Trauma die Nigredo, die schwärzeste Phase des Opus Magnum. Das alte Selbst muss sterben, damit das neue geboren werden kann. Spagyrische Essenzen aus Rose (Liebe), Bernstein (Schutz) und Rescue-Mischungen unterstützen den Prozess. Gold (Sonne) und Silber (Mond) harmonisieren männliche und weibliche Aspekte der Seele."
    },
    kraeuter: [
      { name: 'Ashwagandha', wirkung: 'Adaptogen, senkt Cortisol, stärkt die Stressresilienz. 300-600 mg standardisierter Extrakt täglich.' },
      { name: 'Lavendel', wirkung: 'Beruhigt das Nervensystem, reduziert Angst und verbessert den Schlaf. Als Tee, Tinktur oder ätherisches Öl.' },
      { name: 'Passionsblume', wirkung: 'Angstlösend ohne Suchtpotential. GABA-erg wirkend. 500 mg Extrakt 2-3x täglich.' },
      { name: 'Rhodiola rosea', wirkung: 'Adaptogen, stärkt die Stresstoleranz und die emotionale Belastbarkeit. 200-400 mg morgens.' },
      { name: 'Baldrian', wirkung: 'Beruhigend, schlaffördernd, löst Anspannung. 300-600 mg abends oder bei Bedarf.' }
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Das Anti-Stress-Mineral, beruhigt übererregtes Nervensystem. 400-600 mg als Glycinat abends.' },
      { name: 'GABA', wirkung: 'Hemmender Neurotransmitter, beruhigt übererregtes Nervensystem. 500-750 mg bei Bedarf.' },
      { name: 'L-Theanin', wirkung: 'Aus Grüntee, fördert Alpha-Wellen im Gehirn (wache Entspannung). 200 mg 2x täglich.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Reparieren Nervenzellmembranen und reduzieren Neuroinflammation. 3-4 g EPA/DHA täglich.' },
      { name: 'Vitamin B-Komplex', wirkung: 'Nervenvitamine, die durch chronischen Stress deplettiert werden. Hochdosierter B-Komplex täglich.' }
    ],
    ernaehrung: {
      empfehlung: "Bei Trauma ist Ernährung ein Anker und ein Akt der Selbstfürsorge. Das Nervensystem braucht stabile Nährstoffversorgung: gesunde Fette für die Nervenzellmembranen, Aminosäuren für Neurotransmitter, Mineralstoffe für Entspannung. Regelmäßige Mahlzeiten geben dem Tag Struktur und Sicherheit.",
      staerkend: ["Fettreicher Fisch (Omega-3)", "Knochenbrühe (Glycin, beruhigend)", "Avocado", "Eier", "Süßkartoffeln", "Nüsse und Samen", "Fermentiertes Gemüse", "Bananen (Tryptophan)", "Dunkle Schokolade"],
      meiden: ["Koffein (verstärkt Angst und Hypervigilanz)", "Alkohol (verschlechtert Schlaf und Emotionsregulation)", "Zucker", "Verarbeitete Lebensmittel", "Glutamat (überregt Nervensystem)"],
      rezepte: [
        { name: 'Beruhigender Nerven-Trunk', zutaten: '250ml warme Hafermilch, 1 TL Ashwagandha-Pulver, 1/2 TL Kurkuma, 1 Prise Muskatnuss, 1 TL Honig', zubereitung: 'Hafermilch erwärmen, alle Zutaten einrühren. Abends trinken als Nervennahrung und Schlafhilfe.' },
        { name: 'Erdungs-Suppe', zutaten: '2 Süßkartoffeln, 1 Karotte, 1 Stück Ingwer, Kokoscreme, Kurkuma, 500ml Knochenbrühe', zubereitung: 'Süßkartoffeln und Karotten in Knochenbrühe weich kochen. Ingwer und Kurkuma zugeben. Pürieren und mit Kokoscreme verfeinern. Erdend, nährend und beruhigend.' }
      ]
    },
    fasten: {
      text: "Bei Trauma ist mit Fasten Vorsicht geboten. Hunger kann Panik und Kontrollverlust triggern. Das Nervensystem braucht Sicherheit und Stabilität, nicht zusätzlichen Stress. Sanftes Intervallfasten kann hilfreich sein, wenn der Körper stabil genug ist. Niemals fasten, wenn es sich wie Bestrafung anfühlt.",
      formen: ["Sanftes Intervallfasten 14:10 (wenn sich sicher anfühlend)", "Bewusste Nahrungspausen (4-5 Stunden zwischen Mahlzeiten)", "Digitales Fasten (Reizreduktion)"],
      reinigung: ["Warme Basenbäder mit Lavendel", "Sanftes Ölziehen", "Fußbäder mit Epsomit abends", "Aromatherapie mit Lavendel und Weihrauch"]
    },
    bewegung: {
      text: "Trauma sitzt im Körper und muss durch den Körper gelöst werden. Tremoring (therapeutisches Zittern/TRE), Somatic Experiencing und traumasensitives Yoga helfen dem Nervensystem, gespeicherte Energie zu entladen. Sanft beginnen. Bewegung in der Natur erdet und reguliert. Zwang und Leistungsdruck vermeiden.",
      praktiken: ["TRE (Trauma Releasing Exercises/therapeutisches Zittern)", "Traumasensitives Yoga", "Somatic Experiencing Übungen", "Waldbaden (Natur reguliert das Nervensystem)", "Tanzen (freier Ausdruck)", "Schwimmen (Wasser als Urheilung)"]
    },
    geist: {
      einheit: "Trauma ist eine Wunde, die heilen will. Du bist nicht zerbrochen, du bist verletzt worden. Dein Nervensystem hat überlebt, weil es so intelligent reagiert hat. Jetzt darf es lernen, dass die Gefahr vorbei ist. Heilung geschieht nicht durch Vergessen, sondern durch Integration. Du bist sicher. Du bist hier. Du bist ganz.",
      affirmationen: ["Ich bin sicher in meinem Körper und in dieser Welt.", "Mein Nervensystem darf sich entspannen. Die Gefahr ist vorbei.", "Ich bin nicht das, was mir passiert ist. Ich bin, wer ich werde.", "Ich verdiene Heilung, Liebe und Frieden."],
      meditation: "Ressourcen-Meditation: Erinnere dich an einen Ort, an dem du dich sicher und geborgen gefühlt hast. Visualisiere ihn mit allen Sinnen: Farben, Geräusche, Gerüche, Temperaturen. Spüre die Sicherheit in deinem Körper. Ankere dieses Gefühl, indem du eine Hand auf dein Herz legst. Dieses Gefühl ist immer in dir verfügbar. 10-15 Minuten täglich.",
      energie: "Vagusnerv-Stimulation (Summen, kaltes Wasser im Gesicht, Atemübungen). Herzchakra heilen mit Rosenquarz. Erdungsübungen: Füße auf dem Boden spüren. Reiki als sanfte Energiearbeit. EMDR als Augenbewegungstherapie. Polyvagal-Übungen nach Stephen Porges."
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Reguliert das Endocannabinoid-System, reduziert Angst, verbessert Schlaf und moduliert die Stressantwort.', tags: ['#angst', '#schlaf', '#nervensystem'] },
      { name: 'Amanita', desc: 'Microdosing kann bei traumatischen Mustern helfen, indem es neue neuronale Verbindungen ermöglicht. Nur begleitet.', tags: ['#microdosing', '#neuroplastizität', '#bewusstsein'] },
      { name: 'Magnesium-Öl', desc: 'Transdermale Magnesiumaufnahme beruhigt das übererregte Nervensystem. Abends auf Füße und Nacken auftragen.', tags: ['#magnesium', '#nerven', '#entspannung'] },
      { name: 'Hericium', desc: 'Löwenmähne fördert die Neuroplastizität (NGF) und unterstützt die Nervenheilung.', tags: ['#vitalpilz', '#nerven', '#neuroplastizität'] },
      { name: 'Heiltee', desc: 'Beruhigende Kräuterteemischung mit Baldrian, Lavendel und Melisse für Entspannung und Schlaf.', tags: ['#beruhigung', '#schlaf', '#nerven'] }
    ]
  },

  {
    id: 'haarverlust',
    name: 'Haarausfall / Haargesundheit',
    tags: ['#haarausfall', '#haare', '#alopezie', '#kopfhaut', '#biotin', '#hormone'],
    koerper: "Haarausfall hat viele Formen: diffuser Haarausfall (gleichmäßig verteilt), androgenetische Alopezie (hormonell, Geheimratsecken/Tonsur), Alopecia areata (kreisrunder Haarausfall, autoimmun) und vernarbende Alopezie. Ursachen sind vielfältig: Eisenmangel, Zinkmangel, Biotinmangel, Schilddrüsenstörungen, Hormonungleichgewichte (DHT, Östrogen), chronischer Stress, Darmprobleme, Medikamente und Autoimmunprozesse. Die Haarwurzel ist eines der stoffwechselaktivsten Gewebe und reagiert sensibel auf Nährstoffmängel und Toxine. Mehr als 100 Haare pro Tag zu verlieren gilt als auffällig.",
    psychosomatik: {
      zitat: "Ich verliere meine Krone und damit mein Selbstbild, weil ich an mir selbst zweifle.",
      text: "Louise Hay verbindet Haarausfall mit Anspannung, dem Versuch, alles zu kontrollieren, und fehlendem Vertrauen ins Leben. Dahlke sieht Haare als Symbol für Lebenskraft und Freiheit (Samson und Delila). Haarausfall zeigt den Verlust von Vitalität, Attraktivität und Macht im eigenen Erleben. Dethlefsen beschreibt die Haare als Antennen zur geistigen Welt. Ihr Verlust kann eine Abtrennung von der eigenen Intuition und Spiritualität symbolisieren."
    },
    traditionen: {
      volksmedizin: "In der Volksmedizin wurden Brennnesselhaarwasser und Klettwurzelauszüge zur Kopfhautpflege eingesetzt. Rosmarin-Spülungen förderten die Durchblutung der Kopfhaut. Birkenblätter-Tinkturen stärkten die Haarwurzeln. Apfelessig-Spülungen regulierten den pH-Wert. Bockshornkleesamen galten als Haarwuchsmittel.",
      tcm: "In der TCM werden die Haare vom Blut genährt und von der Niere kontrolliert. Haarausfall zeigt Leber-Blut-Mangel und/oder Nieren-Jing-Schwäche. He Shou Wu (Polygonum multiflorum, Fo-Ti) ist das berühmteste Haarwuchsmittel der TCM. Goji-Beeren nähren das Blut. Akupunktur an Gallenblase 20 und lokalen Kopfhautpunkten.",
      ayurveda: "Ayurveda sieht Haarausfall (Khalitya) als Pitta-Überschuss, der die Haarwurzeln verbrennt, oder als Vata-Trockenheit, die die Kopfhaut austrocknet. Bhringaraj (Eclipta alba) ist das wichtigste Haarkraut. Kopfmassage mit Amla-Öl oder Bhringaraj-Öl nährt die Wurzeln. Nasya mit Anu Taila stärkt indirekt die Haare.",
      germanisch: "Nach Hamer steht Haarausfall in Verbindung mit einem Trennungskonflikt am Kopf. Die Person hat jemanden oder etwas verloren, das über sie gewacht hat (gestreichelt wurde). In der Heilungsphase kann das Haar zurückkehren. Kreisrunder Haarausfall zeigt einen lokalen Trennungskonflikt am Kopf.",
      alchemie: "Haare sind spagyrisch Ausdruck des Sulphur-Prinzips (Lebenskraft) und werden vom Mars (Eisen) genährt. Haarausfall zeigt ein erloschenes Lebensfeuer. Spagyrische Essenzen aus Brennnessel, Rosmarin und Schachtelhalm stärken die Lebenskraft in den Haaren. Silizium (Quarz) gibt Struktur."
    },
    kraeuter: [
      { name: 'Brennnessel', wirkung: 'Eisenreich, siliziumreich, stärkt die Haarwurzeln. Als Tee innerlich und als Haarspülung äußerlich.' },
      { name: 'Rosmarin', wirkung: 'Fördert die Kopfhautdurchblutung vergleichbar mit Minoxidil. 5 Tropfen Rosmarinöl in Shampoo oder als Kopfhautmassageöl.' },
      { name: 'Sägepalme (Saw Palmetto)', wirkung: 'Hemmt 5-Alpha-Reduktase und senkt DHT. 320 mg Extrakt täglich bei androgenetischer Alopezie.' },
      { name: 'Schachtelhalm', wirkung: 'Reich an Kieselsäure (Silizium), stärkt Haare und Nägel. Als Tee oder Extrakt über Monate.' },
      { name: 'Bockshornklee', wirkung: 'Phytoöstrogene und Nährstoffe stärken das Haar. 500 mg Extrakt täglich oder Samenpulver.' }
    ],
    stoffe: [
      { name: 'Biotin (Vitamin B7)', wirkung: 'Essentiell für Keratinbildung. 5000-10000 mcg täglich über mindestens 3 Monate.' },
      { name: 'Eisen', wirkung: 'Häufigste Ursache für diffusen Haarausfall. Ferritin auf >70 ng/ml bringen. Nur bei Mangel supplementieren.' },
      { name: 'Zink', wirkung: 'Essentiell für Zellteilung an der Haarwurzel. 15-30 mg täglich als Bisglycinat.' },
      { name: 'Silizium', wirkung: 'Strukturelement für Haare, Haut und Nägel. Als Kieselsäure oder Bambusextrakt.' },
      { name: 'Vitamin D3', wirkung: 'Mangel ist mit Haarausfall assoziiert, besonders bei Alopecia areata. 4000-5000 IE täglich mit K2.' }
    ],
    ernaehrung: {
      empfehlung: "Haare brauchen von innen Eisen, Zink, Biotin, Silizium, Proteine und Omega-3-Fettsäuren. Die Haarwurzel teilt sich alle 23-72 Stunden und braucht konstante Nährstoffversorgung. Crash-Diäten sind ein häufiger Auslöser für Haarausfall. Schilddrüse und Hormonbalance überprüfen.",
      staerkend: ["Eier (Biotin, Protein)", "Linsen und Hülsenfrüchte (Eisen, Zink)", "Kürbiskerne (Zink)", "Hirse (Silizium)", "Lachs (Omega-3)", "Spinat (Eisen, Folsäure)", "Nüsse (Selen, Zink)", "Haferflocken", "Süßkartoffeln (Beta-Carotin)", "Hanfsamen"],
      meiden: ["Zucker (Entzündung der Kopfhaut)", "Alkohol (deplettiert Zink und B-Vitamine)", "Crash-Diäten", "Rohes Eiweiß (Avidin bindet Biotin)", "Übermäßig Vitamin A (kann Haarausfall fördern)"],
      rezepte: [
        { name: 'Haar-Power-Frühstück', zutaten: '50g Hirseflocken, 200ml Mandelmilch, 1 EL Hanfsamen, 1 EL Kürbiskerne, Blaubeeren, 1 TL Spirulina', zubereitung: 'Hirseflocken in Mandelmilch aufkochen. Mit Hanfsamen, Kürbiskernen, Blaubeeren und Spirulina toppen. Liefert Silizium, Zink, Biotin und Eisen.' },
        { name: 'Rosmarin-Haarwasser', zutaten: '4 EL frischer Rosmarin, 500ml Apfelessig, 5 Tropfen Rosmarinöl', zubereitung: 'Rosmarin in Apfelessig 2 Wochen mazerieren. Abseihen, ätherisches Öl zugeben. Nach dem Waschen als Spülung in die Kopfhaut einmassieren. Nicht ausspülen.' }
      ]
    },
    fasten: {
      text: "Bei Haarausfall ist Fasten mit Vorsicht zu genießen. Nährstoffmangel ist oft die Ursache, und Fasten kann den Mangel verschärfen. Erst Nährstoffspeicher auffüllen, dann sanft fasten. Intervallfasten ist unbedenklich, wenn die Nährstoffzufuhr stimmt. Längeres Fasten kann den Haarausfall kurzfristig verstärken (Telogen-Effluvium).",
      formen: ["Intervallfasten 16:8 (bei guter Nährstoffversorgung)", "Basenfasten (nährstoffreich)", "Saftfasten nur kurzzeitig und mit Mineralstoff-Supplementierung"],
      reinigung: ["Kopfhautpeeling mit Meersalz", "Ölziehen morgens", "Leberwickel (Leber baut Hormone ab)", "Darmreinigung (Nährstoffaufnahme verbessern)"]
    },
    bewegung: {
      text: "Bewegung fördert die Durchblutung der Kopfhaut und reduziert Stresshormone, die Haarausfall fördern. Kopfüber-Positionen im Yoga fördern die Kopfhautdurchblutung besonders. Regelmäßige Kopfhautmassagen sind ebenso wichtig.",
      praktiken: ["Kopfhautmassage (5 Minuten täglich)", "Yoga-Umkehrhaltungen (Kopfstand, Schulterstand)", "Moderate Ausdauerbewegung", "Stressreduzierende Übungen (Yoga, Tai Chi)", "Kopfüber-Bürsten für die Durchblutung"]
    },
    geist: {
      einheit: "Haare sind deine Krone, dein Ausdruck nach außen. Wenn sie fallen, fragt das Leben: Wer bist du jenseits deines Aussehens? Dein Wert liegt nicht in deinen Haaren, sondern in deinem Wesen. Gleichzeitig dürfen deine Haare wieder wachsen, wenn du dich wieder mit deiner Lebenskraft verbindest.",
      affirmationen: ["Meine Haare wachsen gesund, kräftig und voll.", "Ich nähre meinen Körper und meine Haare mit allem, was sie brauchen.", "Ich bin wertvoll und schön, unabhängig von meinem Äußeren.", "Meine Lebenskraft strahlt durch jedes meiner Haare."],
      meditation: "Lege deine Fingerspitzen auf deine Kopfhaut und massiere sanft in kreisenden Bewegungen. Visualisiere warmes, goldenes Licht, das durch deine Fingerspitzen in die Kopfhaut fließt und jede Haarwurzel nährt und aktiviert. Sieh innerlich, wie neue Haare sprießen wie Grashalme nach dem Regen. 10 Minuten täglich.",
      energie: "Kronenchakra (Sahasrara) stärken und reinigen. Kopfhaut-Akupressur auf Gallenblase 20 und Du 20. Reiki auf den Kopf. Energetisches Kopfhaut-Bürsten mit natürlicher Bürste. Mond-Energie tanken bei Vollmond (Haare wachsen)."
    },
    produkte: [
      { name: 'Brennnessel-Tee', desc: 'Innerlich als Eisenquelle und Siliziumlieferant. Äußerlich als Haarspülung für die Kopfhaut.', tags: ['#eisen', '#silizium', '#haare'] },
      { name: 'Spirulina', desc: 'Hochdosiertes Eisen, B-Vitamine und Proteine für die Haarwurzel. Grüne Nährstoffbombe.', tags: ['#eisen', '#protein', '#nährstoffe'] },
      { name: 'Schwarzkümmelöl', desc: 'Stärkt die Haarwurzeln innerlich und äußerlich. Thymoquinon wirkt entzündungshemmend auf die Kopfhaut.', tags: ['#haare', '#kopfhaut', '#entzündung'] },
      { name: 'Zeolith', desc: 'Entgiftet Schwermetalle, die die Haarwurzel schädigen. Verbessert die Nährstoffaufnahme im Darm.', tags: ['#entgiftung', '#schwermetalle', '#darm'] },
      { name: 'MSM', desc: 'Organischer Schwefel, Baustein für Keratin (Haarprotein). Stärkt Haare, Haut und Nägel.', tags: ['#schwefel', '#keratin', '#haare'] }
    ]
  }
];
