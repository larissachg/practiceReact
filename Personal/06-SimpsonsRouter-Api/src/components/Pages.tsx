interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pages = ({ setPage, totalPages, page }: Props) => {
  return (
    <>
      <div className="flex justify-center gap-3 mt-7">
        <button
          className="px-4 py-2 font-bold transition-all rounded-md bg-slate-500 hover:bg-amber-500 disabled:cursor-not-allowed"
          onClick={() => {
            setPage((page) => (page > 1 ? page - 1 : page));
          }}
          disabled={page === 1}
        >
          Prev
        </button>

        <button
          className="px-4 py-2 font-bold transition-all rounded-md bg-slate-500 hover:bg-amber-500 disabled:bg-slate-700 disabled:cursor-not-allowed"
          onClick={() => {
            setPage((page) => page + 1);
          }}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};
