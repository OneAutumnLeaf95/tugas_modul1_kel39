const final = async () => {
    await output();
    await akhir ();
}
const nama = () => {
    namaSaya = document.getElementById("namaSaya").value;
    (namaSaya == "" || !namaSaya) ?
      alert ("Data Masih Kosong!!!") || console.log("Silakan isi Nama anda terlebih dahulu!") : final()
}
const akhir = () => 
    console.log ("Verifying...");

const output = () => {
    hasilnama= namaSaya;
    setTimeout( () => console.log ("Sdr. "+hasilnama) ,1500) ;
    setTimeout( () => console.log ("Selamat Datang di Console Log") ,1000) ;
    setTimeout( () => console.log ("Hehehe"), 2000);
    setTimeout( () => console.log (".") ,100) ;
    setTimeout( () => console.log (".") ,300) ;
    setTimeout( () => console.log (".") ,200) ;
}
const nim = () => {
    nimSaya = document.getElementById("nimSaya").value;
    (nimSaya == "" || !nimSaya) ?
      alert ("Data Masih Kosong!!!") || console.log("Silakan isi NIM anda terlebih dahulu!") : hasilnim()
}
const hasilnim = () => {
    nomor=nimSaya
    setTimeout( () => console.log (nomor) ,1000);
    setTimeout( () => console.log ("NIM Anda adalah") ,500) ;
}