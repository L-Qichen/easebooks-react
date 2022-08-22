import { useEffect, useState } from "react";
import { useUpdate } from "./useUpdate";

type RecordInfo = {
  tagIds: number[];
  note: string;
  category: '+' | '-';
  amount: string;
  createdAt: string; // ISO 8601
}

type newRecordInfo = Omit<RecordInfo, 'createdAt'>

const useRecords = () => {
  const [records, setRecords] = useState<RecordInfo[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (newRecord: newRecordInfo) => {
    if (parseFloat(newRecord.amount) <= 0) {
      alert("Please input the amount.");
      return false;
    };
    if (newRecord.tagIds.length === 0) {
      alert("Please select at least one tag.");
      return false;
    };
    const record = { ...newRecord, createdAt: (new Date()).toISOString() };
    setRecords([...records, record]);
    return true;
  };

  return { records, addRecord };
};

export { useRecords };
