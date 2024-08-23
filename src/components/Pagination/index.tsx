import { PaginationProps } from "@/interfaces/props.interface";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import ReactPaginate from "react-paginate";

const linkClassName = "p-1 h-6 w-6 flex items-center justify-center text-xs";
const controlClassName = "border";

export const Pagination = (props: PaginationProps) => {
  const itemsPerPage = props.itemsPerPage || 10;

  const handlePageClick = (event: { selected: number }) => {
    if (props.onPageChange) {
      props.onPageChange(event.selected + 1);
    }
  };

  return props.total ? (
    <ReactPaginate
      pageCount={Math.ceil(props.total / itemsPerPage)}
      onPageChange={handlePageClick}
      nextLabel={<MdArrowForward />}
      previousLabel={<MdArrowBack />}
      activeClassName="text-blue-500 font-semibold border-blue-500"
      className="flex items-center gap-2 justify-end"
      pageClassName={controlClassName}
      previousClassName={controlClassName}
      nextClassName={controlClassName}
      pageLinkClassName={linkClassName}
      nextLinkClassName={linkClassName}
      previousLinkClassName={linkClassName}
      pageRangeDisplayed={3}
    />
  ) : null;
};
