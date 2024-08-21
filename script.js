function hitung() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    const operasi = document.getElementById("operasi").value;
    let hasil;

    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            hasil = angka1 / angka2;
            break;
    }

    document.getElementById("hasil").textContent = "Hasil: " + hasil;
}