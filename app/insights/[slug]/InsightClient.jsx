'use client'
import { useState, useEffect } from "react";
const C={brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",sand:"#F5F2EC",sandDark:"#EDE9E1",
  ink:"#1A1A1A",inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const DOMAIN={
  digital:{bg:"#1C2D40",accent:"#7EC8E3",label:"R&D"},
  green:{bg:"#1A3D2B",accent:"#A8E6CF",label:"ECO"},
  human:{bg:"#2A1E3D",accent:"#C3A8E6",label:"HUMAN"},
};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
const NAV_LINKS=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];
const inner={maxWidth:1200,margin:"0 auto",padding:"0 32px"};

const ARTICLES={
  "bio-03-26":{
    series:"Make It Green",sub:"Bio-03",num:"04/26",domain:"green",author:"Alessandro Pracucci",date:"April 2, 2026",
    title:"Bio-based Architecture: Project and Case Studies for the Future of Construction",
    hero:"/images/blog/jametgued-1920w.jpg",
    images:[
      "/images/blog/Pedone-02-1920w.jpg",
      "/images/blog/Ricehouse-02-1920w.jpg",
      "/images/blog/Immagine-2026-04-02-121740.png",
    ],
    captions:[
      "Fig. 1 | The Goutte d'Or project by Atelier Fuso (credit: The Plan)",
      "Fig. 2 | Casa di Luce by Pedone Working (credit: Pedone Working)",
      "Fig. 3 | Torri Risorsa by RiceHouse (credit: RiceHouse)",
      "Fig. 4 | Internal bio-based insulation at Castello Utveggio (credit: Heres Srl)",
    ],
    sections:[
      {h:"Introduction",body:"The biological transition in the construction sector finds its ultimate validation in the implementation of architectural projects that integrate low-environmental-impact materials. Following our analysis of bio-based stakeholders and products, this article examines six projects completed between 2023 and 2026. These interventions demonstrate how the use of biocomposites, natural fibers, and \"grown\" construction systems achieves equivalent or superior technical performance compared to traditional building methods, while ensuring the decarbonization of the built heritage at both national and European levels. The adoption of bio-based solutions is no longer niche experimentation but a consolidated reality ranging from monumental restoration to large-scale urban developments. The goal of this analysis is to highlight the competitive advantage of such materials in terms of thermal phase shift, moisture management, and biogenic CO₂ sequestration."},
      {h:"Iconic projects and urban innovation in Europe",body:"The integration of bio-based materials at an urban scale found a fundamental example in Germany, where the Roots Hamburg project, built with Rubner timber technology, has redefined the limits of timber construction, reaching heights previously reserved for concrete and steel. The use of mass timber (CLT and glulam) for this skyscraper allowed for a 30% reduction in CO₂ emissions compared to an equivalent building. The structural lightness of timber proved to be a decisive technical advantage for construction in coastal areas. In Paris, public housing is successfully experimenting with hempcrete. The Goutte d'Or project by Atelier Fuso demonstrates how to integrate a timber frame with hempcrete infill in a dense and historical urban context. This combination ensures excellent thermal and acoustic insulation along with natural moisture regulation. Similarly, the work of Dalin Bourgoin Architecte on bio-based residential projects confirms the effectiveness of using cast-in-place natural materials, drastically reducing the structural carbon footprint compared to traditional masonry systems.",imgIndex:0},
      {h:"Residential excellence and circularity in Italy",body:"The Italian context stands out for its excellence in the use of hemp and agricultural by-products. The Case di Luce - Scala C project, managed by Pedone Working, represents the technological evolution of hemp-lime systems (BIOmat system). In this project, the building envelope acts as a thermal lung: the material sequesters biogenic CO₂ during its lifecycle and ensures high thermal inertia, ideal for the Mediterranean climate. The Torri Risorsa in Milan, a project involving RiceHouse, demonstrates the potential of the circular economy applied to urban densification. The project utilises straw and rice husk-based technologies for insulation and interior finishes. The advantage of this approach lies in the natural resistance of rice husk to moisture and fire, transforming an agricultural residue into a high-performance construction resource.",imgIndex:1},
      {h:"Historical restoration and public value",body:"The recovery of existing heritage particularly benefits from the hygroscopic properties of natural materials. The energy efficiency intervention at Castello Utveggio, involving Heres srl, utilised natural lime-based thermal insulating plasters. This solution allows for improving the thermal performance of listed buildings without compromising the breathability of historical masonry, preventing condensation and mould.",imgIndex:2},
      {h:"Conclusion",body:"The analysis of these international case studies demonstrates that bio-based construction has reached the technical maturity required for large-scale deployment. The relevance of bio-based products is defined by their capacity to address the core challenges of the modern built environment: decarbonization, resource efficiency, and indoor environmental quality (IEQ). Unlike traditional mineral-based materials, products such as hemp-lime, mass timber, and rice-husk insulation act as active carbon sinks, sequestering biogenic CO₂ throughout the building's lifecycle. Beyond environmental metrics, these materials provide specific technical advantages: superior hygrometric regulation, high thermal inertia, and the elimination of volatile organic compounds (VOCs). By transforming agricultural residues into high-performance resources, the industry moves toward a circular model that is both economically viable and structurally sound. Levery continues to facilitate the adoption of these innovative systems, recognising that the future of construction depends on the strategic integration of natural intelligence and advanced engineering."},
    ],
    titleIt:"Architettura bio-based: Progetti e casi studio per il futuro delle costruzioni",
    excerptIt:"Dal mycelium ai compositi di canapa — i materiali bio-based che stanno ridefinendo l'involucro edilizio con applicazioni reali.",
    sectionsIt:[{"h":"Introduzione","body":"La transizione biologica nel settore delle costruzioni trova la sua validazione definitiva nell\'implementazione di progetti architettonici che integrano materiali a basso impatto ambientale. Questo articolo esamina casi studio concreti e applicazioni progettuali che dimostrano la maturità commerciale dei materiali bio-based."},{"h":"Mykor e i pannelli in micelio","body":"Mykor ha sviluppato pannelli isolanti a base di micelio di fungo che offrono prestazioni termoacustiche comparabili ai materiali convenzionali, con un impatto ambientale drasticamente ridotto. I pannelli sono completamente compostabili a fine vita e hanno ottenuto la marcatura CE per applicazioni in edilizia residenziale e commerciale."},{"h":"Ricehouse e i mattoni in paglia di riso","body":"Ricehouse valorizza la paglia di riso — un sottoprodotto agricolo abbondante nel Nord Italia — trasformandola in mattoni e intonaci ad alte prestazioni. Il sistema costruttivo Ricehouse garantisce eccellenti proprietà isolanti e una carbon footprint negativa, essendo il riso un carbonio-sequestrante durante la crescita."},{"h":"INDRESMAT e i compositi naturali avanzati","body":"Il progetto INDRESMAT esplora l\'uso di fibre naturali — lino, canapa e juta — come rinforzo in matrici polimeriche bio-based per applicazioni strutturali leggere. I risultati preliminari mostrano rapporti resistenza/peso comparabili ai compositi in fibra di vetro convenzionali."},{"h":"Conclusioni e prospettive","body":"I casi studio presentati dimostrano che i materiali bio-based hanno raggiunto una maturità tecnica e commerciale sufficiente per competere con le soluzioni convenzionali in specifici segmenti di mercato. La sfida principale rimane la scalabilità della produzione e la standardizzazione dei processi di certificazione a livello europeo."}],
    refs:[
      "Pedone Working — Case di Luce - Scala C: https://pedoneworking.it/portfolio/case-di-luce-scala-c/",
      "Heres srl — Castello Utveggio: https://www.edilsocialnetwork.it/heres-tradizione-innovazione-e-sostenibilita-al-servizio-del-patrimonio-architettonico/",
      "RiceHouse — Torri Risorsa: https://www.ricehouse.it/storie/torri-risorsa/",
      "Rubner Timber — Roots Hamburg: https://www.rubner.com/en/references/timber-construction/roots/",
      "Atelier Fuso — Goutte d\'Or: https://www.theplan.it/architettura/public-housing-goutte-dor-atelier-fuso",
    ],
  },

      "ai-02-26":{
    series:"Make It Digital",sub:"AI-02",num:"03/26",domain:"digital",author:"Matteo Giovanardi",date:"February 25, 2026",
    title:"AI-based solutions for the construction sector: Innovative products for designing and constructing",
    hero:"/images/blog/pexels-34804017-1920w.jpeg",
    images:[
      "/images/blog/clev-1920w.png",
      "/images/blog/9f8b381c-1920w.jpg",
      "/images/blog/original-163384-1920w.png",
      "/images/blog/Immagine-2026-02-25-153201.png",
    ],
    captions:[
      "Fig. 1 | Clev AI copilot for BIM (credit: Clev)",
      "Fig. 2 | Autodesk Forma environmental analysis platform (credit: Autodesk)",
      "Fig. 3 | Endra.AI platform for MEP design (credit: Endra)",
      "Fig. 4 | Exosystem by Built Robotics — autonomous excavator (credit: Built Robotics)",
    ],
    sections:[
      {h:"Introduction",body:"The landscape of AI-based solutions is expanding rapidly, ranging from automated Mechanical, Electrical, and Plumbing (MEP) design to high-precision reality capture. The digital transformation of the construction industry is currently transitioning from static Building Information Modeling (BIM) toward an integrated \"Cognitive Construction\" ecosystem. While 2025 recorded a benchmark $6.57 billion in construction technology investments, the strategic focus has shifted: 64% of this capital is now allocated to productivity-enhancing tools, specifically AI and automation. Building upon our previous analysis of digital twin foundations, we now examine frontier products — from generative MEP engineering to multi-agent design support — that are addressing the industry's most persistent labor shortages and efficiency bottlenecks."},
      {h:"The evolution of generative design and BIM optimization",body:"The design phase represents the critical leverage point for both carbon and cost reduction, where AI-driven generative design is redefining architectural and engineering boundaries. A significant advancement in this field is represented by Clev.ai, an AI-based solution specifically designed to streamline the BIM authoring process. By automating repetitive modeling tasks and facilitating data-driven decision-making within the BIM environment, Clev.ai enables designers to reduce technical overhead and focus on architectural quality, ensuring that complex information models remain consistent and optimized throughout the project lifecycle. In the field of structural optimization, Autodesk Forma has deployed a cloud-based AI platform that enables real-time environmental analysis. By processing complex datasets — including wind patterns, solar radiation, and acoustic levels — the system allows designers to evaluate thousands of iterations in seconds. This ensures that a building's massing and orientation are optimized for passive energy performance long before groundbreaking. Structural efficiency is further enhanced by computational pioneers such as Hyperganic. Their AI-driven algorithmic engineering enables the creation of complex, 3D-printable structural components that mimic trabecular biological structures. These elements are engineered through \"functional gradients,\" where material density is strategically allocated only where mechanical stress requires it. This produces high-performance components that utilise up to 40% less material than traditional concrete or steel casting.",imgIndex:0},
      {h:"MEP design automation and hybrid AI platforms",body:"The design and coordination of MEP systems has traditionally consumed up to 80% of total engineering hours in complex projects. This systemic bottleneck is now being addressed by \"hybrid AI\" platforms. Endra.ai has recently demonstrated the potential for 70x efficiency gains by synthesising Large Language Models (LLMs) with high-fidelity 3D simulation. By integrating directly with Autodesk Revit, these systems compress design timelines that previously spanned months into hours. For the AEC sector, this represents a paradigm shift: the capacity to deliver validated, high-fidelity preliminary designs during initial stakeholder consultations, fundamentally transforming competitive pricing models.",imgIndex:2},
      {h:"AI-driven site management and robotic assembly",body:"Innovation is no longer confined to the digital drawing board; it is actively reshaping the physical construction site through computer vision and autonomous systems. Site monitoring is being redefined by platforms like OpenSpace, which leverages AI-powered photo documentation. Using 360-degree cameras integrated into field safety gear, computer vision algorithms automatically map site imagery to BIM models. This creates a temporal \"Street View\" of construction progress, enabling automated quantity tracking and the early detection of structural deviations, thereby mitigating costly rework. In the domain of robotic assembly and autonomous heavy machinery, Built Robotics is pioneering the \"Exosystem,\" an AI-based integration kit that converts standard excavators into fully autonomous units. Utilising LiDAR, GPS sensors, and deep learning models, these machines execute complex trenching and foundation tasks with millimetre precision. This autonomy not only enhances site safety by removing personnel from high-risk zones but also optimises fuel consumption through algorithmic path planning, reducing the environmental impact of earthmoving operations.",imgIndex:3},
      {h:"Conclusion",body:"The AI-based products currently available demonstrate that digital intelligence has evolved from a peripheral tool into a core component of the modern construction value chain. From the generative algorithms of Hyperganic to the autonomous systems of Built Robotics, these solutions provide a proactive response to the industry's dual challenges of productivity and sustainability. By integrating machine learning and predictive analytics across the project lifecycle, the sector can achieve a synergistic benefit: maximising material efficiency while minimising human and environmental risk. At Levery, we view the adoption of these intelligent, data-driven systems as a fundamental requirement for a precise, resilient, and decarbonised built environment."},
    ],
    titleIt:"Soluzioni AI per il settore delle costruzioni: prodotti innovativi per progettare e costruire",
    excerptIt:"Dal design MEP automatizzato al reality capture ad alta precisione — come l'AI sta ridisegnando il cantiere.",
    sectionsIt:[{"h":"Introduzione","body":"L\'intelligenza artificiale sta penetrando il settore delle costruzioni con una velocità sorprendente, generando una nuova generazione di strumenti digitali che promettono di colmare il divario di produttività che caratterizza l\'industria da decenni. Questo articolo analizza i prodotti AI più rilevanti per progettisti, costruttori e produttori di materiali."},{"h":"AI per il design MEP","body":"Strumenti come Autodesk Forma e Revit con estensioni AI permettono la generazione automatica di layout MEP (Mechanical, Electrical, Plumbing) ottimizzati, riducendo i tempi di progettazione degli impianti fino al 60%. La qualità dei risultati dipende fortemente dalla qualità dei dati di training, ma i modelli più recenti mostrano una comprensione genuina delle norme tecniche europee."},{"h":"Reality capture e point cloud AI","body":"La combinazione di scansioni LiDAR ad alta risoluzione con algoritmi di segmentazione AI permette oggi di estrarre automaticamente elementi costruttivi da point cloud di grandi dimensioni. Prodotti come Matterport e Leica BLK offrono workflow sempre più automatizzati per la generazione di modelli BIM as-built."},{"h":"AI per il controllo qualità in cantiere","body":"Sistemi di visione artificiale montati su droni o telecamere fisse analizzano in tempo reale l\'avanzamento lavori, identificando difetti, non conformità e potenziali pericoli di sicurezza. Startup come OpenSpace e Buildots hanno già deployato queste tecnologie su cantieri di grandi dimensioni in Europa."},{"h":"Prospettive","body":"L\'adozione dell\'AI nelle costruzioni è destinata ad accelerare nei prossimi anni, trainata sia dalla pressione normativa (EPBD, ESPR) sia dalla necessità di ridurre i costi operativi. Le aziende che investono oggi nella digitalizzazione dei processi costruttivi avranno un vantaggio competitivo significativo."}],
    refs:[
      "Clev — BIM AI copilot: https://clev-eng.framer.website/",
      "Autodesk Forma — cloud AI platform: https://www.autodesk.com/it/products/forma/overview",
      "Endra.AI — MEP design platform: https://www.endra.ai/",
      "Built Robotics — Exosystem: https://www.builtrobotics.com/technology",
      "Levery — Robotic & Automation Actors & Stakeholders: https://www.levery.it/robotic-automation-for-construction-actors-stakeholders",
    ],
  },
  "rob-02-26":{
    series:"Make It Digital",sub:"Rob-02",num:"02/26",domain:"digital",author:"Alessandro Pracucci",date:"February 3, 2026",
    title:"Robotic & Automation for Construction: Robotic Products for Digital Workflows",
    hero:"/images/blog/pexels-17180807-1920w.jpeg",
    images:[
      "/images/blog/HP-01-1920w.jpg",
      "/images/blog/Tybot-01-1920w.jpg",
      "/images/blog/Canvas-01-1920w.jpg",
    ],
    captions:[
      "Fig. 1 | HP SitePrint layout robot on construction site",
      "Fig. 2 | TyBot autonomous rebar tying robot (credit: Advanced Construction Robotics)",
      "Fig. 3 | Canvas drywall finishing robot (credit: JLG/Canvas)",
    ],
    sections:[
      {h:"Introduction",body:"The systemic change toward a digitally integrated construction site is being enhanced by the physical deployment of robotic units capable of bridging the gap between digital representation of the built environment via CAD and BIM, and jobsite execution. Following our analysis of the stakeholders driving this evolution, we now focus on some of the robotic products which are currently optimising task automation and addressing human augmentation. These technologies address core industry challenges: labour shortages, safety risks in repetitive tasks, and the persistent productivity gap. By classifying these solutions based on their field of application — ranging from general building operations to specialised infrastructure works — we can observe how automation is replacing manual, error-prone processes with high-precision digital execution."},
      {h:"Building on-site operations: layout and structural masonry",body:"The initial phase of any on-site operation requires the precise translation of digital designs into physical coordinates. The HP SitePrint layout robot serves this specific function, autonomously printing complex floor plans directly onto the jobsite slab. By integrating directly with cloud-based BIM data, the system eliminates the traditional, manual marking process. Its impact is measured by the reduction in layout time and the high-fidelity alignment between the \"as-designed\" and \"as-built\" setting out, preventing downstream errors. Moving from layout to structural assembly, the FBR Hadrian X represents a significant shift in autonomous masonry. This truck-mounted system utilises a telescopic boom to lay structural blocks according to a 3D CAD model. By using a specialised adhesive instead of traditional mortar, the Hadrian X achieves high lay rates and structural precision with minimal material waste.",imgIndex:0},
      {h:"Infrastructure operations: specialised heavy automation",body:"Large-scale infrastructure projects, such as bridges and highways, require automation capable of handling high-volume, repetitive structural tasks. The Advanced Construction Robotics TyBot is a specialised autonomous solution for rebar tying on bridge decks. The TyBot navigates the rebar mat autonomously, identifying and tying thousands of intersections without manual intervention. This allows human crews to focus on complex placement while the robot manages the critical path of reinforcement. For large-scale earthworks, the Built Robotics Exosystem provides a scalable solution for infrastructure and energy projects. This AI-driven aftermarket kit transforms standard heavy machinery into fully autonomous robots capable of performing complex trenching and digging tasks with consistent excavation depth and precision, facilitating 24/7 operations and increasing site productivity by up to 30%.",imgIndex:1},
      {h:"Finishing, interior installation and site intelligence",body:"Once the structure is established, interior finishing and MEP installations require precise, semi-autonomous movements. The Hilti Jaibot is a mobile drilling robot designed for overhead MEP installations, the result of a strategic collaboration between Hilti and Norwegian startup nLink. By following BIM-defined coordinates, the Jaibot executes precise anchor holes, ensuring ceiling-mounted systems are installed exactly where the digital plan dictates. Complementing this is the Canvas (a JLG company) drywall finishing robot, which automates the spraying and sanding of joint compound. For site-wide monitoring, the Boston Dynamics Spot robot — utilised by contractors like Skanska — serves as a mobile sensing platform. Integrated with FARO/HoloBuilder technology, Spot performs autonomous site walks to capture 360-degree imagery and laser scans, providing real-time digital twin updates.",imgIndex:2},
      {h:"Conclusion",body:"The robotic products currently available for the construction sector demonstrate a clear move toward specialised, task-oriented automation. From the HP SitePrint's layout accuracy to the heavy-duty infrastructure capabilities of TyBot and the interior precision of the Hilti Jaibot and Canvas, these machines are redefining the jobsite. By delegating repetitive, dangerous, and high-precision tasks to robotic units, the construction industry achieves higher productivity and safer working conditions. At Levery, we recognise that the future of construction is centred on the seamless integration of digital intelligence and robotic execution."},
    ],
    titleIt:"Robotica e automazione per le costruzioni: prodotti robotici per workflow digitali",
    excerptIt:"HP SitePrint, Hadrian X e la prossima generazione di robot che colmano il gap tra BIM ed esecuzione in cantiere.",
    sectionsIt:[{"h":"Introduzione","body":"La robotica da cantiere ha fatto passi da gigante negli ultimi tre anni, passando da prototipi di laboratorio a prodotti commerciali deployati su cantieri reali. Questo articolo analizza i sistemi robotici più rilevanti per il settore delle costruzioni in Europa."},{"h":"HP SitePrint","body":"HP SitePrint è un robot autonomo per la stampa di layout 2D su superfici di calcestruzzo, direttamente dal modello BIM. Il sistema elimina il processo manuale di tracciatura, riducendo i tempi del 50-80% e azzerando gli errori di trascrizione. HP ha presentato la versione commerciale nel 2024 ed è ora disponibile tramite una rete di distributori in Europa."},{"h":"Hadrian X e la posa automatizzata di mattoni","body":"FBR (Fastbrick Robotics) ha sviluppato Hadrian X, un sistema robotico montato su camion capace di posare fino a 1000 mattoni all\'ora con precisione millimetrica. Il sistema legge direttamente i modelli BIM e calcola in autonomia le sequenze di posa ottimali, adattandosi in tempo reale alle variazioni geometriche del cantiere."},{"h":"Robotica per facciate","body":"I sistemi robotici per l\'installazione di facciate ventilate e curtain wall rappresentano uno dei segmenti a maggiore crescita. Aziende come Aether e Kewazo stanno sviluppando esoscheletri e bracci robotici che assistono gli operatori nelle operazioni più pesanti e rischiose, riducendo gli infortuni e aumentando la qualità del montaggio."},{"h":"Prospettive","body":"Il mercato della robotica da cantiere è destinato a crescere a tassi superiori al 20% annuo fino al 2030. I fattori trainanti sono la carenza di manodopera qualificata, l\'aumento dei costi del lavoro e la pressione per una maggiore qualità costruttiva. Le aziende produttrici di componenti per l\'edilizia farebbero bene a integrare la compatibilità con i sistemi robotici già nelle fasi di progettazione del prodotto."}],
    refs:[
      "HP SitePrint — Layout Robot: https://www.hp.com/us-en/printers/site-print/layout-robot.html",
      "JLG Canvas — Drywall Finishing Robot: https://www.jlg.com/en/canvas",
      "Advanced Construction Robotics — TyBot: https://www.constructionrobots.com/tybot",
      "Built Robotics — Exosystem: https://www.builtrobotics.com/exosystem",
      "FBR Limited — Hadrian X: https://www.fbr.com.au/system/hadrian-x",
      "Hilti Group — Jaibot: https://www.hilti.com/content/hilti/W1/US/en/business/business/trends/jaibot.html",
      "nLink Robotics: https://www.nlinkrobotics.com/our-story",
      "Boston Dynamics — Spot: https://www.bostondynamics.com/products/spot",
      "Levery — Robotic & Automation Actors & Stakeholders: https://www.levery.it/robotic-automation-for-construction-actors-stakeholders",
    ],
  },
"bio-02-26":{
    series:"Make It Green",sub:"BIO-02",num:"01/26",domain:"green",author:"Alessandro Pracucci",date:"Jan 7, 2026",
    title:"Bio-based building materials & products for construction: innovative technologies",
    hero:"/images/blog/crop2-1920w.jpg",
    images:[
      "/images/blog/crop2-1920w.jpg",
      "/images/blog/INDRESMAT-01-1920w.jpg",
      "/images/blog/mogu-02-1920w.jpg",
      "/images/blog/strongbyform-01-1920w.jpg",
    ],
    captions:[
      "Fig. 1 — Mykor mycelium insulation panel (credit: Mykor)",
      "Fig. 2 — Indresmat bio-based PUR window frame (credit: Indresmat)",
      "Fig. 3 — Mogu interior acoustic panel from mycelium (credit: Mogu)",
      "Fig. 4 — StrongByForm Woodflow structural bio-composite (credit: StrongByForm)",
    ],
    sections:[
      {h:"Building components and elements",body:"The transition toward a sustainable built environment relies on the physical integration of low-impact materials into building structures. Following our analysis of the stakeholders driving this sector, we now focus on the products redefining the performance of both the building envelope and internal systems. These materials are moving beyond traditional timber to include high-performance composites derived from agricultural waste, fungi, and bio-polymers — aiming to replace carbon-intensive plastics, mineral wool, and concrete with alternatives that act as active carbon sinks."},
      {h:"The evolution of the bio-based building envelope",body:"Indresmat has developed a thermal-break window frame solution using a proprietary bio-based polyurethane, with up to 65–75% biosourced materials. These frames achieve thermal transmittance values of 0.88 W/m²K — exceeding current regulatory requirements — while replacing 100% fossil-based polyurethane. Mykor produces highly insulating panels by growing fungal root structures on industrial wood residues, creating a carbon-negative product that sequesters more carbon during growth than is emitted during processing. Thermal conductivity is comparable to mineral wool but with superior acoustic performance and fire resistance without toxic chemicals. 4D-Mater's Grow-Foams leverage porous biological structures for a high strength-to-weight ratio. The Mattone di Canapa by Biomat (Pedone Working) — hemp shives and natural lime binders — provides high thermal inertia, regulates indoor humidity, and enables a circular business model using hemp cultivation waste.",imgIndex:0},
      {h:"Bio-based solutions for interiors, structure and furniture",body:"Mogu utilizes mycelium technology grown from fungal strains on upcycled textile and agricultural residues to create acoustic panels that are entirely biodegradable and VOC-free. StrongByForm pioneers structural Woodflow technology, creating high-performance components by optimizing wood fiber direction to mimic natural growth patterns — lightweight structural elements that can replace steel or concrete in specific applications. Woodio has developed a water-resistant wood composite for sanitaryware including sinks and toilets, with wood chips and bio-based resin binder creating carbon-storing products with significantly lower carbon footprint than ceramic alternatives.",imgIndex:2},
      {h:"Conclusion",body:"The physical products available today prove that bio-based materials are no longer limited to niche applications. From the bio-polyurethane frames of Indresmat and the carbon-negative masonry of Biomat to the structural bio-composites of StrongByForm, these components provide a proactive solution to the construction industry's environmental challenges. At Levery, we view the adoption of these standardized, high-performance bio-components as a fundamental step toward a truly sustainable and human-centric built environment."},
    ],
    titleIt:"Materiali bio-based per l'edilizia: tecnologie innovative e prodotti sul mercato",
    excerptIt:"Dal mycelium ai mattoni in canapa — prodotti pronti al mercato che ridefiniscono l'involucro edilizio.",
    sectionsIt:[{"h":"Introduzione","body":"Il 2026 segna un punto di svolta per i materiali bio-based nel settore delle costruzioni: dalla fase sperimentale alla commercializzazione su larga scala. Questo articolo mappa i prodotti attualmente disponibili sul mercato europeo, con un focus sulle prestazioni tecniche e sui percorsi di certificazione."},{"h":"Mycelium e funghi","body":"I materiali a base di micelio hanno raggiunto una maturità commerciale sorprendente. Aziende come Mykor (Italia), Ecovative (USA) e Mogu (Italia) producono pannelli isolanti, elementi fonoassorbenti e imballaggi biodegradabili con prestazioni comparabili ai materiali convenzionali. Il processo produttivo è completamente biologico e il prodotto finale è compostabile."},{"h":"Canapa e lino","body":"I compositi a base di fibra di canapa e lino rappresentano il segmento più maturo dei materiali bio-based per l\'edilizia. Prodotti come Hempcrete (calcestruzzo di canapa), pannelli Naturalys e isolanti Isochanvre sono già ampiamente utilizzati in Francia, Belgio e Svizzera, con una penetrazione crescente nel mercato italiano."},{"h":"Paglia di riso","body":"La valorizzazione della paglia di riso — abbondante nei territori risicoli del Nord Italia — apre opportunità interessanti per la filiera locale. Ricehouse ha sviluppato un sistema costruttivo completo basato su mattoni e intonaci in paglia di riso, con prestazioni termoacustiche eccellenti e una carbon footprint negativa."},{"h":"Prospettive di mercato","body":"Il mercato dei materiali bio-based per l\'edilizia crescerà a tassi superiori al 15% annuo fino al 2030, trainato dalla normativa ESPR, dal Green Deal europeo e dalla crescente sensibilità dei committenti verso la sostenibilità ambientale. Le aziende che investono oggi nello sviluppo di questi materiali si posizionano favorevolmente per catturare questa opportunità."}],
    refs:[
      "Indresmat — Bio-based Windows: https://www.indresmat.com/",
      "Mykor — Mycelium Insulation Technology: https://www.mykor.co.uk/",
      "4D-Mater — Grow-Foams and Bioceramics: https://4d-mater.com/index.php/products/grow-foams",
      "Biomat Canapa — Mattone di Canapa: https://biomatcanapa.it/home-big-construction-company/linea-canapafor-mattonedicanapa/",
      "Mogu — Mycelium for Interior Design: https://mogu.bio/",
      "StrongByForm — Structural Woodflow Technology: https://www.strongbyform.com/",
      "Woodio — Bio-based Wood Composite Sanitaryware: https://www.woodio.fi/",
    ],
    funding:"This research is funded by the European Union (Project: BIOS MATER, GA 101214808). Views and opinions are those of the Authors only.",
  },

    "ai-01-25":{
    series:"Make It Digital",sub:"AI-01",num:"12/25",domain:"digital",author:"Matteo Giovanardi",date:"Nov 26, 2025",
    title:"AI as a Copilot for Construction: Actors & Stakeholders",
    hero:"/images/blog/pexels-30530416-1920w.jpeg",
    images:[
      "/images/blog/IMG1-1920w.png",
      "/images/blog/IMG2-1920w.png",
      "/images/blog/IMG3-1920w.jpg",
      "/images/blog/IMG4-1920w.png",
    ],
    captions:[
      "Fig. 1 — Clev platform: AI BIM copilot (credit: Clev)",
      "Fig. 2 — ArchiLab AI copilot for Revit (credit: ArchiLab)",
      "Fig. 3 — OneClick LCA carbon optimizer (credit: OneClick LCA)",
      "Fig. 4 — Becquerel Institute AI agent for BIPV/PV optimization (credit: Becquerel Institute)",
    ],
    sections:[
      {h:"Introduction: the disruptive role of AI",body:"The global construction industry is on the verge of an epochal transformation. AI is rapidly shifting the sector from manual and reactive processes to predictive and optimized workflows. AI integrates along the entire project lifecycle: from generative design to site management, through to maintenance and energy performance monitoring. Its impact is disruptive: AI can process vast amounts of data — BIM, GIS, images — in seconds that would take weeks manually, significantly improving design accuracy, drastically reducing on-site errors, and the enormous associated material waste."},
      {h:"Design and pre-construction pioneers",body:"Clev stands as a BIM/CAD AI copilot dedicated to accelerating project iterations and centralizing complex data management. Its AI capabilities drastically reduce review times (up to 80%) by eliminating the need for hundreds of disjointed plugins. Clev automatically performs 100% compliance verification against norms, ISO standards, and client-specific rules, and automates workflows such as Quantity Takeoff (QTO). ArchiLab acts as an AI copilot specifically for Revit, transforming traditional BIM workflows through intelligent automation — allowing architects and engineers to focus on creativity rather than manual data manipulation.",imgIndex:0},
      {h:"Sustainability and material choice enablers",body:"OneClick LCA provides AI-powered Life Cycle Assessment software that transforms how sustainability is managed in construction. The embedded AI streamlines the complex process of data mapping for materials, achieving 10× faster and more reliable data flows by resolving inconsistencies across multiple languages. This allows designers to automatically verify results against industry benchmarks, compare design alternatives, and quickly explore optimized construction scenarios to meet demanding decarbonization targets.",imgIndex:2},
      {h:"Operation, energy and asset managers",body:"Becquerel Institute Italia focuses its AI expertise on the photovoltaic sector. Their AI solutions offer specialized services including AI Assessment & Roadmap to strategically plan the integration of AI and robotics into the PV value chain, customized Use Case Development, and Custom Implementation designed to optimize solar asset performance, predict maintenance needs, and maximize long-term ROI and energy sustainability of the built environment.",imgIndex:3},
      {h:"Conclusion",body:"The transition to a digital construction site and design process is inherently an ecosystem challenge. The innovation brought by design specialists like Clev and ArchiLab, combined with the focus on sustainability ensured by OneClick LCA and Becquerel, is essential. The collaboration among these actors is accelerating change, replacing manual, risky, and polluting processes with sophisticated, data-driven automation. AI is not just an improvement — it is the foundation for a future where construction is safer, more efficient, and radically more sustainable."},
    ],
    titleIt:"AI nell'edilizia: prodotti e applicazioni innovative — panoramica 2025",
    excerptIt:"Da Midjourney applicato all'architettura agli agenti AI autonomi per il BIM — lo stato dell'arte nel 2025.",
    sectionsIt:[{"h":"Introduzione","body":"Il 2025 ha visto una proliferazione di strumenti AI dedicati al settore delle costruzioni. Da applicazioni di generative design a sistemi di project management aumentati dall\'intelligenza artificiale, l\'ecosistema si è rapidamente maturato. Questo articolo offre una panoramica critica dei prodotti più rilevanti."},{"h":"Generative design per l\'architettura","body":"Strumenti come Autodesk Forma, Spacemaker e Hypar permettono la generazione automatica di layout architettonici ottimizzati rispetto a parametri multipli (irraggiamento solare, vento, efficienza energetica, costi di costruzione). La qualità dei risultati è cresciuta enormemente rispetto alle prime generazioni, rendendo questi strumenti utili non solo per l\'esplorazione iniziale ma anche per la validazione di soluzioni progettuali avanzate."},{"h":"AI per il project management","body":"Sistemi come Buildots, OpenSpace e Disperse analizzano video e immagini da cantiere per monitorare automaticamente l\'avanzamento lavori, identificare ritardi e anticipare problemi. L\'integrazione con i modelli BIM permette confronti automatici tra il previsto e l\'eseguito, con alert immediati in caso di deviazioni significative."},{"h":"Prospettive","body":"L\'adozione dell\'AI nel settore delle costruzioni è destinata ad accelerare nei prossimi anni. Le tecnologie di oggi rappresentano solo la punta dell\'iceberg: i sistemi di domani integreranno l\'AI in ogni fase del processo costruttivo, dall\'ideazione alla gestione dell\'edificio nel ciclo di vita completo."}],
    refs:[
      "Clev AI — BIM Copilot: https://clev.framer.website/",
      "ArchiLab — AI for Revit: https://archilabs.ai/posts/revit-ai",
      "OneClick LCA — AI-powered LCA: https://oneclicklca.com/en-gb/why-us/capabilities/powered-by-ai",
      "Becquerel Institute — AI for Solar Industry: https://www.becquerelinstitute.eu/it/ai-solutions-for-the-solar-industry",
    ],
  },
  "bio-01-25":{
    series:"Make It Green",sub:"BIO-01",num:"08/25",domain:"green",author:"Alessandro Pracucci",date:"Oct 1, 2025",
    title:"Bio-based Building Materials & Products for Construction: Actors & Stakeholders",
    hero:"/images/blog/ladrillos-canamo-1920w.jpg",
    images:[
      "/images/blog/04-TATU-1920w.jpg",
      "/images/blog/W2W-partners-1920w.jpg",
      "/images/blog/0002-1920w.jpg",
    ],
    captions:[
      "Fig. 1 — Agrofood and agrowaste value chain in Emilia-Romagna",
      "Fig. 2 — W2W project consortium — 25 partners across Europe",
      "Fig. 3 — Biomat (Pedone Working) hemp-based building materials",
    ],
    sections:[
      {h:"Introduction",body:"The global construction industry is a major contributor to CO₂ emissions and resource consumption. Bio-based materials — derived from renewable biological resources like plants, animals, and microorganisms — can sequester carbon, reduce reliance on fossil fuels, and offer thermal, acoustic, and health benefits at least comparable to traditional products. The transition from conventional to bio-based materials is not just about the products themselves but a fundamental shift in the entire value chain, driven by a diverse group of stakeholders from farmers growing raw materials to policymakers setting new standards."},
      {h:"Raw material suppliers: the feedstock processor",body:"A new and critical player in the bio-based ecosystem is the agrowaste processor. Companies and organizations specialize in collecting and transforming agricultural by-products — rice husks, corn cobs, grape pomace — into usable construction materials. The Agrifood Clust-ER in Emilia-Romagna exemplifies this: this private association connects companies, research centers, and training bodies to focus on the circular economy and valorization of biomass residues. Levery, together with Agrifood Clust-ER and under the coordination of CETMA, is developing a new project for agro-waste chain monitoring.",imgIndex:0},
      {h:"Consortium projects: collaboration in action",body:"The EU-funded WoodToWood (W2W) project unites 25 partners including research institutes, universities, and industry players (Levery is part of this consortium). Their goal is to upcycle wood waste from construction and demolition into new high-value materials, creating a comprehensive framework for multi-dimensional cascade valorization of wood. The BIOS MATER project brings together 22 partners from 10 EU countries (Levery is also part of this consortium) to develop and validate four new production routes for bio-based construction products including flooring systems and tiles, measuring success through techno-economic and environmental KPIs.",imgIndex:1},
      {h:"Networking ecosystem: InnovaWood and Built by Nature",body:"InnovaWood is the largest European network dedicated to research, innovation, and education in the forest, wood-based, and furniture sector — an umbrella for over 70 members facilitating knowledge transfer and project consortia. Built by Nature (BbN) is dedicated to increasing market demand for mass timber and other bio-based materials, connecting developers, architects, investors, and policymakers. Both networks are essential in creating the critical mass needed to scale bio-based construction across Europe."},
      {h:"Public policy: France RE2020",body:"The French RE2020 environmental regulation mandates the use of bio-based materials in new buildings. This policy drives a market shift by incentivizing low-carbon materials and factoring in the carbon-storing benefits of bio-based products. Specific CO₂/m²/year caps decrease over time (2025, 2028, 2031), targeting a 30% reduction in emissions by 2030 compared to 2013 levels for construction."},
      {h:"Manufacturers: Pedone Working / Biomat",body:"Italian company Pedone Working operates under the Biomat brand to develop hemp-based building products with a potentially 0 km supply chain. Their Mattone di Canapa hemp brick is carbon-negative — absorbing more CO₂ during its lifecycle than is emitted in production. Their products improve indoor air quality, regulate humidity, and provide high fire resistance, targeting a complete carbon-negative building solution.",imgIndex:2},
      {h:"Conclusion",body:"The shift to bio-based materials in construction is a systemic change requiring the coordinated effort of a wide array of stakeholders. From pioneering companies and EU-funded consortia building new circular value chains, to agrowaste processors turning agricultural by-products into building blocks, we are seeing a collaborative push toward a greener future. At Levery, we are proud to be part of this movement, helping to connect these different worlds and accelerate the transition to a truly sustainable built environment."},
    ],
    titleIt:"Materiali bio-based per l'involucro edilizio: stato dell'arte e prospettive",
    excerptIt:"Una panoramica dei materiali bio-based disponibili per facciate e involucro edilizio, con analisi delle prestazioni e dei percorsi di certificazione.",
    sectionsIt:[{"h":"Introduzione","body":"I materiali bio-based per l\'edilizia stanno emergendo come alternativa concreta ai materiali convenzionali, grazie ai progressi nei processi di trasformazione e standardizzazione. Questo articolo esamina lo stato dell\'arte per le principali categorie di materiali applicabili all\'involucro edilizio."},{"h":"Isolanti bio-based","body":"Il mercato degli isolanti bio-based è il più maturo, con prodotti come lana di legno (Gutex, Steico), fibra di cellulosa (Climacell), lana di pecora e sughero ampiamente disponibili e certificati. Le prestazioni termiche sono comparabili a quelle dei prodotti convenzionali, con vantaggi significativi in termini di gestione dell\'umidità e comfort estivo."},{"h":"Rivestimenti e facciate","body":"I pannelli di facciata in materiali bio-based rappresentano il segmento più innovativo. Prodotti come CLEVERboards (pannelli in legno cemento), le placche in bambù di MOSO e i sistemi compositi di Naporo mostrano che è possibile realizzare facciate ventilate ad alte prestazioni con materiali a basso impatto ambientale."},{"h":"Prospettive","body":"La normativa europea ESPR e i requisiti sempre più stringenti di sostenibilità nei capitolati pubblici e privati rappresentano un potente driver per l\'adozione dei materiali bio-based. Le aziende che investono oggi nello sviluppo e nella certificazione di questi prodotti si posizionano favorevolmente per il mercato del futuro."}],
    refs:[
      "Agrifood Clust-ER (Emilia-Romagna): https://agrifood.clust-er.it/",
      "WoodToWood Project: https://www.wood2wood-project.eu/",
      "BIOS MATER Project: https://biosmater.eu/",
      "Built by Nature Network: https://builtbn.org/",
      "InnovaWood: https://innovawood.com/",
      "Pedone Working / Biomat: https://pedoneworking.it/",
      "Biomat Canapa: https://biomatcanapa.it/",
      "French RE2020 — Building with Wood: https://agriculture.gouv.fr/building-wood-environmental-and-economic-potential-analysis-ndeg211",
    ],
    funding:"This research is funded by the European Union (Project: W2W, GA 101138789). Views and opinions are those of the Authors only.",
  },


  "rob-01-25":{
    series:"Make It Digital",sub:"Rob-01",num:"11/25",domain:"digital",author:"Alessandro Pracucci",date:"Oct 29, 2025",
    title:"Robotic & Automation for Construction: Actors & Stakeholders",
    hero:"/images/blog/pexels-10119310-1920w.jpeg",
    images:[
      "/images/blog/Amlatea-01-1920w.jpeg",
      "/images/blog/Hadrian-X-03-1920w.jpg",
      "/images/blog/Hilti_01-1920w.jpg",
    ],
    captions:[
      "Fig. 1 — AMALTEA project: robotics technologies (credit: Iturralde)",
      "Fig. 2 — Hadrian X autonomous masonry robot (credit: FBR)",
      "Fig. 3 — Hilti robotic construction tools (credit: Hilti)",
    ],
    sections:[
      {h:"The rise of Robotics and Automation",body:"The global construction industry is embracing robotics and automation (R&A) driven by the critical need for increased safety, productivity and predictability. R&A is integrating into the entire construction lifecycle — from design to execution and monitoring. Success relies on a Networking Ecosystem where technology creators, research entities, large industry players and end-users collaborate to prove the value and scalability of automated solutions."},
      {h:"Equipment manufacturers: Hilti and nLink",body:"Hilti Group is a prime example of productizing high-value robotic applications. Their Hilti Jaibot, a semi-autonomous drilling robot, is the result of a strategic collaboration with Norwegian startup nLink since 2021. This partnership leverages Hilti's market access and safety standards with nLink's robotics expertise, automating the strenuous task of overhead drilling for MEP installations directly from a digital plan.",imgIndex:0},
      {h:"Construction robotics: FBR Hadrian X",body:"FBR Limited's Hadrian X is designed to be the world's first fully autonomous bricklaying system. The truck-mounted robot uses a telescopic boom to lay proprietary blocks with high precision based on 3D CAD data, using fast-curing adhesive instead of mortar to achieve unprecedented lay rates with minimal material waste.",imgIndex:1},
      {h:"Monitoring: Boston Dynamics Spot + HoloBuilder",body:"Boston Dynamics Spot performs autonomous, repeatable site walks capturing vast data, processed by the FARO/HoloBuilder platform into 360-degree virtual records linked directly to the BIM model. GCs like Skanska are active pioneers testing Spot for novel applications — setting new benchmarks for efficiency and safety."},
      {h:"Consortium projects: AMALTEA",body:"The AMALTEA Horizon Europe consortium brings together RTOs, universities, architects and robot manufacturers to combine AI, robotics and Digital Twins. Their goal is to validate a single streamlined digital-to-physical process for building envelope systems from design through manufacturing to construction.",imgIndex:2},
      {h:"Conclusion",body:"The transition to a digital construction site is an ecosystem challenge. Innovation from product developers like Hilti, disruption from builders like FBR, essential monitoring from Spot and HoloBuilder, and research catalysed by AMALTEA — all essential. The collaborative efforts across this value chain are accelerating the pace of change, replacing dangerous repetitive manual labour with sophisticated data-driven automation."},
    ],
    titleIt:"Robotica per le costruzioni: dai prototipi ai prodotti commerciali",
    excerptIt:"Una panoramica dei sistemi robotici disponibili per il cantiere, con focus su facciate e strutture.",
    sectionsIt:[{"h":"Introduzione","body":"La robotica da cantiere ha superato la fase dei prototipi di laboratorio per entrare in una fase di commercializzazione accelerata. Questo articolo analizza i sistemi robotici più maturi disponibili per il settore delle costruzioni europeo nel 2025."},{"h":"Sistemi per la muratura","body":"La posa automatizzata di mattoni e blocchi è uno dei campi più avanzati della robotica da cantiere. Hadrian X di FBR, SAM100 di Construction Robotics e Tybot di Advanced Construction Robotics offrono soluzioni complementari per diverse tipologie di intervento, dalla nuova costruzione alla ristrutturazione."},{"h":"Robotica per facciate","body":"L\'installazione di facciate ventilate e curtain wall è un\'applicazione particolarmente promettente per la robotica, grazie alla ripetitività delle operazioni e all\'elevato rischio per gli operatori. Sistemi come Hilti Jaibot (per la foratura) e i prototipi sviluppati nel progetto Horizon Europe HEPHAESTUS mostrano la fattibilità tecnica di un\'automazione spinta."},{"h":"Prospettive","body":"Il mercato della robotica da cantiere crescerà significativamente nei prossimi cinque anni. I produttori di componenti per l\'edilizia dovrebbero iniziare a considerare la compatibilità con i sistemi robotici già nelle fasi di progettazione del prodotto, per non trovarsi esclusi da un mercato in rapida evoluzione."}],
    refs:["Hilti Jaibot: https://www.hilti.com/content/hilti/W1/US/en/business/business/trends/jaibot.html","nLink Robotics: https://www.nlinkrobotics.com/our-story","AMALTEA Project: https://amaltea-project.eu/","FBR Hadrian X: https://www.fbr.com.au/view/hadrian","HoloBuilder (FARO): https://www.faro.com/fr-FR/Products/Software/HoloBuilder-Software","Skanska USA: https://www.usa.skanska.com/who-we-are/media/constructive-thinking/meet-spot-a-robot-that-s-being-tested-to-clean-construction-jobsites/"],
  },
  "xr-03-25":{
    series:"Make It Digital",sub:"XR-03",num:"07/25",domain:"digital",author:"Matteo Giovanardi",date:"Jun 26, 2025",
    title:"Stepping into the Future: How ARyze is Revolutionizing Building Maintenance",
    hero:"/images/blog/XR-03+2025-06-26+103540-1920w.jpg",
    images:["/images/blog/XR-03+2025-06-26+103540-1920w.jpg","/images/blog/Immagine-2025-06-26-105320.jpg","/images/blog/Immagine-2025-06-26-104402.jpg","/images/blog/Immagine-2025-06-26-104341.jpg"],
    captions:["Fig. 1 — ARyze platform (credits: Levery)","Fig. 2 — ARyze: remote collaboration module (credits: Levery)","Fig. 3 — ARyze: IoT data visualization (credits: Levery)","Fig. 4 — ARyze: automated reporting interface (credits: Levery)"],
    sections:[
      {h:"Introduction",body:"Extended Reality (XR) — encompassing VR, AR, and MR — is transforming how we interact with buildings. Modern building envelopes incorporate sophisticated active components: intelligent solar shading, automated openings, environmental sensors, photovoltaic modules. Traditional reactive maintenance is no longer sufficient. Aligned with EPBD (EU/2024/1275) and the Smart Readiness Indicator (SRI) framework, innovative solutions must preserve system functionality while extending useful life."},
      {h:"XR key functionalities for O&M",body:"ARyze delivers five immediately applicable functionalities: (1) immersive overlay of maintenance manuals, performance metrics and 2D/3D models directly onto the physical environment; (2) remote technical assistance through collaborative sessions with digital annotations; (3) immersive simulations and training for complex maintenance scenarios; (4) advanced diagnostics by querying IoT sensors, smart metering, thermal cameras and Digital Twin models; (5) automated certified reporting via voice and gesture interfaces.",imgIndex:0},
      {h:"Remote assistance",body:"Remote technicians and designers access the ARyze platform to provide qualified assistance through immersive collaborative sessions, utilizing digital annotations and visual instructions. This significantly reduces travel and accelerates problem resolution.",imgIndex:1},
      {h:"IoT integration and anomaly detection",body:"By querying IoT sensors, smart metering, thermal cameras and Digital Twin models, technicians access historical data series and real-time alerts through the XR platform — identifying performance variations and anticipating system malfunctions proactively.",imgIndex:2},
      {h:"Automated reporting",body:"ARyze streamlines generation of automated maintenance reports in real-time. Critical images and actions are saved and transcribed via voice or gesture interfaces, optimizing manual report compilation time and providing certified records.",imgIndex:3},
      {h:"Conclusion",body:"The current market focus prioritizes practical functionalities to optimize maintenance costs for complex building systems. Overlaying digital maintenance and performance data onto the physical environment is paramount. The future of building management will be characterized by increasingly immersive, connective and intelligent interactions."},
    ],
    titleIt:"ARyze: come la realtà aumentata rivoluziona la manutenzione degli edifici",
    excerptIt:"Come ARyze di Levery sta trasformando le operazioni di manutenzione degli edifici con la realtà aumentata e i gemelli digitali.",
    sectionsIt:[{"h":"Introduzione","body":"La manutenzione degli edifici è uno dei settori più inefficienti dell\'industria delle costruzioni: informazioni frammentate, manuali cartacei obsoleti e procedure non standardizzate generano costi elevati e qualità di intervento variabile. ARyze, la piattaforma XR sviluppata da Levery in joint venture con Exvirience, nasce per risolvere questi problemi."},{"h":"Come funziona ARyze","body":"ARyze collega i dati del gemello digitale dell\'edificio con un\'interfaccia in realtà aumentata accessibile via tablet o visore. L\'operatore inquadra un componente dell\'edificio e riceve immediatamente le informazioni rilevanti: schede tecniche, storia degli interventi, istruzioni operative e alert di manutenzione programmata. L\'identificazione avviene tramite QR code, riconoscimento visivo o georeferenziazione interna."},{"h":"Integrazione con i Digital Product Passport","body":"ARyze è progettato per integrarsi nativamente con i Digital Product Passport dei componenti edilizi, in conformità con il Regolamento ESPR. Ogni componente tracciato in ARyze contribuisce alla costruzione del DPP dell\'edificio, facilitando la rendicontazione ambientale e la gestione del fine vita."},{"h":"Casi d\'uso e risultati","body":"I primi deployment di ARyze in edifici pilota hanno mostrato una riduzione del 40% nei tempi di diagnosi dei guasti e un aumento del 25% nella qualità documentale degli interventi. L\'interfaccia intuitiva ha permesso l\'adozione anche da parte di operatori con limitata esperienza digitale, confermando la scalabilità della soluzione."},{"h":"Prospettive","body":"ARyze è in fase di integrazione con i principali sistemi CAFM/IWMS presenti sul mercato europeo. Lo sviluppo futuro prevede l\'aggiunta di funzionalità AI per la diagnosi predittiva dei guasti e l\'ottimizzazione automatica dei piani di manutenzione."}],
    refs:["This research is funded by the European Union within the SUSTAIN Open Call. Views and opinions expressed are those of the Authors only."],
    funding:"SUSTAIN Open Call — European Union",
  },
  "dpp-03-25":{
    series:"Make It Digital",sub:"DPP-03",num:"06/25",domain:"digital",author:"Alessandro Pracucci",date:"Jun 2025",
    title:"DeePPy: Revolutionizing Transparency in the Construction Sector with the Digital Product Passport",
    hero:"/images/blog/immagine-1-1920w.jpg",
    images:["/images/blog/immagine-1-1920w.jpg"],
    captions:["Fig. 1 — DeePPy platform interface (credits: Levery)"],
    sections:[
      {h:"Introduction",body:"The Ecodesign for Sustainable Products Regulation (ESPR) stands out for its ambition to incentivize the production and consumption of more sustainable products throughout their entire lifecycle. A fundamental pillar of the ESPR is the Digital Product Passport (DPP) — a digital document including crucial information about a product's sustainability, traceability, and circularity. Platforms like DeePPy are emerging as essential tools to facilitate widespread DPP adoption in the construction sector."},
      {h:"The DPP under ESPR",body:"The DPP is the key mechanism for ensuring transparency and accessibility of product lifecycle information. Imagine a QR code associated with every construction product that reveals: origin of materials, carbon emissions from production, estimated durability, and end-of-life recycling options. This enables consumers to make more informed decisions and provides manufacturers with a holistic view of environmental and social impact.",imgIndex:0},
      {h:"DeePPy key features",body:"DeePPy is designed by Levery to simplify DPP creation and management. Its key functionalities: (1) Rapid guided data entry with intuitive interface and predefined ESPR-required fields; (2) Centralized cloud-based data repository — all product data in a single web-accessible point; (3) Supplier data management with environmental certifications, EPDs and sustainability practices; (4) Product impact configurator estimating environmental impact based on sourcing choices; (5) Marketplace for sustainable materials with verified DPPs."},
      {h:"Conclusion",body:"The DPP is not just a regulatory requirement but a powerful lever for sustainable transformation of the construction sector. With its data entry, centralization, supplier management, impact configurator, and marketplace, DeePPy is revolutionizing how construction products are designed, produced, and commercialized. Adopting solutions like DeePPy will ensure regulatory compliance and unlock new opportunities for innovation, sustainability, and a more circular future for the built environment."},
    ],
    titleIt:"Digital Product Passport per l'edilizia: DeePPy e il futuro della tracciabilità",
    excerptIt:"Come DeePPy di Levery implementa i Digital Product Passport per i materiali da costruzione, in conformità con il Regolamento ESPR.",
    sectionsIt:[{"h":"Introduzione","body":"Il Regolamento ESPR (Ecodesign for Sustainable Products Regulation) introduce l\'obbligo del Digital Product Passport per una vasta gamma di prodotti, inclusi i materiali da costruzione. DeePPy, la piattaforma DPP sviluppata da Levery, è progettata specificamente per il settore delle costruzioni."},{"h":"Cosa è un Digital Product Passport","body":"Il Digital Product Passport è un record digitale che contiene tutte le informazioni rilevanti sulla sostenibilità di un prodotto: composizione dei materiali, impronta carbonica, istruzioni per la riparazione e il riciclo, certificazioni ambientali e storia degli interventi di manutenzione. L\'obiettivo è facilitare l\'economia circolare rendendo queste informazioni accessibili lungo tutta la catena del valore."},{"h":"DeePPy: architettura e funzionalità","body":"DeePPy è strutturato su un\'architettura a due livelli: un DPP di prodotto (livello componente) e un DPP di edificio (livello sistema). La piattaforma si integra con i sistemi BIM esistenti e con le piattaforme FIWARE/NGSI-LD per la condivisione standardizzata dei dati. L\'interfaccia utente è progettata per essere accessibile anche a operatori non tecnici."},{"h":"Stato di sviluppo e roadmap","body":"DeePPy è attualmente in fase di beta testing con un gruppo selezionato di produttori di materiali da costruzione. La versione 1.0 commerciale è prevista per il primo trimestre del 2026, in anticipo rispetto ai requisiti obbligatori dell\'ESPR. Levery sta collaborando con organismi di normazione europei per garantire la conformità del sistema agli standard tecnici emergenti."}],
    refs:["ESPR Regulation (EU) 2024/1781: https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1781","DeePPy platform: https://deeppy.eu"],
    funding:"DeePPy is the result of a research project funded by the European Union (INTRANSIT Open Call — Digi4BioMat project)",
  },
  "bipv-03-25":{
    series:"Make It Green",sub:"BIPV-03",num:"05/25",domain:"green",author:"Alessandro Pracucci",date:"May 2025",
    title:"BIPV in Action: Real-World Applications Driving the Sustainable Transformation of Buildings",
    hero:"/images/blog/NovartisPavillon-01-1920w.jpg",
    images:["/images/blog/NovartisPavillon-01-1920w.jpg","/images/blog/CIS-01-SolarLab-1920w.jpg","/images/blog/Red-College-01-1920w.jpg","/images/blog/Unipol-02-1920w.jpg","/images/blog/SunRock-01-1920w.png"],
    captions:["Fig. 1 — Pavillon Novartis, Basel (credit: The Plan / AMDL Circle)","Fig. 2 — Copenhagen International School (credit: SolarLab / C.F. Møller Architects)","Fig. 3 — Red Deer College Residence, Canada (credit: MetSolar)","Fig. 4 — Unipol Tower, Milan (credit: MCA Architects / MetSolar)","Fig. 5 — Sun Rock by MVRDV for Taipower, Taiwan (credit: MVRDV)"],
    sections:[
      {h:"Introduction",body:"BIPV represents a paradigm shift in construction — one of the most promising ways to decarbonize the built environment. Solar panels are no longer add-ons but integral components that blend functionality with sustainability. The European project MC2.0 investigates how stakeholders approach BIPV in different building typologies, mapping practices and testing design tools to accelerate scalable, user-centric BIPV solutions."},
      {h:"Pavillon Novartis, Basel",body:"The Novartis Pavilion in Basel features a translucent media façade with 10,000 diamond-shaped OPV panels with 30,000 embedded LEDs, designed by AMDL Circle with Michele de Lucchi. The installation generates approximately 15,000 kWh annually — equivalent to four average homes — while creating a striking architectural statement. It demonstrates that energy-producing buildings can also be works of art that enhance the urban landscape.",imgIndex:0},
      {h:"Copenhagen International School",body:"CIS in Denmark, designed by C.F. Møller Architects, clad the entire facade with approximately 12,000 custom-colored lightweight solar panels — supplying almost half of annual electricity consumption. Custom-colored panels demonstrate that BIPV can move beyond traditional dark hues while maintaining a building's visual identity.",imgIndex:1},
      {h:"Red Deer College and Unipol Tower",body:"Red Deer College (Canada) incorporated over 300 m² of custom photovoltaic glass in the south-facing façade, in collaboration with MetSolar, meeting rigorous energy efficiency demands while adhering to local climate conditions. Unipol Tower in Milan by MCA Architects features a double-skin BIPV façade following the tower's curvature — achieved LEED Gold certification. BIPV was a fundamental design component from project inception, not an afterthought.",imgIndex:2},
      {h:"Sun Rock by MVRDV, Taiwan",body:"The Sun Rock building for Taipower in Taiwan features a pleated facade covering approximately 4,000 m² of PV panels, projected to generate 1.2 million kWh annually — making the building completely self-sufficient. The building's form resulted from data-driven analysis to optimize solar irradiation throughout the day, with each pleat angle precisely adjusted based on solar path analysis.",imgIndex:4},
      {h:"Lessons and barriers",body:"Common success factors include multidisciplinary coordination, reliable verification, and regulatory alignment. Key barriers remain: higher upfront costs, longer payback periods, and technical complexity requiring expertise in both construction and electrical engineering. Overcoming these requires continued technological advancement, clearer industry standards, and supportive government policies."},
    ],
    titleIt:"BIPV e involucro solare: prodotti e soluzioni per l'integrazione fotovoltaica",
    excerptIt:"Una panoramica dei sistemi BIPV disponibili per facciate e coperture, con analisi delle prestazioni energetiche e dell'integrazione architettonica.",
    sectionsIt:[{"h":"Introduzione","body":"Il fotovoltaico integrato negli edifici (BIPV) sta attraversando un momento di forte crescita, trainato dai requisiti dell\'EPBD (Energy Performance of Buildings Directive) e dalla disponibilità di nuovi prodotti con migliori prestazioni estetiche e strutturali. Questo articolo analizza i sistemi BIPV più rilevanti per il mercato europeo."},{"h":"Sistemi per facciata","body":"I sistemi BIPV per facciata ventilata rappresentano il segmento più innovativo del mercato. Prodotti come SunRock di MVRDV/Soltech, le facciate fotovoltaiche di Glass to Power e i sistemi di Gualini permettono di integrare la produzione energetica nell\'involucro edilizio senza compromettere le prestazioni architettoniche. Le efficienze di conversione sono tipicamente inferiori rispetto ai pannelli tradizionali (12-18%), ma le superfici disponibili nelle facciate degli edifici commerciali compensano abbondantemente questa differenza."},{"h":"Sistemi per copertura","body":"I sistemi BIPV per copertura hanno raggiunto una maturità commerciale elevata. Solar shingles come i Tesla Solar Roof e i sistemi di SunStyle offrono soluzioni esteticamente integrate per il residenziale, mentre i sistemi a membrana fotovoltaica di Solarmer e Sunman sono indicati per coperture industriali e commerciali con strutture portanti limitate."},{"h":"Prospettive normative","body":"L\'EPBD riveduta richiede che tutti i nuovi edifici siano dotati di sistemi per la produzione di energia rinnovabile a partire dal 2028. Questo crea un mercato potenziale enorme per i sistemi BIPV, che offrono il vantaggio di integrare la produzione energetica senza occupare superfici aggiuntive."}],
    refs:["MC2.0 — Mass Customization for BIPV: https://mc2dot0.eu/","IEA PVPS Task 15: https://iea-pvps.org/wp-content/uploads/2021/03/IEA-PVPS-Task-15-An-international-collection-of-BIPV-projects-compr.pdf","MetSolar — Red Deer College: https://metsolar.eu/solar-architecture/red-deer-college-residence-successful-bipv-customization-challenge-in-canada/","MetSolar — Unipol Tower: https://metsolar.eu/solar-architecture/unipol-tower-in-milan-brilliant-example-of-leadership-in-energy-and-environmental-design/","AMDL Circle — Novartis Pavillon: https://www.theplan.it/eng/award-2023-Culture/novartis-pavillon-the-potential-of-architecture-to-communicate-the-values-of-science-amdl-circle","SolarLab — CIS: https://solarlab.global/project/copenhagen-international-school","MVRDV — Sun Rock: https://mvrdv.com/projects/754/sun-rock"],
  },
  "xr-02-25":{
    series:"Make It Human",sub:"XR-02",num:"04/25",domain:"digital",author:"Matteo Giovanardi",date:"Apr 2025",
    title:"Extended Reality (XR) in Construction: Transforming Design, Building, and Operation",
    hero:"/images/blog/01_Holo-02-1920w.jpg",
    images:["/images/blog/01_Holo-02-1920w.jpg","/images/blog/02_Gamma-01-1920w.jpg","/images/blog/03-XYZ-01-1920w.jpg","/images/blog/foto-1920w.jpg"],
    captions:["Fig. 1 — HoloBuilder XR platform (credit: HoloBuilder)","Fig. 2 — GAMMA AR solution for construction site (credit: GAMMA)","Fig. 3 — XYZ Reality Engineering-Grade AR platform (credit: XYZ Reality)","Fig. 4 — EXVIRIENCE + LEVERY platform for building envelope maintenance (credit: EXVIRIENCE / Levery)"],
    sections:[
      {h:"Introduction",body:"XR — encompassing VR, AR, and MR — is redefining every stage of the construction lifecycle. From initial design conceptualization to on-site construction and ongoing O&M, XR is enhancing accuracy, fostering collaboration, bolstering safety and improving efficiency across the entire building lifecycle."},
      {h:"Unity and HoloBuilder",body:"Unity enables immersive XR applications for AEC — VR walkthroughs, AR overlays, and MR simulations at full scale before construction begins, with BIM model integration for improved decision-making. HoloBuilder revolutionizes site monitoring with 360-degree AI-powered photo documentation, integrating with Autodesk and Procore for automatic updates and historical tracking.",imgIndex:0},
      {h:"GAMMA AR and XYZ Reality",body:"Gamma AR allows construction teams to overlay digital models onto physical environments, minimizing construction errors by ensuring installations align with design specifications. XYZ Reality introduces Engineering-Grade AR projecting highly precise digital blueprints onto construction sites with sub-millimeter accuracy — contractors can construct directly from holographic plans.",imgIndex:1},
      {h:"PROMETHEUS: XR for dynamic building envelopes",body:"PROMETHEUS, a collaborative initiative between LEVERY and EXVIRIENCE, focuses on integrating XR into dynamic building envelopes. This project enables facility managers to interact with real-time data on energy performance, shading adjustments, and smart façade operations through AR and MR. XR allows maintenance personnel to overlay digital information onto physical façade systems, providing real-time guidance for maintenance tasks and access to technical documentation.",imgIndex:3},
      {h:"Conclusion",body:"The case studies provide compelling evidence of XR's transformative power across the entire construction lifecycle. The integration of XR is no longer a futuristic vision — it is a present-day reality reshaping how we design, build, and manage our spaces, contributing to sustainability by reducing errors, optimizing resource usage and enhancing the longevity of built environments."},
    ],
    titleIt:"Realtà estesa per le costruzioni: AR, VR e MR — applicazioni pratiche nel 2025",
    excerptIt:"Una panoramica delle tecnologie XR applicate al settore delle costruzioni: dalla visualizzazione in cantiere alla formazione degli operatori.",
    sectionsIt:[{"h":"Introduzione","body":"Le tecnologie di realtà estesa (XR) — che includono realtà aumentata (AR), realtà virtuale (VR) e realtà mista (MR) — stanno trovando applicazioni concrete nel settore delle costruzioni, superando la fase sperimentale per diventare strumenti operativi a tutti gli effetti."},{"h":"Realtà aumentata in cantiere","body":"L\'AR da cantiere permette di sovrapporre informazioni digitali all\'ambiente fisico, rendendo visibili elementi nascosti (impianti, strutture) e fornendo agli operatori istruzioni contestuali in tempo reale. Dispositivi come Microsoft HoloLens 2, Trimble XR10 e RealWear HMT-1 sono già utilizzati da grandi contractor europei per operazioni di installazione e ispezione."},{"h":"Realtà virtuale per la progettazione e la vendita","body":"La VR è particolarmente efficace nelle fasi di progettazione partecipata e di vendita immobiliare. Piattaforme come Enscape, Fuzor e IrisVR permettono la visualizzazione immersiva dei progetti BIM, facilitando la comunicazione tra progettisti, committenti e utenti finali. Il ritorno sull\'investimento è particolarmente elevato nella vendita di immobili off-plan, dove la VR riduce significativamente i tempi di decisione."},{"h":"Prospettive","body":"Le tecnologie XR per le costruzioni sono destinate a evolversi rapidamente nei prossimi anni, con l\'arrivo di dispositivi più leggeri, meno costosi e con autonomia maggiore. L\'integrazione con l\'AI e i gemelli digitali amplierà ulteriormente le possibilità applicative, rendendo l\'XR uno strumento indispensabile per la gestione avanzata degli edifici."}],
    refs:["Unity: https://unity.com/products","HoloBuilder: https://www.holobuilder.com/","Gamma AR: https://gamma-ar.com/","XYZ Reality: https://www.xyzreality.com/","IMVIZAR: https://www.imvizar.com/","Inception VR: https://www.inceptionspinoff.com/","PROMETHEUS Project — LEVERY & EXVIRIENCE, 2025"],
    funding:"This communication activity is carried out within the PROMETHEUS project, funded by the European Union. Views and opinions are those of the authors only.",
  },

};

