import React from 'react'
import useFetch from '../../hooks/useFetch'
import { Container, Row, Col } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';

//components
import Loader from '../../components/Loader';

function Table() {

    const { data: news, isLoading, requestError } = useFetch();

    function rankFormatter(cell, row, rowIndex) {
        return (
            <span>{rowIndex + 1}.</span>
        );
    }

    const columns = [
        {
            text: 'Rank',
            formatter: rankFormatter,
        },
        {
            dataField: 'author',
            text: 'Author Name'
        },
        {
            dataField: 'title',
            text: 'Title'
        }
    ];

    return (
        <>
            {isLoading && <Loader />}
            {news &&
                <Container>
                    <Row className="my-4">
                        <Col md={9}>
                            <BootstrapTable keyField='id'
                                data={news ? news : []} columns={columns}
                                striped
                                hover
                            />
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}

export default Table