const getTimes= async(region)=>{
    try{
        
        const today=await fetch(`https://islomapi.uz/api/present/day?region=andijon`)
        const result = await today.json();
        const cards = $$('.ttl');
        const {
            times:{
            asr,
            
            hufton
            ,
            peshin
            ,
            quyosh
            ,
            shom_iftor
            ,
            tong_saharlik
        }
    } = result;
    cards[0].innerHTML=tong_saharlik;
    cards[1].innerHTML=quyosh
    cards[2].innerHTML=peshin
    cards[3].innerHTML=asr
    cards[4].innerHTML=shom_iftor
    cards[5].innerHTML=hufton
    
    $('#calendar').innerHTML=result.date
    // $("select").addEventListener("change",(e)=>{
    //     return e=region
    // })
}
catch (err){
    console.log(err);

}
}
getTimes()
const $=(selector)=>{
    return document.querySelector(selector)
}
const $$=(selector)=>{
    return document.querySelectorAll(selector)
}





