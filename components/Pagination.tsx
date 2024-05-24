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
};

export function PaginationDemo({
  pageSize,
  currentPage,
  tenders,
  handlePagination,
}: TenderData) {
  const pageSum = tenders?.length / pageSize;
  const pageNumbers = _.range(1, pageSum + 1);

  return (
    <div className="py-20">
      {" "}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          {pageNumbers.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={() => {
                  handlePagination(page);
                }}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
