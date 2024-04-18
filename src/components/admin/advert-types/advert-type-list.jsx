import DataTable, { Column } from "@/components/common/form-fields/data-table";
import React from "react";
import AdvertTypeToolbar from "./advertType-toolbar";

const AdvertTypeList = ({ data }) => {
  // Veri kaynağından gelen veriyi alıyoruz
  const { title } = data;

  // Satır araç çubuğu bileşenini oluşturmak için kullanılacak fonksiyon
  const handleToolbar = (row) => {
    return <AdvertTypeToolbar row={row} />;
  };

  return (
    <div className="container">
      <h2>AdvertType List</h2>
      <DataTable
        title="AdvertType List"
        dataSource={[{ title }]} // Sadece başlık bilgisini içeren bir obje dizi olarak belirtiliyor
        dataKey="title" // Verinin benzersiz kimliğini temsil eden alanın adı
        pagination={false} // Sayfalama devre dışı bırakılıyor
      >
        {/* Sütunlar */}
        <Column index={true} title="#" /> {/* Sıra numarası sütunu */}
        <Column title="Title" field="title" /> {/* Başlık sütunu */}
        <Column title="Tools" template={handleToolbar} /> {/* Aracılar sütunu */}
      </DataTable>
    </div>
  );
};

export default AdvertTypeList;
