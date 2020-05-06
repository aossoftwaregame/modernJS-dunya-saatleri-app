const url="http://worldtimeapi.org/api/timezone";

var konumlar=document.querySelector('.konumlar');
var saatText=document.querySelector('.saatText');
var saat=document.querySelector('.saat');
var button=document.querySelector('button');
let html;

async function konumlarGetir(){

    await axios.get(url).then(res=>{

        res.data.forEach(konum=>{
            html+=`<option>${konum}</option>`
        });
        konumlar.innerHTML+=html;
        
    });

}

konumlarGetir();

async function SaatiGetir(konum){

    await axios.get(`${url}/${konum}`).then(res=>{

        // console.log(res.data.datetime);
        saatText.innerHTML=moment(res.data.datetime).format('MM.YYYY - h:mm:ss a');
        saat.style.display="block";
    });
}


button.addEventListener('click',()=>{
    let konum=konumlar.options[konumlar.selectedIndex].value;

    if(konum!='Konum Seç'){
        SaatiGetir(konum);
    }else{
        alert('Lütfen Konum Seçiniz');
    }
    
    
})