// 🌙 NOČNÍ MŮRA

function nocniMura() {
    document.getElementById("uklidneni").classList.remove("hidden");
}

function zpet() {
    document.getElementById("uklidneni").classList.add("hidden");
}


// 🫂 OBJETÍ

const objetiZpravy = [

    "Kdybych teď mohl, tak tě jen obejmu a chvíli nepustím. 🤍",

    "Představ si, že jsem právě vedle tebe a dávám ti ten největší možný hug. 🫂",

    "Nemusíš být teď statečná. Jen se zachumlej a chvíli odpočívej. 🤍",

    "Jsi moje Cariño Mío. A i když nás teď dělí vzdálenost, pořád na tebe myslím. 🌙",

    "Kdybych tam byl, neřekl bych vůbec nic. Jen bych tě objal. 🫂❤️"

];

function objeti() {
    document.getElementById("objeti").classList.remove("hidden");
}

function dalsiObjeti() {

    const nahodnaZprava =
        objetiZpravy[Math.floor(Math.random() * objetiZpravy.length)];

    document.getElementById("objetiText").textContent =
        nahodnaZprava;
}

function zpetObjeti() {
    document.getElementById("objeti").classList.add("hidden");
}


// 💌 HEZKÉ VZKAZY

const hezkeZpravy = [

    "Cariño Mío 🤍 možná si někdy ani neuvědomuješ, jak moc pro mě znamenáš. Nejsi pro mě jen někdo, s kým si píšu nebo trávím čas. Jsi člověk, na kterého myslím i ve chvílích, kdy bych měl myslet úplně na něco jiného. Mám rád tvoje maličkosti, tvoje zprávy, tvoje reakce i chvíle, kdy spolu jen tak jsme. A chtěl bych, abys nikdy nepochybovala o tom, že jsi pro mě výjimečná. ❤️",

    "Někdy si říkám, jaké mám vlastně štěstí, že tě mám. Nemusíš být dokonalá. Mám rád tebe takovou, jaká jsi. Tvoje nálady, tvoje smíchy, tvoje bláznivé momenty i chvíle, kdy potřebuješ jen obejmout. 🤍",

    "Kdybys teď byla vedle mě, asi bych ti toho chtěl říct strašně moc. Ale možná by nakonec stačilo jen říct: jsem rád, že tě mám. Protože někdy jsou ty nejjednodušší věty zároveň ty nejdůležitější. 🫂❤️",

    "Miluju na tobě všechny ty malé věci, kterých si možná sama ani nevšímáš. Způsob, jakým píšeš, jak reaguješ, jak se směješ a jak dokážeš obyčejný den změnit v něco, na co budu dlouho vzpomínat. 💕",

    "Nemusíš být perfektní. Nemusíš být pořád veselá. Nemusíš nic dokazovat. Stačí být prostě ty. A právě tu holku mám tak rád. 🤍",

    "Kdybych mohl uložit jeden pocit do malé krabičky a dát ti ho pokaždé, když ti nebude dobře, byl by to pocit, který mám, když vím, že tě mám ve svém životě. 💌",

    "Možná jsme od sebe někdy daleko, ale některé lidi vzdálenost prostě nezmenší. Stačí jedna tvoje zpráva a najednou mám pocit, že jsi mnohem blíž. 🌙❤️",

    "Nechci, aby tahle stránka byla jen obyčejná stránka. Chci, aby to bylo malé místo, kam můžeš přijít, když ti budu chybět, když se probudíš po špatném snu nebo když prostě budeš potřebovat trochu lásky. 🤍",

    "Jsem opravdu rád, že právě ty jsi součástí mého života. A jestli si máš z celé téhle stránky zapamatovat jedinou věc, tak právě tohle. Cariño Mío. 🤍"

];

function hezkyVzkaz() {
    document.getElementById("hezky").classList.remove("hidden");
}

function dalsiVzkaz() {

    const nahodnyVzkaz =
        hezkeZpravy[Math.floor(Math.random() * hezkeZpravy.length)];

    document.getElementById("hezkyText").textContent =
        nahodnyVzkaz;
}

function zpetVzkaz() {
    document.getElementById("hezky").classList.add("hidden");
}


// 🎲 NÁHODNÁ POMOC

const nahodneZpravy = [

    {
        ikona: "🫂",
        nadpis: "Teď potřebuješ obejmout.",
        text: "Tak pojď sem. Kdybych mohl, právě teď bych tě pořádně objal a chvíli nepustil. 🤍"
    },

    {
        ikona: "💌",
        nadpis: "Teď potřebuješ něco hezkého.",
        text: "Cariño Mío, jen malé připomenutí: jsi pro mě opravdu důležitá. Nemusíš být perfektní. Buď prostě ty. ❤️"
    },

    {
        ikona: "🌙",
        nadpis: "Teď potřebuješ trochu klidu.",
        text: "Zpomal. Na chvíli vypni všechno, co nemusíš řešit právě teď. Je noc. Teď můžeš jen odpočívat. 🌙"
    },

    {
        ikona: "😂",
        nadpis: "Teď potřebuješ úsměv.",
        text: "Oficiální diagnóza: akutní nedostatek mého otravování. Léčba: jeden úsměv. 😂❤️"
    },

    {
        ikona: "❤️",
        nadpis: "Teď potřebuješ připomenout jednu věc.",
        text: "Ať je dnešek jakýkoliv, tvoje hodnota se tím nemění. A pořád mi na tobě záleží. 🤍"
    },

    {
        ikona: "✨",
        nadpis: "Malé překvapení.",
        text: "Nevím přesně, co teď potřebuješ. Ale vytvořil jsem tohle místo právě pro chvíle, kdy to sama nevíš. Takže si vezmi jedno malé virtuální objetí. 🫂✨"
    }

];

