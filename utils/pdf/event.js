import jsPDF from 'jspdf';
import { currentDateTime } from '../utilization';
import moment from 'moment';

const PDFGeneratorEvent = (data) => {
    if (data) {
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text('Surat Izin Acara', 105, 15, 'center');

        doc.text('Yth Bapak/Ibu RW Athena', 15, 30);
        doc.text('Di tempat', 15, 40);
        doc.text('Dalam rangka untuk mengadakan acara di lingkungan perumahan khususnya cluster Athena,', 15, 50);
        doc.text('dengan ini saya bermaksud akan mengadakan acara yang akan dilaksanakan pada :', 15, 60)

        doc.text(`\tHari : ${data.day}`, 15, 75);
        doc.text(`\tTanggal : ${moment(data.date).format('DD MM YYYY')}`, 15, 85);
        doc.text(`\tPenanggung jawab Acara : ${data.eventManager}`, 15, 95);
        doc.text(`\tTempat : ${data.place}`, 15, 105);
        doc.text(`\tPukul : ${data.time}`, 15, 115);

        doc.text('Sehubungan dengan ini saya selaku penanggung jawab dari kegiatan acara di atas memohon izin dari', 15, 130);
        doc.text('Bapak/Ibu RW Perum Puri Surya Jaya Cluster Athena agar memperbolehkan kami membuat acara', 15, 140);
        doc.text('Demikian surat ini saya buat atas perhatian dan kerjasamanya saya ucapkan terima kasih.', 15, 150);

        doc.text(`Sidoarjo, ${currentDateTime}`, 160, 180, { align: 'center' });
        doc.text('Ketua RT/RW', 160, 215, { align: 'center' });


        const pdfBlob = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
    }
};
export default PDFGeneratorEvent;