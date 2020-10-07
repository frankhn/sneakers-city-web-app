import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

interface IPaginationProps {
    pages: number
    page: number
    total: number
    handler(page: number): any
}

const pagination = ({ pages, page, handler }: IPaginationProps) => {

    const next = page + 1 > pages ? pages : page + 1

    const previous = page - 1 <= 0 ? 1 : page - 1

    const paginationDigits = () => {
        let result = []
        for (let i = 1; i <= pages; i++) {
            result.push(i)
        }
        return result.map((page, i) => <PaginationItem key={i}><PaginationLink onClick={() => handler(Number(page))}>{page}</PaginationLink></PaginationItem>)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }} >
            <Pagination aria-label="Page navigation">
                <PaginationItem>
                    <PaginationLink first onClick={() => handler(1)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous onClick={() => handler(Number(previous))} />
                </PaginationItem>
                {
                    paginationDigits()
                }
                <PaginationItem>
                    <PaginationLink next onClick={() => handler(next)} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last onClick={() => handler(pages)} />
                </PaginationItem>
            </Pagination>
        </div>
    )
}

export default pagination