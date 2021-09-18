import '../global.css'

import {Button, Col, Input, Row} from 'antd'

function render() {
    return (
        <div className="search-bar">
            <Row gutter={[10, 10]}>
                <Col>
                    <Input />
                </Col>
                <Col>
                    <Button>快速比较</Button>
                </Col>
            </Row>
        </div>
    );
}

export default render;
