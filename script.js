      /* --- 1. HISTORICAL DATASET (Fully Integrated List) --- */
        const scientistsData = [
            {
                id: "isaac-newton",
                name: "Sir Isaac Newton",
                lifespan: "1643–1727",
                country: "England",
                field: "Physics",
                era: "scientific-revolution",
                image: "https://i.pinimg.com/1200x/37/68/e3/3768e337336471fda3112e9783b243d3.jpg",
                shortDesc: "Formulated the laws of motion and universal gravitation, and co-invented calculus.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Woolsthorpe Manor and Solitary Childhood",
                        content: "Born prematurely on January 4, 1643, at Woolsthorpe Manor in Lincolnshire, Isaac Newton was born without a father who had died three months prior. His mother remarried when he was three, leaving him with his maternal grandmother. Newton attended King's School in Grantham where he lodged with an apothecary, developing a profound fascination with mechanical models, chemical formulas, and sundials."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Cambridge Years and the Annus Mirabilis",
                        content: "In 1661, Newton entered Trinity College, Cambridge as a sizar. When the Great Plague of London closed Cambridge in 1665, Newton retreated to Woolsthorpe for two years. This 'Annus Mirabilis' proved legendary: in profound isolation, he laid the conceptual foundations for calculus, optics, and gravitation."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Optics, Calculus, and Three Laws of Motion",
                        content: "Newton's optical experiments proved white light is a blend of colored rays. His magnum opus, *Philosophiae Naturalis Principia Mathematica* (1687), established the three universal laws of motion and universal gravitation."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Universal Gravitation",
                        content: "Proved that the force pulling an apple to the ground also keeps the Moon in orbit, unifying terrestrial and celestial mechanics under mathematical laws."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Controversies and Breakdowns",
                        content: "Engaged in bitter priority disputes with Robert Hooke and Gottfried Leibniz, enduring severe emotional strain and nervous breakdowns."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "The Clockwork Universe",
                        content: "Transformed human thought from medieval mysticism into rigorous mechanism. Knighted by Queen Anne in 1705."
                    }
                ],
                timeline: [
                    { year: "1643", event: "Born in Woolsthorpe, Lincolnshire." },
                    { year: "1661", event: "Enters Trinity College, Cambridge." },
                    { year: "1687", event: "Publishes the revolutionary *Principia Mathematica*." },
                    { year: "1727", event: "Passes away in London and is buried in Westminster Abbey." }
                ]
            },
            {
                id: "albert-einstein",
                name: "Albert Einstein",
                lifespan: "1879–1955",
                country: "Germany / USA",
                field: "Physics",
                era: "modern-science",
                image: "https://i.pinimg.com/1200x/1b/1d/cf/1b1dcfc7516ece72a543467154cadbd5.jpg",
                shortDesc: "Developed the theory of relativity and transformed our understanding of space, time, and gravity.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Ulm and Munich Curiosity",
                        content: "Born in Ulm, Germany, on March 14, 1879, Albert Einstein grew up in a secular Jewish family. Fascinated by a pocket compass given to him at age five and geometry textbooks, he exhibited profound independent curiosity."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Swiss Patent Office and Miracle Year",
                        content: "Graduating from the Zurich Polytechnic, Einstein initially struggled to find an academic post and worked as a patent clerk in Bern. In 1905—his 'Annus Mirabilis'—he published four groundbreaking papers while working at the patent office."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Special Relativity and Photoelectric Effect",
                        content: "Formulated special relativity, proving the speed of light is constant and establishing mass-energy equivalence ($E=mc^2$). His explanation of the photoelectric effect earned him the 1921 Nobel Prize."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "General Theory of Relativity (1915)",
                        content: "Replaced Newton's gravity with the concept of spacetime curvature caused by mass and energy, verified during the 1919 solar eclipse."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Exile and Unified Field Theory",
                        content: "Fought against the rising Nazi regime in Germany in 1933, emigrating permanently to Princeton, USA. Spent his later decades unsuccessfully searching for a unified field theory."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Global Icon of Genius",
                        content: "Became the defining scientific icon of the 20th century, profoundly shaping cosmology, quantum mechanics, and modern technology."
                    }
                ],
                timeline: [
                    { year: "1879", event: "Born in Ulm, Germany." },
                    { year: "1905", event: "Publishes miraculous papers on special relativity and photoelectric effect." },
                    { year: "1915", event: "Completes general theory of relativity." },
                    { year: "1921", event: "Awarded Nobel Prize in Physics." },
                    { year: "1955", event: "Passes away in Princeton, New Jersey." }
                ]
            },
            {
                id: "jj-thomson",
                name: "J.J. Thomson",
                lifespan: "1856–1940",
                country: "United Kingdom",
                field: "Physics",
                era: "modern-science",
                image: "https://i.pinimg.com/1200x/a0/48/5d/a0485da8f0e03a06b4182b9a427333f5.jpg",
                shortDesc: "Discovered the electron, revolutionizing atomic physics and proving atoms are divisible.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Cheetham Hill and Trinity",
                        content: "Born in Manchester, England, on December 18, 1856, J.J. Thomson studied at Owens College and Trinity College, Cambridge, where he spent his entire career."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Cathode Ray Investigations",
                        content: "Working at the Cavendish Laboratory, Thomson investigated cathode rays using electric and magnetic fields."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Discovery of the Electron",
                        content: "In 1897, announced the discovery of subatomic corpuscles (electrons), proving atoms consist of smaller constituents."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Plum Pudding Model",
                        content: "Proposed an early atomic model where electrons were embedded in a positive matrix."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Skepticism",
                        content: "Overcame initial widespread skepticism regarding the existence of subatomic particles."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Nobel Prize and Nobel Laureate Mentee",
                        content: "Awarded the 1906 Nobel Prize in Physics. Seven assistants and his son won Nobel Prizes."
                    }
                ],
                timeline: [
                    { year: "1856", event: "Born in Manchester, England." },
                    { year: "1897", event: "Discovers the electron." },
                    { year: "1906", event: "Awarded Nobel Prize in Physics." },
                    { year: "1940", event: "Passes away in Cambridge." }
                ]
            },
            {
                id: "emmy-noether",
                name: "Emmy Noether",
                lifespan: "1882–1935",
                country: "Germany / USA",
                field: "Physics",
                era: "modern-science",
                image: "https://i.pinimg.com/736x/3f/19/e7/3f19e7233225cc35108b0dbdcaa4ec95.jpg",
                shortDesc: "Revolutionized abstract algebra and physics with Noether's Theorem connecting symmetry and conservation laws.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Erlangen Family",
                        content: "Born in Erlangen, Germany, on March 23, 1882, Emmy Noether overcame academic gender restrictions to earn her doctorate in 1907."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Göttingen University Lectures",
                        content: "Invited by David Hilbert, she lectured under his name for years without official faculty status while producing monumental papers."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Noether's Theorem",
                        content: "Proved in 1915 that every conservation law in physics is grounded in a fundamental symmetry of nature."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Foundations of Abstract Algebra",
                        content: "Transformed ring theory and ideal theory into powerful pillars of modern mathematics."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Nazi Expulsion",
                        content: "Dismissed by the Nazi regime in 1933 due to her Jewish heritage, emigrating to Bryn Mawr College, USA."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Mathematical Titan",
                        content: "Praised by Albert Einstein as the most significant creative mathematical genius since women entered higher education."
                    }
                ],
                timeline: [
                    { year: "1882", event: "Born in Erlangen, Germany." },
                    { year: "1915", event: "Formulates Noether's Theorem." },
                    { year: "1933", event: "Emigrates to the United States." },
                    { year: "1935", event: "Passes away in Bryn Mawr, Pennsylvania." }
                ]
            },
            {
                id: "paul-dirac",
                name: "Paul Dirac",
                lifespan: "1902–1984",
                country: "United Kingdom",
                field: "Physics",
                era: "modern-science",
                image: "https://i.pinimg.com/736x/91/37/41/9137410f5918a0f7a5042f82d6127dd8.jpg",
                shortDesc: "Formulated the Dirac equation uniting quantum mechanics and relativity, predicting antimatter.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Bristol Upbringing",
                        content: "Born in Bristol, England, on August 8, 1902, Paul Dirac studied electrical engineering and mathematics at Bristol University."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Cambridge and Relativistic Quantum Theory",
                        content: "Earning his PhD at Cambridge, Dirac formulated the Dirac equation in 1928, merging quantum mechanics with special relativity."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Prediction of Antimatter",
                        content: "His wave equation predicted antiparticles, confirmed experimentally by the discovery of the positron in 1932."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Quantum Electrodynamics",
                        content: "Laid the mathematical foundations for quantum electrodynamics."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Extreme Laconism",
                        content: "Noted for his intense taciturnity and preference for pure mathematical exactness over social discourse."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Nobel Laureate and Lucasian Chair",
                        content: "Awarded the 1933 Nobel Prize in Physics and held the Lucasian Chair of Mathematics at Cambridge for 37 years."
                    }
                ],
                timeline: [
                    { year: "1902", event: "Born in Bristol, England." },
                    { year: "1928", event: "Publishes the Dirac equation predicting antimatter." },
                    { year: "1933", event: "Awarded Nobel Prize in Physics." },
                    { year: "1984", event: "Passes away in Tallahassee, Florida." }
                ]
            },
            {
                id: "ahmed-zewail",
                name: "Ahmed Zewail",
                lifespan: "1946–2016",
                country: "Egypt / USA",
                field: "Chemistry",
                era: "modern-science",
                image: "https://i.pinimg.com/736x/6f/33/f2/6f33f26925ff8fb193c7b52f2c6843fd.jpg",
                shortDesc: "Father of femtochemistry; pioneered ultrafast laser spectroscopy to observe chemical reactions in real time.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Damanhour and Alexandria",
                        content: "Born in Damanhour, Egypt, on February 26, 1946, Ahmed Zewail earned degrees from Alexandria University before earning his PhD in the US."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Caltech Professorship",
                        content: "Joining Caltech in 1976, he developed laser techniques capable of capturing molecular motion at ultra-short timescales."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Femtochemistry",
                        content: "Using laser flashes lasting femtoseconds ($10^{-15}$ s), Zewail filmed chemical bonds breaking and forming."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Real-Time Molecular Dynamics",
                        content: "Transformed chemistry from static theoretical descriptions into dynamic cinematographic observation."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Pushing Experimental Limits",
                        content: "Overcame immense technical hurdles deemed impossible due to the extreme speed of atomic vibrations."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Nobel Prize and Zewail City",
                        content: "Awarded the 1999 Nobel Prize in Chemistry, becoming the first Egyptian scientist to win a science Nobel."
                    }
                ],
                timeline: [
                    { year: "1946", event: "Born in Damanhour, Egypt." },
                    { year: "1976", event: "Joins Caltech faculty." },
                    { year: "1999", event: "Awarded Nobel Prize in Chemistry." },
                    { year: "2016", event: "Passes away in Pasadena, California." }
                ]
            },
            {
                id: "robert-boyle",
                name: "Robert Boyle",
                lifespan: "1627–1691",
                country: "Ireland / England",
                field: "Chemistry",
                era: "scientific-revolution",
                image: "https://i.pinimg.com/736x/9c/a4/6e/9ca46e8bd02c27220a1de830d8a53a1a.jpg",
                shortDesc: "Founder of modern chemistry; formulated Boyle's Law relating gas pressure and volume.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Lismore Castle",
                        content: "Born at Lismore Castle in County Waterford, Ireland, on January 25, 1627, Robert Boyle was educated at Eton College."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Oxford and the Invisible College",
                        content: "Settling in Oxford, Boyle established a laboratory and co-founded the 'Invisible College', a precursor to the Royal Society."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Boyle's Law and Air Pump",
                        content: "Using an improved air pump built with Robert Hooke, he established Boyle's Law stating gas pressure and volume are inversely proportional."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "The Sceptical Chymist",
                        content: "Published in 1661, rejecting ancient alchemical theories and defining chemical elements and compounds."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Frail Health",
                        content: "Maintained rigorous experimentation despite chronic frail health throughout his life."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Father of Modern Chemistry",
                        content: "Disassociated chemistry from alchemy and established empirical standards for scientific publication."
                    }
                ],
                timeline: [
                    { year: "1627", event: "Born in Lismore, Ireland." },
                    { year: "1661", event: "Publishes *The Sceptical Chymist*." },
                    { year: "1663", event: "Founding fellow of the Royal Society." },
                    { year: "1691", event: "Passes away in London." }
                ]
            },
            {
                id: "amedeo-avogadro",
                name: "Amedeo Avogadro",
                lifespan: "1776–1856",
                country: "Italy",
                field: "Chemistry",
                era: "industrial-age",
                image: "https://i.pinimg.com/1200x/50/bd/42/50bd427ec467b71ebea60f13c8d6e5de.jpg",
                shortDesc: "Formulated Avogadro's Law establishing that equal volumes of gases contain equal numbers of molecules.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Turin Legal Family",
                        content: "Born in Turin, Italy, on August 9, 1776, Avogadro initially practiced law before dedicating himself to physics and chemistry."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Professorship in Turin",
                        content: "Serving as professor of natural philosophy, Avogadro sought to reconcile atomic theory with gas reaction volumes."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Avogadro's Hypothesis (1811)",
                        content: "Proposed that equal volumes of all gases at identical temperature and pressure contain equal numbers of molecules ($6.022 \\times 10^{23}$)."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Atoms vs. Molecules",
                        content: "Clarified the crucial distinction between atoms and molecules, resolving longstanding chemical confusion."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Decades of Ignorance",
                        content: "His hypothesis was ignored for nearly 50 years until Stanislao Cannizzaro championed his work in 1860."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Cornerstone of Stoichiometry",
                        content: "Avogadro's constant remains a fundamental physical constant underlying all chemical calculations."
                    }
                ],
                timeline: [
                    { year: "1776", event: "Born in Turin, Italy." },
                    { year: "1811", event: "Publishes hypothesis on gas molecules." },
                    { year: "1856", event: "Passes away in Turin." }
                ]
            },
            {
                id: "marie-curie",
                name: "Marie Curie",
                lifespan: "1867–1934",
                country: "Poland / France",
                field: "Chemistry",
                era: "modern-science",
                image: "https://i.pinimg.com/736x/88/05/f1/8805f1895784e98a09eb02d29df43b47.jpg",
                shortDesc: "Pioneer of radioactivity, discoverer of radium and polonium, and first woman to win a Nobel Prize.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Warsaw and Flying University",
                        content: "Born Maria Sklodowska in Warsaw, Poland, on November 7, 1867, she attended Warsaw's clandestine Flying University before moving to Paris."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Pierre Curie and Uranium Rays",
                        content: "In Paris, she met Pierre Curie. Investigating uranium rays, Marie hypothesized that radiation was an atomic property."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Polonium and Radium",
                        content: "Processed tons of pitchblende ore to isolate polonium and radium in 1898, coining the term 'radioactivity'."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Two Nobel Prizes",
                        content: "Only person in history to win Nobel Prizes in two distinct sciences: Physics (1903) and Chemistry (1911)."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Tragedy and Sexism",
                        content: "Pierre died in a carriage accident in 1906. Marie faced intense sexism and xenophobic media attacks."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Martyr to Science",
                        content: "Died from aplastic anemia caused by prolonged radiation exposure. Her legacy powers cancer radiotherapy."
                    }
                ],
                timeline: [
                    { year: "1867", event: "Born in Warsaw, Poland." },
                    { year: "1895", event: "Marries Pierre Curie." },
                    { year: "1898", event: "Discovers polonium and radium." },
                    { year: "1903", event: "Wins Nobel Prize in Physics." },
                    { year: "1911", event: "Wins Nobel Prize in Chemistry." },
                    { year: "1934", event: "Passes away from radiation exposure." }
                ]
            },
            {
                id: "maryam-mirzakhani",
                name: "Maryam Mirzakhani",
                lifespan: "1977–2017",
                country: "Iran / USA",
                field: "Mathematics",
                era: "modern-science",
                image: "https://i.pinimg.com/1200x/30/5a/91/305a91b312d7517f57bc7586992f7e99.jpg",
                shortDesc: "First female mathematician to win the Fields Medal, pioneering hyperbolic geometry.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Tehran Childhood",
                        content: "Born in Tehran, Iran, on May 12, 1977, Mirzakhani won gold medals in consecutive International Mathematical Olympiads."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Sharif and Harvard PhD",
                        content: "Earning her undergraduate degree at Sharif University, she earned her PhD at Harvard under Curtis McMullen."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Moduli Spaces of Riemann Surfaces",
                        content: "Explored the dynamics and geometry of moduli spaces, linking topology and dynamical systems."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "The Fields Medal (2014)",
                        content: "Became the first woman and first Iranian to be awarded the Fields Medal in mathematics."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Untimely Illness",
                        content: "Diagnosed with breast cancer, she continued working and mentoring at Stanford until her passing in 2017."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Global Mathematical Inspiration",
                        content: "Inspires women and girls worldwide to pursue mathematics and theoretical sciences."
                    }
                ],
                timeline: [
                    { year: "1977", event: "Born in Tehran, Iran." },
                    { year: "2004", event: "Receives PhD from Harvard." },
                    { year: "2014", event: "Awarded the Fields Medal." },
                    { year: "2017", event: "Passes away in Stanford, California." }
                ]
            },
            {
                id: "omar-khayyam",
                name: "Omar Khayyam",
                lifespan: "1048–1131 AD",
                country: "Persia",
                field: "Mathematics",
                era: "ancient",
                image: "https://i.pinimg.com/1200x/cf/c7/87/cfc78766d5c913c3d306d5d7b08a5821.jpg",
                shortDesc: "Persian polymath who solved cubic equations geometrically and reformed the solar calendar.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Nishapur Scholarly Pursuit",
                        content: "Born in Nishapur, Persia, on May 18, 1048, Omar Khayyam received rigorous training in mathematics and astronomy."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Isfahan Observatory",
                        content: "Invited by Sultan Malik-Shah I to Isfahan, Khayyam led an observatory team to reform the Jalali solar calendar."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Geometric Cubic Solutions",
                        content: "Classified and solved cubic equations using intersecting conic sections centuries before Europeans."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Algebraic Geometry",
                        content: "Established algebraic geometry foundations and explored Euclid's parallel postulate."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Political Climates",
                        content: "Navigated conservative political and religious climates while maintaining scientific rationalism."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Scientist and Poet",
                        content: "Celebrated globally as both a supreme mathematician and author of the *Rubaiyat*."
                    }
                ],
                timeline: [
                    { year: "1048", event: "Born in Nishapur, Persia." },
                    { year: "1079", event: "Completes Jalali calendar reform." },
                    { year: "1131", event: "Passes away in Nishapur." }
                ]
            },
            {
                id: "alan-turing",
                name: "Alan Turing",
                lifespan: "1912–1954",
                country: "United Kingdom",
                field: "Computer",
                era: "modern-science",
                image: "https://i.pinimg.com/236x/7f/ef/f0/7feff0c7581dbe20033fd755da48f7d7.jpg",
                shortDesc: "Father of theoretical computer science and artificial intelligence; cracked the Enigma code.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Maida Vale Prodigy",
                        content: "Born in London on June 23, 1912, Alan Turing displayed prodigious mathematical talent, studying at Cambridge and Princeton."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Bletchley Park Enigma Codebreaker",
                        content: "During World War II, Turing designed the Bombe machine that decrypted Nazi naval codes, saving millions."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "The Universal Turing Machine",
                        content: "In 1936, conceptualized the Turing Machine, laying foundational architecture for all modern computers."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Foundations of Artificial Intelligence",
                        content: "Proposed the Turing Test in 1950 to evaluate machine intelligence."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Persecution and Tragic Death",
                        content: "Prosecuted in 1952 for his homosexuality and subjected to chemical castration. Received a posthumous royal pardon in 2013."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Architect of the Digital Age",
                        content: "The annual Turing Award bears his name. His brilliance powers the entire digital world."
                    }
                ],
                timeline: [
                    { year: "1912", event: "Born in London, England." },
                    { year: "1936", event: "Publishes paper on Turing machines." },
                    { year: "1939-45", event: "Cracks Enigma codes at Bletchley Park." },
                    { year: "1950", event: "Introduces the Turing Test." },
                    { year: "1954", event: "Passes away in Wilmslow." }
                ]
            },
            {
                id: "grace-hopper",
                name: "Grace Hopper",
                lifespan: "1906–1992",
                country: "United States",
                field: "Computer",
                era: "modern-science",
                image: "https://i.pinimg.com/736x/a2/e8/1b/a2e81bd6ea384c01b9e9a2869fb280f0.jpg",
                shortDesc: "Pioneering computer scientist and US Navy Rear Admiral who invented the first compiler and COBOL.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "New York Curiosity",
                        content: "Born in New York City on Dec 9, 1906, she dismantled seven alarm clocks as a child to understand their mechanics."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Yale PhD and Navy Service",
                        content: "Earning her PhD in math from Yale in 1934, she joined the US Naval Reserve during WWII to program the Harvard Mark I."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "The First Compiler",
                        content: "Invented machine-independent programming, creating FLOW-MATIC, which led directly to COBOL."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Democratizing Computing",
                        content: "Enabled computers to understand English-like commands instead of tedious binary code."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Skepticism",
                        content: "Overcame resistance from traditional programmers who doubted computers could process human language."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Rear Admiral and 'Debugging'",
                        content: "Retired as Rear Admiral at age 79. Popularized the term 'debugging' after finding a moth in a relay."
                    }
                ],
                timeline: [
                    { year: "1906", event: "Born in New York City." },
                    { year: "1944", event: "Programs the Harvard Mark I." },
                    { year: "1959", event: "Helps develop COBOL." },
                    { year: "1992", event: "Passes away in Arlington, Virginia." }
                ]
            },
            {
                id: "marvin-minsky",
                name: "Marvin Minsky",
                lifespan: "1927–2016",
                country: "United States",
                field: "Computer",
                era: "modern-science",
                image: "https://i.pinimg.com/736x/eb/66/62/eb6662fdf6380eb8fe9958673f515bcf.jpg",
                shortDesc: "Co-founder of the MIT AI Laboratory and pioneer in cognitive science and neural networks.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "New York and Navy",
                        content: "Born in New York City on August 9, 1927, Minsky served in the US Navy during World War II before attending Harvard and Princeton."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "MIT AI Lab",
                        content: "Earning his PhD from Princeton in 1954, Minsky joined MIT in 1958, co-founding the Artificial Intelligence Project with John McCarthy."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Neural Networks and Robotics",
                        content: "Invented the first neural network simulator (SNARC) in 1951, confocal microscopes, and robotic mechanical hands."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Founding AI",
                        content: "Established AI as a rigorous academic discipline and contributed groundbreaking theories on semantic networks."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "AI Winter Debates",
                        content: "Navigated decades of scientific debates regarding symbolic AI versus connectionism."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Turing Award Winner",
                        content: "Recipient of the Turing Award in 1969. Shaped modern neural networks, robotics, and cognitive science."
                    }
                ],
                timeline: [
                    { year: "1927", event: "Born in New York City." },
                    { year: "1951", event: "Builds first neural network simulator." },
                    { year: "1959", event: "Co-founds MIT AI Lab." },
                    { year: "2016", event: "Passes away in Boston." }
                ]
            },
            {
                id: "yoshua-bengio",
                name: "Yoshua Bengio",
                lifespan: "Born 1964",
                country: "Canada",
                field: "Computer",
                era: "modern-science",
                image: "https://i.pinimg.com/236x/b9/7e/3b/b97e3b8e04dfad7ed2377a04938f5f8d.jpg",
                shortDesc: "Pioneer of deep learning and neural networks; recipient of the Turing Award.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "France and Canada",
                        content: "Born in France in 1964, Yoshua Bengio moved to Canada, earning his PhD in computer science from McGill University in 1991."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Mila Institute",
                        content: "Becoming professor at Université de Montréal, he founded Mila, turning Montreal into a global hub for deep learning."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Neural Language Models",
                        content: "Pioneered foundational research in deep learning, recurrent neural networks, and generative models."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "The Turing Award (2018)",
                        content: "Awarded the Turing Award alongside Geoffrey Hinton and Yann LeCun for deep neural network breakthroughs."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "AI Safety",
                        content: "Active leader in global discussions regarding AI safety, ethics, and beneficial governance."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Architect of Modern AI",
                        content: "One of the most cited computer scientists in history, shaping the ethical and technical frontiers of AI."
                    }
                ],
                timeline: [
                    { year: "1964", event: "Born in France." },
                    { year: "1991", event: "Completes PhD at McGill." },
                    { year: "2003", event: "Publishes seminal neural language models." },
                    { year: "2018", event: "Awarded the A.M. Turing Award." }
                ]
            },
            {
                id: "galileo-galilei",
                name: "Galileo Galilei",
                lifespan: "1564–1642",
                country: "Italy",
                field: "Astronomy",
                era: "scientific-revolution",
                image: "https://i.pinimg.com/736x/c8/32/80/c83280ed8d82c7f3463c6c9e66162de4.jpg",
                shortDesc: "Father of modern observational astronomy, experimental physics, and the scientific method.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Pisa and Geometry",
                        content: "Born in Pisa, Italy, on Feb 15, 1564, Galileo left medicine studies to focus on mathematics."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Padua and the Telescope",
                        content: "As professor at Padua, he built a 20x astronomical telescope in 1609 upon hearing of Dutch spyglasses."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Sidereus Nuncius",
                        content: "Discovered Moon craters, Jupiter's four largest moons, and phases of Venus, shattering Aristotelian dogma."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Defending Heliocentrism",
                        content: "Provided undeniable observational proof for Copernicus's heliocentric model."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "The Inquisition",
                        content: "Condemned by the Roman Inquisition in 1633 and forced to recant under house arrest."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Pioneer of Empirical Science",
                        content: "Proved that nature is written in the language of mathematics."
                    }
                ],
                timeline: [
                    { year: "1564", event: "Born in Pisa, Italy." },
                    { year: "1609", event: "Constructs telescope." },
                    { year: "1610", event: "Publishes *Sidereus Nuncius*." },
                    { year: "1633", event: "Condemned by Inquisition." },
                    { year: "1642", event: "Passes away in Arcetri." }
                ]
            },
            {
                id: "nikola-tesla",
                name: "Nikola Tesla",
                lifespan: "1856–1943",
                country: "Austrian Empire / USA",
                field: "Engineering",
                era: "industrial-age",
                image: "https://i.pinimg.com/736x/02/10/1e/02101e961a53aaa7b510cf35789d88ef.jpg",
                shortDesc: "Visionary electrical engineer who pioneered alternating current (AC) electricity and wireless power.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Smiljan Lightning",
                        content: "Born during a lightning storm in Smiljan in 1856, Tesla possessed an extraordinary eidetic memory."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "War of Currents",
                        content: "Emigrated to the US in 1884. Partnered with George Westinghouse to champion AC power over Edison's DC."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Polyphase AC and Tesla Coil",
                        content: "Invented the AC electrical system and Tesla coil, foundational for radio and power grids."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Niagara Falls Power Plant",
                        content: "Electrified the industrial world by transmitting AC power safely over vast distances."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Financial Ruin",
                        content: "Pursued grandiose unfulfilled projects like Wardenclyffe Tower, dying in relative debt."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Patron Saint of Electronics",
                        content: "Vindicated by history, his name graces electric vehicles and modern electrical engineering."
                    }
                ],
                timeline: [
                    { year: "1856", event: "Born in Smiljan." },
                    { year: "1884", event: "Arrives in New York." },
                    { year: "1893", event: "Demonstrates AC power at Chicago Fair." },
                    { year: "1943", event: "Passes away in New York." }
                ]
            },
            {
                id: "michael-faraday",
                name: "Michael Faraday",
                lifespan: "1791–1867",
                country: "England",
                field: "Physics",
                era: "industrial-age",
                image: "https://i.pinimg.com/1200x/35/03/94/350394e5fd2a5896accb8e70e1df2f45.jpg",
                shortDesc: "Discovered electromagnetic induction, laying the foundation for electric motors and generators.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Bookbinder's Apprentice",
                        content: "Born near London in 1791, Faraday was apprenticed as a bookbinder where he read scientific texts voraciously."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Royal Institution Assistant",
                        content: "Hired by Humphry Davy as lab assistant in 1813 after presenting meticulously bound lecture notes."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Electromagnetic Induction",
                        content: "Discovered in 1831 that a changing magnetic field produces current, enabling electric generators."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Field Theory",
                        content: "Conceptualized lines of force filling space, inspiring Maxwell's equations."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Exhaustion",
                        content: "Declined knighthood preferring humble experiments, enduring memory loss in later life."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Master Experimentalist",
                        content: "Adored by Einstein; electrified the modern industrial world."
                    }
                ],
                timeline: [
                    { year: "1791", event: "Born in Surrey." },
                    { year: "1831", event: "Discovers electromagnetic induction." },
                    { year: "1867", event: "Passes away in London." }
                ]
            },
            {
                id: "james-clerk-maxwell",
                name: "James Clerk Maxwell",
                lifespan: "1831–1879",
                country: "Scotland",
                field: "Physics",
                era: "industrial-age",
                image: "https://i.pinimg.com/736x/06/de/f6/06def6e05af144168f38ec9cb0eeece5.jpg",
                shortDesc: "Formulated classical electromagnetic theory, uniting electricity, magnetism, and light.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Edinburgh Prodigy",
                        content: "Born in Edinburgh in 1831, Maxwell published a math paper at age 14 and graduated from Cambridge."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Synthesizing Faraday",
                        content: "Expressed Faraday's lines of force in rigorous differential equations and founded Cavendish Lab."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Maxwell's Equations",
                        content: "Presented four equations proving electricity, magnetism, and light are electromagnetic waves."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Unification of Light",
                        content: "Calculated wave speed matching light, establishing light as an electromagnetic disturbance."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Early Loss",
                        content: "Died tragically young at age 48 from stomach cancer in 1879."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Pillar of Modern Physics",
                        content: "Stands alongside Newton and Einstein; enabled radio and telecommunications."
                    }
                ],
                timeline: [
                    { year: "1831", event: "Born in Edinburgh." },
                    { year: "1861", event: "Publishes electromagnetic equations." },
                    { year: "1879", event: "Passes away in Cambridge." }
                ]
            },
            {
                id: "charles-darwin",
                name: "Charles Darwin",
                lifespan: "1809–1882",
                country: "England",
                field: "Biology",
                era: "industrial-age",
                image: "https://i.pinimg.com/1200x/cf/88/7f/cf887f4fa8283a4bb93d430dcc754eb9.jpg",
                shortDesc: "Proposed the theory of evolution by natural selection, revolutionizing biology.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Shrewsbury",
                        content: "Born in Shrewsbury in 1809, Darwin studied medicine and theology while collecting beetles."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Voyage of the Beagle",
                        content: "Embarking in 1831, spent five years collecting fossils and observing Galapagos wildlife."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Natural Selection",
                        content: "Realized organisms best suited to their environment survive and reproduce."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "On the Origin of Species (1859)",
                        content: "Provided overwhelming empirical evidence for common descent and adaptation."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Backlash and Illness",
                        content: "Anticipated theological backlash and suffered chronic adult health issues."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Unification of Biology",
                        content: "United all biological sciences under evolution; buried in Westminster Abbey."
                    }
                ],
                timeline: [
                    { year: "1809", event: "Born in Shrewsbury." },
                    { year: "1831", event: "Sets sail on HMS Beagle." },
                    { year: "1859", event: "Publishes Origin of Species." },
                    { year: "1882", event: "Passes away in Kent." }
                ]
            },
            {
                id: "johannes-kepler",
                name: "Johannes Kepler",
                lifespan: "1571–1630",
                country: "Germany",
                field: "Astronomy",
                era: "scientific-revolution",
                image: "https://i.pinimg.com/736x/6d/00/a5/6d00a541df5f9bab6dd04b7852e0dafb.jpg",
                shortDesc: "Discovered the three laws of planetary motion, proving planets move in ellipses.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Weil der Stadt",
                        content: "Born in Germany in 1571, Kepler overcame childhood smallpox to study at Tübingen."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Tycho Brahe Assistant",
                        content: "Became assistant to Tycho Brahe in Prague in 1600, inheriting Brahe's precise planetary data."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Three Laws of Planetary Motion",
                        content: "Proved planets travel in ellipses and sweep out equal areas in equal times."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Celestial Harmony",
                        content: "Provided kinematic bedrock enabling Newton's universal gravitation."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "War and Plague",
                        content: "Endured the Thirty Years' War, plague, and defending his mother against witchcraft charges."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Celestial Mathematician",
                        content: "Transformed astronomy into modern astrophysics."
                    }
                ],
                timeline: [
                    { year: "1571", event: "Born in Germany." },
                    { year: "1600", event: "Works with Tycho Brahe." },
                    { year: "1609", event: "Publishes planetary laws." },
                    { year: "1630", event: "Passes away in Regensburg." }
                ]
            },
            {
                id: "archimedes",
                name: "Archimedes of Syracuse",
                lifespan: "c. 287–212 BC",
                country: "Ancient Greece (Sicily)",
                field: "Mathematics",
                era: "ancient",
                image: "https://i.pinimg.com/236x/4d/ea/8a/4dea8a16911836ed20282b2fcb2ececf.jpg",
                shortDesc: "Ancient polymath who formulated hydrostatics principles and calculus precursors.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Syracuse and Alexandria",
                        content: "Born in Syracuse around 287 BC, studied in Alexandria before returning to Sicily."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "The Bath and Eureka",
                        content: "Realized water displacement could measure volume while stepping into a bath ('Eureka!')."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Buoyancy and Pi",
                        content: "Formulated buoyancy principles, calculated Pi, and invented compound pulleys."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Mathematical Physics",
                        content: "Applied rigorous math to physical mechanics and hydrostatics."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Siege of Syracuse",
                        content: "Designed war machines during Roman siege; killed by a soldier in 212 BC."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Titan of Antiquity",
                        content: "Anticipated integral calculus by nearly two millennia."
                    }
                ],
                timeline: [
                    { year: "c. 287 BC", event: "Born in Syracuse." },
                    { year: "c. 250 BC", event: "Discovers buoyancy." },
                    { year: "212 BC", event: "Killed during Roman sack." }
                ]
            },
            {
                id: "ibn-al-haytham",
                name: "Ibn al-Haytham",
                lifespan: "965–1040 AD",
                country: "Iraq / Egypt",
                field: "Physics",
                era: "ancient",
                image: "https://i.pinimg.com/736x/41/c0/03/41c0035e64e01c0865bac097566ca6e8.jpg",
                shortDesc: "Pioneer of modern optics, scientific experimentation, and the camera obscura.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Basra Scholars",
                        content: "Born in Basra in 965 AD, received comprehensive education in science and mathematics."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Cairo House Arrest",
                        content: "Placed under house arrest by the Caliph in Cairo, spending a decade studying light."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Book of Optics",
                        content: "Disproved intromission vision theories, proving light bounces off objects into the eye."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "The Scientific Method",
                        content: "Pioneered systematic empirical testing and controlled experiments."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Feigned Madness",
                        content: "Feigned madness for years to escape execution by the unpredictable Caliph."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Father of Optics",
                        content: "Profoundly influenced Roger Bacon, Kepler, and Newton."
                    }
                ],
                timeline: [
                    { year: "965 AD", event: "Born in Basra." },
                    { year: "c. 1011", event: "Writes Book of Optics under house arrest." },
                    { year: "1040 AD", event: "Passes away in Cairo." }
                ]
            },
            {
                id: "al-biruni",
                name: "Al-Biruni",
                lifespan: "973–1050 AD",
                country: "Khwarazm / Persia",
                field: "Astronomy",
                era: "ancient",
                image: "https://i.pinimg.com/736x/a3/6b/d5/a36bd5f0a7722b917e68f52acac1c99a.jpg",
                shortDesc: "Polymath who accurately calculated Earth's radius and pioneered comparative anthropology.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Khwarazm Orphan",
                        content: "Born in 973 AD, mastered math, astronomy, and mineralogy."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Ghaznavid Court",
                        content: "Traveled to India, studying Sanskrit and philosophy for years."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Measuring Earth's Radius",
                        content: "Calculated Earth's radius with remarkable precision using mountaintop trigonometry."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Kitab al-Hind",
                        content: "Authored an encyclopedic study of Indian culture and science."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Political Turmoil",
                        content: "Endured shifting royal dynasties and political captivity."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Universal Scholar",
                        content: "Revered globally across physics, astronomy, and history."
                    }
                ],
                timeline: [
                    { year: "973 AD", event: "Born in Khwarazm." },
                    { year: "1030", event: "Publishes Kitab al-Hind." },
                    { year: "1050 AD", event: "Passes away in Ghazni." }
                ]
            },
            {
                id: "ibn-sina",
                name: "Ibn Sina (Avicenna)",
                lifespan: "980–1037 AD",
                country: "Persia",
                field: "Medicine",
                era: "ancient",
                image: "https://i.pinimg.com/736x/a1/dd/c5/a1ddc5e65f6e8c94e2ea24298c7dfdf9.jpg",
                shortDesc: "Physician and philosopher whose *The Canon of Medicine* served as standard text for centuries.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Bukhara Prodigy",
                        content: "Memorized Quran by age 10 and mastered medicine and logic by age 18."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Court Physician",
                        content: "Served as vizier while writing philosophical and medical treatises late into the night."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "The Canon of Medicine",
                        content: "Synthesized medical knowledge, introducing quarantine and clinical trials."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "Systematizing Medicine",
                        content: "The Canon remained the primary medical textbook in Europe and Islam for 500 years."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Imprisonment",
                        content: "Fled political persecution and was imprisoned in a fortress for months."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Prince of Physicians",
                        content: "Towering symbol of medical enlightenment."
                    }
                ],
                timeline: [
                    { year: "980 AD", event: "Born near Bukhara." },
                    { year: "c. 1025", event: "Completes Canon of Medicine." },
                    { year: "1037 AD", event: "Passes away in Hamadan." }
                ]
            },
            {
                id: "abdus-salam",
                name: "Abdus Salam",
                lifespan: "1926–1996",
                country: "Pakistan / Italy",
                field: "Physics",
                era: "modern-science",
                image: "https://i.pinimg.com/236x/0a/06/da/0a06dad6026cf718ae638d4f704622fc.jpg",
                shortDesc: "Nobel laureate who unified electromagnetic and weak nuclear forces.",
                chapters: [
                    {
                        title: "Chapter 01 — Early Life",
                        subtitle: "Jhang Prodigy",
                        content: "Scored highest exam marks in Punjab before studying at Cambridge."
                    },
                    {
                        title: "Chapter 02 — The Journey",
                        subtitle: "Imperial College and ICTP",
                        content: "Founded the International Centre for Theoretical Physics in Trieste, Italy."
                    },
                    {
                        title: "Chapter 03 — Discoveries",
                        subtitle: "Electroweak Unification",
                        content: "Unified electromagnetism and the weak nuclear force mathematically."
                    },
                    {
                        title: "Chapter 04 — Greatest Achievement",
                        subtitle: "1979 Nobel Prize in Physics",
                        content: "Shared Nobel Prize for predicting Z and W bosons discovered at CERN."
                    },
                    {
                        title: "Chapter 05 — Challenges & Failures",
                        subtitle: "Global South Infrastructure",
                        content: "Faced institutional hurdles establishing physics infrastructure in developing regions."
                    },
                    {
                        title: "Chapter 06 — Legacy",
                        subtitle: "Champion of Science",
                        content: "Viewed physics as a spiritual quest; inspired scientists globally."
                    }
                ],
                timeline: [
                    { year: "1926", event: "Born in Jhang." },
                    { year: "1964", event: "Founds ICTP in Trieste." },
                    { year: "1979", event: "Awarded Nobel Prize." },
                    { year: "1996", event: "Passes away in Oxford." }
                ]
            }
        ];

        /* --- 2. DISCOVERIES DATASET --- */
        const discoveriesData = [
            { title: "Laws of Motion & Gravity", scientist: "Sir Isaac Newton", field: "Physics", desc: "Established equations governing inertia and universal gravitational attraction." },
            { title: "Theory of Relativity", scientist: "Albert Einstein", field: "Physics", desc: "Demonstrated space and time are relative, and $E=mc^2$." },
            { title: "Electromagnetic Induction", scientist: "Michael Faraday", field: "Physics", desc: "Proved changing magnetic fields generate electric currents." },
            { title: "Radioactivity", scientist: "Marie Curie", field: "Chemistry", desc: "Isolated polonium and radium, proving radiation is an atomic property." },
            { title: "Evolution by Natural Selection", scientist: "Charles Darwin", field: "Biology", desc: "Proved species adapt and evolve over generations." },
            { title: "Planetary Elliptical Orbits", scientist: "Johannes Kepler", field: "Astronomy", desc: "Discovered planets move in ellipses around the Sun." },
            { title: "Principles of Optics & Vision", scientist: "Ibn al-Haytham", field: "Physics", desc: "Disproved intromission vision theories and laid optical foundations." },
            { title: "Calculus Precursors & Buoyancy", scientist: "Archimedes", field: "Mathematics", desc: "Formulated hydrostatic buoyancy laws and calculated Pi." }
        ];

        /* --- 3. FACTS & QUOTES --- */
        const factsList = [
            "“Isaac Newton spent a year in isolation during the Great Plague of London, inventing calculus and gravity.”",
            "“Albert Einstein won the 1921 Nobel Prize in Physics for the photoelectric effect, not relativity.”",
            "“Marie Curie is the only person in history to win Nobel Prizes in two distinct sciences: Physics and Chemistry.”",
            "“Nikola Tesla possessed an eidetic memory and visualized complex electrical machinery in 3D.”",
            "“Ibn al-Haytham feigned madness under house arrest in Cairo to protect his life while writing his Optics book.”",
            "“Archimedes was killed by a Roman soldier while engrossed in geometric calculations in the sand.”",
            "“Michael Faraday started as an impoverished bookbinder's apprentice binding Davy's lecture notes.”",
            "“Charles Darwin waited over 20 years to publish his theory of evolution out of fear of backlash.”"
        ];

        const quotesData = [
            { quote: "“If I have seen further than others, it is by standing upon the shoulders of giants.”", author: "Sir Isaac Newton", source: "Letter to Robert Hooke, 1675" },
            { quote: "“The important thing is not to stop questioning. Curiosity has its own reason for existing.”", author: "Albert Einstein", source: "LIFE Magazine, 1955" },
            { quote: "“I have not failed. I've just found 10,000 ways that won't work.”", author: "Nikola Tesla", source: "Attributed recollection" },
            { quote: "“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more.”", author: "Marie Curie", source: "Letter, 1894" }
        ];

        const globalTimelineData = [
            { era: "ancient", period: "Ancient Era", year: "c. 287 BC", title: "Archimedes & Hydrostatics", desc: "Archimedes formulates buoyancy principles and foundational geometry." },
            { era: "ancient", period: "Ancient Era", year: "c. 1011 AD", title: "Ibn al-Haytham's Optics", desc: "Ibn al-Haytham pioneers experimental optics in Cairo." },
            { era: "renaissance", period: "Renaissance", year: "1609", title: "Galileo's Telescope", desc: "Galileo observes Jupiter's moons and champions heliocentrism." },
            { era: "scientific-revolution", period: "Scientific Revolution", year: "1687", title: "Newton's Principia", desc: "Sir Isaac Newton publishes universal gravitation and motion laws." },
            { era: "industrial-age", period: "Industrial Age", year: "1831", title: "Faraday's Induction", desc: "Michael Faraday discovers electromagnetic induction." },
            { era: "industrial-age", period: "Industrial Age", year: "1859", title: "Darwin's Origin of Species", desc: "Charles Darwin publishes natural selection." },
            { era: "modern-science", period: "Modern Science", year: "1905", title: "Einstein's Miracle Year", desc: "Albert Einstein publishes special relativity and $E=mc^2$." },
            { era: "modern-science", period: "Modern Science", year: "1936", title: "Turing Machine", desc: "Alan Turing conceptualizes the universal computing machine." }
        ];

        /* --- STATE --- */
        let bookmarks = JSON.parse(localStorage.getItem('cog_bookmarks')) || [];
        let currentScientist = null;
        let currentChapterIndex = 0;
        let currentCategory = 'All';

        window.onload = function() {
            initParticles();
            renderScientists(scientistsData);
            renderGlobalTimeline('all');
            renderDiscoveries();
            renderQuotes();
            renderQuizResults('All');
            updateBookmarksUI();
        };

        function initParticles() {
            const canvas = document.getElementById('particle-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let width = canvas.width = canvas.offsetWidth;
            let height = canvas.height = canvas.offsetHeight;
            window.addEventListener('resize', () => {
                width = canvas.width = canvas.offsetWidth;
                height = canvas.height = canvas.offsetHeight;
            });
            const particles = Array.from({ length: 40 }, () => ({
                x: Math.random() * width, y: Math.random() * height,
                radius: Math.random() * 1.5 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.5 + 0.2
            }));
            function animate() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => {
                    p.x += p.speedX; p.y += p.speedY;
                    if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
                    if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(245, 158, 11, ${p.alpha})`;
                    ctx.fill();
                });
                requestAnimationFrame(animate);
            }
            animate();
        }

        function renderScientists(data) {
            const grid = document.getElementById('scientists-grid');
            const noResults = document.getElementById('no-results');
            grid.innerHTML = '';
            if (data.length === 0) {
                noResults.classList.remove('hidden');
                return;
            }
            noResults.classList.add('hidden');
            data.forEach(s => {
                const isBookmarked = bookmarks.includes(s.id);
                const card = document.createElement('div');
                card.className = 'glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group';
                card.innerHTML = `
                    <div>
                        <div class="relative h-48 rounded-xl overflow-hidden mb-5 bg-dark-950">
                            <img src="${s.image}" alt="${s.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/600x800/12141c/fbbf24?text=Scientist'">
                            <div class="absolute top-3 right-3">
                                <button onclick="toggleBookmark('${s.id}', event)" class="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-amber-400 hover:bg-amber-500/20 transition-colors">
                                    <i class="${isBookmarked ? 'fas' : 'far'} fa-bookmark"></i>
                                </button>
                            </div>
                            <div class="absolute bottom-3 left-3 px-3 py-1 rounded-lg glass-panel text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                                ${s.field}
                            </div>
                        </div>
                        <span class="text-xs text-amber-500/90 font-medium block mb-1">${s.lifespan} • ${s.country}</span>
                        <h3 class="text-xl font-cinzel font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">${s.name}</h3>
                        <p class="text-gray-400 text-xs sm:text-sm line-clamp-3 mb-4">${s.shortDesc}</p>
                    </div>
                    <button onclick="openBiography('${s.id}')" class="w-full py-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-cinzel text-xs font-bold transition-all flex items-center justify-center space-x-2">
                        <i class="fas fa-book-open"></i>
                        <span>Read Biography</span>
                    </button>
                `;
                grid.appendChild(card);
            });
        }

        const searchInput = document.getElementById('scientist-search');
        searchInput.addEventListener('input', filterScientists);

        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-amber-500', 'text-dark-900', 'shadow-md');
                    b.classList.add('glass-panel', 'text-gray-300');
                });
                e.target.classList.remove('glass-panel', 'text-gray-300');
                e.target.classList.add('bg-amber-500', 'text-dark-900', 'shadow-md');
                currentCategory = e.target.getAttribute('data-category');
                filterScientists();
            });
        });

        function filterScientists() {
            const query = searchInput.value.toLowerCase().trim();
            const filtered = scientistsData.filter(s => {
                const matchesCategory = currentCategory === 'All' || s.field === currentCategory;
                const matchesQuery = s.name.toLowerCase().includes(query) || 
                                     s.field.toLowerCase().includes(query) || 
                                     s.country.toLowerCase().includes(query) ||
                                     s.shortDesc.toLowerCase().includes(query);
                return matchesCategory && matchesQuery;
            });
            renderScientists(filtered);
        }

        function openBiography(scientistId) {
            currentScientist = scientistsData.find(s => s.id === scientistId);
            if (!currentScientist) return;
            currentChapterIndex = 0;
            document.getElementById('reader-scientist-name').innerText = currentScientist.name;
            document.getElementById('reader-scientist-subtitle').innerText = `${currentScientist.field} • ${currentScientist.lifespan}`;
            updateReaderModal();
            document.getElementById('biography-modal').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeBiography() {
            document.getElementById('biography-modal').classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
        document.getElementById('close-modal-btn').addEventListener('click', closeBiography);

        function updateReaderModal() {
            const container = document.getElementById('book-content-container');
            const chapter = currentScientist.chapters[currentChapterIndex];
            const progress = ((currentChapterIndex + 1) / currentScientist.chapters.length) * 100;
            document.getElementById('reading-progress-bar').style.width = `${progress}%`;
            document.getElementById('chapter-indicator-text').innerText = `Chapter ${currentChapterIndex + 1} of ${currentScientist.chapters.length}`;
            
            let html = `
                <div class="space-y-6">
                    <div class="border-b border-amber-500/20 pb-4">
                        <span class="text-xs uppercase tracking-widest text-amber-500 font-bold block mb-1">${chapter.title}</span>
                        <h4 class="text-2xl sm:text-3xl font-cinzel font-bold text-white">${chapter.subtitle}</h4>
                    </div>
                    <p class="text-gray-300 text-base sm:text-lg leading-relaxed font-light">${chapter.content}</p>
            `;
            if (currentChapterIndex === currentScientist.chapters.length - 1 && currentScientist.timeline) {
                html += `
                    <div class="mt-10 pt-8 border-t border-amber-500/20">
                        <h5 class="text-lg font-cinzel font-bold text-amber-400 mb-6"><i class="fas fa-history mr-2"></i>Interactive Life Timeline</h5>
                        <div class="space-y-4 border-l-2 border-amber-500/30 pl-4">
                `;
                currentScientist.timeline.forEach(t => {
                    html += `
                        <div class="relative">
                            <div class="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-amber-500 border-2 border-dark-900"></div>
                            <span class="text-xs font-bold text-amber-400">${t.year}</span>
                            <p class="text-sm text-gray-300">${t.event}</p>
                        </div>
                    `;
                });
                html += `</div></div>`;
            }
            html += `</div>`;
            container.innerHTML = html;
            document.getElementById('prev-chapter-btn').style.visibility = currentChapterIndex === 0 ? 'hidden' : 'visible';
            const nextBtn = document.getElementById('next-chapter-btn');
            if (currentChapterIndex === currentScientist.chapters.length - 1) {
                nextBtn.innerHTML = `<span>Finish Reading</span> <i class="fas fa-check"></i>`;
            } else {
                nextBtn.innerHTML = `<span>Next Chapter</span> <i class="fas fa-chevron-right"></i>`;
            }
            const isBookmarked = bookmarks.includes(currentScientist.id);
            document.getElementById('modal-bookmark-icon').className = isBookmarked ? 'fas fa-bookmark text-amber-400' : 'far fa-bookmark';
            document.getElementById('modal-bookmark-text').innerText = isBookmarked ? 'Bookmarked' : 'Bookmark';
        }

        document.getElementById('prev-chapter-btn').addEventListener('click', () => {
            if (currentChapterIndex > 0) { currentChapterIndex--; updateReaderModal(); document.getElementById('book-content-container').scrollTop = 0; }
        });
        document.getElementById('next-chapter-btn').addEventListener('click', () => {
            if (currentChapterIndex < currentScientist.chapters.length - 1) { currentChapterIndex++; updateReaderModal(); document.getElementById('book-content-container').scrollTop = 0; }
            else { closeBiography(); }
        });
        document.getElementById('modal-bookmark-btn').addEventListener('click', () => {
            if (currentScientist) { toggleBookmark(currentScientist.id); updateReaderModal(); }
        });

        function toggleBookmark(scientistId, event) {
            if (event) event.stopPropagation();
            const index = bookmarks.indexOf(scientistId);
            if (index > -1) bookmarks.splice(index, 1);
            else bookmarks.push(scientistId);
            localStorage.setItem('cog_bookmarks', JSON.stringify(bookmarks));
            updateBookmarksUI();
            filterScientists();
        }

        function updateBookmarksUI() {
            const count = bookmarks.length;
            const badge = document.getElementById('bookmark-badge');
            const mobileCount = document.getElementById('mobile-bookmark-count');
            if (count > 0) { badge.innerText = count; badge.classList.remove('hidden'); mobileCount.innerText = count; }
            else { badge.classList.add('hidden'); mobileCount.innerText = '0'; }
        }

        function openBookmarksDrawer() {
            const list = document.getElementById('bookmarks-list');
            list.innerHTML = '';
            if (bookmarks.length === 0) {
                list.innerHTML = `<p class="text-gray-400 text-sm text-center py-8">No saved bookmarks yet.</p>`;
            } else {
                bookmarks.forEach(id => {
                    const s = scientistsData.find(item => item.id === id);
                    if (s) {
                        const item = document.createElement('div');
                        item.className = 'glass-panel p-4 rounded-xl flex items-center justify-between';
                        item.innerHTML = `
                            <div class="flex items-center space-x-3 cursor-pointer" onclick="closeBookmarksDrawer(); openBiography('${s.id}')">
                                <img src="${s.image}" class="w-10 h-10 rounded-lg object-cover">
                                <div><h4 class="font-cinzel font-bold text-sm text-white">${s.name}</h4><span class="text-[10px] text-amber-500">${s.field}</span></div>
                            </div>
                            <button onclick="toggleBookmark('${s.id}')" class="text-gray-400 hover:text-red-400 p-2"><i class="fas fa-trash-alt text-xs"></i></button>
                        `;
                        list.appendChild(item);
                    }
                });
            }
            document.getElementById('bookmarks-modal').classList.remove('hidden');
        }

        document.getElementById('open-bookmarks-btn').addEventListener('click', openBookmarksDrawer);
        document.getElementById('mobile-bookmarks-btn').addEventListener('click', () => { document.getElementById('mobile-menu').classList.add('hidden'); openBookmarksDrawer(); });
        document.getElementById('close-bookmarks-drawer').addEventListener('click', () => { document.getElementById('bookmarks-modal').classList.add('hidden'); });

        function renderGlobalTimeline(eraFilter) {
            const container = document.getElementById('global-timeline-container');
            container.innerHTML = '';
            const filtered = eraFilter === 'all' ? globalTimelineData : globalTimelineData.filter(item => item.era === eraFilter);
            filtered.forEach(item => {
                const el = document.createElement('div');
                el.className = 'relative';
                el.innerHTML = `
                    <div class="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-500 border-4 border-dark-900 shadow-md"></div>
                    <div class="glass-panel p-6 rounded-2xl hover:border-amber-500/40 transition-all">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-xs uppercase tracking-widest text-amber-400 font-bold font-cinzel">${item.year}</span>
                            <span class="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] uppercase tracking-wider font-semibold">${item.period}</span>
                        </div>
                        <h3 class="text-xl font-cinzel font-bold text-white mb-2">${item.title}</h3>
                        <p class="text-gray-300 text-sm">${item.desc}</p>
                    </div>
                `;
                container.appendChild(el);
            });
        }

        document.querySelectorAll('.era-tab').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.era-tab').forEach(b => { b.classList.remove('bg-amber-500', 'text-dark-900', 'shadow-md'); b.classList.add('glass-panel', 'text-gray-300'); });
                e.target.classList.remove('glass-panel', 'text-gray-300');
                e.target.classList.add('bg-amber-500', 'text-dark-900', 'shadow-md');
                renderGlobalTimeline(e.target.getAttribute('data-era'));
            });
        });

        function renderDiscoveries() {
            const grid = document.getElementById('discoveries-grid');
            grid.innerHTML = '';
            discoveriesData.forEach(d => {
                const card = document.createElement('div');
                card.className = 'glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between transition-all';
                card.innerHTML = `
                    <div>
                        <span class="text-[10px] uppercase tracking-widest text-amber-500 font-bold block mb-1">${d.field}</span>
                        <h3 class="text-lg font-cinzel font-bold text-white mb-2">${d.title}</h3>
                        <p class="text-gray-400 text-xs sm:text-sm mb-4">${d.desc}</p>
                    </div>
                    <div class="pt-4 border-t border-amber-500/10 flex items-center justify-between text-xs">
                        <span class="text-gray-400 font-medium">Contributor:</span>
                        <span class="text-amber-400 font-bold font-cinzel">${d.scientist}</span>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        let currentFactIndex = 0;
        document.getElementById('next-fact-btn').addEventListener('click', () => {
            currentFactIndex = (currentFactIndex + 1) % factsList.length;
            const factText = document.getElementById('fact-text');
            factText.style.opacity = 0;
            setTimeout(() => { factText.innerText = factsList[currentFactIndex]; factText.style.opacity = 1; }, 200);
        });

        function renderQuizResults(domain) {
            const resultsContainer = document.getElementById('quiz-results');
            resultsContainer.innerHTML = '';
            const matched = domain === 'All' ? scientistsData.slice(0, 3) : scientistsData.filter(s => s.field.toLowerCase() === domain.toLowerCase() || (domain === 'Space' && s.field === 'Astronomy') || (domain === 'Medicine' && (s.field === 'Medicine' || s.field === 'Biology')));
            matched.forEach(s => {
                const card = document.createElement('div');
                card.className = 'glass-panel p-4 rounded-xl flex items-center space-x-3 cursor-pointer hover:border-amber-500 transition-all';
                card.onclick = () => openBiography(s.id);
                card.innerHTML = `
                    <img src="${s.image}" class="w-12 h-12 rounded-xl object-cover">
                    <div><h4 class="font-cinzel font-bold text-sm text-white">${s.name}</h4><span class="text-[10px] text-amber-400">${s.field} • ${s.country}</span></div>
                `;
                resultsContainer.appendChild(card);
            });
        }

        document.querySelectorAll('.quiz-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.quiz-btn').forEach(b => b.classList.remove('border-amber-500', 'bg-amber-500/10'));
                const target = e.currentTarget;
                target.classList.add('border-amber-500', 'bg-amber-500/10');
                renderQuizResults(target.getAttribute('data-domain'));
            });
        });

        function renderQuotes() {
            const grid = document.getElementById('quotes-grid');
            grid.innerHTML = '';
            quotesData.forEach(q => {
                const card = document.createElement('div');
                card.className = 'glass-panel p-8 rounded-3xl relative flex flex-col justify-between';
                card.innerHTML = `
                    <div class="text-amber-500/20 text-5xl font-serif absolute top-4 left-6 pointer-events-none">“</div>
                    <p class="text-gray-200 text-base sm:text-lg italic mb-6 relative z-10 leading-relaxed">${q.quote}</p>
                    <div class="pt-4 border-t border-amber-500/10 flex items-center justify-between text-xs">
                        <span class="font-cinzel font-bold text-amber-400">${q.author}</span>
                        <span class="text-gray-500">${q.source}</span>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        const stars = document.querySelectorAll('.rating-star');
        const ratingInput = document.getElementById('feedback-rating');
        const ratingLabel = document.getElementById('rating-label');
        const ratingTexts = ["Poor", "Fair", "Good", "Very Good", "Exceptional Museum"];

        stars.forEach((star, idx) => {
            star.addEventListener('mouseover', () => highlightStars(idx + 1));
            star.addEventListener('click', () => { ratingInput.value = idx + 1; highlightStars(idx + 1); ratingLabel.innerText = ratingTexts[idx]; });
        });
        document.getElementById('star-rating').addEventListener('mouseleave', () => highlightStars(parseInt(ratingInput.value)));
        function highlightStars(count) {
            stars.forEach((s, i) => {
                if (i < count) { s.classList.remove('text-gray-600'); s.classList.add('text-amber-400'); }
                else { s.classList.remove('text-amber-400'); s.classList.add('text-gray-600'); }
            });
        }
        highlightStars(5);

        document.getElementById('feedback-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const feedbackEntry = {
                name: document.getElementById('feedback-name').value,
                email: document.getElementById('feedback-email').value,
                rating: ratingInput.value,
                message: document.getElementById('feedback-message').value,
                date: new Date().toISOString()
            };
            const existing = JSON.parse(localStorage.getItem('cog_feedbacks')) || [];
            existing.push(feedbackEntry);
            localStorage.setItem('cog_feedbacks', JSON.stringify(existing));
            document.getElementById('feedback-form').classList.add('hidden');
            document.getElementById('feedback-success').classList.remove('hidden');
        });

        document.getElementById('reset-feedback-btn').addEventListener('click', () => {
            document.getElementById('feedback-form').reset();
            highlightStars(5);
            ratingInput.value = 5;
            ratingLabel.innerText = "Select rating";
            document.getElementById('feedback-success').classList.add('hidden');
            document.getElementById('feedback-form').classList.remove('hidden');
        });

        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', () => mobileMenu.classList.add('hidden')));

        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { closeBiography(); document.getElementById('bookmarks-modal').classList.add('hidden'); }
        });
        // --- Custom Cursor JavaScript Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');
  const follower = document.querySelector('.custom-cursor-follower');
  
  if (!cursor || !follower) return;

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  // Track mouse coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Instant move for inner dot
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  // Smooth animation loop (lerp) for outer follower ring
  function renderCursor() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    
    follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Add hover effects when hovering over clickable elements
  const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .card, .btn, [role="button"]');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // Click animation effect
  window.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-click');
  });
  
  window.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
  });

  // Hide cursor when mouse leaves window
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '1';
  });
});