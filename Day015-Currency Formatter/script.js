let btn = document.getElementById("btn");

let rupees = document.getElementById("output1");
let dollars = document.getElementById("output2");
let yen = document.getElementById("output3");

let formatter1 = new Intl.NumberFormat(
    "en-IN",
    {style: "currency", currency: "INR"}
);
let formatter2 = new Intl.NumberFormat(
    "en-US",
    {style: "currency", currency: "USD"}
)
let formatter3 = new Intl.NumberFormat(
    "ja-JP",
    {style: "currency", currency: "JPY"}
)

btn.addEventListener("click", ()=>{
    let amount = document.getElementById("amount").value;

    rupees.innerHTML = `<span>Indian Rupees:</span>${formatter1.format(amount)}`;
    dollars.innerHTML = `<span>US Dollars:</span>${formatter2.format(amount)}`;
    yen.innerHTML = `<span>Japanese Yen:</span>${formatter3.format(amount)}`;
});