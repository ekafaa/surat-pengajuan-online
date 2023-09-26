import jsPDF from 'jspdf';
import { currentDateTime } from '../utilization';

const PDFGeneratorIntroductory = (data) => {
    if (data) {
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text('Surat Pengantar', 105, 15, { align: 'center' });

        doc.text('Saya yang bertanda tangan dibawah ini atas nama ketua RW Perumahan Puri Surya Jaya', 15, 30);
        doc.text('Cluster Athena, Kecamatan Gedangan, Kelurahan Gedangan, menerangkan bahwa:', 15, 40)

        doc.text(`\tNama : ${data.name}`, 15, 55);
        doc.text(`\tNIK : ${data.nik}`, 15, 65);
        doc.text(`\tTempat/Tanggal Lahir: ${data.birthplace}`, 15, 75);
        doc.text(`\tPekerjaan : ${data.job}`, 15, 85);
        doc.text(`\tAgama : ${data.religion}`, 15, 95);
        doc.text(`\tStatus Pernikahan : ${data.status.replace(/_/g, ' ')}`, 15, 105);
        doc.text(`\tWarga Negara : ${data.country}`, 15, 115);
        doc.text(`\tAlamat : ${data.address}`, 15, 125);
        doc.text(`\tMaksud dan Keperluan : ${data.report}`, 15, 135);

        doc.text('Demikian surat pengantar ini kami berikan guna proses tindak lanjut ke tingkat selanjutnya', 15, 150);

        doc.text(`Sidoarjo, ${currentDateTime}`, 160, 165, { align: 'center' });
        doc.text('Ketua RT/RW', 160, 200, { align: 'center' });


        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
    }
};
export default PDFGeneratorIntroductory;