import { Col, Row, Table } from 'react-bootstrap';

function SizeGuideDenim() {
  return (
    <Row className="r-gap-30">
      <Col xs={12}>
        <div className="tab__header">
          <span>القطن حجم الرسم البياني (بوصة)</span>
        </div>
        {/*========== Table ==========*/}
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th colSpan="5" className="text-center">
                <h6>القطن</h6>
                <span>المقاس بالبوصة</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th>حجم الوسط</th>
              <th>المقاسات الصغيره</th>
              <th>الوسط</th>
              <th>اسفل الوسط</th>
              <th>الفخاذ </th>
            </tr>
            <tr>
              <td>24</td>
              <td>0</td>
              <td>24"-25"</td>
              <td>26"-27"</td>
              <td>32"-33"</td>
            </tr>
            <tr>
              <td>25</td>
              <td>1</td>
              <td>25"-26"</td>
              <td>28"-29"</td>
              <td>33"-34"</td>
            </tr>
            <tr>
              <td>26</td>
              <td>3</td>
              <td>26"-27"</td>
              <td>30"-31"</td>
              <td>34"-35"</td>
            </tr>
            <tr>
              <td>27</td>
              <td>5</td>
              <td>27"-28"</td>
              <td>31"-32"</td>
              <td>35"-36"</td>
            </tr>
            <tr>
              <td>28</td>
              <td>7</td>
              <td>28"-29"</td>
              <td>32"-33"</td>
              <td>36"-37"</td>
            </tr>
            <tr>
              <td>29</td>
              <td>9</td>
              <td>29"-30"</td>
              <td>33"-34"</td>
              <td>37"-38"</td>
            </tr>
            <tr>
              <td>30</td>
              <td>11</td>
              <td>30"-31"</td>
              <td>34"-35"</td>
              <td>38"-39"</td>
            </tr>
            <tr>
              <td>31</td>
              <td>13</td>
              <td>31"-33"</td>
              <td>35"-36"</td>
              <td>39"-40"</td>
            </tr>
            <tr>
              <td>32</td>
              <td>15</td>
              <td>32"-33"</td>
              <td>36"-37"</td>
              <td>40"-41"</td>
            </tr>
          </tbody>
        </Table>
        {/*========== Table ==========*/}
      </Col>
      <Col xs={12}>
        <div className="tab__header">
          <span>القطن حجم الرسم البياني (سنتيمتر)</span>
        </div>
        {/*========== Table ==========*/}
        <Table striped bordered responsive hover>
          <thead>
            <tr>
              <th colSpan="5" className="text-center ">
                <h6>القطن</h6>
                <span>المقاس بالسنتيمتر</span>
              </th>
            </tr>
          </thead>
          <tbody className=" text-center">
            <tr>
              <th>حجم الوسط</th>
              <th>المقاسات الصغيره</th>
              <th>الوسط</th>
              <th>اسفل الوسط</th>
              <th>الفخاذ </th>
            </tr>
            <tr>
              <td>24</td>
              <td>0</td>
              <td>60.9-63.5</td>
              <td>66-68.5</td>
              <td>81.2-83.8</td>
            </tr>
            <tr>
              <td>25</td>
              <td>1</td>
              <td>63.5-66</td>
              <td>71.1-73.6</td>
              <td>83.8-86.3</td>
            </tr>
            <tr>
              <td>26</td>
              <td>3</td>
              <td>66-68.5</td>
              <td>76.2-78.7</td>
              <td>86.3-88.9</td>
            </tr>
            <tr>
              <td>27</td>
              <td>5</td>
              <td>68.5-71.1</td>
              <td>78.7-81.2</td>
              <td>88.9-91.4</td>
            </tr>
            <tr>
              <td>28</td>
              <td>7</td>
              <td>71.1-73.6</td>
              <td>81.2-83.8</td>
              <td>91.4-93.9</td>
            </tr>
            <tr>
              <td>29</td>
              <td>9</td>
              <td>73.6-76.2</td>
              <td>83.8-86.3</td>
              <td>93.9-96.5</td>
            </tr>
            <tr>
              <td>30</td>
              <td>11</td>
              <td>76.2-78.7</td>
              <td>86.3-88.9</td>
              <td>96.5-99</td>
            </tr>
            <tr>
              <td>31</td>
              <td>13</td>
              <td>78.7-81.2</td>
              <td>88.9-91.4</td>
              <td>99-101.6</td>
            </tr>
            <tr>
              <td>32</td>
              <td>15</td>
              <td>81.2-83.8</td>
              <td>91.4-93.9</td>
              <td>101.6-104.1</td>
            </tr>
          </tbody>
        </Table>
        {/*========== Table ==========*/}
      </Col>
    </Row>
  );
}

export default SizeGuideDenim;