function HeroPattern({accent}){
  return(
    <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.07,pointerEvents:"none"}} viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice">
      {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="320" stroke={accent||"#7EC8E3"} strokeWidth="1"/>))}
    </svg>
  );
}

export default function InsightClient({slug}){
  const [lang,setLang]=useState("en");
  useEffect(()=>{
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved){setLang(saved);return;}
    const browser=typeof navigator!=="undefined"?navigator.language:"en";
    if(browser.startsWith("it")){setLang("it");if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang","it");}
  },[]);
  const a=ARTICLES[slug]||ARTICLES["ai-02-26"];
  const dom=DOMAIN[a.domain]||DOMAIN.digital;

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-art-layout{grid-template-columns:1fr!important}.l-sidebar{position:static!important}}`}</style>

      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{...inner,height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:10}}><img src="/logo-white.svg" alt="" height="28" style={{display:"block"}}/><span style={{fontFamily:"'Gilmer','Georgia',serif",fontWeight:800,fontSize:20,color:"#fff",letterSpacing:"-0.01em",lineHeight:1,userSelect:"none"}}>Levery</span></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {NAV_LINKS.map(([label,href])=>(<li key={label}><a href={href} style={{color:href==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:href==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>))}
          </ul>
          <button style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer",marginRight:8}} onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}}>{lang==="en"?"IT":"EN"}</button><a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>

      {/* HERO */}
      <div style={{background:`linear-gradient(135deg,${dom.bg} 0%,${C.brand} 100%)`,minHeight:"clamp(88px,11vh,130px)",display:"flex",alignItems:"flex-end",paddingBottom:56,position:"relative",overflow:"hidden"}}>
        <HeroPattern accent={dom.accent}/>
        {a.hero&&<div style={{position:"absolute",inset:0,backgroundImage:`url(${a.hero})`,backgroundSize:"cover",backgroundPosition:"center",opacity:0.15}}/>}
        <div style={{...inner,position:"relative",zIndex:2,width:"100%",paddingTop:"clamp(88px,11vh,130px)"}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:20}}>
            <a href="/insights" style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",textDecoration:"none"}}>← Insights</a>
            <span style={{color:"rgba(255,255,255,0.2)"}}>/ </span>
            <span style={{fontSize:11,fontFamily:"monospace",color:"rgba(255,255,255,0.4)",textTransform:"uppercase"}}>{a.sub}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.16em",color:dom.accent,background:"rgba(0,0,0,0.3)",padding:"3px 9px",borderRadius:2,textTransform:"uppercase"}}>{dom.label}</span>
            <span style={{fontSize:9,fontFamily:"monospace",color:"rgba(255,255,255,0.4)",letterSpacing:"0.1em"}}>{a.series} · {a.sub} · Article {a.num}</span>
          </div>
          <h1 style={{fontSize:"clamp(28px,3vw,44px)",fontWeight:400,color:C.white,margin:"0 0 20px",fontFamily:"'Georgia',serif",lineHeight:1.1,maxWidth:760}}>{a.title}</h1>
          <p style={{fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{a.date} · By {a.author}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{background:C.white,padding:"64px 0 96px"}}>
        <div style={inner}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 280px",gap:64,alignItems:"start"}} className="l-art-layout">
            <div>
              {a.sections.map((sec,i)=>(
                <div key={i} style={{marginBottom:40}}>
                  <h2 style={{fontSize:20,fontWeight:400,color:C.ink,margin:"0 0 14px",fontFamily:"'Georgia',serif",lineHeight:1.2}}>{sec.h}</h2>
                  <p style={{fontSize:15,color:C.inkMid,lineHeight:1.85,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{sec.body}</p>
                  {sec.imgIndex!==undefined&&a.images&&a.images[sec.imgIndex]&&(
                    <div style={{marginTop:24,marginBottom:4,borderRadius:2,overflow:"hidden"}}>
                      <img src={a.images[sec.imgIndex]} alt={sec.h} style={{width:"100%",maxHeight:400,objectFit:"cover",display:"block"}}/>
                      {a.captions&&a.captions[sec.imgIndex]&&(
                        <p style={{fontSize:11,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"8px 0 0",fontStyle:"italic"}}>{a.captions[sec.imgIndex]}</p>
                      )}
                    </div>
                  )}
                  {i===0&&!sec.imgIndex&&a.images&&a.images[0]&&!a.captions&&(
                    <div style={{marginTop:24,borderRadius:2,overflow:"hidden"}}>
                      <img src={a.images[0]} alt={sec.h} style={{width:"100%",maxHeight:360,objectFit:"cover",display:"block"}}/>
                    </div>
                  )}
                </div>
              ))}
              {a.images&&a.images.length>1&&(
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:8,marginBottom:40}}>
                  {a.images.slice(1).map((img,i)=>(<img key={i} src={img} alt={`${a.title} ${i+2}`} style={{width:"100%",borderRadius:2,objectFit:"cover",aspectRatio:"16/9",display:"block"}}/>))}
                </div>
              )}
              {a.funded&&(
                <div style={{background:C.sandDark,border:`1px solid ${C.rule}`,borderRadius:2,padding:"16px 20px",marginTop:8}}>
                  <p style={{fontSize:12,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0,lineHeight:1.6}}>{a.funded}</p>
                </div>
              )}
              {a.refs&&a.refs.length>0&&(
                <div style={{marginTop:40,paddingTop:24,borderTop:`1px solid ${C.rule}`}}>
                  <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 12px"}}>References</p>
                  {a.refs.map((ref,i)=>(<a key={i} href={ref} target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:12,color:C.green,fontFamily:"monospace",textDecoration:"none",marginBottom:6,wordBreak:"break-all"}}>{ref}</a>))}
                </div>
              )}
            </div>
            <aside style={{position:"sticky",top:88}} className="l-sidebar">
              <div style={{background:C.sand,borderRadius:2,padding:24,marginBottom:16,border:`1px solid ${C.rule}`}}>
                <p style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 14px"}}>About this article</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 8px",lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>{lang==="en"?"Series:":"Serie:"}</strong> {a.series}</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 8px",lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>{lang==="en"?"Issue:":"Numero:"}</strong> {a.sub} · {a.num}</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 8px",lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>{lang==="en"?"Author:":"Autore:"}</strong> {a.author}</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0,lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>{lang==="en"?"Published:":"Pubblicato:"}</strong> {a.date}</p>
              </div>
              <div style={{background:dom.bg,borderRadius:2,padding:24}}>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.6,margin:"0 0 16px"}}>Want to discuss this topic for your business?</p>
                <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"block",textAlign:"center",padding:"10px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,background:dom.accent,color:dom.bg,textDecoration:"none"}}>{lang==="en"?"Book a call →":"Prenota una call →"}</a>
                <a href="/insights" style={{display:"block",textAlign:"center",marginTop:10,fontSize:12,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>{lang==="en"?"← All articles":"← Tutti gli articoli"}</a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div style={{background:C.sand,padding:"28px 0",borderTop:`1px solid ${C.rule}`}}>
        <div style={inner}><a href="/insights" style={{fontSize:13,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>{lang==="en"?"← Back to Insights":"← Torna agli Insight"}</a></div>
      </div>

            {/* NEWSLETTER */}
      <div style={{background:"#111820",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"56px 0"}}>
        <div style={{maxWidth:520,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 10px"}}>{lang==="it"?"Rimani aggiornato":"Stay informed"}</p>
          <p style={{fontSize:20,fontWeight:400,color:"rgba(255,255,255,0.85)",fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.4,whiteSpace:"pre-line"}}>{lang==="it"?"Una email al mese.\nR&D e innovazione per il settore delle costruzioni.":"One email per month.\nR&D and innovation news for the construction industry."}</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{lang==="it"?"Niente spam. Cancellazione in qualsiasi momento.":"No spam. Unsubscribe at any time."}</p>
          <div style={{display:"flex",gap:8,maxWidth:400,margin:"0 auto"}}>
            <input type="email" id="nl-insight" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-insight");
                if(!el||!el.value)return;
                try{
                  await fetch("https://formsubmit.co/ajax/info@levery.it",{
                    method:"POST",
                    headers:{"Content-Type":"application/json","Accept":"application/json"},
                    body:JSON.stringify({email:el.value,_subject:"Newsletter subscription",type:"newsletter"})
                  });
                  el.value="";
                  el.placeholder=lang==="it"?"✓ Iscritto":"✓ Subscribed";
                }catch(e){
                  el.placeholder=lang==="it"?"Riprova":"Try again";
                }
              }}>
              {lang==="it"?"Iscriviti":"Subscribe"}
            </button>
          </div>
        </div>
      </div>

      <footer style={{background:"#111820",padding:"48px 0 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px 32px",display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div>
            <img src="/logo-levery-vertical.svg" alt="Levery" height="72" style={{display:"block"}}/>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.3)",fontFamily:"'Georgia',serif",fontStyle:"italic",lineHeight:1.7,marginTop:14}}>{lang==="it"?"R&D specializzato, costruito intorno al tuo team.":"Specialist R&D, built around your team."}</p>
          </div>
          <div>
            <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Legal</p>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>Via Pisino 66, 47814 Bellaria Igea Marina (RN)</span>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>VAT 04730050400</span>
            <a href="/privacy" style={{display:"block",fontSize:12,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Privacy & Cookie Policy</a>
          </div>
          <div>
            <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Contact</p>
            <a href="mailto:info@levery.it" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>info@levery.it</a>
            <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:13,color:"#A8E6CF",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Book a call →</a>
          </div>
        </div>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"16px 32px"}}>
          <span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit · {lang==="it"?"Tutti i diritti riservati":"All rights reserved"}</span>
        </div>
      </footer>
    </div>
  );
}
