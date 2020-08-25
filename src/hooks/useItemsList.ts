import { useState, useEffect } from 'react';

import { GetItemsRequest } from '../types/api';

const DEFAULT_ROW_PER_PAGE = 10;

interface Result<T> {
  currentItems: T[];
  onItemCreate: () => void;
  total: number;
  page: number;
  loading: boolean;
  rowsPerPage: number;
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePage: (event: unknown, newPage: number) => void;
  onChangeItem: () => void;
}

interface Props {
  request: GetItemsRequest;
  itemName: string;
  rowsPerPage?: number;
}

function useItemsList<T>(props: Props): Result<T> {
  const { request, itemName, rowsPerPage: initRowsPerPage = DEFAULT_ROW_PER_PAGE } = props;
  const [items, setItems] = useState<T[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initRowsPerPage);
  const start = page * rowsPerPage;
  const end = Math.min(start + rowsPerPage, total);

  const getItems = async () => {
    const { json, error } = await request(start, rowsPerPage);

    if (!error) {
      setItems([...items.slice(0, start), ...json[itemName]]);
      setTotal(json.pagination.total);
    }

    setLoading(false);
  };

  const onChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const onChangeItem = () => {
    getItems();
  };

  const onChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const onItemCreate = () => {
    setItems([]);
    setPage(0);
    getItems();
  };

  useEffect(() => {
    if (items[end - 1]) return;

    getItems();
    // eslint-disable-next-line
  }, [page, rowsPerPage]);

  const currentItems = items.slice(start, end);

  return {
    currentItems,
    loading,
    page,
    total,
    onItemCreate,
    onChangeRowsPerPage,
    onChangePage,
    rowsPerPage,
    onChangeItem,
  };
}

export default useItemsList;
