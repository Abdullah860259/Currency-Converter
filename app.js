let img1 = document.querySelector("#img")
const dropdown = document.querySelectorAll("select")
// const img = document.querySelector
const btn = document.querySelector("#btn")
const fromC = document.querySelector(".from select")
const toC = document.querySelector(".to select")
let msg = document.querySelector(".msg")
let amount = document.querySelector("#amount")
console.log(amount.innerText)



let rate = {
    "USD": 1,
    "AED": 3.6725,
    "AFN": 71.0895,
    "ALL": 93.1555,
    "AMD": 387.9673,
    "ANG": 1.79,
    "AOA": 864.6977,
    "ARS": 902.67,
    "AUD": 1.5118,
    "AWG": 1.79,
    "AZN": 1.6999,
    "BAM": 1.8276,
    "BBD": 2,
    "BDT": 117.4753,
    "BGN": 1.8279,
    "BHD": 0.376,
    "BIF": 2866.492,
    "BMD": 1,
    "BND": 1.3531,
    "BOB": 6.93,
    "BRL": 5.3662,
    "BSD": 1,
    "BTN": 83.5676,
    "BWP": 13.6839,
    "BYN": 3.2751,
    "BZD": 2,
    "CAD": 1.3739,
    "CDF": 2809.4706,
    "CHF": 0.891,
    "CLP": 917.744,
    "CNY": 7.2691,
    "COP": 4018.589,
    "CRC": 527.9593,
    "CUP": 24,
    "CVE": 103.0384,
    "CZK": 23.0904,
    "DJF": 177.721,
    "DKK": 6.975,
    "DOP": 59.3952,
    "DZD": 134.7147,
    "EGP": 47.7025,
    "ERN": 15,
    "ETB": 57.7131,
    "EUR": 0.9345,
    "FJD": 2.2402,
    "FKP": 0.7883,
    "FOK": 6.975,
    "GBP": 0.7878,
    "GEL": 2.868,
    "GGP": 0.7883,
    "GHS": 15.1616,
    "GIP": 0.7883,
    "GMD": 64.9458,
    "GNF": 8589.5557,
    "GTQ": 7.771,
    "GYD": 209.2104,
    "HKD": 7.8117,
    "HNL": 24.7194,
    "HRK": 7.0407,
    "HTG": 132.5864,
    "HUF": 371.6188,
    "IDR": 16443.2921,
    "ILS": 3.7227,
    "IMP": 0.7883,
    "INR": 83.5676,
    "IQD": 1309.9152,
    "IRR": 42109.0952,
    "ISK": 139.5704,
    "JEP": 0.7883,
    "JMD": 155.7978,
    "JOD": 0.709,
    "JPY": 157.3795,
    "KES": 128.3935,
    "KGS": 86.9577,
    "KHR": 4131.7106,
    "KID": 1.5118,
    "KMF": 459.725,
    "KRW": 1381.0969,
    "KWD": 0.3067,
    "KYD": 0.8333,
    "KZT": 451.9155,
    "LAK": 21777.9669,
    "LBP": 89500,
    "LKR": 303.688,
    "LRD": 193.931,
    "LSL": 18.3861,
    "LYD": 4.8582,
    "MAD": 9.9815,
    "MDL": 17.7849,
    "MGA": 4457.0586,
    "MKD": 57.1574,
    "MMK": 2100.2046,
    "MNT": 3378.5351,
    "MOP": 8.0461,
    "MRU": 39.4079,
    "MUR": 46.5841,
    "MVR": 15.4561,
    "MWK": 1744.4515,
    "MXN": 18.502,
    "MYR": 4.7136,
    "MZN": 63.8558,
    "NAD": 18.3861,
    "NGN": 1507.6889,
    "NIO": 36.801,
    "NOK": 10.6809,
    "NPR": 133.7082,
    "NZD": 1.6288,
    "OMR": 0.3845,
    "PAB": 1,
    "PEN": 3.7767,
    "PGK": 3.8679,
    "PHP": 58.707,
    "PKR": 278.4039,
    "PLN": 4.0813,
    "PYG": 7499.4008,
    "QAR": 3.64,
    "RON": 4.6474,
    "RSD": 109.2624,
    "RUB": 89.2758,
    "RWF": 1316.8461,
    "SAR": 3.75,
    "SBD": 8.4619,
    "SCR": 14.7779,
    "SDG": 510.6821,
    "SEK": 10.5369,
    "SGD": 1.3531,
    "SHP": 0.7883,
    "SLE": 22.9677,
    "SLL": 22967.6967,
    "SOS": 571.7,
    "SRD": 31.7371,
    "SSP": 1836.5754,
    "STN": 22.8943,
    "SYP": 12899.5283,
    "SZL": 18.3861,
    "THB": 36.6778,
    "TJS": 10.7297,
    "TMT": 3.5002,
    "TND": 3.1415,
    "TOP": 2.3341,
    "TRY": 32.7497,
    "TTD": 6.7658,
    "TVD": 1.5118,
    "TWD": 32.3603,
    "TZS": 2601.0693,
    "UAH": 40.6542,
    "UGX": 3718.785,
    "UYU": 39.1429,
    "UZS": 12583.402,
    "VES": 36.4176,
    "VND": 25422.7056,
    "VUV": 119.9607,
    "WST": 2.722,
    "XAF": 612.9667,
    "XCD": 2.7,
    "XDR": 0.7606,
    "XOF": 612.9667,
    "XPF": 111.5112,
    "YER": 250.3977,
    "ZAR": 18.3861,
    "ZMW": 26.2176,
    "ZWL": 3.4803
}



for (select of dropdown) {
    if (select.name === "To") {

        for (const curCode in countryList) {
            let newoption = document.createElement("option")
            newoption.innerText = curCode
            newoption.innerHTML = curCode
            select.append(newoption)
            if (select.name === "From" && curCode === "USD") {
                newoption.selected = "selected"
            } else if (select.name === "To" && curCode === "PKR") {
                newoption.selected = "selected"
            }
        }
        select.addEventListener(("change"), (evt) => {
            updateflag(evt)
        })
    }
}

let updateflag = (element) => {
    console.log("Hello")
    console.log(element)
    let curCode = element.value
    let conCode = countryList[toC.value]
    let newScr = `https://flagsapi.com/${conCode}/flat/64.png`
    console.log(toC.value)
    img1.src = newScr
    update();
}

btn.addEventListener(("click"), (evt) => {
  update(evt);
  evt.preventDefault();
})


function update(){
    if (amount.value == "" && amount.value < "0") {
        amount.value = 1;
    }
    let toCu = toC.value;
    let ratetoCu = rate[toCu];
    console.log(ratetoCu)
    console.log(amount.value)
    console.log(fromC.value)
    console.log(toC.value)
    let finalres = ratetoCu * amount.value
    if(finalres > 0 || finalres < 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){        
        msg.innerText = `${amount.value} ${fromC.value} = ${finalres} ${toC.value}`
    }else{
        msg.innerText = "Sorry! Required Currency Is Not Available Yet"
    }
}

