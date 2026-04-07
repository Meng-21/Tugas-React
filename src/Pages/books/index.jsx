import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import BooksComponent from "../../components/books";
import List from "../../components/shared/List";

export default function Books() {   //menampilkan halaman buku dengan menggunakan komponen Header, List, BooksComponent, dan Footer
    return (
        <>
            <Header />
            <List/>
            <BooksComponent />
            <Footer />
        </>
    )
}