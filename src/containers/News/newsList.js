import React from 'react'

//components
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

function NewsList(props) {

    const { data } = props;

    React.useEffect(() => {
        console.log("news api : ", data);
    }, [data])

    const imgHolder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAZlBMVEX///8AAACZmZm+vr7Dw8OJiYnp6ene3t67u7vh4eHm5uaTk5Ps7OwLCwsdHR24uLgWFhZpaWnLy8t+fn4bGxsmJibX19enp6dSUlJbW1uFhYWgoKBzc3OxsbEwMDA2NjYRERE+Pj4I55hqAAACTUlEQVR4nO3c7W6CMBSAYZmKHyCoTJ1zc+7+b3JAQQu0WJMZc+j7/MNmJrw5JQpmoxEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMzi96eI5q9+tSczYNnmb/61JyNn9Zg/OpTc5Y32Gwn/227EdZg+oS3ndKABiMaFGhAgwINaFDwtMF+u78deNngVH4+PtSHPjb4qL4kHKtjDxtk129Kn+oF/xostK+Ly/KVITRIl4+8yUlroC4JA2gwD5LwgTf50hpk5SvyG6T5uawemIRMa6DeTXwDdX9t7T4J353bR9Ib1LcY390nQWugXhDeIL2ezsp5EtLWGAhvoN9odr8wHqq/+K6ORTdIA93aeTsss/PunMX1oeQG7ccN7tuhSXCD7hOXnu0Q/yysa3IbpJ0EPZ8T4nzRGkFsA/NzN8vnhHBXBLJFkNrA9ujRuB3iRC1aIghtYNoI1gtjuK4XzRFkNuh7AN2ZhHIjVIGMEUQ2sE9BeU1oXhjjtb5oiiCxwb2fITS2Q5g0Fw2/thDY4P4vMbTtEO/ai91JkNegfyNUk1Bvh9iw2IkgrUE0cUgQBBc1CWFnCopA7e0grcGvU4LqfkJ3IxgnQVoDZ/l2iC+2xeYkDLZBkGzP9kCNSRhug356BF8b6NvB2wbaJPjb4BbB4wbX7eBzg3oSvG5QTYLfDdTHZr8bqO3ge4NiO3jfIJ8EGgRhRIPkSIMCDWhAAxrQgAY0oAENaEADGtCABsNowP8C4X/CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwgD8LsRyFBE1PQAAAAABJRU5ErkJggg=="

    return (
        <>
            <Container>
                <Row>
                    {data.map(item => (
                        <Col md={4}>
                            <Card className="mb-4">
                                <CardImg top width="100%" src={item.urlToImage ? item.urlToImage : imgHolder} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h5">{item.title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{item.author}</CardSubtitle>
                                    <CardText>{item.description}</CardText>
                                    <a className="btn btn-outline-primary"
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer">
                                        Read more
                                    </a>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default NewsList