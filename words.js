const LEVELS = [
{
"name": "One Bee",
"words": [
[
"ran",
"RAN",
"moved fast on foot (past of run)"
],
[
"rod",
"ROD",
"a thin straight stick or bar"
],
[
"shy",
"SHY",
"quiet and nervous around others"
],
[
"drink",
"DRINK",
"to swallow a liquid"
],
[
"mist",
"MIST",
"a thin cloud of tiny water drops"
],
[
"still",
"STILL",
"not moving; also \"even now\""
],
[
"pump",
"PUMP",
"a machine that pushes air or liquid"
],
[
"sharp",
"SHARP",
"having a fine edge or point that cuts"
],
[
"rich",
"RICH",
"having lots of money"
],
[
"shoot",
"SHOOT",
"to fire or send off quickly; a new plant stem"
],
[
"claws",
"KLAWZ",
"sharp curved nails on an animal's feet"
],
[
"winter",
"WIN-ter",
"the coldest season of the year"
],
[
"yellow",
"YEL-oh",
"the color of a lemon"
],
[
"mouth",
"MOWTH",
"the opening in the face for eating and talking"
],
[
"paper",
"PAY-per",
"thin sheets used for writing"
],
[
"inside",
"in-SIDE",
"in or into the inner part"
],
[
"whale",
"WAYL",
"a very large sea mammal"
],
[
"lizard",
"LIZ-erd",
"a small scaly reptile with four legs"
],
[
"nurse",
"NURSS",
"a person who cares for sick people"
],
[
"wind",
"WIND",
"moving air"
],
[
"good",
"GOOD",
"nice, right, or of high quality"
],
[
"bunny",
"BUN-ee",
"a young or pet rabbit"
],
[
"silly",
"SIL-ee",
"funny or foolish"
],
[
"stars",
"STARZ",
"bright points of light in the night sky"
],
[
"hello",
"heh-LOH",
"a greeting"
],
[
"shell",
"SHEL",
"a hard outer covering"
],
[
"easy",
"EE-zee",
"not hard to do"
],
[
"shift",
"SHIFT",
"to move or change position"
],
[
"seal",
"SEEL",
"a sea animal with flippers; to close tightly"
],
[
"crack",
"KRAK",
"a thin break in something"
],
[
"apple",
"AP-ul",
"a round fruit with red or green skin"
],
[
"shine",
"SHYNE",
"to give off bright light"
],
[
"spray",
"SPRAY",
"tiny drops of liquid sent through the air"
],
[
"rabbit",
"RAB-it",
"a small furry animal with long ears"
],
[
"frozen",
"FROH-zun",
"turned to ice; very cold"
],
[
"market",
"MAR-kit",
"a place where things are bought and sold"
],
[
"beware",
"bih-WAIR",
"be careful of"
],
[
"wrong",
"RAWNG",
"not correct"
],
[
"leg",
"LEG",
"a body part used for standing and walking"
],
[
"most",
"MOHST",
"the greatest amount"
],
[
"down",
"DOWN",
"toward a lower place"
],
[
"sick",
"SIK",
"ill; not well"
],
[
"truck",
"TRUK",
"a large vehicle for carrying loads"
],
[
"bush",
"BUSH",
"a low plant with many branches"
],
[
"yarn",
"YARN",
"thread used for knitting"
],
[
"body",
"BOD-ee",
"the whole physical form of a person or animal"
],
[
"heart",
"HART",
"the organ that pumps blood"
],
[
"even",
"EE-vun",
"flat or level; equal"
],
[
"come",
"KUM",
"to move toward"
],
[
"sound",
"SOWND",
"something you hear"
],
[
"chips",
"CHIPS",
"thin crunchy slices of food; small broken pieces"
],
[
"year",
"YEER",
"12 months"
],
[
"feed",
"FEED",
"to give food to"
],
[
"speak",
"SPEEK",
"to talk"
],
[
"flock",
"FLOK",
"a group of birds or sheep"
],
[
"sparkle",
"SPAR-kul",
"to shine with little flashes of light"
],
[
"hopped",
"HOPT",
"jumped with small jumps"
],
[
"dirt",
"DURT",
"soil or mud"
],
[
"hurt",
"HURT",
"to cause pain"
],
[
"steps",
"STEPS",
"movements of the feet; stairs"
],
[
"path",
"PATH",
"a narrow trail"
],
[
"fire",
"FYRE",
"heat and flames from burning"
],
[
"late",
"LAYT",
"after the expected time"
],
[
"wings",
"WINGZ",
"body parts birds use to fly"
],
[
"house",
"HOWSS",
"a building where people live"
],
[
"tusk",
"TUSK",
"a long pointed tooth, like an elephant's"
],
[
"dive",
"DYVE",
"to jump headfirst into water"
],
[
"fine",
"FYNE",
"okay; very thin; money paid as a penalty"
],
[
"mossy",
"MAW-see",
"covered with moss"
],
[
"beans",
"BEENZ",
"seeds eaten as food"
],
[
"truth",
"TROOTH",
"what is real or correct"
],
[
"tallest",
"TAWL-ist",
"the most tall"
],
[
"cliffs",
"KLIFS",
"steep rock walls"
],
[
"crunch",
"KRUNCH",
"to chew noisily; a crushing sound"
],
[
"sweater",
"SWET-er",
"a warm knitted top"
],
[
"money",
"MUN-ee",
"coins and bills used to buy things"
],
[
"cabin",
"KAB-in",
"a small simple house, often made of wood"
],
[
"carve",
"KARV",
"to cut a shape out of wood, stone, or food"
],
[
"earth",
"URTH",
"our planet; soil"
],
[
"half",
"HAF",
"one of two equal parts"
],
[
"fear",
"FEER",
"the feeling of being scared"
],
[
"riddle",
"RID-ul",
"a puzzling question with a clever answer"
],
[
"illness",
"IL-nis",
"sickness"
],
[
"knit",
"NIT",
"to make cloth from yarn with needles (silent k)"
],
[
"total",
"TOH-tul",
"the whole amount"
],
[
"finish",
"FIN-ish",
"to end or complete"
],
[
"spiders",
"SPY-derz",
"eight-legged creatures that spin webs"
],
[
"hospital",
"HOS-pih-tul",
"a place where sick people are treated"
],
[
"narrow",
"NAIR-oh",
"not wide"
],
[
"foolish",
"FOO-lish",
"silly; not wise"
],
[
"charming",
"CHAR-ming",
"very pleasant and likable"
],
[
"beasts",
"BEESTS",
"large or wild animals"
],
[
"smoothly",
"SMOOTH-lee",
"without bumps or problems"
],
[
"dangle",
"DANG-gul",
"to hang loosely"
],
[
"frazzled",
"FRAZ-uld",
"worn out and stressed"
],
[
"darkness",
"DARK-nis",
"lack of light"
],
[
"shadows",
"SHAD-ohz",
"dark shapes made when light is blocked"
],
[
"friend",
"FREND",
"a person you like and trust"
],
[
"swift",
"SWIFT",
"fast"
],
[
"thirsty",
"THUR-stee",
"needing a drink"
],
[
"voice",
"VOYSS",
"the sound you make when talking or singing"
],
[
"lead",
"LEED or LED",
"to show the way (LEED); a soft gray metal (LED)"
],
[
"cloak",
"KLOHK",
"a loose cape"
],
[
"indoors",
"in-DORZ",
"inside a building"
],
[
"holiday",
"HOL-ih-day",
"a special day of celebration or rest"
],
[
"entire",
"in-TYRE",
"whole; complete"
],
[
"mustard",
"MUS-terd",
"a yellow, tangy sauce"
],
[
"medium",
"MEE-dee-um",
"in the middle; not big or small"
],
[
"afraid",
"uh-FRAYD",
"scared"
],
[
"source",
"SORSS",
"where something comes from"
],
[
"shivering",
"SHIV-er-ing",
"shaking from cold or fear"
],
[
"cottage",
"KOT-ij",
"a small cozy house"
],
[
"distance",
"DIS-tunss",
"how far apart two things are"
],
[
"bamboo",
"bam-BOO",
"a tall plant with hollow woody stems"
],
[
"always",
"AWL-wayz",
"every time; forever"
],
[
"morning",
"MOR-ning",
"the early part of the day"
],
[
"lovely",
"LUV-lee",
"beautiful; delightful"
],
[
"grandfather",
"GRAND-fah-ther",
"your parent's father"
],
[
"peer",
"PEER",
"to look closely; a person your own age"
],
[
"peach",
"PEECH",
"a soft, fuzzy, sweet fruit"
],
[
"groan",
"GROHN",
"a low sound of pain or annoyance"
],
[
"parade",
"puh-RAYD",
"a public march or procession"
],
[
"trouble",
"TRUB-ul",
"a problem or difficulty"
],
[
"safety",
"SAYF-tee",
"being safe from harm"
],
[
"library",
"LY-brair-ee",
"a place where books are kept to borrow"
],
[
"company",
"KUM-puh-nee",
"a business; being with others"
],
[
"pennies",
"PEN-eez",
"one-cent coins"
],
[
"remember",
"rih-MEM-ber",
"to keep in mind; not forget"
],
[
"pearls",
"PURLZ",
"shiny round gems made inside oysters"
],
[
"barge",
"BARJ",
"a flat-bottomed boat for cargo"
],
[
"humble",
"HUM-bul",
"modest; not proud"
],
[
"breeze",
"BREEZ",
"a light, gentle wind"
],
[
"sprout",
"SPROWT",
"to begin to grow; a young shoot"
],
[
"alive",
"uh-LYVE",
"living"
],
[
"return",
"rih-TURN",
"to come or go back"
],
[
"footprints",
"FOOT-prints",
"marks left by feet"
],
[
"gentle",
"JEN-tul",
"kind and soft; not rough"
],
[
"pancakes",
"PAN-kayks",
"flat, round cakes cooked in a pan"
],
[
"sloth",
"SLAWTH",
"a slow animal that hangs in trees; laziness"
],
[
"whistle",
"WIS-ul",
"a high sound made by blowing (silent t)"
],
[
"relax",
"rih-LAKS",
"to rest and become calm"
],
[
"stout",
"STOWT",
"thick and strong; a bit heavy"
],
[
"guide",
"GYDE",
"to show the way; a person who leads"
],
[
"ginger",
"JIN-jer",
"a spicy root used in cooking"
],
[
"hiking",
"HY-king",
"walking a long way, often outdoors"
],
[
"result",
"rih-ZULT",
"what happens because of something"
],
[
"tangy",
"TANG-ee",
"sharp and zesty in taste"
],
[
"grumpily",
"GRUM-pih-lee",
"in a cranky, bad-tempered way"
],
[
"seventy",
"SEV-un-tee",
"the number 70"
],
[
"soared",
"SORD",
"flew high in the air"
]
]
},
{
"name": "Two Bee",
"words": [
[
"buttons",
"BUT-unz",
"small round fasteners on clothes"
],
[
"clever",
"KLEV-er",
"smart and quick to understand"
],
[
"invite",
"in-VYTE",
"to ask someone to come"
],
[
"carefully",
"KAIR-fuh-lee",
"with care and attention"
],
[
"permit",
"per-MIT / PUR-mit",
"to allow (per-MIT); a written permission (PUR-mit)"
],
[
"lunar",
"LOO-ner",
"having to do with the moon"
],
[
"woven",
"WOH-vun",
"made by weaving threads together"
],
[
"granola",
"gruh-NOH-luh",
"baked oats, nuts, and honey"
],
[
"laughter",
"LAF-ter",
"the sound of laughing"
],
[
"lounge",
"LOWNJ",
"to relax lazily; a waiting room"
],
[
"duration",
"doo-RAY-shun",
"how long something lasts"
],
[
"examine",
"ig-ZAM-in",
"to look at closely"
],
[
"tissues",
"TISH-ooz",
"soft paper for wiping your nose; groups of body cells"
],
[
"compromise",
"KOM-pruh-myze",
"an agreement where each side gives up something"
],
[
"bifocals",
"BY-foh-kulz",
"glasses with two lens strengths"
],
[
"geologist",
"jee-OL-uh-jist",
"a scientist who studies rocks and the earth"
],
[
"atmosphere",
"AT-muh-sfeer",
"the air around the earth; a mood"
],
[
"helium",
"HEE-lee-um",
"a light gas used in balloons"
],
[
"annoyance",
"uh-NOY-unss",
"a feeling of being bothered"
],
[
"cuddle",
"KUD-ul",
"to hug closely"
],
[
"basement",
"BAYSS-ment",
"the floor of a building below ground"
],
[
"butterflies",
"BUT-er-flyze",
"insects with large colorful wings"
],
[
"sniffling",
"SNIF-ling",
"breathing in noisily through a runny nose"
],
[
"awning",
"AW-ning",
"a cloth roof over a window or door"
],
[
"boycotting",
"BOY-kot-ing",
"refusing to buy or use something as a protest"
],
[
"proclaim",
"proh-KLAYM",
"to announce publicly"
],
[
"warrior",
"WOR-ee-er",
"a fighter or soldier"
],
[
"salary",
"SAL-uh-ree",
"money paid regularly for a job"
],
[
"jovial",
"JOH-vee-ul",
"cheerful and friendly"
],
[
"dictionary",
"DIK-shuh-nair-ee",
"a book of words and their meanings"
],
[
"versus",
"VUR-sus",
"against (abbreviated vs.)"
],
[
"marlin",
"MAR-lin",
"a big ocean fish with a long pointed snout"
],
[
"incident",
"IN-sih-dent",
"an event, often an unpleasant one"
],
[
"cutlery",
"KUT-ler-ee",
"knives, forks, and spoons"
],
[
"bellowed",
"BEL-ohd",
"shouted in a deep, loud voice"
],
[
"disappointment",
"dis-uh-POYNT-ment",
"sadness when hopes are not met"
],
[
"suggested",
"sug-JES-tid",
"offered an idea"
],
[
"interruption",
"in-tuh-RUP-shun",
"a break that stops something going on"
],
[
"puffy",
"PUF-ee",
"swollen or fluffed up"
],
[
"burlap",
"BUR-lap",
"rough cloth used for sacks"
],
[
"kelp",
"KELP",
"a large brown seaweed"
],
[
"beneath",
"bih-NEETH",
"under; below"
],
[
"fickle",
"FIK-ul",
"changing your mind often"
],
[
"molten",
"MOHL-tun",
"melted by great heat"
],
[
"thimble",
"THIM-bul",
"a small cap that protects a finger when sewing"
],
[
"rigid",
"RIJ-id",
"stiff; not bending"
],
[
"disappear",
"dis-uh-PEER",
"to go out of sight"
],
[
"inferior",
"in-FEER-ee-er",
"lower in quality or rank"
],
[
"business",
"BIZ-nis",
"a company; buying and selling"
],
[
"lullaby",
"LUL-uh-by",
"a soft song to put a baby to sleep"
],
[
"Halloween",
"hal-uh-WEEN",
"October 31 holiday with costumes"
],
[
"Japanese",
"jap-uh-NEEZ",
"from Japan; the language of Japan"
],
[
"chisel",
"CHIZ-ul",
"a tool with a sharp edge for cutting wood or stone"
],
[
"organism",
"OR-guh-niz-um",
"a living thing"
],
[
"truant",
"TROO-unt",
"a student who skips school"
],
[
"chimpanzees",
"chim-pan-ZEEZ",
"intelligent African apes"
],
[
"concentrate",
"KON-sun-trayt",
"to focus your attention"
],
[
"tiptoed",
"TIP-tohd",
"walked quietly on the toes"
],
[
"wetlands",
"WET-landz",
"land covered with shallow water, like marshes"
],
[
"property",
"PROP-er-tee",
"things or land that someone owns"
],
[
"tractor",
"TRAK-ter",
"a powerful farm vehicle"
],
[
"relief",
"rih-LEEF",
"an easing of worry or pain"
],
[
"elite",
"ih-LEET",
"the best or top group"
],
[
"custody",
"KUS-tuh-dee",
"care and control of someone or something"
],
[
"fierce",
"FEERSS",
"wild, strong, and scary"
],
[
"hurdler",
"HURD-ler",
"a runner who jumps over hurdles"
],
[
"December",
"dih-SEM-ber",
"the 12th month"
],
[
"reinstate",
"ree-in-STAYT",
"to put back in a former position"
],
[
"opposite",
"OP-uh-zit",
"completely different; facing"
],
[
"compliment",
"KOM-pluh-ment",
"a kind remark praising someone"
],
[
"investment",
"in-VEST-ment",
"money put into something to earn more"
],
[
"fundraiser",
"FUND-ray-zer",
"an event to collect money for a cause"
],
[
"quail",
"KWAYL",
"a small plump bird; to shrink back in fear"
],
[
"pamphlet",
"PAM-flit",
"a thin booklet of information"
],
[
"desperate",
"DES-per-it",
"having lost hope; in great need"
],
[
"piñata",
"peen-YAH-tuh",
"a decorated container filled with treats, broken at parties"
],
[
"territory",
"TAIR-uh-tor-ee",
"an area of land that belongs to someone"
],
[
"monorail",
"MON-uh-rayl",
"a train that runs on one rail"
],
[
"alphabetical",
"al-fuh-BET-ih-kul",
"in ABC order"
],
[
"prejudice",
"PREJ-uh-dis",
"an unfair opinion formed without good reason"
],
[
"cartridge",
"KAR-trij",
"a small case holding ink, film, or a bullet"
],
[
"fertilizer (or fertiliser)",
"FUR-tuh-ly-zer",
"something added to soil to help plants grow"
],
[
"sorceress",
"SOR-ser-is",
"a woman who practices magic"
],
[
"singularity",
"sing-gyuh-LAIR-ih-tee",
"being one of a kind; a point of infinite density in space"
],
[
"battalion",
"buh-TAL-yun",
"a large group of soldiers"
],
[
"perimeter",
"puh-RIM-ih-ter",
"the distance around the edge of a shape"
],
[
"meticulous",
"muh-TIK-yuh-lus",
"extremely careful about details"
],
[
"megahertz",
"MEG-uh-hurts",
"one million cycles per second"
],
[
"insurrection",
"in-suh-REK-shun",
"a violent uprising against a government"
],
[
"fascism",
"FASH-iz-um",
"a dictatorship that crushes opposition"
],
[
"reservoir",
"REZ-er-vwar",
"a lake that stores water"
],
[
"carrion",
"KAIR-ee-un",
"the rotting flesh of dead animals"
],
[
"elliptical",
"ih-LIP-tih-kul",
"oval-shaped"
],
[
"cemetery",
"SEM-uh-tair-ee",
"a place where the dead are buried"
],
[
"stragglers",
"STRAG-lerz",
"people who fall behind a group"
],
[
"exploratory",
"ik-SPLOR-uh-tor-ee",
"done to explore or find out"
],
[
"integrity",
"in-TEG-rih-tee",
"honesty and strong morals"
],
[
"solidarity",
"sol-ih-DAIR-ih-tee",
"unity and support among a group"
],
[
"segregation",
"seg-rih-GAY-shun",
"separating people by group, especially by race"
],
[
"apprentice",
"uh-PREN-tis",
"a person learning a trade from an expert"
],
[
"glamorous",
"GLAM-er-us",
"exciting and attractive"
],
[
"fictitious",
"fik-TISH-us",
"made up; not real"
],
[
"collateral",
"kuh-LAT-er-ul",
"something promised as security for a loan"
],
[
"precedent",
"PRES-ih-dent",
"an earlier example that guides later decisions"
],
[
"haddock",
"HAD-uk",
"an ocean fish used for food"
],
[
"cosmodrome",
"KOZ-muh-drohm",
"a site for launching spacecraft"
],
[
"regolith",
"REG-uh-lith",
"loose rock and dust covering solid rock (as on the moon)"
],
[
"pheasants",
"FEZ-unts",
"long-tailed game birds"
],
[
"duende",
"doo-EN-day",
"a magical, deeply moving quality in art or music"
],
[
"matrilineal",
"mat-ruh-LIN-ee-ul",
"traced through the mother's side of the family"
],
[
"glaucoma",
"glaw-KOH-muh",
"an eye disease that can cause blindness"
],
[
"staccato",
"stuh-KAH-toh",
"with short, separate, sharp notes"
],
[
"dachshund",
"DAHKS-hoont",
"a long, short-legged dog breed"
],
[
"albino",
"al-BY-noh",
"a person or animal lacking normal color in skin, hair, and eyes"
],
[
"indigo",
"IN-dih-goh",
"a deep blue-purple color"
],
[
"Oregon",
"OR-ih-gun",
"a U.S. state in the Pacific Northwest"
],
[
"calico",
"KAL-ih-koh",
"a printed cotton cloth; a cat with three colors"
],
[
"tortillas",
"tor-TEE-yuz",
"thin flat breads of corn or flour"
],
[
"synthetic",
"sin-THET-ik",
"made by people, not natural"
],
[
"salamanders",
"SAL-uh-man-derz",
"small lizard-like amphibians"
],
[
"convertible",
"kun-VUR-tuh-bul",
"a car with a roof that folds back; able to change"
],
[
"initiation",
"ih-nish-ee-AY-shun",
"a ceremony to welcome a new member; a beginning"
],
[
"materialize (or materialise)",
"muh-TEER-ee-uh-lyze",
"to appear or become real"
],
[
"hypothermia",
"hy-poh-THUR-mee-uh",
"dangerously low body temperature"
],
[
"arthritis",
"ar-THRY-tis",
"painful swelling of the joints"
],
[
"pentathletes",
"pen-TATH-leets",
"athletes who compete in five events"
],
[
"predecessor",
"PRED-ih-ses-er",
"a person who held a position before"
],
[
"conscious",
"KON-shus",
"awake and aware"
],
[
"piteously",
"PIT-ee-us-lee",
"in a way that causes pity"
],
[
"iridium",
"ih-RID-ee-um",
"a hard, silvery metal element"
],
[
"rendezvous",
"RAHN-day-voo",
"a planned meeting"
],
[
"ridiculous",
"rih-DIK-yuh-lus",
"silly enough to laugh at"
],
[
"bratwurst",
"BRAT-wurst",
"a German pork sausage"
],
[
"rebuttal",
"rih-BUT-ul",
"an argument against someone's claim"
],
[
"sputnik",
"SPUT-nik",
"an early Soviet satellite"
],
[
"civilian",
"suh-VIL-yun",
"a person not in the military"
],
[
"Caesar",
"SEE-zer",
"title of Roman emperors"
],
[
"suspension",
"suh-SPEN-shun",
"a temporary stop; a car's shock system"
],
[
"snarkiness",
"SNAR-kee-nis",
"sarcastic, snide rudeness"
],
[
"mascara",
"ma-SKAIR-uh",
"makeup for eyelashes"
],
[
"magnesium",
"mag-NEE-zee-um",
"a light silver-white metal element"
],
[
"optometrist",
"op-TOM-ih-trist",
"a professional who examines eyes"
],
[
"schnauzer",
"SHNOW-zer",
"a German dog breed with a beard"
],
[
"persnickety",
"per-SNIK-ih-tee",
"very fussy about small details"
],
[
"Senegal",
"sen-ih-GAWL",
"a country in West Africa"
],
[
"Polaroid",
"POH-luh-royd",
"a camera that prints photos instantly"
],
[
"arnica",
"AR-nih-kuh",
"a plant used in creams for bruises"
],
[
"adrenaline",
"uh-DREN-uh-lin",
"a hormone that gives a burst of energy"
],
[
"romerillo",
"roh-meh-REE-yoh",
"a weedy plant of the daisy family (Spanish name)"
],
[
"Aeolus",
"EE-uh-lus",
"the Greek god of the winds"
]
]
},
{
"name": "Three Bee",
"words": [
[
"newt",
"NOOT",
"a small salamander that lives partly in water"
],
[
"generosity",
"jen-uh-ROS-ih-tee",
"willingness to give and share"
],
[
"wallowing",
"WOL-oh-ing",
"rolling around in mud or water; indulging in a feeling"
],
[
"mewling",
"MYOO-ling",
"crying weakly, like a kitten"
],
[
"panoramic",
"pan-uh-RAM-ik",
"showing a wide, full view"
],
[
"gauntlets",
"GAWNT-lits",
"heavy protective gloves"
],
[
"appetizing",
"AP-ih-ty-zing",
"looking or smelling tasty"
],
[
"prospective",
"pruh-SPEK-tiv",
"likely to happen or become"
],
[
"preconception",
"pree-kun-SEP-shun",
"an idea formed before having the facts"
],
[
"hemisphere",
"HEM-ih-sfeer",
"half of a sphere or of the earth"
],
[
"reluctance",
"rih-LUK-tunss",
"unwillingness"
],
[
"propeller",
"pruh-PEL-er",
"spinning blades that move a boat or plane"
],
[
"settee",
"seh-TEE",
"a small sofa"
],
[
"finesse",
"fih-NESS",
"skill and grace in handling something"
],
[
"curriculum",
"kuh-RIK-yuh-lum",
"the subjects taught in a school or course"
],
[
"enigmatic",
"en-ig-MAT-ik",
"mysterious and hard to understand"
],
[
"hypothesis",
"hy-POTH-uh-sis",
"an educated guess to be tested"
],
[
"thrummed",
"THRUMD",
"made a steady humming or strumming sound"
],
[
"burnished",
"BUR-nisht",
"polished until shiny"
],
[
"imperial",
"im-PEER-ee-ul",
"relating to an empire or emperor"
],
[
"generator",
"JEN-uh-ray-ter",
"a machine that makes electricity"
],
[
"Doberman",
"DOH-ber-mun",
"a large, sleek German dog breed"
],
[
"inanimate",
"in-AN-ih-mit",
"not alive"
],
[
"sentinels",
"SEN-tih-nulz",
"guards who keep watch"
],
[
"subscription",
"sub-SKRIP-shun",
"a regular payment to receive something"
],
[
"procession",
"pruh-SESH-un",
"a line of people moving forward in order"
],
[
"seminal",
"SEM-ih-nul",
"highly important and influential"
],
[
"consulate",
"KON-suh-lit",
"an office of a foreign government's representative"
],
[
"modish",
"MOH-dish",
"fashionable"
],
[
"unconscious",
"un-KON-shus",
"not awake or aware"
],
[
"foliage",
"FOH-lee-ij",
"the leaves of plants"
],
[
"quizzically",
"KWIZ-ih-kuh-lee",
"in a puzzled, questioning way"
],
[
"increments",
"IN-kruh-ments",
"small amounts added step by step"
],
[
"reassurance",
"ree-uh-SHUR-unss",
"words or actions that remove worry"
],
[
"censers",
"SEN-serz",
"containers for burning incense"
],
[
"embankment",
"im-BANK-ment",
"a raised bank of earth or stone"
],
[
"mortar",
"MOR-ter",
"cement paste that holds bricks; a bowl for grinding"
],
[
"persistent",
"per-SIS-tent",
"continuing firmly; not giving up"
],
[
"dominion",
"duh-MIN-yun",
"power to rule; a territory ruled"
],
[
"lemmings",
"LEM-ingz",
"small arctic rodents"
],
[
"frequency",
"FREE-kwen-see",
"how often something happens"
],
[
"blithely",
"BLYTHE-lee",
"in a cheerful, carefree way"
],
[
"tenuous",
"TEN-yoo-us",
"weak or thin; slight"
],
[
"saxophone",
"SAK-suh-fohn",
"a curved brass woodwind instrument"
],
[
"canter",
"KAN-ter",
"a horse's easy, gentle gallop"
],
[
"cuisine",
"kwih-ZEEN",
"a style of cooking"
],
[
"influenza",
"in-floo-EN-zuh",
"the flu"
],
[
"odorant (or odourant)",
"OH-der-unt",
"a substance that gives off a smell"
],
[
"crocheted",
"kroh-SHAYD",
"made with yarn and a hooked needle"
],
[
"apologetic",
"uh-pol-uh-JET-ik",
"showing you are sorry"
],
[
"lapels",
"luh-PELZ",
"folded front edges of a jacket collar"
],
[
"unrelenting",
"un-rih-LEN-ting",
"never easing or stopping"
],
[
"arsonists",
"AR-suh-nists",
"people who set fires on purpose"
],
[
"authority",
"uh-THOR-ih-tee",
"the power to give orders; an expert"
],
[
"decisively",
"dih-SY-siv-lee",
"firmly and without doubt"
],
[
"auditory",
"AW-dih-tor-ee",
"related to hearing"
],
[
"self-sufficient",
"self-suh-FISH-unt",
"able to take care of yourself"
],
[
"conspicuous",
"kun-SPIK-yoo-us",
"easy to notice"
],
[
"perpendicular",
"pur-pen-DIK-yuh-ler",
"at a right angle (90°)"
],
[
"torrential",
"tuh-REN-shul",
"pouring heavily, like a flood"
],
[
"sauntered",
"SAWN-terd",
"walked in a slow, relaxed way"
],
[
"juniper",
"JOO-nih-per",
"an evergreen shrub with berries"
],
[
"palazzo",
"puh-LAHT-soh",
"a grand Italian palace or building"
],
[
"irrelevant",
"ih-REL-uh-vunt",
"not connected to the matter"
],
[
"diplomatically",
"dip-luh-MAT-ik-lee",
"tactfully, without upsetting people"
],
[
"calibrate",
"KAL-ih-brayt",
"to adjust a tool so it measures correctly"
],
[
"credenza",
"krih-DEN-zuh",
"a low cabinet or sideboard"
],
[
"comprehensible",
"kom-prih-HEN-suh-bul",
"able to be understood"
],
[
"trenchant",
"TREN-chunt",
"sharp and forceful (of words or ideas)"
],
[
"despondent",
"dih-SPON-dunt",
"very sad and without hope"
],
[
"echolocation",
"ek-oh-loh-KAY-shun",
"finding things by bouncing sounds off them, as bats do"
],
[
"conflagration",
"kon-fluh-GRAY-shun",
"a huge, destructive fire"
],
[
"thermotaxis",
"thur-moh-TAK-sis",
"movement of a living thing toward or away from heat"
],
[
"inaugurate",
"ih-NAW-gyuh-rayt",
"to formally begin or swear into office"
],
[
"bioluminescence",
"by-oh-loo-mih-NES-unss",
"light made by living things, like fireflies"
],
[
"chickadee",
"CHIK-uh-dee",
"a small gray songbird with a black cap"
],
[
"asymmetric",
"ay-sih-MET-rik",
"not the same on both sides"
],
[
"sharpei",
"shar-PAY",
"a wrinkly-skinned Chinese dog breed"
],
[
"endothermy",
"EN-doh-thur-mee",
"making your own body heat (warm-blooded)"
],
[
"éclair",
"ay-KLAIR",
"a long pastry filled with cream"
],
[
"irascibility",
"ih-ras-uh-BIL-ih-tee",
"the quality of getting angry easily"
],
[
"a cappella",
"ah-kuh-PEL-uh",
"singing without instruments"
],
[
"Amharic",
"am-HAIR-ik",
"the main language of Ethiopia"
],
[
"Gloucester",
"GLOS-ter",
"a city in England (also in Massachusetts)"
],
[
"prosciutto",
"proh-SHOO-toh",
"thin-sliced Italian dry-cured ham"
],
[
"chitinous",
"KY-tih-nus",
"made of chitin, the hard material of insect shells"
],
[
"Krio",
"KREE-oh",
"an English-based language of Sierra Leone"
],
[
"Addis Ababa",
"AH-dis AH-buh-buh",
"the capital of Ethiopia"
],
[
"protectorate",
"pruh-TEK-ter-it",
"a country controlled and protected by a stronger one"
],
[
"pulmonary",
"PUL-muh-nair-ee",
"related to the lungs"
],
[
"approximation",
"uh-prok-sih-MAY-shun",
"a close estimate"
],
[
"glycerin (or glycerine)",
"GLIS-er-in",
"a thick, sweet, clear liquid used in soaps"
],
[
"alabaster",
"AL-uh-bas-ter",
"smooth white stone; pure white"
],
[
"arugula",
"uh-ROO-guh-luh",
"a peppery salad green"
],
[
"vibrometer",
"vy-BROM-ih-ter",
"a tool that measures vibrations"
],
[
"mayonnaise",
"MAY-uh-nayz",
"a creamy sauce of oil, eggs, and vinegar"
],
[
"sputum",
"SPYOO-tum",
"mucus coughed up from the lungs"
],
[
"cerulean",
"suh-ROO-lee-un",
"sky blue"
],
[
"cul-de-sac",
"KUL-dih-sak",
"a dead-end street with a round end"
],
[
"electrolytes",
"ih-LEK-truh-lyts",
"minerals in body fluids that carry electric charge"
],
[
"ototoxic",
"oh-toh-TOK-sik",
"harmful to the ear or hearing"
],
[
"Aphrodite",
"af-ruh-DY-tee",
"Greek goddess of love and beauty"
],
[
"bogong moth",
"BOH-gong MAWTH",
"an Australian moth that migrates long distances"
],
[
"yakuza",
"yah-KOO-zuh",
"Japanese organized crime gangs"
],
[
"sensilla",
"sen-SIL-uh",
"tiny sense organs on insects"
],
[
"eponymous",
"ih-PON-ih-mus",
"named after a particular person"
],
[
"Presbyterian",
"prez-bih-TEER-ee-un",
"a Protestant church led by elders"
],
[
"lactobacillus",
"lak-toh-buh-SIL-us",
"helpful bacteria found in yogurt"
],
[
"spes phthisica",
"SPAYS TIZ-ih-kuh",
"the hopeful mood sometimes seen in people with tuberculosis (Latin)"
],
[
"Delaware",
"DEL-uh-wair",
"a U.S. state on the East Coast"
],
[
"undulating",
"UN-juh-lay-ting",
"moving in waves"
],
[
"phantasmal",
"fan-TAZ-mul",
"ghostly; unreal"
],
[
"brazier (or brasier)",
"BRAY-zher",
"a metal container for holding burning coals"
],
[
"arachnid",
"uh-RAK-nid",
"a spider, scorpion, or related creature"
],
[
"pathologically",
"path-uh-LOJ-ik-lee",
"in an extreme, unhealthy way; caused by disease"
],
[
"affinities",
"uh-FIN-ih-teez",
"natural likings or connections"
],
[
"embodiment",
"im-BOD-ee-ment",
"a perfect example of an idea or quality"
],
[
"porpoises",
"POR-puh-siz",
"small, dolphin-like sea mammals"
],
[
"psychological",
"sy-kuh-LOJ-ih-kul",
"related to the mind"
],
[
"assemblage",
"uh-SEM-blij",
"a collection of things or people"
],
[
"leprosy",
"LEP-ruh-see",
"a disease that damages skin and nerves"
],
[
"eureka",
"yoo-REE-kuh",
"\"I found it!\" — said at a discovery"
],
[
"annelids",
"AN-uh-lidz",
"segmented worms, like earthworms"
],
[
"kerosene (or kerosine)",
"KAIR-uh-seen",
"a fuel oil for lamps and heaters"
],
[
"Pennsylvania",
"pen-sil-VAY-nyuh",
"a U.S. state in the Northeast"
],
[
"ampulla",
"am-PUL-uh",
"a small flask; a pouch-like part in the body"
],
[
"solenodon",
"suh-LEN-uh-don",
"a rare venomous shrew-like Caribbean animal"
],
[
"Sierra Leone",
"see-AIR-uh lee-OHN",
"a country in West Africa"
],
[
"Bildungsroman",
"BIL-doongz-roh-mahn",
"a novel about a young person growing up"
],
[
"vibrissae",
"vy-BRIS-ee",
"whiskers"
],
[
"phenomenon",
"fih-NOM-uh-non",
"a fact or event that can be observed; something remarkable"
],
[
"alleviate",
"uh-LEE-vee-ayt",
"to make less painful or severe"
],
[
"legation",
"lih-GAY-shun",
"a diplomatic office below an embassy"
],
[
"diffidence",
"DIF-ih-dunss",
"shyness; lack of self-confidence"
],
[
"butane",
"BYOO-tayn",
"a gas used as lighter fuel"
],
[
"cataract",
"KAT-uh-rakt",
"a cloudy area in the eye's lens; a large waterfall"
],
[
"quiche",
"KEESH",
"a savory egg pie"
],
[
"euphemism",
"YOO-fuh-miz-um",
"a mild word used in place of a harsh one"
],
[
"acolyte",
"AK-uh-lyte",
"a helper in church services; a follower"
],
[
"innocuous",
"ih-NOK-yoo-us",
"harmless"
],
[
"Tripoli",
"TRIP-uh-lee",
"the capital of Libya"
],
[
"neurological",
"noor-uh-LOJ-ih-kul",
"related to the nerves and brain"
],
[
"mysticetes",
"MIS-tih-seets",
"baleen whales"
],
[
"Eritrea",
"air-ih-TRAY-uh",
"a country in East Africa"
],
[
"forsythia",
"for-SITH-ee-uh",
"a shrub with bright yellow spring flowers"
],
[
"salicylic acid",
"sal-uh-SIL-ik AS-id",
"an acid used in acne and pain medicines"
],
[
"stomatopods",
"stoh-MAT-uh-podz",
"mantis shrimp"
],
[
"frankincense",
"FRANK-in-senss",
"a fragrant tree resin burned as incense"
],
[
"trichobothria",
"trik-oh-BOTH-ree-uh",
"fine sensory hairs on spiders that detect air movement"
],
[
"Cappadocia",
"kap-uh-DOH-shuh",
"a region in central Turkey known for rock formations"
]
]
}
];
