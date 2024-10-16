class Buku {
    constructor(judul, penulis, tahunTerbit, genre) {
        this.judul = judul;
        this.penulis = penulis;
        this.tahunTerbit = tahunTerbit;
        this.genre = genre;
    }
}

let daftarBuku = [];

// Fungsi untuk menambahkan buku
function tambahBuku(buku) {
    daftarBuku.push(buku);
    tampilkanDaftarBuku();
}

// Fungsi untuk menampilkan daftar buku
function tampilkanDaftarBuku() {
    const daftarBukuElement = document.getElementById("daftarBuku");
    daftarBukuElement.innerHTML = ""; // Kosongkan daftar buku terlebih dahulu

    if (daftarBuku.length === 0) {
        daftarBukuElement.textContent = "Tidak ada buku";
    } else {
        daftarBuku.forEach((buku, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${index + 1}. ${buku.judul} oleh ${buku.penulis} (${buku.tahunTerbit})`;
            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", () => {
                // Panggil fungsi editBuku dengan index buku
                editBuku(index);
            });
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Hapus";
            deleteButton.addEventListener("click", () => {
                // Panggil fungsi hapusBuku dengan index buku
                hapusBuku(index);
            });
            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);
            daftarBukuElement.appendChild(listItem);
        });
    }
}

// Fungsi untuk mengedit buku
function editBuku(index) {
    const buku = daftarBuku[index];

    // Buat form edit
    const editForm = document.createElement("form");
    editForm.id = "editForm";

    // Tambahkan input untuk setiap properti buku
    const judulInput = document.createElement("input");
    judulInput.type = "text";
    judulInput.value = buku.judul;
    // Tambahkan input untuk properti lainnya (penulis, tahunTerbit, genre) dengan cara yang sama

    // Tambahkan tombol simpan dan batal
    const simpanButton = document.createElement("button");
    simpanButton.textContent = "Simpan";
    simpanButton.addEventListener("click", () => {
        // Simpan perubahan data buku
        buku.judul = judulInput.value;
        // Update properti buku lainnya
        tampilkanDaftarBuku();
        editForm.remove(); // Hapus form edit setelah disimpan
    });

    const batalButton = document.createElement("button");
    batalButton.textContent = "Batal";
    batalButton.addEventListener("click", () => {
        editForm.remove(); // Hapus form edit tanpa menyimpan perubahan
    });

    // Tambahkan semua elemen ke form edit
    editForm.appendChild(judulInput);
    // Tambahkan elemen input lainnya
    editForm.appendChild(simpanButton);
    editForm.appendChild(batalButton);

    // Ganti list item dengan form edit
    const daftarBukuElement = document.getElementById("daftarBuku");
    daftarBukuElement.replaceChild(editForm, daftarBukuElement.children[index]);
}

// Fungsi untuk menghapus buku
function hapusBuku(index) {
    daftarBuku.splice(index, 1);
    tampilkanDaftarBuku();
}

// Mendapatkan elemen form
const addBookForm = document.getElementById('addBookForm');

// Menambahkan event listener untuk form submit
addBookForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah form submit default

    // Mengambil nilai dari input form
    const judul = document.getElementById('judul').value;
    const penulis = document.getElementById('penulis').value;
    const tahunTerbit = document.getElementById('tahunTerbit').value; 
    const genre = document.getElementById('genre').value;

    // Membuat objek buku baru
    const bukuBaru = new Buku(judul, penulis, tahunTerbit, genre);

    // Menambahkan buku ke daftar
    tambahBuku(bukuBaru);

    // Mengosongkan form
    addBookForm.reset();
});