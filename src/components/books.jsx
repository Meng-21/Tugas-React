import { useState } from "react"; // hook React untuk state
import styles from "../styles/books.module.css";
import booksData from "../Utils/books"; // data daftar buku

function Books() {
  // useState menyimpan data buku yang tampil di halaman
  const [bookList, setBookList] = useState(booksData);

  // fungsi untuk menambahkan buku baru ke state
  const handleAddBook = () => {
    const nextId = Math.max(...bookList.map((book) => book.id)) + 1;
    const newBook = {
      id: nextId,
      title: `Buku Baru ${nextId}`,
      author: "Penulis Baru",
      year: 2025,
      description: "Buku tambahan yang baru ditambahkan.",
    };

    // update state bookList dengan menambahkan item baru
    setBookList((current) => [...current, newBook]);
  };

  return (
    <section className={styles.books}>
      <h2 className={styles.title}>Daftar Buku</h2>
      <button
        type="button"
        className="btn btn-success my-2 m-2 "
        onClick={handleAddBook} // event click memanggil hook untuk update state
      >
        Tambah Buku
      </button>

      <div className={styles.cardContainer}>
        {bookList.map((book) => (
          <div key={book.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{book.title}</h3>
            <p className={styles.cardDescription}>{book.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Books;