function nevimCoPotrebuju() {

    const nahodna =
        nahodneZpravy[Math.floor(Math.random() * nahodneZpravy.length)];

    document.getElementById("nahoda").classList.remove("hidden");

    document.querySelector(".random-icon").textContent =
        nahodna.ikona;

    document.getElementById("nahodaNadpis").textContent =
        nahodna.nadpis;

    document.getElementById("nahodaText").textContent =
        nahodna.text;
}


// 😂 VTIPY

const vtipneZpravy = [

    "🚨 POZOR 🚨 Byla zjištěna kritická úroveň roztomilosti. Doporučené řešení: úsměv. 😂❤️",

    "Právě jsi odemkla tajnou schopnost: smát se úplným kravinám, protože jinak by tenhle web neměl smysl. 😭😂",

    "Kdybych byl teď vedle tebe, pravděpodobně bych tě rozesmíval tak dlouho, dokud bys mi neřekla, ať už jsem konečně zticha. 😂",

    "Oficiální statistika: 100 % lidí, kteří právě čtou tuto zprávu, jsou minimálně trochu úžasní. Zdroj: já. 📊😂",

    "Měla bys jít spát. Ale nejdřív ještě jedno tlačítko. A potom další. A potom další. A pak se divit, proč je půlnoc. 😭🌙",

    "Tvoje dnešní mise: usmát se. Pokud jsi to udělala, gratuluju. Pokud ne, klikni znovu. 😂❤️",

    "Breaking news: Cariño Mío byla právě přistižena při čtení velmi důležité zprávy. Odborníci doporučují pokračovat ve čtení a hlavně se usmívat. 📰😂",

    "Víš, co je horší než špatný vtip? Tenhle web. A víš, co je horší než tenhle web? To, že ho stejně budeš dál používat. 😂🤍"

];

function vtipnaCast() {
    document.getElementById("vtipnaCast").classList.remove("hidden");
}

function dalsiVtip() {

    const nahodnyVtip =
        vtipneZpravy[Math.floor(Math.random() * vtipneZpravy.length)];

    document.getElementById("vtipnyText").textContent =
        nahodnyVtip;
}


// 🌙 DOBROU NOC

const nocniZpravy = [

    "Tak už zavři oči, Cariño Mío. 🌙 Nemusíš už nic řešit. Dnešek může na chvíli počkat. Teď je čas jen odpočívat. 🤍",

    "Přeju ti noc plnou klidu a krásných snů. A jestli se ti bude chtít usmát, vzpomeň si, že někde existuje jeden člověk, který ti vytvořil celou stránku jen proto, aby ti udělal radost. ❤️",

    "Dobrou noc, moje Cariño Mío. 🌙 Zachumlej se a dovol si prostě odpočívat. Zítra je nový den. 🤍",

    "Než usneš, chci, abys věděla jednu malou věc: jsem opravdu rád, že tě mám ve svém životě. 🫂✨",

    "A poslední zpráva před spaním: dobrou noc. ❤️ Doufám, že se ráno probudíš s úsměvem. 🌙"

];

function dobrouNoc() {
    document.getElementById("dobrouNoc").classList.remove("hidden");
}

function dalsiNocniZprava() {

    const nahodnaNocniZprava =
        nocniZpravy[Math.floor(Math.random() * nocniZpravy.length)];

    document.getElementById("nocniText").textContent =
        nahodnaNocniZprava;
}


// 🎙️ HLAS

function hlasovaZprava() {
    document.getElementById("hlas").classList.remove("hidden");
}


// 🤫 TAJNÁ ČÁST

const tajneZpravy = [

    "Jestli jsi tohle našla, tak ti musím říct jednu věc... jsi pro mě opravdu strašně důležitá. 🤍",

    "Tohle místo je schované jen proto, abych ti mohl připomenout, že na tebe myslím i ve chvílích, kdy ti to zrovna neříkám. 🌙",

    "Zasloužíš si spoustu krásných chvil, smíchu, klidu a lidí, kteří tě mají opravdu rádi. 🫂",

    "A teď už opravdu tajná věc... kdyby tahle stránka dokázala dát skutečné objetí, právě teď bys jedno dostala. 💖",

    "Poslední tajemství: tahle stránka existuje hlavně proto, že mi na tobě záleží. 💌"

];

function tajnaCast() {
    document.getElementById("tajnaCast").classList.remove("hidden");
}

function dalsiTajne() {

    const nahodneTajne =
        tajneZpravy[Math.floor(Math.random() * tajneZpravy.length)];

    document.getElementById("tajnaText").textContent =
        nahodneTajne;
}