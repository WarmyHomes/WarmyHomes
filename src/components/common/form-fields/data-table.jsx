import React, { useState } from 'react';

const AdvertTypeDataTable = ({ 
  dataSource, 
  selectionMode, 
  selection, 
  error }) => {
  const [selectedItems, setSelectedItems] = useState(selection ?? []);

  if (!dataSource) throw new Error('dataSource attribute is required');
  if (!Array.isArray(dataSource)) throw new Error('dataSource value must be an array');

  const handleSelectedItems = (id) => {
    let arr = [...selectedItems];

    if (!arr.includes(id)) {
      arr.push(id);
    } else {
      arr = arr.filter((item) => item !== id);
    }
    setSelectedItems(arr);
  };

  return (
    <>
      <div className={`card ${error ? 'border-danger' : ''}`}>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                </tr>
              </thead>
              <tbody>
                {dataSource.length === 0 && (
                  <tr>
                    <td colSpan={2}>No records found</td>
                  </tr>
                )}
                {dataSource.map((advertType, index) => (
                  <tr
                    key={advertType.id}
                    onClick={() =>
                      selectionMode && selectionMode !== 'none'
                        ? handleSelectedItems(advertType.id)
                        : null
                    }
                    className={
                      selectionMode && selectionMode !== 'none' && selectedItems.includes(advertType.id)
                        ? 'table-primary'
                        : ''
                    }
                    style={{ cursor: selectionMode && selectionMode !== 'none' ? 'pointer' : '' }}
                  >
                    <td>{index + 1}</td>
                    <td>{advertType.title}</td> {/* title alanını kullanarak veriyi listeliyoruz */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {error && <div className="p-3 text-danger">{error}</div>}
      </div>
    </>
  );
};

export default AdvertTypeDataTable;
