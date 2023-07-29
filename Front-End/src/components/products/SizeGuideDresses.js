import { Col, Row, Table } from 'react-bootstrap';

function SizeGuideDresses() {
  return (
    <Row className="r-gap-30">
      <Col xs={12}>
        <div className="tab__header">
          <span>فستان حجم الرسم البياني (بوصة)</span>
        </div>
        {/*========== Table ==========*/}
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th colSpan="5" className="text-center ">
                <h6>الفساتين</h6>
                <span>المقاس بالبوصة</span>
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            <tr>
              <th>المقاس</th>
              <th>العمر</th>
              <th>الصدر</th>
              <th>الوسط</th>
              <th>الفخاذ</th>
            </tr>
            <tr>
              <td>xs</td>
              <td>0</td>
              <td>31"-32"</td>
              <td>24"-25"</td>
              <td>34"-35"</td>
            </tr>
            <tr>
              <td>s</td>
              <td>2-4</td>
              <td>33"-34"</td>
              <td>26"-27"</td>
              <td>36"-37"</td>
            </tr>
            <tr>
              <td>m</td>
              <td>6-8</td>
              <td>35"-36"</td>
              <td>28"-29"</td>
              <td>38"-39"</td>
            </tr>
            <tr>
              <td>l</td>
              <td>10-12</td>
              <td>37"-39"</td>
              <td>30"-32"</td>
              <td>40"-42"</td>
            </tr>
            <tr>
              <td>xl</td>
              <td>14</td>
              <td>40"-42"</td>
              <td>33"-35"</td>
              <td>43"-45"</td>
            </tr>
          </tbody>
        </Table>
        {/*========== Table ==========*/}
      </Col>
      <Col xs={12}>
        <div className="tab__header">
          <span>فستان حجم الرسم البياني (سنتيمتر)</span>
        </div>
        {/*========== Table ==========*/}
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th colSpan="5" className="text-center ">
                <h6>الفساتين</h6>
                <span>المقاس بالسنتيمتر</span>
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            <tr>
              <th>المقاس</th>
              <th>العمر</th>
              <th>الصدر</th>
              <th>الوسط</th>
              <th>الفخاذ</th>
            </tr>
            <tr>
              <td>xs</td>
              <td>0</td>
              <td>78.7-81.2</td>
              <td>60.9-63.5</td>
              <td>86.3-88.9</td>
            </tr>
            <tr>
              <td>s</td>
              <td>2-4</td>
              <td>83.8-86.3</td>
              <td>66-68.5</td>
              <td>91.4-93.9</td>
            </tr>
            <tr>
              <td>m</td>
              <td>6-8</td>
              <td>88.9-91.4</td>
              <td>71.1-73.6</td>
              <td>96.5-99</td>
            </tr>
            <tr>
              <td>l</td>
              <td>10-12</td>
              <td>93.9-99</td>
              <td>76.2-81.2</td>
              <td>101.6-106.6</td>
            </tr>
            <tr>
              <td>xl</td>
              <td>14</td>
              <td>101.6-106.6</td>
              <td>83.8-88.9</td>
              <td>109.2-114.3</td>
            </tr>
          </tbody>
        </Table>
        {/*========== Table ==========*/}
      </Col>
    </Row>
  );
}

export default SizeGuideDresses;
