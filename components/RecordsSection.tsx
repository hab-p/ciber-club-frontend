'use client';

export default function RecordsSection() {
  return (
    <section id="records" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-500">Récords Históricos</h2>

        <div className="w-full bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden p-8">
          <iframe 
            src="https://docs.google.com/spreadsheets/d/1NxMF-R5BR9aYLuAxq1QFlOY26v7UIT0blwIhf1K1xPg/preview?widget=true&headers=false"
            className="w-full h-[80vh] rounded-lg"
            frameBorder="0"
            allowFullScreen
            title="Récords Históricos Spreadsheet"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
