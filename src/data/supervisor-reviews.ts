export type SupervisorBehaviour = "Polite" | "Strict" | "Moody";

export interface VivaExperience {
  id: number;
  projectTitle: string;
  supervisorName: string;
  rating: number;
  supervisorBehaviour: SupervisorBehaviour;
  experience: string;
}

export const vivaExperiences: VivaExperience[] = [
  {
    id: 1,
    projectTitle: "Online Food Delivery",
    supervisorName: "Adresh Hasna Sahab",
    rating: 4,
    supervisorBehaviour: "Polite",
    experience:
      "Date: 17 August 2026\nTime: Today\n\nSir ne pehle sab se kaha ke Front-End page open karo. Phir unhon ne kaha ke ek order banao. Maine customer ID enter ki aur order create kiya. Is ke baad maine poora process complete kiya aur bill calculate kiya.\n\nPhir Sir ne kaha ke ab jo ye sara process ho raha hai, is ki query dikhao ke kaunsi query use ho rahi hai. Mujhe query yaad nahi aa rahi thi. Mujhe sirf itna yaad tha ke INSERT ki query thi. Maine Sir ko bataya ke INSERT ki query hai. Sir ne kaha ke coding mein se dhoond kar batao. Maine try kiya, lekin mujhe coding mein se woh query nahi mil rahi thi.\n\nPhir maine presentation di. Presentation mein se Sir ne direct Use Case Diagrams open karwaye. Unhon ne poocha ke ye bounding boundary ke andar jo hoti hain, maslan use cases boundary ke andar kyun hoti hain?\n\nPhir Sir ne ERD Diagram aur Relational Schema ke baare mein poocha ke sab se pehle kaunsi cheez banayi jati hai?\n\nBas isi tarah ke questions hue. Saath mein Sir ne mera favourite subject bhi poocha. Mera favourite subject Data Mining tha. Data Mining mein se bhi unhon ne taqreeban 3 se 4 questions kiye.",
  },
  {
    id: 2,
    projectTitle: "Web Automation via Playwright",
    supervisorName: "Usman Waheed Bhati",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Sir was extremely polite, he just asked me ist to run the code \nI mean to apply the Automation \nAnd then he asked me to show the unique records that was saved and where it was saved \nThen he asked me to open presentation \nHe asked me to explain USE CASE diagram\nThen he asked what is your fav subj\nI said database cs403 \nHe asked 2 question from that subj \nHe ist asked konsi query use hoti h to add a record \nAnd then he asked k joins ka disadvantages b hoty hn Kya? \n\nUs k bad he said ok done Allah Hafiz",
  },
  {
    id: 3,
    projectTitle: "Networking related",
    supervisorName: "Muhammad Saqib Javed",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Salam! \n\nCall started with ice breaking session (aagey peechey ki batain)\nLater discussed about the networking Architecture of the project \nSpoke about which would be fater a laptop or desktop when communication over a network, I had to prove my answer\nAsked me to change wire from straight to cross over cable in packet tracer\n\nWhole session was under 15 minutes including conversation which was not related to the project.",
  },
  {
    id: 4,
    projectTitle: "FloraFetch",
    supervisorName: "",
    rating: 4,
    supervisorBehaviour: "Strict",
    experience:
      "Salam!\nViva Time: 9:30\nDate: 21 August 2026\n\n1st question: how many languages have you used for frontend and backend?\n\nThen asked to run the application \nAnd place a order\n\nThen he asked me to open the presentation file.\n\nJb mein presentation open kr rae thi TU file ka issue bn gya aur phr sir ny kaha k ap computer science ki student ap Issy thk krain\n\nPhr unhon ny Kahan k entity relationship wali diagram open kro aur wahan sy ye btao k knsa attribute multivalued hai\n\nThen he asked my favorite subject \nI told him database management system \n\nHe asked me difference between DML and DDL,\nTheir queries \n\nTypes of joins and their names\n\nRelationship names\n\nNormalization \nTypes of normalization \n\nThen he said well done,\nYou are passed in the viva.\nYou can go now.\n\nUnhon ny kuch points pr grill krni ki Koshish k Lekin mein confuse nae hoi.\nSo dear students be confident and prepare presentation file very well.\n\nDatabase agr apka favourite subject hai TU no mam ny slides provide ki hen unko achy sy prepare kijie ga",
  },
  {
    id: 5,
    projectTitle: "AI powered smart study assistant",
    supervisorName: "Noureen Hameed",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Aoa \nDate: 20 August 2026\nTime : 2:50 pm\nMam bohat Achi thi bht zada unho ne sabse phly application run krwai then unho ne language pucha konsi use ki then ERD diagram explain karwai \nPhir mam ne pucha fav subject then pucha ky normalization Kia Hoti ha table kisy khty ha bas then mam ne kha ok apka viva ho gya well done 👍🏻 \nAlhamdulilah yai sab mam Almas Afzal ki wjh se hua Inho ne bht Achi preparation krwai Thanku mam💕❤️",
  },
  {
    id: 6,
    projectTitle: "Student Management Web Application",
    supervisorName: "mukram shah",
    rating: 4,
    supervisorBehaviour: "Polite",
    experience:
      "Date: 18August 2026\nTime: Today 11 bajy\n\nSir ne pehle sab se kaha ke \nApplication rum kr Ka dekho wo many run KR Ka dekhai ak aya student ki add Kiya phir admin say approve kerva Ka dobara login kervaya student ki \n\nOska bad air nay apny project Ka Bary may batay ko kha \n\nPhir presentation KO start kervaya \n\nMany full explain KR rha tha oper say subject specialist mam a gai onhonay question start KR diy\n\nMam nay pocha Ka ya project Ka Kaya maqaad Hyany wo explain Kiya oska bad mam nay ERD digram Ka Bary may pocha Kaya hy \n\nOska bad primary key or foreign key Ka Bary may pocha in Ka Kaya Kam Hy \n\nOska bad mam nay kha ok apka viva ho Gaya hy",
  },
  {
    id: 7,
    projectTitle: "VUFYPMS",
    supervisorName: "H.M.Azeem Sarwar",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Viva timing:9:30\nSupervisor was very polite. Firstly he said k Ap zahen sa Nikal dyn k Ap ko fail kr diya jay ga, he said run application so I do after that I give presentation he said directly go to use case diagram and then he said explain ERD  , then he asked for fvrt subj I said cs403 he asked what's normalization, primary key and that's all... He didn't interrupt me while I was explaining things, then he said ur viva is cleared ur result for viva will be updated after final term result",
  },
  {
    id: 8,
    projectTitle: "VUFYPMS",
    supervisorName: "",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Asslam o Alaikum\nSir ne website me se Admin or user wala login krwa k explain krwaya phir presentation deny ko kaha phir fvrt subject k pucha Cs403 me se  Primary key, Normalization or  joins ka question pucha  bss phir kaha ap pass hain or apka viva clear hai",
  },
  {
    id: 9,
    projectTitle: "",
    supervisorName: "",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Miss ke bataye huye lectures, notes aur videos se hi almost sara viva tayyar ho gaya tha. Sir bhi bohat polite thay. Unhon ne start mein kaha, “Chill karo, tension nahi leni, pass ho tum.” 😄\n\nPhir viva start hua. Pehle name poocha, phir kaha database run karo. Maine database run kiya. Uske baad project ke bare mein poocha aur kaha presentation do, to maine presentation de di. Phir SELECT query ka question poocha, jo maine answer kar diya.\n\nUske baad sir ne poocha ke kaunsi book parhi hai. Maine Big Data wali book ka bataya, to woh kehte hain, “Wah, alag hi book!”  Phir Machine Learning ke bare mein poocha, maine woh bhi bata diya. End mein sir ne kaha ke agar future mein meri help chahiye ho to message kar lena, main available hoon.\n\nThanks Miss ❤️ Miss ki wajah se aik hi din mein tayari karke viva dene aa gaya tha. ",
  },
  {
    id: 10,
    projectTitle: "FloraFetch",
    supervisorName: "",
    rating: 3,
    supervisorBehaviour: "Strict",
    experience:
      "Project name final year project submission ka tha\nSab sy phly usny bola ky project open karian\n\nLogin karian as customer \n\nShow what plant you have\nSelect this one.\n\nCreate order.\nAdd 2 in quantity \nPlace ordere\n\n\nLogin as admin \n Order ko deliver mark karian\n\nThen add a flower \nThen show\n\nChange price \nShow\n\nRemove a plant\n\nBasically complete website chalvaie to check functionality \n\n\nThat was easy part.\nKoi question ni kia \n\nThen presentation open karvie.\n\nSaid ky aap use case diagram par awo\n\nExplain karo\n\nI did \n\nThen poucha ky relationship kitny type ky hoty hain\nJisa jawab 50 50 dia\nBohat sawal ki\nLike 10\n\nThen entity\nSame 10-20 question \n\nThen relationship wally\nMa poucha ky\n\nYe keys ka difference bttao\n\n\nThen bola ky kon kon c language use ki\n\nI sad html css java\n\nFront end\n\nBoot starp ka name bholl gia\n\nFavourite subject \n\nWhy\nLike 5-7 question \n\nThen 5-7 or question \n\n\n\nNo coding questions \n\nSrif diagrams \n\nRelationship kia hain\nMostly ky ye kasy bannie hain. Ye asy ku hain ye asy kun ha.\nTricky questions thy mostly",
  },
  {
    id: 11,
    projectTitle: "AI powered smart study assistant",
    supervisorName: "Noureen Hameed",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Aoa\nDate: 27 August 2026\nTime: 10:30 pm \nMa'am boht polite thin unhon NY phly Site run krwaii phir presentation k andr Jo diagrams hn unko explain krny ka bola site or presentation k bd unhon NY pucha k fav subject Konsa h phir unhon ny SQL ka pucha k Kya hota usky Normalization ka pucha phir primary or foreign key ka pucha k Kya hoti usky bd mam NY bola k apka Viva hogyaa h ND apky lms py ajaega apka result Kuch time tk.\nAlhumdulilah Mera Viva achaa hogya or ye sb Ma'am apkii waja sy hua h apny merii hr br help ki mery sary questions clear kiye sary notes share kiye or guide Kiya bohttt me Dil sy apkii bohttt respect krtii Hun, Thank you so much ma'am Allah Paak apky liye asanian peda frmaye or ap bohttt grow kren apki mehnat ki wja sy ameen elahii ameen♥️♥️",
  },
  {
    id: 12,
    projectTitle: "online food delivery system",
    supervisorName: "hafiz bilal saqib",
    rating: 4,
    supervisorBehaviour: "Strict",
    experience:
      "Sir na phly  application ko run krwaya than unho na order place k bola phr poocha k yaha kon si query use ho rhi than code  b sir na bola jo qery use ho rhi ha woh code ma  dekhay uska baad presentation k bola and at the last sir fvrt subjcet k questioning  ki jss ma  normalization, relationships, queris , deadlock aur responsiveness k kiya and than bss viva end....",
  },
  {
    id: 13,
    projectTitle: "Online Food Delivery",
    supervisorName: "Hafiz Bilal",
    rating: 4,
    supervisorBehaviour: "Strict",
    experience:
      "Sir ny application run karwai Aik order place karwaya phir admin wala panel open karwaa k admin side dashboard dekha phir sir ny code open karwaya code explain karwaya insert or store ki queries or aik 2 sawaal or kiye code me se phir use case and entiti explain karwai phir fvrt subject k questions Database or file system ka differnce Rollback k baray me pocha deadlock or aik 2 or sawaal kiye or kuch responsiveness ka pocha bas phir end",
  },
  {
    id: 14,
    projectTitle: "Ai powered smart study assistant",
    supervisorName: "noureen hameed.",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "Aoa\nMam nyn sb sa phla application run krwai. Phir mam nyn kaha k presentation open kro. Presentation mn mam nyn  kaha ka usecase diagram explain kro. Diagram explain krna ka bade mam nyn entity ka bara mn pocha phir attributes ka bara mn pocha. \nMam nyn phir favorite subject ka bara mn pocha. Mn nyn btaya Database management system ha. Phir mam nyn 3 question pochta.\nWhat is Normalization.\nWhat is joint.\nDifference between primary key and foreign key.\nMera viva both acha hova. Mam nyn go files share KY thn os sa mery both help hoi. Thanks a lot mam.",
  },
  {
    id: 15,
    projectTitle: "Online Metro system  Pakistan",
    supervisorName: "Sumbal Javaid",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "🌼Date time: 31-8  (3:15)\n1 🌼Questions project questios: Mam ny application run krwai thi or ticket select krwai registration bhi krwai thi.\n2 🌼documention questions: Documentation main unhon ny usecase or ERD explain karwaya tha or main ny us sy pehly jab unhon ny y sub explain karny Ka Kaha to main ny apny project k bary main onhy btaya tha like importance or use.\n3   🌼 favorite subject questios: Fav subject main sy unhon ny 1.Normalisation Ka pocha tha \n2.Query of SELECT\n3.Query of Drop\n4 Composite key KO remove kiu krty hian hum.\n\n🌼Feedback about developer: Mam Achi Hain unhon ny just 6 to 7 mint main viva khtm kr dia Myra viva BHT Acha ho gya main ny sary ans BHT jaldi bta DIY thy or explain bhi asy Kia k unhon ny koi q Nahi pocha or shukar h unhon ny y Nahi pocha k project paid h ya khud bnaya wrna mujy jhoot bolna prta k khud banaya h😶.\nAllah tallah ap logon k liy asani peda frmay bs relax  or confident rahin \nThanks to mam Alma's jinhon ny BHT acha guide Kia or har bar help ki🤍",
  },
  {
    id: 16,
    projectTitle: "Online Food Dilevery System",
    supervisorName: "Hafiz Bilal Saqib",
    rating: 5,
    supervisorBehaviour: "Polite",
    experience:
      "*Date* : 31 Aug 2026 \n*Time* : 09 : 40\n\nFirst of all sir ny greetings ky bad bola project ky related btain mean intro project ka. Then unhun ny direct login krwaya or order place krwaya. Then unhun ny bola ky apny admin ko konsy rights diya hain wo main ny admin dashboard sy navebar dekhaya .\n\n*Coding Part* : Jo order place kia ha usy code file open kr ky dekhain ky khan show ho rha ha.\n\n*Presentation* : Direct use case diagram sy start krwaya , then ERD , agy khud hi relational schema or tools related btaya main ny.\n\n*Favourite Subject* : CS403 DataBase Management System btaya main ny . Unhun ny normalization ki definition or example pochi , roll back or ak real word example , deadlock or ak question or pocha sb yad tha mughy.\n\n*Review by Instructor* : Sir ny last pr bola apka viva boht acha rha because main ny boht achy sy or fast responses diya thy jis sy kafi acha impression pra alhumdulillah overall it was a very good experiance😊",
  },
  {
    id: 17,
    projectTitle: "FloraFetch",
    supervisorName: "M. Hassaan",
    rating: 4,
    supervisorBehaviour: "Strict",
    experience:
      "Time & Date : *01-Sep-2026*\n3:45pm\n\n* First run the application login as customer then place order.\n* Login as admin then update the status of the placed order \n* Then Sir asked k Yaha Delivered mark ka option hn or agr order cancel krna ho to Kesy kryn gy.\n* Use case DIAGRAM open krwai us k system boundary ka pocha or actor ka kia Kam krty, ye boundary k bahir kiu rkhyn jaty hyn\n* Move to ERD diagram then asked how many entities there.\n* Difference between single value and multivalued also asked ERD diagram mein example dyn agr hy koi to.\n* How many Relationship in ERD \n* Difference between Functional or Non Functional also asked k diagram mein Jo oval shaped mein mentioned h ye functional hn ya non functional requirements.\n\n*Fvrt Subject questions*\n\n* Difference between DDL and DML and it's queries.\n* Normalization and it's types\n* Joins and it's types\n* Inheritance kia h \n* Functional dependency\n\nLast one : Languages used for backend and frontend.",
  },
  {
    id: 18,
    projectTitle: "EcoTrack- Waste management and Recycling Portal",
    supervisorName: "Mam Nadia Tabassum",
    rating: 3,
    supervisorBehaviour: "Strict",
    experience:
      "Subject specialist: Mam komal saleem\n\nFinal viva schedule: 30-june, 9:50 AM\nViva time pr start hua.\n\nPhle mam n name and student id puchi, phr kha project execute kren\nM citizen user register krne lgi tou mam n kha k login kren sirf r user ka dashboard show krwain, m n kia phr un ko request schedule kr k dikhai, khti ok, \nphr m n logout kia tou mam khti k company user register kren, phr poocha k ye jo user ka jo data is ki kon si query h, Insert query q k m n user register kia tha phr company dashboard pr stat cards bne hue the \nUn ko dekh kr mam n bola aisa aik r stat card bnain, us ko feedback ka name den, sath m input bnain jis m hm feedback den sken, phr niche hi card k undr submit button bnain jis pr click krne se feedback db table m save ho jae, bad m kha k aik r bi button bnai sath hi jis m hm feedback review kr ske.\n\nM n ye task complete kia tou mam khti ok, phle se bht achi preparation h, phr khti presentation open kren, wo m start ki, apne project ka intro/scope explain kia, phr VU process model explain kia, phr mam khti use case diagram pr ain, m n us ko explain kia, mam n include and extend k bare m pucha, phr kha k ye ovals m kia bna h, m n kha attributes, khti functions ya functionality kia hoti, Functional req kia hoti hn, phr kha ERD pr ain, us ko m explain kia, phr mam khti ye rectangle m hm kia represent krte hn m kha entity. phr class diagram open krwai, us ko b explain kia, relationships bi bata diye the, lkn phr mam puchti k aggregation r association m kia difference h. Finally mam n database diagam ka poocha, us ko m n explain kr diya, mam n aik question kiya k, ye jo user r requestPickup table k dermiyan relationship h, 1-to-M ye kese develop hua, m n logical answer diya, mam khti nai, DB m is relationship ko kese implement krte hn, m blank hui idr tou mam n phle poocha constraints ka pta h ap ko, wo m n bta diya, phr khti acha key kon si use hoti h phr 1-to-M k liye, Foreign key use hoti, jb m answer soch hi rhi thi tou mam n Mam Komal ko call m add kia, phr subject poocha\nMam komal n jldi jldi CS403 m se questions kiye,\nDelete r Drop m kia difference h\nCandidate kye kia hoti h\nMam n poocha k kia primary key, foreign key b hoti h,  kia foreign key primary key bi hoti h, m n kha foriegn ki primary key hoti h, jb k primary key zrori nahi foreign key b ho.\nRefrential integrity kia hoti h, muje sunne m lga uno n bola h differential integrity kia hoti h, ye tou muje nai ata tha is liye m n relational integrity k bare m hi bta diya [sirf yehi ata tha]\nMam n poocha k jb hm kisi table ko normalise krte hn tou phr us ko denormalize krne k zrorat q prti h, m kha jb hme data retrieval easy bnana hota h tb denormalization krte hn table/data ki.\nPoocha third normal form kia hoti h\n \nThat's it, mam n kha ap ka viva complete ho gya.",
  },
  {
    id: 19,
    projectTitle: "prayer tracker",
    supervisorName: "Musaddiq hussain",
    rating: 3,
    supervisorBehaviour: "Strict",
    experience:
      " Project run krwaya test ky name sy user register krwaya phir kha ky report generate krwain then reset button bnwaya aik logo change krwaya html ky attributes puchain sql file mai sy queries explain ki css mai sy b pucha tha kuch han ky background clr ky elawa or kia background mai use hota is ky elawa or b questions kiye phir php mai session start ka pucha ku krty phir isset ka pucha\n *Presentation* \npresentation ko explain kia pura then uno ny one by one diagram mai sy questions kiye \n *Cs403* \nSchema (mujhy iska pta nhi tha🥹) \nFk unique key\nEntity attributes \nInsert or select query \nWhere ku use krty \nJoin ki types",
  },
  {
    id: 20,
    projectTitle: "EcoTrack- Waste management and Recycling Portal",
    supervisorName: "Mam Nadia Tabassum",
    rating: 3,
    supervisorBehaviour: "Strict",
    experience:
      "Subject specialist: Mam komal saleem\n\nFinal viva schedule: 30-june, 9:50 AM\nViva time pr start hua.\n\nPhle mam n name and student id puchi, phr kha project execute kren\nM citizen user register krne lgi tou mam n kha k login kren sirf r user ka dashboard show krwain, m n kia phr un ko request schedule kr k dikhai, khti ok, \nphr m n logout kia tou mam khti k company user register kren, phr poocha k ye jo user ka jo data is ki kon si query h, Insert query q k m n user register kia tha phr company dashboard pr stat cards bne hue the \nUn ko dekh kr mam n bola aisa aik r stat card bnain, us ko feedback ka name den, sath m input bnain jis m hm feedback den sken, phr niche hi card k undr submit button bnain jis pr click krne se feedback db table m save ho jae, bad m kha k aik r bi button bnai sath hi jis m hm feedback review kr ske.\n\nM n ye task complete kia tou mam khti ok, phle se bht achi preparation h, phr khti presentation open kren, wo m start ki, apne project ka intro/scope explain kia, phr VU process model explain kia, phr mam khti use case diagram pr ain, m n us ko explain kia, mam n include and extend k bare m pucha, phr kha k ye ovals m kia bna h, m n kha attributes, khti functions ya functionality kia hoti, Functional req kia hoti hn, phr kha ERD pr ain, us ko m explain kia, phr mam khti ye rectangle m hm kia represent krte hn m kha entity. phr class diagram open krwai, us ko b explain kia, relationships bi bata diye the, lkn phr mam puchti k aggregation r association m kia difference h. Finally mam n database diagam ka poocha, us ko m n explain kr diya, mam n aik question kiya k, ye jo user r requestPickup table k dermiyan relationship h, 1-to-M ye kese develop hua, m n logical answer diya, mam khti nai, DB m is relationship ko kese implement krte hn, m blank hui idr tou mam n phle poocha constraints ka pta h ap ko, wo m n bta diya, phr khti acha key kon si use hoti h phr 1-to-M k liye, Foreign key use hoti, jb m answer soch hi rhi thi tou mam n Mam Komal ko call m add kia, phr subject poocha\nMam komal n jldi jldi CS403 m se questions kiye,\nDelete r Drop m kia difference h\nCandidate kye kia hoti h\nMam n poocha k kia primary key, foreign key b hoti h,  kia foreign key primary key bi hoti h, m n kha foriegn ki primary key hoti h, jb k primary key zrori nahi foreign key b ho.\nRefrential integrity kia hoti h, muje sunne m lga uno n bola h differential integrity kia hoti h, ye tou muje nai ata tha is liye m n relational integrity k bare m hi bta diya [sirf yehi ata tha]\nMam n poocha k jb hm kisi table ko normalise krte hn tou phr us ko denormalize krne k zrorat q prti h, m kha jb hme data retrieval easy bnana hota h tb denormalization krte hn table/data ki.\nPoocha third normal form kia hoti h\n \nThat's it, mam n kha ap ka viva complete ho gya.",
  },
  {
    id: 21,
    projectTitle: "online food delivery system",
    supervisorName: "Humaira naeem",
    rating: 3,
    supervisorBehaviour: "Strict",
    experience:
      "Today was my final deliverable viva...\nRegistration k page mei changing karwayi, backend sy zyada questions kiay,i.e inheritance ka poucha, protected void ka poucha, query ko explain karwaya, parameters kiya hoty hain,code ko explain krwaya.... Presentation Wali sari diagrams ki explanation pouchi details sy include or exclude use case ka poucha,ye optional hoty hain ya mandatory ye poucha,users or use case ki interactions explain karain,entities attributes, aggregation or composition ka poucha kahan use kiya hai or kiya purpose hai inka, cardinality or iski types pouchi,.... Fav subject cs403(database) sy Primary key, candidate key,join or iski types, normalization or iski types, anomalies, DBMS ka pucha...",
  },
  {
    id: 22,
    projectTitle: "online ceiling decorations and wallpaper",
    supervisorName: "",
    rating: 4,
    supervisorBehaviour: "Strict",
    experience:
      "Assalam o Alaikum final term viva sir NY overall intro Liye project ka phr login krwana order book krwaya aik user register krwaya phr admin side login krwaya update ka button ka color change krwaya code me Kuch files open krwai k connection wali file open kr KY dikhaye code explain ni krwaya phr presentation sari diagram explain krwai phr khud sy questions pochy aur favorite subject me schema kia hota ha types us ki quarries pochi aik do aur questions Jo bht mushkil thy samjh ni aye overall acha rha bs confidence hona chaye aur basics Ani chaye",
  },
  {
    id: 23,
    projectTitle: "Expanse Based Management System",
    supervisorName: "Muhammad Tahir Jan",
    rating: 3,
    supervisorBehaviour: "Moody",
    experience:
      "Subject Specialist: Muhammad Hashir Khan\nViva Duration: 30 Minutes\n\nFunctionality and Frontend mai se itne questions nhi hue bilkul normal se. detail nhi pochi na changing na kuch new create kr k dekhaya. Bas Application run krwayi. Budget set krwaya aur Expenses add krwa kr check k jb hum budget k pass pohnch jaty hai to Notification ata hai ya nhi. Kafi confusing sawal pochty hain. Aur pocha k wallet, Accounts kiu nhi add kiye k jb user aye ga to apni amount kaha save kre ga. To mai ne kaha k sir yeh functional requirment mai nhi tha. to unho kaha k Expense Management tb hi hota hai jb user kahein apni amount save krwata hai yeh to basic si chez hai. phir usky bd sari application explain ki.\nFavourite Subject waly sir phly aa gaye thy unho ne bich mai questioning start kr di.\n\nCS403 Database Management System:\nDDL / DML / Inner Joins / Trigger / SQL / Different types of Databases\n\nPresentation:\n Use case diagram kese work kr rhi hai us mai functional requirement and Non-functional requirement add hoti hai ya nhi aur kiu hoti hai.\nAisi knsi chez jo Database bnaty wy humein sab se phly bnani chaie apni functional requirement ko dekhty wy jo hmari overall database ki buniyad hoti hai jisko sab se phly bnana chaie?\n ERD Diagram Explanation entity kia hota hai and aur yeh kese database mai work krty hain. Tables kese bnty hain. inka relationship kia hota hai dosri entities k sath.\nEnd.",
  },
  {
    id: 24,
    projectTitle: "",
    supervisorName: "Muhammed Tahir Jan",
    rating: 2,
    supervisorBehaviour: "Moody",
    experience:
      "Mere supervisor Thy\nThy\n\nReply ke dety thy but not in details. \nTime sy phly msg kia viva ka \nCall nahi ki. Gusa kr gaye tum ny call nahi ki. \nOr jb  project dekha to Aik function nikal lia ye q nahi kia. Me ny kaha sir ap ny bola hi nahi na zikr kia. Kehty ni esa to project hota hi nahi. 2 3 Mint behas k bd kehty agy ye kr k dekhao",
  },
  {
    id: 25,
    projectTitle: "E - learning course sharing platform",
    supervisorName: "Umra naeem",
    rating: 4,
    supervisorBehaviour: "Strict",
    experience:
      "*Project Title:*\n\n\n*Supervisor Name:*\n\n\n*Viva Date & Time:*\n\n29 - june - 2026 2:35\n\n*Website Questions:*\n. Overview of the project \n. Login as a student \n. Tell me about the interface of the student login \n. Open video assignment presentation and PDF\n. Tell me how many students are enrolled right now\n. Login as an instructor\n. Explain instructor interface\n. Check quizzes and everything that are on your interface\n. Tell me the functionalities of your project\n\n*Presentation Questions:*\n. Entity relation diagram\n. Relationship between users and courses\n. Filled diamond is called?\n. Class diagram\n. Sequence diagram explains the whole sequence diagram\n\n*Favourite Subject Questions:*\n. Difference between database and DBMS and RDBMS\n. Composite key\n. Difference between delete and truncate\n. Which command is used to remove the entire table with record\n What is normalisation\n. How do you separate the table in normalisation\n\n*Viva tips:*\n. Recite darood pak and duas for success \n. Be confident \n. Answer whatever you know about the question that will be asked (less is better than nothing)\n. Build your good vocabulary about your project \n. My supervisor spent more time on the presentation, so prepare it well",
  },
];
