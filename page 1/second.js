// Function to open the popup
function openPopup() {
    document.getElementById('popupOverlay').classList.add('active');
  }

  // Function to close the popup
  function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
   }



// change language 
const translations = {
    "english": {
        "hello": "Hello!",
        "payNow": "Pay Now",
        "payEMI": "Pay EMI",
        "payingForTheWholeGroup": "1. Paying for the whole group",
        "payingForOneself": "2. Paying for oneself",
        "payingForAllExceptOneMember": "3. Paying for all except one member",
        "payingForOneselfWithPartialPayment": "4. Pay for oneself with a partial payment",
        "home": "Home",
        "pay": "Pay",
        "vcm": "VCM",
        "receipt": "Receipt",
        "chatbot": "ChatBot"
    },
    "hindi": {
        "hello": "नमस्ते!",
        "payNow": "अभी भुगतान करें",
        "payEMI": "ईएमआई का भुगतान करें",
        "payingForTheWholeGroup": "1. पूरे समूह के लिए भुगतान करना",
        "payingForOneself": "2. अपने लिए भुगतान करना",
        "payingForAllExceptOneMember": "3. एक सदस्य को छोड़कर सभी के लिए भुगतान करना",
        "payingForOneselfWithPartialPayment": "4. आंशिक भुगतान के साथ अपने लिए भुगतान करें",
        "home": "मुख्य पृष्ठ",
        "pay": "भुगतान करें",
        "vcm": "वीसीएम",
        "receipt": "रसीद",
        "chatbot": "चैटबॉट"
    },
    "bengali": {
        "hello": "কেমন আছো!",
        "payNow": "এখনই भुगतान করুন",
        "payEMI": "ইএমআই পরিশোধ করুন",
        "payingForTheWholeGroup": "1. পুরো গ্রুপের জন্য পরিশোধ করা",
        "payingForOneself": "2. নিজের জন্য পরিশোধ করা",
        "payingForAllExceptOneMember": "3. একজন সদস্য ছাড়া সবার জন্য পরিশোধ করা",
        "payingForOneselfWithPartialPayment": "4. আংশিক পরিশোধের সাথে নিজের জন্য পরিশোধ করা",
        "home": "হোম",
        "pay": "পরিশোধ করুন",
        "vcm": "ভিসিএম",
        "receipt": "রসিদ",
        "chatbot": "চ্যাটবট"
    }
};

let currentLanguage = "english";



function toggleLanguage() {
    let selectedLanguage = document.getElementById('languageSwitch').value;
    currentLanguage = selectedLanguage;

    // Update all translatable elements on the page
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        element.textContent = translations[currentLanguage][key];
    });
}