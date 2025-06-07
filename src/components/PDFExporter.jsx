import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// ✅ Import Firebase Analytics and logEvent
import { analytics } from '@/firebase'; // adjust the path if needed
import { logEvent } from 'firebase/analytics';

const PDFExporter = ({ ResumeComponent }) => {
  const resumeRef = useRef(null);
  const { toast } = useToast();
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    const element = resumeRef.current;
    if (!element) {
      toast({
        title: 'Error',
        description: 'Resume content not found.',
        variant: 'destructive',
      });
      return;
    }

    setIsExporting(true);

    try {
      const images = element.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(img =>
          img.complete
            ? Promise.resolve()
            : new Promise(res => {
                img.onload = res;
                img.onerror = res;
              })
        )
      );

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#fff',
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const pxPerMm = canvasWidth / pdfWidth;
      const pageHeightPx = pdfHeight * pxPerMm;

      let pageY = 0;
      let pageCount = 0;

      while (pageY < canvasHeight) {
        const sliceHeight = Math.min(pageHeightPx, canvasHeight - pageY);

        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvasWidth;
        pageCanvas.height = sliceHeight;
        const ctx = pageCanvas.getContext('2d');

        ctx.drawImage(
          canvas,
          0,
          pageY,
          canvasWidth,
          sliceHeight,
          0,
          0,
          canvasWidth,
          sliceHeight
        );

        const imgData = pageCanvas.toDataURL('image/jpeg', 1.0);
        const imgHeight = (sliceHeight * pdfWidth) / canvasWidth;

        if (pageCount > 0) pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, imgHeight);

        pageY += sliceHeight;
        pageCount++;
      }

      pdf.save('Harsh_Resume.pdf');

      // ✅ Log custom event to Firebase Analytics
      logEvent(analytics, 'resume_downloaded', {
        method: 'PDF Export',
        timestamp: Date.now(),
      });

      toast({
        title: 'Success',
        description: 'Your resume has been downloaded!',
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Failed to Export',
        description: 'An error occurred while generating the PDF.',
        variant: 'destructive',
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <div
        ref={resumeRef}
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          width: '794px',
          background: '#fff',
          color: '#000',
        }}
      >
        <ResumeComponent />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6 p-8 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg"
      >
        <div className="space-y-2">
          <FileText className="w-16 h-16 text-green-600 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800">Download Your Resume</h2>
          <p className="text-gray-600">
            Your professional resume is ready! Download it as a high-quality PDF.
          </p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={exportToPDF}
            disabled={isExporting}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isExporting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Generating PDF...
              </>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                GET PDF Resume
              </>
            )}
          </Button>

          <div className="text-sm text-gray-500 space-y-1">
            <p>✓ A4 format with professional layout</p>
            <p>✓ High-quality PDF ready for printing</p>
            <p>✓ ATS-friendly formatting</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PDFExporter;
