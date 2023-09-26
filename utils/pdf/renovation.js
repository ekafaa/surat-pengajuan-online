import jsPDF from 'jspdf';
import { currentDateTime } from '../utilization';

const PDFGeneratorRenovation = (data) => {
    if (data) {
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text('Surat Izin Renovasi', 105, 15, { align: 'center' });

        doc.text('Kepada Yth.', 15, 30);
        doc.text('Pengurus Lingkungan', 15, 40);
        doc.text('Perumahan Puri Surya Jaya Cluster Athena, Gedangan, Sidoarjo.', 15, 50);

        doc.text('Dengan Hormat,', 15, 65);
        doc.text('Yang bertanda tangan dibawah ini, kami dari pihak pelaksana', 15, 75);
        doc.text(`\tNama : ${data.name}`, 15, 85);
        doc.text(`\tAlamat : ${data.address}`, 15, 95);
        doc.text(`\tNo. Hp : ${data.noHp}`, 15, 105);

        doc.text('Dengan ini memberitahukan bahwa kami akan melaksanakan pembangunan atau renovasi rumah', 15, 120);
        doc.text(`tinggal di alamat : ${data.renovAddress}`, 15, 130);

        doc.text('Sehubungan dengan hal tersebut kami mohon izin kepada warga setempat, untuk melaksanakan', 15, 140);
        doc.text('pembangunan atau renovasi rumah tersebut dan kami berjanji untuk menaati peraturan yang ', 15, 150)
        doc.text('telah ditentukan.', 15, 160)
        
        doc.text('Kami mohon maaf atas gangguan yang akan ditimbulkan selama pelaksanaan pembangunan atau', 15, 175);
        doc.text('renovasi rumah tersebut, atas pengertiannya kami selaku pelaksana mengucapkan terimakasih.', 15, 185)

        doc.text(`Sidoarjo, ${currentDateTime}`, 160, 200, { align: 'center' });
        doc.text('Mengetahui Pelaksana', 160, 230, { align: 'center' });


        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
    }
};
export default PDFGeneratorRenovation;