'use client'
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
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/jametguedjatelierfusomyrhaps-35-1920w.jpg",
    images:[
      "https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Pedone-02_Pedone-1920w.jpg",
      "https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Ricehouse-02_Ricehouse-1920w.jpg",
      "https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Immagine+2026-04-02+121740-1920w.png",
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
    refs:[
      "Pedone Working — Case di Luce - Scala C: https://pedoneworking.it/portfolio/case-di-luce-scala-c/",
      "Heres srl — Castello Utveggio: https://www.edilsocialnetwork.it/heres-tradizione-innovazione-e-sostenibilita-al-servizio-del-patrimonio-architettonico/",
      "RiceHouse — Torri Risorsa: https://www.ricehouse.it/storie/torri-risorsa/",
      "Rubner Timber — Roots Hamburg: https://www.rubner.com/en/references/timber-construction/roots/",
      "Atelier Fuso — Goutte d\'Or: https://www.theplan.it/architettura/public-housing-goutte-dor-atelier-fuso",
    ],
  },

  "ai-02-26":{
    series:"Make It Human",sub:"AI-02",num:"03/26",domain:"human",author:"Matteo Giovanardi",date:"February 25, 2026",
    title:"AI-based solutions for the construction sector: Innovative products for designing and constructing",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-34804017-1920w.jpeg",
    sections:[
      {h:"The evolution of generative design and BIM optimization",body:"The design phase represents the critical leverage point for both carbon and cost reduction, where AI-driven generative design is redefining architectural and engineering boundaries. Clev.ai automates repetitive BIM modeling tasks, enabling designers to reduce technical overhead and focus on architectural quality. Autodesk Forma deploys a cloud-based AI platform enabling real-time environmental analysis of wind patterns, solar radiation and acoustic levels — evaluating thousands of iterations in seconds. Hyperganic's AI-driven algorithmic engineering creates complex, 3D-printable structural components that mimic trabecular biological structures, using up to 40% less material than traditional casting."},
      {h:"AI-driven MEP design",body:"The design and coordination of MEP systems has traditionally consumed up to 80% of total engineering hours in complex projects. Endra.ai demonstrated the potential for 70x efficiency gains by synthesizing Large Language Models with high-fidelity 3D simulation, integrating directly with Autodesk Revit to compress design timelines from months to hours."},
      {h:"AI-driven site management and robotic assembly",body:"OpenSpace leverages AI-powered 360-degree photo documentation to automatically map site imagery to BIM models, creating a temporal 'Street View' of construction progress. Built Robotics' 'Exosystem' converts standard excavators into fully autonomous units using LiDAR, GPS sensors and deep learning, executing complex trenching and foundation tasks with millimeter precision."},
      {h:"Conclusion",body:"The AI-based products currently available demonstrate that digital intelligence has evolved from a peripheral tool into a core component of the modern construction value chain. At Levery, we view the adoption of these intelligent, data-driven systems as a fundamental requirement for a precise, resilient, and decarbonized built environment."},
    ],
    refs:["https://clev-eng.framer.website/","https://www.autodesk.com/it/products/forma/overview","https://www.endra.ai/","https://www.builtrobotics.com/technology"],
    funded:"EU-funded research",
  },
  "rob-02-26":{
    series:"Make It Digital",sub:"Rob-02",num:"02/26",domain:"digital",author:"Alessandro Pracucci",date:"February 3, 2026",
    title:"Robotic & Automation for Construction: Robotic Products for Digital Workflows",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-17180807-1920w.jpeg",
    sections:[
      {h:"Building on-site operations: layout and structural masonry",body:"The HP SitePrint layout robot autonomously prints complex floor plans directly onto the jobsite slab, integrating with cloud-based BIM data to eliminate traditional manual marking. The FBR Hadrian X truck-mounted system lays structural blocks according to a 3D CAD model using a specialized adhesive instead of traditional mortar, achieving high lay rates and structural precision with minimal material waste."},
      {h:"Specialized infrastructure works",body:"Robotic solutions are extending from general building operations to specialized infrastructure tasks. Autonomous systems for tunneling, bridge construction and utility installation are demonstrating precision and efficiency gains that manual methods cannot match. The key driver is the integration between digital design models and physical execution — eliminating the translation errors that cause rework."},
      {h:"Human augmentation and cobotic systems",body:"Rather than replacing workers entirely, many robotic platforms are designed for human augmentation — cobotic systems that enhance precision and reduce physical strain. Exoskeleton technologies and guided robotic arms are enabling workers to perform tasks previously requiring heavy machinery, improving both safety and output quality in constrained environments."},
      {h:"Conclusion",body:"The robotic products currently entering the construction market demonstrate that digital intelligence has evolved from a peripheral enhancement to a core operational requirement. The perspective is a transition from traditional manual labor to a proactive, data-driven construction environment where humans and robots collaborate on precision tasks."},
    ],
  },
  "bio-02-26":{
    series:"Make It Green",sub:"Bio-02",num:"01/26",domain:"green",author:"Alessandro Pracucci",date:"January 7, 2026",
    title:"Bio-based building materials & products for construction: innovative technologies",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/crop2.jpg%28mediaclass-full-width.c3083fedae46a95f1139ff9d5833b1b6b8e20a69%29-1920w.jpg",
    sections:[
      {h:"The evolution of the bio-based building envelope",body:"The building envelope serves as the primary interface for energy efficiency. Indresmat has developed a thermal-break window frame using proprietary bio-based polyurethane — up to 65-75% biosourced materials — achieving thermal transmittance values of 0.88 W/m²K while reducing carbon footprint. Mykor produces highly insulating panels by growing fungal root structures on industrial wood residues, creating a carbon-negative product that sequesters more carbon during growth than is emitted during processing."},
      {h:"Advanced bio-foams, bioceramics and hemp",body:"4D-Mater's 'Grow-Foams' leverage porous biological structures to provide a high strength-to-weight ratio for lightweight infill panels. The Mattone di Canapa by Biomat (Pedone Working) — a hemp brick composed of hemp shives and natural lime binders — provides high thermal inertia and regulates indoor humidity, ensuring superior hygrometric comfort with a circular business model using hemp cultivation waste."},
      {h:"Structural bio-based composites",body:"Beyond single components, bio-based composites are being engineered for structural applications. Mycelium-bound composites, agricultural fiber reinforced concretes and bio-polymer matrices are demonstrating mechanical performance comparable to conventional materials while delivering significant reductions in embodied carbon and end-of-life impact."},
      {h:"Conclusion",body:"These materials are moving beyond traditional timber to include high-performance composites derived from agricultural waste, fungi and bio-polymers — aiming to replace carbon-intensive plastics, mineral wool and concrete with alternatives that act as active carbon sinks. The transition from pilot to market requires regulatory clarity, supply chain development and the digital traceability tools that Levery is helping to build through projects like Digi4BioMat and BIO.CO.R.N.ER."},
    ],
  },
  "ai-01-25":{
    series:"Make It Human",sub:"AI-01",num:"12/25",domain:"human",author:"Matteo Giovanardi",date:"November 26, 2025",
    title:"AI as a Copilot for Construction: Actors & Stakeholders",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-30530416-1920w.jpeg",
    sections:[
      {h:"The disruptive role of AI",body:"The global construction industry is on the verge of an epochal transformation, driven by the imperative to increase safety, productivity and sustainability. AI is rapidly shifting the sector from manual and reactive processes to predictive and optimized workflows. AI can process vast amounts of data — BIM, GIS, images — in seconds that would take weeks manually, significantly improving design accuracy and drastically reducing on-site errors."},
      {h:"Design and pre-construction pioneers",body:"Design software developers and digital compliance providers are embedding AI directly into core design tools, transforming static models into intelligent data platforms. Clev stands as a BIM/CAD AI copilot dedicated to accelerating project iterations — reducing review times by up to 80%, automating 100% compliance verification, and leveraging intelligent archives of past projects."},
      {h:"Construction execution stakeholders",body:"Robotic system integrators and autonomous machinery providers are enabling AI-driven execution on site. Equipment manufacturers like Hilti Group are strategically partnering with startups to industrialize robotic solutions, while platform developers are building the digital infrastructure to connect design data with physical execution in real time."},
      {h:"Operations and performance monitoring",body:"Post-construction, AI is enabling predictive maintenance and performance optimization. IoT-integrated building management systems, digital twin platforms and energy monitoring tools are forming the foundation for AI-driven building lifecycle management — a space where Levery's ARyze platform is actively contributing."},
    ],
  },
  "rob-01-25":{
    series:"Make It Digital",sub:"Rob-01",num:"11/25",domain:"digital",author:"Alessandro Pracucci",date:"October 29, 2025",
    title:"Robotic & Automation for Construction: Actors & Stakeholders",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-10119310-1920w.jpeg",
    sections:[
      {h:"Equipment machinery manufacturers: the product innovator",body:"Companies like Hilti Group extend beyond mere sales, strategically partnering with specialists to industrialize robotic solutions. The Hilti Jaibot — a semi-autonomous drilling robot developed in collaboration with nLink — automates overhead drilling for MEP installations directly from a digital plan, demonstrating how incumbents integrate with agile startups to rapidly scale innovation and improve on-site safety."},
      {h:"Research entities and technology developers",body:"Academic institutions and specialized R&D firms provide the foundational innovation that manufacturers then industrialize. Their role is to validate new approaches in controlled environments, de-risk adoption for industry partners and publish findings that advance the collective knowledge base. The EU-funded ecosystem — including projects like PROMETHEUS — plays a critical role in enabling this research-to-market pathway."},
      {h:"General contractors and construction companies",body:"End-users drive the demand for robotic solutions through their operational requirements. The most innovative construction companies are not passive technology adopters but active co-developers, providing field validation data and practical requirements that shape product development. Their feedback loop is essential for solutions to move from prototype to reliable production tool."},
      {h:"Conclusion",body:"The success of robotics in construction relies on a sophisticated networking ecosystem where technology creators, research entities, large industry players and end-users collaborate to prove the value and scalability of automated solutions. The stakeholders driving this evolution are defined by their unique contribution to bridging the gap between digital planning and physical building."},
    ],
  },
  "bio-01-25":{
    series:"Make It Green",sub:"Bio-01",num:"08/25",domain:"green",author:"Alessandro Pracucci",date:"October 1, 2025",
    title:"Bio-based Building Materials & Products for Construction: Actors & Stakeholders",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/ladrillos_de_canamo_0-1920w.jpg",
    sections:[
      {h:"Raw material suppliers and feedstock processors",body:"A new and critical player in the bio-based ecosystem is the agrowaste processor. Companies and organizations that collect and transform agricultural by-products — rice husks, corn cobs, grape pomace — into usable construction materials. Regional clusters like the Agrifood Clust-ER in Emilia-Romagna create vital 'short supply chains', connecting agri-food waste streams to construction material innovation."},
      {h:"Material manufacturers and product developers",body:"Bio-based material manufacturers bridge the gap between raw biological feedstocks and market-ready construction products. Companies like Pedone Working (hemp-based building blocks), Mykor (mycelium insulation) and Indresmat (bio-polyurethane window frames) are demonstrating that bio-based alternatives can meet the performance standards required for commercial construction applications."},
      {h:"Certification bodies and regulators",body:"The transition to bio-based construction is dependent on clear regulatory frameworks and accessible certification pathways. CE marking, EPD (Environmental Product Declaration) certification and ESPR compliance are key milestones. Levery actively supports manufacturers through certification pathway analysis and technical documentation, a service identified as a priority need by industrial partners in MEZeroE survey data."},
      {h:"Digital tool developers",body:"The scale-up of bio-based materials requires robust digital traceability infrastructure. Digital Product Passports, IoT-enabled supply chain monitoring and lifecycle data management platforms are essential for demonstrating compliance and building market confidence. Levery's DeePPy platform and its role in projects like Digi4BioMat and BIO.CO.R.N.ER represent a direct response to this need."},
    ],
  },
  "xr-03-25":{
    series:"Make It Human",sub:"XR-03",num:"07/25",domain:"human",author:"Alessandro Pracucci",date:"July 2025",
    title:"Stepping into the Future: How ARyze is Revolutionizing Building Maintenance",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Immagine-2025-06-26-104300-1920w.jpg",
    images:["https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Immagine+2025-06-26+105320-1920w.jpg","https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Immagine+2025-06-26+104402-1920w.jpg","https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Immagine+2025-06-26+104341-1920w.jpg"],
    sections:[
      {h:"The growing complexity of building O&M",body:"Modern buildings are becoming increasingly complex, integrating advanced technologies that pose new challenges for long-term operational efficiency. Building envelopes now incorporate intelligent solar shading, automated openings, environmental sensors, photovoltaic modules and advanced plant systems. Aligned with directives like the EPBD (EU/2024/1275) and the Smart Readiness Indicator framework, there is a growing urgency to develop innovative O&M solutions."},
      {h:"XR as a game changer: immediate functionalities",body:"XR platforms allow for the real-time overlay of digital data — maintenance manuals, performance metrics, maintenance histories, 2D/3D models — directly onto the physical building environment. Remote technicians can access the XR platform, visualize the system in question, and provide qualified assistance through immersive collaborative sessions with digital annotations and visual instructions. IoT sensor data, smart metering and thermal cameras can be queried and visualized through the XR interface for advanced diagnostics and anomaly detection."},
      {h:"ARyze platform capabilities",body:"ARyze — developed by Levery and Exvirience — delivers these capabilities as a commercial platform accessible on standard PC and tablet hardware without dedicated XR headsets. The platform enables contextualized visualization of technical documents overlaid on the physical environment, remote assistance sessions, immersive training simulations, and automated certified reporting with voice and gesture interfaces."},
      {h:"The path forward",body:"Current market focus prioritizes practical, highly useful functionalities to address concrete sectoral problems. The future will be characterized by increasingly immersive, connective and intelligent interactions, supported by predictive maintenance schemes and AI for automatic fault recognition, guided maintenance support and proactive prediction of potential malfunctions."},
    ],
    funded:"This research is funded by the European Union within the SUSTAIN Open Call.",
  },
  "dpp-03-25":{
    series:"Make It Digital",sub:"DPP-03",num:"06/25",domain:"digital",author:"Alessandro Pracucci",date:"June 2025",
    title:"DeePPy: Revolutionizing Transparency in Construction with the Digital Product Passport",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/immagine-1-1920w.jpg",
    sections:[
      {h:"The ESPR and the Digital Product Passport",body:"The Ecodesign for Sustainable Products Regulation (ESPR) introduces the Digital Product Passport (DPP) as the key mechanism for ensuring transparency and accessibility of product lifecycle information. Every construction product will eventually require a QR code or link revealing data from material origin to carbon emissions, from estimated durability to end-of-life recycling options — enabling informed decisions across the value chain."},
      {h:"DeePPy's key features",body:"DeePPy simplifies DPP creation through an intuitive guided data entry process, collecting all product-related data in a single cloud-based repository. Supplier data management allows users to associate materials with suppliers and collect sustainability information including EPDs and environmental certifications. The product impact configurator estimates overall environmental impact based on supplier choices, enabling manufacturers to optimize sourcing for sustainability."},
      {h:"Marketplace and ecosystem",body:"Beyond DPP management, DeePPy proposes itself as a marketplace for sustainable materials with certified DPPs, creating a virtuous ecosystem where manufacturers can offer ESPR-compliant products to a broader and more conscious audience. This marketplace creates demand incentives for transparency and sustainability across the construction value chain."},
      {h:"Conclusion",body:"Platforms like DeePPy are fundamental in driving the transition toward a circular construction sector, providing the tools to create, manage and enhance the value of DPPs. Adopting these solutions ensures regulatory compliance while unlocking new opportunities for innovation, sustainability and the creation of a more circular future for the built environment."},
    ],
    funded:"DeePPy is the result of a research project funded by the European Union (INTRANSIT Open Call — Digi4BioMat project).",
  },
  "bipv-03-25":{
    series:"Make It Green",sub:"BIPV-03",num:"05/25",domain:"green",author:"Alessandro Pracucci",date:"May 2025",
    title:"BIPV in Action: Real-World Applications Driving the Sustainable Transformation of Buildings",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/NovartisPavillon-01-ThePlan-1920w.jpg",
    images:["https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/CIS-01-SolarLab-1920w.jpg","https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Unipol-02-MCA-1920w.jpg"],
    sections:[
      {h:"Art meets energy: Pavillon Novartis, Basel",body:"Designed by AMDL CIRCLE and architect Michele De Lucchi, the Novartis Pavilion features a translucent media façade with 10,000 diamond-shaped organic photovoltaic panels and 30,000 embedded LEDs, generating approximately 15,000 kWh annually. Transparent silicon solar panels in the curtain wall convert sunlight into electricity without blocking natural daylight — demonstrating that energy-producing buildings can also be works of art."},
      {h:"Copenhagen International School: large-scale commitment",body:"Designed by C.F. Møller Architects, the CIS was clad with approximately 12,000 custom-colored, lightweight solar panels supplying almost half of the school's annual electricity consumption. Custom-colored panels demonstrate that BIPV can move beyond traditional dark hues, allowing architects to maintain the visual identity of a building while incorporating renewable energy generation."},
      {h:"Unipol Tower, Milan: high-rise leadership",body:"Designed by MCA, Unipol Tower features a double-skin façade fully integrated with photovoltaic modules following the tower's curvature. Developed in partnership with MetSolar, the project achieved LEED Gold certification and demonstrates that sustainability and architectural intent must work in tandem from the outset — the BIPV was not an afterthought but a fundamental design component."},
      {h:"Lessons from global BIPV projects",body:"The IEA PVPS Task 15 portfolio demonstrates the versatility of BIPV in different climates and building types. Common success factors include multidisciplinary coordination from early design stages, reliable verification, and regulatory alignment. The primary barrier to adoption remains the higher upfront cost compared to conventional cladding — addressed by the ecodesign tools and market analysis Levery is developing within the MC2.0 project."},
    ],
  },
  "xr-02-25":{
    series:"Make It Human",sub:"XR-02",num:"04/25",domain:"human",author:"Alessandro Pracucci",date:"April 2025",
    title:"Extended Reality (XR) in Construction: Transforming Design, Building, and Operation",
    hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/foto-1920w.jpg",
    images:["https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/01_Holo-02-1920w.jpg","https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/02_Gamma-01-1920w.jpg","https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/03-XYZ-01-1920w.jpg"],
    sections:[
      {h:"Virtual prototyping and immersive collaboration",body:"XR enables stakeholders to step into a full-scale immersive 3D environment of a proposed building, overcoming the limitations of 2D blueprints. Unity's real-time 3D development platform enables VR walkthroughs, AR overlays and MR simulations with lighting analysis and BIM integration. HoloBuilder revolutionizes site monitoring with 360-degree photo documentation powered by AI and AR, integrating with Autodesk and Procore for automatic updates and historical tracking."},
      {h:"Engineering-grade precision on site",body:"Gamma AR allows construction teams to overlay digital models onto physical environments, minimizing construction errors and enhancing communication between on-site teams and project managers. XYZ Reality introduces 'Engineering-Grade AR' projecting highly precise digital blueprints onto construction sites in real-time with sub-millimeter accuracy, enabling contractors to construct directly from holographic plans."},
      {h:"Operations and maintenance",body:"XR improves efficiency and accuracy in maintenance tasks by providing real-time data and step-by-step instructions. IMVIZAR utilizes AR to create historical reconstructions of demolished buildings, while Inception provides VR training platforms for building managers. PROMETHEUS — Levery's collaboration with Exvirience — focuses on integrating XR into dynamic building envelopes, enabling facility managers to interact with real-time data on energy performance through AR and MR applications."},
      {h:"Conclusion",body:"The shift from traditional methods to intuitive, data-driven approaches facilitated by XR is not just a technological trend — it represents a fundamental evolution in how the built environment is conceived, created, and maintained. These technologies not only drive efficiency but also contribute to sustainability by reducing errors, optimizing resource usage, and enhancing the longevity of built environments."},
    ],
    refs:["https://unity.com/products","https://www.holobuilder.com/","https://gamma-ar.com/","https://www.xyzreality.com/"],
  },
};

