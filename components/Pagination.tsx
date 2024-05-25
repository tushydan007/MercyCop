import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import _ from "lodash";

type TenderData = {
  pageSize: number;
  currentPage: number;
  tenders: User[];
  handlePagination: (num: number) => void;
  handlePrevious: () => void;
  handleNext: () => void;
};

export function PaginationDemo({
  pageSize,
  currentPage,
  tenders,
  handlePagination,
  handlePrevious,
  handleNext,
}: TenderData) {
  const pageSum = tenders?.length / pageSize;
  const pageNumbers = _.range(1, pageSum + 1);

  return (
    <div className="py-20">
      {" "}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={handlePrevious} />
          </PaginationItem>
          {pageNumbers.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={page === currentPage}
                className={page === currentPage ? "bg-blue-300" : ""}
                onClick={() => {
                  handlePagination(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
