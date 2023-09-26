import jsPDF from 'jspdf';
import { currentDateTime } from '../utilization';

const PDFGeneratorBirth = (data) => {
    if (data) {
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text('Surat Keterangan Kelahiran', 105, 15, 'center');

        doc.setFontSize(10);
        doc.text('Yang bertanda tangan di bawah ini Kepala Desa Ketajen, Kecamatan Gedangan, Kabupaten Sidoarjo.', 15, 25);
        doc.text('Dengan ini menerangkan bahwa:', 15, 35);

        doc.text(`\ta. Nama : ${data?.name}`, 15, 45);
        doc.text(`\tb. Tempat/Tanggal Lahir : ${data?.birthplace}`, 15, 55);
        doc.text(`\tc. Alamat : ${data?.address}`, 15, 65);
        doc.text(`\td. Jenis Kelamin : ${data?.gender.replace(/_/g, ' ')}`, 15, 75);
        doc.text(`\te. Pekerjaan : ${data?.job}`, 15, 85);

        doc.text('Adalah anak dari :', 15, 95);
        doc.text(`\tNama ayah kandung : ${data?.fatherName}`, 15, 105);
        doc.text(`\tNama ibu kandung : ${data?.motherName}`, 15, 115);
        doc.text(`\tAnak ke : ${data?.childOrder}`, 15, 125);

        doc.text('Demikian surat keterangan kelahiran ini dibuat untuk dapat dipergunakan seperlunya.', 15, 135);

        doc.text(`Sidoarjo, ${currentDateTime}`, 160, 155, { align: 'center' });
        doc.text('Kepala Desa', 160, 180, { align: 'center' });

        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
    }
};
export default PDFGeneratorBirth;