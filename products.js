// ===== HEILDEPOT PRODUKTE (echte Daten von heildepot.de) =====

const PRODUCTS = [
  // ── CBD-Öle ──
  { id: 'cbd-test-duo', name: 'CBD Test-Duo', preis: 45, menge: '2×10ml', kategorie: 'CBD-Öle',
    desc: '10 ml mildes CBD-Hanfsamen-Öl und 10 ml intensives CBD-Hanfblüten-Öl zum Kennenlernen.',
    wirkung: 'Schmerzlindernd, entzündungslösend, beruhigend, schlaffördernd.',
    tags: ['#cbd', '#hanf', '#schmerz', '#schlaf', '#entzündung'],
    symptome: ['arthrose','rheuma','schlaf','stress','kopfschmerzen','rueckenschmerzen','angst','depression','haut','autoimmun','krebs','burnout','migraene','fibromyalgie','schmerzen','tinnitus','trauma'] },

  { id: 'cbd-hanfsamen-10', name: 'CBD-Hanfsamenöl', preis: 22, menge: '10ml', kategorie: 'CBD-Öle',
    desc: 'Helles, klares, mild schmeckendes CBD-Hanfsamen-Öl. Ideal für den Einstieg.',
    wirkung: 'Schmerzlindernd, entzündungslösend, beruhigend.',
    tags: ['#cbd', '#hanf', '#mild'],
    symptome: ['arthrose','schlaf','stress','kopfschmerzen','angst','burnout','migraene','fibromyalgie','schmerzen','tinnitus','trauma'] },

  { id: 'cbd-hanfsamen-30', name: 'CBD-Hanfsamenöl', preis: 63, menge: '30ml (1.500mg CBD)', kategorie: 'CBD-Öle',
    desc: 'Helles, mildes CBD-Öl. 1.500mg CBD. Für die regelmäßige Anwendung.',
    wirkung: 'Schmerzlindernd, entzündungslösend, beruhigend, schlaffördernd.',
    tags: ['#cbd', '#hanf'],
    symptome: ['arthrose','schlaf','stress','kopfschmerzen','angst','rheuma','depression','burnout','migraene','fibromyalgie','schmerzen','tinnitus','trauma'] },

  { id: 'cbd-hanfsamen-50', name: 'CBD-Hanfsamenöl', preis: 86, menge: '50ml (2.500mg CBD)', kategorie: 'CBD-Öle',
    desc: 'Helles, mildes CBD-Öl. 2.500mg CBD. Für den höheren Bedarf.',
    wirkung: 'Schmerzlindernd, entzündungslösend, beruhigend, schlaffördernd.',
    tags: ['#cbd', '#hanf'],
    symptome: ['arthrose','schlaf','stress','kopfschmerzen','angst','rheuma','depression','krebs','autoimmun','burnout','migraene','fibromyalgie','schmerzen','tinnitus','trauma'] },

  { id: 'cbd-vollspektrum-10', name: 'CBD-Hanfblütenöl "Schwarzer Krauser"', preis: 26, menge: '10ml', kategorie: 'CBD-Öle',
    desc: 'Dunkles, intensiv schmeckendes Vollspektrum-Öl. Volle Pflanzenkraft.',
    wirkung: 'Intensiv entzündungslösend, schmerzlindernd, erdend.',
    tags: ['#cbd', '#vollspektrum', '#intensiv'],
    symptome: ['arthrose','rheuma','schlaf','stress','kopfschmerzen','rueckenschmerzen','haut','autoimmun','burnout','migraene','fibromyalgie','schmerzen','tinnitus','trauma'] },

  { id: 'cbd-vollspektrum-30', name: 'CBD-Hanfblütenöl "Schwarzer Krauser"', preis: 72, menge: '30ml (1.500mg CBD)', kategorie: 'CBD-Öle',
    desc: 'Vollspektrum-Öl. 1.500mg CBD. Für die intensive, regelmäßige Anwendung.',
    wirkung: 'Stark entzündungslösend, schmerzlindernd, schlaffördernd.',
    tags: ['#cbd', '#vollspektrum'],
    symptome: ['arthrose','rheuma','schlaf','stress','kopfschmerzen','rueckenschmerzen','haut','autoimmun','krebs'] },

  { id: 'cbd-vollspektrum-50', name: 'CBD-Hanfblütenöl "Schwarzer Krauser"', preis: 115, menge: '50ml (2.500mg CBD)', kategorie: 'CBD-Öle',
    desc: 'Vollspektrum-Öl. 2.500mg CBD. Die stärkste Variante.',
    wirkung: 'Maximale Pflanzenkraft für intensive Anwendung.',
    tags: ['#cbd', '#vollspektrum'],
    symptome: ['arthrose','rheuma','schlaf','stress','kopfschmerzen','rueckenschmerzen','haut','autoimmun','krebs','burnout','migraene','fibromyalgie','schmerzen','tinnitus','trauma'] },

  // ── Detox & Darm ──
  { id: 'zeomont-400', name: 'ZeoMont', preis: 24, menge: '400g', kategorie: 'Detox & Darm',
    desc: 'Super-Detox-Pulver aus Zeolith und Montmorillonit. Bindet Schwermetalle und Toxine.',
    wirkung: 'Entgiftet den Darm, bindet Schwermetalle, entlastet das Immunsystem, stärkt die Darmwand.',
    tags: ['#zeolith', '#montmorillonit', '#detox', '#darm', '#schwermetalle'],
    symptome: ['verdauung','haut','allergie','autoimmun','arthrose','rheuma','krebs','depression','sodbrennen','candida','parasiten','leber','immunschwaeche','entzuendung'] },

  { id: 'zeomont-800', name: 'ZeoMont Doppelpack', preis: 46, menge: '2×400g', kategorie: 'Detox & Darm',
    desc: 'Super-Detox-Pulver. Doppelpack für die Langzeitanwendung.',
    wirkung: 'Entgiftet den Darm, bindet Schwermetalle, entlastet das Immunsystem.',
    tags: ['#zeolith', '#montmorillonit', '#detox', '#darm'],
    symptome: ['verdauung','haut','allergie','autoimmun','arthrose','rheuma','krebs','candida','parasiten','leber','immunschwaeche','entzuendung'] },

  { id: 'zeolith-400', name: 'Zeolith', preis: 22, menge: '400g', kategorie: 'Detox & Darm',
    desc: 'Vulkanische Mineralerde. Reines Naturmineral für die Entgiftung.',
    wirkung: 'Bindet Toxine im Darm, unterstützt die Schwermetall-Ausleitung, stärkt das Immunsystem.',
    tags: ['#zeolith', '#detox', '#mineralien', '#darm'],
    symptome: ['verdauung','haut','allergie','autoimmun','arthrose','rheuma','candida','parasiten','leber','immunschwaeche','entzuendung'] },

  { id: 'zeolith-800', name: 'Zeolith Doppelpack', preis: 42, menge: '2×400g', kategorie: 'Detox & Darm',
    desc: 'Vulkanische Mineralerde. Doppelpack.',
    wirkung: 'Bindet Toxine im Darm, unterstützt die Schwermetall-Ausleitung.',
    tags: ['#zeolith', '#detox', '#darm'],
    symptome: ['verdauung','haut','allergie','autoimmun','arthrose','rheuma','candida','parasiten','leber','immunschwaeche','entzuendung'] },

  { id: 'montmorillonit-400', name: 'Montmorillonit / Bentonit', preis: 22, menge: '400g', kategorie: 'Detox & Darm',
    desc: 'Reines Naturmineral. Quellfähige Tonerde für die sanfte Darmentgiftung.',
    wirkung: 'Bindet Toxine, unterstützt die Darmschleimhaut, quellfähig und sanft.',
    tags: ['#bentonit', '#montmorillonit', '#detox', '#darm'],
    symptome: ['verdauung','haut','sodbrennen','allergie'] },

  { id: 'montmorillonit-800', name: 'Montmorillonit / Bentonit Doppelpack', preis: 42, menge: '2×400g', kategorie: 'Detox & Darm',
    desc: 'Reines Naturmineral. Doppelpack.',
    wirkung: 'Bindet Toxine, unterstützt die Darmschleimhaut.',
    tags: ['#bentonit', '#montmorillonit', '#detox'],
    symptome: ['verdauung','haut','sodbrennen','allergie'] },

  // ── Reinsubstanzen ──
  { id: 'borax-100', name: 'Borax', preis: 9, menge: '100g', kategorie: 'Reinsubstanzen',
    desc: '99,9+% rein. Spurenelement Bor für Knochen, Gelenke und Entsäuerung.',
    wirkung: 'Löst Gelenkverkalkungen, nährt den Kalziumstoffwechsel, entsäuert den Körper, unterstützt Hormonbalance.',
    tags: ['#borax', '#bor', '#gelenke', '#knochen', '#entsäuerung'],
    symptome: ['arthrose','rheuma','rueckenschmerzen','schilddruese','autoimmun','osteoporose','gicht','zaehne'] },

  { id: 'borax-200', name: 'Borax', preis: 17, menge: '200g', kategorie: 'Reinsubstanzen',
    desc: '99,9+% rein. Doppelte Menge für die Langzeitanwendung.',
    wirkung: 'Löst Gelenkverkalkungen, nährt den Kalziumstoffwechsel, entsäuert.',
    tags: ['#borax', '#bor', '#gelenke'],
    symptome: ['arthrose','rheuma','rueckenschmerzen','schilddruese','autoimmun','osteoporose','gicht','zaehne'] },

  { id: 'schwefel-500', name: 'Anorganischer Schwefel', preis: 7, menge: '500g', kategorie: 'Reinsubstanzen',
    desc: '99,9+% rein. Reinigt den Darm, unterstützt die Leber, löst Entzündungen.',
    wirkung: 'Darmreinigung, Leberunterstützung, entzündungslösend, Parasitenausleitung.',
    tags: ['#schwefel', '#darm', '#leber', '#entzündung', '#reinigung'],
    symptome: ['verdauung','haut','arthrose','rheuma','allergie','autoimmun','candida','parasiten','leber','entzuendung'] },

  { id: 'schwefel-1000', name: 'Anorganischer Schwefel', preis: 12, menge: '1kg', kategorie: 'Reinsubstanzen',
    desc: '99,9+% rein. Großpackung für die konsequente Anwendung.',
    wirkung: 'Darmreinigung, Leberunterstützung, entzündungslösend.',
    tags: ['#schwefel', '#darm', '#leber'],
    symptome: ['verdauung','haut','arthrose','rheuma','allergie','candida','parasiten','leber','entzuendung'] },

  { id: 'epsomit-800', name: 'Epsomit / Bittersalz', preis: 6, menge: '800g', kategorie: 'Reinsubstanzen',
    desc: 'Magnesiumsulfat für basische Bäder. Entspannung für Muskeln und Faszien.',
    wirkung: 'Magnesium über die Haut, Muskelentspannung, Faszienlockerung, Entsäuerung, Stressabbau.',
    tags: ['#magnesium', '#bad', '#entspannung', '#muskeln', '#basisch'],
    symptome: ['stress','schlaf','rueckenschmerzen','arthrose','rheuma','kopfschmerzen','angst','fibromyalgie','schmerzen','burnout','wechseljahre'] },

  { id: 'epsomit-1600', name: 'Epsomit / Bittersalz Doppelpack', preis: 10, menge: '2×800g', kategorie: 'Reinsubstanzen',
    desc: 'Magnesiumsulfat. Doppelpack für regelmäßige Bäder.',
    wirkung: 'Magnesium über die Haut, Muskelentspannung, Entsäuerung.',
    tags: ['#magnesium', '#bad', '#entspannung'],
    symptome: ['stress','schlaf','rueckenschmerzen','arthrose','rheuma','fibromyalgie','schmerzen','burnout','wechseljahre'] },

  { id: 'epsomit-3200', name: 'Epsomit / Bittersalz 4er-Pack', preis: 16, menge: '4×800g', kategorie: 'Reinsubstanzen',
    desc: 'Magnesiumsulfat. Vorratspackung für die Familie.',
    wirkung: 'Magnesium über die Haut, Muskelentspannung, Entsäuerung.',
    tags: ['#magnesium', '#bad'],
    symptome: ['stress','schlaf','rueckenschmerzen','arthrose','rheuma','fibromyalgie','schmerzen','burnout','wechseljahre'] },

  { id: 'natron', name: 'Natron', preis: 5, menge: '250g', kategorie: 'Reinsubstanzen',
    desc: 'Natriumhydrogencarbonat. Für Basenbäder, Entsäuerung und Mundpflege.',
    wirkung: 'Entsäuert Gewebe, Basenbäder, Fußbäder, Mundspülung, Sodbrennen-Soforthilfe.',
    tags: ['#natron', '#basisch', '#entsäuerung', '#bad'],
    symptome: ['sodbrennen','arthrose','rheuma','haut','verdauung','stress','gicht','niere','zaehne','candida'] },

  { id: 'kratom', name: 'Kratom-Pulver', preis: 15, menge: '50g', kategorie: 'Reinsubstanzen',
    desc: 'Hochwertiges Kratom-Pulver. Schmerzlindernd und stimmungsaufhellend.',
    wirkung: 'Schmerzlinderung, Stimmungsaufhellung, Energiegebend in kleiner Dosis, beruhigend in höherer Dosis.',
    tags: ['#kratom', '#schmerz', '#stimmung', '#energie'],
    symptome: ['arthrose','rheuma','rueckenschmerzen','depression','stress','kopfschmerzen'] },

  // ── Pilze & Tee ──
  { id: 'heiltee-50', name: 'Basischer Heiltee', preis: 6, menge: '50g', kategorie: 'Pilze & Tee',
    desc: 'Süßholzwurzel, Pfefferminze, Fenchel und Basilikum. Basisch, wohltuend, wärmend.',
    wirkung: 'Entsäuert, unterstützt die Verdauung, beruhigt den Magen, wärmt von innen.',
    tags: ['#tee', '#basisch', '#verdauung', '#wärmend'],
    symptome: ['verdauung','sodbrennen','stress','erkaeltung','grippe','schlaf'] },

  { id: 'heiltee-100', name: 'Basischer Heiltee', preis: 11, menge: '100g', kategorie: 'Pilze & Tee',
    desc: 'Süßholzwurzel, Pfefferminze, Fenchel und Basilikum. Doppelte Menge.',
    wirkung: 'Entsäuert, unterstützt die Verdauung, beruhigt den Magen.',
    tags: ['#tee', '#basisch', '#verdauung'],
    symptome: ['verdauung','sodbrennen','stress','erkaeltung','grippe','schlaf'] },

  { id: 'artemisia', name: 'Artemisia Annua', preis: 12, menge: '50g', kategorie: 'Pilze & Tee',
    desc: 'Einjähriger Beifuß. Eines der kraftvollsten Heilkräuter der Natur.',
    wirkung: 'Immunregulation, antimikrobiell, antiparasitär, entzündungslösend, begleitend bei Krebs.',
    tags: ['#artemisia', '#beifuß', '#immunsystem', '#parasiten', '#krebs'],
    symptome: ['erkaeltung','grippe','allergie','autoimmun','krebs','verdauung','haut','parasiten','candida','immunschwaeche'] },

  { id: 'hericium', name: 'Hericium erinaceus (Löwenmähne)', preis: 18, menge: '100g Pulver', kategorie: 'Pilze & Tee',
    desc: 'Heilpilz für Nerven und Gehirn. Fördert die Neurogenese.',
    wirkung: 'Nervenregeneration, Gehirngesundheit, Darm-Hirn-Achse, Konzentration, Stimmungsaufhellung.',
    tags: ['#heilpilz', '#löwenmähne', '#nerven', '#gehirn', '#darm'],
    symptome: ['depression','angst','stress','verdauung','kopfschmerzen','schlaf','demenz','tinnitus','burnout','erschoepfung'] },

  { id: 'amanita', name: 'Amanita Muscaria 40-Tage-Kur', preis: 15, menge: '20g', kategorie: 'Pilze & Tee',
    desc: 'Decarboxyliert, Wildsammlung. Für die Mikrodosierung.',
    wirkung: 'Mikrodosierung für innere Klarheit, Traumarbeit, seelische Tiefenarbeit.',
    tags: ['#amanita', '#mikrodosierung', '#bewusstsein'],
    symptome: ['depression','angst','stress','schlaf'] },

  // ── Tinkturen ──
  { id: 'borax-tinktur', name: 'Borax-Tinktur', preis: 12, menge: '100ml', kategorie: 'Tinkturen',
    desc: 'Flüssige Borax-Lösung. Einfache Dosierung für die tägliche Bor-Zufuhr.',
    wirkung: 'Löst Gelenkverkalkungen, nährt Knochen, entsäuert, unterstützt Hormonbalance.',
    tags: ['#borax', '#tinktur', '#gelenke', '#knochen'],
    symptome: ['arthrose','rheuma','rueckenschmerzen','schilddruese','osteoporose','gicht','zaehne'] },

  { id: 'knoblauch-tinktur', name: 'Knoblauch-Tinktur', preis: 10, menge: '100ml', kategorie: 'Tinkturen',
    desc: 'Kraftvolle Knoblauch-Essenz. Natürliches Antibiotikum.',
    wirkung: 'Antibakteriell, antiviral, blutdrucksenkend, gefäßreinigend, immunstärkend.',
    tags: ['#knoblauch', '#tinktur', '#immunsystem', '#herz'],
    symptome: ['erkaeltung','grippe','bluthochdruck','verdauung','allergie','parasiten','candida','immunschwaeche','herz','krampfadern'] },

  { id: 'magnesium-oel', name: 'Magnesium-Öl', preis: 12, menge: '100ml', kategorie: 'Tinkturen',
    desc: 'Transdermales Magnesium. Direkt auf die Haut — direkt in die Zelle.',
    wirkung: 'Muskelentspannung, Krampflösung, Nervenstärkung, Schlafförderung, Schmerzlinderung.',
    tags: ['#magnesium', '#transdermal', '#muskeln', '#schlaf'],
    symptome: ['schlaf','stress','rueckenschmerzen','arthrose','kopfschmerzen','angst','migraene','tinnitus','wechseljahre','schmerzen','fibromyalgie'] },

  // ── Weitere ──
  { id: 'hanfsamen', name: 'Bio-Hanfsamen', preis: 8, menge: '250g', kategorie: 'Ernährung',
    desc: 'Ungeschälte Hanfsamen in Rohkostqualität. Bio, aus Deutschland/Frankreich.',
    wirkung: 'Proteinreich, Omega-3-Fettsäuren, Ballaststoffe, cholesterin- und glutenfrei.',
    tags: ['#hanf', '#protein', '#omega3', '#ernährung'],
    symptome: ['verdauung','haut','stress','depression','arthrose','entzuendung','uebergewicht','haarverlust'] },

  { id: 'baryt', name: 'Baryt — der Strahlenmagnet', preis: 15, menge: '1kg', kategorie: 'Meditation',
    desc: 'Natürliches Bariumsulfat-Mineral. Schützt und erdet.',
    wirkung: 'Strahlenschutz, Erdung, Meditation, energetische Reinigung.',
    tags: ['#baryt', '#mineral', '#schutz', '#erdung'],
    symptome: ['stress','angst','schlaf'] },

  { id: 'meditation-tafeln', name: 'Chartres-Meditationstafeln', preis: 10, menge: 'A3 + 10×A6', kategorie: 'Meditation',
    desc: 'Originalgeometrien der Kathedrale von Chartres. Falt- und waschbar.',
    wirkung: 'Meditation, Konzentration, innere Stille, Bewusstseinsöffnung.',
    tags: ['#meditation', '#chartres', '#geometrie'],
    symptome: ['stress','angst','schlaf','depression'] },

  { id: 'therapiesauger', name: 'Therapie-Sauger', preis: 6, menge: '1 Stück', kategorie: 'Entspannung',
    desc: 'Für Jugendliche und Erwachsene. Sofort-Hilfe bei Stress und Anspannung.',
    wirkung: 'Stressabbau, Beruhigung, orale Stimulation aktiviert den Parasympathikus.',
    tags: ['#stress', '#beruhigung', '#sofort'],
    symptome: ['stress','angst'] },

  // ── Kräuter & Tees ──
  { id: 'weissdorn-tee', name: 'Weißdorn-Tee', preis: 8, menge: '50g', kategorie: 'Kräuter & Tees',
    desc: 'Blätter und Blüten des Weißdorns. Der Herzstrauch der traditionellen Heilkunde, seit Jahrhunderten bewährt.',
    wirkung: 'Stärkt das Herz, reguliert den Blutdruck, fördert die Durchblutung, beruhigt sanft.',
    tags: ['#weißdorn', '#herz', '#blutdruck', '#tee', '#kreislauf'],
    symptome: ['herz','bluthochdruck','stress','angst','schlaf','erschoepfung'] },

  { id: 'brennnessel-tee', name: 'Brennnessel-Tee', preis: 6, menge: '50g', kategorie: 'Kräuter & Tees',
    desc: 'Getrocknete Brennnesselblätter. Die Königin der Heilpflanzen — voller Mineralien und Lebenskraft.',
    wirkung: 'Entgiftend, entwässernd, antiallergisch, nierenstärkend, eisenreich, blutreinigend.',
    tags: ['#brennnessel', '#tee', '#allergie', '#entgiftung', '#niere'],
    symptome: ['allergie','niere','haut','arthrose','rheuma','entzuendung','haarverlust'] },

  { id: 'johanniskraut-tee', name: 'Johanniskraut-Tee', preis: 7, menge: '50g', kategorie: 'Kräuter & Tees',
    desc: 'Getrocknetes Johanniskraut. Die Sonnenpflanze für die Seele — Licht in dunklen Zeiten.',
    wirkung: 'Stimmungsaufhellend, nervenstärkend, angstlösend, schlaffördernd bei innerer Unruhe.',
    tags: ['#johanniskraut', '#tee', '#stimmung', '#depression', '#nerven'],
    symptome: ['depression','angst','stress','schlaf','burnout','wechseljahre','trauma'] },

  { id: 'schafgarbe-tee', name: 'Schafgarbe-Tee', preis: 7, menge: '50g', kategorie: 'Kräuter & Tees',
    desc: 'Getrocknete Schafgarbe. Die Heilpflanze für den Bauch — besonders wertvoll in der Frauenheilkunde.',
    wirkung: 'Verdauungsfördernd, krampflösend, zyklusregulierend, wundheilend, entzündungslösend.',
    tags: ['#schafgarbe', '#tee', '#verdauung', '#frauenheilkunde', '#bauch'],
    symptome: ['verdauung','wechseljahre','entzuendung','reizdarm','sodbrennen'] },

  { id: 'baldrian-tee', name: 'Baldrian-Tee', preis: 7, menge: '50g', kategorie: 'Kräuter & Tees',
    desc: 'Getrocknete Baldrianwurzel. Die Pflanze der tiefen Ruhe — wenn der Geist nicht zur Stille findet.',
    wirkung: 'Beruhigend, schlaffördernd, krampflösend, angstlösend, nervenstärkend.',
    tags: ['#baldrian', '#tee', '#schlaf', '#beruhigung', '#nerven'],
    symptome: ['schlaf','stress','angst','burnout','tinnitus','schmerzen'] },

  { id: 'mariendistel-kapseln', name: 'Mariendistel-Kapseln', preis: 18, menge: '90 Kapseln', kategorie: 'Kräuter & Tees',
    desc: 'Hochdosierter Mariendistel-Extrakt. Die Schutzpflanze der Leber — seit der Antike bewährt.',
    wirkung: 'Leberschutz, Leberregeneration, Gallefluss-Förderung, Entgiftungsunterstützung.',
    tags: ['#mariendistel', '#leber', '#entgiftung', '#kapseln'],
    symptome: ['leber','verdauung','haut','allergie','autoimmun'] },

  { id: 'kurkuma-pulver', name: 'Kurkuma-Pulver', preis: 12, menge: '200g', kategorie: 'Kräuter & Tees',
    desc: 'Reines Kurkuma-Pulver. Die goldene Wurzel — eines der kraftvollsten entzündungslösenden Mittel der Natur.',
    wirkung: 'Stark entzündungslösend, gelenkschützend, verdauungsfördernd, antioxidativ, immunstärkend.',
    tags: ['#kurkuma', '#entzündung', '#gelenke', '#antioxidant', '#golden'],
    symptome: ['arthrose','rheuma','entzuendung','verdauung','autoimmun','schmerzen','reizdarm'] },

  { id: 'weihrauch-kapseln', name: 'Weihrauch-Kapseln', preis: 22, menge: '60 Kapseln', kategorie: 'Kräuter & Tees',
    desc: 'Hochdosierter Weihrauch-Extrakt (Boswellia serrata). Das heilige Harz — tiefgreifend entzündungslösend.',
    wirkung: 'Stark entzündungslösend, gelenkschützend, darmberuhigend, schmerzlindernd.',
    tags: ['#weihrauch', '#boswellia', '#entzündung', '#gelenke', '#darm'],
    symptome: ['arthrose','rheuma','entzuendung','reizdarm','verdauung','schmerzen','autoimmun'] },

  { id: 'schwarzkuemmeloel', name: 'Schwarzkümmelöl', preis: 16, menge: '100ml', kategorie: 'Kräuter & Tees',
    desc: 'Kaltgepresstes ägyptisches Schwarzkümmelöl. „Schwarzkümmel heilt alles außer den Tod" — ein Schatz der Naturheilkunde.',
    wirkung: 'Immunregulierend, antiallergisch, hautpflegend, entzündungslösend, verdauungsfördernd.',
    tags: ['#schwarzkümmel', '#öl', '#allergie', '#immunsystem', '#haut'],
    symptome: ['allergie','haut','immunschwaeche','asthma','neurodermitis','entzuendung','verdauung'] },

  { id: 'propolis-tinktur', name: 'Propolis-Tinktur', preis: 14, menge: '30ml', kategorie: 'Kräuter & Tees',
    desc: 'Propolis-Extrakt in Tropfenform. Das Schutzharz der Bienen — ein natürliches Breitband-Antibiotikum.',
    wirkung: 'Antibakteriell, antiviral, immunstärkend, wundheilend, mundpflegend, zahnfleischstärkend.',
    tags: ['#propolis', '#bienen', '#immunsystem', '#zähne', '#mundraum'],
    symptome: ['erkaeltung','grippe','immunschwaeche','zaehne','haut','entzuendung'] },

  // ── Reinsubstanzen & Nahrungsergänzung ──
  { id: 'msm-pulver', name: 'MSM-Pulver', preis: 14, menge: '500g', kategorie: 'Reinsubstanzen',
    desc: 'Organischer Schwefel (Methylsulfonylmethan). Der Baustein für Gelenke, Haut und Haare.',
    wirkung: 'Gelenkunterstützung, Hautverbesserung, Entgiftung, entzündungslösend, Kollagenaufbau.',
    tags: ['#msm', '#schwefel', '#gelenke', '#haut', '#entgiftung'],
    symptome: ['arthrose','rheuma','haut','entzuendung','haarverlust','schmerzen','allergie'] },

  { id: 'dmso-100', name: 'DMSO 99,9%', preis: 18, menge: '100ml', kategorie: 'Reinsubstanzen',
    desc: 'Dimethylsulfoxid in pharmazeutischer Reinheit. Der Transporteur — bringt Wirkstoffe tief ins Gewebe.',
    wirkung: 'Schmerzlindernd, entzündungslösend, abschwellend, gewebedurchdringend (äußerliche Anwendung).',
    tags: ['#dmso', '#schmerz', '#entzündung', '#äußerlich', '#transport'],
    symptome: ['schmerzen','entzuendung','arthrose','rheuma','rueckenschmerzen','kopfschmerzen','fibromyalgie'] },

  { id: 'vitamin-d3-k2', name: 'Vitamin D3+K2 Tropfen', preis: 16, menge: '20ml', kategorie: 'Reinsubstanzen',
    desc: 'Hochdosiertes Vitamin D3 mit K2 in Tropfenform. Das Sonnenvitamin — essentiell für Knochen, Immunsystem und Stimmung.',
    wirkung: 'Knochenstärkend, immunregulierend, stimmungsaufhellend, hormonunterstützend.',
    tags: ['#vitamind', '#k2', '#knochen', '#immunsystem', '#sonne'],
    symptome: ['osteoporose','immunschwaeche','depression','autoimmun','erschoepfung','zaehne'] },

  { id: 'opc-traubenkern', name: 'OPC Traubenkernextrakt', preis: 20, menge: '60 Kapseln', kategorie: 'Reinsubstanzen',
    desc: 'Hochdosierter Traubenkernextrakt. Das stärkste natürliche Antioxidans — Schutz für Gefäße und Zellen.',
    wirkung: 'Gefäßschützend, hautverjüngend, antioxidativ, entzündungslösend, kollagenfördernd.',
    tags: ['#opc', '#traubenkern', '#antioxidant', '#gefäße', '#haut'],
    symptome: ['krampfadern','haut','entzuendung','herz','bluthochdruck','augen','haarverlust'] },

  { id: 'kolloidales-silber', name: 'Kolloidales Silber', preis: 15, menge: '100ml', kategorie: 'Reinsubstanzen',
    desc: 'Feinste Silberpartikel in Wasser. Das natürliche Desinfektionsmittel — seit Jahrtausenden geschätzt.',
    wirkung: 'Antibakteriell, antiviral, antimykotisch, immununterstützend (äußerliche Anwendung).',
    tags: ['#silber', '#kolloidal', '#immunsystem', '#antibakteriell', '#äußerlich'],
    symptome: ['immunschwaeche','haut','erkaeltung','grippe','candida','neurodermitis','zaehne'] },

  { id: 'lugolsche-jodloesung', name: 'Lugolsche Jodlösung', preis: 12, menge: '50ml', kategorie: 'Reinsubstanzen',
    desc: 'Klassische Jod-Kaliumjodid-Lösung. Das vergessene Element — essentiell für Schilddrüse und Stoffwechsel.',
    wirkung: 'Schilddrüsenunterstützung, Hormonregulation, Stoffwechselaktivierung, Entgiftung von Halogenen.',
    tags: ['#jod', '#schilddrüse', '#hormone', '#stoffwechsel'],
    symptome: ['schilddruese','erschoepfung','uebergewicht','wechseljahre','depression'] },

  { id: 'lithium-orotat', name: 'Lithium-Orotat', preis: 15, menge: '60 Tabletten', kategorie: 'Reinsubstanzen',
    desc: 'Niedrig dosiertes Lithium in Orotat-Form. Das Spurenelement für die Seele — Klarheit und innere Balance.',
    wirkung: 'Stimmungsstabilisierend, neuroprotektiv, gehirnschützend, schlafunterstützend.',
    tags: ['#lithium', '#stimmung', '#gehirn', '#neuroprotektiv'],
    symptome: ['depression','angst','demenz','burnout','stress','sucht','trauma'] },

  // ── Öle & Tinkturen ──
  { id: 'oregano-oel', name: 'Oregano-Öl', preis: 14, menge: '10ml', kategorie: 'Tinkturen',
    desc: 'Ätherisches Oregano-Öl. Das stärkste pflanzliche Antimikrobikum — kraftvoll gegen Pilze, Parasiten und Bakterien.',
    wirkung: 'Antimikrobiell, antiparasitär, antimykotisch, immunstärkend, verdauungsfördernd.',
    tags: ['#oregano', '#öl', '#antimikrobiell', '#parasiten', '#candida'],
    symptome: ['candida','parasiten','immunschwaeche','verdauung','erkaeltung','grippe'] },

  { id: 'neemoel', name: 'Neemöl', preis: 10, menge: '100ml', kategorie: 'Tinkturen',
    desc: 'Kaltgepresstes Neemöl. Der Wunderbaum Indiens — vielseitig für Haut, Haare und gegen Parasiten.',
    wirkung: 'Hautpflegend, antiparasitär, antimykotisch, juckreizlindernd, insektenabweisend.',
    tags: ['#neem', '#öl', '#haut', '#parasiten', '#pilz'],
    symptome: ['haut','parasiten','neurodermitis','candida','haarverlust'] },

  { id: 'weihrauch-tinktur', name: 'Weihrauch-Tinktur', preis: 16, menge: '50ml', kategorie: 'Tinkturen',
    desc: 'Flüssiger Weihrauch-Extrakt. Das heilige Harz in Tropfenform — für die tägliche Entzündungshemmung.',
    wirkung: 'Entzündungslösend, gelenkschützend, schmerzlindernd, darmberuhigend.',
    tags: ['#weihrauch', '#tinktur', '#entzündung', '#gelenke'],
    symptome: ['arthrose','rheuma','entzuendung','schmerzen','reizdarm','autoimmun'] },

  { id: 'loewenzahn-tinktur', name: 'Löwenzahn-Tinktur', preis: 10, menge: '100ml', kategorie: 'Tinkturen',
    desc: 'Löwenzahn-Extrakt aus Wurzel und Kraut. Die Kraft der Wiese — Bitterstoff-Wunder für Leber und Galle.',
    wirkung: 'Leberreinigend, galleanregend, entgiftend, verdauungsfördernd, harntreibend.',
    tags: ['#löwenzahn', '#tinktur', '#leber', '#galle', '#entgiftung'],
    symptome: ['leber','verdauung','haut','niere','uebergewicht'] },

  // ── Ernährung ──
  { id: 'flohsamenschalen', name: 'Flohsamenschalen', preis: 8, menge: '250g', kategorie: 'Ernährung',
    desc: 'Indische Flohsamenschalen. Der sanfte Darmregulierer — quellfähig, bindend, reinigend.',
    wirkung: 'Darmregulierung, Stuhlformung, Toxinbindung, Sättigungsgefühl, cholesterinsenkend.',
    tags: ['#flohsamen', '#darm', '#verdauung', '#ballaststoffe', '#quellfähig'],
    symptome: ['verdauung','reizdarm','sodbrennen','uebergewicht','diabetes'] },

  { id: 'leinsamen-gold', name: 'Leinsamen gold', preis: 6, menge: '500g', kategorie: 'Ernährung',
    desc: 'Goldene Leinsamen in Rohkostqualität. Kleine Samen mit großer Wirkung — Omega-3 und Ballaststoffe.',
    wirkung: 'Omega-3-Quelle, verdauungsfördernd, entzündungslösend, hormonregulierend, sättigend.',
    tags: ['#leinsamen', '#omega3', '#verdauung', '#ballaststoffe'],
    symptome: ['verdauung','entzuendung','wechseljahre','herz','uebergewicht'] },

  { id: 'chlorella-pulver', name: 'Chlorella-Pulver', preis: 18, menge: '200g', kategorie: 'Ernährung',
    desc: 'Reines Chlorella-Algenpulver. Die grüne Entgiftungskraft — bindet Schwermetalle und nährt gleichzeitig.',
    wirkung: 'Schwermetall-Ausleitung, Chlorophyll-reich, immunstärkend, zellschützend, basisch.',
    tags: ['#chlorella', '#algen', '#entgiftung', '#schwermetalle', '#grün'],
    symptome: ['immunschwaeche','haut','erschoepfung','leber','autoimmun','entzuendung'] },

  { id: 'spirulina-pulver', name: 'Spirulina-Pulver', preis: 16, menge: '200g', kategorie: 'Ernährung',
    desc: 'Reines Spirulina-Algenpulver. Die Uralge — eines der nährstoffreichsten Lebensmittel der Erde.',
    wirkung: 'Nährstoffreich, energiespendend, immunstärkend, entgiftend, proteinreich, antioxidativ.',
    tags: ['#spirulina', '#algen', '#energie', '#nährstoffe', '#protein'],
    symptome: ['erschoepfung','immunschwaeche','allergie','entzuendung','uebergewicht','burnout'] },
];

// ===== SYMPTOM → PRODUKT ZUORDNUNG =====
// Wird automatisch aus den symptome-Arrays der Produkte generiert
function getProductsForCondition(conditionId) {
    return PRODUCTS.filter(p => p.symptome.includes(conditionId));
}

function getProductsForSearch(query) {
    const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
    const scored = [];
    PRODUCTS.forEach(p => {
        let score = 0;
        terms.forEach(term => {
            if (p.name.toLowerCase().includes(term)) score += 10;
            if (p.kategorie.toLowerCase().includes(term)) score += 5;
            if (p.desc.toLowerCase().includes(term)) score += 3;
            if (p.wirkung.toLowerCase().includes(term)) score += 3;
            if (p.tags.some(t => t.replace('#','').includes(term))) score += 5;
        });
        if (score > 0) scored.push({ product: p, score });
    });
    scored.sort((a, b) => b.score - a.score);
    return scored.map(s => s.product);
}
