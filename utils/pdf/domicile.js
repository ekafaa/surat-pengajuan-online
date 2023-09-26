import jsPDF from 'jspdf';
import { currentDateTime } from '../utilization';

const PDFGeneratorDomicile = (data) => {
    if (data) {
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text("SURAT KETERANGAN DOMISILI", 105, 15, { align: 'center' });

        doc.setFontSize(10);
        doc.text("Yang bertanda tangan dibawah ini ketua RT 003 RW 012 Perumahan Puri Surya jaya Cluster Athena, Gedangan,", 15, 30);
        doc.text("Sidoarjo, Jawa Timur dengan ini menerangkan bahwa :", 15, 40);

        doc.text(`\tNama: ${data?.name}`, 15, 55);
        doc.text(`\tTempat/Tanggal Lahir: ${data?.birthplace}`, 15, 65);
        doc.text(`\tJenis Kelamin: ${data?.gender}`, 15, 75);
        doc.text(`\tAgama: ${data?.religion}`, 15, 85);
        doc.text(`\tStatus Perkawinan: ${data?.status.replace(/_/g, ' ')}`, 15, 95);
        doc.text(`\tPekerjaan: ${data?.job}`, 15, 105);
        doc.text(`\tAlamat: ${data?.address}`, 15, 115);
        doc.text(`\tWarga Negara: ${data?.country}`, 15, 125);

        doc.text("Orang tersebut diatas, adalah benar-benar warga kami dan berdomisili di Perumahan Puri Surya Jaya Cluster Athena,", 15, 140);
        doc.text("Gedangan, Sidoarjo, Jawa Timur. Surat keterangan ini dibuat sebagai kelengkapan kepengurusan lebih lanjut.", 15, 150);
        doc.text("Demikian surat keterangan ini kami buat, untuk dapat dipergunakan sebagaimana mestinya.", 15, 170)

        doc.text(`Sidoarjo, ${currentDateTime}`, 160, 190, { align: 'center' });
        doc.text("Ketua RT/RW", 160, 215, { align: 'center' });


        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
    }
};
export default PDFGeneratorDomicile;