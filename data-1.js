const CONDITIONS_1 = [

  // ─────────────────────────────────────────────
  // 1. Erkältung / Schnupfen
  // ─────────────────────────────────────────────
  {
    id: 'erkaeltung',
    name: 'Erkältung / Schnupfen',
    tags: ['#atemwege', '#immunsystem', '#erkältung', '#schnupfen'],
    koerper: "Bei einer Erkältung reagiert das Immunsystem auf eingedrungene Viren in den oberen Atemwegen. Die Schleimhäute schwellen an, produzieren vermehrt Sekret und arbeiten daran, die Erreger hinauszuspülen. Der Körper erhöht oft die Temperatur, um die Abwehrkräfte zu aktivieren — ein Zeichen lebendiger Selbstheilung. Gleichzeitig signalisiert die Müdigkeit: jetzt ist Zeit für Rückzug und Regeneration.",
    psychosomatik: {
      zitat: "Die Nase voll haben — ein Ruf nach Innehalten, nach Ruhe.",
      text: "Erkältungen tauchen häufig auf, wenn innerlich alles zu viel wird — zu viele Eindrücke, zu viele Anforderungen, zu wenig Raum für sich selbst. Der Körper erzwingt die Pause, die der Geist sich noch verwehrt. Louise Hay beschreibt Schnupfen als Ausdruck unterdrückter Tränen, als inneres Weinen. Rüdiger Dahlke sieht darin den Rückzug in die eigene Höhle — eine gesunde Sehnsucht nach Schutz und Stille. Die Erkältung ist eine Einladung, ehrlich hinzuschauen: Was brauche ich wirklich gerade?",
    },
    traditionen: {
      volksmedizin: "In der europäischen Volksmedizin gelten Schwitzkuren als bewährtes Mittel bei Erkältung. Holunderblütentee, Lindenblütentee und ein heißes Bad mit Thymian öffnen die Poren und unterstützen die Ausscheidung. Auch Brustwickel mit Quark oder Kartoffeln sind seit Jahrhunderten in Gebrauch.",
      tcm: "Die TCM sieht eine Erkältung als Eindringen von Wind-Kälte oder Wind-Hitze in die Oberfläche des Körpers. Das Wei-Qi (Abwehr-Qi) wird gestärkt durch wärmende Kräuter wie Ingwer und Frühlingszwiebel. Akupressur am Punkt LI-4 (Hegu) und Lu-7 (Lieque) öffnet die Oberfläche und vertreibt den pathogenen Faktor.",
      ayurveda: "Im Ayurveda gilt Erkältung als Kapha-Störung mit Ansammlung von Schleim (Ama). Warme, leichte Speisen und scharfe Gewürze wie Ingwer, Kurkuma und schwarzer Pfeffer helfen, das Agni (Verdauungsfeuer) zu stärken und Schleim aufzulösen. Tulsi-Tee (Heiliges Basilikum) ist ein klassisches Hausmittel.",
      germanisch: "In der germanischen Heiltradition galt Holunder als heiliger Baum der Frau Holle — Schutzbaum des Hauses. Seine Blüten und Beeren wurden bei Fieber und Erkältung als erstes Heilmittel eingesetzt.",
      alchemie: "Alchemistisch betrachtet ist die Erkältung ein Reinigungsprozess — der Körper löst Altes, Angestautes und scheidet es über die Schleimhäute aus. Ein Übergang von einem inneren Zustand in einen klareren.",
    },
    kraeuter: [
      { name: 'Holunder', wirkung: 'Schweißtreibend, immunstärkend. Als Tee aus Holunderblüten (2 TL pro Tasse, 10 Min ziehen) oder als Holunderbeerensaft warm getrunken.' },
      { name: 'Thymian', wirkung: 'Schleimlösend, antibakteriell, wärmend. Als Tee, Dampfbad oder Brusteinreibung mit Thymianöl.' },
      { name: 'Ingwer', wirkung: 'Wärmend, durchblutungsfördernd, entzündungshemmend. Frisch aufgeschnitten als Tee mit Honig und Zitrone.' },
      { name: 'Salbei', wirkung: 'Entzündungshemmend, schweißregulierend. Als Gurgellösung bei Halsschmerzen oder als Tee.' },
      { name: 'Echinacea', wirkung: 'Immunstimulierend. Als Tinktur bei ersten Anzeichen, 3x täglich 30 Tropfen.' },
      { name: 'Lindenblüte', wirkung: 'Schweißtreibend, beruhigend. Als heißer Tee vor dem Schlafengehen — ideal für die Schwitzkur.' },
    ],
    stoffe: [
      { name: 'Vitamin C', wirkung: 'Aus Hagebutte, Acerola oder Camu-Camu. Hochdosiert 2-5g täglich über den Tag verteilt.' },
      { name: 'Zink', wirkung: 'Verkürzt die Erkältungsdauer. 25-50mg täglich als Zinkgluconat oder Zinkcitrat, am besten zum Essen.' },
      { name: 'Vitamin D3', wirkung: 'Stärkt die Erstlinien-Abwehr der Schleimhäute. 5.000-10.000 IE täglich zusammen mit Vitamin K2.' },
      { name: 'Selen', wirkung: 'Essentiell für die Immunzellenfunktion. 200 µg täglich, idealerweise als Natriumselenit.' },
    ],
    ernaehrung: {
      empfehlung: "Leichte, warme, gut gewürzte Kost entlastet den Körper und wärmt von innen. Rohkost darf in dieser Phase ruhen — der Fokus liegt auf Suppen, Brühen und gedünstetem Gemüse. Das Verdauungssystem bekommt so Raum, während die Energie in die Heilung fließt. Viel warmes Wasser und Kräutertee unterstützen die Ausscheidung.",
      staerkend: ["Hühnerbrühe / Knochenbrühe", "Ingwer frisch", "Knoblauch", "Zitrusfrüchte", "Kurkuma", "Honig (roh)", "Zwiebeln"],
      meiden: ["Zucker und Süßigkeiten", "Milchprodukte (schleimbildend)", "Schwere, fettige Kost", "Weißmehlprodukte", "Alkohol"],
      rezepte: [
        { name: 'Ingwer-Zitronen-Honig-Trunk', zutaten: 'Daumengroßes Stück Ingwer, 1 Zitrone, 1 EL roher Honig, 300ml heißes Wasser', zubereitung: 'Ingwer in dünne Scheiben schneiden, mit heißem Wasser übergießen, 10 Minuten ziehen lassen. Zitronensaft und Honig einrühren (erst unter 40°C, damit der Honig lebendig bleibt). Warm und langsam trinken.' },
        { name: 'Goldene Milch (Kurkuma-Latte)', zutaten: '1 TL Kurkuma, 1/2 TL Zimt, Prise schwarzer Pfeffer, 1 TL Kokosöl, 250ml Pflanzenmilch, Honig nach Geschmack', zubereitung: 'Alle Gewürze mit etwas Wasser zu einer Paste verrühren. Pflanzenmilch erwärmen, Paste einrühren, Kokosöl und Honig zugeben. Warm genießen — am besten abends.' },
        { name: 'Hühnerbrühe klassisch', zutaten: '1 Suppenhuhn, Sellerie, Karotten, Lauch, Petersilienwurzel, Lorbeer, Pfefferkörner, Salz', zubereitung: 'Huhn mit Gemüse und Gewürzen in kaltem Wasser aufsetzen. Langsam zum Köcheln bringen und mindestens 3 Stunden sanft köcheln lassen. Abseihen und warm löffeln — die Brühe enthält wertvolle Aminosäuren und Mineralien.' },
      ]
    },
    fasten: {
      text: "Fasten bei Erkältung folgt dem natürlichen Instinkt — der Appetit lässt oft von selbst nach. Durch den Verzicht auf feste Nahrung kann der Körper seine gesamte Energie in die Immunabwehr lenken. Schon ein Tag Saftfasten oder reines Brühefasten beschleunigt die Genesung deutlich.",
      formen: [
        "Saftfasten (1-3 Tage) — frische Obst- und Gemüsesäfte entlasten den Verdauungstrakt und liefern Vitamine",
        "Brühefasten — warme Knochenbrühe und Gemüsebrühe nähren und wärmen, während der Körper heilt",
        "Intermittierendes Fasten (16:8) — gibt dem Körper ausgedehnte Regenerationsphasen",
      ],
      reinigung: [
        "Ölziehen morgens mit Kokos- oder Sesamöl (15-20 Min) — bindet Toxine im Mundraum",
        "Nasenspülung mit Salzwasser (Jala Neti) — reinigt und befeuchtet die Nasenschleimhäute",
        "Dampfinhalation mit Thymian, Kamille oder Eukalyptus — löst Schleim und öffnet die Atemwege",
        "Warmes Salzwasser gurgeln — beruhigt den Rachenraum und wirkt desinfizierend",
      ]
    },
    bewegung: {
      text: "Bei Erkältung steht sanfte Bewegung im Vordergrund — alles, was den Kreislauf anregt, die Atemwege öffnet und den Lymphfluss fördert, hilft dem Körper. Intensive Belastung darf warten, bis die Energie zurückkehrt. Frische Luft und tiefes Atmen sind die besten Begleiter.",
      praktiken: [
        "Spaziergang an frischer Luft (20-30 Min) — sanfte Bewegung, Atemwege öffnen, Sonne tanken",
        "Sanftes Yoga: Kindhaltung, Katze-Kuh, sanfte Drehungen — öffnet den Brustkorb und fördert den Lymphfluss",
        "Atemübung: 4-7-8 Atmung nach Dr. Weil — beruhigt das Nervensystem und vertieft den Atem",
        "Trockenbürsten vor dem Duschen — regt den Lymphfluss an und stärkt die Hautabwehr",
        "Wechselduschen (warm-kalt) — trainiert die Gefäße und aktiviert das Immunsystem (bei Fieber pausieren)",
      ]
    },
    geist: {
      einheit: "Die Erkältung ist ein Geschenk der Verlangsamung. Sie erinnert daran, dass Rückzug und Stille genauso zum Leben gehören wie Aktivität und Schaffen. Wer sich erlaubt, wirklich anzuhalten, entdeckt oft, welche Gedanken und Gefühle unter der Oberfläche warten.",
      affirmationen: [
        "Mein Körper heilt sich selbst — ich vertraue seiner Weisheit.",
        "Ich darf zur Ruhe kommen.",
        "Ich lasse los, was mir zu viel geworden ist.",
        "Mit jedem Atemzug strömt Lebenskraft in mich hinein.",
      ],
      meditation: "Eine einfache Atemmeditation passt wunderbar: Bequem hinsetzen oder hinlegen, die Augen schließen und den Atem beobachten, wie er durch die Nase fließt. Bei jeder Einatmung goldenes Licht visualisieren, das den Körper von innen wärmt. Bei jeder Ausatmung alles Schwere und Verbrauchte loslassen. 10-15 Minuten genügen.",
      energie: "Reiki oder Handauflegen auf den Brustkorb und die Stirn wirkt beruhigend und wärmend. Auch das sanfte Streichen über die Meridiane von Lunge und Dickdarm harmonisiert den Energiefluss.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: 'Stärkt das Immunsystem, wirkt antimikrobiell und unterstützt die körpereigene Abwehr.', tags: ['#artemisia', '#immunsystem'] },
      { name: 'Knoblauch-Tinktur', desc: 'Natürliches Antibiotikum — Allicin wirkt antiviral und antibakteriell.', tags: ['#knoblauch', '#immunsystem', '#antiviral'] },
      { name: 'Zeolith / ZeoMont', desc: 'Bindet Schadstoffe und entlastet den Organismus während der Genesung.', tags: ['#zeolith', '#entgiftung'] },
      { name: 'Heiltee', desc: 'Kräuterteemischung zur Unterstützung der Atemwege und des Immunsystems.', tags: ['#heiltee', '#atemwege', '#kräuter'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 2. Grippe
  // ─────────────────────────────────────────────
  {
    id: 'grippe',
    name: 'Grippe',
    tags: ['#grippe', '#influenza', '#immunsystem', '#fieber', '#atemwege'],
    koerper: "Die Grippe (Influenza) ist eine heftige Immunreaktion auf aggressive Viren, die den gesamten Organismus erfassen. Hohes Fieber, Gliederschmerzen, starke Erschöpfung und trockener Husten zeigen, dass der Körper mit voller Kraft kämpft. Das Fieber ist dabei das stärkste Werkzeug des Immunsystems — es beschleunigt die Abwehrprozesse und macht das Milieu für Viren unwirtlich. Die Grippe fordert absolute Ruhe und ist oft ein Wendepunkt, der tiefe Regeneration einleitet.",
    psychosomatik: {
      zitat: "Die Grippe wirft dich ins Bett — dorthin, wo du längst hättest sein sollen.",
      text: "Grippe tritt häufig nach Phasen extremer Anspannung auf — wenn der Körper sich endlich die Erschöpfung erlaubt, die schon lange da war. Thorwald Dethlefsen beschreibt sie als radikale Ehrlichkeit des Körpers: Er zwingt in die Horizontale, wenn der Geist es verweigert. Das hohe Fieber ist auch ein innerer Reinigungsprozess — altes, festgehaltenes Material wird verbrannt. Dahlke sieht in der Grippe einen Hinweis auf unterdrückte Konflikte, die sich in der Heftigkeit der Symptome zeigen. Die Einladung: Wirklich loslassen, wirklich ruhen, wirklich ankommen im eigenen Körper.",
    },
    traditionen: {
      volksmedizin: "Die Volksmedizin setzt bei Grippe auf intensive Schwitzkuren: Lindenblütentee mit Honig, heißes Bad mit Fichtennadeln, danach in warme Decken gewickelt schwitzen. Holunderbeerensaft (Sambucus nigra) galt als das wichtigste Grippemittel. Wadenwickel bei zu hohem Fieber regulieren die Temperatur sanft.",
      tcm: "Die TCM klassifiziert Grippe als tiefes Eindringen von Wind-Hitze oder Wind-Kälte mit Beteiligung des Shaoyang (Gallenblasen-Meridian). Bittere und scharfe Kräuter wie Chai Hu (Bupleurum) und Huang Qin (Baikal-Helmkraut) werden eingesetzt. Akupressur an GB-20 (Fengchi) und Du-14 (Dazhui) hilft, Fieber zu regulieren und Wind auszuleiten.",
      ayurveda: "Im Ayurveda ist Grippe ein Zeichen massiver Ama-Ansammlung (Toxine) zusammen mit einem geschwächten Agni. Heilfasten und leichte Kitchari-Kost stehen an erster Stelle. Tulsi, Pippali (langer Pfeffer) und Sitopaladi Churna sind klassische Grippemittel, die das innere Feuer anfachen und Schleim lösen.",
      germanisch: "Fieber wurde in germanischen Heiltraditionen als reinigende Kraft verehrt — das innere Feuer, das Unreines verbrennt. Bettruhe am Feuer und heiße Kräutersude galten als heilige Praxis der Genesung.",
      alchemie: "In der Alchemie entspricht die Grippe der Calcinatio — dem Verbrennungsprozess. Das Fieber ist das alchemistische Feuer, das Altes in Asche verwandelt, damit Neues entstehen kann.",
    },
    kraeuter: [
      { name: 'Holunderbeere', wirkung: 'Antivirale Wirkung gegen Influenza-Viren belegt. Als Saft oder Extrakt (Sambucol) 3-4x täglich.' },
      { name: 'Lindenblüte', wirkung: 'Starkes Schwitzmittel, fiebersenkend. Als heißer Tee (3-4 TL pro Tasse), mehrmals täglich.' },
      { name: 'Mädesüß', wirkung: 'Enthält natürliche Salicylate — schmerzlindernd und fiebersenkend. Als Tee 3x täglich.' },
      { name: 'Wasserdost', wirkung: 'Traditionelles Grippekraut, immunstimulierend. Als Tee oder Tinktur bei ersten Symptomen.' },
      { name: 'Andrographis', wirkung: 'Der "indische Echinacea" — stark antiviral und entzündungshemmend. Als Tinktur oder Kapseln.' },
      { name: 'Spitzwegerich', wirkung: 'Beruhigt den trockenen Hustenreiz und stärkt die Schleimhäute. Als Sirup oder Tee.' },
    ],
    stoffe: [
      { name: 'Vitamin C', wirkung: 'Hochdosiert 5-10g täglich in aufgeteilten Dosen (bis zur Darmtoleranz). Liposomal für bessere Aufnahme.' },
      { name: 'Vitamin D3', wirkung: 'Stoßtherapie: 50.000 IE am ersten Tag, dann 10.000 IE täglich für eine Woche. Zusammen mit K2.' },
      { name: 'Zink', wirkung: '50mg täglich — verkürzt nachweislich die Grippedauer. Am besten als Lutschtabletten.' },
      { name: 'Selen', wirkung: 'Verhindert Virusmutationen und stärkt die Immunantwort. 200 µg täglich.' },
    ],
    ernaehrung: {
      empfehlung: "Bei Grippe ist weniger mehr — der Körper braucht Energie für die Heilung, das Verdauungssystem darf ruhen. Warme Brühen sind die ideale Nahrung: leicht verdaulich, mineralreich, wärmend. Erst wenn der Appetit von selbst zurückkehrt, darf langsam wieder leichte Kost hinzukommen. Viel trinken ist essentiell — warmes Wasser, Kräutertees und verdünnte Säfte.",
      staerkend: ["Knochenbrühe (selbstgekocht)", "Holunderbeerensaft", "Ingwer", "Knoblauch roh", "Thymian-Honig", "Kurkuma"],
      meiden: ["Zucker in jeder Form", "Milchprodukte", "Schwere Mahlzeiten", "Alkohol", "Koffein"],
      rezepte: [
        { name: 'Holunder-Feuertrank', zutaten: 'Holunderbeerensaft (200ml), frischer Ingwer (3cm), 1 Zimtstange, 3 Nelken, Saft einer Zitrone, 1 EL Honig', zubereitung: 'Holundersaft mit Ingwerscheiben, Zimt und Nelken sanft erwärmen (max. 60°C). 10 Minuten ziehen lassen, abseihen. Zitronensaft und Honig einrühren. Mehrmals täglich eine kleine Tasse warm trinken.' },
        { name: 'Knoblauch-Zitronen-Shot', zutaten: '2 Knoblauchzehen frisch, Saft einer halben Zitrone, 1 TL Honig, Prise Cayennepfeffer', zubereitung: 'Knoblauch fein pressen, mit Zitronensaft, Honig und Cayenne verrühren. Als Shot trinken. Wirkt stark antiviral und wärmend. 2-3x täglich.' },
      ]
    },
    fasten: {
      text: "Fasten ist bei Grippe die natürlichste Reaktion — der Körper schaltet von selbst den Appetit ab, um alle Kräfte für die Immunabwehr freizusetzen. Diesen Impuls zu respektieren beschleunigt die Heilung enorm. Nur warme Flüssigkeiten: Brühen, Tees, warmes Wasser mit Zitrone.",
      formen: [
        "Brühefasten (2-4 Tage) — nährt den Körper minimal und hält die Wärme aufrecht",
        "Teefasten — nur Kräutertees und warmes Wasser für 1-2 Tage",
        "Saftfasten mit Holunderbeerensaft und frischen Gemüsesäften ab Tag 3",
      ],
      reinigung: [
        "Ölziehen morgens mit Kokosöl — entlastet das Immunsystem über die Mundschleimhaut",
        "Warme Salzwasser-Gurgellösung — mehrmals täglich bei Halsbeteiligung",
        "Dampfinhalation mit Eukalyptus und Thymian — öffnet die Atemwege und wirkt antiviral",
        "Einlauf mit lauwarmem Kamillentee — unterstützt die Entgiftung über den Darm",
      ]
    },
    bewegung: {
      text: "Bei akuter Grippe ist absolute Bettruhe die wichtigste Medizin. Der Körper braucht jede Energie für die Heilung. Erst in der Genesungsphase kommen sanfte Bewegungen hinzu — langsam und achtsam. Das Wichtigste: auf den Körper hören und die Ruhe wirklich annehmen.",
      praktiken: [
        "Bettruhe mit bewusstem Atmen — tiefe Bauchatmung bringt Sauerstoff und beruhigt das Nervensystem",
        "Sanfte Dehnübungen im Bett — Gliederschmerzen lösen sich durch achtsames Strecken",
        "Erst in der Genesungsphase: kurze Spaziergänge (10-15 Min) an frischer Luft",
        "Yoga Nidra (Schlaf-Yoga) im Liegen — tiefe Regeneration für Körper und Geist",
      ]
    },
    geist: {
      einheit: "Die Grippe ist ein radikaler Ruf zur Ehrlichkeit mit sich selbst. Sie zeigt, wo du über deine Grenzen gegangen bist, wo du zu lange durchgehalten hast. In der Stille des Krankseins liegt eine Chance: hinspüren, was wirklich zählt, und was losgelassen werden darf.",
      affirmationen: [
        "Ich erlaube mir, vollständig zu ruhen.",
        "Mein Fieber ist ein heiliges Feuer — es reinigt und erneuert mich.",
        "Ich vertraue der Weisheit meines Körpers.",
        "Nach dieser Reinigung erstehe ich gestärkt und klarer.",
      ],
      meditation: "Heilungs-Visualisation: Im Liegen die Augen schließen und sich vorstellen, wie warmes, goldenes Licht durch den gesamten Körper fließt. Mit jeder Einatmung wird es heller und wärmer. Es erreicht jede Zelle, jeden Winkel. Das Licht verbrennt sanft alles, was gehen darf, und nährt alles, was bleiben soll. 15-20 Minuten, so oft wie gewünscht.",
      energie: "Sanftes Handauflegen auf die Thymusdrüse (Brustmitte) stärkt das Immunsystem energetisch. Auch das Halten der Stirn und des Hinterkopfes beruhigt und zentriert die Lebenskraft.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: 'Starke antivirale und immunstärkende Pflanze — unterstützt den Körper bei der Erregerabwehr.', tags: ['#artemisia', '#antiviral', '#immunsystem'] },
      { name: 'Knoblauch-Tinktur', desc: 'Natürliches Breitband-Antibiotikum und Antiviralium. Allicin stärkt die Abwehrkräfte.', tags: ['#knoblauch', '#antiviral'] },
      { name: 'Zeolith / ZeoMont', desc: 'Unterstützt die Entgiftung und entlastet den Organismus während der Grippe.', tags: ['#zeolith', '#entgiftung'] },
      { name: 'CBD-Öl', desc: 'Lindert Gliederschmerzen, fördert tiefen Schlaf und beruhigt das Nervensystem.', tags: ['#cbd', '#schmerzen', '#schlaf'] },
      { name: 'Natron', desc: 'Basische Unterstützung: 1/2 TL in Wasser unterstützt die Entsäuerung des Gewebes.', tags: ['#natron', '#basisch', '#entsäuerung'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 3. Husten / Bronchitis
  // ─────────────────────────────────────────────
  {
    id: 'husten',
    name: 'Husten / Bronchitis',
    tags: ['#husten', '#bronchitis', '#atemwege', '#lunge', '#schleim'],
    koerper: "Husten ist ein kraftvoller Schutzreflex der Atemwege — er befördert Schleim, Reizstoffe und Erreger nach draußen. Bei einer Bronchitis entzünden sich die Bronchialschleimhäute und produzieren vermehrt zähes Sekret. Die Flimmerhärchen in den Atemwegen arbeiten auf Hochtouren, um den Schleim nach oben zu transportieren. Der Körper reinigt sich — Husten ist aktive Selbstheilung in Aktion.",
    psychosomatik: {
      zitat: "Etwas liegt auf der Brust — und will endlich herausgehustet werden.",
      text: "Husten steht in der psychosomatischen Deutung für den Wunsch, etwas loszuwerden, das auf der Seele lastet. Dahlke sieht in der Bronchitis einen unterdrückten Konflikt im Revier — etwas dringt in den persönlichen Raum ein und die Lunge wehrt sich. Louise Hay verbindet Husten mit dem Bedürfnis, gehört zu werden: ein Ruf, der aus der Tiefe kommt. Chronischer Husten kann auf Trauer hinweisen — Trauer, die im Brustkorb festgehalten wird. Die Einladung lautet: Was möchte heraus? Was darf endlich gesagt, geweint, ausgedrückt werden?",
    },
    traditionen: {
      volksmedizin: "Spitzwegerichsirup ist das wichtigste Hustenmittel der europäischen Volksheilkunde — seit Jahrhunderten bewährt. Thymiantee und -inhalationen lösen festsitzenden Schleim. Brustwickel mit Bienenwachs oder warmem Quark wirken tief in die Bronchien.",
      tcm: "In der TCM gehört die Lunge zum Metall-Element und ist der Sitz von Trauer und Loslassen. Husten zeigt eine Störung des absteigenden Lungen-Qi. Birnensuppe mit Fritillaria (Bei Mu) befeuchtet die Lunge bei trockenem Husten. Akupressur auf Lu-1 (Zhongfu) und Lu-5 (Chize) harmonisiert das Lungen-Qi.",
      ayurveda: "Im Ayurveda wird Husten je nach Dosha behandelt: Kapha-Husten (verschleimt) mit scharfen, trocknenden Kräutern wie Pippali und Trikatu, Vata-Husten (trocken) mit nährenden Mitteln wie Ghee und Süßholz. Sitopaladi Churna gilt als universelles Hustenmittel. Milch mit Kurkuma und Ghee beruhigt die Atemwege.",
      germanisch: "Fichte und Tanne galten in der nordischen Tradition als Atemlungenbäume. Harzsalben und Fichtennadelbäder öffneten die Bronchien. Das Einatmen der Waldluft in Nadelwäldern war eine heilige Praxis der Atemreinigung.",
      alchemie: "Der Husten entspricht dem alchemistischen Prinzip der Sublimation — ein Aufsteigen von unten nach oben. Das Schwere, Festgehaltene wird durch die Kraft des Atems nach oben getragen und freigesetzt.",
    },
    kraeuter: [
      { name: 'Thymian', wirkung: 'Das Hustenkraut schlechthin — schleimlösend, antibakteriell, krampflösend. Als Tee (3-4x täglich), Inhalation oder Brustöl.' },
      { name: 'Spitzwegerich', wirkung: 'Reizlindernd, schleimhautschützend. Frischer Sirup oder Presssaft, besonders bei trockenem Reizhusten.' },
      { name: 'Süßholz', wirkung: 'Schleimlösend, entzündungshemmend. Als Tee oder Tinktur. Die Lakritze der Natur für die Atemwege.' },
      { name: 'Isländisch Moos', wirkung: 'Bildet einen schützenden Film auf den Schleimhäuten. Ideal bei trockenem, kratzendem Husten. Als Lutschpastillen oder Tee.' },
      { name: 'Efeu', wirkung: 'Krampflösend und schleimlösend — erweitert die Bronchien. Als Extrakt oder Sirup.' },
      { name: 'Königskerze', wirkung: 'Beruhigt gereizte Schleimhäute, löst Schleim. Als Tee aus den gelben Blüten.' },
    ],
    stoffe: [
      { name: 'NAC (N-Acetyl-Cystein)', wirkung: 'Löst zähen Schleim in den Bronchien auf. 600-1200mg täglich.' },
      { name: 'Vitamin C', wirkung: 'Stärkt die Schleimhäute und die Immunabwehr. 2-4g täglich.' },
      { name: 'Vitamin A', wirkung: 'Essentiell für die Regeneration der Atemwegsschleimhäute. 10.000 IE täglich.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Entzündungshemmend — beruhigt die Entzündungsreaktion in den Bronchien.' },
    ],
    ernaehrung: {
      empfehlung: "Warme, schleimlösende Kost ist jetzt ideal. Scharfe Gewürze wie Ingwer, Meerrettich und Chili helfen, den Schleim zu verflüssigen. Suppen und Eintöpfe wärmen die Lunge von innen. Viel warme Flüssigkeit hält den Schleim feucht und transportfähig.",
      staerkend: ["Ingwer", "Meerrettich frisch gerieben", "Rettich (schwarzer Rettich)", "Zwiebeln", "Thymian als Gewürz", "Kurkuma", "Honig (roh)"],
      meiden: ["Milchprodukte (fördern die Schleimbildung)", "Zucker", "Bananen (schleimbildend)", "Kalte Speisen und Getränke", "Weißmehl"],
      rezepte: [
        { name: 'Zwiebel-Honig-Hustensaft', zutaten: '1 große Zwiebel, 3 EL roher Honig', zubereitung: 'Zwiebel in feine Würfel schneiden, abwechselnd mit Honig in ein Glas schichten. 6-8 Stunden ziehen lassen (am besten über Nacht). Den entstandenen Sirup löffelweise einnehmen — 3-5x täglich. Eines der wirksamsten Hausmittel gegen Husten.' },
        { name: 'Schwarzer-Rettich-Saft', zutaten: '1 schwarzer Rettich, Honig', zubereitung: 'Den Rettich aushöhlen, mit Honig füllen und über Nacht stehen lassen. Der entstandene Saft wirkt stark schleimlösend. Mehrmals täglich 1 EL einnehmen.' },
        { name: 'Thymian-Dampfbad', zutaten: 'Handvoll frischer Thymian oder 5 Tropfen Thymianöl, heißes Wasser', zubereitung: 'Thymian in eine große Schüssel geben, mit kochendem Wasser übergießen. Handtuch über den Kopf, 10-15 Minuten inhalieren. Befreit die Atemwege und wirkt antibakteriell. 2-3x täglich.' },
      ]
    },
    fasten: {
      text: "Leichtes Fasten entlastet bei Bronchitis die Verdauung und gibt dem Immunsystem mehr Kraft. Besonders die Reduktion schleimbildender Nahrungsmittel beschleunigt die Genesung. Warme Brühen und Tees liefern alles, was der Körper in dieser Phase braucht.",
      formen: [
        "Suppenfasten (2-3 Tage) — klare Brühen und leichte Gemüsesuppen",
        "Milchfreies Fasten — Verzicht auf alle Milchprodukte reduziert die Schleimproduktion merklich",
        "Intermittierendes Fasten (16:8) — entlastet die Verdauung und stärkt die Abwehrkräfte",
      ],
      reinigung: [
        "Dampfinhalation mit Thymian und Meersalz — 2-3x täglich",
        "Ölziehen mit Kokosöl — 15-20 Minuten morgens auf nüchternen Magen",
        "Nasenspülung (Jala Neti) — hält die oberen Atemwege frei",
        "Brustwickel mit warmem Bienenwachs — löst Schleim aus der Tiefe",
      ]
    },
    bewegung: {
      text: "Sanfte Bewegung und gezielte Atemübungen unterstützen den Abtransport von Schleim und stärken die Lungenkapazität. Frische Luft — besonders Waldluft in Nadelwäldern — wirkt wie ein natürliches Inhalatorium. Tiefes, bewusstes Atmen ist die wichtigste Übung.",
      praktiken: [
        "Spaziergang im Wald (besonders Nadelwald) — die ätherischen Öle der Bäume öffnen die Bronchien",
        "Pranayama: Nadi Shodhana (Wechselatmung) — harmonisiert die Atemwege und beruhigt",
        "Klopfmassage auf dem Brustkorb und Rücken — löst festsitzenden Schleim",
        "Yoga: Sphinx, Kobra, Fisch — öffnen den Brustkorb und vertiefen den Atem",
        "Lippenbremse-Atmung — verlängert die Ausatmung und erleichtert das Abhusten",
      ]
    },
    geist: {
      einheit: "Die Lunge ist das Organ des Loslassens — mit jeder Ausatmung geben wir ab, was verbraucht ist. Bronchitis fragt: Was hältst du fest, das losgelassen werden möchte? Welche Trauer, welcher Schmerz wartet darauf, endlich Raum zu bekommen?",
      affirmationen: [
        "Ich atme frei und tief.",
        "Ich lasse los, was mir schwer auf der Brust liegt.",
        "Meine Lungen sind stark und weit.",
        "Ich erlaube mir, Raum einzunehmen — mit jedem Atemzug.",
      ],
      meditation: "Atem-Reinigungsmeditation: Bequem sitzen, die Hände auf den Brustkorb legen. Beim Einatmen den Brustkorb weit werden spüren. Beim Ausatmen — lang und langsam durch den leicht geöffneten Mund — alles Schwere und Alte abgeben. Sich vorstellen, wie mit jedem Ausatmen grauer Nebel den Körper verlässt und mit jedem Einatmen frisches, helles Licht einströmt.",
      energie: "Das Herz-Chakra (Anahata) liegt im Zentrum des Brustkorbs und ist eng mit der Lunge verbunden. Sanftes Tönen des Lautes 'AH' öffnet den Brustbereich. Auch das Auflegen eines grünen oder rosa Steines (Rosenquarz, Aventurin) auf die Brust wirkt harmonisierend.",
    },
    produkte: [
      { name: 'Artemisia Annua', desc: 'Antimikrobiell und atemwegsunterstützend — stärkt die Bronchialschleimhaut.', tags: ['#artemisia', '#atemwege'] },
      { name: 'CBD-Öl', desc: 'Entzündungshemmend und krampflösend — beruhigt gereizte Bronchien und fördert erholsamen Schlaf.', tags: ['#cbd', '#entzündung', '#atemwege'] },
      { name: 'Heiltee', desc: 'Kräuterteemischung mit Thymian, Spitzwegerich und Salbei für die Atemwege.', tags: ['#heiltee', '#atemwege'] },
      { name: 'Anorganischer Schwefel', desc: 'Unterstützt die Schleimhautregeneration und stärkt die Abwehrkraft der Atemwege.', tags: ['#schwefel', '#schleimhaut'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 4. Kopfschmerzen / Migräne
  // ─────────────────────────────────────────────
  {
    id: 'kopfschmerzen',
    name: 'Kopfschmerzen / Migräne',
    tags: ['#kopfschmerzen', '#migräne', '#nervensystem', '#spannung', '#schmerz'],
    koerper: "Kopfschmerzen entstehen durch Reizung schmerzempfindlicher Strukturen im Kopf — Blutgefäße, Hirnhäute und Nervenbahnen. Bei Spannungskopfschmerzen verkrampft die Muskulatur im Nacken- und Kopfbereich, bei Migräne kommt es zu einer Erweiterung der Blutgefäße mit Entzündungsreaktion. Der Trigeminusnerv sendet intensive Schmerzsignale. Häufige Auslöser sind Dehydration, Nackenverspannungen, Hormonschwankungen und Überlastung des Nervensystems.",
    psychosomatik: {
      zitat: "Kopfschmerzen — wenn der Kopf zu voll ist und das Herz zu leer.",
      text: "Kopfschmerzen zeigen, dass der Kopf die Führung übernommen hat — zu viel Denken, zu viel Kontrolle, zu wenig Verbindung zum Körper und zu den Gefühlen. Louise Hay beschreibt Migräne als Ausdruck von Perfektionismus und dem Drang, alles richtig zu machen. Dahlke sieht Kopfschmerz als Konflikt zwischen Wollen und Dürfen — der Kopf spannt sich an, weil gegensätzliche Kräfte gleichzeitig wirken. Wer regelmäßig Kopfschmerzen hat, darf sich fragen: Wo bin ich zu sehr im Kopf? Wo darf ich mehr ins Fühlen kommen, mehr ins Vertrauen?",
    },
    traditionen: {
      volksmedizin: "Pfefferminzöl auf die Schläfen ist eines der ältesten und wirksamsten Hausmittel gegen Kopfschmerzen — die Wirkung ist klinisch belegt. Mutterkraut (Tanacetum parthenium) wird seit dem Mittelalter vorbeugend bei Migräne eingesetzt. Kalte Stirnkompressen mit Lavendelwasser sind ebenfalls bewährt.",
      tcm: "In der TCM werden Kopfschmerzen nach Lokalisation differenziert: Stirnkopfschmerz betrifft den Magen-Meridian, Seitenkopfschmerz den Gallenblasen-Meridian, Hinterkopfschmerz den Blasen-Meridian. Leber-Qi-Stagnation mit aufsteigendem Yang ist die häufigste Ursache von Migräne. Akupressur am Punkt LI-4 (Hegu), GB-20 (Fengchi) und Tai Yang (Extrameridian an der Schläfe) wirkt oft sofort lindernd.",
      ayurveda: "Im Ayurveda ist Migräne häufig Pitta-bedingt — überschüssige Hitze steigt in den Kopf. Kühlendes Sandelholzöl auf der Stirn, Nasya mit Ghee und das Meiden von scharfen, sauren Speisen helfen. Bei Vata-Kopfschmerz (pulsierend, wechselnd) wirkt Sesamöl auf den Scheitel und warme Fußbäder.",
      germanisch: "Weidenrinde — die Urform des Aspirins — war das germanische Kopfschmerzmittel. Der Weidenbaum, der am Wasser steht, symbolisiert das Fließenlassen und Loslassen von Kontrolle.",
      alchemie: "Kopfschmerz zeigt eine Stauung der Mercurius-Kraft — der geistige Strom ist blockiert und sucht einen Ausweg. Die Lösung liegt im Fließenlassen, im Verbinden von Oben und Unten.",
    },
    kraeuter: [
      { name: 'Pfefferminze', wirkung: 'Äußerlich als Öl auf Schläfen und Nacken — kühlt, entspannt, wirkt schmerzlindernd. Innerlich als Tee.' },
      { name: 'Mutterkraut', wirkung: 'Vorbeugend bei Migräne — reduziert Häufigkeit und Schwere der Anfälle. Täglich als Tee oder Tinktur.' },
      { name: 'Weidenrinde', wirkung: 'Natürliches Salicin — schmerzlindernd und entzündungshemmend. Als Tee oder Extrakt.' },
      { name: 'Lavendel', wirkung: 'Beruhigend, krampflösend. Als ätherisches Öl auf die Schläfen oder in der Duftlampe. Als Tee bei stressbedingtem Kopfschmerz.' },
      { name: 'Pestwurz', wirkung: 'Klinisch geprüft bei Migräneprophylaxe. Als standardisierter Extrakt (Petadolex) 2x 75mg täglich.' },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Entspannt die Muskulatur und Blutgefäße. 400-600mg täglich als Magnesiumcitrat oder -glycinat. Essentiell bei Migräneneigung.' },
      { name: 'Coenzym Q10', wirkung: 'Verbessert die Energieversorgung der Mitochondrien. 300mg täglich — reduziert Migränehäufigkeit.' },
      { name: 'Vitamin B2 (Riboflavin)', wirkung: 'Hochdosiert 400mg täglich — senkt nachweislich die Migränehäufigkeit.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Entzündungshemmend, schützt die Gefäße. 2-3g täglich aus Fischöl oder Algenöl.' },
    ],
    ernaehrung: {
      empfehlung: "Regelmäßige, ausgewogene Mahlzeiten stabilisieren den Blutzucker und beugen Kopfschmerzen vor. Ausreichend Wasser trinken ist fundamental — viele Kopfschmerzen sind schlicht Dehydration. Histaminarme Ernährung hilft vielen Migränebetroffenen spürbar. Magnesiumreiche Lebensmittel gehören täglich auf den Tisch.",
      staerkend: ["Nüsse (besonders Mandeln, Cashews)", "Grünes Blattgemüse (Magnesium)", "Buchweizen", "Haferflocken", "Leinöl / Walnussöl", "Ingwer", "Kurkuma"],
      meiden: ["Alkohol (besonders Rotwein)", "Gereifter Käse (Histamin)", "Glutamat", "Aspartam", "Schokolade (bei Migräneneigung testen)", "Koffein-Entzug"],
      rezepte: [
        { name: 'Magnesium-Smoothie', zutaten: '1 Handvoll Spinat, 1 Banane, 1 EL Cashewmus, 1 EL Hanfsamen, 250ml Hafermilch', zubereitung: 'Alles im Mixer cremig pürieren. Reich an Magnesium und B-Vitaminen. Ideal als Frühstück bei Migräneneigung.' },
        { name: 'Ingwer-Kurkuma-Tonic', zutaten: '3cm frischer Ingwer, 1 TL Kurkuma, Saft einer Zitrone, Prise schwarzer Pfeffer, 1 TL Honig', zubereitung: 'Ingwer fein reiben, alles mit 300ml warmem Wasser verrühren. Abseihen und langsam trinken. Wirkt entzündungshemmend und kann akute Migräne lindern.' },
      ]
    },
    fasten: {
      text: "Intermittierendes Fasten kann bei regelmäßigen Kopfschmerzen langfristig helfen, da es Entzündungsprozesse reduziert und die Zellreinigung (Autophagie) fördert. Achtung: In der Umstellungsphase können anfangs Kopfschmerzen auftreten — ausreichend Wasser trinken und langsam beginnen.",
      formen: [
        "Intermittierendes Fasten (16:8) — nach der Eingewöhnung oft eine deutliche Reduktion der Kopfschmerzfrequenz",
        "Basen-Fastentag (1x pro Woche) — nur basische Lebensmittel, viel Gemüse und Kräutertee",
        "Histaminarme Fastenkur — 3 Tage histaminarme Kost als Austestung",
      ],
      reinigung: [
        "Ölziehen morgens — entlastet den Kopfbereich über die Mundschleimhaut",
        "Nasenspülung mit Salzwasser — reinigt die Nebenhöhlen und reduziert Druckkopfschmerz",
        "Leberwickel (feuchtwarmes Tuch mit Wärmflasche auf der rechten Seite) — unterstützt die Entgiftung",
      ]
    },
    bewegung: {
      text: "Regelmäßige, moderate Bewegung ist eine der besten Migräneprophylaxen. Sie baut Stresshormone ab, verbessert die Durchblutung und reguliert den Hormonhaushalt. Bei akutem Kopfschmerz helfen sanfte Dehnübungen und Entspannungstechniken.",
      praktiken: [
        "Nackendehnungen: Ohr zur Schulter, Kinn zur Brust — löst Nackenverspannungen, die oft Kopfschmerzen auslösen",
        "Ausdauertraining: 30 Min Joggen, Radfahren oder Schwimmen (3x/Woche) — die beste Migräneprophylaxe",
        "Schulterkreisen und Nackenmobilisation — morgens und bei ersten Anzeichen",
        "Progressive Muskelentspannung nach Jacobson — gezieltes Anspannen und Loslassen aller Muskelgruppen",
        "Yoga: Schulterstand (Sarvangasana), Pflug (Halasana), Vorwärtsbeuge — fördert die Durchblutung und entspannt",
      ]
    },
    geist: {
      einheit: "Kopfschmerzen erinnern daran, dass der Mensch mehr ist als sein Verstand. Der Kopf darf sich dem Herzen unterordnen — denken dient dem Fühlen und dem Sein. Wer lernt, das Denken loszulassen und im Moment zu sein, löst oft auch den Schmerz.",
      affirmationen: [
        "Ich lasse meine Gedanken los und komme im Moment an.",
        "Mein Kopf darf ruhen — mein Herz übernimmt.",
        "Ich vertraue dem Fluss des Lebens.",
        "Klarheit kommt aus der Stille, aus dem Fühlen.",
      ],
      meditation: "Body-Scan-Meditation: Im Liegen den Körper von den Zehenspitzen bis zum Scheitel durchwandern. Bei jeder Station bewusst entspannen. Am Kopf angekommen, sich vorstellen, wie eine Hand sanft über die Stirn streicht und alle Anspannung auflöst. Den Kopf schwer und weich werden lassen. 20 Minuten, am besten in einem abgedunkelten Raum.",
      energie: "Akupressur: Daumen und Zeigefinger der anderen Hand im Fleisch zwischen Daumen und Zeigefinger drücken (LI-4) — 1-2 Minuten pro Seite. Auch kreisende Massage der Schläfen und des Hinterkopfes in der Kuhle (GB-20) wirkt oft schnell.",
    },
    produkte: [
      { name: 'Magnesium-Öl', desc: 'Transdermal angewandt — Magnesium direkt über die Haut aufnehmen. Auf Nacken und Schläfen einreiben.', tags: ['#magnesium', '#schmerz', '#entspannung'] },
      { name: 'CBD-Öl', desc: 'Schmerzlindernd, entzündungshemmend. Kann Häufigkeit und Intensität von Kopfschmerzen reduzieren.', tags: ['#cbd', '#schmerz', '#entzündung'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat — als Badezusatz entspannt es die gesamte Muskulatur und lindert Spannungskopfschmerzen.', tags: ['#epsomit', '#magnesium', '#entspannung'] },
      { name: 'Borax-Tinktur', desc: 'Spurenelement Bor unterstützt den Magnesiumstoffwechsel und die Hormonbalance.', tags: ['#borax', '#mineralien'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 5. Rückenschmerzen
  // ─────────────────────────────────────────────
  {
    id: 'rueckenschmerzen',
    name: 'Rückenschmerzen',
    tags: ['#rücken', '#wirbelsäule', '#schmerz', '#muskulatur', '#haltung'],
    koerper: "Rückenschmerzen entstehen meist durch muskuläre Verspannungen und Dysbalancen — die tiefen Rückenmuskeln verkürzen und verhärten sich, während die Bauchmuskeln zu schwach sind. Die Bandscheiben, die als Puffer zwischen den Wirbeln dienen, verlieren bei Bewegungsmangel ihre Elastizität. Fehlhaltungen, langes Sitzen und einseitige Belastung führen zu Blockaden in den Wirbelgelenken. Der Rücken ist die tragende Säule des Körpers — und reagiert auf alles, was uns belastet.",
    psychosomatik: {
      zitat: "Der Rücken trägt, was die Seele noch verarbeiten darf.",
      text: "Rückenschmerzen gehören zu den sprechendsten psychosomatischen Symptomen. Der untere Rücken (Lendenwirbelsäule) steht für existenzielle Ängste — Geld, Sicherheit, Grundvertrauen. Der mittlere Rücken (Brustwirbelsäule) spiegelt Schuldgefühle und emotionale Lasten. Der obere Rücken und Nacken tragen die Last der Verantwortung — zu viel Pflicht, zu wenig Leichtigkeit. Thorwald Dethlefsen fragt: Was oder wen trägst du, das eigentlich abgelegt werden darf? Rückenschmerzen laden ein, aufrecht zu stehen — in der eigenen Wahrheit, mit dem eigenen Maß.",
    },
    traditionen: {
      volksmedizin: "Beinwell (Symphytum) — die „Knochenheile" — wird seit der Antike als Salbe bei Rückenschmerzen angewandt. Johanniskrautöl (Rotöl), warm einmassiert, lindert Nervenschmerzen. Kartoffelwickel auf dem Rücken spenden lang anhaltende, tiefe Wärme.",
      tcm: "In der TCM durchläuft der Blasen-Meridian den gesamten Rücken. Rückenschmerzen zeigen oft eine Nieren-Schwäche (Nieren-Yang- oder -Yin-Mangel). Wärmende Nieren-Tonics wie Du Zhong (Eucommia-Rinde) und Moxa auf BL-23 (Shenshu) stärken den unteren Rücken. Schröpfen auf dem Blasen-Meridian löst Stagnation.",
      ayurveda: "Im Ayurveda sind Rückenschmerzen häufig eine Vata-Störung — trockene, kalte, unruhige Energie staut sich im Rücken. Warme Sesam- oder Mahanarayana-Ölmassagen beruhigen Vata. Ashwagandha stärkt die Struktur, Guggulu wirkt entzündungshemmend. Basti (Öleinlauf) gilt als die königliche Vata-Therapie.",
      germanisch: "Die Wirbelsäule galt in nordischen Traditionen als der Weltenbaum (Yggdrasil) im Menschen — die Achse, die Himmel und Erde verbindet. Rückenleiden wurden mit Baumharz-Salben und Schwitzbädern behandelt.",
      alchemie: "Die Wirbelsäule ist der Sulphur-Kanal — die aufsteigende Lebenskraft. Stauungen im Rücken zeigen, dass die Kraft gehindert wird, aufzusteigen. Transformation geschieht durch Aufrichtung — im körperlichen wie im seelischen Sinne.",
    },
    kraeuter: [
      { name: 'Beinwell', wirkung: 'Äußerlich als Salbe oder Umschlag — fördert die Regeneration von Gewebe und Knochen. Tiefenwirksam bei Rückenbeschwerden.' },
      { name: 'Teufelskralle', wirkung: 'Entzündungshemmend und schmerzlindernd. Als Tee oder Extrakt (mindestens 4 Wochen einnehmen). Klassiker bei Rücken- und Gelenkschmerzen.' },
      { name: 'Johanniskrautöl (Rotöl)', wirkung: 'Warm in den Rücken einmassiert — lindert Nervenschmerzen und löst Verspannungen. Auch als Wickel.' },
      { name: 'Arnika', wirkung: 'Äußerlich als Salbe oder Tinktur — durchblutungsfördernd, entzündungshemmend, schmerzlindernd.' },
      { name: 'Weidenrinde', wirkung: 'Natürliches Schmerzmittel — als Tee oder Extrakt bei akuten Schmerzen.' },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Unverzichtbar bei Muskelverspannungen. 400-600mg täglich, am besten abends. Auch als Magnesiumöl direkt auf den Rücken.' },
      { name: 'MSM (Methylsulfonylmethan)', wirkung: 'Organischer Schwefel — entzündungshemmend, stärkt Bindegewebe und Knorpel. 2-4g täglich.' },
      { name: 'Vitamin D3', wirkung: 'Essentiell für Knochen und Muskulatur. Mangel verursacht häufig Rückenschmerzen. 5.000-10.000 IE täglich.' },
      { name: 'Kollagen', wirkung: 'Stärkt Bandscheiben, Bänder und Sehnen. 10g Kollagenhydrolysat täglich.' },
    ],
    ernaehrung: {
      empfehlung: "Entzündungshemmende Ernährung unterstützt den Rücken von innen. Omega-3-reiche Lebensmittel, buntes Gemüse und ausreichend Eiweiß für die Muskulatur stehen im Mittelpunkt. Basische Ernährung hilft, Übersäuerung im Gewebe abzubauen, die Verspannungen verstärkt. Ausreichend Wasser hält die Bandscheiben elastisch.",
      staerkend: ["Fettfischer Fisch (Lachs, Makrele)", "Grünes Blattgemüse", "Leinöl / Hanföl", "Knochenbrühe (Kollagen)", "Nüsse und Samen", "Kurkuma", "Ingwer"],
      meiden: ["Zucker (fördert Entzündung)", "Arachidonsäure (Schweinefleisch, Wurst)", "Weißmehlprodukte", "Alkohol", "Fertiggerichte"],
      rezepte: [
        { name: 'Anti-Entzündungs-Bowl', zutaten: 'Quinoa, Spinat, Avocado, Lachs (oder Räuchertofu), Hanfsamen, Leinöl, Kurkuma-Dressing', zubereitung: 'Quinoa kochen, Spinat waschen, Avocado und Lachs in Scheiben schneiden. Alles in einer Schüssel anrichten, mit Hanfsamen bestreuen und mit Kurkuma-Leinöl-Dressing (Leinöl, Kurkuma, schwarzer Pfeffer, Zitrone) beträufeln.' },
        { name: 'Goldene Knochenbrühe', zutaten: 'Knochenbrühe (500ml), 1 TL Kurkuma, 1 TL Ingwer gerieben, Prise schwarzer Pfeffer, Meersalz', zubereitung: 'Knochenbrühe sanft erhitzen, Kurkuma, Ingwer und Pfeffer einrühren. Warm trinken — nährt die Bandscheiben mit Kollagen und wirkt entzündungshemmend.' },
      ]
    },
    fasten: {
      text: "Basenfasten reduziert die Übersäuerung des Gewebes, die Muskelverspannungen verstärkt. Intervallfasten fördert die Autophagie — den zellulären Aufräumprozess, der auch Entzündungsreste in Gelenken und Muskeln abbaut. Viele Menschen berichten von deutlicher Schmerzreduktion durch regelmäßiges Fasten.",
      formen: [
        "Basenfasten (5-7 Tage) — ausschließlich basische Lebensmittel: Gemüse, Obst, Keimlinge, Kräutertee",
        "Intervallfasten (16:8) — langfristig entzündungshemmend und schmerzlindernd",
        "Heilfasten nach Buchinger (5-7 Tage) — tiefgreifende Entlastung des gesamten Bewegungsapparates",
      ],
      reinigung: [
        "Basenbad mit Natron und Epsomit — entsäuert über die Haut und entspannt die Muskulatur zutiefst",
        "Leberwickel — feuchtwarmes Tuch mit Wärmflasche auf der rechten Seite, 30 Min nach dem Essen",
        "Ölmassage des Rückens mit warmem Sesamöl — nährt das Gewebe und löst Verspannungen",
      ]
    },
    bewegung: {
      text: "Bewegung ist die wichtigste Medizin für den Rücken — Stillstand verschlimmert. Ein starker Rumpf, flexible Hüftbeuger und eine aufrechte Haltung bilden das Fundament. Tägliche Übungen machen den Unterschied zwischen chronischem Schmerz und Freiheit.",
      praktiken: [
        "Yoga: Katze-Kuh — die sanfteste und wirksamste Mobilisation für die gesamte Wirbelsäule, morgens und abends",
        "Tiefe Kniebeuge (Malasana/Hocke) — öffnet die Hüften und entlastet den unteren Rücken",
        "Hüftbeuger-Dehnung (Ausfallschritt) — verkürzte Hüftbeuger sind die häufigste Ursache für Rückenschmerzen",
        "Planke und Seitstütz — stärkt die tiefe Rumpfmuskulatur, die die Wirbelsäule stabilisiert",
        "Schwimmen — entlastet die Wirbelsäule komplett und kräftigt gleichzeitig die gesamte Rückenmuskulatur",
        "Faszienrolle — löst verklebte Faszien im Rücken und verbessert die Durchblutung",
      ]
    },
    geist: {
      einheit: "Der Rücken ist die Achse der Aufrichtung — im Körper wie im Leben. Rückenschmerzen fragen: Stehst du aufrecht in deiner Wahrheit? Trägst du nur das, was wirklich deins ist? Die Wirbelsäule will dich erinnern: Du darfst gerade stehen, mit Leichtigkeit, mit Würde, mit Freude.",
      affirmationen: [
        "Ich stehe aufrecht in meiner eigenen Kraft.",
        "Das Leben trägt mich — ich darf loslassen.",
        "Mein Rücken ist stark und flexibel.",
        "Ich trage nur, was mir gehört — alles andere lege ich ab.",
      ],
      meditation: "Wirbelsäulen-Meditation: Im Sitzen die Wirbelsäule aufrichten und spüren, wie sie eine lebendige Achse bildet, die Erde und Himmel verbindet. Von unten nach oben durch jeden Wirbel wandern — wie Perlen auf einer Schnur. Bei jedem Wirbel die Frage: Wo halte ich fest? Und dann: loslassen. Spüren, wie die Wirbelsäule sich mit jedem Loslassen aufrichtet und leichter wird.",
      energie: "Energetische Wirbelsäulenaufrichtung: Die Hände auf das Kreuzbein legen und warme Energie hineinströmen lassen. Langsam die Hände die Wirbelsäule hinauf wandern lassen. Besonders kraftvoll: jemand anderes legt die Hände auf, während du liegst und tief atmest.",
    },
    produkte: [
      { name: 'Magnesium-Öl', desc: 'Direkt auf den Rücken sprühen und einmassieren — Magnesium löst Verspannungen transdermal.', tags: ['#magnesium', '#muskulatur', '#entspannung'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat-Bad — tiefe Muskelentspannung und Entsäuerung des Gewebes.', tags: ['#epsomit', '#bad', '#muskulatur'] },
      { name: 'CBD-Öl', desc: 'Schmerzlindernd und entzündungshemmend — oral und äußerlich auf schmerzende Stellen.', tags: ['#cbd', '#schmerz'] },
      { name: 'Anorganischer Schwefel', desc: 'MSM-Quelle — stärkt Bindegewebe, Knorpel und wirkt entzündungshemmend.', tags: ['#schwefel', '#gelenke', '#entzündung'] },
      { name: 'Borax-Tinktur', desc: 'Spurenelement Bor für gesunde Knochen und Gelenke — unterstützt den Kalziumstoffwechsel.', tags: ['#borax', '#knochen', '#mineralien'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 6. Gelenkschmerzen / Arthrose
  // ─────────────────────────────────────────────
  {
    id: 'arthrose',
    name: 'Gelenkschmerzen / Arthrose',
    tags: ['#gelenke', '#arthrose', '#entzündung', '#knorpel', '#bewegung'],
    koerper: "Arthrose beschreibt den fortschreitenden Abbau von Gelenkknorpel — der natürliche Puffer zwischen den Knochen wird dünner und rauer. Die Gelenkflüssigkeit (Synovia), die den Knorpel nährt, wird weniger und zähflüssiger. Entzündungsreaktionen im Gelenk führen zu Schmerzen, Schwellung und Steifheit. Die gute Nachricht: Knorpel ist lebendes Gewebe und kann sich regenerieren, wenn er die richtigen Nährstoffe und Reize bekommt — Bewegung, Entlastung und gezielte Ernährung machen einen echten Unterschied.",
    psychosomatik: {
      zitat: "Steife Gelenke fragen: Wo bist du unbeweglich geworden im Leben?",
      text: "Gelenke stehen für Flexibilität — die Fähigkeit, sich dem Leben anzupassen, die Richtung zu wechseln, geschmeidig zu bleiben. Arthrose zeigt, wo innere Starrheit sich im Körper manifestiert hat. Louise Hay verbindet Gelenkprobleme mit festgefahrenen Mustern und der Weigerung, neue Wege zu gehen. Dahlke fragt: In welchem Lebensbereich bist du eingerostet? Welche Bewegung verweigerst du dir? Je nachdem, welches Gelenk betroffen ist, zeigt sich die Thematik: Knie stehen für Demut und Flexibilität, Hüfte für das Voranschreiten, Finger für die feinen Griffe des Alltags.",
    },
    traditionen: {
      volksmedizin: "Beinwell-Umschläge und Brennnesselkur (als Tee oder in der Suppe) sind die Klassiker der Volksmedizin bei Gelenkbeschwerden. Auch das Peitschen mit frischen Brennnesseln auf die betroffenen Gelenke ist eine alte, wirkungsvolle Methode. Murmeltieröl und Weihrauchsalbe werden äußerlich aufgetragen.",
      tcm: "Die TCM sieht Arthrose als Bi-Syndrom — Wind, Kälte und Feuchtigkeit dringen in die Gelenke ein und blockieren den Qi- und Blutfluss. Moxa (Erwärmung mit Beifußkraut) auf den betroffenen Gelenken vertreibt Kälte und Feuchtigkeit. Du Huo Ji Sheng Tang ist eine klassische Kräuterformel für Gelenkbeschwerden.",
      ayurveda: "Im Ayurveda ist Arthrose (Sandhivata) eine Vata-Störung — trockene, raue Energie schädigt die Gelenke. Warme Ölmassagen (Abhyanga) mit Mahanarayana-Öl nähren die Gelenke von außen. Guggulu, Ashwagandha und Shatavari stärken die Struktur von innen. Ghee und Sesamöl in der Ernährung schmieren die Gelenke.",
      germanisch: "Wacholderbeeren, geräuchert oder als Tee, galten als starkes Mittel gegen Gelenksteife. Auch Bäder in heißen Quellen und das Auflegen von erwärmten Steinen auf die Gelenke waren verbreitet.",
      alchemie: "Arthrose zeigt eine Verhärtung des Sal-Prinzips — die Materie wird starr, wo sie fließen sollte. Die alchemistische Lösung ist das Solve (Auflösen) — durch Wärme, Bewegung und nährende Substanzen das Starre wieder geschmeidig machen.",
    },
    kraeuter: [
      { name: 'Weihrauch (Boswellia)', wirkung: 'Hemmt spezifisch die Enzyme der Gelenkentzündung. 3x 400mg Boswellia-Extrakt täglich. Eines der wirksamsten Kräuter bei Arthrose.' },
      { name: 'Kurkuma', wirkung: 'Curcumin ist stark entzündungshemmend. Als Extrakt mit Piperin (schwarzer Pfeffer) für bessere Aufnahme. 500-1000mg Curcumin täglich.' },
      { name: 'Teufelskralle', wirkung: 'Schmerzlindernd und entzündungshemmend. Als Extrakt 2-4g täglich, mindestens 8 Wochen einnehmen.' },
      { name: 'Brennnessel', wirkung: 'Entsäuernd, mineralstoffreich, entzündungshemmend. Als Tee (3-4 Tassen täglich) oder Brennnesselpulver in Smoothies.' },
      { name: 'Hagebutte', wirkung: 'Galaktolipide aus Hagebutte schützen den Knorpel nachweislich. Als Pulver 5g täglich.' },
    ],
    stoffe: [
      { name: 'MSM (Methylsulfonylmethan)', wirkung: 'Organischer Schwefel — Baustein für Knorpel und Bindegewebe. 3-6g täglich, entzündungshemmend.' },
      { name: 'Glucosamin und Chondroitin', wirkung: 'Bausteine des Gelenkknorpels. 1500mg Glucosamin + 1200mg Chondroitin täglich. Regeneration braucht 3-6 Monate.' },
      { name: 'Hyaluronsäure', wirkung: 'Bestandteil der Gelenkflüssigkeit. 200mg täglich oral — verbessert die Gelenkschmierung.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'Stark entzündungshemmend. 3g täglich aus Fischöl oder Algenöl.' },
    ],
    ernaehrung: {
      empfehlung: "Entzündungshemmende, basische Ernährung ist die Basis der Gelenkgesundheit. Omega-3-Fettsäuren, Antioxidantien und schwefelhaltige Lebensmittel schützen und nähren den Knorpel. Tierisches Eiweiß (besonders Schweinefleisch) darf reduziert werden, da Arachidonsäure Entzündungen fördert. Knochenbrühe liefert natürliches Kollagen, Glucosamin und Chondroitin.",
      staerkend: ["Knochenbrühe (Kollagen)", "Fettreicher Fisch", "Leinöl / Hanföl", "Brennnesselsuppe", "Kurkuma mit schwarzem Pfeffer", "Knoblauch und Zwiebeln (Schwefel)", "Beeren (Antioxidantien)"],
      meiden: ["Schweinefleisch und Wurstwaren (Arachidonsäure)", "Zucker", "Weißmehl", "Alkohol", "Solanaceae bei Empfindlichkeit (Tomaten, Paprika, Auberginen)"],
      rezepte: [
        { name: 'Kurkuma-Gelenk-Paste (Golden Paste)', zutaten: '60g Kurkumapulver, 250ml Wasser, 70ml Kokosöl, 2 TL frisch gemahlener schwarzer Pfeffer', zubereitung: 'Kurkuma und Wasser in einem Topf bei mittlerer Hitze zu einer Paste rühren (ca. 7 Min). Kokosöl und Pfeffer einrühren. Im Kühlschrank aufbewahren. 1-2 TL täglich in warme Milch, Suppe oder Smoothie einrühren.' },
        { name: 'Brennnessel-Smoothie', zutaten: '2 Handvoll junge Brennnesselblätter (blanchiert), 1 Banane, 1 EL Hanfsamen, 1 TL Leinöl, 200ml Hafermilch', zubereitung: 'Alle Zutaten im Mixer cremig pürieren. Reich an Mineralstoffen, Eisen und entzündungshemmenden Stoffen. Täglich morgens trinken.' },
      ]
    },
    fasten: {
      text: "Fasten zeigt bei Gelenkbeschwerden oft eindrucksvolle Ergebnisse — die Entzündungsmarker sinken, die Autophagie räumt Ablagerungen in den Gelenken auf, und viele Menschen spüren nach einer Fastenkur deutlich weniger Schmerzen. Auch die Gewichtsreduktion durch Fasten entlastet die Gelenke direkt.",
      formen: [
        "Heilfasten nach Buchinger (7-14 Tage) — die Königsdisziplin bei Gelenkbeschwerden, klinisch erforscht",
        "Basenfasten (7 Tage) — nur basische, pflanzliche Lebensmittel — entsäuert das Gewebe",
        "Intermittierendes Fasten (16:8) dauerhaft — reduziert chronische Entzündungsprozesse",
      ],
      reinigung: [
        "Basenbad mit Natron (3 EL) und Epsomit (500g) — entsäuert über die Haut und nährt mit Magnesium",
        "Brennnessel-Trinkkur — 3 Wochen lang täglich 1 Liter Brennnesseltee",
        "Leberwickel — unterstützt die Ausscheidung von Stoffwechselabfällen",
        "Warme Ölwickel auf betroffene Gelenke (Sesamöl oder Rizinusöl) — nährt und erwärmt von außen",
      ]
    },
    bewegung: {
      text: "Bewegung ist die beste Medizin für Gelenke — denn der Knorpel hat selbst keine Blutgefäße und wird nur durch Bewegung ernährt: Druck und Entlastung wirken wie ein Schwamm, der Nährstoffe aufnimmt. Regelmäßige, gelenkschonende Bewegung hält die Gelenke geschmeidig und den Knorpel lebendig.",
      praktiken: [
        "Schwimmen und Aqua-Gymnastik — Bewegung im Wasser entlastet die Gelenke komplett und stärkt gleichzeitig",
        "Radfahren — gleichmäßige Gelenkbewegung mit dem eigenen Rhythmus",
        "Yoga: Katze-Kuh, sanfte Drehungen, Krieger I und II — mobilisiert und stärkt die Gelenke",
        "Qi Gong: Die 8 Brokate — fließende Bewegungen, die alle Gelenke geschmeidig halten",
        "Tägliches Gelenkkreisen: Fußgelenke, Knie, Hüfte, Schultern, Handgelenke — morgens jeweils 10x in jede Richtung",
      ]
    },
    geist: {
      einheit: "Gelenke verbinden und ermöglichen Bewegung — im Körper wie im Geist. Arthrose fragt sanft: Wo bist du festgefahren? Wo darf mehr Geschmeidigkeit, mehr Spielraum, mehr Leichtigkeit in dein Leben kommen? Die Gelenke möchten tanzen — und sie laden dich ein, es auch zu tun.",
      affirmationen: [
        "Ich bewege mich mit Leichtigkeit und Freude durch mein Leben.",
        "Meine Gelenke sind geschmeidig und genährt.",
        "Ich bin flexibel und offen für Neues.",
        "Jede Bewegung nährt meinen Körper und schenkt mir Lebendigkeit.",
      ],
      meditation: "Gelenk-Visualisation: In Stille sitzen und mit der Aufmerksamkeit zu einem betroffenen Gelenk reisen. Es von innen betrachten, wie einen Raum. Goldene, warme Flüssigkeit hineinfließen sehen — sie schmiert, nährt und erneuert den Knorpel. Spüren, wie das Gelenk weicher wird, geschmeidiger, freier. Dem Gelenk danken für alles, was es trägt und bewegt.",
      energie: "Handauflegen auf betroffene Gelenke mit der Intention von Wärme und Nährung. Auch die Vorstellung eines warmen, goldenen Lichtes, das durch das Gelenk fließt, kann die Durchblutung und Regeneration spürbar unterstützen.",
    },
    produkte: [
      { name: 'Anorganischer Schwefel', desc: 'MSM-Quelle — essentieller Baustein für Knorpel, Bänder und Sehnen. Wirkt entzündungshemmend.', tags: ['#schwefel', '#gelenke', '#knorpel'] },
      { name: 'Borax-Tinktur', desc: 'Bor ist essentiell für den Knochenstoffwechsel und hilft, Kalzium richtig einzulagern.', tags: ['#borax', '#knochen', '#gelenke'] },
      { name: 'Zeolith / ZeoMont', desc: 'Bindet Schadstoffe und Säuren im Körper — unterstützt die Entsäuerung des Gewebes.', tags: ['#zeolith', '#entgiftung', '#entsäuerung'] },
      { name: 'CBD-Öl', desc: 'Lindert Gelenkschmerzen und hemmt Entzündungsprozesse — oral und äußerlich anwendbar.', tags: ['#cbd', '#gelenke', '#schmerz'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat-Bad — entsäuert, entspannt und nährt das Gewebe rund um die Gelenke.', tags: ['#epsomit', '#magnesium', '#gelenke'] },
      { name: 'Magnesium-Öl', desc: 'Transdermal aufgetragen auf steife Gelenke — fördert die Durchblutung und Entspannung.', tags: ['#magnesium', '#gelenke'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 7. Schlafthemen
  // ─────────────────────────────────────────────
  {
    id: 'schlaf',
    name: 'Schlafthemen',
    tags: ['#schlaf', '#insomnie', '#nervensystem', '#melatonin', '#regeneration'],
    koerper: "Schlaf ist der wichtigste Regenerationsprozess des Körpers — nachts repariert sich Gewebe, konsolidiert sich Gelerntes, und das Immunsystem arbeitet auf Hochtouren. Das Schlafhormon Melatonin wird bei Dunkelheit in der Zirbeldrüse gebildet und steht im Gleichgewicht mit dem Wachhormon Cortisol. Schlafprobleme entstehen, wenn dieses Gleichgewicht gestört ist: zu viel Licht am Abend, zu viel Cortisol durch Stress, ein überaktives Nervensystem, das nicht vom Sympathikus (Aktivierung) in den Parasympathikus (Ruhe) wechseln kann.",
    psychosomatik: {
      zitat: "Wer sich dem Tag vollständig hingibt, dem schenkt sich die Nacht.",
      text: "Schlafstörungen zeigen, dass der Geist das Loslassen verlernt hat. Die Kontrolle, die tagsüber funktional ist, wird nachts zum Hindernis. Louise Hay sieht Schlaflosigkeit als Ausdruck von Angst — die Angst, loszulassen und sich dem Unbewussten anzuvertrauen. Dethlefsen beschreibt Schlaf als kleinen Tod: Wer Schwierigkeiten hat einzuschlafen, hat Schwierigkeiten mit dem Loslassen von Kontrolle. Wer nachts aufwacht, steht im Dialog mit ungelösten Themen — die TCM ordnet jede Nacht-Uhrzeit einem Organ zu. Die Einladung: Was muss erst gelöst werden, damit du dich fallen lassen kannst?",
    },
    traditionen: {
      volksmedizin: "Baldrian, Hopfen und Melisse sind das goldene Trio der Schlafkräuter in der europäischen Volksmedizin. Ein Hopfenkissen unter dem Kopfkissen verströmt schlaffördernde Düfte die ganze Nacht. Warme Milch mit Honig vor dem Schlafen ist ein universelles Hausmittel — der beruhigende Effekt ist auch rituell wirksam.",
      tcm: "In der TCM ist Schlaf ein Yin-Prozess — das aktive Yang zieht sich zurück und das nährende Yin übernimmt. Schlafstörungen zeigen oft Yin-Mangel, Blut-Mangel oder aufsteigendes Leber-Feuer. Suan Zao Ren (Jujube-Samen) ist das wichtigste Schlafkraut der TCM. Akupressur auf HT-7 (Shenmen am Handgelenk) beruhigt den Geist. Die Organmutter: Aufwachen um 1-3 Uhr zeigt ein Leber-Thema, um 3-5 Uhr ein Lungen-Thema.",
      ayurveda: "Im Ayurveda ist Schlaflosigkeit eine Vata-Störung — zu viel Bewegung, Trockenheit und Leichtigkeit im System. Die Therapie: alles, was erdet und beruhigt. Warmes Sesamöl auf den Scheitel und die Fußsohlen massiert (Shiroabhyanga und Padabhyanga) wirkt oft Wunder. Ashwagandha als Milchtrunk vor dem Schlafen ist das klassische Vata-Schlafmittel.",
      germanisch: "Baldrian war in der nordischen Tradition der Göttin Freya geweiht und galt als heiliges Schlafkraut. Beifuß unter dem Kopfkissen förderte luzides Träumen und schützte den Schlaf.",
      alchemie: "Schlaf ist die Nigredo der Alchemie — die Schwärzung, die Auflösung im Dunkeln. Wer sich dieser Dunkelheit hingibt, erfährt Transformation. Wer sich dagegen wehrt, bleibt in der ungelösten Spannung.",
    },
    kraeuter: [
      { name: 'Baldrian', wirkung: 'Beruhigend, schlaffördernd, angstlösend. Als Tee oder Tinktur 30-60 Min vor dem Schlafen. Wirkt am besten bei regelmäßiger Einnahme über 2-4 Wochen.' },
      { name: 'Hopfen', wirkung: 'Beruhigt und fördert den Schlaf — wirkt synergistisch mit Baldrian. Als Tee oder im Schlafkissen.' },
      { name: 'Passionsblume', wirkung: 'Angstlösend, beruhigend — besonders bei Einschlafproblemen durch Grübeln. Als Tee oder Tinktur.' },
      { name: 'Melisse', wirkung: 'Beruhigend, stimmungsaufhellend, entkrampfend. Als Tee (frische Blätter ideal) am Abend.' },
      { name: 'Lavendel', wirkung: 'Beruhigend, angstlösend. Als ätherisches Öl am Kissen, im Bad oder als Tee.' },
      { name: 'Ashwagandha', wirkung: 'Adaptogen — reguliert den Cortisolspiegel und beruhigt das Nervensystem. 300-600mg Extrakt am Abend.' },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Das "Schlafmineral" — entspannt Muskeln und Nervensystem. 400mg Magnesiumglycinat am Abend.' },
      { name: 'Melatonin', wirkung: 'Das Schlafhormon — 0,5-3mg 30 Min vor dem Schlafen. Besonders bei Jetlag und verschobenem Rhythmus.' },
      { name: 'L-Tryptophan', wirkung: 'Vorstufe von Serotonin und Melatonin. 500-1000mg am Abend auf leeren Magen.' },
      { name: 'GABA', wirkung: 'Hemmender Neurotransmitter — beruhigt ein überaktives Nervensystem. 250-500mg am Abend.' },
    ],
    ernaehrung: {
      empfehlung: "Die letzte Mahlzeit darf 3-4 Stunden vor dem Schlafengehen liegen — leicht, warm und nährend. Tryptophanreiche Lebensmittel am Abend unterstützen die Melatoninbildung. Schwere, späte Mahlzeiten und Stimulanzien stören den natürlichen Schlafrhythmus. Ein warmer Schlaftrunk ist ein schönes Ritual, das Körper und Seele auf die Nacht einstimmt.",
      staerkend: ["Haferflocken (Melatonin-Vorstufe)", "Walnüsse (natürliches Melatonin)", "Kirschen (besonders Sauerkirschen)", "Bananen", "Mandeln", "Warme Milch / Pflanzenmilch", "Honig"],
      meiden: ["Koffein nach 14 Uhr", "Alkohol am Abend (stört den Tiefschlaf)", "Zucker am Abend", "Schwere, fettige Mahlzeiten spät", "Bildschirmlicht nach 20 Uhr"],
      rezepte: [
        { name: 'Moon Milk (Schlafmilch)', zutaten: '250ml warme Milch (oder Mandelmilch), 1 TL Ashwagandha-Pulver, 1/2 TL Zimt, Prise Muskat, 1 TL Honig', zubereitung: 'Milch sanft erwärmen, Ashwagandha, Zimt und Muskat einrühren. Honig zugeben. 30 Minuten vor dem Schlafen langsam und achtsam trinken. Ein beruhigendes Abendriutal.' },
        { name: 'Schlaftee-Mischung', zutaten: 'Baldrian (2 Teile), Hopfen (1 Teil), Melisse (1 Teil), Passionsblume (1 Teil), Lavendel (1/2 Teil)', zubereitung: 'Kräuter mischen. 2 TL der Mischung mit 250ml kochendem Wasser übergießen, 10-15 Min abgedeckt ziehen lassen. 1 Stunde vor dem Schlafen trinken.' },
      ]
    },
    fasten: {
      text: "Intermittierendes Fasten mit einem frühen Abendessen (z.B. letzte Mahlzeit um 17-18 Uhr) verbessert die Schlafqualität deutlich. Ein leerer Magen ermöglicht dem Körper, in den Tiefschlaf zu finden, statt mit Verdauung beschäftigt zu sein. Regelmäßige Essenszeiten stabilisieren den zirkadianen Rhythmus.",
      formen: [
        "Frühes Abendfasten — letzte Mahlzeit vor 18 Uhr, dann nur noch Kräutertee",
        "Intervallfasten (16:8) mit Essfenster 10-18 Uhr — synchronisiert den Biorhythmus",
        "Digitales Fasten — Bildschirmfreie Zeit ab 20 Uhr als Ergänzung zum Nahrungsfasten",
      ],
      reinigung: [
        "Warmes Fußbad mit Lavendel und Epsomit vor dem Schlafen — zieht die Energie nach unten und beruhigt",
        "Ölmassage der Fußsohlen mit warmem Sesamöl (Padabhyanga) — erdend und schlaffördernd",
        "Atemübung 4-7-8 im Bett — beruhigt das Nervensystem in wenigen Minuten",
        "Lavendel-Raumspray oder Duftlampe — signalisiert dem Gehirn: jetzt ist Schlafenszeit",
      ]
    },
    bewegung: {
      text: "Regelmäßige Bewegung am Tag ist eine der wirksamsten Maßnahmen für guten Schlaf — sie baut Stresshormone ab und ermüdet den Körper auf gesunde Weise. Intensive Bewegung darf mindestens 3-4 Stunden vor dem Schlafen enden. Am Abend sind beruhigende, sanfte Praktiken ideal.",
      praktiken: [
        "Tagsüber: 30-60 Min Ausdauerbewegung (Laufen, Radfahren, Schwimmen) — der beste natürliche Schlafmacher",
        "Abend-Yoga: Kindhaltung, Vorwärtsbeuge, Drehsitz, Beine an die Wand — parasympathische Aktivierung",
        "Yoga Nidra (Schlaf-Yoga) — tiefe Entspannung im Liegen, die direkt in den Schlaf übergehen kann",
        "Progressive Muskelentspannung — systematisches Anspannen und Lösen aller Muskelgruppen im Bett",
        "Langsamer Abendspaziergang — frische Luft, natürliches Licht der Dämmerung, Bewegung ohne Anstrengung",
      ]
    },
    geist: {
      einheit: "Schlaf ist ein Akt des Vertrauens — Vertrauen, dass die Welt auch ohne deine Kontrolle weiterbesteht. Wer loslassen kann, sinkt in die Tiefe. Wer festhalten muss, bleibt an der Oberfläche. Jede Nacht ist eine Einladung: Vertraue. Lass fallen. Du wirst getragen.",
      affirmationen: [
        "Ich lasse den Tag los und vertraue mich der Nacht an.",
        "Mein Körper weiß, wie er schläft — ich erlaube es ihm.",
        "Ich bin sicher. Ich bin gehalten. Ich darf loslassen.",
        "Mit jedem Atemzug sinke ich tiefer in Ruhe und Frieden.",
      ],
      meditation: "Schlaf-Meditation: Im Bett auf dem Rücken liegen, die Augen schließen. Den Körper von den Füßen aufwärts bewusst schwer werden lassen. Zu jedem Körperteil sagen: 'Meine Füße sind schwer und warm. Meine Beine sind schwer und warm.' So bis zum Kopf wandern. Dann sich vorstellen, auf einer warmen Wolke zu liegen, die langsam durch eine sternenklare Nacht schwebt. Das sanfte Schaukeln spüren. Loslassen.",
      energie: "Das Kronenchakra (Sahasrara) am Scheitel verbindet mit dem Höheren und dem Schlaf. Sanftes Kreisen mit dem Finger auf dem Scheitel beruhigt. Auch das Auflegen von Amethyst auf die Stirn (Drittes Auge) fördert tiefen, traumreichen Schlaf.",
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Beruhigt das Nervensystem, fördert das Einschlafen und verlängert die Tiefschlafphasen.', tags: ['#cbd', '#schlaf', '#nervensystem'] },
      { name: 'Magnesium-Öl', desc: 'Auf die Fußsohlen oder den Nacken sprühen — Magnesium transdermal entspannt und fördert den Schlaf.', tags: ['#magnesium', '#schlaf', '#entspannung'] },
      { name: 'Epsomit', desc: 'Magnesiumsulfat-Bad am Abend — tiefenentspannend, erdend, schlaffördernd.', tags: ['#epsomit', '#schlaf', '#bad'] },
      { name: 'Heiltee', desc: 'Kräuterteemischung mit schlaffördernden Pflanzen — als Abendritual.', tags: ['#heiltee', '#schlaf', '#kräuter'] },
      { name: 'Kratom', desc: 'In niedriger Dosis (1-2g) beruhigend und schlaffördernd. Rote Sorten wie Red Borneo eignen sich am Abend.', tags: ['#kratom', '#schlaf', '#entspannung'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 8. Stress / Burnout / Erschöpfung
  // ─────────────────────────────────────────────
  {
    id: 'stress',
    name: 'Stress / Burnout / Erschöpfung',
    tags: ['#stress', '#burnout', '#erschöpfung', '#nebenniere', '#nervensystem', '#cortisol'],
    koerper: "Chronischer Stress versetzt den Körper in einen Dauerzustand der Alarmbereitschaft — der Sympathikus dominiert, Cortisol und Adrenalin bleiben ständig erhöht. Die Nebennieren, die diese Stresshormone produzieren, erschöpfen sich mit der Zeit (Nebennierenschwäche). Die Folge: ein Nervensystem, das gleichzeitig übererregt und erschöpft ist. Schlaf, Verdauung, Immunsystem und Hormonbalance geraten durcheinander. Der Körper sagt klar: So geht es weiter — in eine andere Richtung.",
    psychosomatik: {
      zitat: "Burnout ist die Ehrlichkeit des Körpers, wenn die Seele längst geflüstert hat.",
      text: "Burnout ist mehr als Erschöpfung — es ist der Zusammenbruch eines Lebenskonzeptes, das auf Leistung, Funktionieren und äußerer Anerkennung gebaut war. Louise Hay sieht chronischen Stress als Ausdruck von Angst — die Angst, zu versagen, die Angst, wertlos zu sein, wenn man aufhört zu leisten. Dahlke beschreibt Burnout als den Moment, in dem das Feuer der Begeisterung erloschen ist, weil es für fremde Zwecke brannte. Die tiefe Frage lautet: Was entzündet mein eigenes Feuer? Was ist mein Herzensprojekt? Burnout ist die Einladung, das eigene Leben von Grund auf neu zu gestalten.",
    },
    traditionen: {
      volksmedizin: "Adaptogene Pflanzen haben in der Volksmedizin verschiedener Kulturen eine lange Tradition. In Europa galten Melisse und Johanniskraut als Nervenkräuter. Hafer (Avena sativa) in seiner grünen, milchigen Form galt als stärkstes Nerventonikum. Waldbaden — das bewusste Eintauchen in die Natur — wurde intuitiv praktiziert.",
      tcm: "Die TCM sieht Burnout als schwere Erschöpfung von Qi und Yin — besonders der Nieren-Essenz (Jing). Die Therapie fokussiert auf sanftes Auffüllen: Qi-tonische Kräuter wie Ginseng und Astragalus, Yin-nährende Mittel wie Goji-Beeren und Rehmannia. Qi Gong und Tai Chi gelten als die ideale Bewegungsform — sie füllen auf, statt auszuzehren.",
      ayurveda: "Im Ayurveda ist Burnout eine Vata-Pitta-Erschöpfung: das Feuer (Pitta) hat das System ausgebrannt, und der Wind (Vata) hat alles ausgetrocknet. Ashwagandha ist das Mittel der Wahl — es stärkt, erdet und nährt gleichzeitig. Panchakarma-Kuren (ayurvedische Reinigungskuren) bringen das System von Grund auf in die Balance zurück.",
      germanisch: "Ruhe und Rückzug in die Natur galten in nordischen Kulturen als heilige Praxis der Erneuerung. Die Rauhnächte — die stille Zeit zwischen den Jahren — waren der Inbegriff des bewussten Innehaltens und der Rückverbindung mit den inneren Kräften.",
      alchemie: "Burnout entspricht der Nigredo — der Schwärzung, dem Zerfall alter Strukturen. Es ist der notwendige Zusammenbruch, der der Neugeburt vorausgeht. Wer durch diese Dunkelheit geht, findet am anderen Ende ein neues, authentischeres Selbst.",
    },
    kraeuter: [
      { name: 'Ashwagandha', wirkung: 'König der Adaptogene — senkt Cortisol, stärkt die Nebennieren, verbessert Schlaf und Energie. 300-600mg KSM-66 Extrakt täglich.' },
      { name: 'Rhodiola Rosea', wirkung: 'Rosenwurz — steigert die Stressresistenz und geistige Klarheit. 200-400mg standardisierter Extrakt morgens.' },
      { name: 'Heiliges Basilikum (Tulsi)', wirkung: 'Adaptogen, beruhigend, klärt den Geist. Als Tee 2-3 Tassen täglich — ideal bei Erschöpfung mit innerem Unruhe.' },
      { name: 'Johanniskraut', wirkung: 'Stimmungsaufhellend, nervenstärkend. 300mg Extrakt (standardisiert auf 0,3% Hypericin) 3x täglich. Wirkung entfaltet sich nach 2-4 Wochen.' },
      { name: 'Hafer (Avena sativa)', wirkung: 'Nervennährend und aufbauend. Als grüner Haferextrakt oder Haferstroh-Tee — stärkt erschöpfte Nerven sanft und nachhaltig.' },
      { name: 'Melisse', wirkung: 'Beruhigend, herzöffnend, angstlösend. Als frischer Tee ein sanfter Begleiter bei nervöser Erschöpfung.' },
    ],
    stoffe: [
      { name: 'Magnesium', wirkung: 'Das "Anti-Stress-Mineral" — wird bei Stress massiv verbraucht. 400-600mg täglich als Glycinat oder Taurat.' },
      { name: 'B-Vitamine', wirkung: 'Der gesamte B-Komplex unterstützt das Nervensystem. Besonders B5 (Pantothensäure) nährt die Nebennieren. Als aktivierter B-Komplex.' },
      { name: 'Vitamin C', wirkung: 'Die Nebennieren haben den höchsten Vitamin-C-Bedarf aller Organe. 2-4g täglich unterstützt die Nebennierenfunktion.' },
      { name: 'Omega-3-Fettsäuren', wirkung: 'EPA und DHA schützen das Gehirn vor stressbedingter Entzündung. 2-3g täglich.' },
    ],
    ernaehrung: {
      empfehlung: "Bei Erschöpfung braucht der Körper hochwertige, nährstoffdichte Kost — jede Mahlzeit darf ein Akt der Fürsorge sein. Regelmäßige Mahlzeiten stabilisieren den Blutzucker und schonen die Nebennieren. Warme, gekochte Speisen entlasten die Verdauung. Eiweiß und gesunde Fette liefern Bausubstanz für die Hormonproduktion.",
      staerkend: ["Eier (B-Vitamine, Cholin)", "Nüsse und Samen (Magnesium, Omega-3)", "Avocado (Kalium, B-Vitamine)", "Süßkartoffel (komplexe Kohlenhydrate)", "Beeren (Antioxidantien)", "Haferflocken", "Grünes Blattgemüse"],
      meiden: ["Koffein (erschöpft die Nebennieren weiter)", "Zucker (Blutzucker-Achterbahn)", "Alkohol", "Weißmehlprodukte", "Hochverarbeitete Lebensmittel"],
      rezepte: [
        { name: 'Nebennieren-Cocktail', zutaten: 'Saft einer Orange, 1/2 TL Meersalz, 1/2 TL Cream of Tartar (Kalium), 250ml Kokoswassr', zubereitung: 'Alle Zutaten verrühren. Morgens auf nüchternen Magen trinken. Liefert Natrium, Kalium und Vitamin C — genau das, was erschöpfte Nebennieren brauchen.' },
        { name: 'Energiebowl', zutaten: 'Haferflocken (gekocht), 1 EL Hanfsamen, 1 EL Cashewmus, Beeren, 1 TL Ashwagandha-Pulver, Honig', zubereitung: 'Warmen Haferbrei mit allen Toppings anrichten. Ein nährendes, stärkendes Frühstück, das den Tag sanft und kraftvoll beginnt.' },
      ]
    },
    fasten: {
      text: "Bei akutem Burnout ist sanftes Fasten angezeigt — kein strenges Heilfasten, da der Körper ohnehin erschöpft ist. Intermittierendes Fasten mit einem großzügigen Essfenster und nährstoffreicher Kost entlastet, ohne zu erschöpfen. In einer späteren Phase der Erholung kann eine Buchinger-Kur tiefgreifende Regeneration einleiten.",
      formen: [
        "Intermittierendes Fasten (14:10 oder 16:8) — sanft, ohne den Körper zu stressen",
        "Digitales Fasten — regelmäßige bildschirmfreie Tage oder Halbtage, essentiell bei Burnout",
        "Reizfasten — Reduktion aller Reize: Nachrichten, Social Media, Termine — Raum schaffen für Stille",
      ],
      reinigung: [
        "Basenbad mit Epsomit und Natron (2x/Woche) — tiefe Entspannung und Entgiftung über die Haut",
        "Morgens warmes Wasser mit Zitrone — sanfter Start, der die Verdauung und Entgiftung fördert",
        "Ölmassage (Abhyanga) mit warmem Sesamöl — nährt das Nervensystem über die Haut",
        "Erdung: Barfuß auf der Erde stehen (10-20 Min) — erdende Elektronen aus dem Boden aufnehmen",
      ]
    },
    bewegung: {
      text: "Bei Erschöpfung ist weniger mehr — sanfte, rhythmische Bewegung baut Stresshormone ab und füllt die Energiereserven auf. Intensive Belastung kann den Körper weiter erschöpfen und darf warten, bis die Grundenergie zurückkehrt. Die Natur ist der beste Therapieraum.",
      praktiken: [
        "Waldbaden (Shinrin-yoku) — 1-2 Stunden achtsam im Wald sein, alle Sinne öffnen, nichts tun müssen",
        "Qi Gong: Stehen wie ein Baum (Zhan Zhuang) — stille Stehmeditation, die Energie auffüllt statt verbraucht",
        "Restorative Yoga — nur liegende und gestützte Positionen, 20-30 Min pro Haltung",
        "Barfuß in der Natur gehen — Erdung, frische Luft, Verbindung mit dem Boden",
        "Tai Chi — fließende, langsame Bewegungen, die Qi aufbauen und den Geist beruhigen",
      ]
    },
    geist: {
      einheit: "Burnout ist ein Weckruf der Seele: Du bist mehr als das, was du tust. Dein Wert liegt im Sein, im Da-Sein, im lebendig Sein. Die Erschöpfung macht den Raum leer — und in dieser Leere kann etwas Neues wachsen. Etwas, das wirklich deins ist. Etwas, das dein Herz entzündet.",
      affirmationen: [
        "Ich bin wertvoll — jenseits aller Leistung.",
        "Ich erlaube mir, zu ruhen und aufzufüllen.",
        "Meine Kraft kehrt zurück, in meinem eigenen Tempo.",
        "Ich lausche meinem Herzen — es kennt meinen Weg.",
      ],
      meditation: "Herz-Meditation: Die Hände auf das Herz legen und den Herzschlag spüren. Langsam und tief atmen. Bei jeder Einatmung das Herz fragen: Was brauchst du? Bei jeder Ausatmung zuhören. Nichts erzwingen, nichts erwarten — nur da sein. Diese einfache Praxis verbindet wieder mit dem, was wirklich zählt. 10-20 Minuten, täglich.",
      energie: "Das Solarplexus-Chakra (Manipura) — der Sitz der persönlichen Kraft — ist bei Burnout häufig erschöpft. Sanftes Handauflegen auf den Solarplexus mit der Intention: Ich fülle mich auf. Auch gelbe Steine (Citrin, Tigerauge) auf dem Solarplexus können die Regeneration unterstützen.",
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Reguliert das Nervensystem, lindert Angst und fördert erholsamen Schlaf — essentiell bei Burnout.', tags: ['#cbd', '#nervensystem', '#stress'] },
      { name: 'Kratom', desc: 'In niedriger Dosis stimmungsaufhellend und energetisierend. Grüne Sorten wie Green Malay unterstützen bei Erschöpfung mit innerer Unruhe.', tags: ['#kratom', '#energie', '#stimmung'] },
      { name: 'Magnesium-Öl', desc: 'Transdermal angewandt beruhigt es das Nervensystem und löst Muskelanspannung.', tags: ['#magnesium', '#stress', '#entspannung'] },
      { name: 'Epsomit', desc: 'Regelmäßige Magnesiumsulfat-Bäder sind eine der wirksamsten Selbstfürsorge-Maßnahmen bei Erschöpfung.', tags: ['#epsomit', '#regeneration', '#stress'] },
      { name: 'Zeolith / ZeoMont', desc: 'Bindet Stressmetabolite und Schadstoffe — entlastet den Organismus von innen.', tags: ['#zeolith', '#entgiftung'] },
      { name: 'Hanfsamen', desc: 'Reich an Omega-3, Magnesium und B-Vitaminen — nähren das Nervensystem von innen.', tags: ['#hanf', '#nervennahrung', '#omega3'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 9. Verdauung / Reizdarm
  // ─────────────────────────────────────────────
  {
    id: 'verdauung',
    name: 'Verdauung / Reizdarm',
    tags: ['#verdauung', '#reizdarm', '#darm', '#mikrobiom', '#bauch'],
    koerper: "Der Darm ist das größte Immunorgan des Körpers — über 70% der Immunzellen sitzen hier. Das Darmmikrobiom beherbergt Billionen von Bakterien, die Nahrung aufschließen, Vitamine produzieren und das Immunsystem trainieren. Beim Reizdarm reagiert das enterische Nervensystem (das 'Bauchhirn' mit 100 Millionen Nervenzellen) überempfindlich — Blähungen, Krämpfe, Durchfall oder Verstopfung wechseln sich ab. Die Darm-Hirn-Achse sorgt dafür, dass emotionaler Stress sich direkt auf die Verdauung auswirkt.",
    psychosomatik: {
      zitat: "Der Bauch verdaut mehr als Nahrung — er verdaut das Leben.",
      text: "Verdauungsprobleme zeigen, dass etwas im Leben schwer zu verdauen ist — eine Situation, eine Beziehung, eine Veränderung. Louise Hay verbindet Darmprobleme mit Angst, loszulassen (Verstopfung) oder Angst, festzuhalten (Durchfall). Dahlke sieht den Reizdarm als Ausdruck eines inneren Konfliktes, der sich im Wechsel von Anspannung und Loslassen manifestiert. Der Bauch ist der Sitz des Bauchgefühls, der Intuition — Verdauungsstörungen können ein Hinweis sein, dass die eigene Intuition übergangen wird. Die Frage lautet: Was kann ich gerade schwer verdauen? Was nährt mich wirklich, und was liegt mir im Magen?",
    },
    traditionen: {
      volksmedizin: "Bitterkräuter stehen in der europäischen Volksmedizin an erster Stelle für die Verdauung: Enzian, Wermut, Schafgarbe und Löwenzahn regen die Verdauungssäfte an. Kümmel, Fenchel und Anis sind das klassische Trio gegen Blähungen. Kamillentee beruhigt den gereizten Magen und Darm seit Generationen.",
      tcm: "Die TCM sieht den Verdauungstrakt als Reich der Mitte — Milz und Magen (Erde-Element) sind für die Transformation und den Transport der Nahrung zuständig. Ein schwaches Milz-Qi führt zu Blähungen, Müdigkeit nach dem Essen und weichem Stuhl. Warme, gekochte Nahrung stärkt die Mitte. Ingwer und Jujube-Datteln sind tägliche Helfer. Akupressur auf Ma-36 (Zusanli) stärkt die Verdauungskraft.",
      ayurveda: "Im Ayurveda ist Agni — das Verdauungsfeuer — der Schlüssel zu Gesundheit. Schwaches Agni führt zu Ama (Toxinen), die alle Beschwerden verschlimmern. Trikatu (Ingwer, langer Pfeffer, schwarzer Pfeffer) entfacht das Verdauungsfeuer. Warmes Wasser über den Tag getrunken reinigt die Kanäle. Triphala (drei Früchte) reguliert die gesamte Verdauung sanft und nachhaltig.",
      germanisch: "Bittere Kräuter und fermentierte Lebensmittel (Sauerkraut, fermentierte Rüben) waren tragende Säulen der nordischen Ernährung. Der Kümmel war das heilige Verdauungsgewürz — er wurde jedem Brot, jedem Eintopf und jedem Käse zugegeben.",
      alchemie: "Die Verdauung ist das innere Laboratorium — das große Werk der Transformation. Was aufgenommen wird, muss gelöst (Solve), getrennt und neu zusammengesetzt (Coagula) werden. Verdauungsprobleme zeigen, dass dieser alchemistische Prozess stockt.",
    },
    kraeuter: [
      { name: 'Kamille', wirkung: 'Entzündungshemmend, krampflösend, beruhigend für die Darmschleimhaut. Als Tee 3-4x täglich zwischen den Mahlzeiten.' },
      { name: 'Pfefferminze', wirkung: 'Krampflösend — besonders bei Reizdarm wirksam. Als magensaftresistente Kapseln mit Pfefferminzöl oder als Tee.' },
      { name: 'Fenchel-Anis-Kümmel', wirkung: 'Das goldene Trio gegen Blähungen und Krämpfe. Als Tee nach jeder Mahlzeit oder die Samen direkt kauen.' },
      { name: 'Flohsamenschalen', wirkung: 'Regulieren die Verdauung in beide Richtungen — bei Durchfall und Verstopfung. 1-2 TL in 300ml Wasser, morgens und abends.' },
      { name: 'Bitterkräuter (Enzian, Wermut)', wirkung: 'Regen die Produktion aller Verdauungssäfte an — Speichel, Magensäure, Galle, Pankreasenzyme. Als Bitterspray oder Tinktur vor dem Essen.' },
      { name: 'Kurkuma', wirkung: 'Entzündungshemmend, leberanregend, schützt die Darmschleimhaut. 500mg Curcumin-Extrakt täglich oder frisch im Essen.' },
    ],
    stoffe: [
      { name: 'Probiotika', wirkung: 'Lebende Darmbakterien — stellen das Mikrobiom wieder her. Multi-Stamm-Präparate mit mindestens 10 Mrd. KBE täglich.' },
      { name: 'L-Glutamin', wirkung: 'Hauptnahrung der Darmschleimhautzellen — repariert die Darmbarriere. 5-10g täglich auf nüchternen Magen.' },
      { name: 'Zink', wirkung: 'Essentiell für die Darmschleimhautregeneration und die Magensäureproduktion. 25mg täglich.' },
      { name: 'Vitamin D3', wirkung: 'Stärkt die Darmbarriere und das Darm-assoziierte Immunsystem. 5.000 IE täglich.' },
    ],
    ernaehrung: {
      empfehlung: "Warme, gekochte, gut gewürzte Kost entlastet den Darm und stärkt das Verdauungsfeuer. Langsam essen, gründlich kauen und in Ruhe genießen — das klingt einfach und ist doch die wichtigste Verdauungshilfe. Fermentierte Lebensmittel liefern natürliche Probiotika. Die Ernährung darf individuell angepasst werden: Was dem einen gut tut, kann dem anderen zu viel sein.",
      staerkend: ["Sauerkraut (roh, unpasteurisiert)", "Knochenbrühe (Darmheilung)", "Ingwer", "Fenchel", "Kümmel", "Gedünstetes Gemüse", "Reis (leicht verdaulich)", "Apfelessig"],
      meiden: ["Zucker und Süßstoffe", "Gluten (bei Empfindlichkeit)", "Milchprodukte (bei Unverträglichkeit)", "Stark verarbeitete Lebensmittel", "Rohkost in großen Mengen (bei schwacher Verdauung)", "Eiskalte Getränke"],
      rezepte: [
        { name: 'Heilendes Kitchari', zutaten: '1 Tasse Basmatireis, 1/2 Tasse gelbe Mungbohnen, 1 TL Kurkuma, 1 TL Kreuzkümmel, 1 TL Koriandersamen, frischer Ingwer, Ghee, Salz', zubereitung: 'Reis und Mungbohnen waschen. Gewürze in Ghee anrösten, bis sie duften. Reis, Bohnen, Gewürze und die vierfache Menge Wasser in einen Topf geben. 30-40 Min sanft köcheln, bis alles weich und cremig ist. Das Kitchari ist die ayurvedische Heilnahrung für den Darm — leicht verdaulich, nährend, ausgleichend.' },
        { name: 'Apfelessig-Trunk', zutaten: '1 EL naturtrüber Apfelessig, 250ml warmes Wasser, 1 TL Honig', zubereitung: '15-20 Minuten vor dem Essen trinken. Regt die Magensäureproduktion an und verbessert die Nährstoffaufnahme.' },
      ]
    },
    fasten: {
      text: "Fasten gibt dem Darm eine Regenerationspause — die Darmschleimhaut erneuert sich alle 3-5 Tage und kann dies am besten ohne gleichzeitige Verdauungsarbeit. Intermittierendes Fasten verbessert nachweislich die Zusammensetzung des Darmmikrobioms. Auch kurze Fastenphasen bringen spürbare Erleichterung bei Reizdarm.",
      formen: [
        "Intermittierendes Fasten (16:8) — gibt dem Darm täglich 16 Stunden Regenerationszeit",
        "Reisbrei-Fasten (3 Tage) — nur weicher Reisbrei mit etwas Salz — extrem darmschonend, ein ayurvedischer Klassiker",
        "Brühefasten (1-3 Tage) — Knochenbrühe und Gemüsebrühe liefern L-Glutamin und Mineralien für die Darmheilung",
      ],
      reinigung: [
        "Ölziehen morgens mit Kokosöl — die Mundflora ist der Beginn der Darmgesundheit",
        "Warmes Wasser auf nüchternen Magen — reinigt den Verdauungstrakt sanft",
        "Triphala-Tee abends — traditionelles ayurvedisches Darmreinigungs- und Regenerationsmittel",
        "Bauchmassage im Uhrzeigersinn — fördert die Peristaltik und löst Spannungen im Bauchraum",
      ]
    },
    bewegung: {
      text: "Sanfte Bauchbewegungen, tiefes Atmen und moderate Bewegung regen die Darmperistaltik an und reduzieren die Stressreaktion, die bei Reizdarm eine Schlüsselrolle spielt. Der Vagusnerv — die Verbindung zwischen Gehirn und Darm — wird durch bestimmte Übungen aktiviert und beruhigt das gesamte System.",
      praktiken: [
        "Bauchatmung (Zwerchfellatmung) — massiert den Darm von innen und aktiviert den Vagusnerv",
        "Yoga: Drehsitz, Knie zur Brust, Kindhaltung, glückliches Baby — alle Haltungen, die den Bauch sanft massieren",
        "Spaziergang nach dem Essen (15-20 Min) — fördert die Verdauung und den Weitertransport",
        "Bauchmassage: im Uhrzeigersinn um den Nabel kreisen — morgens im Bett, 5 Minuten",
        "Vagusnerv-Aktivierung: langsames, tiefes Ausatmen (länger als Einatmen), Summen, Gurgeln mit Wasser",
      ]
    },
    geist: {
      einheit: "Der Bauch ist das zweite Gehirn — Sitz der Intuition, des Bauchgefühls, des tiefen Wissens. Verdauungsprobleme fragen: Hörst du auf deinen Bauch? Vertraust du deinem Gefühl? Der Darm möchte, dass du das Leben mit all seinen Erfahrungen vollständig aufnimmst, verdaust und das Wertvolle behältst — und den Rest loslässt.",
      affirmationen: [
        "Mein Bauch verdaut mühelos alles, was ich aufnehme.",
        "Ich vertraue meinem Bauchgefühl.",
        "Ich nehme nur auf, was mir guttut — alles andere lasse ich gehen.",
        "Mein inneres Feuer brennt klar und stetig.",
      ],
      meditation: "Bauchatmungs-Meditation: Die Hände auf den Unterbauch legen. Tief in den Bauch hineinatmen — die Hände heben sich. Langsam ausatmen — die Hände senken sich. Die ganze Aufmerksamkeit im Bauchraum halten. Wärme und Licht dorthin fließen lassen. Spüren, wie der Bauch weich wird, warm, entspannt. 10-15 Minuten, idealerweise vor dem Essen.",
      energie: "Das Solarplexus-Chakra (Manipura) und das Sakral-Chakra (Svadhisthana) regieren den Verdauungstrakt. Sanftes Handauflegen auf den Bauch mit der Intention von Wärme und Heilung beruhigt den gesamten Bauchraum. Auch die Farbe Gelb (visualisiert oder als Kleidung) stärkt das Verdauungsfeuer.",
    },
    produkte: [
      { name: 'Zeolith / ZeoMont', desc: 'Bindet Toxine und Gase im Darm — entlastet bei Blähungen und unterstützt die Darmreinigung.', tags: ['#zeolith', '#darm', '#entgiftung'] },
      { name: 'Montmorillonit', desc: 'Mineralerde — bindet Schadstoffe und beruhigt die gereizte Darmschleimhaut.', tags: ['#montmorillonit', '#darm', '#schleimhaut'] },
      { name: 'Natron', desc: 'Neutralisiert überschüssige Magensäure und unterstützt die basische Balance im Verdauungstrakt.', tags: ['#natron', '#basisch', '#magen'] },
      { name: 'Artemisia Annua', desc: 'Wirkt antimikrobiell und unterstützt die Balance der Darmflora — besonders bei Dysbiose.', tags: ['#artemisia', '#darm', '#mikrobiom'] },
      { name: 'Knoblauch-Tinktur', desc: 'Natürliches Antimikrobikum — fördert eine gesunde Darmflora und wirkt gegen unerwünschte Keime.', tags: ['#knoblauch', '#darm', '#antimikrobiell'] },
      { name: 'Heiltee', desc: 'Kräuterteemischung mit verdauungsfördernden Pflanzen — Kamille, Fenchel, Pfefferminze.', tags: ['#heiltee', '#verdauung'] },
    ]
  },

  // ─────────────────────────────────────────────
  // 10. Hautthemen / Neurodermitis
  // ─────────────────────────────────────────────
  {
    id: 'haut',
    name: 'Hautthemen / Neurodermitis',
    tags: ['#haut', '#neurodermitis', '#ekzem', '#juckreiz', '#allergie', '#immunsystem'],
    koerper: "Die Haut ist das größte Organ des Körpers und die Grenze zwischen Innen und Außen. Bei Neurodermitis (atopisches Ekzem) reagiert das Immunsystem überaktiv — Entzündungsbotenstoffe werden in die Haut geschickt, die daraufhin juckt, sich rötet und schuppt. Die Hautbarriere ist geschwächt: Ceramide und natürliche Fette fehlen, wodurch Feuchtigkeit verloren geht und Reizstoffe eindringen können. Der Darm spielt eine Schlüsselrolle — eine gestörte Darmflora verstärkt die Hautreaktion über die Darm-Haut-Achse.",
    psychosomatik: {
      zitat: "Die Haut zeigt, was unter der Oberfläche brodelt — sie ist der Spiegel der Seele.",
      text: "Neurodermitis zeigt einen tiefen inneren Konflikt zwischen dem Bedürfnis nach Nähe und der Angst vor Berührung. Louise Hay sieht Hautkrankheiten als Ausdruck von Unsicherheit — die Angst, verletzt zu werden, wenn man sich zeigt. Dethlefsen beschreibt den Juckreiz als unterdrückte Leidenschaft — etwas, das 'unter die Haut' geht und herauswill. Die Haut als Grenzorgan spiegelt, wie wir Grenzen setzen: Neurodermitis kann zeigen, dass die Abgrenzung zum Außen schwierig ist. Die Einladung: Wo darf ich meine Grenzen liebevoll stärken? Wo darf ich mich sicher genug fühlen, meine Haut — meine verletzlichste Seite — zu zeigen?",
    },
    traditionen: {
      volksmedizin: "Kamille, Ringelblume (Calendula) und Stiefmütterchen sind die drei großen Hautheilpflanzen der europäischen Volksmedizin. Haferbäder beruhigen juckende Haut seit Jahrhunderten. Nachtkerzenöl und Borretschöl liefern Gamma-Linolensäure, die die Hautbarriere von innen stärkt. Heilerde-Umschläge kühlen und entziehen Entzündungsstoffe.",
      tcm: "Die TCM sieht Neurodermitis als Wind-Hitze oder Blut-Hitze, oft kombiniert mit Feuchtigkeit. Das Blut muss gekühlt und genährt, der Wind ausgeleitet werden. Rehmannia (Sheng Di Huang) kühlt das Blut, Tribulus (Bai Ji Li) stillt den Juckreiz. Die Lunge regiert die Haut in der TCM — Lungenstärkung ist daher immer Teil der Therapie.",
      ayurveda: "Im Ayurveda sind Hauterkrankungen meist Pitta-bedingt — überschüssige Hitze manifestiert sich an der Hautoberfläche. Kühlende Kräuter wie Neem, Kurkuma und Aloe Vera stehen im Mittelpunkt. Ghee (intern und extern) nährt die Haut tiefgreifend. Panchakarma mit Virechana (therapeutisches Abführen) leitet überschüssiges Pitta aus.",
      germanisch: "Birkensaft und Birkenblättertee galten als starke Hautreinigungsmittel. Auch Bäder in Moorerde und Schwefelquellen waren traditionelle Therapien bei chronischen Hautleiden. Die Birke symbolisiert Neuanfang und Reinheit.",
      alchemie: "Die Haut als Grenzfläche zwischen Innen und Außen entspricht dem alchemistischen Prinzip der Membran — dem Ort der Transformation. Hautkrankheiten zeigen, dass der innere Reinigungsprozess nach außen drängt und sichtbar werden möchte.",
    },
    kraeuter: [
      { name: 'Nachtkerzenöl', wirkung: 'Reich an Gamma-Linolensäure — stärkt die Hautbarriere von innen. 2-4g täglich als Kapseln. Auch äußerlich auf betroffene Stellen.' },
      { name: 'Ringelblume (Calendula)', wirkung: 'Wundheilend, entzündungshemmend. Als Salbe auf betroffene Hautstellen oder als Tee für Umschläge.' },
      { name: 'Stiefmütterchen (Viola tricolor)', wirkung: 'Traditionelles Hautkraut — blutreinigend, entzündungshemmend. Als Tee 2-3 Tassen täglich über 6-8 Wochen.' },
      { name: 'Neem', wirkung: 'Stark antimikrobiell, entzündungshemmend. Als Neemöl (verdünnt) äußerlich oder Neem-Kapseln innerlich.' },
      { name: 'Aloe Vera', wirkung: 'Kühlend, beruhigend, feuchtigkeitsspendend. Frisches Gel direkt auf die betroffene Haut auftragen.' },
      { name: 'Brennnessel', wirkung: 'Blutreinigend, antiallergisch. Als Tee 3-4 Tassen täglich — eine 6-Wochen-Kur zeigt oft deutliche Besserung.' },
    ],
    stoffe: [
      { name: 'Omega-3-Fettsäuren', wirkung: 'Entzündungshemmend — essentiell bei Neurodermitis. 3-4g täglich aus Fischöl oder Algenöl. Stärkt die Hautbarriere.' },
      { name: 'Vitamin D3', wirkung: 'Reguliert das Immunsystem und stärkt die Hautbarriere. 5.000-10.000 IE täglich, besonders im Winter.' },
      { name: 'Zink', wirkung: 'Essentiell für die Hauterneuerung und das Immunsystem. 25-50mg täglich. Auch äußerlich als Zinksalbe.' },
      { name: 'Probiotika', wirkung: 'Stellen die Darmflora wieder her — über die Darm-Haut-Achse verbessert sich die Haut. Spezifische Stämme: L. rhamnosus GG, B. lactis.' },
    ],
    ernaehrung: {
      empfehlung: "Die Ernährung bei Hautthemen beginnt im Darm — eine gesunde Darmflora spiegelt sich in gesunder Haut. Entzündungshemmende, histaminarme und darmfreundliche Kost bildet das Fundament. Omega-3-reiche Lebensmittel nähren die Haut von innen. Mögliche Trigger (Milch, Weizen, Ei, Nüsse) dürfen individuell ausgetestet werden — ein Ernährungstagebuch hilft dabei.",
      staerkend: ["Fettreicher Fisch (Omega-3)", "Leinöl / Hanföl", "Avocado", "Süßkartoffel (Beta-Carotin)", "Karotten", "Sauerkraut (Probiotika)", "Haferflocken", "Gurke"],
      meiden: ["Kuhmilch und Milchprodukte (häufiger Trigger)", "Zucker", "Histaminreiche Lebensmittel (gereifter Käse, Rotwein, Tomaten)", "Weißmehl", "Fertiggerichte mit Zusatzstoffen", "Schweinefleisch"],
      rezepte: [
        { name: 'Haut-Heilsmoothie', zutaten: '1 Handvoll Spinat, 1/2 Avocado, 1 Karotte, 1 EL Leinöl, 1 EL Hanfsamen, 200ml Hafermilch, 1 TL Kurkuma', zubereitung: 'Alles im Mixer cremig pürieren. Reich an Beta-Carotin, Omega-3 und Antioxidantien — nährt die Haut von innen. Täglich als Frühstück oder Zwischenmahlzeit.' },
        { name: 'Goldene Haferflocken-Bowl', zutaten: 'Haferflocken (gekocht), Kurkuma, Ghee, Blaubeeren, Hanfsamen, Zimt', zubereitung: 'Haferflocken mit Kurkuma und Ghee kochen. Mit Blaubeeren, Hanfsamen und Zimt toppen. Hafer beruhigt von innen, Kurkuma hemmt Entzündungen, Ghee nährt die Haut.' },
      ]
    },
    fasten: {
      text: "Fasten kann bei chronischen Hauterkrankungen tiefgreifende Verbesserung bringen — der Körper nutzt die fastenfreie Verdauungsenergie für Reparatur- und Reinigungsprozesse. Besonders die Reduktion entzündungsfördernder Nahrungsmittel zeigt oft schnelle Ergebnisse. Eine Eliminationsdiät nach dem Fasten hilft, individuelle Trigger zu identifizieren.",
      formen: [
        "Eliminationsfasten (2-4 Wochen) — nur hypoallergene Lebensmittel (Reis, Gemüse, Obst), dann schrittweise Wiedereinführung einzelner Lebensmittel",
        "Heilfasten nach Buchinger (5-7 Tage) — tiefgreifende Reinigung, danach oft deutliche Hautverbesserung",
        "Intervallfasten (16:8) dauerhaft — reduziert chronische Entzündungsprozesse im gesamten Körper",
      ],
      reinigung: [
        "Basenbad mit Natron (2-3x/Woche) — entsäuert die Haut und beruhigt den Juckreiz",
        "Haferbad — 200g fein gemahlene Haferflocken ins Badewasser geben — beruhigend und feuchtigkeitsspendend",
        "Darmreinigung mit Flohsamenschalen und Zeolith — stärkt die Darm-Haut-Achse",
        "Leberwickel — die Leber ist das zentrale Entgiftungsorgan, das die Haut entlastet",
      ]
    },
    bewegung: {
      text: "Moderate Bewegung fördert die Durchblutung der Haut und den Abtransport von Stoffwechselabfällen. Schweiß wirkt antimikrobiell und reinigend — nach dem Schwitzen die Haut sanft abwaschen und eincremen. Stressabbau durch Bewegung wirkt direkt auf die Haut, da Stresshormone Entzündungsschübe auslösen können.",
      praktiken: [
        "Sanftes Ausdauertraining (Schwimmen im Salzwasser, Radfahren, Wandern) — fördert die Hautdurchblutung",
        "Yoga: Umkehrhaltungen (Schulterstand, Pflug) — verbessern die Durchblutung der Gesichtshaut",
        "Trockenbürsten (sanft!) — regt den Lymphfluss an und unterstützt die Hautentgiftung",
        "Qi Gong: Die 8 Brokate — harmonisiert den Energiefluss und stärkt die Lunge (Haut-Organ in der TCM)",
        "Atemübungen in frischer Luft — nährt die Lunge, die in der TCM die Haut regiert",
      ]
    },
    geist: {
      einheit: "Die Haut ist die Grenze zwischen Dir und der Welt — und zugleich die Fläche der Berührung. Hautthemen fragen: Wie ist dein Verhältnis zu Nähe und Distanz? Wo darfst du dich sicher fühlen in deiner eigenen Haut? Die Haut möchte gesehen und geliebt werden — genau so, wie sie gerade ist.",
      affirmationen: [
        "Ich fühle mich wohl in meiner Haut.",
        "Meine Haut ist der wunderbare Mantel meiner Seele.",
        "Ich setze liebevoll Grenzen und lasse liebevoll Nähe zu.",
        "Tag für Tag erneuert sich meine Haut — strahlend und genährt.",
      ],
      meditation: "Haut-Heilmeditation: Die Augen schließen und sich vorstellen, wie ein sanftes, rosafarbenes Licht den gesamten Körper umhüllt — wie ein zweiter, heilender Mantel. Dieses Licht beruhigt jede gereizte Stelle, nährt jede trockene Stelle, kühlt jede entzündete Stelle. Spüren, wie die Haut unter diesem Licht weicher wird, glatter, ruhiger. Dem Licht erlauben, tief einzuziehen — bis in jede Zelle.",
      energie: "Das Wurzelchakra (Muladhara) und das Sakralchakra (Svadhisthana) stärken das Sicherheitsgefühl, das bei Hautthemen oft erschüttert ist. Erdungsübungen — Barfuß auf der Erde stehen, sich verwurzelt fühlen — stärken die innere Sicherheit und beruhigen die Haut von innen heraus.",
    },
    produkte: [
      { name: 'CBD-Öl', desc: 'Entzündungshemmend, juckreizlindernd — oral und äußerlich auf betroffene Hautstellen anwendbar.', tags: ['#cbd', '#haut', '#entzündung'] },
      { name: 'Zeolith / ZeoMont', desc: 'Bindet Toxine im Darm und entlastet die Haut über die Darm-Haut-Achse.', tags: ['#zeolith', '#entgiftung', '#darm'] },
      { name: 'Anorganischer Schwefel', desc: 'Schwefel ist ein klassisches Hautheimittel — fördert die Entgiftung und stärkt Haut, Haare und Nägel.', tags: ['#schwefel', '#haut', '#entgiftung'] },
      { name: 'Montmorillonit', desc: 'Als Hautauflage — bindet Entzündungsstoffe, kühlt und beruhigt gereizte Haut.', tags: ['#montmorillonit', '#haut', '#entzündung'] },
      { name: 'Natron', desc: 'Basenbad mit Natron beruhigt juckende Haut und unterstützt die Entsäuerung.', tags: ['#natron', '#basisch', '#haut'] },
      { name: 'Hanfsamen', desc: 'Reich an Gamma-Linolensäure und Omega-3 — nährt die Haut von innen und stärkt die Hautbarriere.', tags: ['#hanf', '#haut', '#omega3'] },
    ]
  },

];