function HeroPattern({accent}){
  return(<svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.07,pointerEvents:"none"}} viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice">
    {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="320" stroke={accent} strokeWidth="1"/>))}
  </svg>);
}

export default function InsightClient({slug}){
  const a=ARTICLES[slug]||ARTICLES["ai-02-26"];
  const dom=DOMAIN[a.domain]||DOMAIN.digital;

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-art-layout{grid-template-columns:1fr!important}.l-sidebar{position:static!important}}`}</style>

      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{...inner,height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {NAV_LINKS.map(([label,href])=>(<li key={label}><a href={href} style={{color:href==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:href==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>))}
          </ul>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
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
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 8px",lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>Series:</strong> {a.series}</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 8px",lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>Issue:</strong> {a.sub} · {a.num}</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 8px",lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>Author:</strong> {a.author}</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0,lineHeight:1.5}}><strong style={{fontWeight:600,color:C.ink}}>Published:</strong> {a.date}</p>
              </div>
              <div style={{background:dom.bg,borderRadius:2,padding:24}}>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.6,margin:"0 0 16px"}}>Want to discuss this topic for your business?</p>
                <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"block",textAlign:"center",padding:"10px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,background:dom.accent,color:dom.bg,textDecoration:"none"}}>Book a call →</a>
                <a href="/insights" style={{display:"block",textAlign:"center",marginTop:10,fontSize:12,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>← All articles</a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div style={{background:C.sand,padding:"28px 0",borderTop:`1px solid ${C.rule}`}}>
        <div style={inner}><a href="/insights" style={{fontSize:13,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>← Back to Insights</a></div>
      </div>

      <footer style={{background:C.ink,padding:"48px 0 0"}}>
        <div style={{...inner,paddingBottom:40,display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div><img src="/logo-white.svg" alt="Levery" height="36" style={{display:"block"}}/><p style={{fontSize:14,color:"rgba(255,255,255,0.3)",fontFamily:"'Georgia',serif",fontStyle:"italic",lineHeight:1.7,marginTop:14}}>Specialist R&D, built around your team.</p>
            <a href="/impact" style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:16,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",borderRadius:2,padding:"4px 10px"}}>
              <span style={{fontSize:9,color:"#A8E6CF",fontFamily:"monospace"}}>⬡</span>
              <span style={{fontSize:10,color:"rgba(255,255,255,0.35)",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"0.06em"}}>Società Benefit · Our impact →</span>
            </a>
          </div>
          <div><p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Legal</p>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>Via Pisino 66, 47814 Bellaria Igea Marina (RN)</span>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>VAT 04730050400</span>
            <a href="/privacy" style={{display:"block",fontSize:12,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Privacy & Cookie Policy</a>
          </div>
          <div><p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Contact</p>
            <a href="mailto:info@levery.it" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>info@levery.it</a>
            <a href="tel:+393396469607" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>(+39) 339 646 9607</a>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:13,color:"#A8E6CF",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Book a call →</a>
          </div>
        </div>
        <div style={{...inner,padding:"16px 32px"}}><span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit · All rights reserved</span></div>
      </footer>
    </div>
  );
}
