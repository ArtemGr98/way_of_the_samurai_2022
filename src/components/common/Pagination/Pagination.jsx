import styled from "styled-components";

const PaginationItem = styled.span`
  margin-right: 10px;
  cursor: pointer;
  font-weight: ${props => (props.children === props.currentPage) && "bold"};
  border: ${props => (props.children === props.currentPage) && "1px solid"};
  padding: 2px;
`

const Pagination = (props) => {
    const totalPages = Math.ceil(props.totalUsers / props.countUsers)
    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const curP = props.currentPage
    let curPF = ((curP - 4) < 0) ? 0 : curP - 4
    if (totalPages - 4 <= curP) {
        curPF = totalPages - 8
    }

    const curPL = ((curP - 4) < 0) ? curP + 4 - (curP - 4) : curP + 4

    const slicedPages = pages.slice(curPF, curPL)

    return (<div>
        {(curP > 4) && <span>
                <PaginationItem
                    key={1}
                    currentPage={curP}
                    onClick={() => props.onChangePage(1)}>1</PaginationItem>
            </span>
        }
        {(curP > 5) &&
            <PaginationItem> ... </PaginationItem>
        }
        {slicedPages.map(page => <PaginationItem
            key={page}
            currentPage={props.currentPage}
            onClick={() => props.onChangePage(page)}>{page}</PaginationItem>)
        }
        {(curP < totalPages - 5) &&
            <PaginationItem> ... </PaginationItem>
        }
        {(curP < totalPages - 4) && <span>
            <PaginationItem
                key={totalPages}
                currentPage={curP}
                onClick={() => props.onChangePage(totalPages)}>{totalPages}</PaginationItem>
            </span>
        }
    </div>)

}

export default Pagination