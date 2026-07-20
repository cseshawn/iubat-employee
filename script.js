
// ── script.js ──

// ─── FULL DATA (all employees) ──────────────────────────
const employees = [
    { name: "Dr.Ismail Hossain", designation: "Professor (Special) & Chairman", dept: "College of Agricultural Sciences", room: "426", email: "cas.chair@iubat.edu", phone: "01711423009" },
    { name: "Dr Md Shohidullah Miah", designation: "Professor", dept: "College of Agricultural Sciences", room: "318", email: "drshohidullah@iubat.edu", phone: "01748190474" },
    { name: "Dr. Mohammad Rezaul Karim", designation: "Associate Professor & Coordinator", dept: "College of Agricultural Sciences", room: "426", email: "rezaul.ag@iubat.edu", phone: "01842017836" },
    { name: "Dr. M A Sattar", designation: "Professor (Special)", dept: "College of Agricultural Sciences", room: "1114", email: "drmasattar.ag@iubat.edu", phone: "01711855366" },
    { name: "Professor Dr. Md. Ferdous Mondal", designation: "Professor", dept: "College of Agricultural Sciences", room: "516", email: "ferdous.cas@iubat.edu", phone: "01715248698" },
    { name: "Dr. Muhammad Salim", designation: "Professor", dept: "College of Agricultural Sciences", room: "915", email: "m.salim.cas@iubat.edu", phone: "01752041336" },
    { name: "Dr.A.J.M Sirajul Karim", designation: "Professor", dept: "College of Agricultural Sciences", room: "426", email: "sirajulkarim.cas@iubat.edu", phone: "01552601070" },
    { name: "Professor Dr.Md.Abdul Karim", designation: "Professor", dept: "College of Agricultural Sciences", room: "1118", email: "akarim.ag@iubat.edu", phone: "01758098591" },
    { name: "Dr Farjana Sultana", designation: "Professor", dept: "College of Agricultural Sciences", room: "1117", email: "farjana1s@iubat.edu", phone: "01925871293" },
    { name: "Dr Shaila Sharmin", designation: "Professor", dept: "College of Agricultural Sciences", room: "1018", email: "shaila.sharmin@iubat.edu", phone: "01717081691" },
    { name: "Dr.Fahim Ahmed", designation: "Associate Professor", dept: "College of Agricultural Sciences", room: "716", email: "fahim.ahmed@iubat.edu", phone: "01959679581" },
    { name: "Dr. Babul Chandra Sarker", designation: "Associate Professor", dept: "College of Agricultural Sciences", room: "512", email: "dsarker.cas@iubat.edu", phone: "01716009319" },
    { name: "Dr. Md. Shafiqul Islam", designation: "Associate Professor", dept: "College of Agricultural Sciences", room: "1112", email: "shafiqul.cas@iubat.edu", phone: "01711481550" },
    { name: "Dr.Abul Khair", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "412", email: "dakhair@iubat.edu", phone: "01754030607" },
    { name: "Dr.Swapan Kumar Roy", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "614", email: "swapan.kumar@iubat.edu", phone: "01786192935" },
    { name: "Dr.Abu Yousuf Hossin", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "522", email: "abuyousuf.ag@iubat.edu", phone: "01776254455" },
    { name: "Dr.Shabur Talukder", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "411", email: "shabur.ag@iubat.edu", phone: "01786229684" },
    { name: "Dr. Sharmin Akter Chowdhury", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "1112", email: "sharmin.cas@iubat.edu", phone: "01763204267" },
    { name: "Dr. Syada Nizer Sultana", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "723", email: "nizersultana.cas@iubat.edu", phone: "01850504221" },
    { name: "Dr. Md. Ashraful Hoque", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "1013", email: "ashraful.cas@iubat.edu", phone: "01744515572" },
    { name: "Dr. Md. Nur A Alam Siddique", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "923", email: "nuraalam.cas@iubat.edu", phone: "01717591237" },
    { name: "Dr. Md. Syeeduzzaman Kamal", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "717", email: "kamal.cas@iubat.edu", phone: "01944342300" },
    { name: "Dr. Md. Shahin Iqbal", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "1115", email: "driqbal.cas@iubat.edu", phone: "01729991507" },
    { name: "Dr. Md. Sohrab Ali", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "514", email: "drsohrab.cas@iubat.edu", phone: "01712125880" },
    { name: "Dr. Md. Kamrul Hasan", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "1114", email: "drhasan.cas@iubat.edu", phone: "01711244091" },
    { name: "Dr. Sujon Kumar", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "519", email: "drkumar.cas@iubat.edu", phone: "01723961801" },
    { name: "Dr. Md. Mosaraf Hossain", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "915", email: "mosaraf.cas@iubat.edu", phone: "01771654266" },
    { name: "Dr. S. M Rajiur Rahman", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "1120", email: "rajiurrahman.cas@iubat.edu", phone: "01717979697" },
    { name: "Dr Md Salim Ullah Khan Eusufzai", designation: "Professor (Semester Faculty)", dept: "College of Agricultural Sciences", room: "214", email: "dr.eusufzai@iubat.edu", phone: "01716967725" },
    { name: "Dr Anil Chandra Basak", designation: "Professor (Special) Semester Faculty", dept: "College of Agricultural Sciences", room: "813", email: "acbasak@iubat.edu", phone: "01712137402" },
    { name: "Dr.M.Jabed Ali Mirza", designation: "Professor (Semester Faculty)", dept: "College of Agricultural Sciences", room: "214", email: "mirza.ag@iubat.edu", phone: "01715626872" },
    { name: "Dr. Md. Nazirul Islam Sarker", designation: "Adjunct Research Fellow", dept: "College of Agricultural Sciences, IUBAT", room: "", email: "", phone: "" },
    { name: "Dr.Arif Reza", designation: "Assistant Professor", dept: "College of Agricultural Sciences", room: "423", email: "arif.reza@iubat.edu", phone: "01712593256" },
    { name: "Mr.Maxim Chakma", designation: "Administrative Officer (BS Ag)", dept: "College of Agricultural Sciences", room: "318", email: "maximchakma@iubat.edu", phone: "01820328886" },
    { name: "Md. Mosiur Rahman", designation: "Administrative Officer (BS Ag)", dept: "College of Agricultural Sciences", room: "426", email: "mosiur.ao@iubat.edu", phone: "01303842415" },
    { name: "Professor Dr Abdur Rab", designation: "Vice-Chancellor", dept: "School of Business", room: "209", email: "vc@iubat.edu", phone: "0255892471" },
    { name: "Dr. Mozaffar Alam Chowdhury", designation: "Professor & Dean", dept: "School of Business", room: "319", email: "mchowdhury@iubat.edu", phone: "01783340382" },
    { name: "Dr. Hasanuzzaman Tushar", designation: "Associate Professor & BBA Coordinator", dept: "School of Business", room: "513", email: "tushar@iubat.edu", phone: "01712498009" },
    { name: "Dr. Md. Nur-E-Alam Siddique", designation: "Assistant Professor & Coordinator MBA Program", dept: "School of Business", room: "513", email: "alam.cba@iubat.edu", phone: "01799806429" },
    { name: "Prof Dr. Md. Lutfar Rahman", designation: "Professor", dept: "School of Business", room: "118", email: "lutfarrahman@iubat.edu", phone: "01715133008" },
    { name: "Dr. Khaled Shams Chisty", designation: "Professor", dept: "School of Business", room: "301", email: "chisty@iubat.edu", phone: "01715372253" },
    { name: "Dr. Sheikh Shamim Hasnain", designation: "Professor", dept: "School of Business", room: "916", email: "hasnain.cba@iubat.edu", phone: "01948073121" },
    { name: "Dr.Arif Rana", designation: "Professor", dept: "School of Business", room: "1118", email: "arif.cba@iubat.edu", phone: "01552448927" },
    { name: "Abdullah Al Yousuf Khan", designation: "Associate Professor", dept: "School of Business", room: "411", email: "aaykhan@iubat.edu", phone: "01841175645" },
    { name: "Dr. Md. Moniruzzaman", designation: "Associate Professor", dept: "School of Business", room: "617", email: "moniruzzaman.cba@iubat.edu", phone: "01718782173" },
    { name: "Swapan Kumar Saha", designation: "Associate Professor", dept: "School of Business", room: "518", email: "swapan@iubat.edu", phone: "01733445045" },
    { name: "Mohammed Kamruzzaman", designation: "Associate Professor", dept: "School of Business", room: "301", email: "mkamruzzaman@iubat.edu", phone: "01682927493" },
    { name: "Zahir Rayhan Salim", designation: "Associate Professor", dept: "School of Business", room: "411", email: "zahir.rayhan@iubat.edu", phone: "01705760700" },
    { name: "Dr. Md. Sohel Rana", designation: "Associate Professor", dept: "School of Business", room: "923", email: "sohelrana.cba@iubat.edu", phone: "01788353875" },
    { name: "Dr. Mohammad Moshiur Rahman", designation: "Associate Professor", dept: "School of Business", room: "923", email: "moshiur.cba@iubat.edu", phone: "01678115015" },
    { name: "Dr. Md. Afzal Hossain", designation: "Associate Professor", dept: "School of Business", room: "523", email: "afzal.cba@iubat.edu", phone: "01831445502" },
    { name: "Jamee Ahmad", designation: "Assistant Professor", dept: "School of Business", room: "815", email: "jamee.ahmad@iubat.edu", phone: "01687028264" },
    { name: "Kazi Md. Fahim Ahmed", designation: "Assistant Professor", dept: "School of Business", room: "810", email: "kazi.ahmed@iubat.edu", phone: "01796587492" },
    { name: "Nayma Iftakhar", designation: "Assistant Professor", dept: "School of Business", room: "1012", email: "iftakhar.nayma@iubat.edu", phone: "01776670236" },
    { name: "Dr. Sharmin Taskin", designation: "Assistant Professor", dept: "School of Business", room: "417", email: "dtaskin.cba@iubat.edu", phone: "01727508026" },
    { name: "Hasan Moudud", designation: "Assistant Professor", dept: "School of Business", room: "716", email: "hmoudud.cba@iubat.edu", phone: "01645738934" },
    { name: "Dr. Md. Mominul Islam", designation: "Assistant Professor", dept: "School of Business", room: "717", email: "mominul.cba@iubat.edu", phone: "01711102611" },
    { name: "Ashish Basak", designation: "Assistant Professor", dept: "School of Business", room: "523", email: "ashish.cba@iubat.edu", phone: "01795753145" },
    { name: "Dr. Md. Aynul Hoque", designation: "Assistant Professor", dept: "School of Business", room: "1015", email: "draynul.cba@iubat.edu", phone: "01911291223" },
    { name: "Sunan Islam", designation: "Senior Lecturer", dept: "School of Business", room: "1112", email: "sunan.islam@iubat.edu", phone: "01811483066" },
    { name: "Kazi Mahmudul Islam", designation: "Senior Lecturer", dept: "School of Business", room: "1016", email: "mahmud.cba@iubat.edu", phone: "01740565659" },
    { name: "Ms. Taslima Khatun", designation: "Lecturer", dept: "School of Business", room: "714", email: "rumpa.cba@iubat.edu", phone: "01622156320" },
    { name: "Dr. Thomas W Garsombke", designation: "Adjunct Faculty", dept: "School of Business", room: "", email: "tgarsombke@clayton.edu", phone: "" },
    { name: "Dr.Syed Alamgir", designation: "Advisor Professor Of Practice", dept: "School of Business", room: "", email: "sayedalam51@gmail.com", phone: "01711563777" },
    { name: "Dr. Munir Hassan", designation: "Adjunct Faculty", dept: "School of Business", room: "", email: "Mohammad.Hassan@stockton.edu", phone: "" },
    { name: "Dr. Ershad Ali", designation: "Adjunct Faculty", dept: "School of Business", room: "", email: "", phone: "" },
    { name: "Sultan Moyeen Ahmed Robin", designation: "Semester Faculty", dept: "School of Business", room: "214", email: "smoyeenahmed@gmail.com", phone: "01819251919" },
    { name: "Sohel Imroj Sayeed", designation: "Semester Faculty", dept: "School of Business", room: "214", email: "sisayeed@gmail.com", phone: "01610002600" },
    { name: "Dr. Md. Ali Ahsan", designation: "Semester Faculty", dept: "School of Business", room: "214", email: "aliahsan.rubd@gmail.com", phone: "01716303292" },
    { name: "Dr. Rubel", designation: "Semester Faculty", dept: "School of Business", room: "214", email: "rubelamincu@gmail.com", phone: "01713510024" },
    { name: "Professor Dr. Md. Musfiqur Rahman", designation: "Semester Faculty", dept: "School of Business", room: "215", email: "dmmr.ais@du.ac.bd", phone: "01975529111" },
    { name: "Dr. S. M. Sohrab Uddin", designation: "Semester Faculty", dept: "School of Business", room: "", email: "", phone: "" },
    { name: "Dr. Md. Imtiaz Mostafiz", designation: "Adjunct Research Fellow", dept: "School of Business, IUBAT", room: "", email: "", phone: "" },
    { name: "Dr B M Hasanul Banna", designation: "Adjunct Research Fellow", dept: "School of Business", room: "", email: "", phone: "" },
    { name: "Dr. Aslam Mia", designation: "Adjunct Research Fellow", dept: "School of Business, IUBAT", room: "", email: "", phone: "" },
    { name: "Mohammad Fakhrul Islam", designation: "Adjunct Research Associate", dept: "School of Business", room: "", email: "fakhrul.mate.hu@gmail.com", phone: "" },
    { name: "Dr. Teh Sin Yin", designation: "Adjunct Research Professor", dept: "School of Business", room: "", email: "tehsyin@usm.my", phone: "" },
    { name: "Dr. Ng Wei Chien", designation: "Adjunct Associate Research Professor", dept: "School of Business", room: "", email: "", phone: "" },
    { name: "Shaikh Sabbir Ahmed Waliullah", designation: "Assistant Professor", dept: "School of Business", room: "", email: "shaikh.waliullah@iubat.edu", phone: "01947516662" },
    { name: "Arif Ahsan", designation: "Assistant Professor", dept: "School of Business", room: "811", email: "arif.ahsan@iubat.edu", phone: "01837411533" },
    { name: "Mr.Hasibul Islam Russell", designation: "Senior Lecturer", dept: "School of Business", room: "715", email: "hasibul.russell@iubat.edu", phone: "01917009927" },
    { name: "Dr. Md. Shamim Hossain", designation: "Assistant Professor", dept: "School of Business", room: "1115", email: "mhossain.bba@iubat.edu", phone: "01531320609" },
    { name: "Md.Sadman Sakib", designation: "Lecturer", dept: "School of Business", room: "519", email: "sadman.sakib@iubat.edu", phone: "01964250450" },
    { name: "Reefat Arefin Khan", designation: "Senior Lecturer", dept: "School of Business", room: "716", email: "reefat.arefin@iubat.edu", phone: "01613051013" },
    { name: "Sampa Halder", designation: "Lecturer", dept: "School of Business", room: "710", email: "sampahldr.cba@iubat.edu", phone: "01923141587" },
    { name: "Md Ariful Islam", designation: "Administrative Officer (CBA)", dept: "School of Business", room: "102", email: "ariful.islam@iubat.edu", phone: "01811324874" },
    { name: "Mohammad Shahin", designation: "Administrative Officer (MBA)", dept: "School of Business", room: "513", email: "shahin.ao@iubat.edu", phone: "01886068116" },
    { name: "Dr. Utpal Kanti Das", designation: "Professor and Chairman, Department of Computer Science and Engineering", dept: "Computer Science and Engineering", room: "420", email: "ukd@iubat.edu", phone: "01819199419" },
    { name: "Dr Abhijit Saha", designation: "Professor & Coordinator of the Master`s Program", dept: "Computer Science and Engineering", room: "614", email: "asaha@iubat.edu", phone: "01711201907" },
    { name: "Dr. Md.Rashedul Islam", designation: "Associate Professor & Coordinator", dept: "Computer Science and Engineering", room: "420", email: "rashed@iubat.edu", phone: "01776445218" },
    { name: "Shahinur Alam", designation: "Assistant Professor & Coordinator", dept: "Computer Science and Engineering", room: "420", email: "shaheen@iubat.edu", phone: "01716950721" },
    { name: "Prof.Dr Ehteshamul Haque", designation: "Professor", dept: "Computer Science and Engineering", room: "217", email: "ehaquebd@iubat.edu", phone: "01715959752" },
    { name: "Drs.Md Alamgir Bhuyan", designation: "Associate Professor", dept: "Computer Science and Engineering", room: "1209", email: "alamgir@iubat.edu", phone: "01716247889" },
    { name: "Dr. Ishtiak Al Mamoon", designation: "Associate Professor", dept: "Computer Science and Engineering", room: "1017", email: "ishtiak.cse@iubat.edu", phone: "01713229860" },
    { name: "Dr. Md. Abdul Awal", designation: "Associate Professor", dept: "Computer Science and Engineering", room: "1017", email: "abdul.awal@iubat.edu", phone: "01714049454" },
    { name: "Krishna Das", designation: "Associate Professor & OBE Coordinator", dept: "Computer Science and Engineering", room: "514", email: "krishna.das@iubat.edu", phone: "01553543733" },
    { name: "Arifa Tur Rahman", designation: "Associate Professor", dept: "Computer Science and Engineering", room: "1014", email: "arifarahman@iubat.edu", phone: "01718891405" },
    { name: "Dr. Md Alomgir Hossain", designation: "Associate Professor", dept: "Computer Science and Engineering", room: "514", email: "alomgir.hossain@iubat.edu", phone: "01718735128" },
    { name: "Drs Ferdaus Anam Jibon", designation: "Associate Professor", dept: "Computer Science and Engineering", room: "1115", email: "jibon.cse@iubat.edu", phone: "01770013144" },
    { name: "Dr. Md Shafenoor Amin", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "411", email: "shafenoor.amin@iubat.edu", phone: "01805521356" },
    { name: "Rubayea Ferdows", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "715", email: "rubayea@iubat.edu", phone: "01677066697" },
    { name: "Md Saidur Rahman", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "511", email: "s.rahman@iubat.edu", phone: "01646322666" },
    { name: "M M Rakibul Hasan", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "718", email: "hasan.rakib@iubat.edu", phone: "01925936603" },
    { name: "Toyeer-E-Ferdoush", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "714", email: "toyeer@iubat.edu", phone: "01743836567" },
    { name: "Tanzina Tasnim Bithi", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "715", email: "tanzina_cse@iubat.edu", phone: "01754476144" },
    { name: "Suhala Lamia", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "1014", email: "suhalalamia@iubat.edu", phone: "001931235286" },
    { name: "Md. Alamin Talukder", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "522", email: "alamin.cse@iubat.edu", phone: "01330997311" },
    { name: "Dr. Mousumi Ahmed Mimi", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "713", email: "mousumi_cse@iubat.edu", phone: "01540086347" },
    { name: "Nusrath Tabassum", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "810", email: "nusrathtabassum_cse@iubat.edu", phone: "01521112365" },
    { name: "Engr . Md.Hasibul Islam", designation: "Senior Lecturer", dept: "Computer Science and Engineering", room: "812", email: "hasibul.cse@iubat.edu", phone: "01765471227" },
    { name: "Engr . ASM Shakil Ahamed", designation: "Senior Lecturer", dept: "Computer Science and Engineering", room: "812", email: "sahamed.cse@iubat.edu", phone: "01948922885" },
    { name: "Jabunnesa Jahan Sara", designation: "Senior Lecturer", dept: "Computer Science and Engineering", room: "715", email: "jabunnesa.cse@iubat.edu", phone: "01785875969" },
    { name: "D.M Arif Afsar", designation: "Senior Lecturer", dept: "Computer Science and Engineering", room: "713", email: "afsar.cse@iubat.edu", phone: "01951105948" },
    { name: "Moumitu Tasnim", designation: "Senior Lecturer", dept: "Computer Science and Engineering", room: "1113", email: "moumitu.cse@iubat.edu", phone: "01841958584" },
    { name: "Faniyam Maria Mansia", designation: "Lecturer", dept: "Computer Science and Engineering", room: "716", email: "maria.cse@iubat.edu", phone: "01954432882" },
    { name: "Md Nazir Ahmed", designation: "Lecturer", dept: "Computer Science and Engineering", room: "812", email: "nazir.cse@iubat.edu", phone: "01827156543" },
    { name: "Md. Asif Hossain", designation: "Lecturer", dept: "Computer Science and Engineering", room: "815", email: "asif.cse@iubat.edu", phone: "01859285784" },
    { name: "Mahedi Hasan", designation: "Lecturer", dept: "Computer Science and Engineering", room: "812", email: "mahedi.cse@iubat.edu", phone: "01705054376" },
    { name: "Snaholata Mondal", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1013", email: "snaholata.cse@iubat.edu", phone: "01535776436" },
    { name: "Jubair Ahmed Nabin", designation: "Lecturer", dept: "Computer Science and Engineering", room: "813", email: "jahmed.cse@iubat.edu", phone: "01984702077" },
    { name: "Jannatul Ferdous", designation: "Lecturer", dept: "Computer Science and Engineering", room: "811", email: "jannatul.cse@iubat.edu", phone: "01307713087" },
    { name: "Naeem Mia", designation: "Lecturer", dept: "Computer Science and Engineering", room: "813", email: "naeem.cse@iubat.edu", phone: "01791796640" },
    { name: "Afsana Akter Lija", designation: "Lecturer", dept: "Computer Science and Engineering", room: "723", email: "afsanalija.cse@iubat.edu", phone: "01628343047" },
    { name: "Dipta Mohon Das", designation: "Lecturer", dept: "Computer Science and Engineering", room: "921", email: "dipta.cse@iubat.edu", phone: "01986300292" },
    { name: "Kashfi Shormita Kushal", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1012", email: "kashfishormita.cse@iubat.edu", phone: "01627299790" },
    { name: "Fahim Shakil Tamim", designation: "Lecturer", dept: "Computer Science and Engineering", room: "810", email: "fahim.cse@iubat.edu", phone: "01689648688" },
    { name: "Abdullah Mohammad Sakib", designation: "Lecturer", dept: "Computer Science and Engineering", room: "921", email: "sakib.cse@iubat.edu", phone: "01624341064" },
    { name: "Puja dey", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1015", email: "puja.cse@iubat.edu", phone: "01724479576" },
    { name: "Md. Masud Rana", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1116", email: "masud.cse@iubat.edu", phone: "01580590846" },
    { name: "Anamika Rani Nath", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1016", email: "anamikanath.cse@iubat.edu", phone: "01720228973" },
    { name: "Rafiqul Islam Munna", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1016", email: "munna.cse@iubat.edu", phone: "01581102565" },
    { name: "Kazi Johir Raihan Suny", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1016", email: "suny.cse@iubat.edu", phone: "01538133464" },
    { name: "Sheekar Banerjee", designation: "Lecturer", dept: "Computer Science and Engineering", room: "820", email: "sheekar.cse@iubat.edu", phone: "01760208590" },
    { name: "Md. Min Khayer", designation: "Lecturer", dept: "Computer Science and Engineering", room: "820", email: "minkhayer.cse@iubat.edu", phone: "01705570952" },
    { name: "Avijit Biswas", designation: "Lecturer", dept: "Computer Science and Engineering", room: "717", email: "avijit.cse@iubat.edu", phone: "01846440053" },
    { name: "Sajia Bintea Jahangir", designation: "Lecturer", dept: "Computer Science and Engineering", room: "613", email: "sajia.cse@iubat.edu", phone: "01727706842" },
    { name: "S M Rifatur Rana", designation: "Lecturer", dept: "Computer Science and Engineering", room: "512", email: "rifatur.cse@iubat.edu", phone: "01581509012" },
    { name: "Md. Faihaj Alam Topu", designation: "Lecturer", dept: "Computer Science and Engineering", room: "512", email: "faihaj.cse@iubat.edu", phone: "01818208888" },
    { name: "Saha Kuljit Shantanu", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1115", email: "shantanu.cse@iubat.edu", phone: "01842352155" },
    { name: "Asad Bin Shahid Mahin", designation: "Lecturer", dept: "Computer Science and Engineering", room: "820", email: "mahin.cse@iubat.edu", phone: "01754374866" },
    { name: "Dr. Sujan Chandra Roy", designation: "Semester Faculty", dept: "Computer Science and Engineering", room: "916", email: "sujan.007.ice@gmail.com", phone: "" },
    { name: "Md. Khairul Islam", designation: "Lecturer", dept: "Computer Science and Engineering", room: "921", email: "khairul.cse@iubat.edu", phone: "01325166591" },
    { name: "Momtazul Arefin Labib", designation: "Lecturer", dept: "Computer Science and Engineering", room: "716", email: "arefin.cse@iubat.edu", phone: "01861964362" },
    { name: "Fuad Ahmed Udoy", designation: "Lecturer", dept: "Computer Science and Engineering", room: "122", email: "udoy.cse@iubat.edu", phone: "01725938281" },
    { name: "Iftekhar Sanwar Talukdar", designation: "Lecturer", dept: "Computer Science and Engineering", room: "122", email: "iftekhar.cse@iubat.edu", phone: "01793684454" },
    { name: "Ibnul Islam", designation: "Lecturer", dept: "Computer Science and Engineering", room: "619", email: "ibnul.cse@iubat.edu", phone: "01521111628" },
    { name: "S.M Afridi Mahmud", designation: "Lecturer", dept: "Computer Science and Engineering", room: "812", email: "afridi.cse@iubat.edu", phone: "01741235339" },
    { name: "Azmal Karim", designation: "Lecturer", dept: "Computer Science and Engineering", room: "619", email: "azmal.cse@iubat.edu", phone: "01956772740" },
    { name: "Mohammad Sajid Shahriar", designation: "Senior Lecturer", dept: "Computer Science and Engineering", room: "420", email: "sajid@iubat.edu", phone: "01674342278" },
    { name: "Md. Rawnak Saif Adib", designation: "Lecturer", dept: "Computer Science and Engineering", room: "514", email: "saifadib.cse@iubat.edu", phone: "01551073923" },
    { name: "Mohammad Imtajul Bari", designation: "Lecturer", dept: "Computer Science and Engineering", room: "", email: "", phone: "" },
    { name: "Abdur Rahman", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1113", email: "arahman.cse@iubat.edu", phone: "01876052367" },
    { name: "Sharmila Majumdar", designation: "Lecturer", dept: "Computer Science and Engineering", room: "209", email: "sharmila@iubat.edu", phone: "01681099577" },
    { name: "Tanvir Hasan", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1113", email: "tanvir.cse@iubat.edu", phone: "01706986905" },
    { name: "Suzad Mohammad", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1012", email: "suzad.cse@iubat.edu", phone: "8801875350975" },
    { name: "Anwar Hossain Efat", designation: "Lecturer", dept: "Computer Science and Engineering", room: "716", email: "anwar.cse@iubat.edu", phone: "01621597496" },
    { name: "Moumita Chanda", designation: "Lecturer", dept: "Computer Science and Engineering", room: "922", email: "moumita.cse@iubat.edu", phone: "01732235611" },
    { name: "Tabia Tanzin Prama", designation: "Lecturer", dept: "Computer Science and Engineering", room: "", email: "tanzin.cse@iubat.edu", phone: "01726419272" },
    { name: "Mr.Md.Humayun Kabir Biswas", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "424", email: "mhkbiswas@iubat.edu", phone: "01712593601" },
    { name: "Muhammad Riaz Hasib Hossain", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "708", email: "riaz_hasib@iubat.edu", phone: "01949600496" },
    { name: "Ehsan Ahmed Niloy", designation: "Lecturer", dept: "Computer Science and Engineering", room: "1013", email: "eaniloy.cse@iubat.edu", phone: "01794691569" },
    { name: "Ayesha Khatun", designation: "Senior Lecturer", dept: "Computer Science and Engineering", room: "815", email: "ayesha.siddiqua@iubat.edu", phone: "01794818908" },
    { name: "Md. Rownak Ul Islam", designation: "Lecturer", dept: "Computer Science and Engineering", room: "817", email: "rownak.cse@iubat.edu", phone: "01619903611" },
    { name: "Dr. Md. Golam Morshed", designation: "Assistant Professor", dept: "Computer Science and Engineering", room: "717", email: "morshed@iubat.edu", phone: "01722429393" },
    { name: "Shariful Islam", designation: "Administrative Officer (BCSE)", dept: "Computer Science and Engineering", room: "419", email: "shariful.ao@iubat.edu", phone: "01744865088" },
    { name: "Engr.Md Al Mammun Shamrat", designation: "Administrative Officer", dept: "Computer Science and Engineering", room: "419", email: "shamrat.ao@iubat.edu", phone: "01779213579" },
    { name: "Dr Raton Kumar Nondy", designation: "Professor & Chair", dept: "Electrical and Electronic Engineering", room: "424", email: "raton.nondy@iubat.edu", phone: "01725444592" },
    { name: "Dr. Khadiza Akter (Bonna)", designation: "Associate Professor & Coordinator", dept: "Electrical and Electronic Engineering", room: "424", email: "khadiza@iubat.edu", phone: "01684177498" },
    { name: "Dr. Md. Aziz ul Huq", designation: "Professor", dept: "Electrical and Electronic Engineering", room: "413", email: "azizbd2000@iubat.edu", phone: "01713018164" },
    { name: "Dr. Bishwajit Saha", designation: "Professor and Coordinator (OBE)", dept: "Electrical and Electronic Engineering", room: "615", email: "bsaha@iubat.edu", phone: "01818240545" },
    { name: "Engr. Md Abul Bashar", designation: "Associate Professor", dept: "Electrical and Electronic Engineering", room: "518", email: "mabashar@iubat.edu", phone: "01819250437" },
    { name: "Dr. Khandaker Mohammad Raisul Amin", designation: "Associate Professor", dept: "Electrical and Electronic Engineering", room: "412", email: "kmr.amin@iubat.edu", phone: "01611275454" },
    { name: "Dr. A K M Alamgir", designation: "Associate Professor & Additional Director, IQAC", dept: "Electrical and Electronic Engineering", room: "914", email: "dralamgir.eee@iubat.edu", phone: "01796258261" },
    { name: "Dr.Md.Moniruzzaman", designation: "Associate Professor", dept: "Electrical and Electronic Engineering", room: "817", email: "drmonir.eee@iubat.edu", phone: "01917746407" },
    { name: "Dr. Md. Shouquat Hossain", designation: "Associate Professor", dept: "Electrical and Electronic Engineering", room: "915", email: "shouquat.eee@iubat.edu", phone: "01768928384" },
    { name: "Murad Kabir Nipun", designation: "Associate Professor", dept: "Electrical and Electronic Engineering", room: "512", email: "nipun.murad@iubat.edu", phone: "01717574779" },
    { name: "Dr.Tawfikur Rahman", designation: "Assistant Professor", dept: "Electrical and Electronic Engineering", room: "817", email: "tawfikr.eee@iubat.edu", phone: "01826444945" },
    { name: "Suman Chowdhury", designation: "Assistant Professor", dept: "Electrical and Electronic Engineering", room: "415", email: "suman@iubat.edu", phone: "01756777414" },
    { name: "Md. Kamruzzaman", designation: "Lecturer", dept: "Electrical and Electronic Engineering", room: "709", email: "kamruzzaman@iubat.edu", phone: "01737524433" },
    { name: "Habib Mohammad", designation: "Lecturer", dept: "Electrical and Electronic Engineering", room: "514", email: "habib.eee@iubat.edu", phone: "01875662998" },
    { name: "Asikul Islam Asik", designation: "Lecturer", dept: "Electrical and Electronic Engineering", room: "919", email: "asik.eee@iubat.edu", phone: "01937663449" },
    { name: "Takbir Al Qavi", designation: "Lecturer", dept: "Electrical and Electronic Engineering", room: "1119", email: "takbir.eee@iubat.edu", phone: "01625185341" },
    { name: "Maksudur Rahman Turzo", designation: "Lecturer", dept: "Electrical and Electronic Engineering", room: "619", email: "turzo.eee@iubat.edu", phone: "01316268222" },
    { name: "Md. Nakib", designation: "Lecturer", dept: "Electrical and Electronic Engineering", room: "619", email: "nakib.eee@iubat.edu", phone: "01682312181" },
    { name: "Prof. Dr. Md Nazirul Islam Sarker", designation: "Adjunct Research Professor", dept: "Electrical and Electronic Engineering", room: "", email: "", phone: "" },
    { name: "Dr. Mohammad Aminul Islam", designation: "Adjunct Research Fellow", dept: "Electrical and Electronic Engineering, IUBAT", room: "", email: "", phone: "" },
    { name: "Dr. Rupendra Kumar Pachauri", designation: "Adjunct Research Fellow", dept: "Electrical and Electronic Engineering", room: "", email: "", phone: "" },
    { name: "Sairatun Nesa Soheli", designation: "Assistant Professor", dept: "Electrical and Electronic Engineering", room: "514", email: "soheli@iubat.edu", phone: "01618420024" },
    { name: "Md Jubaer Alam", designation: "Assistant Professor", dept: "Electrical and Electronic Engineering", room: "710", email: "jubaer.alam@iubat.edu", phone: "01672901591" },
    { name: "Shomi Ahmed", designation: "Senior Lecturer", dept: "Electrical and Electronic Engineering", room: "511", email: "ahmed_shomi@iubat.edu", phone: "017171088356" },
    { name: "Rezoana Bente Arif", designation: "Senior Lecturer", dept: "Electrical and Electronic Engineering", room: "1015", email: "rezoana@iubat.edu", phone: "01747868088" },
    { name: "Md Abu Bakr Siddique", designation: "Senior Lecturer", dept: "Electrical and Electronic Engineering", room: "511", email: "absiddique@iubat.edu", phone: "01732056156" },
    { name: "Md Turiqul Islam", designation: "Senior Lecturer", dept: "Electrical and Electronic Engineering", room: "322", email: "turiqul.islam@iubat.edu", phone: "01723980697" },
    { name: "Firuz Ahamed Nahid", designation: "Senior Lecturer", dept: "Electrical and Electronic Engineering", room: "814", email: "fanahid@iubat.edu", phone: "01927519709" },
    { name: "Md. Hasenur Rahman Ashu", designation: "Administrative Officer", dept: "Electrical and Electronic Engineering", room: "424", email: "hasenur.ao@iubat.edu", phone: "01740657084" },
    { name: "Md. Amran Hasan", designation: "Administrative Officer (BSEEE)", dept: "Electrical and Electronic Engineering", room: "424", email: "amran.ao@iubat.edu", phone: "" },
    { name: "Prof. Dr. Md. Monirul Islam", designation: "Professor & Chair, Dept of Civil Engineering", dept: "Civil Engineering", room: "318", email: "mmislam@iubat.edu", phone: "01716583558" },
    { name: "Professor Dr Md Abdul Halim", designation: "Professor", dept: "Civil Engineering", room: "315", email: "mahalimprof@iubat.edu", phone: "01674350213" },
    { name: "Dr. Soumik Nafis Sadeek", designation: "Assistant Professor & Coordinator MSc Civil Engineering Program", dept: "Civil Engineering", room: "515", email: "soumik.sadeek@iubat.edu", phone: "01781094992" },
    { name: "Dr. Md.Foisal Haque (PEng, SEng)", designation: "Associate Professor & Coordinator", dept: "Civil Engineering", room: "315", email: "mhaque.ce@iubat.edu", phone: "01782226790" },
    { name: "Dr Md. Tarekh Rasul", designation: "Professor", dept: "Civil Engineering", room: "512", email: "trasul@iubat.edu", phone: "01716334008" },
    { name: "Dr.Suvash Chandra Paul", designation: "Professor", dept: "Civil Engineering", room: "615", email: "suvashpl@iubat.edu", phone: "01716601172" },
    { name: "Dr.Noor Md.Sadiqul Hasan", designation: "Professor", dept: "Civil Engineering", room: "914", email: "nmshasan@iubat.edu", phone: "01725786186" },
    { name: "Dr. Saima Ali", designation: "Professor", dept: "Civil Engineering", room: "916", email: "saima.ce@iubat.edu", phone: "01772905203" },
    { name: "Professor Dr. Engr. Mohammad Abu Eusuf", designation: "Professor", dept: "Civil Engineering", room: "617", email: "eusuf.ce@iubat.edu", phone: "01966881362" },
    { name: "Dr Muhammad Enamul Quadir", designation: "Associate Professor", dept: "Civil Engineering", room: "914", email: "enamul.quadir@iubat.edu", phone: "01764366750" },
    { name: "Engr Md Anisur Rahman", designation: "Associate Professor", dept: "Civil Engineering", room: "511", email: "anisur.rahman@iubat.edu", phone: "01813636545" },
    { name: "Anisuzzaman Khan", designation: "Assistant Professor", dept: "Civil Engineering", room: "923", email: "anis.zaman@iubat.edu", phone: "01913300984" },
    { name: "Drs. Md. Abdul Basit", designation: "Assistant Professor and Coordinator (OBE)", dept: "Civil Engineering", room: "922", email: "abdul.basit@iubat.edu", phone: "01995638047" },
    { name: "Syeda Rezwana Jannat", designation: "Assistant Professor", dept: "Civil Engineering", room: "923", email: "rezwanajannat@iubat.edu", phone: "01750550566" },
    { name: "Mr.Nahidul Islam", designation: "Assistant Professor", dept: "Civil Engineering", room: "1116", email: "n.islam@iubat.edu", phone: "01759728639" },
    { name: "Mohammad Osman Ghone", designation: "Assistant Professor", dept: "Civil Engineering", room: "315", email: "osman.ghone@iubat.edu", phone: "01687387421" },
    { name: "Matiur Rahman Raju", designation: "Assistant Professor", dept: "Civil Engineering", room: "511", email: "mraju.civil@iubat.edu", phone: "01674852050" },
    { name: "Rifat Sumona Mollik", designation: "Assistant Professor", dept: "Civil Engineering", room: "714", email: "sumona.mollik@iubat.edu", phone: "01747254405" },
    { name: "Ishraq Tasnim Hossain", designation: "Assistant Professor", dept: "Civil Engineering", room: "709", email: "ishraq.ce@iubat.edu", phone: "01682225850" },
    { name: "Asma Ul Hosna", designation: "Senior Lecturer", dept: "Civil Engineering", room: "710", email: "asmaul.ce@iubat.edu", phone: "01639808032" },
    { name: "Md.Emdadul Haque", designation: "Lecturer", dept: "Civil Engineering", room: "321", email: "emdadul.civil@iubat.edu", phone: "01624959519" },
    { name: "Saif Ahmed Santo", designation: "Lecturer", dept: "Civil Engineering", room: "511", email: "saif.ce@iubat.edu", phone: "01953311950" },
    { name: "Farhan Fahad Tonmoy", designation: "Lecturer", dept: "Civil Engineering", room: "917", email: "farhan.ce@iubat.edu", phone: "01521434121" },
    { name: "Md.Safwan Kabir Bhuiya", designation: "Lecturer", dept: "Civil Engineering", room: "709", email: "safwan.ce@iubat.edu", phone: "01950716886" },
    { name: "Md. Hasibul Hassan", designation: "Lecturer", dept: "Civil Engineering", room: "1113", email: "hassan.ce@iubat.edu", phone: "01764621301" },
    { name: "Md.Majidur Rahman", designation: "Lecturer", dept: "Civil Engineering", room: "717", email: "majidurrahman.ce@iubat.edu", phone: "01703632606" },
    { name: "Nashia Alam Liana", designation: "Lecturer", dept: "Civil Engineering", room: "613", email: "liana.ce@iubat.edu", phone: "01962377006" },
    { name: "Sayan IIham", designation: "Lecturer", dept: "Civil Engineering", room: "1020", email: "sayan.ce@iubat.edu", phone: "01865877838" },
    { name: "Mahfuz Auyon", designation: "Lecturer", dept: "Civil Engineering", room: "1020", email: "auyon.ce@iubat.edu", phone: "01830734140" },
    { name: "Abu Raihan Rifat", designation: "Lecturer", dept: "Civil Engineering", room: "1019", email: "rifat.ce@iubat.edu", phone: "01779566042" },
    { name: "Dr. Mohammad Nyme Uddin", designation: "Assistant Professor", dept: "Civil Engineering", room: "914", email: "nymeuddin.civil@iubat.edu", phone: "01765031869" },
    { name: "Sanjoy Kumar Bhowmik", designation: "Assistant Professor", dept: "Civil Engineering", room: "322", email: "kbsanjoy@iubat.edu", phone: "01675679290" },
    { name: "Md Hishamur Rahman", designation: "Senior Lecturer", dept: "Civil Engineering", room: "314", email: "hishamur@iubat.edu", phone: "8801681570031" },
    { name: "Dr. M. Shamim Miah", designation: "Associate Professor", dept: "Civil Engineering", room: "", email: "mmshamim@iubat.edu", phone: "01979099789" },
    { name: "Md.Tanvir Ehsan Amin", designation: "Senior Lecturer", dept: "Civil Engineering", room: "813", email: "tanvir.ehsan@iubat.edu", phone: "01626009395" },
    { name: "Sumaiya Jarin Ahammed", designation: "Senior Lecturer", dept: "Civil Engineering", room: "923", email: "sumaiya.jarin@iubat.edu", phone: "01715631786" },
    { name: "Dr. Sarder Mohammad Yahya", designation: "Assistant Professor", dept: "Civil Engineering", room: "511", email: "yahya.sarder@iubat.edu", phone: "01841582534" },
    { name: "Kashfia Nahrin Nokshi", designation: "Lecturer", dept: "Civil Engineering", room: "709", email: "kashfia.ce@iubat.edu", phone: "01757774485" },
    { name: "Mr.Khaza Md. Shihab Uddin", designation: "Administrative Officer (BSCE)", dept: "Civil Engineering", room: "318", email: "khaza.shihab@iubat.edu", phone: "01781533387" },
    { name: "Syed Reazul Islam", designation: "Administrative Officer (BSCE)", dept: "Civil Engineering", room: "314", email: "reazul.ao@iubat.edu", phone: "01612322893" },
    { name: "Ismail Hossen", designation: "Administrative Officer (MSc in CE)", dept: "Civil Engineering", room: "315", email: "rafi.ao@iubat.edu", phone: "01623124445" },
    { name: "Md. Anuwer Hossain", designation: "Research Assistant", dept: "Civil Engineering", room: "307", email: "anuwer.ra@iubat.edu", phone: "01639563077" },
    { name: "Professor Dr. Dewan Muhammad Nuruzzaman", designation: "Professor & Dean College of Engineering and Technology, Chair Dept of Mechanical Engineering", dept: "Mechanical Engineering", room: "423", email: "nuruzzaman.me@iubat.edu", phone: "01911394864" },
    { name: "Dr.A.K.M Parvez Iqbal", designation: "Professor & Coordinator", dept: "Mechanical Engineering", room: "423", email: "akm.parvez.iqbal@iubat.edu", phone: "01712973095" },
    { name: "Prof Dr Engr A Z A Saifullah", designation: "Professor", dept: "Mechanical Engineering", room: "418", email: "d_saifullah@iubat.edu", phone: "01715209705" },
    { name: "Engr Abdul Wadud", designation: "Professor", dept: "Mechanical Engineering", room: "515", email: "awadud@iubat.edu", phone: "01733566800" },
    { name: "Dr.A.K.M Solayman Hoque", designation: "Associate Professor", dept: "Mechanical Engineering", room: "413", email: "solayman.hoque@iubat.edu", phone: "01554341140" },
    { name: "Dr. A. K. M. Foysal Ahmed", designation: "Associate Professor", dept: "Mechanical Engineering", room: "414", email: "drfoysal@iubat.edu", phone: "01703259615" },
    { name: "Dr. Nayem Hossain", designation: "Associate Professor", dept: "Mechanical Engineering", room: "NARP RESEARCH LAB", email: "nayem.hossain@iubat.edu", phone: "01913132770" },
    { name: "Arif Md Shahed Iqubal", designation: "Associate Professor", dept: "Mechanical Engineering", room: "411", email: "iqubal.shahed@iubat.edu", phone: "01712628808" },
    { name: "Dr Sazzad-Bin-Sharif", designation: "Associate Professor", dept: "Mechanical Engineering", room: "", email: "sazzad.sharif@iubat.edu", phone: "01775531145" },
    { name: "Dr.Raza Moshwan", designation: "Associate Professor", dept: "Mechanical Engineering", room: "922", email: "moshwan.me@iubat.edu", phone: "01710184372" },
    { name: "Dr Debasish Sarker", designation: "Associate Professor", dept: "Mechanical Engineering", room: "523", email: "dsarker.me@iubat.edu", phone: "01716028786" },
    { name: "Dr.Md.Rakibuzzaman", designation: "Assistant Professor", dept: "Mechanical Engineering", room: "", email: "rakibuzzaman@iubat.edu", phone: "01710139229" },
    { name: "Md.Shamim Rayhan", designation: "Assistant Professor", dept: "Mechanical Engineering", room: "1116", email: "rayhan.me@iubat.edu", phone: "01941482260" },
    { name: "Drs. Zahid Ahsan", designation: "Assistant Professor", dept: "Mechanical Engineering", room: "713", email: "zahid.me@iubat.edu", phone: "01734098875" },
    { name: "Sarfaraz Aziz", designation: "Senior Lecturer", dept: "Mechanical Engineering", room: "519", email: "sarfaraz.me@iubat.edu", phone: "01875030991" },
    { name: "Muhammad Ali Ayub Towhidi", designation: "Senior Lecturer", dept: "Mechanical Engineering", room: "814", email: "towhidi.me@iubat.edu", phone: "01706661059" },
    { name: "Ishtiaq Moksud", designation: "Lecturer", dept: "Mechanical Engineering", room: "619", email: "ishtiaq.me@iubat.edu", phone: "01321578921" },
    { name: "Md. Arafath Rahman Nishat", designation: "Lecturer", dept: "Mechanical Engineering", room: "", email: "nishat.me@iubat.edu", phone: "01822372677" },
    { name: "Md Sharifuzzaman", designation: "Senior Lecturer", dept: "Mechanical Engineering", room: "313", email: "sharifuzzaman@iubat.edu", phone: "01716482800" },
    { name: "Md Abdul Karim", designation: "Assistant Professor", dept: "Mechanical Engineering", room: "811", email: "abdul.karim@iubat.edu", phone: "01623094394" },
    { name: "Md.Didarul Islam", designation: "Senior Lecturer", dept: "Mechanical Engineering", room: "812", email: "didar@iubat.edu", phone: "01751858566" },
    { name: "Dr.AKM Asif Iqbal", designation: "Professor", dept: "Mechanical Engineering", room: "915", email: "asifiqbal.me@iubat.edu", phone: "01729851425" },
    { name: "Ms. Akliza Akhter", designation: "Administrative Officer (BSME)", dept: "Mechanical Engineering", room: "421", email: "akhy@iubat.edu", phone: "01676605454" },
    { name: "Md. Abu Bakar Siddique", designation: "Administrative Officer (BSME)", dept: "Mechanical Engineering", room: "421", email: "ab.siddique102001@gmail.com", phone: "01864678951" },
    { name: "Safiul Islam", designation: "Research Assistant", dept: "Mechanical Engineering", room: "NARP RESEARCH LAB", email: "safiul.ra@iubat.edu", phone: "8801709186176" },
    { name: "Dr.Golam Rasul", designation: "Professor & Chair", dept: "Bachelor of Arts in Economics", room: "317", email: "dr.rasul.econ@iubat.edu", phone: "01798178727" },
    { name: "Sumaiya Nabi Khan", designation: "Lecturer", dept: "Bachelor of Arts in Economics", room: "613", email: "sumaiya_econ@iubat.edu", phone: "01720446830" },
    { name: "Md. Titu Miah", designation: "Lecturer", dept: "Bachelor of Arts in Economics", room: "1115", email: "titu@iubat.edu", phone: "01621476538" },
    { name: "Oyshi Das Tonny", designation: "Lecturer", dept: "Bachelor of Arts in Economics", room: "1112", email: "oyshi.econ@iubat.edu", phone: "01791533522" },
    { name: "Md. Moudud Hasan Saikot", designation: "Lecturer", dept: "Bachelor of Arts in Economics", room: "519", email: "hasan.econ@iubat.edu", phone: "01763718807" },
    { name: "Chowdhury Amir Abdullah", designation: "Lecturer", dept: "Bachelor of Arts in Economics", room: "919", email: "abdullahamir52@gmail.com", phone: "01521110841" },
    { name: "Dr. Muhammad Mehedi Masud", designation: "Adjunct Research Fellow", dept: "Bachelor of Arts in Economics", room: "", email: "", phone: "" },
    { name: "Dr. Rulia Akhtar", designation: "Adjunct Research Fellow", dept: "Bachelor of Arts in Economics", room: "", email: "", phone: "" },
    { name: "Dr. Md. Isahaque Ali", designation: "Adjunct Research Fellow", dept: "Bachelor of Arts in Economics", room: "", email: "", phone: "" },
    { name: "Prof. Dr Naresh Kumar", designation: "Adjunct Research Fellow", dept: "Bachelor of Arts in Economics", room: "", email: "nareshmy@gmail.com / naresh@umk.edu.my", phone: "60193402420" },
    { name: "Farzana Siddika", designation: "Administrative Officer (Economics)", dept: "Bachelor of Arts in Economics", room: "317", email: "farzana.ao@iubat.edu", phone: "01521497396" },
    { name: "Dr. Bijoy Lal Basu", designation: "Advisor (English)", dept: "Department of English and Modern Languages", room: "321", email: "bijoy.basu@iubat.edu", phone: "01817597691" },
    { name: "Abu Taher Mohammad Sirajul Alom", designation: "Associate Professor & Chairman", dept: "Department of English and Modern Languages", room: "105", email: "atmsalom@iubat.edu", phone: "01819129125" },
    { name: "Lulu-Al- Marzan", designation: "Assistant Professor & Coordinator (Department)", dept: "Department of English and Modern Languages", room: "105", email: "marzan@iubat.edu", phone: "01303035762" },
    { name: "Md Forhad Hossain", designation: "Associate Professor & Coordinator (Proficiency Course)", dept: "Department of English and Modern Languages", room: "108", email: "forhadhossain@iubat.edu", phone: "01641380433" },
    { name: "Prof. Dr. Md Momtazur Rahman", designation: "Professor & Registrar", dept: "Department of English and Modern Languages", room: "219", email: "momtazur@iubat.edu", phone: "01727215512" },
    { name: "Wg Cdr Kazi Abdul Matin (Retd)", designation: "Professor (Special)", dept: "Department of English and Modern Languages", room: "413", email: "matinka@iubat.edu", phone: "01731403793" },
    { name: "Mohammad Sakar Mahmod", designation: "Associate Professor", dept: "Department of English and Modern Languages", room: "923", email: "msmahmod@iubat.edu", phone: "01718860866" },
    { name: "Ariful Insan Emon", designation: "Associate Professor", dept: "Department of English and Modern Languages", room: "812", email: "insan@iubat.edu", phone: "01712128452" },
    { name: "Md Jashim Uddin", designation: "Associate Professor", dept: "Department of English and Modern Languages", room: "314", email: "jashim.uddin@iubat.edu", phone: "01917862692" },
    { name: "Md Kawsar Uddin", designation: "Associate Professor", dept: "Department of English and Modern Languages", room: "813", email: "ukawsar@iubat.edu", phone: "01687745878" },
    { name: "Fawzia Yakub", designation: "Associate Professor", dept: "Department of English and Modern Languages", room: "313", email: "fawzia@iubat.edu", phone: "01810150383" },
    { name: "A K M Aminur Rashid", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "922", email: "akmaminur.rashid@iubat.edu", phone: "01911127825" },
    { name: "Habeeb Faruk Khan", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "522", email: "habeeb_farukkhan@iubat.edu", phone: "01677101067" },
    { name: "Md.Kawser Ahmed", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "922", email: "kawser.ahmed@iubat.edu", phone: "01751539582" },
    { name: "Md.Nurul Haque", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "1114", email: "mhaque.eng@iubat.edu", phone: "01717239610" },
    { name: "Md.Raihan Bin Shafiq", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "1014", email: "raihan.eng@iubat.edu", phone: "01675209057" },
    { name: "Kazi Imran Hossain", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "812", email: "imrankazi@iubat.edu", phone: "01756583344" },
    { name: "Sheikh Saifullah Ahmed", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "716", email: "ahmed.saifullah@iubat.edu", phone: "01925674041" },
    { name: "Mohammad Alamgir Sikder", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "511", email: "asikder.eng@iubat.edu", phone: "01701830811" },
    { name: "Nusrat Farhana", designation: "Senior Lecturer", dept: "Department of English and Modern Languages", room: "710", email: "nusrat.farhana@iubat.edu", phone: "01747889774" },
    { name: "Md.Zubair Rahman", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1012", email: "zubair.de@iubat.edu", phone: "01670176211" },
    { name: "HM Nazmul Alam", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "811", email: "nazmulalam.eng@iubat.edu", phone: "01722378919" },
    { name: "Firoz Akanda", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "810", email: "akanda.doe@iubat.edu", phone: "01992502104" },
    { name: "Raffat Arman Islam", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "713", email: "raffatarman.eng@iubat.edu", phone: "01535435640" },
    { name: "Dilara Dilshad", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1015", email: "dilshaddilara.eng@iubat.edu", phone: "01842301020" },
    { name: "Tasnia Talukder", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1113", email: "tasnia.eng@iubat.edu", phone: "01737148120" },
    { name: "Nashin Sayara", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1114", email: "nashin.eng@iubat.edu", phone: "01926585712" },
    { name: "Maflufa Faiza Islam", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "810", email: "faiza.eng@iubat.edu", phone: "01677516870" },
    { name: "Khadizatul Kobra", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1112", email: "khadiza.eng@iubat.edu", phone: "01744338324" },
    { name: "Sk.Sabbir Ahmed", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1012", email: "sabbir.eng@iubat.edu", phone: "01864454215" },
    { name: "Nowshin Tabassum", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1014", email: "nowshin.eng@iubat.edu", phone: "01690083061" },
    { name: "Farenda Tasneem", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "723", email: "farenda.eng@iubat.edu", phone: "01730262553" },
    { name: "Rifat Sultana", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "613", email: "rifat.eng@iubat.edu", phone: "01676453425" },
    { name: "Hasiba Mahmud", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1016", email: "hasiba.eng@iubat.edu", phone: "01621909074" },
    { name: "Tanha Bentea Zaman", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "1013", email: "tanha.eng@iubat.edu", phone: "01725495242" },
    { name: "Sadia Sarker Aony", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "122", email: "sadia.eng@iubat.edu", phone: "01533865413" },
    { name: "Fatema Tasnim", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "122", email: "fatema.eng@iubat.edu", phone: "01892696458" },
    { name: "Md. Sarowar Kamal Bhuiyan", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "619", email: "sarowar.eng@iubat.edu", phone: "01628558666" },
    { name: "Md. Sifatuzzaman Parvej", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "619", email: "mparvej.eng@iubat.edu", phone: "01868887777" },
    { name: "Nudrat Nasiha Hoque", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "417", email: "nudrat.eng@iubat.edu", phone: "01618714848" },
    { name: "Taylor Ewert", designation: "Semester Faculty", dept: "Department of English and Modern Languages", room: "212", email: "taylor@iubat.edu", phone: "" },
    { name: "Jannatul Fardous", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "709", email: "jannatul.eng@iubat.edu", phone: "01615054894" },
    { name: "Md Masudur Rahman", designation: "Assistant Professor", dept: "Department of English and Modern Languages", room: "409", email: "masudur.rahman@iubat.edu", phone: "01711348874" },
    { name: "Mr.Reedwan Habib", designation: "Senior Lecturer", dept: "Department of English and Modern Languages", room: "713", email: "reedwan.habib@iubat.edu", phone: "01818005176" },
    { name: "Mili Saha", designation: "Adjunct Research Fellow", dept: "Department of English and Modern Languages", room: "", email: "", phone: "" },
    { name: "Nushat Khan", designation: "Lecturer", dept: "Department of English and Modern Languages", room: "713", email: "nushat.eng@iubat.edu", phone: "01922887380" },
    { name: "Mr.Shourav Roy", designation: "Administrative Officer", dept: "Department of English and Modern Languages", room: "107", email: "shourav@iubat.edu", phone: "01671117465" },
    { name: "Dr Md Harun Ur Rashid", designation: "Professor & Coordinator", dept: "Department of Chemistry", room: "314", email: "mrashid@iubat.edu", phone: "01711231077" },
    { name: "Dr.Md.Wahab Khan", designation: "Professor", dept: "Department of Chemistry", room: "721", email: "mwkhan.chem@iubat.edu", phone: "01552466300" },
    { name: "Dr. Naima Sharmin", designation: "Associate Professor", dept: "Department of Chemistry", room: "710", email: "naima.sharmin@iubat.edu", phone: "01765843090" },
    { name: "Dr. Md. Jahidul Islam", designation: "Assistant Professor", dept: "Department of Chemistry", room: "1113", email: "jahidul.che@iubat.edu", phone: "01320786547" },
    { name: "Ajoy Kumer", designation: "Assistant Professor", dept: "Department of Chemistry", room: "522", email: "ajoy.chem@iubat.edu", phone: "01770568699" },
    { name: "Dr. Saiful Islam", designation: "Assistant Professor", dept: "Department of Chemistry", room: "717", email: "dislam.chem@iubat.edu", phone: "01905865714" },
    { name: "Dr. Md. Abu Hanif", designation: "Assistant Professor", dept: "Department of Chemistry", room: "1116", email: "hanif.chem@iubat.edu", phone: "01727178686" },
    { name: "Mehedi Hasan", designation: "Lecturer", dept: "Department of Chemistry", room: "1119", email: "hemel.che@iubat.edu", phone: "01774004015" },
    { name: "Dr. Farjana Hossain", designation: "Assistant Professor", dept: "Department of Philosophy", room: "1117", email: "farjana.hossain@iubat.edu", phone: "01732131431" },
    { name: "Dr. Md. Shamsul Haque", designation: "Assistant Professor", dept: "Department of Philosophy", room: "715", email: "shamsul.haque@iubat.edu", phone: "01873224888" },
    { name: "Dr Ferdoushi Begum", designation: "Professor (Semester Faculty)", dept: "Department of Philosophy", room: "218", email: "begum.ferdoushi@iubat.edu", phone: "01713046992" },
    { name: "Taslima Akter", designation: "Lecturer", dept: "Department of Philosophy", room: "715", email: "taslima.caas@iubat.edu", phone: "01703026870" },
    { name: "Kaniz Kakon", designation: "Assistant Professor", dept: "Department of Philosophy", room: "412", email: "kanizkakon@iubat.edu", phone: "01717235120" },
    { name: "Professor Selina Nargis", designation: "Treasurer & Director Administration", dept: "Department of Psychology", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Roksana Parvin", designation: "Assistant Professor", dept: "Department of Psychology", room: "1018", email: "roksana.parvin@iubat.edu", phone: "01722763265" },
    { name: "Mallika De", designation: "Assistant Professor", dept: "Department of Psychology", room: "815", email: "mallika@iubat.edu", phone: "01997048611" },
    { name: "Mr.Arobindu Dash", designation: "Assistant Professor", dept: "Department of Psychology", room: "923", email: "arobindu.psy@iubat.edu", phone: "01515613197" },
    { name: "Tahmina Nazneen", designation: "Lecturer", dept: "Department of Psychology", room: "714", email: "nazneen.psy@iubat.edu", phone: "01882121974" },
    { name: "Mr. Mahady Hasan", designation: "Lecturer", dept: "Department of Psychology", room: "1113", email: "mahady.psy@iubat.edu", phone: "01734133536" },
    { name: "Mehrin Mostafa Mumu", designation: "Lecturer & Psychological Counsellor", dept: "Department of Psychology", room: "105", email: "mehrin.psy@iubat.edu", phone: "01623281202" },
    { name: "Nargis Jahan", designation: "Professor (Semester Faculty)", dept: "Department of Psychology", room: "218", email: "nargis.jahan@iubat.edu", phone: "01552320660" },
    { name: "Md . Feroz Sharif", designation: "Lecturer", dept: "Department of Psychology", room: "519", email: "sharif.psy@iubat.edu", phone: "01722987225" },
    { name: "Dr. Md. Isahaque Ali", designation: "Adjunct Research Fellow", dept: "Department of Psychology", room: "", email: "", phone: "" },
    { name: "Saiyeda Asea Asha", designation: "Lecturer", dept: "Department of Psychology", room: "716", email: "saiyeda.psy@iubat.edu", phone: "01912095656" },
    { name: "Prof Dr Suraiya Nafis", designation: "Adviser", dept: "Department of Physics", room: "", email: "", phone: "" },
    { name: "Dr Md Mahbubur Rahman", designation: "Professor & Coordinator", dept: "Department of Physics", room: "417", email: "mahbubur.rahman@iubat.edu", phone: "01948951679" },
    { name: "Zahurul Amin", designation: "Assistant Professor", dept: "Department of Physics", room: "412", email: "zahurul.amin@iubat.edu", phone: "01717575036" },
    { name: "Mohammad Hafizur Rahman Khan", designation: "Assistant Professor", dept: "Department of Physics", room: "812", email: "mhr.khan@iubat.edu", phone: "01978833055" },
    { name: "F A Sabbir Ahamed", designation: "Assistant Professor", dept: "Department of Physics", room: "719", email: "sabbir.ahamed@iubat.edu", phone: "01725328352" },
    { name: "Imrose Jahan", designation: "Assistant Professor", dept: "Department of Physics", room: "1012", email: "imrose.jahan@iubat.edu", phone: "01778308630" },
    { name: "Mst. Ummey Habiba Musfika", designation: "Lecturer", dept: "Department of Physics", room: "723", email: "musfika@iubat.edu", phone: "01734348065" },
    { name: "Mohaiminul Islam Nayeem", designation: "Lecturer", dept: "Department of Physics", room: "922", email: "nayeem.phy@iubat.edu", phone: "01749333466" },
    { name: "Tamal Chakrabarty", designation: "Lecturer", dept: "Department of Physics", room: "619", email: "tamal.phy@iubat.edu", phone: "01755017691" },
    { name: "Prof. Dr. Mayeen Uddin Khandaker", designation: "Adjunct Research Professor", dept: "Department of Physics", room: "", email: "", phone: "" },
    { name: "Dr.Md. Shafiqul Islam", designation: "Assistant Professor", dept: "Department of Physics", room: "", email: "shafiq.phy@iubat.edu", phone: "01742590695" },
    { name: "Priyanka Das Tithi", designation: "Assistant Professor", dept: "Department of Physics", room: "613", email: "tithi@iubat.edu", phone: "01711287755" },
    { name: "Dilip Kumar Das", designation: "Associate Professor & Coordinator", dept: "Department of Mathematics", room: "411", email: "dilipkdas@iubat.edu", phone: "01711196050" },
    { name: "Dr. Rajib Lochan Das", designation: "Professor & Additional Director IQAC", dept: "Department of Mathematics", room: "125", email: "dasrajib@iubat.edu", phone: "01771110369" },
    { name: "Dr. Sajal Saha", designation: "Professor Director, Miyan Research Institute", dept: "Department of Mathematics", room: "Miyan Research Institute", email: "sajal.saha@iubat.edu", phone: "01724493092" },
    { name: "Dr.Rashida Pervin Lily", designation: "Associate Professor", dept: "Department of Mathematics", room: "713", email: "rashida_pervin@iubat.edu", phone: "01726362307" },
    { name: "Dr.Rehana Parvin", designation: "Associate Professor", dept: "Department of Mathematics", room: "713", email: "rehana_parvin@iubat.edu", phone: "01749432487" },
    { name: "Md Moksud Islam", designation: "Associate Professor", dept: "Department of Mathematics", room: "813", email: "mislam@iubat.edu", phone: "01746433456" },
    { name: "Md Shafiqul Islam", designation: "Associate Professor", dept: "Department of Mathematics", room: "412", email: "shafiqul.islam@iubat.edu", phone: "01710507576" },
    { name: "Md Saiduzzaman", designation: "Associate Professor", dept: "Department of Mathematics", room: "412", email: "szaman@iubat.edu", phone: "01751002566" },
    { name: "Dr. Fatema Tuj Johora", designation: "Assistant Professor", dept: "Department of Mathematics", room: "714", email: "fatema.johorea@iubat.edu", phone: "01914209939" },
    { name: "Dr.Shahina Akter", designation: "Assistant Professor", dept: "Department of Mathematics", room: "715", email: "shahina.qs@iubat.edu", phone: "01302637089" },
    { name: "Drs. Sadiya Akhter", designation: "Assistant Professor", dept: "Department of Mathematics", room: "1012", email: "sadiya.akhter@iubat.edu", phone: "01940989942" },
    { name: "B. M. Jewel Rana", designation: "Assistant Professor", dept: "Department of Mathematics", room: "1114", email: "jewel.math@iubat.edu", phone: "01711444759" },
    { name: "Arnab Mukherjee", designation: "Lecturer", dept: "Department of Mathematics", room: "1115", email: "arnab.math@iubat.edu", phone: "01986258272" },
    { name: "Sinthia Sobnom", designation: "Lecturer", dept: "Department of Mathematics", room: "723", email: "sinthia.qs@iubat.edu", phone: "01781816311" },
    { name: "Moniruzzaman Bhuyan", designation: "Lecturer", dept: "Department of Mathematics", room: "1015", email: "bhuyan.qs@iubat.edu", phone: "01914621954" },
    { name: "Sadia Islam Rukaiya", designation: "Lecturer", dept: "Department of Mathematics", room: "1014", email: "rukaiya.math@iubat.edu", phone: "01533727364" },
    { name: "Sajeeb Hossain", designation: "Lecturer", dept: "Department of Mathematics", room: "1116", email: "sajeeb.math@iubat.edu", phone: "01521204227" },
    { name: "Abdullah Al Mamun", designation: "Lecturer", dept: "Department of Mathematics", room: "820", email: "mamun.qs@iubat.edu", phone: "01677994921" },
    { name: "Torikul Islam", designation: "Lecturer", dept: "Department of Mathematics", room: "820", email: "torikul.math@iubat.edu", phone: "01737483625" },
    { name: "Md.Amran Hossan Mojamder", designation: "Lecturer", dept: "Department of Mathematics", room: "815", email: "amran.hossan@iubat.edu", phone: "01537194497" },
    { name: "Asma Akter", designation: "Senior Lecturer", dept: "Department of Mathematics", room: "1013", email: "asma.akter@iubat.edu", phone: "01878938303" },
    { name: "Sontosh Kumar Sahani", designation: "Lecturer", dept: "Department of Mathematics", room: "811", email: "sksahani@iubat.edu", phone: "01717966483" },
    { name: "Goutam Saha", designation: "Adjunct Research Fellow", dept: "Department of Mathematics", room: "", email: "gsahamath@du.ac.bd", phone: "" },
    { name: "Dr.Khandoker Saif Uddin", designation: "Professor & Coordinator", dept: "Department of Statistics", room: "816", email: "kh.saifuddin@iubat.edu", phone: "01716923295" },
    { name: "Rehana Parvin", designation: "Assistant Professor", dept: "Department of Statistics", room: "716", email: "rehana.parvin@iubat.edu", phone: "01911751193" },
    { name: "Mohammed Motaher Hossain", designation: "Assistant Professor", dept: "Department of Statistics", room: "921", email: "motaher@iubat.edu", phone: "01744375619" },
    { name: "Tamanna Siddiqua Ratna", designation: "Assistant Professor", dept: "Department of Statistics", room: "922", email: "tamanna.siddiqua@iubat.edu", phone: "01520102752" },
    { name: "Tanzin Akhter", designation: "Assistant Professor", dept: "Department of Statistics", room: "714", email: "tanzin.akhter@iubat.edu", phone: "01515210031" },
    { name: "Nusrat Jahan Sathi", designation: "Lecturer", dept: "Department of Statistics", room: "710", email: "sathi.stat@iubat.edu", phone: "01903109684" },
    { name: "Tofayel Ahmed", designation: "Lecturer", dept: "Department of Statistics", room: "1013", email: "tofayel.stat@iubat.edu", phone: "01738386726" },
    { name: "Tahira Mahbub", designation: "Lecturer", dept: "Department of Statistics", room: "1017", email: "mahbub.qs@iubat.edu", phone: "01681741444" },
    { name: "Rafayet Rahman Ridoy", designation: "Lecturer", dept: "Department of Statistics", room: "1014", email: "ridoy.qs@iubat.edu", phone: "01936436216" },
    { name: "Dr Md Ataur Rahman", designation: "Professor (Special) & Chairman", dept: "Department of Environmental Science", room: "517", email: "marahman@iubat.edu", phone: "01711821908" },
    { name: "Dr. Md. Shafiqul Islam", designation: "Associate Professor", dept: "Department of Environmental Science", room: "1015", email: "dislam.env@iubat.edu", phone: "01714838336" },
    { name: "Dr M Rehan Dastagir", designation: "Associate Professor", dept: "Department of Environmental Science", room: "517", email: "rdastagir@iubat.edu", phone: "01742888829" },
    { name: "Dr. Ferdous Ahmed", designation: "Associate Professor", dept: "Department of Environmental Science", room: "301", email: "ferdous.ahmed@iubat.edu", phone: "01750598586" },
    { name: "Dr. Mariym Sultana Marry", designation: "Assistant Professor", dept: "Department of Environmental Science", room: "415", email: "dmarry.env@iubat.edu", phone: "01301727475" },
    { name: "Dr. Rimana Islam Papry", designation: "Assistant Professor", dept: "Department of Environmental Science", room: "1113", email: "drpapry.env@iubat.edu", phone: "01788952310" },
    { name: "Dr. Momotaz", designation: "Assistant Professor", dept: "Department of Environmental Science", room: "916", email: "momotaz.evs@iubat.edu", phone: "01682665727" },
    { name: "Dr. Sayma Akhter", designation: "Assistant Professor", dept: "Department of Environmental Science", room: "415", email: "sayma.akhter@iubat.edu", phone: "01783445040" },
    { name: "Dr. Mohammad Badruddoza Talukder", designation: "Associate Professor & Chairman", dept: "College of Tourism and Hospitality Management", room: "316", email: "badruddoza.cthm@iubat.edu", phone: "01911620004" },
    { name: "Farzana Al Ferdous", designation: "Associate Professor & Coordinator", dept: "College of Tourism and Hospitality Management", room: "316", email: "faferdous@iubat.edu", phone: "01928516482" },
    { name: "Sk Ershad Hossain", designation: "Associate Professor", dept: "College of Tourism and Hospitality Management", room: "314", email: "sehossain@iubat.edu", phone: "01558549767" },
    { name: "Mohammad Abu Horaira", designation: "Associate Professor", dept: "College of Tourism and Hospitality Management", room: "811", email: "horaira@iubat.edu", phone: "01716767828" },
    { name: "Mohammad Mofasserul Islam", designation: "Assistant Professor", dept: "College of Tourism and Hospitality Management", room: "414", email: "mofasserul@iubat.edu", phone: "01912810617" },
    { name: "Mr.Shafiqul Islam", designation: "Assistant Professor", dept: "College of Tourism and Hospitality Management", room: "1114", email: "shafiqul.cthm@iubat.edu", phone: "01822000938" },
    { name: "Sazzadur Rahman", designation: "Lecturer", dept: "College of Tourism and Hospitality Management", room: "921", email: "sazzadur.thm@iubat.edu", phone: "01851133813" },
    { name: "Sumyia Akter", designation: "Lecturer", dept: "College of Tourism and Hospitality Management", room: "923", email: "sumyia.cthm@iubat.edu", phone: "01521748908" },
    { name: "Md.Imran Hossain", designation: "Lecturer", dept: "College of Tourism and Hospitality Management", room: "814", email: "imran.thm@iubat.edu", phone: "01878845805" },
    { name: "Dr.Md.Sazzad Hossain", designation: "Assistant Professor", dept: "College of Tourism and Hospitality Management", room: "817", email: "dr.sazzad.thm@iubat.edu", phone: "01863127521" },
    { name: "Ajit Kumar Mondal", designation: "Administrative Officer (BATHM)", dept: "College of Tourism and Hospitality Management", room: "316", email: "ajit.kumar@iubat.edu", phone: "01733813820" },
    { name: "Professor Dr. SK Nazmul Huda", designation: "Professor & Chairman", dept: "Department of Public Health", room: "616", email: "snhuda@iubat.edu", phone: "01730433812" },
    { name: "Alex Berland", designation: "Visiting Professor", dept: "Department of Public Health", room: "", email: "", phone: "" },
    { name: "Prof Dr John Richards", designation: "Visiting Professor", dept: "Department of Public Health", room: "", email: "", phone: "" },
    { name: "Dr.Shazzat Rahat Hossain", designation: "Lecturer", dept: "Department of Public Health", room: "523", email: "drshazzat.mph@iubat.edu", phone: "01716262845" },
    { name: "Quazi AKM Mohiul Islam", designation: "Visiting Faculty", dept: "Department of Public Health", room: "215", email: "qmohiul@gmail.com", phone: "01941587100" },
    { name: "Professor Dr. Ziaul Islam", designation: "Visiting Faculty", dept: "Department of Public Health", room: "215", email: "dr.ziaul.islam@gmail.com", phone: "01726693778" },
    { name: "Dr. Syeda Naushin Parnini", designation: "Adjunct Faculty", dept: "Department of Public Health", room: "215", email: "parnini12@gmail.com", phone: "015346292291" },
    { name: "Dr. Md. Shahinul Islam", designation: "Adjunct Faculty", dept: "Department of Public Health", room: "215", email: "shahinul79@gmail.com", phone: "01319378364" },
    { name: "Md Ibrahim Hossain Mamun", designation: "Administrative Officer", dept: "Department of Public Health", room: "616", email: "mamun.ao@iubat.edu", phone: "01642020910" },
    { name: "Dr Karen Lund", designation: "Senior Advisor", dept: "College of Nursing", room: "", email: "lund.karen1@gmail.com", phone: "" },
    { name: "Alex Berland", designation: "Adviser", dept: "College of Nursing", room: "", email: "", phone: "" },
    { name: "Dr. Sandra Rumi Madhu", designation: "Chair & Associate Professor", dept: "College of Nursing", room: "423", email: "chair_cn@iubat.edu", phone: "01729967297" },
    { name: "Shuvashish Das Bala", designation: "Associate Professor & Coordinator", dept: "College of Nursing", room: "423", email: "shuvashish@iubat.edu", phone: "01777643131" },
    { name: "Priyanka Das Sharmi", designation: "Assistant Professor", dept: "College of Nursing", room: "1015", email: "priyanka.sharmi@iubat.edu", phone: "01745611852" },
    { name: "Khadiza Akter", designation: "Assistant Professor", dept: "College of Nursing", room: "613", email: "khadiza.cn@iubat.edu", phone: "01989155809" },
    { name: "Silvia Ferdousi", designation: "Assistant Professor", dept: "College of Nursing", room: "710", email: "silvia@iubat.edu", phone: "01742432872" },
    { name: "Rubel Hossain", designation: "Lecturer", dept: "College of Nursing", room: "1116", email: "nurserubel@iubat.edu", phone: "01866074200" },
    { name: "Jannatul Ferdows", designation: "Lecturer", dept: "College of Nursing", room: "812", email: "jannatul.rn@iubat.edu", phone: "01780544937" },
    { name: "Md.Abeed Ahsan Shourav", designation: "Lecturer", dept: "College of Nursing", room: "815", email: "mshourav.cn@iubat.edu", phone: "01706643091" },
    { name: "Mr.Mostaque Ahmed", designation: "Lecturer", dept: "College of Nursing", room: "813", email: "mostaque@iubat.edu", phone: "01917577778" },
    { name: "Faisal Mahmud", designation: "Lecturer", dept: "College of Nursing", room: "709", email: "faisal.cn@iubat.edu", phone: "01788220061" },
    { name: "Md. Iahia Mia", designation: "Lecturer", dept: "College of Nursing", room: "1115", email: "iahia.cn@iubat.edu", phone: "01790377824" },
    { name: "Md. Mahedi Hasan", designation: "Lecturer", dept: "College of Nursing", room: "1112", email: "shaykat.cn@iubat.edu", phone: "01620680176" },
    { name: "Dolon Mondol", designation: "Lecturer", dept: "College of Nursing", room: "1012", email: "dolonmondol.con@iubat.edu", phone: "01797222670" },
    { name: "Luke Karmokar Shouro", designation: "Clinical Instructor", dept: "College of Nursing", room: "1103", email: "shouro.cn@iubat.edu", phone: "01915114468" },
    { name: "MST. Tamanna Aktar", designation: "Clinical Instructor", dept: "College of Nursing", room: "1103", email: "tamanna.cn@iubat.edu", phone: "01785512925" },
    { name: "Md. Aburayhan Al Biruni", designation: "Clinical Instructor", dept: "College of Nursing", room: "1103", email: "aburayhan.cn@iubat.edu", phone: "01708981781" },
    { name: "Sristy Jennifer Baroi", designation: "Clinical Instructor", dept: "College of Nursing", room: "1103", email: "sristyjennifer.cn@iubat.edu", phone: "018887483397" },
    { name: "Moustaq Karim Khan Rony", designation: "Adjunct Research Associate", dept: "College of Nursing", room: "", email: "", phone: "" },
    { name: "Mr.Ishraq Rahman", designation: "Senior Lecturer", dept: "College of Nursing", room: "", email: "ishraq.rahman@iubat.edu", phone: "01760505627" },
    { name: "Ms.Ayesha Siddika Rimi", designation: "Senior Lecturer", dept: "College of Nursing", room: "424", email: "ayesha.rimi@iubat.edu", phone: "01717699640" },
    { name: "Emtiaz Ahamed Mainul", designation: "Administrative Officer (BSN)", dept: "College of Nursing", room: "423", email: "emtiaz_mainul@iubat.edu", phone: "01761197070" },
    { name: "Professor Dr Abdur Rab", designation: "Vice-Chancellor", dept: "Vice Chancellor`s Office", room: "209", email: "vc@iubat.edu", phone: "0255892471" },
    { name: "Mr.Arafat-Ul Islam", designation: "PA to Vice-Chancellor", dept: "Vice Chancellor`s Office", room: "208", email: "arafat@iubat.edu", phone: "01767086814" },
    { name: "Prof Dr. Mohammad Mahmudur Rahman", designation: "Pro Vice-Chancellor", dept: "Pro Vice Chancellor`s office", room: "214", email: "pro-vc@iubat.edu", phone: "01819243979" },
    { name: "Sanchay Kanti Barua", designation: "PS to Pro-VC", dept: "Pro Vice Chancellor`s office", room: "208", email: "sanchay@iubat.edu", phone: "01819547564" },
    { name: "Professor Selina Nargis", designation: "Treasurer & Director Administration", dept: "Accounts and Audit", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Md Alamin Islam", designation: "Director", dept: "Accounts and Audit", room: "103", email: "malamin@iubat.edu", phone: "01721570104" },
    { name: "Mohammad Ali", designation: "Sr. Accounts Officer", dept: "Accounts and Audit", room: "103", email: "m.ali@iubat.edu", phone: "01816850238" },
    { name: "Md. Lutfar Rahman", designation: "Sr. Accounts Officer", dept: "Accounts and Audit", room: "103", email: "lutfar@iubat.edu", phone: "01568121533" },
    { name: "Miraj Hosen", designation: "Sr. Accounts Officer", dept: "Accounts and Audit", room: "103", email: "miraj@iubat.edu", phone: "01762382111" },
    { name: "Sanchita Parvin", designation: "Accounts Officer", dept: "Accounts and Audit", room: "103", email: "sanchita@iubat.edu", phone: "01990181412" },
    { name: "Mst Shafia Akther Saon", designation: "Accounts Officer", dept: "Accounts and Audit", room: "103", email: "shawn@iubat.edu", phone: "01737766481" },
    { name: "Sanjida Sultana", designation: "Accounts Officer", dept: "Accounts and Audit", room: "103", email: "sanzida@iubat.edu", phone: "01937042490" },
    { name: "Brig Gen Dr Md Zahid Hossain (Retd)", designation: "Controller of Examinations", dept: "Controller of Examinations", room: "220", email: "controller@iubat.edu", phone: "01716834969" },
    { name: "Md. Jahangir Alam", designation: "Assistant Registrar", dept: "Controller of Examinations", room: "220", email: "jahangir.alam@iubat.edu", phone: "01914315496" },
    { name: "Prof. Dr. Md Momtazur Rahman", designation: "Professor & Registrar", dept: "OFFICE OF THE REGISTRAR", room: "219", email: "registrar@iubat.edu", phone: "01727215512" },
    { name: "Rizna Nahar", designation: "Deputy Registrar", dept: "OFFICE OF THE REGISTRAR", room: "222", email: "rizna@iubat.edu", phone: "01722166084" },
    { name: "Yasmin Jahan", designation: "Assistant Registrar", dept: "OFFICE OF THE REGISTRAR", room: "223", email: "yasmin.jahan@iubat.edu", phone: "01978066680" },
    { name: "Abdul Momin", designation: "Assistant Registrar(Monitoring)", dept: "OFFICE OF THE REGISTRAR", room: "302", email: "momin@iubat.edu", phone: "01710082003" },
    { name: "Sahanara", designation: "Assistant Registrar", dept: "OFFICE OF THE REGISTRAR", room: "218", email: "shahana.akter@iubat.edu", phone: "01751399114" },
    { name: "Mst. Nurunnahar Rakhi", designation: "Financial Assistance Officer", dept: "OFFICE OF THE REGISTRAR", room: "223", email: "n.rakhi@iubat.edu", phone: "01719346438" },
    { name: "Md.Iftekhar Alam", designation: "Assistant Registrar", dept: "OFFICE OF THE REGISTRAR", room: "219", email: "iftekhar.pa@iubat.edu", phone: "01681392186" },
    { name: "Md.Sadekur Rahman", designation: "Registrial Associate", dept: "OFFICE OF THE REGISTRAR", room: "222", email: "sadekur.ra@iubat.edu", phone: "01761696115" },
    { name: "Md. Siddiqur Rahman", designation: "Registry Assistant", dept: "OFFICE OF THE REGISTRAR", room: "116", email: "srahman@iubat.edu", phone: "01732426059" },
    { name: "Md. Jahangir Alam", designation: "Registrial Assistant", dept: "OFFICE OF THE REGISTRAR", room: "116", email: "malam.reg@iubat.edu", phone: "01675012851" },
    { name: "Md. Afizer Rahman", designation: "Cl Mon Officer (Monitoring)", dept: "OFFICE OF THE REGISTRAR", room: "302", email: "afizer@iubat.edu", phone: "01681382332" },
    { name: "Md. Aslam Uddin", designation: "Asst Cl M Officer (Monitoring)", dept: "OFFICE OF THE REGISTRAR", room: "302", email: "aslam@iubat.edu", phone: "01869764596" },
    { name: "Md.Rakiul Hassan Mondal", designation: "Asst Cl M Officer (Monitoring)", dept: "OFFICE OF THE REGISTRAR", room: "302", email: "rakiul@iubat.edu", phone: "01717680891" },
    { name: "Md.Manjur Rahman", designation: "Cl M Assistant (Monitoring)", dept: "OFFICE OF THE REGISTRAR", room: "302", email: "manjurrahman.cmu@iubat.edu", phone: "01642029405" },
    { name: "Sk.Asif", designation: "Class Monitoring Assistant", dept: "OFFICE OF THE REGISTRAR", room: "302", email: "asif.cma@iubat.edu", phone: "01682185189" },
    { name: "Mr.Abdul Qader", designation: "CCTV Monitoring Officer", dept: "OFFICE OF THE REGISTRAR", room: "206", email: "abdul.kader@iubat.edu", phone: "01723596121" },
    { name: "Mr.Md Jakerul Islam", designation: "CCTV Office staff", dept: "OFFICE OF THE REGISTRAR", room: "206", email: "jakerul@iubat.edu", phone: "01716303000" },
    { name: "Dr Md Ataur Rahman", designation: "Proctor & Professor (Special)", dept: "Proctor`s Office", room: "517", email: "marahman@iubat.edu", phone: "01711821908" },
    { name: "Ariful Insan Emon", designation: "Associate Professor", dept: "Proctor`s Office", room: "812", email: "insan@iubat.edu", phone: "01712128452" },
    { name: "Md Saidur Rahman", designation: "Assistant Professor", dept: "Proctor`s Office", room: "511", email: "s.rahman@iubat.edu", phone: "01646322666" },
    { name: "Anisuzzaman Khan", designation: "Assistant Professor", dept: "Proctor`s Office", room: "923", email: "anis.zaman@iubat.edu", phone: "01913300984" },
    { name: "Dr. Md.Nur -E-Alam Siddique", designation: "Assistant Professor & Coordinator MBA Program", dept: "Proctor`s Office", room: "102", email: "alam.cba@iubat.edu", phone: "01799806429" },
    { name: "Suhala Lamia", designation: "Assistant Professor", dept: "Proctor`s Office", room: "1014", email: "suhalalamia@iubat.edu", phone: "001931235286" },
    { name: "Priyanka Das Sharmi", designation: "Assistant Professor", dept: "Proctor`s Office", room: "1015", email: "priyanka.sharmi@iubat.edu", phone: "01745611852" },
    { name: "Md.Shamim Rayhan", designation: "Senior Lecturer", dept: "Proctor`s Office", room: "1116", email: "rayhan.me@iubat.edu", phone: "01941482260" },
    { name: "Md. Kamruzzaman", designation: "Lecturer", dept: "Proctor`s Office", room: "709", email: "kamruzzaman@iubat.edu", phone: "01737524433" },
    { name: "Professor Selina Nargis", designation: "Treasurer & Director Administration", dept: "Human Resource Department", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Md Nazmul Haque Khan", designation: "Assistant Director (HR)", dept: "Human Resource Department", room: "218", email: "nazmul@iubat.edu", phone: "01727277166" },
    { name: "Masud Rana", designation: "Officer (HR)", dept: "Human Resource Department", room: "218", email: "attendance@iubat.edu", phone: "01744964016" },
    { name: "Professor Selina Nargis", designation: "Adviser", dept: "Office of Ranking & Recognition", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Dr. Hasanuzzaman Tushar", designation: "Director", dept: "Office of Ranking & Recognition", room: "921", email: "tushar@iubat.edu", phone: "01712498009" },
    { name: "F A Sabbir Ahamed", designation: "Assistant Professor , Assistant Director", dept: "Office of Ranking & Recognition", room: "719", email: "sabbir.ahamed@iubat.edu", phone: "01725328352" },
    { name: "Forhad Ahmed", designation: "Officer (Ranking)", dept: "Office of Ranking & Recognition", room: "", email: "shohanforhadahmed@gmail.com", phone: "01771790078" },
    { name: "Professor Selina Nargis", designation: "Treasurer & Director Administration", dept: "Technical Training Unit", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Engr. Mohammad Abdul Bari", designation: "Director, Technical Training Unit", dept: "Technical Training Unit", room: "720", email: "mabari@iubat.edu", phone: "01816339998" },
    { name: "Engr.Md. Hasanuzzaman", designation: "Trainer,Technical Training Unit", dept: "Technical Training Unit", room: "213", email: "hasan_ttu@iubat.edu", phone: "01327404590" },
    { name: "Nazmus Saquib", designation: "Technical Trainer", dept: "Technical Training Unit", room: "213", email: "nazmus_ttu@iubat.edu", phone: "01914702321" },
    { name: "Md. Amadul Islam", designation: "Trainer", dept: "Technical Training Unit", room: "213", email: "amadul.ttu@iubat.edu", phone: "01933370240" },
    { name: "Md.Sujon Babu", designation: "Trainer", dept: "Technical Training Unit", room: "213", email: "sujon.ttu@iubat.edu", phone: "01755465876" },
    { name: "Professor Selina Nargis", designation: "Treasurer & Director Administration", dept: "Procurement Office", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Md. Robiul Islam", designation: "Deputy Director (Procurement)", dept: "Procurement Office", room: "221", email: "rabiul_pu@iubat.edu", phone: "01730483040" },
    { name: "Md. Abu Sayed", designation: "Assistant Director (Procurement)", dept: "Procurement Office", room: "221", email: "abusayed@iubat.edu", phone: "01915877976" },
    { name: "Professor Selina Nargis", designation: "Advisor", dept: "Miyan Research Institute", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Dr. Sajal Saha", designation: "Professor and Director, Miyan Research Institute", dept: "Miyan Research Institute", room: "Miyan Research Institute", email: "sajal.saha@iubat.edu", phone: "01724493092" },
    { name: "Md.Abdul Ali", designation: "Administrative Officer", dept: "Miyan Research Institute", room: "Miyan Research Institute", email: "abdul.cba@iubat.edu", phone: "01727122783" },
    { name: "Professor Selina Nargis", designation: "Advisor", dept: "International Program Office", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Md Sadekul Islam", designation: "Associate Professor & Director International Program Office", dept: "International Program Office", room: "130", email: "sadekul@iubat.edu", phone: "01911250244" },
    { name: "M.A Mazadur Rahman", designation: "Assistant Director", dept: "International Program Office", room: "123", email: "mazadur_rahman@iubat.edu", phone: "01869848523" },
    { name: "Professor Dr. Belal Ahmed", designation: "Professor & Doctor", dept: "Professor Mahmuda Khanum Healthcare Centre", room: "119", email: "drbelal@iubat.edu", phone: "01819199447" },
    { name: "Mehrin Mostafa Mumu", designation: "Lecturer & Psychological Counsellor", dept: "Professor Mahmuda Khanum Healthcare Centre", room: "105", email: "mehrin.psy@iubat.edu", phone: "01623281202" },
    { name: "Mst.Hasina Khatun", designation: "Clinical Psychologist", dept: "Professor Mahmuda Khanum Healthcare Centre", room: "109", email: "hasina.psy@iubat.edu", phone: "01717241190" },
    { name: "Tahmina Hossain", designation: "Nurse", dept: "Professor Mahmuda Khanum Healthcare Centre", room: "106", email: "tahmina.n@iubat.edu", phone: "01837098534" },
    { name: "Mohammad Razib Khan", designation: "Deputy IT Manager", dept: "Computer Education and Training Center (CETC)", room: "1207", email: "mrkhan@iubat.edu", phone: "01715125209" },
    { name: "Raju Ahmed", designation: "Assistant IT Manager", dept: "Computer Education and Training Center (CETC)", room: "1209", email: "raju@iubat.edu", phone: "01675309060" },
    { name: "Sanjib Debnath", designation: "IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1201", email: "sanjib@iubat.edu", phone: "01558600918" },
    { name: "Manjurul Hoque Riju", designation: "Web Developer and Programmer", dept: "Computer Education and Training Center (CETC)", room: "1209", email: "manjurul@iubat.edu", phone: "01770711100" },
    { name: "Md. Forhad Hossain", designation: "Asstt. IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1211", email: "forhadahmed@iubat.edu", phone: "01919523953" },
    { name: "Md. Shahajahan", designation: "Asstt. IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1207", email: "m.shahajahan@iubat.edu", phone: "01744619373" },
    { name: "Md. Al- Mithun", designation: "Asstt. IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1209", email: "almithun@iubat.edu", phone: "01738733429" },
    { name: "Md. Ear Rahman", designation: "Asstt. IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1209", email: "erahman@iubat.edu", phone: "01726056421" },
    { name: "Md. Al Amin Miah", designation: "Asstt. IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1209", email: "alamin.miah@iubat.edu", phone: "01759758624" },
    { name: "Md. Sabbir Hossain Sifat", designation: "Assistant IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1209", email: "sifat.ict@iubat.edu", phone: "01624092669" },
    { name: "Md. Ripon Hossain", designation: "Assistant IT Officer", dept: "Computer Education and Training Center (CETC)", room: "", email: "ripon.ict@iubat.edu", phone: "01789601473" },
    { name: "Mehedi Hasan", designation: "Assistant IT Officer", dept: "Computer Education and Training Center (CETC)", room: "1207", email: "mehedi.ict@iubat.edu", phone: "01634789697" },
    { name: "Md. Tajul Islam", designation: "Lab Demonstrator", dept: "Civil Lab Assistant", room: "Lab", email: "tajulislam@iubat.edu", phone: "01718845814" },
    { name: "Md. Humaun Kabir", designation: "Lab Demonstrator", dept: "MEC Lab Assistant", room: "Lab", email: "humaun.kabir@iubat.edu", phone: "8801768890620" },
    { name: "Md. Nizam Uddin sarkar", designation: "Lab Demonstrator", dept: "BS Ag Lab Assistant", room: "159", email: "mnsarkar@iubat.edu", phone: "01913783555" },
    { name: "Polash Sharma", designation: "Lab Demonstrator", dept: "PHY Lab Assistant", room: "1105,1109", email: "polash.sharma@iubat.edu", phone: "01751389627" },
    { name: "Mithun Kumer Mondal", designation: "Chef , BATHM Lab", dept: "Lab Assistant", room: "Lab", email: "m.kumer@iubat.edu", phone: "01990594652" },
    { name: "Tazmin Akter Tithi", designation: "Lab Assistant", dept: "Lab Assistant", room: "1103", email: "tazmin.bsn@iubat.edu", phone: "01773304661" },
    { name: "Md. Al-Faruk", designation: "Lab Demonstrator (Civil Engineering)", dept: "Lab Assistant", room: "155", email: "ma.faruk@iubat.edu", phone: "01928212556" },
    { name: "Mohammad Abdullah Al Mamun", designation: "Lab Demonstrator", dept: "MEC Lab Assistant", room: "Lab", email: "mamamun@iubat.edu", phone: "01521433636" },
    { name: "Md Rakibul Islam", designation: "Lab Demonstrator", dept: "EEE Lab Assistant", room: "157", email: "md.rakib@iubat.edu", phone: "01934544681" },
    { name: "Md.Rayhan Ahamed", designation: "Lab Demonstrator", dept: "Civil Lab Assistant", room: "Civil Lab", email: "rayhan.ahamed@iubat.edu", phone: "01710804757" },
    { name: "Bidyut Datta", designation: "Lab Demonstrator", dept: "Civil Lab Assistant", room: "Civil Lab", email: "bidyut.datta@iubat.edu", phone: "01687400483" },
    { name: "Md.Solieman Shanto", designation: "Lab Assistant", dept: "Lab Assistant", room: "155", email: "mshanto.civillab@iubat.edu", phone: "01730475547" },
    { name: "Md.Abu Bakar", designation: "Lab Assistant", dept: "Lab Assistant", room: "155", email: "abakar.civillab@iubat.edu", phone: "01632986638" },
    { name: "Mozibur Rahman", designation: "Lab Assistant", dept: "Lab Assistant", room: "1203", email: "mozibur.ce@iubat.edu", phone: "01711175563" },
    { name: "Afroja Nur", designation: "Lab Assistant", dept: "Lab Assistant", room: "154", email: "afroja.chem@iubat.edu", phone: "01758326304" },
    { name: "Engr.Toufique Ahmmed", designation: "Lab Assistant", dept: "Lab Assistant", room: "703/701", email: "Toufique.eeelab@iubat.edu", phone: "01779911336" },
    { name: "Tanvir Ahmmed", designation: "Lab Assistant", dept: "Lab Assistant", room: "704/702", email: "tanvir.eeelab@iubat.edu", phone: "01603782944" },
    { name: "Abdullah Al Kafi", designation: "Lab Assistant", dept: "Lab Assistant", room: "159", email: "kafi.lab@iubat.edu", phone: "01624391556" },
    { name: "Ratan Kumar Tarafder", designation: "Lab Assistant", dept: "Lab Assistant", room: "", email: "ratan.melab@iubat.edu", phone: "01914862488" },
    { name: "Md. Abdul Wadud", designation: "Lab Assistant", dept: "Lab Assistant", room: "701/702", email: "wadud.lab@iubat.edu", phone: "01703090336" },
    { name: "Md. Faridul Islam", designation: "Lab Assistant", dept: "Lab Assistant", room: "157", email: "faridul.lab@iubat.edu", phone: "01780555894" },
    { name: "Shatabde Mondal Tithi", designation: "Lab Assistant", dept: "Lab Assistant", room: "1103", email: "tithi.cnlab@iubat.edu", phone: "01952889909" },
    { name: "Antu Nath", designation: "Lab Assistant", dept: "Lab Assistant", room: "", email: "", phone: "01832977093" },
    { name: "Professor Selina Nargis", designation: "Advisor", dept: "Innovation Centre", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Dr. Nayem Hossain", designation: "Associate Professor, Director (IIEC)", dept: "Innovation Centre", room: "NARP RESEARCH LAB", email: "nayem.hossain@iubat.edu", phone: "01913132770" },
    { name: "Dr.Md.Salim Kaiser", designation: "Director Lab & Student Research", dept: "Innovation Centre", room: "818", email: "dkaiser.res@iubat.edu", phone: "01712280843" },
    { name: "Md. Tamzidul Islam", designation: "Officer", dept: "Innovation Centre", room: "Innovation Center", email: "tamzid.inno@iubat.edu", phone: "01301776698" },
    { name: "Nazmul Huda", designation: "Officer", dept: "Innovation Centre", room: "Innovation Center", email: "huda.inno@iubat.edu", phone: "01911980741" },
    { name: "Md. Monir Hosen", designation: "Librarian", dept: "Library", room: "", email: "monir.hosen@iubat.edu", phone: "01745192883" },
    { name: "Mohsina Akthar Jahan", designation: "Assistant Librarian", dept: "Library", room: "", email: "mohsinaaj@iubat.edu", phone: "01816193828" },
    { name: "Khandakar Toufiqul Islam", designation: "Assistant Librarian", dept: "Library", room: "", email: "toufiq.library@iubat.edu", phone: "01843907589" },
    { name: "Md.Mostafa Kamal", designation: "Assistant Librarian", dept: "Library", room: "", email: "mostafa.library@iubat.edu", phone: "01764765986" },
    { name: "Md.Samnan Ali", designation: "Assistant Librarian", dept: "Library", room: "", email: "samnan.library@iubat.edu", phone: "01797635318" },
    { name: "Md. Asaduzzaman", designation: "Assistant Librarian", dept: "Library", room: "", email: "asaduzzaman.library@iubat.edu", phone: "01701094571" },
    { name: "Abul Kalam Azad", designation: "Assistant Librarian", dept: "Library", room: "", email: "akazad@iubat.edu", phone: "01773408963" },
    { name: "Mahfojur Rahman", designation: "Assistant Librarian", dept: "Library", room: "", email: "mahfojur@iubat.edu", phone: "01820850359" },
    { name: "Professor Selina Nargis", designation: "Advisor (BPRO)", dept: "Branding and Public Relations Office", room: "225", email: "selina@iubat.edu", phone: "01819234557" },
    { name: "Md. Alamin Sikder Shihab", designation: "Director", dept: "Branding and Public Relations Office", room: "216", email: "pro@iubat.edu", phone: "01716848003" },
    { name: "Chowdhury Salahuddin Bin Delowar", designation: "Assistant Director (OutreachCommunication)", dept: "Branding and Public Relations Office", room: "216", email: "bpro.outreach@iubat.edu", phone: "01647663589" },
    { name: "Md. Abdul Alim", designation: "Assistant Director (Strategy Development)", dept: "Branding and Public Relations Office", room: "216", email: "bpro.sd@iubat.edu", phone: "01761503716" },
    { name: "S.M Abu Baser", designation: "Officer (Internal Communication)", dept: "Branding and Public Relations Office", room: "216", email: "bpro.icm@iubat.edu", phone: "01719364848" },
    { name: "EkthekharAlam Ope", designation: "Officer (Multimedia)", dept: "Branding and Public Relations Office", room: "216", email: "bpro.multimedia@iubat.edu", phone: "0157020706" },
    { name: "Mst Farjana Yasmin", designation: "Assistant Officer (Content & Copywriting)", dept: "Branding and Public Relations Office", room: "216", email: "bpro.content@iubat.edu", phone: "01701130776" },
    { name: "Mahtab Hossain Nayeem", designation: "Graphic Designer and Video Editor", dept: "Branding and Public Relations Office", room: "216", email: "", phone: "01923060407" },
    { name: "Zakera Khatun", designation: "Deputy Director", dept: "Admission Office", room: "101", email: "zakera.khatun@iubat.edu", phone: "01810030043" },
    { name: "Fazlul Bari", designation: "Admissions Officer", dept: "Admission Office", room: "101", email: "admissions@iubat.edu", phone: "01758300400" },
    { name: "Sharifun Nahar Papon", designation: "Assistant Admission Officer", dept: "Admission Office", room: "101", email: "snpapon@iubat.edu", phone: "01717622521" },
    { name: "Md. Abul Fazal", designation: "Asst.Admission Officer", dept: "Admission Office", room: "101", email: "mafripon@iubat.edu", phone: "01557050180" },
    { name: "Ms.Nasrin Akter", designation: "Assistant Admission Officer", dept: "Admission Office", room: "101", email: "nasrin.akter@iubat.edu", phone: "01733716660" },
    { name: "Rajeshwari Roy", designation: "Assistant Admission Officer", dept: "Admission Office", room: "101", email: "rajeshwari117a@gmail.com", phone: "01303548675" },
    { name: "Md. Yousuf Ali", designation: "Senior Territory Manager", dept: "University Education Extension Unit ( UEEU-KBAD)", room: "115", email: "yousuf@iubat.edu", phone: "01810030047" },
    { name: "Md. Nurul Amin", designation: "Senior Territory Manager", dept: "University Education Extension Unit ( UEEU-KBAD)", room: "115", email: "nurul.amin@iubat.edu", phone: "01926835949" },
    { name: "Diba Sultana Anila", designation: "Information Officer", dept: "University Education Extension Unit ( UEEU-KBAD)", room: "115", email: "diba.sultana@iubat.edu", phone: "01810030046" },
    { name: "Md. Murad Elahi", designation: "Territory Officer", dept: "University Education Extension Unit ( UEEU-KBAD)", room: "115", email: "murad@iubat.edu", phone: "01810030049" },
    { name: "M. Mojibur Rahman", designation: "System Manager", dept: "Automation", room: "421", email: "m.rahman@iubat.edu", phone: "01625111033" },
    { name: "Md. Maruf Hossain", designation: "Programmer", dept: "Automation", room: "421", email: "maruf@iubat.edu", phone: "01918250385" },
    { name: "Kazi Md.Kawsar Rahman", designation: "Programmer", dept: "Automation", room: "421", email: "kawsar@iubat.edu", phone: "01732883882" },
    { name: "Moyeen Khan", designation: "Assistant Engineer", dept: "Construction and Maintenance", room: "211", email: "moyeen.aengr@iubat.edu", phone: "01756789178" },
    { name: "Engr Md. Shahin Mia", designation: "Assistant Engineer & Maintenance in-Charge", dept: "Construction and Maintenance", room: "114", email: "shahin@iubat.edu", phone: "01844459588" },
    { name: "Md. Al Mamun", designation: "Assistant Maintenance Officer", dept: "Construction and Maintenance", room: "114", email: "mamun.maint@iubat.edu", phone: "01685608998" },
    { name: "Selim", designation: "Sound Technician", dept: "Construction and Maintenance", room: "", email: "", phone: "01923423314" },
    { name: "Md. Saidur Rahman", designation: "Campus Supervisor", dept: "Construction and Maintenance", room: "-", email: "", phone: "01918862690" },
    { name: "Md. Mahabub Alam", designation: "Office Staff", dept: "Construction and Maintenance", room: "", email: "md.mahbub15@gmail.com", phone: "01723088813" },
    { name: "Md. Abu Taher", designation: "Office staff", dept: "Construction and Maintenance", room: "", email: "taher82229@gmail.com", phone: "01729182229" },
    { name: "Munsur Helal Miyan", designation: "Mechanical and Electrical Mechanics", dept: "Construction and Maintenance", room: "", email: "", phone: "01716042396" },
    { name: "Md Kamal Sheikh", designation: "Plumber Technician", dept: "Construction and Maintenance", room: "", email: "", phone: "" },
    { name: "Kawsar Bali", designation: "Electric & IT Assistant", dept: "Construction and Maintenance", room: "", email: "", phone: "01710589149" },
    { name: "Md.Selim Reza", designation: "Transportation Coordinator", dept: "Transport Division", room: "", email: "selim.transport@iubat.edu", phone: "01627636939" },
    { name: "Mr.Apu Chandra Dey", designation: "Transport Officer (Automobile)", dept: "Transport Division", room: "Front Offi", email: "apu.dey@iubat.edu", phone: "01685620288" },
    { name: "Md.Anisur Rahman", designation: "Transport Assistant", dept: "Transport Division", room: "Front Offi", email: "anisur.transport@iubat.edu", phone: "01757359581" },
    { name: "Khwaja Muhammed Sultanul Aziz", designation: "Distinguished Professor", dept: "College of Arts and Science", room: "", email: "azizkms@iubat.edu", phone: "01819410315" },
    { name: "Khurshida Khatun", designation: "Sports Director", dept: "College of Arts and Science", room: "213", email: "sports@iubat.edu", phone: "01841565525" },
    { name: "Ashis Adhikary", designation: "Yoga Instructor", dept: "College of Arts and Science", room: "213", email: "yogashis@iubat.edu", phone: "01916496400" },
    { name: "Jesmin Akter", designation: "Yoga Instructor", dept: "College of Arts and Science", room: "213", email: "jesmin.yog@iubat.edu", phone: "01790388017" },
    { name: "Md. Mahmudul Hasan Khan Shawon", designation: "Martial Arts Instructor", dept: "College of Arts and Science", room: "213", email: "shawon.caas@iubat.edu", phone: "01642083822" },
    { name: "Johura Akter Mim", designation: "Martial Arts Instructor", dept: "College of Arts and Science", room: "213", email: "johuramim.caas@iubat.edu", phone: "01318638806" },
    { name: "Mr. AKM Sharfuddin", designation: "Director", dept: "Alumni Office", room: "124", email: "akmsharfuddin@iubat.edu", phone: "01711591517" },
    { name: "Drs Md. Rabiul Islam", designation: "Deputy Registrar", dept: "Alumni Office", room: "226", email: "rabiul@iubat.edu", phone: "01731131164" },
    { name: "Dr.Khandoker Saif Uddin", designation: "Director, IQAC", dept: "IQAC Office", room: "125", email: "kh.saifuddin@iubat.edu", phone: "01716923295" },
    { name: "Dr. Rajib Lochan Das", designation: "Professor & Additional Director IQAC", dept: "IQAC Office", room: "118", email: "dasrajib@iubat.edu", phone: "01771110369" },
    { name: "Prof Dr. Md. Lutfar Rahman", designation: "Deputy Director", dept: "IQAC Office", room: "118", email: "lutfarrahman@iubat.edu", phone: "01715133008" },
    { name: "Mirana Sabir", designation: "Assistant Registrar", dept: "IQAC Office", room: "118", email: "mirana@iubat.edu", phone: "01710129433" },
    { name: "Shaddem Hosan", designation: "Information Officer", dept: "Reception", room: "", email: "shaddem.hosan@iubat.edu", phone: "01714377354" },
    { name: "Md.Shakil Hasan", designation: "Information Officer", dept: "Reception", room: "", email: "shakil_io@iubat.edu", phone: "01890339929" },
    { name: "Kaberi Barua", designation: "Information Officer", dept: "Telephone Exchange (PABX)", room: "PABX", email: "kaberibarua@iubat.edu", phone: "01979475028" },
    { name: "Md. Mizanur Rahman", designation: "Information Officer", dept: "Telephone Exchange (PABX)", room: "PABX", email: "mnmizan.rahman@iubat.edu", phone: "01701071035" },
    { name: "Suraiya Sharmin", designation: "Agriculture Information Officer (Agricultural Call Center)", dept: "Telephone Exchange (PABX)", room: "426", email: "suraiya@iubat.edu", phone: "01682342029" },
    { name: "Md. Shoaib", designation: "Photocopy", dept: "Photocopy", room: "", email: "", phone: "01715048103" },
    { name: "Md. Zakir Hossain", designation: "Lift Operating", dept: "Lift Operating", room: "", email: "", phone: "" },
    { name: "Md. Jahangir Alam 4", designation: "Lift Operating", dept: "Lift Operating", room: "", email: "", phone: "" }
];

// ─── DOM refs ────────────────────────────────────────────
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearBtn');
const cardList = document.getElementById('cardList');
const loadingState = document.getElementById('loadingState');
const errorState = document.getElementById('errorState');
const emptyState = document.getElementById('emptyState');
const rosterWrap = document.getElementById('rosterWrap');
const toast = document.getElementById('toast');
const lastUpdated = document.getElementById('lastUpdated');

const fabToggle = document.getElementById('fabToggle');
const fabPopover = document.getElementById('fabPopover');
const closePopover = document.getElementById('closePopover');

let toastTimer = null;

// ─── helpers ─────────────────────────────────────────────
function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => showToast('Copied!'))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy');
        showToast('Copied!'); } catch (e) { showToast('Could not copy'); }
    document.body.removeChild(ta);
}

function getContactString(e) {
    return `${e.name} | ${e.designation} | ${e.dept} | Room ${e.room} | ${e.email} | ${e.phone}`;
}

function esc(str) {
    const d = document.createElement('div');
    d.textContent = str || '';
    return d.innerHTML;
}

// ─── render cards ────────────────────────────────────────
function render(data) {
    if (!data || data.length === 0) {
        rosterWrap.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');
    rosterWrap.classList.remove('hidden');

    cardList.innerHTML = data.map(e => `
        <div class="employee-card">
            <div class="card-name">${esc(e.name)}</div>
            <div class="card-designation">${esc(e.designation)}</div>
            <div class="card-dept">${esc(e.dept)}</div>
            <div class="card-room"><strong>Room</strong> ${esc(e.room) || '—'}</div>

            <div class="contact-row">
                ${e.email ? `
                    <a href="mailto:${esc(e.email)}" class="contact-chip" aria-label="Email ${esc(e.email)}">
                        <span class="icon">✉</span>
                        <span class="value">${esc(e.email)}</span>
                        <span class="label">· tap to email</span>
                    </a>
                ` : ''}
                ${e.phone ? `
                    <a href="tel:${esc(e.phone)}" class="contact-chip" aria-label="Call ${esc(e.phone)}">
                        <span class="icon">📞</span>
                        <span class="value">${esc(e.phone)}</span>
                        <span class="label">· tap to call</span>
                    </a>
                ` : ''}
            </div>

            <div class="card-actions">
                <button class="copy-btn" data-contact="${esc(getContactString(e))}">📋 Copy</button>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const contact = this.getAttribute('data-contact');
            copyToClipboard(contact);
            this.classList.add('copied');
            setTimeout(() => this.classList.remove('copied'), 1000);
        });
    });
}

// ─── filter ──────────────────────────────────────────────
function filterData(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [...employees];
    return employees.filter(e =>
        e.name.toLowerCase().includes(q) ||
        e.designation.toLowerCase().includes(q) ||
        e.dept.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.phone.includes(q)
    );
}

function updateSearch() {
    const q = searchInput.value;
    const filtered = filterData(q);
    render(filtered);
    clearBtn.classList.toggle('visible', q.length > 0);
}

function clearSearch() {
    searchInput.value = '';
    updateSearch();
    searchInput.focus();
}

// ─── FAB ──────────────────────────────────────────────────
function togglePopover(show) {
    if (show === undefined) {
        fabPopover.classList.toggle('open');
    } else if (show) {
        fabPopover.classList.add('open');
    } else {
        fabPopover.classList.remove('open');
    }
}

fabToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePopover();
});

closePopover.addEventListener('click', () => togglePopover(false));

document.addEventListener('click', (e) => {
    if (fabPopover.classList.contains('open') &&
        !fabPopover.contains(e.target) &&
        !fabToggle.contains(e.target)) {
        togglePopover(false);
    }
});

// ─── init ─────────────────────────────────────────────────
function init() {
    loadingState.classList.remove('hidden');
    errorState.classList.add('hidden');
    rosterWrap.classList.add('hidden');
    emptyState.classList.add('hidden');

    setTimeout(() => {
        loadingState.classList.add('hidden');
        if (employees.length) {
            lastUpdated.textContent = `Updated: ${new Date().toLocaleDateString()}`;
            updateSearch();
        } else {
            errorState.classList.remove('hidden');
            document.getElementById('errorMsg').textContent = 'No employee data available.';
        }
    }, 280);
}

searchInput.addEventListener('input', updateSearch);
clearBtn.addEventListener('click', clearSearch);

document.addEventListener('DOMContentLoaded', init);
