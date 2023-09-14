
const langSec = document.querySelector('.langWrap');
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector('.title');
const textDes = document.querySelector('.description');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        langSec.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('language');

        textTitle.textContent = data[attr].title;
        textDes.textContent = data[attr].description;
    });
});



const data ={
    "english": {
        "title":"Hello World",
        "description":"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.  Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance."
    },
    "hindi": {
        "title":"हैलो वर्ल्ड",
        "description":"हाइपरटेक्स्ट मार्कअप लैंग्वेज या HTML वेब ब्राउज़र में प्रदर्शित होने के लिए डिज़ाइन किए गए दस्तावेज़ों के लिए मानक मार्कअप लैंग्वेज है। यह वेब सामग्री के अर्थ और संरचना को परिभाषित करता है। इसे अक्सर कैस्केडिंग स्टाइल शीट्स (सीएसएस) और जावास्क्रिप्ट जैसी स्क्रिप्टिंग भाषाओं जैसी प्रौद्योगिकियों द्वारा सहायता प्रदान की जाती है। वेब ब्राउज़र वेब सर्वर से या स्थानीय स्टोरेज से HTML दस्तावेज़ प्राप्त करते हैं और दस्तावेज़ों को मल्टीमीडिया वेब पेजों में प्रस्तुत करते हैं। HTML एक वेब पेज की संरचना को शब्दार्थ रूप से वर्णित करता है और मूल रूप से इसके स्वरूप के लिए संकेत शामिल करता है।"
    },
    "gujarati": {
        "title":"હેલો વર્લ્ડ",
        "description":"હાઇપરટેક્સ્ટ માર્કઅપ લેંગ્વેજ અથવા HTML એ વેબ બ્રાઉઝરમાં પ્રદર્શિત કરવા માટે રચાયેલ દસ્તાવેજો માટેની પ્રમાણભૂત માર્કઅપ ભાષા છે. તે વેબ સામગ્રીનો અર્થ અને માળખું વ્યાખ્યાયિત કરે છે. તે ઘણીવાર કેસ્કેડીંગ સ્ટાઇલ શીટ્સ (CSS) અને જાવાસ્ક્રિપ્ટ જેવી સ્ક્રિપ્ટીંગ લેંગ્વેજ જેવી ટેક્નોલોજીઓ દ્વારા મદદ કરે છે. વેબ બ્રાઉઝર્સ વેબ સર્વર અથવા સ્થાનિક સ્ટોરેજમાંથી HTML દસ્તાવેજો મેળવે છે અને દસ્તાવેજોને મલ્ટીમીડિયા વેબ પૃષ્ઠોમાં રેન્ડર કરે છે. HTML વેબ પૃષ્ઠની રચનાને અર્થપૂર્ણ રીતે વર્ણવે છે અને તેના દેખાવ માટે મૂળ રૂપે શામેલ સંકેતો છે."
    }
};